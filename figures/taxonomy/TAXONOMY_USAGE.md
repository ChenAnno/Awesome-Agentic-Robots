# Taxonomy 图：本地生成与 Overleaf 使用说明

## 先说结论：Overleaf 到底需要上传什么？

推荐采用“本地生成，Overleaf 只编译 LaTeX”的工作流。

必须放进 Overleaf 仓库的内容只有：

1. `taxonomy.tex`：真正被论文主文件载入的分类图。
2. 论文原本使用的 `.bib` 文件，例如 `refs.bib`。其中必须存在
   `taxonomy.tex` 所引用的 BibTeX key。
3. 论文主 `.tex` 文件中需要加载 `forest`、`graphicx`、`natbib` 和
   `hyperref`，并用 `\input` 插入 `taxonomy.tex`。

以下文件不需要上传到 Overleaf：

| 文件 | 是否上传 | 用途 |
|---|---:|---|
| `taxonomy.tex` | 必须 | 最终论文实际编译的图，保留 `\citep` 链接 |
| 论文自己的 `refs.bib` | 必须或仓库中已有 | 提供真实参考文献和编号 |
| `taxonomy.yaml` | 不需要 | 只在本地定义图的层级和论文名称/key |
| `style.json` | 不需要 | 只在本地定义颜色、间距和字体 |
| `draw_graph.py` | 不需要 | 只在本地把 YAML/JSON 转换成 `taxonomy.tex` |
| `taxonomy.pdf` | 不需要 | 本地视觉预览，不能代替 `taxonomy.tex` |
| `taxonomy.svg` | 不需要 | 本地视觉预览 |
| `taxonomy.dot` | 不需要 | 调试布局使用 |
| `taxonomy_demo.pdf` | 不需要 | 两页可点击引用测试 |
| `taxonomy_demo.tex` | 不需要 | 本地测试文档 |
| 本文件及参考 Figure 2 PDF | 不需要 | 说明和视觉参考 |

如果你希望把生成工具也备份在 Overleaf/Git 仓库中，可以额外上传 YAML、
JSON 和 Python 文件，但它们不会自动参与正常的 Overleaf 编译。修改 YAML
以后，仍建议在本地运行 Python，再覆盖上传新生成的 `taxonomy.tex`。

## 推荐的 Overleaf 目录结构

例如在 Overleaf 中建立以下结构：

```text
your-overleaf-project/
├── main.tex
├── refs.bib
├── sections/
│   └── ...
└── figures/
    └── taxonomy/
        └── taxonomy.tex
```

将本地文件：

```text
Survey1_Taxonomy/taxonomy.tex
```

上传为：

```text
figures/taxonomy/taxonomy.tex
```

Overleaf/Linux 的路径区分大小写，并且 LaTeX 路径应使用 `/`，不要使用
Windows 的 `\`。

## 第一步：处理真实的 `refs.bib`

当前 `Survey1_Taxonomy/refs.bib` 是为了测试链接而创建的实验文件，其中
作者和标题都是占位内容。不要用它覆盖你论文中已有的真实 `refs.bib`。

正式使用时有两种情况。

### 情况 A：Overleaf 已经有真实 `refs.bib`

这是最常见的情况。保留 Overleaf 中原来的 `refs.bib`，不要上传本地实验
版本。只要确保 taxonomy 使用的 key 在真实 `refs.bib` 中存在即可。

例如真实 BibTeX 条目是：

```bibtex
@article{du2023unipi,
  author  = {...},
  title   = {...},
  journal = {...},
  year    = {2023}
}
```

那么 `taxonomy.yaml` 中必须写：

```yaml
- name: UniPi
  key: du2023unipi
