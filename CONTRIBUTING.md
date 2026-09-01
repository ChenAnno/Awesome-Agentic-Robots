# Contributing

Thanks for helping keep this list useful. Anything is welcome: new papers, title or link corrections,
better categorization, or dead-link fixes.

This repository follows the survey's capability-centric scope. PAPAV compares how multimodal agents,
robotic systems, and multimodal embodied agents realize the same recurring task loop: **Perceive**
constructs current-state evidence, **Anticipate** models action-conditioned futures, **Plan** selects a
feasible course, **Act** realizes an intervention, and **Verify** judges the outcome. It is a functional
view, not a requirement for a particular architecture, model family, task, or embodiment.

There are two ways to contribute.

**1. Open an issue (easiest).** Use the
[Add a paper](https://github.com/ChenAnno/Awesome-Agentic-Robots/issues/new/choose) template and we
will add it for you.

**2. Send a pull request.** Edit `README.md` directly and follow the format below.

---

## Entry format

Each paper is a compact two-line block. Copy this and swap every value for the real one. Paper entries
do not include author, affiliation, venue, date, PAPAV stage labels, or topic tags.

```markdown
- **Paper Title Goes Here**  
  [![MMEA](https://img.shields.io/badge/-MMEA-A8DDA8?style=flat)](#b-multimodal-embodied-agents) [![Paper](https://img.shields.io/badge/-Paper-E58A8F?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/0000.00000) [![Code](https://img.shields.io/github/stars/org/repo?style=flat-square&logo=github&label=Code&color=B7CADB)](https://github.com/org/repo) [![Project](https://img.shields.io/badge/-Project-9AC7E8?logo=googlechrome&logoColor=white&style=flat-square)](https://org.github.io/project)
```

A filled-in entry:

```markdown
- **π₀.₅: a Vision-Language-Action Model with Open-World Generalization**  
  [![MMEA](https://img.shields.io/badge/-MMEA-A8DDA8?style=flat)](#b-multimodal-embodied-agents) [![Paper](https://img.shields.io/badge/-Paper-E58A8F?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.16054) [![Code](https://img.shields.io/github/stars/Physical-Intelligence/openpi?style=flat-square&logo=github&label=Code&color=B7CADB)](https://github.com/Physical-Intelligence/openpi) [![Project](https://img.shields.io/badge/-Project-9AC7E8?logo=googlechrome&logoColor=white&style=flat-square)](https://www.pi.website/blog/pi05)
```

Line by line:

| Line | Contents |
| :-- | :-- |
| 1 | `- ` + **bold title**, then **two trailing spaces** |
| 2 | two spaces of indent + section badge + resource badge link group |

What to put in each slot:

| Slot | Replace with | Notes |
| :-- | :-- | :-- |
| `Paper Title Goes Here` | The title as printed | Lead with the short name if it has one: `π₀.₅: a Vision-Language-Action Model...` |
| `MMEA` section badge | The badge for the selected section | Use `Survey`, `MMEA`, `MMA`, `RS`, or `Bench` from the table below; it always comes first |
| `https://arxiv.org/abs/0000.00000` | arXiv **abs** page, or the DOI / publisher page | **Required.** Use the coral `Paper` badge with the arXiv logo for arXiv sources and the light-blue `Paper` badge for DOI or publisher sources; link the abstract, not the `/pdf/` URL |
| `https://github.com/org/repo` | Official code repo | Use the dynamic `Code` badge shown above so its right side displays the live star count; delete the whole badge if there is no official repository |
| `https://org.github.io/project` | Project page | Delete the whole `Project` badge if there is none |

Use the pink `Blog` badge instead of `Paper` when the source is an official blog post rather than a
paper. Optional badge extras, appended in this order: `Demo`, `Model`, `Dataset`, `Video`. After the
section badge, the `arXiv`, `Paper`, or `Blog` badge always comes first.

| Section | Badge | Color | Anchor |
| :-- | :-- | :-- | :-- |
| A. Related Surveys | `Survey` | `F29A8F` | `#a-related-surveys` |
| B. Multimodal Embodied Agents | `MMEA` | `A8DDA8` | `#b-multimodal-embodied-agents` |
| C. Multimodal Agents | `MMA` | `A9D6F5` | `#c-multimodal-agents` |
| D. Robotic Systems | `RS` | `F6C58D` | `#d-robotic-systems` |
| E. Benchmarks | `Bench` | `B9A3E3` | `#e-benchmarks` |

**Never leave a template value in a real entry.** Before opening a PR:

```bash
grep -n "Paper Title Goes Here\|0000.00000" README.md
```

The command should return no matches in `README.md`.

The two trailing spaces on line 1 produce the line break between the title and badges.



## Collection scope and placement

1. **One section per paper.** If a paper fits two sections, put it in the one matching its main
   contribution and system boundary. Do not duplicate entries — cross-reference in the PR description
   instead.
2. **Newest first.** Insert at the top of the section unless that breaks the existing ordering.
3. **Section semantics:**
   - **A. Related Surveys (`Survey`)** — surveys covering digital multimodal agents, robotic systems,
     multimodal embodied agents, unified digital-physical frameworks, or gaps in agent evaluation.
   - **B. Multimodal Embodied Agents (`MMEA`)** — general multimodal task reasoning closed around
     physical execution. The system should support physical state change, maintain a task goal or belief
     across interventions, invoke body-specific execution through semantic commands or skills, and feed
     physical evidence back into later task decisions. Multimodal input alone is not sufficient.
   - **C. Multimodal Agents (`MMA`)** — goal-directed agents that repeatedly observe and change a
     primarily digital environment, then use feedback in later decisions. Typical actions include GUI
     operations, API or tool calls, code execution, and language acts.
   - **D. Robotic Systems (`RS`)** — systems that sense and act through a physical body, including
     state estimation, mapping, task and motion planning, control, learned policies, robot datasets, and
     enabling methods whose main contribution is robotic rather than task-level multimodal agency.
   - **E. Benchmarks (`Bench`)** — benchmarks with well-defined tasks or interaction environments, a
     publicly identifiable evaluation protocol, at least one quantitative metric, and tasks or metrics
     related to one or more PAPAV capabilities. Classify by the primary evaluation target: MMEA, MMA,
     or RS; multimodal input alone does not make a robotics benchmark an MMEA benchmark.
4. **Update Contents** if you add or rename a section.
5. **Add a News line** for a batch of additions (optional, but appreciated).

For benchmarks, consolidate multiple papers describing the same release and use the most complete
primary source. Treat a successor release as a separate entry only when it introduces substantively new
tasks, environments, datasets, or evaluation protocols.

## Checklist before opening a PR

- [ ] Entry follows the two-line format, including the two trailing spaces after the title.
- [ ] The correct section badge appears first in the badge group.
- [ ] Entry contains no author, affiliation, venue, date, PAPAV stage label, or topic tag.
- [ ] No template values left over (`grep -n "Paper Title Goes Here\|0000.00000" README.md`).
- [ ] Paper is not already listed (search the title in `README.md`).
- [ ] The Paper or Blog link is a primary source, and any Code or Project link is official.
- [ ] All links resolve; Code points to the repository root so its live star count remains valid.
- [ ] Placed in exactly one section, in the right position.
- [ ] Benchmark entries satisfy the public-task, protocol, metric, and PAPAV-relevance criteria above.
- [ ] Contents updated if sections changed.

## Style

- Keep prose lines wrapped at ~100 characters. Entry lines may run long; do not wrap them.
- Use plain ASCII punctuation in entries so the list stays greppable.
- No promotional language. The list is descriptive.
