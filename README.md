<div align="center">

# Awesome Multimodal-Embodied-Agent

**A curated list of papers on multimodal embodied agents.**

*Companion repository for our survey:* ***&lt;Survey Title Here&gt;*** &nbsp;[[Paper](#)]&nbsp;[[Project Page](#)]

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/ChenAnno/Awesome-Agentic-Robots?style=social)](https://github.com/ChenAnno/Awesome-Agentic-Robots/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ChenAnno/Awesome-Agentic-Robots?style=social)](https://github.com/ChenAnno/Awesome-Agentic-Robots/network/members)
[![Last commit](https://img.shields.io/github/last-commit/ChenAnno/Awesome-Agentic-Robots)](https://github.com/ChenAnno/Awesome-Agentic-Robots/commits/main)

</div>

---

## About

This repository tracks the literature surveyed in **&lt;Survey Title Here&gt;**. It collects work at the
intersection of multimodal foundation models, autonomous agents, and robotics, organized into X
parts:

XXX


> **Note**
> This list is actively maintained. If we missed your paper, please
> [open an issue](https://github.com/ChenAnno/Awesome-Agentic-Robots/issues/new/choose) or send a PR —
> see [CONTRIBUTING.md](./CONTRIBUTING.md).

<!-- Drop the survey's taxonomy figure here once it exists.
<div align="center">
  <img src="assets/overview.png" width="90%" alt="Taxonomy of agentic robots">
</div>
-->

## News

- **[2026/08/05]** 🎉 Repository created.
<!-- - **[YYYY/MM/DD]** Our survey is available on arXiv: [link](#). -->
<!-- - **[YYYY/MM/DD]** Added N new papers to Section X. -->

## Table of Contents

<!--
- [Awesome Multimodal-Embodied-Agent](#awesome-multimodal-embodied-agent)
  - [About](#about)
  - [News](#news)
  - [Table of Contents](#table-of-contents)
  - [A. Related Surveys](#a-related-surveys)
  - [B. Multi-Modal Agents](#b-multi-modal-agents)
  - [C. Robots](#c-robots)
  - [D. Benchmarks](#d-benchmarks)
    - [Multi-Modal Agents](#multi-modal-agents)
    - [Robot Systems](#robot-systems)
    - [Robot-Agent](#robot-agent)
  - [Contributing](#contributing)
  - [Acknowledgements](#acknowledgements)
  - [Citation](#citation)
  - [Star History](#star-history)
  - [License](#license)
-->

---

## A. Related Surveys

Prior surveys and reviews adjacent to our scope. In the PR, note how a new survey differs from the ones
already listed.

<div align="right"><a href="#table-of-contents">&uarr; back to top</a></div>

---

## B. Multimodal Embodied Agents

---

## C. Multimodal Agents

Agents built on multi-modal foundation models that perceive and act in **digital** environments —
screens, browsers, documents, and APIs — without a physical body.

- **ReAct: Synergizing Reasoning and Acting in Language Models**<br>
  Citation key: `yao2023react`<br>
  Team: Princeton University; Google Research | ICLR 2023<br>
  *Shunyu Yao, Jeffrey Zhao, Dian Yu, et al.*<br>
  Tags: `Framework` `Plan` `Act` `Language Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2210.03629) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ysymyth/ReAct) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://react-lm.github.io/)

- **SeeClick: Harnessing GUI Grounding for Advanced Visual GUI Agents**<br>
  Citation key: `cheng2024seeclick`<br>
  Team: Nanjing University; Shanghai AI Laboratory | ACL 2024<br>
  *Kanzhi Cheng, Qiushi Sun, Yougang Chu, et al.*<br>
  Tags: `Perceive` `Act` `GUI Grounding` `Computer Use`<br>
  [![Paper](https://img.shields.io/badge/-ACL-0F6AB4?style=flat-square)](https://aclanthology.org/2024.acl-long.505/) [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2401.10935) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/njucckevin/SeeClick)

- **OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments**<br>
  Citation key: `xie2024osworld`<br>
  Team: HKU; Salesforce Research; CMU; University of Waterloo | NeurIPS 2024<br>
  *Tianbao Xie, Danyang Zhang, Jixuan Chen, et al.*<br>
  Tags: `Perceive` `Verify` `Benchmark` `Computer Use`<br>
  [![Paper](https://img.shields.io/badge/-NeurIPS-0F6AB4?style=flat-square)](https://proceedings.neurips.cc/paper_files/paper/2024/hash/5d413e48f84dc61244b6be550f1cd8f5-Abstract-Datasets_and_Benchmarks_Track.html) [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2404.07972) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/xlang-ai/OSWorld) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://os-world.github.io/)

- **Position: LLMs Can’t Plan, But Can Help Planning in LLM-Modulo Frameworks**<br>
  Citation key: `pmlr-v235-kambhampati24a`<br>
  Team: Arizona State University | ICML 2024<br>
  *Subbarao Kambhampati, Karthik Valmeekam, Lin Guan, et al.*<br>
  Tags: `Plan` `Verification` `Position Paper` `Neuro-Symbolic`<br>
  [![Paper](https://img.shields.io/badge/-PMLR-0F6AB4?style=flat-square)](https://proceedings.mlr.press/v235/kambhampati24a.html)

- **GPT-4V(ision) Is a Generalist Web Agent, If Grounded**<br>
  Citation key: `zheng2024gpt`<br>
  Team: The Ohio State University | ICML 2024<br>
  *Boyuan Zheng, Boyu Gou, Jihyung Kil, et al.*<br>
  Tags: `Act` `Plan` `Web Agent` `Action Grounding`<br>
  [![Paper](https://img.shields.io/badge/-PMLR-0F6AB4?style=flat-square)](https://proceedings.mlr.press/v235/zheng24e.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/OSU-NLP-Group/SeeAct) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osu-nlp-group.github.io/SeeAct/)

- **ShowUI: One Vision-Language-Action Model for GUI Visual Agent**<br>
  Citation key: `shou2025showui`<br>
  Team: Show Lab, NUS; Microsoft | CVPR 2025<br>
  *Kevin Qinghong Lin, Linjie Li, Difei Gao, et al.*<br>
  Tags: `Act` `GUI Agent` `VLA` `Action Grounding`<br>
  [![Paper](https://img.shields.io/badge/-CVPR-0F6AB4?style=flat-square)](https://openaccess.thecvf.com/content/CVPR2025/papers/Lin_ShowUI_One_Vision-Language-Action_Model_for_GUI_Visual_Agent_CVPR_2025_paper.pdf) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/showlab/ShowUI)

- **Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control**<br>
  Citation key: `zheng2024synapse`<br>
  Team: Nanyang Technological University | ICLR 2024<br>
  *Longtao Zheng, Rundong Wang, Xinrun Wang, et al.*<br>
  Tags: `Adapt` `Memory` `Trajectory Retrieval` `Computer Control`<br>
  [![Paper](https://img.shields.io/badge/-OpenReview-8C1B13?style=flat-square)](https://openreview.net/forum?id=Pc8AU1aF5e) [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2306.07863) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ltzheng/Synapse) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ltzheng.github.io/Synapse/)

- **Reflexion: Language Agents with Verbal Reinforcement Learning**<br>
  Citation key: `shinn2023reflexion`<br>
  Team: Northeastern University; Princeton University | NeurIPS 2023<br>
  *Noah Shinn, Federico Cassano, Edward Berman, et al.*<br>
  Tags: `Adapt` `Verbal Reflection` `Episodic Memory` `Language Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2303.11366) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/noahshinn/reflexion)

<div align="right"><a href="#table-of-contents">&uarr; back to top</a></div>

---

## C. Robotic Systems

Robot learning, perception, and control in the **physical** world — vision-language-action models,
manipulation, navigation, humanoids, and the data and simulators behind them.

- **Going Beyond World Models & VLAs**<br>
  Citation key: `florence2026going`<br>
  Team: Generalist AI | Industry Perspective, 2026<br>
  *Pete Florence and the Generalist Team*<br>
  Tags: `Framework` `Industry Perspective` `VLA` `World Model`<br>
  [![Article](https://img.shields.io/badge/-Article-FF6D00?logo=rss&logoColor=white&style=flat-square)](https://generalistai.com/blog/beyond-world-models)

- **PaLM-E: An Embodied Multimodal Language Model**<br>
  Citation key: `driess2023palm`<br>
  Team: Robotics at Google; TU Berlin | ICML 2023<br>
  *Danny Driess, Fei Xia, Mehdi S. M. Sajjadi, et al.*<br>
  Tags: `Perceive` `Plan` `Multimodal Model` `Robotics`<br>
  [![Paper](https://img.shields.io/badge/-PMLR-0F6AB4?style=flat-square)](https://proceedings.mlr.press/v202/driess23a.html) [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2303.03378) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://palm-e.github.io/)

- **3D-ViTac: Learning Fine-Grained Manipulation with Visuo-Tactile Sensing**<br>
  Citation key: `pmlr-v270-huang25e`<br>
  Team: Columbia University; UIUC; University of Washington | CoRL 2024 (PMLR 270, 2025)<br>
  *Binghao Huang, Yixuan Wang, Xinyi Yang, et al.*<br>
  Tags: `Perceive` `Act` `Visuo-Tactile Sensing` `Dexterous Manipulation`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.24091) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v270/huang25e.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/binghao-huang/3d-vitac-training-code) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://binghao-huang.github.io/3D-ViTac/)

- **ConceptGraphs: Open-Vocabulary 3D Scene Graphs for Perception and Planning**<br>
  Citation key: `gu2024conceptgraphs`<br>
  Team: University of Toronto; Université de Montréal; MIT | ICRA 2024<br>
  *Qiao Gu, Alihusein Kuwajerwala, Sacha Morin, et al.*<br>
  Tags: `Perceive` `Plan` `3D Scene Graph` `Spatial Memory`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2309.16650) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/concept-graphs/concept-graphs) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://concept-graphs.github.io/)

- **SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities**<br>
  Citation key: `chen2024spatialvlm`<br>
  Team: Google DeepMind; Google Research; MIT | CVPR 2024<br>
  *Boyuan Chen, Zhuo Xu, Sean Kirmani, et al.*<br>
  Tags: `Perceive` `Spatial Reasoning` `Vision-Language Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2401.12168) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://openaccess.thecvf.com/content/CVPR2024/html/Chen_SpatialVLM_Endowing_Vision-Language_Models_with_Spatial_Reasoning_Capabilities_CVPR_2024_paper.html) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://spatial-vlm.github.io/)

- **APPLE: Toward General Active Perception via Reinforcement Learning**<br>
  Citation key: `schneider2026apple`<br>
  Team: TU Darmstadt; TU Dresden; DFKI; LIRIS/CNRS & École Centrale de Lyon | ICLR 2026<br>
  *Tim Schneider, Cristiana de Farias, Roberto Calandra, et al.*<br>
  Tags: `Perceive` `Active Perception` `Reinforcement Learning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2505.06182) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://openreview.net/forum?id=ldyyd9FqC6) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/TimSchneider42/apple/) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://timschneider42.github.io/apple/)

- **Mastering diverse control tasks through world models**<br>
  Citation key: `hafner2025dreamerv3`<br>
  Team: Google DeepMind; University of Toronto | Nature 640, 647–653 (2025)<br>
  *Danijar Hafner, Jurgis Pasukonis, Jimmy Ba, et al.*<br>
  Tags: `Anticipate` `World Model` `Model-Based Reinforcement Learning`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1038/s41586-025-08744-2) [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2301.04104) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/danijar/dreamerv3) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/dreamerv3/)

- **DayDreamer: World Models for Physical Robot Learning**<br>
  Citation key: `pmlr-v205-wu23c`<br>
  Team: University of California, Berkeley | CoRL 2022 (PMLR 205, 2023)<br>
  *Philipp Wu, Alejandro Escontrela, Danijar Hafner, et al.*<br>
  Tags: `Anticipate` `World Model` `Robot Learning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2206.14176) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v205/wu23c.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/danijar/daydreamer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/daydreamer/)

- **Language Models as Zero-Shot Planners: Extracting Actionable Knowledge for Embodied Agents**<br>
  Citation key: `pmlr-v162-huang22a`<br>
  Team: UC Berkeley; Carnegie Mellon University; Google Brain | ICML 2022<br>
  *Wenlong Huang, Pieter Abbeel, Deepak Pathak, et al.*<br>
  Tags: `Plan` `LLM Planning` `Embodied Agent`<br>
  [![Paper](https://img.shields.io/badge/-PMLR-0F6AB4?style=flat-square)](https://proceedings.mlr.press/v162/huang22a.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/huangwl18/language-planner) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://huangwl18.github.io/language-planner/)

- **Do As I Can, Not As I Say: Grounding Language in Robotic Affordances**<br>
  Citation key: `ahn2022do`<br>
  Team: Robotics at Google; Everyday Robots | CoRL 2022 (PMLR 205, 2023)<br>
  *Michael Ahn, Anthony Brohan, Noah Brown, et al.*<br>
  Tags: `Plan` `Language Grounding` `Robot Affordances`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2204.01691) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v205/ichter23a.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/google-research/google-research/tree/master/saycan) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://say-can.github.io/)

- **ProgPrompt: Generating Situated Robot Task Plans Using Large Language Models**<br>
  Citation key: `singh2023progprompt`<br>
  Team: University of Southern California; NVIDIA | ICRA 2023<br>
  *Ishika Singh, Valts Blukis, Arsalan Mousavian, et al.*<br>
  Tags: `Plan` `Program Generation` `Embodied Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2209.11302) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/NVlabs/progprompt-vh) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://progprompt.github.io/)

- **Code as Policies: Language Model Programs for Embodied Control**<br>
  Citation key: `liang2023code`<br>
  Team: Robotics at Google | ICRA 2023<br>
  *Jacky Liang, Wenlong Huang, Fei Xia, et al.*<br>
  Tags: `Plan` `Act` `Code Generation` `Robot Control`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2209.07753) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/google-research/google-research/tree/master/code_as_policies) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://code-as-policies.github.io/)

- **RT-1: Robotics Transformer for Real-World Control at Scale**<br>
  Citation key: `brohan2023rt1`<br>
  Team: Robotics at Google; Everyday Robots | RSS 2023<br>
  *Anthony Brohan, Noah Brown, Justice Carbajal, et al.*<br>
  Tags: `Act` `VLA` `Robot Control` `Generalist Policy`<br>
  [![Paper](https://img.shields.io/badge/-RSS-0F6AB4?style=flat-square)](https://roboticsproceedings.org/rss19/p025.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/google-research/robotics_transformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer1.github.io/)

- **RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control**<br>
  Citation key: `brohan2023rt2`<br>
  Team: Google DeepMind | CoRL 2023<br>
  *Anthony Brohan, Noah Brown, Justice Carbajal, et al.*<br>
  Tags: `Act` `VLA` `Robot Control` `Knowledge Transfer`<br>
  [![Paper](https://img.shields.io/badge/-PMLR-0F6AB4?style=flat-square)](https://proceedings.mlr.press/v229/zitkovich23a.html) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer2.github.io/)

- **π₀: A Vision-Language-Action Flow Model for General Robot Control**<br>
  Citation key: `black2024pi0`<br>
  Team: Physical Intelligence | arXiv 2024<br>
  *Kevin Black, Noah Brown, Danny Driess, et al.*<br>
  Tags: `Act` `VLA` `Flow Matching` `Generalist Policy`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.24164) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/Physical-Intelligence/openpi) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.pi.website/blog/pi0)

- **RDT-1B: a Diffusion Foundation Model for Bimanual Manipulation**<br>
  Citation key: `liu2024rdt`<br>
  Team: Tsinghua University, THBI Lab | ICLR 2025<br>
  *Songming Liu, Lingxuan Wu, Bangguo Li, et al.*<br>
  Tags: `Act` `Diffusion Policy` `Bimanual Manipulation` `Robot Foundation Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.07864) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.iclr.cc/paper_files/paper/2025/hash/49f80e4d2471ad4f2edf4f5f1ab62339-Abstract-Conference.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/thu-ml/RoboticsDiffusionTransformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rdt-robotics.github.io/rdt-robotics/)

- **Claude Plays Robotics**<br>
  Citation key: `berman2026claude`<br>
  Team: Anthropic Frontier Red Team | Research Report, 2026<br>
  *Shmuel Berman, Michael Ilie, Jia Deng, et al.*<br>
  Tags: `Act` `Industry Report` `LLM Robotics` `Evaluation`<br>
  [![Research](https://img.shields.io/badge/-Research-FF6D00?logo=anthropic&logoColor=white&style=flat-square)](https://www.anthropic.com/research/claude-plays-robotics)

- **RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation**<br>
  Citation key: `bousmalis2023robocat`<br>
  Team: Google DeepMind | TMLR 2023<br>
  *Konstantinos Bousmalis, Giulia Vezzani, Dushyant Rao, et al.*<br>
  Tags: `Adapt` `Self-Improvement` `Generalist Policy` `Robot Learning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2306.11706) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://deepmind.google/blog/robocat-a-self-improving-robotic-agent)

- **RoboTTT: Context Scaling for Robot Policies**<br>
  Citation key: `jiang2026robotttt`<br>
  Team: NVIDIA GEAR Lab; Stanford University | arXiv 2026<br>
  *Yunfan Jiang, Yevgen Chebotar, Ruijie Zheng, et al.*<br>
  Tags: `Adapt` `Test-Time Training` `Long Context` `VLA`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2607.15275) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://research.nvidia.com/labs/gear/robottt/)

<div align="right"><a href="#table-of-contents">&uarr; back to top</a></div>

---

## D. Benchmarks
### Multimodal Agents

#### Understanding

- **MMMU-Pro: A More Robust Multi-discipline Multimodal Understanding Benchmark**  
  Team: Carnegie Mellon University  
  *Xiang Yue, Tianyu Zheng, Yuansheng Ni, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2409.02813) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/MMMU-Benchmark/MMMU) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mmmu-benchmark.github.io/)

- **Video-MME-v2: Towards the Next Stage in Benchmarks for Comprehensive Video Understanding**  
  Team: Nanjing University  
  *Chaoyou Fu, Haozhi Yuan, Yuhao Dong, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.05015) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/MME-Benchmarks/Video-MME-v2) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://video-mme-v2.netlify.app/)

- **Thinking in Space: How Multimodal Large Language Models See, Remember, and Recall Spaces**  
  Team: New York University  
  *Jihan Yang, Shusheng Yang, Anjali W. Gupta, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2412.14171) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/vision-x-nyu/thinking-in-space) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vision-x-nyu.github.io/thinking-in-space.github.io/)

#### Interaction

- **WebArena: A Realistic Web Environment for Building Autonomous Agents**  
  Team: Carnegie Mellon University  
  *Shuyan Zhou, Frank F. Xu, Hao Zhu, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2307.13854) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/web-arena-x/webarena) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://webarena.dev/og/)