```

key 必须完全一致，包括大小写。不要在 YAML 中填写 `[6]` 之类的编号；
编号由论文采用的 bibliography style 自动决定。

### 情况 B：Overleaf 还没有 `.bib` 文件

可以上传一个 `refs.bib`，然后把真实 BibTeX 条目添加进去。当前实验
`refs.bib` 只能用于验证流程，正式投稿前必须替换其中的占位条目。

## 第二步：在本地编辑图的内容

打开：

```text
Survey1_Taxonomy/taxonomy.yaml
```

普通分类节点通过 YAML 缩进表示父子关系：

```yaml
Roadmap:
  Architecture:
    Joint WAM:
      Diffusion-based:
        papers:
          - name: PAD
            key: pad2025
          - name: DreamZero
            key: dreamzero2025
```

最右侧论文项只使用两个字段：

```yaml
- name: UniPi
  key: du2023unipi
```

- `name`：显示在框中的名称。
- `key`：必须与真实 `.bib` 文件中的 key 完全相同；脚本会生成
  `UniPi~\citep{du2023unipi}`。

如果某个最右侧项目不是论文、不需要引用，可以只写名称：

```yaml
- name: FVD
- name: LPIPS
```

此时图中只显示 `FVD, LPIPS`，不会生成 `\citep`。

`style.json` 负责样式。常用设置包括：

```json
"paper_box": {
  "papers_per_line": 3
},
"latex": {
  "level_distance": "18pt",
  "sibling_distance": "8pt",
  "fork_length": "7pt",
  "rounded_corners": "3pt",
  "font_family": "\\sffamily"
}
```

- `papers_per_line`：最右侧论文框每行最多放多少篇论文。
- `level_distance`：左右相邻层级之间的距离。
- `sibling_distance`：上下兄弟分支之间的最小空隙。上方内容很多、挤到
  下方内容时，应增大这个值，例如从 `8pt` 改为 `10pt` 或 `12pt`。
- `fork_length`：父框右侧到公共 T 形分叉竖线的水平长度。
- `rounded_corners`：圆角大小。
- `font_family`：节点字体。

### `style.json` 的完整阅读方法

`style.json` 最外层分为六个区域：

```text
graph           整张图的基础布局参数
node            所有节点的默认样式
edge            所有连接线的默认样式
levels          不同层级节点的颜色和局部样式
paper_box       最右侧论文框的排版
latex           最终 Forest/LaTeX 图的间距与字体
node_overrides  指定某一个节点的单独样式
```

颜色统一使用十六进制 RGB：

```json
"fillcolor": "#DDEBF7"
```

其中 `#DDEBF7` 表示框内部的浅蓝色。常见颜色示例：

| 颜色 | 色值 |
|---|---|
| 白色 | `#FFFFFF` |
| 浅蓝 | `#DDEBF7` |
| 深蓝边框 | `#5B9BD5` |
| 浅黄 | `#FFF2CC` |
| 黄色边框 | `#D6B656` |
| 浅绿 | `#E2F0D9` |
| 绿色边框 | `#70AD47` |
| 浅红 | `#FCE4D6` |
| 红色边框 | `#C55A11` |
| 灰色 | `#E7E6E6` |

### 修改整张图的背景

```json
"graph": {
  "bgcolor": "white"
}
```

`bgcolor` 主要影响 DOT 调试输出。最终插入论文的 Forest 图默认使用论文页面
背景。

`nodesep` 和 `ranksep` 是 DOT 调试布局的间距；最终论文图优先采用
`latex.sibling_distance` 和 `latex.level_distance`。

### 修改所有框的默认样式

```json
"node": {
  "shape": "box",
  "style": "rounded,filled",
  "fontname": "Arial",
  "fontsize": "10",
  "penwidth": "1.2",
  "margin": "0.12,0.06"
}
```

- `fontsize`：所有普通节点的默认字号。
- `penwidth`：默认边框粗细。
- `margin`：文字与框的内边距，前一个数控制左右，后一个数控制上下。
- `style: "rounded,filled"`：圆角并填充背景色。

