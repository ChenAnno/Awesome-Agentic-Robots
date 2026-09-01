# Contributing

Thanks for helping keep this list useful. Anything is welcome: new papers, corrections to authors or
venues, better categorization, or dead-link fixes.

There are two ways to contribute.

**1. Open an issue (easiest).** Use the
[Add a paper](https://github.com/ChenAnno/Awesome-Agentic-Robots/issues/new/choose) template and we
will add it for you.

**2. Send a pull request.** Edit `README.md` directly and follow the format below.

---

## Entry format

Each paper is a four-line block. Copy this and swap every value for the real one. Paper entries do not
use PAPAV stage labels or topic tags.

```markdown
- **Paper Title Goes Here**  
  *Author One, Author Two, Author Three, et al.*  
  arXiv, 2026.08  
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/0000.00000) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/org/repo) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://org.github.io/project)
```

A filled-in entry:

```markdown
- **RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control**  
  *Anthony Brohan, Noah Brown, Justice Carbajal, et al.*  
  arXiv, 2023.07  
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2307.15818) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer2.github.io)
```

Line by line:

| Line | Contents |
| :-- | :-- |
| 1 | `- ` + **bold title**, then **two trailing spaces** |
| 2 | two spaces of indent + *italic* author list, then **two trailing spaces** |
| 3 | two spaces of indent + venue + `, ` + `YYYY.MM`, then **two trailing spaces** |
| 4 | two spaces of indent + Shields badge link group |

What to put in each slot:

| Slot | Replace with | Notes |
| :-- | :-- | :-- |
| `Paper Title Goes Here` | The title as printed | Lead with the short name if it has one: `RT-2: Vision-Language-Action Models...` |
| `Author One, Author Two, ...` | Full author list if short, else first 3 + `et al.` | For major industry releases, add a `Team: Lab or Company` line above |
| `arXiv` | `arXiv` for preprints, else the venue | Once accepted: `CoRL 2025`, `CVPR 2026`, ... |
| `2026.08` | `YYYY.MM` of the **first public version** | v1 on arXiv, not the camera-ready date — keeps ordering stable |
| `https://arxiv.org/abs/0000.00000` | arXiv **abs** page, or the DOI / publisher page | **Required.** Use the red `arXiv` badge for arXiv and the blue `Paper` badge otherwise; link the abstract, not the `/pdf/` URL |
| `https://github.com/org/repo` | Official code repo | Delete the whole `Code` badge if there is none |
| `https://org.github.io/project` | Project page | Delete the whole `Project` badge if there is none |

Optional badge extras, appended in this order: `Demo`, `Model`, `Dataset`, `Video`.
The `arXiv` or `Paper` badge always comes first.

**Never leave a template value in a real entry.** Before opening a PR:

```bash
grep -n "Paper Title Goes Here\|Author One\|0000.00000" README.md
```

The command should return no matches in `README.md`.

The two trailing spaces on lines 1, 2, and 3 are what produce the line breaks. Without them the entry
collapses into a single paragraph.

### Venue abbreviations

`arXiv` · `CVPR` · `ICCV` · `ECCV` · `NeurIPS` · `ICML` · `ICLR` · `AAAI` · `IJCAI` · `ACL` · `EMNLP` ·
`CoRL` · `RSS` · `ICRA` · `IROS` · `T-RO` · `RA-L` · `IJRR` · `TPAMI` · `SIGGRAPH`



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

- [ ] Entry follows the four-line format, including the two trailing spaces.
- [ ] Entry contains no PAPAV stage label or topic tag.
- [ ] No template values left over (`grep -n "Paper Title Goes Here\|Author One\|0000.00000" README.md`).
- [ ] Paper is not already listed (search the title in `README.md`).
- [ ] All links resolve.
- [ ] Date is `YYYY.MM` of the first public version.
- [ ] Placed in exactly one section, in the right position.
- [ ] Contents updated if sections changed.

## Style

- Keep prose lines wrapped at ~100 characters. Entry lines may run long; do not wrap them.
- Use plain ASCII punctuation in entries so the list stays greppable.
- No promotional language. The list is descriptive.