- **VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks**  
  Team: Carnegie Mellon University  
  *Jing Yu Koh, Robert Lo, Lawrence Jang, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2401.13649) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/web-arena-x/visualwebarena) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://jykoh.com/vwa)

- **OSWorld 2.0: Benchmarking Computer-Use Agents on Long-Horizon Real-World Tasks**  
  Team: XLANG Lab, The University of Hong Kong  
  *Mengqi Yuan, Zilong Zhou, Xinzhuang Xiong, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.29537) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/xlang-ai/OSWorld-V2) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osworld-v2.xlang.ai/)

- **AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents**  
  Team: Google DeepMind  
  *Christopher Rawles, Sarah Clinckemaillie, Yifan Chang, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/pdf/2405.14573) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/google-research/android_world) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://google-research.github.io/android_world/)

- **GAIA: A Benchmark for General AI Assistants**  
  Team: Meta AI  
  *Grégoire Mialon, Clémentine Fourrier, Craig Swift, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2311.12983) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](http://huggingface.co/gaia-benchmark) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](http://huggingface.co/gaia-benchmark)

- **WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models**  
  Team: Zhejiang University & Westlake University  
  *Hongliang He, Wenlin Yao, Kaixin Ma, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2401.13919) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/MinorJerry/WebVoyager)