最终 LaTeX 图的圆角大小由 `latex.rounded_corners` 控制，而不是 Graphviz
的 `rounded` 单词。

### 修改所有连接线

```json
"edge": {
  "color": "#777777",
  "penwidth": "1.0",
  "arrowhead": "none"
}
```

- `color`：所有连接线颜色。
- `penwidth`：所有连接线粗细。
- `arrowhead: "none"`：不显示箭头。

连接方向不能在 `style.json` 中改变。脚本固定使用父框右侧出线、公共 T 形
分支和子框左侧入线。

### 按层级统一修改颜色

`levels` 中的编号对应 YAML 深度：

```text
0        根节点，例如 Roadmap
1        Roadmap 的直接子节点，例如 Capacities、Benchmark
2        再下一层，例如 Perceive、Multimodal Agent
3        更深的普通分类节点；第 4 层以后也复用这一样式
papers   最右侧论文列表框
```

每一级通常设置：

```json
"1": {
  "fillcolor": "#DDEBF7",
  "color": "#5B9BD5"
}
```

- `fillcolor`：框内部颜色。
- `color`：框边界颜色。

例如，将所有第一层节点改成浅绿色：

```json
"1": {
  "fillcolor": "#E2F0D9",
  "color": "#70AD47"
}
```

修改所有最右侧论文框：

```json
"papers": {
  "fillcolor": "#FFF2CC",
  "color": "#D6B656",
  "fontsize": "9",
  "penwidth": "0.8"
}
```

### 给 Roadmap 后的每条分支设置独立色系

使用 `branch_styles`。每个 key 是从根节点到一级分支的完整路径；每条分支
内部再分别设置 `1`、`2`、`3` 和 `papers` 层。

当前图有两条一级分支：

```text
Roadmap/Capacities
Roadmap/Benchmark
```

对应的正确接口是：

```json
"branch_styles": {
  "Roadmap/Capacities": {
    "1": {
      "fillcolor": "#DDEBF7",
      "color": "#5B9BD5"
    },
    "2": {
      "fillcolor": "#EAF2F8",
      "color": "#7FAED3"
    },
    "3": {
      "fillcolor": "#F4F8FB",
      "color": "#9ABDD8"
    },
    "papers": {
      "fillcolor": "#FFFFFF",
      "color": "#B7CCE2"
    }
  },

  "Roadmap/Benchmark": {
    "1": {
      "fillcolor": "#E4DFEC",
      "color": "#8064A2"
    },
    "2": {
      "fillcolor": "#EDE9F2",
      "color": "#9E84BC"
    },
    "3": {
      "fillcolor": "#F5F2F8",
      "color": "#B7A6CC"
    },
    "papers": {
      "fillcolor": "#FFFFFF",
      "color": "#C8BDD8"
    }
  }
}
```

这里的层级含义是：

| key | 影响范围（以 `Capacities` 为例） |
|---|---|
| `1` | 一级分支根框 `Capacities` |
| `2` | `Perceive`、`Anticipate`、`Plan`、`Act`、`Verify` |
| `3` | 如果二级节点下还有普通分类节点，则使用这一层 |
| `papers` | 该分支最右侧的所有论文列表框 |
| `default` | 可选；该分支所有层级的共同默认值 |

如果将来给 Roadmap 新增第三条分支，例如：

```yaml
Roadmap:
  Capacities: ...
  Benchmark: ...
  Applications: ...
```

只需在 `branch_styles` 增加同名路径：

```json
"Roadmap/Applications": {
  "1": {
    "fillcolor": "#E2F0D9",
    "color": "#70AD47"
  },
  "2": {
    "fillcolor": "#F0F7EC",
    "color": "#92C47D"
  },
  "3": {
    "fillcolor": "#F7FBF5",
    "color": "#B4D7A8"
  },
  "papers": {
    "fillcolor": "#FFFFFF",
    "color": "#C6E0B4"
  }
}
```

