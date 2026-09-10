import type { Branch, TreeNode } from "./evolution-data";

export const branchCenters = { robotics: 19.5, embodied: 50, digital: 80.5 };
const families: Exclude<Branch, "root">[] = ["robotics", "embodied", "digital"];
type Placement = {
  x: number;
  y: number;
  width: number;
  height: number;
  leafSide: number;
  labelLines: string[];
};
type Leaf = Placement & { id: string };

function randomSequence(seed: string) {
  let state = 2166136261;
  for (const character of seed)
    state = Math.imul(state ^ character.charCodeAt(0), 16777619);
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  };
}

export const approximateTextWidth = (text: string) => text.length * 7;

export function measureNode(
  paper: TreeNode,
  measure: (text: string) => number,
) {
  let labelLines = [paper.title];
  if (measure(paper.title) > 120) {
    const breaks = [...paper.title.matchAll(/[ \-]/g)];
    let best = Infinity;
    for (const match of breaks) {
      const offset = match.index! + (match[0] === "-" ? 1 : 0);
      const lines = [
        paper.title.slice(0, offset).trim(),
        paper.title.slice(offset).trim(),
      ];
      if (lines.some((line) => !line)) continue;
      const widest = Math.max(...lines.map(measure));
      if (widest < best) {
        best = widest;
        labelLines = lines;
      }
    }
  }
  // Separate room for the arrow, gap, padding, and borders.
  const width =
    Math.ceil(Math.max(...labelLines.map(measure))) + (paper.url ? 36 : 22);
  return { width, height: labelLines.length * 16 + 12, labelLines };
}

// A seeded canopy packing keeps the irregular arrangement stable on every render.
function packCanopy(
  group: TreeNode[],
  center: number,
  top: number,
  bandHeight: number,
  seed: string,
  sizes: Map<string, ReturnType<typeof measureNode>>,
  plotWidth: number,
): Leaf[] | null {
  const random = randomSequence(seed);
  const gap = 4;
  const rows: { papers: TreeNode[]; width: number; height: number }[] = [];
  const sorted = [...group].sort(
    (a, b) =>
      sizes.get(b.id)!.width - sizes.get(a.id)!.width ||
      a.id.localeCompare(b.id),
  );
  for (const paper of sorted) {
    const size = sizes.get(paper.id)!;
    const width = (size.width * 1000) / plotWidth;
    const row = rows
      .filter((row) => row.width + gap + width <= 292)
      .sort((a, b) => b.width - a.width)[0];
    if (row) {
      row.papers.push(paper);
      row.width += gap + width;
      row.height = Math.max(row.height, size.height);
    } else {
      rows.push({ papers: [paper], width, height: size.height });
    }
  }
  const topNodeId = "chen2026showharness";
  const topRowIndex = rows.findIndex((row) =>
    row.papers.some((paper) => paper.id === topNodeId),
  );
  if (topRowIndex > 0) rows.unshift(...rows.splice(topRowIndex, 1));
  const requiredHeight = rows.reduce((sum, row) => sum + row.height + 5, 0);
  if (requiredHeight > bandHeight) return null;
  const leaves: Leaf[] = [];
  let rowTop = topRowIndex >= 0 ? top : top + (bandHeight - requiredHeight) / 2;
  rows.forEach((row, rowIndex) => {
    let left =
      center - row.width / 2 + (random() - 0.5) * Math.min(10, 296 - row.width);
    const ordered = rowIndex % 2 ? [...row.papers].reverse() : row.papers;
    ordered.forEach((paper, index) => {
      const size = sizes.get(paper.id)!;
      const width = (size.width * 1000) / plotWidth;
      leaves.push({
        id: paper.id,
        x: left + width / 2,
        y:
          paper.id === topNodeId
            ? top + size.height / 2
            : rowTop + row.height / 2 + random() * 2,
        width,
        height: size.height,
        labelLines: size.labelLines,
        leafSide: index % 2,
      });
      left += width + gap;
    });
    rowTop += row.height + 5;
  });
  // Loosen the compact rows without increasing the canvas or overlapping labels.
  // The seed keeps this stagger fixed during playback and on repeated renders.
  for (let pass = 0; pass < 2; pass++) {
    for (const leaf of leaves) {
      if (leaf.id === topNodeId) continue;
      const origin = { x: leaf.x, y: leaf.y };
      const target = {
        x: origin.x + (random() - 0.5) * 48,
        y: origin.y + (random() - 0.5) * 28,
      };
      let best = { ...origin };
      let score = Infinity;
      for (let attempt = 0; attempt < 90; attempt++) {
        const x = Math.max(
          center - 148 + leaf.width / 2,
          Math.min(
            center + 148 - leaf.width / 2,
            attempt === 0 ? target.x : origin.x + (random() - 0.5) * 56,
          ),
        );
        const y = Math.max(
          top + leaf.height / 2,
          Math.min(
            top + bandHeight - leaf.height / 2 - 1,
            attempt === 0 ? target.y : origin.y + (random() - 0.5) * 32,
          ),
        );
        if (
          leaves.some(
            (other) =>
              other !== leaf &&
              Math.abs(x - other.x) < (leaf.width + other.width) / 2 + 3 &&
              Math.abs(y - other.y) < (leaf.height + other.height) / 2 + 2,
          )
        )
          continue;
        const distance =
          ((x - target.x) / 24) ** 2 + ((y - target.y) / 10) ** 2;
        if (distance < score) {
          score = distance;
          best = { x, y };
        }
      }
      Object.assign(leaf, best);
    }
  }
  return leaves;
}

