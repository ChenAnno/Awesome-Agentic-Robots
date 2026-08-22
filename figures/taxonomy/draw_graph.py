"""Generate a tidy taxonomy preview and a citation-aware LaTeX figure.

Outputs:
  taxonomy.dot  Graphviz source (useful for debugging the layout)
  taxonomy.svg  visual preview
  taxonomy.pdf  visual preview
  taxonomy.tex  Forest/TikZ source to input from the paper

The LaTeX output is the publication version. Unlike an included PDF, it keeps
citation hyperlinks connected to the bibliography of the main document.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import shutil
import subprocess
import sys
import tempfile
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import yaml


@dataclass
class Paper:
    name: str
    key: str | None = None


@dataclass
class TaxonomyNode:
    node_id: str
    label: str
    level: int
    path: tuple[str, ...] = field(default_factory=tuple)
    kind: str = "normal"
    papers: list[Paper] = field(default_factory=list)
    children: list["TaxonomyNode"] = field(default_factory=list)


class IdFactory:
    def __init__(self) -> None:
        self.value = 0

    def new(self, prefix: str = "node") -> str:
        self.value += 1
        return f"{prefix}_{self.value}"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--yaml", default="taxonomy.yaml", help="taxonomy data")
    parser.add_argument("--style", default="style.json", help="style settings")
    parser.add_argument("--output", default="taxonomy", help="output basename")
    parser.add_argument(
        "--bib",
        default="refs.bib",
        help="BibTeX file used to validate citation keys",
    )
    return parser.parse_args()


def load_data(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as stream:
        data = yaml.safe_load(stream)
    if not isinstance(data, dict) or not data:
        raise ValueError(f"{path} must contain a non-empty mapping")
    return data


def load_style(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as stream:
        return json.load(stream)


def normalise_paper(item: Any) -> Paper:
    if isinstance(item, str):
        # Legacy entries remain valid, but have no BibTeX link.
        match = re.fullmatch(r"\s*(.*?)\s*(\[\d+\])?\s*", item)
        assert match is not None
        return Paper(match.group(1))
    if not isinstance(item, dict):
        raise ValueError("Each paper must be a string or a name/key mapping")
    # title/cite are accepted temporarily for backwards compatibility, while
    # the public YAML format is deliberately just name + key.
    name = item.get("name", item.get("title"))
    key = item.get("key", item.get("cite"))
    if name is None:
        raise ValueError("Each paper mapping must contain 'name'")
    if key is not None and not re.fullmatch(r"[^\s,{}]+", str(key)):
        raise ValueError(f"Invalid BibTeX key: {key!r}")
    return Paper(
        name=str(name),
        key=str(key) if key is not None else None,
    )


def build_nodes(
    data: dict[str, Any],
    ids: IdFactory,
    level: int = 0,
    parent_path: tuple[str, ...] = (),
) -> list[TaxonomyNode]:
    result: list[TaxonomyNode] = []
    for name, children in data.items():
        if name == "papers":
            if not isinstance(children, list):
                raise ValueError("'papers' must be a list")
            result.append(
                TaxonomyNode(
                    ids.new(),
                    "papers",
                    level,
                    path=parent_path + ("papers",),
                    kind="papers",
                    papers=[normalise_paper(item) for item in children],
                )
            )
            continue

        current_path = parent_path + (str(name),)
        node = TaxonomyNode(ids.new(), str(name), level, path=current_path)
        if children is not None:
            if not isinstance(children, dict):
                raise ValueError(f"Children of {name!r} must be a mapping")
            node.children = build_nodes(children, ids, level + 1, current_path)
        result.append(node)
    return result


def dot_quote(value: Any) -> str:
    text = str(value).replace("\\", "\\\\").replace('"', '\\"')
    return f'"{text}"'


def dot_attrs(attributes: dict[str, Any]) -> str:
    return ", ".join(f"{key}={dot_quote(value)}" for key, value in attributes.items())


def paper_lines(papers: list[Paper], per_line: int) -> list[list[Paper]]:
    return [papers[index : index + per_line] for index in range(0, len(papers), per_line)]


def dot_paper_label(papers: list[Paper], per_line: int) -> str:
    rows: list[str] = []
    for line in paper_lines(papers, per_line):
        fragments: list[str] = []
        for paper in line:
            # DOT is retained for layout debugging only. Citation numbers are
            # intentionally absent because only LaTeX/BibTeX can assign them.
            fragments.append(html.escape(paper.name))
        rows.append(f'<TR><TD ALIGN="LEFT">{", ".join(fragments)}</TD></TR>')
    return '<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0">' + "".join(rows) + "</TABLE>>"


def node_override(style: dict[str, Any], node: TaxonomyNode) -> dict[str, Any]:
    path = "/".join(node.path)
    override = style.get("node_overrides", {}).get(path, {})
    if not isinstance(override, dict):
        raise ValueError(f"node_overrides[{path!r}] must be a mapping")
    return override


def node_level_key(node: TaxonomyNode) -> str:
    return "papers" if node.kind == "papers" else str(min(node.level, 3))


def branch_override(style: dict[str, Any], node: TaxonomyNode) -> dict[str, Any]:
    """Return the most-specific Roadmap-branch style for this node and level."""
    branch_styles = style.get("branch_styles", {})
    if not isinstance(branch_styles, dict):
        raise ValueError("'branch_styles' must be a mapping")

    matches: list[tuple[int, dict[str, Any]]] = []
    for branch_path, branch_config in branch_styles.items():
        if not isinstance(branch_config, dict):
            raise ValueError(f"branch_styles[{branch_path!r}] must be a mapping")
        path_parts = tuple(part for part in str(branch_path).split("/") if part)
        if node.path[: len(path_parts)] == path_parts:
            matches.append((len(path_parts), branch_config))
    if not matches:
        return {}

    _, selected = max(matches, key=lambda item: item[0])
    result: dict[str, Any] = {}
    default_style = selected.get("default", {})
    level_style = selected.get(node_level_key(node), {})
    if not isinstance(default_style, dict) or not isinstance(level_style, dict):
        raise ValueError("A branch style's 'default' and level entries must be mappings")
    result.update(default_style)
    result.update(level_style)
    return result


def effective_node_style(style: dict[str, Any], node: TaxonomyNode) -> dict[str, Any]:
    level_key = node_level_key(node)
    global_style = style["levels"].get(level_key, style["levels"]["3"])
    return {
        **global_style,
        **branch_override(style, node),
        **node_override(style, node),
    }


def flatten_nodes(roots: list[TaxonomyNode]) -> list[TaxonomyNode]:
    result: list[TaxonomyNode] = []
    for node in roots:
        result.append(node)
        result.extend(flatten_nodes(node.children))
    return result


def emit_dot(roots: list[TaxonomyNode], style: dict[str, Any]) -> str:
    lines = ["digraph taxonomy {", f"  graph [{dot_attrs(style['graph'])}];"]
    lines.append(f"  node [{dot_attrs(style['node'])}];")
    edge_style = dict(style["edge"])
    edge_style.setdefault("tailclip", "true")
    edge_style.setdefault("headclip", "true")
    lines.append(f"  edge [{dot_attrs(edge_style)}];")
    per_line = int(style["paper_box"]["papers_per_line"])

    def visit(node: TaxonomyNode) -> None:
        effective_style = effective_node_style(style, node)
        dot_style = {
            key: value
            for key, value in effective_style.items()
            if key
            in {
                "fillcolor",
                "color",
                "penwidth",
                "fontsize",
                "fontname",
                "margin",
                "shape",
                "style",
            }
        }
        if node.kind == "papers":
            label = dot_paper_label(node.papers, per_line)
            attrs = {**dot_style, "label": label}
            rendered = ", ".join(
                f"{key}={value if key == 'label' else dot_quote(value)}"
                for key, value in attrs.items()
            )
        else:
            rendered = dot_attrs({**dot_style, "label": node.label})
        lines.append(f"  {node.node_id} [{rendered}];")
        for child in node.children:
            visit(child)

        if len(node.children) == 1:
            child = node.children[0]
            lines.append(f"  {node.node_id}:e -> {child.node_id}:w;")
        elif len(node.children) > 1:
            # One zero-size junction gives the parent one right-hand exit and
            # all children left-hand entries through a shared T-shaped trunk.
            junction = f"junction_{node.node_id}"
            lines.append(
                f'  {junction} [shape="point", label="", width="0.01", '
                'height="0.01", fixedsize="true", style="invis"];'
            )
            lines.append(f"  {node.node_id}:e -> {junction}:w;")
            for child in node.children:
                lines.append(f"  {junction}:e -> {child.node_id}:w;")

    for root in roots:
        visit(root)
    lines.append("}")
    return "\n".join(lines) + "\n"


LATEX_ESCAPES = {
    "&": r"\&",
    "%": r"\%",
    "$": r"\$",
    "#": r"\#",
    "_": r"\_",
    "{": r"\{",
    "}": r"\}",
    "~": r"\textasciitilde{}",
    "^": r"\textasciicircum{}",
    "\\": r"\textbackslash{}",
}


def tex_escape(value: str) -> str:
    return "".join(LATEX_ESCAPES.get(char, char) for char in value)


def tex_hex(hex_color: str) -> str:
    value = hex_color.lstrip("#")
    if len(value) != 6:
        raise ValueError(f"Expected #RRGGBB colour, got {hex_color!r}")
    return value.upper()


def tex_dimension(value: Any, scale: float = 1.0) -> str:
    return f"{float(value) * scale:.2f}pt"


def tex_node_label(node: TaxonomyNode, per_line: int) -> str:
    if node.kind != "papers":
        return tex_escape(node.label)
    lines: list[str] = []
    for paper_line in paper_lines(node.papers, per_line):
        pieces = []
        for paper in paper_line:
            piece = tex_escape(paper.name)
            if paper.key:
                piece += rf"~\citep{{{paper.key}}}"
            pieces.append(piece)
        lines.append(", ".join(pieces))
    return r"\\".join(lines)


def emit_tex(roots: list[TaxonomyNode], style: dict[str, Any]) -> str:
    graph_style = style["graph"]
    node_style = style["node"]
    edge_style = style["edge"]
    latex_style = style.get("latex", {})
    per_line = int(style["paper_box"]["papers_per_line"])
    fontsize = float(node_style.get("fontsize", 10))
    margin = str(node_style.get("margin", "0.12,0.06")).split(",")
    x_margin = float(margin[0]) * 72
    y_margin = float(margin[-1]) * 72
    line_width = tex_dimension(node_style.get("penwidth", 1.0))
    edge_width = tex_dimension(edge_style.get("penwidth", 1.0))
    level_distance = latex_style.get(
        "level_distance", tex_dimension(graph_style.get("ranksep", 0.35), 72)
    )
    sibling_distance = latex_style.get(
        "sibling_distance", tex_dimension(graph_style.get("nodesep", 0.18), 72)
    )
    fork_length = latex_style.get("fork_length", "7pt")
    rounded = latex_style.get("rounded_corners", "3pt")
    font_family = latex_style.get("font_family", r"\sffamily")

    output = [
        "% Generated by draw_graph.py; edit taxonomy.yaml/style.json, not this file.",
        "% Main-document preamble requirements:",
        "%   \\usepackage{forest}",
        "%   \\usepackage{natbib}",
        "%   \\usepackage[colorlinks=true]{hyperref}",
        "% Include this figure with \\input{taxonomy.tex}, not \\includegraphics.",
    ]
    for level in ("0", "1", "2", "3", "papers"):
        level_style = style["levels"][level]
        safe_level = level.capitalize()
        output.extend(
            [
                rf"\definecolor{{taxonomy{safe_level}Fill}}{{HTML}}{{{tex_hex(level_style['fillcolor'])}}}%",
                rf"\definecolor{{taxonomy{safe_level}Draw}}{{HTML}}{{{tex_hex(level_style['color'])}}}%",
            ]
        )
    all_nodes = flatten_nodes(roots)
    for node in all_nodes:
        effective_style = effective_node_style(style, node)
        output.append(
            rf"\definecolor{{taxonomy{node.node_id}Fill}}{{HTML}}{{{tex_hex(effective_style['fillcolor'])}}}%"
        )
        output.append(
            rf"\definecolor{{taxonomy{node.node_id}Draw}}{{HTML}}{{{tex_hex(effective_style['color'])}}}%"
        )
    output.extend(
        [
        rf"\definecolor{{taxonomyEdge}}{{HTML}}{{{tex_hex(edge_style['color'])}}}%",
        r"\begin{forest}",
        "  taxonomy base/.style={",
        "    rectangle, rounded corners=" + str(rounded) + ", align=left,",
        "    line width=" + line_width + ",",
        "    inner xsep=" + f"{x_margin:.2f}pt" + ", inner ysep=" + f"{y_margin:.2f}pt" + ",",
        "    font=" + font_family + rf"\fontsize{{{fontsize:g}}}{{{fontsize * 1.2:g}}}\selectfont",
        "  },",
        ]
    )
    for level in ("0", "1", "2", "3", "papers"):
        safe_level = level.capitalize()
        output.extend(
            [
                f"  taxonomy level {level}/.style={{taxonomy base,",
                f"    fill=taxonomy{safe_level}Fill,",
                f"    draw=taxonomy{safe_level}Draw,",
                "  },",
            ]
        )
    paper_style = style["levels"]["papers"]
    paper_fontsize = float(paper_style.get("fontsize", fontsize))
    output.extend(
        [
            "  taxonomy level papers/.append style={",
            "    line width=" + tex_dimension(paper_style.get("penwidth", 1.0)) + ",",
            "    font=" + font_family + rf"\fontsize{{{paper_fontsize:g}}}{{{paper_fontsize * 1.2:g}}}\selectfont",
            "  },",
            "  for tree={",
            "    grow'=east, anchor=west, parent anchor=east, child anchor=west,",
            f"    l sep={level_distance}, s sep={sibling_distance},",
            f"    edge={{draw=taxonomyEdge, line width={edge_width}}},",
            "    edge path={",
            r"      \noexpand\path[\forestoption{edge}]",
            f"      (!u.parent anchor) -- ++({fork_length},0) |- (.child anchor)",
            r"      \forestoption{edge label};",
            "    },",
            "  },",
        ]
    )

    def render(node: TaxonomyNode, indent: int) -> None:
        pad = " " * indent
        label = tex_node_label(node, per_line)
        level_name = node_level_key(node)
        options = [
            f"taxonomy level {level_name}",
            f"fill=taxonomy{node.node_id}Fill",
            f"draw=taxonomy{node.node_id}Draw",
        ]
        custom_style = {**branch_override(style, node), **node_override(style, node)}
        if "penwidth" in custom_style:
            options.append(f"line width={tex_dimension(custom_style['penwidth'])}")
        if "rounded_corners" in custom_style:
            options.append(f"rounded corners={custom_style['rounded_corners']}")
        if "fontsize" in custom_style or "font_family" in custom_style:
            base_fontsize = paper_fontsize if node.kind == "papers" else fontsize
            override_fontsize = float(custom_style.get("fontsize", base_fontsize))
            override_family = custom_style.get("font_family", font_family)
            options.append(
                override_family
                + rf"\fontsize{{{override_fontsize:g}}}{{{override_fontsize * 1.2:g}}}\selectfont"
            )
            options[-1] = "font=" + options[-1]
        output.append(f"{pad}[{{{label}}}, {', '.join(options)}")
        for child in node.children:
            render(child, indent + 2)
        output.append(f"{pad}]")

    for root in roots:
        render(root, 2)
    output.append(r"\end{forest}")
    return "\n".join(output) + "\n"


def collect_citations(roots: list[TaxonomyNode]) -> set[str]:
    citations: set[str] = set()
    for node in roots:
        citations.update(paper.key for paper in node.papers if paper.key)
        citations.update(collect_citations(node.children))
    return citations


def validate_bibliography(bib_path: Path, citations: set[str]) -> None:
    if not bib_path.exists():
        print(
            f"Warning: {bib_path} was not found; citation keys were not validated.",
            file=sys.stderr,
        )
        return
    content = bib_path.read_text(encoding="utf-8")
    bib_keys = set(re.findall(r"@[A-Za-z]+\s*\{\s*([^,\s]+)\s*,", content))
    missing = sorted(citations - bib_keys)
    if missing:
        print(
            f"Warning: citation keys missing from {bib_path}: {', '.join(missing)}",
            file=sys.stderr,
        )
    else:
        print(f"Validated {len(citations)} citation key(s) against {bib_path}.")


def write_text(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8", newline="\n")


def validate_dot(dot_path: Path) -> None:
    executable = shutil.which("dot")
    if executable is None:
        print("Warning: Graphviz 'dot' was not found; DOT was not validated.", file=sys.stderr)
        return
    subprocess.run([executable, "-Tplain", str(dot_path)], check=True, stdout=subprocess.DEVNULL)


def build_latex_previews(project_dir: Path, output_base: Path, bib_path: Path) -> None:
    """Build the canonical previews from Forest, never from Graphviz routing."""
    latexmk = shutil.which("latexmk")
    pdfseparate = shutil.which("pdfseparate")
    pdftocairo = shutil.which("pdftocairo")
    missing = [
        name
        for name, executable in (
            ("latexmk", latexmk),
            ("pdfseparate", pdfseparate),
            ("pdftocairo", pdftocairo),
        )
        if executable is None
    ]
    if missing:
        print(
            "Warning: LaTeX previews were not rebuilt; missing " + ", ".join(missing),
            file=sys.stderr,
        )
        return

    demo_tex = project_dir / "taxonomy_demo.tex"
    if not demo_tex.exists():
        print(f"Warning: {demo_tex} was not found; previews were not rebuilt.", file=sys.stderr)
        return
    if not bib_path.exists():
        print(f"Warning: {bib_path} was not found; previews were not rebuilt.", file=sys.stderr)
        return
    with tempfile.TemporaryDirectory(dir=project_dir) as temporary_directory:
        temporary = Path(temporary_directory)
        shutil.copyfile(project_dir / "taxonomy.tex", temporary / "taxonomy.tex")
        shutil.copyfile(demo_tex, temporary / demo_tex.name)
        shutil.copyfile(bib_path, temporary / "refs.bib")
        latex_result = subprocess.run(
            [latexmk, "-pdf", "-interaction=nonstopmode", "-halt-on-error", demo_tex.name],
            cwd=temporary,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            encoding="utf-8",
            errors="replace",
        )
        if latex_result.returncode != 0:
            raise RuntimeError(
                "LaTeX compilation of taxonomy_demo.tex failed. "
                "Full latexmk output follows:\n" + latex_result.stdout
            )
        compiled_demo = temporary / "taxonomy_demo.pdf"
        demo_pdf = project_dir / "taxonomy_demo.pdf"
        shutil.copyfile(compiled_demo, demo_pdf)
        page_pattern = temporary / "page-%d.pdf"
        subprocess.run(
            [pdfseparate, "-f", "1", "-l", "1", str(demo_pdf), str(page_pattern)],
            check=True,
        )
        shutil.copyfile(temporary / "page-1.pdf", output_base.with_suffix(".pdf"))
    subprocess.run(
        [pdftocairo, "-svg", str(output_base.with_suffix(".pdf")), str(output_base.with_suffix(".svg"))],
        check=True,
    )


def main() -> None:
    args = parse_args()
    project_dir = Path(__file__).resolve().parent

    def local_path(value: str) -> Path:
        path = Path(value)
        return path if path.is_absolute() else project_dir / path

    output_base = local_path(args.output)
    roots = build_nodes(load_data(local_path(args.yaml)), IdFactory())
    style = load_style(local_path(args.style))

    dot_path = output_base.with_suffix(".dot")
    tex_path = output_base.with_suffix(".tex")
    write_text(dot_path, emit_dot(roots, style))
    write_text(tex_path, emit_tex(roots, style))
    validate_dot(dot_path)
    bib_path = local_path(args.bib)
    validate_bibliography(bib_path, collect_citations(roots))
    build_latex_previews(project_dir, output_base, bib_path)
    print(
        f"Generated {dot_path}, {tex_path}, {output_base.with_suffix('.svg')}, "
        f"{output_base.with_suffix('.pdf')}, and {project_dir / 'taxonomy_demo.pdf'}"
    )


if __name__ == "__main__":
    main()