- **AgentStudio: A Toolkit for Building General Virtual Agents**  
  Team: Nanyang Technological University  
  *Longtao Zheng, Zhiyuan Huang, Zhenghai Xue, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2403.17918) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ltzheng/agent-studio) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ltzheng.github.io/agent-studio/)

- **GameWorld: Towards Standardized and Verifiable Evaluation of Multimodal Game Agents**  
  Team: Show Lab, National University of Singapore  
  *Mingyu Ouyang, Siyuan Hu, Kevin Qinghong Lin, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.07429) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/gameworld-project/gameworld) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://gameworld-project.github.io/)

- **MMInA: Benchmarking Multihop Multimodal Internet Agents**  
  Team: S-Lab, Nanyang Technological University  
  *Shulin Tian, Ziniu Zhang, Liangyu Chen, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2404.09992) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/shulin16/mmina) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mmina.cliangyu.com/)

- **CRAB: Cross-environment Agent Benchmark for Multimodal Language Model Agents**  
  Team: KAUST, Eigent.AI & CAMEL-AI  
  *Tianqi Xu, Linyao Chen, Dai-Jie Wu, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2407.01511) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/camel-ai/crab) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://crab.camel-ai.org/)

- **iVISPAR -- An Interactive Visual-Spatial Reasoning Benchmark for VLMs**  
  Team: Institute of Cognitive Science, Osnabrück University  
  *Julius Mayer, Mohamad Ballout, Serwan Jassim, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2502.03214) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://microcosm.ai/ivispar/)

