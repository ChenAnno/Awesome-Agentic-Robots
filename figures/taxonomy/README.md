# Taxonomy YAML / JSON Editing Guide

本目录中的两个配置文件共同决定 taxonomy 图：

- `taxonomy.yaml`：决定有哪些节点、父子层级以及论文名称和 BibTeX key。
- `style.json`：决定颜色、字号、间距、边框和各个 Roadmap 分支的色系。

修改配置不会自动更新 PDF；合并修改后，需要由维护者重新运行
`draw_graph.py` 生成 `taxonomy.tex`、PDF 和 SVG。

## 1. 编辑 `taxonomy.yaml`

### 基本结构

YAML 通过缩进表示父子关系。使用空格缩进，不要使用 Tab：

```yaml
Roadmap:
  Capacities:
    Perceive:
      papers:
        - name: showui
          key: shou2025showui
```

这段内容会生成：

```text
Roadmap → Capacities → Perceive → showui [引用编号]
```

### 添加同级分类

在相同缩进处添加节点：

```yaml
  Capacities:
    Perceive:
      ...
    Anticipate:
      ...
    New Capability:
      papers:
        - name: Example Method
          key: example2026method
```

### 添加新的 Roadmap 一级分支

在 `Roadmap` 下添加与 `Capacities`、`Benchmark` 同级的节点：

```yaml
Roadmap:
  Capacities:
    ...
  Benchmark:
    ...
  Applications:
    Industrial Robots:
      papers:
        - name: Example Method
          key: example2026method
```

新增一级分支后，也应在 `style.json > branch_styles` 中添加
`Roadmap/Applications` 的颜色设置。

### 填写论文

每篇论文通常只有两个字段：

```yaml
- name: ShowUI
  key: shou2025showui
```

- `name`：显示在图中的短名称。
- `key`：必须与论文主仓库 `refs.bib` 中的 BibTeX key 完全一致，包括大小写。

不要在 `name` 中手写 `[1]`。生成器会输出：

```tex
ShowUI~\citep{shou2025showui}
```

LaTeX 会根据 `refs.bib` 自动生成 `[x]` 和点击链接。

不需要引用的指标或普通文本可以只填 `name`：

```yaml
- name: FVD
- name: LPIPS
```

### 调整论文顺序

`papers` 列表从上到下的顺序就是框中从左到右的显示顺序。移动列表项即可
调整顺序。

## 2. 编辑 `style.json`

JSON 不允许注释，也不允许最后一个字段后出现多余逗号。颜色使用
`#RRGGBB` 格式。

### 全局区域

| 区域 | 修改后会发生什么 |
|---|---|
| `node.fontsize` | 改变所有普通节点的默认字号 |
| `node.penwidth` | 改变普通节点的默认边框粗细 |
| `node.margin` | 改变文字与框边界的左右/上下内边距 |
| `edge.color` | 改变所有连接线颜色 |
| `edge.penwidth` | 改变所有连接线粗细 |
| `levels` | 改变各层级的全局默认颜色 |
| `paper_box.papers_per_line` | 改变论文框每行最多显示几篇论文 |
| `latex.level_distance` | 改变左右层级之间的距离 |
| `latex.sibling_distance` | 改变上下兄弟节点之间的距离 |
| `latex.fork_length` | 改变父框到公共 T 形分叉线的水平长度 |
| `latex.rounded_corners` | 改变所有框的圆角大小 |
| `latex.font_family` | 改变默认 LaTeX 字体 |

例如，上下内容太拥挤时增大：

```json
"sibling_distance": "12pt"
```

左右层级太近时增大：

```json
"level_distance": "24pt"
```

### `levels`：全局层级默认值

```text
0       Roadmap 根节点
1       Roadmap 的直接子节点
2       下一层分类节点
3       更深层分类节点（第 4 层以后也复用它）
papers  最右侧论文框
```

```json
"2": {
  "fillcolor": "#EAF2F8",
  "color": "#7FAED3"
}
```

- `fillcolor`：框内部颜色。
- `color`：框边界颜色。

### `branch_styles`：为每条 Roadmap 分支设置独立色系

key 必须是从根节点开始的完整分支路径：

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
  }
}
```

- `1`：该一级分支自己的框。
- `2`：该分支下的下一层节点。
- `3`：更深的普通节点。
- `papers`：该分支的论文框。
- `default`：可选，给该分支所有层提供共同默认值。

新增 YAML 一级分支 `Applications` 时，应增加：

```json
"Roadmap/Applications": {
  "1": {"fillcolor": "#E2F0D9", "color": "#70AD47"},
  "2": {"fillcolor": "#F0F7EC", "color": "#92C47D"},
  "3": {"fillcolor": "#F7FBF5", "color": "#B4D7A8"},
  "papers": {"fillcolor": "#FFFFFF", "color": "#C6E0B4"}
}
```

### `node_overrides`：只修改一个指定节点

使用该节点在 YAML 中的完整路径：

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

只修改某个分类的论文框时，在路径末尾添加 `/papers`：

```json
"Roadmap/Capacities/Perceive/papers": {
  "fillcolor": "#FCE4D6",
  "color": "#C55A11"
}
```

样式优先级为：

```text
levels < branch_styles < node_overrides
```

因此单节点设置会覆盖分支设置，分支设置会覆盖全局层级设置。

## 3. 提交前检查

1. 确认 YAML 缩进正确且没有使用 Tab。
2. 确认每个论文 `key` 都存在于真实 `refs.bib`。
3. 确认 JSON 没有注释、漏逗号或多余尾逗号。
4. 不要在 YAML 中手写引用编号。
5. 提交时只添加计划修改的文件：

```powershell
git add -- figures/taxonomy/taxonomy.yaml `
           figures/taxonomy/style.json `
           figures/taxonomy/README.md
```