// Let neighboring families share horizontal space; colors retain their identity.
function weaveFamilies(groups: Leaf[][], year: number) {
  const leaves = groups.flat();
  const random = randomSequence(`weave-${year}`);
  const targets = new Map<string, number>();
  groups.forEach((group, family) => {
    const drift = Math.sin((year - 2017) * 1.45 + family * 2.15) * 78;
    group.forEach((leaf) =>
      targets.set(leaf.id, leaf.x + drift + (random() - 0.5) * 36),
    );
  });
  // Keep existing vertical positions and height while allowing cross-family offsets.
  for (let pass = 0; pass < 3; pass++) {
    const ordered = pass % 2 ? [...leaves].reverse() : leaves;
    for (const leaf of ordered) {
      if (leaf.id === "chen2026showharness") continue;
      const target = Math.max(
        45 + leaf.width / 2,
        Math.min(955 - leaf.width / 2, targets.get(leaf.id)!),
      );
      for (let step = 10; step > 0; step--) {
        const x = leaf.x + ((target - leaf.x) * step) / 10;
        if (
          leaves.some(
            (other) =>
              other !== leaf &&
              Math.abs(x - other.x) < (leaf.width + other.width) / 2 + 3 &&
              Math.abs(leaf.y - other.y) < (leaf.height + other.height) / 2 + 2,
          )
        )
          continue;
        leaf.x = x;
        break;
      }
    }
  }
}

const rightGapMilestones = [
  "liang2023code",
  "shen2023hugginggpt",
  "yang2024safetychip",
  "cheng2024seeclick",
];
const gapMilestones = [
  "zhao2026dream",
  "lu2026bench",
  ...rightGapMilestones,
  "black2024pi0",
  "liu2024okrobot",
  "codeasmonitor2024",
  "fastinslow2025",
];

function fillMiddleGap(
  groups: Leaf[][],
  additions: TreeNode[],
  top: number,
  height: number,
  sizes: Map<string, ReturnType<typeof measureNode>>,
  plotWidth: number,
) {
  for (const [index, paper] of additions.entries()) {
    const size = sizes.get(paper.id)!;
    const width = (size.width * 1000) / plotWidth;
    const center = rightGapMilestones.includes(paper.id) ? 665 : 365;
    let best: Leaf | null = null;
    let score = Infinity;
    for (
      let y = top + size.height / 2;
      y <= top + height - size.height / 2;
      y += 2
    ) {
      for (let x = center - 85; x <= center + 135; x += 3) {
        if (
          groups
            .flat()
            .some(
              (other) =>
                Math.abs(x - other.x) < (width + other.width) / 2 + 4 &&
                Math.abs(y - other.y) < (size.height + other.height) / 2 + 3,
            )
        )
          continue;
        const distance =
          ((x - center) / 100) ** 2 +
          ((y - (top + height * (index % 2 ? 0.72 : 0.3))) / height) ** 2;
        if (distance < score) {
          score = distance;
          best = {
            id: paper.id,
            x,
            y,
            width,
            height: size.height,
            labelLines: size.labelLines,
            leafSide: index % 2,
          };
        }
      }
    }
    if (!best) return false;
    groups[families.indexOf(paper.branch as Exclude<Branch, "root">)].push(
      best,
    );
  }
  return true;
}