如果希望整条分支所有层都使用同一个公共边框、字号或线宽，可以使用
`default`，再让个别层覆盖它：

```json
"Roadmap/Benchmark": {
  "default": {
    "color": "#8064A2",
    "penwidth": "1.4"
  },
  "1": {
    "fillcolor": "#E4DFEC",
    "penwidth": "1.8"
  },
  "2": {
    "fillcolor": "#EDE9F2"
  },
  "3": {
    "fillcolor": "#F5F2F8"
  },
  "papers": {
    "fillcolor": "#FFFFFF"
  }
}
```

每个层级不仅能设置颜色，还支持：

```json
{
  "fillcolor": "#EDE9F2",
  "color": "#9E84BC",
  "penwidth": "1.5",
  "fontsize": "10",
  "rounded_corners": "4pt",
  "font_family": "\\sffamily"
}
```

样式合并优先级固定为：

```text
levels（全局默认）
        ↓ 被覆盖
branch_styles（整条分支、分层设置）
        ↓ 被覆盖
node_overrides（某一个指定节点）
```

也就是说，先通过 `levels` 提供兜底样式，再通过 `branch_styles` 设置各分支
色系，最后才用 `node_overrides` 强调少数特殊节点。

### 只修改一个指定节点

使用 `node_overrides`，key 是该节点在 `taxonomy.yaml` 中从根节点开始的
完整路径，各层之间使用 `/`。

例如只把 `Plan` 改为浅黄色：

```json
"node_overrides": {
  "Roadmap/Capacities/Plan": {
    "fillcolor": "#FFF2CC",
    "color": "#D6B656",
    "penwidth": "1.8",
    "fontsize": "11",
    "rounded_corners": "5pt"
  }
}
```

路径必须与 YAML 名称完全一致，包括空格和大小写。例如当前图中的三个完整
路径是：

```text
Roadmap/Capacities/Perceive
Roadmap/Capacities/Plan
Roadmap/Benchmark/Multimodal Embodied Agent
```

可以同时覆盖多个节点：

```json
"node_overrides": {
  "Roadmap/Capacities/Plan": {
    "fillcolor": "#FFF2CC",
    "color": "#D6B656"
  },
  "Roadmap/Benchmark/Robotic System": {
    "fillcolor": "#E2F0D9",
    "color": "#70AD47",
    "penwidth": "2.0"
  }
}
```

指定节点支持这些覆盖字段：

| 字段 | 作用 | 示例 |
|---|---|---|
| `fillcolor` | 单个框的内部颜色 | `"#FFF2CC"` |
| `color` | 单个框的边框颜色 | `"#D6B656"` |
| `penwidth` | 单个框的边框粗细 | `"1.8"` |
| `fontsize` | 单个框的字号 | `"11"` |
| `rounded_corners` | 单个框的 LaTeX 圆角 | `"5pt"` |
| `font_family` | 单个框的 LaTeX 字体命令 | `"\\bfseries\\sffamily"` |

若要修改某个分类下最右侧的论文框，在完整路径末尾加 `/papers`：

```json
"node_overrides": {
  "Roadmap/Capacities/Perceive/papers": {
    "fillcolor": "#FCE4D6",
    "color": "#C55A11",
    "fontsize": "8.5"
  }
}
```

如果同名节点出现在不同分支，完整路径能够保证只修改指定位置。例如
`Roadmap/Capacities/Agent` 与 `Roadmap/Benchmark/Agent` 可以分别设置。

修改 `style.json` 后必须重新运行 `draw_graph.py`。不要直接修改生成的
`taxonomy.tex`，否则下一次运行脚本时手工修改会被覆盖。

Forest 会根据每个子树的实际高度自动增加整张图的高度。所有边固定使用：

```text
父框 east（右边） → 公共 T 形主干 → 子框 west（左边）
```

因此内容变多时应该通过增加画布高度和兄弟间距容纳内容，而不会把线改成
从框顶部或底部进入。