- **MMSearch-Plus: Benchmarking Provenance-Aware Search for Multimodal Browsing Agents**  
  Team: The University of Hong Kong  
  *Xijia Tao, Yihua Teng, Xinxing Su, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2508.21475) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/mmsearch-plus/MMSearch-Plus) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mmsearch-plus.github.io/)

- **OmniGAIA: Towards Native Omni-Modal AI Agents**  
  Team: Gaoling School of Artificial Intelligence, Renmin University of China  
  *Xiaoxi Li, Wenxiang Jiao, Jiarui Jin, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.22897) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/RUC-NLPIR/OmniGAIA)

- **AgentVista: Evaluating Multimodal Agents in Ultra-Challenging Realistic Visual Scenarios**  
  Team: The Hong Kong University of Science and Technology  
  *Zhaochen Su, Jincheng Gao, Hangyu Guo, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.23166) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/hkust-nlp/AgentVista) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://agentvista-bench.github.io/)

#### Generation

- **SWE-BENCH: CAN LANGUAGE MODELS RESOLVE REAL-WORLD GITHUB ISSUES?**  
  Team: Princeton University  
  *Carlos E. Jimenez, John Yang, Alexander Wettig, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2310.06770) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/SWE-bench/SWE-bench) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.swebench.com/SWE-bench/)

