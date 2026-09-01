# Contributing

Thanks for helping keep this list useful. Anything is welcome: new papers, title or link corrections,
better categorization, or dead-link fixes.

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
  [![MMEA](https://img.shields.io/badge/-MMEA-86CDB8?style=flat)](#b-multimodal-embodied-agents) [![arXiv](https://img.shields.io/badge/arXiv-Paper-E58A8F?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/0000.00000) [![Code](https://img.shields.io/github/stars/org/repo?style=flat-square&logo=github&label=Code&color=B7CADB)](https://github.com/org/repo) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://org.github.io/project)
```

A filled-in entry:

```markdown
- **RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control**  
  [![MMEA](https://img.shields.io/badge/-MMEA-86CDB8?style=flat)](#b-multimodal-embodied-agents) [![arXiv](https://img.shields.io/badge/arXiv-Paper-E58A8F?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.15818) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer2.github.io)
```

Line by line:

| Line | Contents |
| :-- | :-- |
| 1 | `- ` + **bold title**, then **two trailing spaces** |
| 2 | two spaces of indent + section badge + resource badge link group |

What to put in each slot:

| Slot | Replace with | Notes |
| :-- | :-- | :-- |
| `Paper Title Goes Here` | The title as printed | Lead with the short name if it has one: `RT-2: Vision-Language-Action Models...` |
| `MMEA` section badge | The badge for the selected section | Use `Sur`, `MMEA`, `MMA`, `RS`, or `Bench` from the table below; it always comes first |
| `https://arxiv.org/abs/0000.00000` | arXiv **abs** page, or the DOI / publisher page | **Required.** Use the red `arXiv` badge for arXiv and the blue `Paper` badge otherwise; link the abstract, not the `/pdf/` URL |
| `https://github.com/org/repo` | Official code repo | Use the dynamic `Code` badge shown above so its right side displays the live star count; delete the whole badge if there is no official repository |
| `https://org.github.io/project` | Project page | Delete the whole `Project` badge if there is none |

Use the pink `Blog` badge instead of `Paper` when the source is an official blog post rather than a
paper. Optional badge extras, appended in this order: `Demo`, `Model`, `Dataset`, `Video`. After the
section badge, the `arXiv`, `Paper`, or `Blog` badge always comes first.

| Section | Badge | Color | Anchor |
| :-- | :-- | :-- | :-- |
| A. Related Surveys | `Sur` | `F29A8F` | `#a-related-surveys` |
| B. Multimodal Embodied Agents | `MMEA` | `86CDB8` | `#b-multimodal-embodied-agents` |
| C. Multimodal Agents | `MMA` | `80DDE3` | `#c-multimodal-agents` |
| D. Robotic Systems | `RS` | `C4CC82` | `#d-robotic-systems` |
| E. Benchmarks | `Bench` | `B9A3E3` | `#e-benchmarks` |

**Never leave a template value in a real entry.** Before opening a PR:

```bash
grep -n "Paper Title Goes Here\|0000.00000" README.md
```

The command should return no matches in `README.md`.

The two trailing spaces on line 1 produce the line break between the title and badges.



## Placement rules

1. **One section per paper.** If a paper fits two sections, put it in the one matching its main
   contribution. Do not duplicate entries — cross-reference in the PR description instead.
2. **Newest first.** Insert at the top of the section unless that breaks the existing ordering.
3. **Section semantics:**
   - **A. Related Surveys** — surveys and reviews adjacent to the collection's scope.
   - **B. Multimodal Embodied Agents** — foundation-model-driven agents that close a multimodal
     perception, reasoning, and physical-action loop.
   - **C. Multimodal Agents** — agents acting primarily in digital environments such as screens,
     browsers, APIs, and software tools.
   - **D. Robotic Systems** — robot learning, control, hardware, data, and task or motion planning where
     the main contribution is on the robotics side.
   - **E. Benchmarks** — datasets, simulators, and evaluation suites, grouped by target system and
     simulated, real-world, or hybrid setting.
4. **Update Contents** if you add or rename a section.
5. **Add a News line** for a batch of additions (optional, but appreciated).

## Checklist before opening a PR

- [ ] Entry follows the two-line format, including the two trailing spaces after the title.
- [ ] The correct section badge appears first in the badge group.
- [ ] Entry contains no author, affiliation, venue, date, PAPAV stage label, or topic tag.
- [ ] No template values left over (`grep -n "Paper Title Goes Here\|0000.00000" README.md`).
- [ ] Paper is not already listed (search the title in `README.md`).
- [ ] All links resolve.
- [ ] Placed in exactly one section, in the right position.
- [ ] Contents updated if sections changed.

## Style

- Keep prose lines wrapped at ~100 characters. Entry lines may run long; do not wrap them.
- Use plain ASCII punctuation in entries so the list stays greppable.
- No promotional language. The list is descriptive.