## 第三步：在本地重新生成

在 PowerShell 中进入 `Survey1` 根目录：

```powershell
Set-Location "F:\Users\Jackup\NUS_Semester_1\Survey1"
python .\Survey1_Taxonomy\draw_graph.py
```

也可以进入 taxonomy 文件夹后运行：

```powershell
Set-Location "F:\Users\Jackup\NUS_Semester_1\Survey1\Survey1_Taxonomy"
python .\draw_graph.py
```

脚本会：

1. 读取 `taxonomy.yaml` 和 `style.json`。
2. 检查 YAML 中的 key 是否存在于同目录的 `refs.bib`。
3. 生成 `taxonomy.tex`。
4. 生成 `taxonomy.pdf` 和 `taxonomy.svg` 视觉预览。
5. 编译 `taxonomy_demo.pdf`，用于测试引用点击跳转。

如果本地正式 `refs.bib` 不在 taxonomy 文件夹，可以显式指定其绝对路径。
脚本会用这个文件校验 key，并将它复制到临时编译目录生成 demo；不会修改
原始 `.bib`：

```powershell
python .\Survey1_Taxonomy\draw_graph.py --bib "F:\path\to\real_refs.bib"
```

`--bib` 的相对路径按 `Survey1_Taxonomy` 文件夹解析，因此不确定时建议直接
使用绝对路径。

出现以下信息说明 YAML 中的 key 与 BibTeX 对应成功：

```text
Validated 9 citation key(s) against ...\refs.bib.
```

如果看到：

```text
Warning: citation keys missing from ...
```

需要修正 YAML 的 `key` 或将缺失条目加入真实 `.bib`，不能通过手写编号解决。

## 第四步：检查本地输出

建议依次检查：

1. 打开 `taxonomy.pdf`，检查结构、颜色、间距和所有连接方向。
2. 打开 `taxonomy_demo.pdf`。第一页是图，第二页是实验 references。
3. 点击第一页蓝色的 `[x]`，确认能够跳到第二页对应参考文献。
4. 确认 `taxonomy.tex` 中可以看到类似内容：

```tex
UniPi~\citep{du2023unipi}
```


`taxonomy.pdf` 只用于查看版式。最终论文不能通过下面的方法插入：

```tex
% 不推荐：子 PDF 中的 bibliography 链接通常不会被主文档保留
\includegraphics{figures/taxonomy/taxonomy.pdf}
```

## 第五步：上传到 Overleaf

完成本地检查后：

1. 在 Overleaf 建立 `figures/taxonomy/` 文件夹。
2. 上传最新生成的 `taxonomy.tex`。
3. 如果 Overleaf 已有真实 `refs.bib`，不要上传或覆盖本地实验版本。
4. 如果添加了新论文，把相应真实 BibTeX 条目添加到 Overleaf 的
   `refs.bib`。
5. 不需要上传 YAML、JSON、Python、DOT、SVG、PDF 或 demo 文件。

每次修改 taxonomy 后，通常只需重新上传并覆盖：

```text
figures/taxonomy/taxonomy.tex
```

只有新增或修改参考文献时，才需要同时更新 Overleaf 的 `refs.bib`。

## 第六步：修改 Overleaf 主文档的 preamble

确认主 `.tex` 的 `\begin{document}` 之前包含以下包：

```tex
\usepackage{graphicx} % 提供 \resizebox
\usepackage{forest}   % 编译 taxonomy.tex
\usepackage[numbers,sort&compress]{natbib}
\usepackage[colorlinks=true,citecolor=blue,linkcolor=blue]{hyperref}
```

注意：

- 如果论文模板已经加载 `graphicx`、`natbib` 或 `hyperref`，不要重复加载。
- `hyperref` 通常应在大多数其他宏包之后加载。
- 有些会议模板已经规定 `natbib` 选项和链接颜色，此时遵循模板，不要强行
  覆盖。