- **GameCraft-Bench: Can Agents Build Playable Games End-to-End in a Real Game Engine?**  
  Team: The Chinese University of Hong Kong, Shenzhen & Shenzhen Loop Area Institute  
  *Tongxu Luo, Rongsheng Wang, Jiaxi Bi, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.17861) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/FreedomIntelligence/gamecraft-bench) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://tongxuluo.github.io/gamecraft-bench-website/)

- **WebGen-Bench: Evaluating LLMs on Generating Interactive and Functional Websites from Scratch**  
  Team: MMLab, The Chinese University of Hong Kong  
  *Zimu Lu, Yunqiao Yang, Houxing Ren, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2505.03733) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/mnluzimu/WebGen-Bench)

- **WorldModelBench: Judging Video Generation Models As World Models**  
  Team: University of California, Berkeley  
  *Dacheng Li, Yunhao Fang, Yukang Chen, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2502.20694) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/WorldModelBench-Team/WorldModelBench/tree/main?tab=readme-ov-file#evaluation) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://worldmodelbench-team.github.io/)

- **PBench: A Physical AI Benchmark for World Models**  
  Team: NVIDIA  
  *NVIDIA*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://research.nvidia.com/labs/cosmos-lab/pbench/) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://huggingface.co/datasets/nvidia/PBench)