export function createTreeLayout(
  papers: TreeNode[],
  plotWidth = 1000,
  measure = approximateTextWidth,
) {
  const sizes = new Map(
    papers.map((paper) => [paper.id, measureNode(paper, measure)]),
  );
  const years = [
    ...new Set(papers.filter((p) => p.branch !== "root").map((p) => p.year)),
  ].sort((a, b) => b - a);
  const positions = new Map<string, Placement>();
  const yearPositions = new Map<number, number>();
  let cursor = 54;
  for (const year of years) {
    const groups = families.map((branch) =>
      papers.filter(
        (p) =>
          p.branch === branch &&
          p.year === year &&
          !gapMilestones.includes(p.id),
      ),
    );
    let bandHeight = Math.max(
      32,
      ...groups.map((group) => Math.ceil(group.length / 3) * 32),
    );
    let packed: (Leaf[] | null)[];
    for (;;) {
      packed = groups.map((group, index) =>
        packCanopy(
          group,
          branchCenters[families[index]] * 10,
          cursor,
          bandHeight,
          `${year}-${families[index]}`,
          sizes,
          plotWidth,
        ),
      );
      if (packed.every(Boolean)) {
        weaveFamilies(packed as Leaf[][], year);
        const additions = papers.filter(
          (p) => p.year === year && gapMilestones.includes(p.id),
        );
        if (
          fillMiddleGap(
            packed as Leaf[][],
            additions,
            cursor,
            bandHeight,
            sizes,
            plotWidth,
          )
        )
          break;
      }
      bandHeight += 4;
      if (bandHeight > 500)
        throw new Error(`Unable to place evolution milestones for ${year}`);
    }
    yearPositions.set(year, cursor + 16);
    packed.forEach((group) =>
      group!.forEach((leaf) =>
        positions.set(leaf.id, {
          ...leaf,
          x: leaf.x / 10,
          width: leaf.width / 10,
        }),
      ),
    );
    cursor += bandHeight + 4;
  }
  // Expand the complete canopy into the available horizontal space.
  const canopy = [...positions.values()];
  const left = Math.min(...canopy.map((node) => node.x - node.width / 2));
  const right = Math.max(...canopy.map((node) => node.x + node.width / 2));
  const middle = (left + right) / 2;
  const spread = Math.min(
    ...canopy
      .filter((node) => Math.abs(node.x - middle) > 0.01)
      .map((node) => (49 - node.width / 2) / Math.abs(node.x - middle)),
  );
  canopy.forEach((node) => {
    node.x = 50 + (node.x - middle) * Math.max(1, spread);
  });
  const worldVlaLoop = positions.get("worldvlaloop2026");
  const roboCerebra = positions.get("han2026robocerebra");
  if (worldVlaLoop && roboCerebra) {
    [worldVlaLoop.x, roboCerebra.x] = [roboCerebra.x, worldVlaLoop.x];
    [worldVlaLoop.y, roboCerebra.y] = [roboCerebra.y, worldVlaLoop.y];
  }
  // Small review adjustments, constrained by neighboring label bounds.
  for (const [id, dx, dy] of [
    ["black2024pi0", -32, 0],
    ["liang2023code", -28, -8],
  ] as const) {
    const node = positions.get(id);
    if (!node) continue;
    for (let step = 10; step > 0; step--) {
      const x = node.x + ((dx / plotWidth) * 100 * step) / 10;
      const y = node.y + (dy * step) / 10;
      if (
        [...positions.values()].some(
          (other) =>
            other !== node &&
            Math.abs(x - other.x) < (node.width + other.width) / 2 + 0.2 &&
            Math.abs(y - other.y) < (node.height + other.height) / 2 + 2,
        )
      )
        continue;
      node.x = x;
      node.y = y;
      break;
    }
  }
  positions.set("root", {
    x: 8.5,
    // The hidden origin sits on the canvas bottom edge.
    y: cursor + 32,
    width: (sizes.get("root")!.width / plotWidth) * 100,
    height: sizes.get("root")!.height,
    labelLines: sizes.get("root")!.labelLines,
    leafSide: 0,
  });
  return {
    nodes: papers.map((paper) => ({ ...paper, ...positions.get(paper.id)! })),
    years,
    yearPositions,
    height: cursor + 32,
  };
}