- 当前生成结果使用 `\citep`，因此默认面向 `natbib` 工作流。如果你的项目
  使用 `biblatex` 而不是 `natbib`，需要先统一引用命令，不能同时混用两套
  bibliography 系统。

## 第七步：在论文正文中插入图

### 双栏论文，图片跨两栏

```tex
\begin{figure*}[t]
  \centering
  \resizebox{\textwidth}{!}{%
    \input{figures/taxonomy/taxonomy.tex}%
  }
  \caption{Taxonomy of the reviewed methods.}
  \label{fig:taxonomy}
\end{figure*}
```

### 单栏论文，或者只占一栏

```tex
\begin{figure}[t]
  \centering
  \resizebox{\linewidth}{!}{%
    \input{figures/taxonomy/taxonomy.tex}%
  }
  \caption{Taxonomy of the reviewed methods.}
  \label{fig:taxonomy}
\end{figure}
```

`\linewidth` 会使用当前位置可用宽度；`\textwidth` 适合跨双栏的
`figure*`。

正文引用该图：

```tex
As summarized in Fig.~\ref{fig:taxonomy}, ...
```

## 第八步：确认 bibliography 设置

如果项目使用传统 BibTeX/natbib，主文档末尾通常已有：

```tex
\bibliographystyle{plainnat} % 或会议模板指定的 style
\bibliography{refs}
```

如果 `.bib` 位于子目录，例如 `bibliography/refs.bib`，则通常写：

```tex
\bibliography{bibliography/refs}
```

不要因为 taxonomy 单独增加第二套 bibliography。图中的 `\citep` 会和正文
引用一起使用同一个 `.bib`、同一个编号系统和同一个 References 列表。

## Overleaf 编译与排错

Overleaf 通常会自动运行 LaTeX 和 BibTeX。上传后点击 **Recompile**。第一次
编译引用可能暂时显示 `[?]`，再次编译通常会解析完成。

如果仍然显示 `[?]`：

1. 检查 YAML 中的 key 是否与 Overleaf `refs.bib` 完全一致。
2. 检查主文档是否确实包含 `\bibliography{refs}`。
3. 检查 Overleaf 的 Main document 是否选中了正确的主 `.tex`。
4. 在 Overleaf 菜单中执行 **Recompile from scratch**。
5. 查看编译日志中是否有 `Citation ... undefined`。

如果出现 `Environment forest undefined`：

```tex
\usepackage{forest}
```

没有加载或没有在正确的主文档 preamble 中加载。

如果出现 `Undefined control sequence \citep`，说明 `natbib` 没有加载，或者
项目实际使用的是 `biblatex`。

如果出现 `File taxonomy.tex not found`：

- 检查 Overleaf 中的目录和文件名大小写。
- 确认使用 `/` 路径。
- 确认 `\input{figures/taxonomy/taxonomy.tex}` 与实际路径一致。

如果图片太宽，不要手工改变节点坐标；保留 `\resizebox{...}{!}{...}`。如果
文字缩得过小，可以在 YAML 中减少 `papers_per_line` 对应的每行内容，拆分
分类层级，或者把图放在横向页面/附录中。

## 日常更新流程总结

每次更新 taxonomy 时按以下顺序操作：

```text
修改本地 taxonomy.yaml / style.json
              ↓
运行 draw_graph.py
              ↓
检查 taxonomy.pdf 和 taxonomy_demo.pdf
              ↓
上传并覆盖 Overleaf 的 taxonomy.tex
              ↓
如有新文献，再更新 Overleaf 的真实 refs.bib
              ↓
Overleaf Recompile / Recompile from scratch
```

最重要的原则是：YAML/JSON/Python 是本地生成工具；`taxonomy.tex` 才是
Overleaf 真正需要的图；引用编号始终由主论文的 `.bib` 和 bibliography
style 生成。