<div align="right"><a href="#table-of-contents">&uarr; back to top</a></div>

### Robotic Systems

#### Sim

- **Dream.exe: Can Video Generation Models Dream Executable Robot Manipulation?**  
  Team: Show Lab, National University of Singapore  
  *Rui Zhao, Kaiming Yang, Jifeng Zhu, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.04811) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/showlab/Dream.exe)

- **Vision-and-Language Navigation: Interpreting visually-grounded navigation instructions in real environments**  
  Team: Australian National University  
  *Peter Anderson, Qi Wu, Damien Teney, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1711.07280) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://bringmeaspoon.org)

- **GOAT-Bench: A Benchmark for Multi-Modal Lifelong Navigation**  
  Team: Georgia Institute of Technology  
  *Mukul Khanna, Ram Ramrakhya, Gunjan Chhablani, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2404.06609) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/Ram81/goat-bench) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mukulkhanna.github.io/goat-bench/)

- **VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation with Long-Horizon Reasoning Tasks**  
  Team: Fudan University  
  *Shiduo Zhang, Zhe Xu, Peiju Liu, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2412.18194) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/OpenMOSS/VLABench) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vlabench.github.io/)

- **CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks**  
  Team: University of Freiburg  
  *Oier Mees, Lukas Hermann, Erick Rosete-Beas, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2112.03227) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/mees/calvin) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](http://calvin.cs.uni-freiburg.de/)

- **ALFRED: A Benchmark for Interpreting Grounded Instructions for Everyday Tasks**  
  Team: University of Washington  
  *Mohit Shridhar, Jesse Thomason, Daniel Gordon, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1912.01734) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/askforalfred/alfred) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://askforalfred.com/)

- **TEACh: Task-driven Embodied Agents that Chat**  
  Team: Amazon Alexa AI  
  *Aishwarya Padmakumar, Jesse Thomason, Ayush Shrivastava, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2110.00534) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/alexa/teach)

- **BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation**  
  Team: Stanford University  
  *Chengshu Li, Ruohan Zhang, Josiah Wong, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2403.09227) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/StanfordVL/BEHAVIOR-1K) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://behavior.stanford.edu/index.html)

- **LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning**  
  Team: The University of Texas at Austin  
  *Bo Liu, Yifeng Zhu, Chongkai Gao, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2306.03310) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/Lifelong-Robot-Learning/LIBERO) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://libero-project.github.io/intro.html)

- **LIBERO-PRO: Towards Robust and Fair Evaluation of Vision-Language-Action Models Beyond Memorization**  
  Team: Huazhong University of Science and Technology  
  *Xueyang Zhou, Yangming Xu, Guiyao Tie, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.03827) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/Zxy-MLlab/LIBERO-PRO) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://zxy-mllab.github.io/LIBERO-PRO-Webpage/)

- **RoboCasa365: A Large-Scale Simulation Framework for Training and Benchmarking Generalist Robots**  
  Team: The University of Texas at Austin  
  *Soroush Nasiriany, Sepehr Nasiriany, Abhiram Maddukuri, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2603.04356) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/robocasa/robocasa) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robocasa.ai/)

- **RLBench: The Robot Learning Benchmark & Learning Environment**  
  Team: Dyson Robotics Lab, Imperial College London  
  *Stephen James, Zicong Ma, David Rovick Arrojo, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1909.12271) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/stepjam/RLBench) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/rlbench)

- **ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills**  
  Team: ShanghaiTech University  
  *Jiayuan Gu, Fanbo Xiang, Xuanlin Li, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2302.04659) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/mani-skill/ManiSkill) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://maniskill2.github.io/)

- **Safety-Gymnasium: A Unified Safe Reinforcement Learning Benchmark**  
  Team: PKU-Alignment, Peking University  
  *Jiaming Ji, Borong Zhang, Jiayi Zhou, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2310.12567) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/PKU-Alignment/safety-gymnasium) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://safety-gymnasium.readthedocs.io/en/latest/)

- **SafeManip: A Property-Driven Benchmark for Temporal Safety Evaluation in Robotic Manipulation**  
  Team: Georgia Institute of Technology  
  *Chengyue Huang, Khang Vo Huynh, Sebastian Elbaum, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.12386) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/chengyuehuang511/SafeManip) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://hvkhcm.github.io/projects/safemanip/)

- **RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies**  
  Team: NVIDIA Research  
  *Xuning Yang, Rishit Dagli, Alex Zook, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.09860) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/NVLabs/RoboLab) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://research.nvidia.com/labs/srl/projects/robolab/)

- **Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning**  
  Team: University of California, Berkeley  
  *Tianhe Yu, Deirdre Quillen, Zhanpeng He, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1910.10897) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/Farama-Foundation/Metaworld) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://metaworld.farama.org/)

- **robosuite: A Modular Simulation Framework and Benchmark for Robot Learning**  
  Team: ARISE Initiative  
  *Yuke Zhu, Josiah Wong, Ajay Mandlekar, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2009.12293) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ARISE-Initiative/robosuite) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robosuite.ai/)

#### Real

- **FurnitureBench: Reproducible Real-World Benchmark for Long-Horizon Complex Manipulation**  
  Team: KAIST  
  *Minho Heo, Youngwoon Lee, Doohyun Lee, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2305.12821) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/clvrai/furniture-bench) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://clvrai.github.io/furniture-bench/)

- **FMB: a Functional Manipulation Benchmark for Generalizable Robotic Learning**  
  Team: RAIL, University of California, Berkeley  
  *Jianlan Luo, Charles Xu, Fangchen Liu, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2401.08553) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/rail-berkeley/fmb) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://functional-manipulation-benchmark.github.io/)

- **RoboArena: Distributed Real-World Evaluation of Generalist Robot Policies**  
  Team: University of California, Berkeley  
  *Pranav Atreya, Karl Pertsch, Tony Lee, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2506.18123v2) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/robo-arena/roboarena) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robo-arena.github.io/)

- **BEHAVIOR Robot Suite: Streamlining Real-World Whole-Body Manipulation for Everyday Household Activities**  
  Team: Stanford University  
  *Yunfan Jiang, Ruohan Zhang, Josiah Wong, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2503.05652) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/behavior-robot-suite/brs-algo) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://behavior-robot-suite.github.io/)

- **VLA-REPLICA: A Low-Cost, Reproducible Benchmark for Real-World Evaluation of Vision-Language-Action Models**  
  Team: Intelligent Robotics and Vision Lab, The University of Texas at Dallas  
  *Alex S. Huang, Jiahui Zhang, Shiqing Tang, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.20774) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/IRVLUTD/VLAReplica) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://irvlutd.github.io/VLAReplica/)

- **RoboChallenge: Large-scale Real-robot Evaluation of Embodied Policies**  
  Team: RoboChallenge  
  *RoboChallenge Team*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://robochallenge.ai/robochallenge_techreport.pdf) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robochallenge.ai/home)

#### Hybrid

- **RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins**  
  Team: The University of Hong Kong & Shanghai AI Laboratory  
  *Yao Mu, Tianxing Chen, Zanxin Chen, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2504.13059) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/robotwin-Platform/RoboTwin) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotwin-platform.github.io/)

- **RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation**  
  Team: MMLab@HKU & Lumina EAI  
  *Tianxing Chen, Zanxin Chen, Baijun Chen, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2506.18088) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/robotwin-Platform/RoboTwin) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotwin-platform.github.io/)

- **RobotArena ∞: Scalable Robot Benchmarking via Real-to-Sim Translation**  
  Team: Carnegie Mellon University  
  *Yash Jangir, Yidi Zhang, Pang-Chi Lo, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.23571) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/offjangir/RobotArena) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotarenainf.github.io/)

- **HomeRobot: Open-Vocabulary Mobile Manipulation**  
  Team: Georgia Institute of Technology  
  *Sriram Yenamandra, Arun Ramachandran, Karmesh Yadav, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2306.11565) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/facebookresearch/home-robot) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ovmm.github.io/)

- **RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies**  
  Team: MMLab@HKU  
  *Tianxing Chen, Yue Chen, Zixuan Li, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2607.04434) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/robodojo-benchmark/RoboDojo) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robodojo-benchmark.com/)

- **RoboWM-Bench: A Benchmark for Evaluating World Models in Robotic Manipulation**  
  Team: Peking University  
  *Feng Jiang, Yang Chen, Kyle Xu, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.19092) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/fffstrong/RoboWM-Bench) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robowm-bench.github.io/RoboWM-Bench/)

- **Assistance Without Interruption: A Benchmark and LLM-based Framework for Non-Intrusive Human-Robot Assistance**  
  Team: Institute of AI and Robotics, Xi’an Jiaotong University  
  *Yuedi Zhang, Shuanghao Bai, Wanqi Zhou, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.01368) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/Cognition2Action-Lab/NIABench.git) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://renytek13.github.io/assistance-without-interruption/)

<div align="right"><a href="#table-of-contents">&uarr; back to top</a></div>

### Multimodal Embodied Agents

#### Sim

- **PARTNR: A Benchmark for Planning and Reasoning in Embodied Multi-agent Tasks**  
  Team: FAIR, Meta  
  *Matthew Chang, Gunjan Chhablani, Alexander Clegg, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2411.00081) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/facebookresearch/partnr-planner/tree/main/) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://aihabitat.org/partnr/)

- **EMBODIEDBENCH: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents**  
  Team: University of Illinois Urbana-Champaign  
  *Rui Yang, Hanyang Chen, Junyu Zhang, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2502.09560) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/EmbodiedBench/EmbodiedBench) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://embodiedbench.github.io/)

- **RoboCerebra: A Large-scale Benchmark for Long-horizon Robotic Manipulation Evaluation**  
  Team: Beihang University  
  *Songhao Han, Boxiang Qiu, Yue Liao, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2506.06677) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/qiuboxiang/RoboCerebra) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robocerebra.github.io/)

- **RoCo: Dialectic Multi-Robot Collaboration with Large Language Models**  
  Team: Columbia University  
  *Zhao Mandi, Shreeya Jain, Shuran Song*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2307.04738) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/MandiZhao/robot-collab) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://project-roco.github.io/)

- **EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents**  
  Team: National University of Singapore  
  *Junting Chen, Checheng Yu, Xunzhe Zhou, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.22662v2) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/SgtVincent/EMOS) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://emos-project.github.io/)

- **IS-Bench: Evaluating Interactive Safety of VLM-Driven Embodied Agents in Daily Household Tasks**  
  Team: Shanghai Jiao Tong University & Shanghai Artificial Intelligence Laboratory  
  *Xiaoya Lu, Zeren Chen, Xuhao Hu, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2506.16402) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/AI45Lab/IS-Bench)

- **ESI-Bench: Towards Embodied Spatial Intelligence that Closes the Perception-Action Loop**  
  Team: Stanford University  
  *Yining Hong, Jiageng Liu, Han Yin, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.18746) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ESI-Bench/ESI-Bench) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://esi-bench.github.io/)

#### Real

- **PLanAR: Planning-Language-Grounded Agentic Reasoning for Robot Manipulation**  
  Team: Purdue University  
  *Pengyuan Guo, Zhonghao Mai, Zhengtong Xu, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.01662v4) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://planar-robot.github.io/)

#### Hybrid

- **CaP-X: A Framework for Benchmarking and Improving Coding Agents for Robot Manipulation**  
  Team: NVIDIA & University of California, Berkeley  
  *Letian Fu, Justin Yu, Karim El-Refai, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2603.22435) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/capgym/cap-x) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://capgym.github.io/)

<div align="right"><a href="#table-of-contents">&uarr; back to top</a></div>

---

## Contributing

Contributions are very welcome — new papers, corrections, better categorization, or dead-link fixes.

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md) for the entry format and placement rules.
2. Either [open an issue](https://github.com/ChenAnno/Awesome-Agentic-Robots/issues/new/choose)
   with the paper details, or send a pull request directly.

Thanks to everyone who has contributed:

<!-- Add this one back when the repo goes to public to make the displace properly. -->
<!-- <a href="https://github.com/ChenAnno/Awesome-Agentic-Robots/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ChenAnno/Awesome-Agentic-Robots" alt="Contributors" />
</a> -->

## Acknowledgements

This list is inspired by and partially built on the following excellent collections:

- [dummy_name](https://google.com/)


## Citation

If this repository or our survey is useful to your research, please consider citing:

```bibtex
@article{TODO2026agenticrobots,
  title   = {<Survey Title Here>},
  author  = {<Author, First and Author, Second and Author, Third>},
  journal = {arXiv preprint arXiv:XXXX.XXXXX},
  year    = {2026}
}
```

## Star History

<a href="https://star-history.com/#ChenAnno/Awesome-Agentic-Robots&Date">
  <img src="https://api.star-history.com/svg?repos=ChenAnno/Awesome-Agentic-Robots&type=Date" width="600" alt="Star History Chart">
</a>

## License

Released under [CC0-1.0](./LICENSE). The listed papers remain under their own licenses and copyright.
