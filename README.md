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

- **[2026/08/22]** Synced references from the survey's Capabilities section: added 215 papers across Sections A–E and populated Section B.
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
  - [B. Multimodal Embodied Agents](#b-multimodal-embodied-agents)
  - [C. Multimodal Agents](#c-multimodal-agents)
  - [D. Robotic Systems](#d-robotic-systems)
  - [E. Benchmarks](#e-benchmarks)
    - [Multimodal Agents](#multimodal-agents)
    - [Robotic Systems](#robotic-systems)
    - [Multimodal Embodied Agents](#multimodal-embodied-agents)
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

- **A Survey on Vision-Language-Action Models for Embodied AI**<br>
  Citation key: `ma2026surveyvisionlanguageactionmodelsembodied`<br>
  arXiv 2026<br>
  *Yueen Ma, Zixing Song, Yuzheng Zhuang, et al.*<br>
  Tags: `VLA` `Survey`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1109/TNNLS.2025.3650584)

- **How Agents Ask for Permission: User Permissions for AI Agents, from Interfaces to Enforcement**<br>
  Citation key: `permissionsurvey2026`<br>
  Team: University of Washington | arXiv 2026<br>
  *Alexandra E. Michael, Franziska Roesner*<br>
  Tags: `Plan` `Survey` `Uncertainty/Oversight`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2607.13718)

- **Progress Reward Modeling for Robotic Learning: A Comprehensive Survey**<br>
  Citation key: `progressrewardsurvey2026`<br>
  arXiv 2026<br>
  *Jianshu Zhang, Keliang Wu, Haoran Lu, et al.*<br>
  Tags: `Verify` `Verification/Reward` `Survey`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2607.21655)

- **Agentic Artificial Intelligence (AI): Architectures, Taxonomies, and Evaluation of Large Language Model Agents**<br>
  Citation key: `v2026agenticartificialintelligenceai`<br>
  Team: Anna University; NIT Tiruchirappalli; University of Melbourne | arXiv 2026<br>
  *V. Arunkumar, G. R. Gangadharan, Rajkumar Buyya*<br>
  Tags: `Survey` `Evaluation`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2601.12560)

- **Aligning Cyber Space with Physical World: A Comprehensive Survey on Embodied AI**<br>
  Citation key: `liu2025aligningcyberspacephysical`<br>
  Team: Sun Yat-sen University; Peng Cheng Laboratory | arXiv 2025<br>
  *Yang Liu, Weixing Chen, Yongjie Bai, et al.*<br>
  Tags: `Survey`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2407.06886) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List)

- **Towards Embodied Agentic AI: Review and Classification of LLM- and VLM-Driven Robot Autonomy and Interaction**<br>
  Citation key: `salimpour2025embodiedagenticaireview`<br>
  Team: University of Turku; Zurich University of Applied Sciences | arXiv 2025<br>
  *Sahar Salimpour, Lei Fu, Kajetan Rachwa\l, et al.*<br>
  Tags: `Survey`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2508.05294)

- **A Survey on (M)LLM-Based GUI Agents**<br>
  Citation key: `tang2025surveymllmbasedguiagents`<br>
  Team: Zhejiang University; Microsoft Research Asia | arXiv 2025<br>
  *Fei Tang, Haolei Xu, Hang Zhang, et al.*<br>
  Tags: `GUI/Web Agent` `Survey`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2504.13865) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/zju-real/Awesome-GUI-Agents)

- **Large Multimodal Agents: A Survey**<br>
  Citation key: `xie2024largemultimodalagentssurvey`<br>
  Team: CUHK-Shenzhen | arXiv 2025<br>
  *Junlin Xie, Zhihong Chen, Ruifei Zhang, et al.*<br>
  Tags: `Survey` `Multimodal Understanding`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1007/s44267-025-00093-y) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/jun0wanan/awesome-large-multimodal-agents)

- **A Survey on Agentic Multimodal Large Language Models**<br>
  Citation key: `yao2025surveyagenticmultimodallarge`<br>
  Team: Nanyang Technological University; CUHK-Shenzhen | arXiv 2025<br>
  *Huanjin Yao, Ruifei Zhang, Jiaxing Huang, et al.*<br>
  Tags: `Survey` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.10991) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/HJYao00/Awesome-Agentic-MLLMs)

- **Agent AI: Surveying the Horizons of Multimodal Interaction**<br>
  Citation key: `durante2024agentaisurveyinghorizons`<br>
  Team: Stanford University; Microsoft Research; UCLA; University of Washington | arXiv 2024<br>
  *Zane Durante, Qiuyuan Huang, Naoki Wake, et al.*<br>
  Tags: `Real-Time Execution` `Survey`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2401.03568)

- **Integrated Task and Motion Planning**<br>
  Citation key: `garrett2021tamp`<br>
  Team: MIT CSAIL | Annual Review of Control, Robotics, and Autonomous Systems 2021<br>
  *Caelan Reed Garrett, Rohan Chitnis, Rachel Holladay, et al.*<br>
  Tags: `Plan` `Survey` `TAMP`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1146/annurev-control-091420-084139)

<div align="right"><a href="#table-of-contents">&uarr; back to top</a></div>

---

## B. Multimodal Embodied Agents

Foundation-model-driven agents that couple multimodal perception and reasoning to **embodied**
sensing and physical action in a closed loop — VLAs, LLM/VLM planners and critics for robots,
language-conditioned robot world models, and embodied memory.

- **Dynamic Execution Commitment of Vision-Language-Action Models**<br>
  Citation key: `a3commit2026`<br>
  Team: University of Adelaide; Sichuan University; Shanghai Jiao Tong University | arXiv 2026<br>
  *Feng Chen, Xianghui Wang, Yuxuan Chen, et al.*<br>
  Tags: `Act` `VLA` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.11567)

- **Robot Planning and Situation Handling with Active Perception**<br>
  Citation key: `activeperception2026`<br>
  Team: SUNY Binghamton; CMU; Ford Research | arXiv 2026<br>
  *Austine Oloo, Zainab Altaweel, Yohei Hayamizu, et al.*<br>
  Tags: `Perceive` `Task Planning` `Active Perception`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.26988)

- **ActiveVLA: Injecting Active Perception into Vision-Language-Action Models for Precise 3D Robotic Manipulation**<br>
  Citation key: `activevla2026`<br>
  Team: Fudan University; Shanghai Innovation Institute; Nanyang Technological University | arXiv 2026<br>
  *Zhenyang Liu, Yongchong Gu, Yikai Wang, et al.*<br>
  Tags: `Perceive` `VLA` `Active Perception`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2601.08325) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://zhenyangliu.github.io/ActiveVLA/)

- **Adaptive Action Chunking at Inference-time for Vision-Language-Action Models**<br>
  Citation key: `adaptivechunking2026`<br>
  Team: Shenzhen University of Advanced Technology; Mininglamp Technology; Shenzhen Technology University; City University of Hong Kong; National University of Singapore | CVPR 2026<br>
  *Yuanchang Liang, Xiaobo Wang, Kai Wang, et al.*<br>
  Tags: `Act` `VLA` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.04161)

- **AsyncVLA: An Asynchronous VLA for Fast and Robust Navigation on the Edge**<br>
  Citation key: `asyncvla2026`<br>
  Team: UC Berkeley; Toyota Motor North America; Princeton University | arXiv 2026<br>
  *Noriaki Hirose, Catherine Glossop, Dhruv Shah, et al.*<br>
  Tags: `Act` `VLA` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.13476)

- **Claude Plays Robotics**<br>
  Citation key: `berman2026claude`<br>
  Team: Anthropic Frontier Red Team | Research Report, 2026<br>
  *Shmuel Berman, Michael Ilie, Jia Deng, et al.*<br>
  Tags: `Act` `Industry Report` `LLM Robotics` `Evaluation`<br>
  [![Research](https://img.shields.io/badge/-Research-FF6D00?logo=anthropic&logoColor=white&style=flat-square)](https://www.anthropic.com/research/claude-plays-robotics)

- **CheckVLA: Execution-Time Verification with Action-Conditioned World Model for Long-Horizon Mobile Manipulation**<br>
  Citation key: `checkvla2026`<br>
  arXiv 2026<br>
  *Yushan Liu, Peibo Sun, Xintao Chao, et al.*<br>
  Tags: `Verify` `World Model` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2607.26789)

- **Cloak: Zero-Shot Cross-Embodiment Manipulation by Masking the End-Effector from the VLA**<br>
  Citation key: `cloak2026`<br>
  Team: Stanford University | arXiv 2026<br>
  *Michael Piseno, Guy Tevet, C. Karen Liu*<br>
  Tags: `Act` `VLA` `Cross-Embodiment`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.22836) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://tml.stanford.edu/cloak)

- **CoFineLLM: Conformal Finetuning of LLMs for Language-Instructed Robot Planning**<br>
  Citation key: `cofinellm2026`<br>
  arXiv 2026<br>
  *Jun Wang, Yevgeniy Vorobeychik, Yiannis Kantaros*<br>
  Tags: `Plan` `Task Planning` `Uncertainty/Oversight`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v331/wang26c.html)

- **Using large language models for embodied planning introduces systematic safety risks**<br>
  Citation key: `despite2026`<br>
  arXiv 2026<br>
  *Tao Zhang, Kaixian Qu, Zhibin Li, et al.*<br>
  Tags: `Plan` `Task Planning` `Safety`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.18463)

- **EMBGuard: Constructing Hazard-Aware Guardrails for Safe Planning in Embodied Agents**<br>
  Citation key: `embguard2026`<br>
  Team: Yonsei University | ICML 2026<br>
  *Dongwook Choi, Taeyoon Kwon, Bogyung Jeong, et al.*<br>
  Tags: `Plan` `Task Planning` `Safety`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.30924)

- **eMEM: A Hybrid Spatio-Temporal Memory System For Embodied Agents**<br>
  Citation key: `emem2026`<br>
  Team: Automatika Robotics; Inria | arXiv 2026<br>
  *A. Haroon Rasheed, Maria Kabtoul*<br>
  Tags: `Perceive` `Memory/Belief`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.03374)

- **G³VLA: Geometric inductive bias for Vision-Language-Action Models**<br>
  Citation key: `g3vla2026`<br>
  Team: NYU Shanghai; Technical University of Denmark; MBZUAI; NYU Abu Dhabi | CoRL 2026<br>
  *Yue Peng, Yongzhe Zhao, Artur Habuda, et al.*<br>
  Tags: `Act` `VLA`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.24472)

- **GSMem: 3D Gaussian Splatting as Persistent Spatial Memory for Zero-Shot Embodied Exploration and Reasoning**<br>
  Citation key: `gsmem2026`<br>
  Team: Case Western Reserve University; University at Buffalo | arXiv 2026<br>
  *Yiren Lu, Yi Du, Disheng Liu, et al.*<br>
  Tags: `Perceive` `Memory/Belief` `Active Perception`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2603.19137)

- **Hide-and-Seek in Trajectories: Discovering Failure Signals for VLA Runtime Monitoring**<br>
  Citation key: `hideandseek2026`<br>
  Team: Georgia Institute of Technology; University of Wisconsin–Madison | arXiv 2026<br>
  *Seongheon Park, Wendi Li, Changdae Oh, et al.*<br>
  Tags: `Verify` `VLA` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.30834)

- **Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation**<br>
  Citation key: `interceptfuture2026`<br>
  Team: Robotics Institute, Carnegie Mellon University | arXiv 2026<br>
  *Shahram Najam Syed, Arthur Jakobsson, Haoran Hao, et al.*<br>
  Tags: `Anticipate` `VLA` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.02486)

- **Kairos: A Regret-Aware Native World-Action Model Stack for Physical AI**<br>
  Citation key: `kairos2026`<br>
  Team: Kairos AGI | arXiv 2026<br>
  *Kairos Team, Fei Wang, Shan You, et al.*<br>
  Tags: `Anticipate`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.16533) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/kairos-agi/kairos)

- **KITE: Decoupling Kinematics and Interaction for Zero-Shot Cross-Embodiment Manipulation**<br>
  Citation key: `kite2026`<br>
  Team: Cornell University | arXiv 2026<br>
  *Qianxu Wang, Kuan Fang*<br>
  Tags: `Act` `Cross-Embodiment`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.22113)

- **LAP: Language-Action Pre-Training Enables Zero-shot Cross-Embodiment Transfer**<br>
  Citation key: `lap2026`<br>
  Team: Princeton University | arXiv 2026<br>
  *Lihan Zha, Asher J. Hancock, Mingtong Zhang, et al.*<br>
  Tags: `Act` `Cross-Embodiment`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.10556) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/lihzha/lap) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://lap-vla.github.io)

- **Libra-VLA: Achieving Learning Equilibrium via Asynchronous Coarse-to-Fine Dual-System**<br>
  Citation key: `libravla2026`<br>
  Team: Beihang University; AgiBot | ACL 2026<br>
  *Yifei Wei, Linqing Zhong, Yi Liu, et al.*<br>
  Tags: `Act` `VLA` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.24921)

- **Mimir: A Neuro-Symbolic Memory System with Dynamic Grounding for Embodied Agents in Interactive Environments**<br>
  Citation key: `mimir2026`<br>
  arXiv 2026<br>
  *Haoming Xu, Zhenlin He, Hengyi Wang, et al.*<br>
  Tags: `Perceive` `Memory/Belief`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2608.04933)

- **Modular Safety Guardrails Are Necessary for Foundation-Model-Enabled Robots in the Real World**<br>
  Citation key: `modularguardrails2026`<br>
  Team: Texas A&M University; Purdue University; Amazon | arXiv 2026<br>
  *Joonkyung Kim, Wenxi Chen, Davood Soleymanzadeh, et al.*<br>
  Tags: `Plan` `Safety`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.04056)

- **Evaluating VLMs' Spatial Reasoning Over Robot Motion: A Step Towards Robot Planning with Motion Preferences**<br>
  Citation key: `motionpreferences2026`<br>
  Team: University College London; King's College London | arXiv 2026<br>
  *Wenxi Wu, Jingjing Zhang, Martim Brandao*<br>
  Tags: `Plan` `Task Planning` `Evaluation`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2603.13100)

- **OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation**<br>
  Citation key: `oasis2026`<br>
  Team: Xi'an Jiaotong University | arXiv 2026<br>
  *Xinzhe Chen, Sihua Ren, Liqi Huang, et al.*<br>
  Tags: `Act` `World Model` `Action Representation`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.25829)

- **What Spatial Memory Must Store: Occlusion as the Test for Language-Agent Memory**<br>
  Citation key: `occlusiontest2026`<br>
  Team: Space Zero, Inc. | arXiv 2026<br>
  *Doeon Kwon, Junho Bang*<br>
  Tags: `Perceive` `Memory/Belief`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.10299)

- **What Matters in Orchestrating Robot Policies: A Systematic Study of Hierarchical VLA Agents**<br>
  Citation key: `orchestrating2026`<br>
  Team: Google DeepMind | arXiv 2026<br>
  *Jiaheng Hu, Mohit Shridhar, Caden Lu, et al.*<br>
  Tags: `Act` `VLA` `Evaluation`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.10267)

- **Perturbation-Based Uncertainty for Failure Detection in Vision-Language-Action Models**<br>
  Citation key: `perturbationuq2026`<br>
  Team: KAIST | arXiv 2026<br>
  *Yousung Lee, Dongsoo Har*<br>
  Tags: `Verify` `VLA` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.20754)

- **Recursive Belief Vision Language Action Models**<br>
  Citation key: `rbvla2026`<br>
  Team: IIT Madras | arXiv 2026<br>
  *Vaidehi Bagaria, Bijo Sebastian, Nirav Kumar Patel*<br>
  Tags: `Perceive` `Memory/Belief`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.20659)

- **RoboReward: General-Purpose Vision-Language Reward Models for Robotics**<br>
  Citation key: `roboreward2026`<br>
  Team: Stanford University; UC Berkeley | arXiv 2026<br>
  *Tony Lee, Andrew Wagenmaker, Karl Pertsch, et al.*<br>
  Tags: `Verify` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2601.00675)

- **Robot Critics that Sweat the Small Stuff**<br>
  Citation key: `robotcritics2026`<br>
  Team: Toyota Research Institute; Columbia University | arXiv 2026<br>
  *Sruthi Sudhakar, Junbang Liang, Sreehari Rammohan, et al.*<br>
  Tags: `Verify` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.21572) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robocritic.cs.columbia.edu)

- **SafeGen-LLM: Enhancing Safety Generalization in Task Planning for Robotic Systems**<br>
  Citation key: `safegenllm2026`<br>
  Team: University of Notre Dame; Washington State University; University of Pennsylvania | arXiv 2026<br>
  *Jialiang Fan, Weizhe Xu, Mengyu Liu, et al.*<br>
  Tags: `Plan` `Task Planning` `Safety`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.24235)

- **Theory of Space: Can Foundation Models Construct Spatial Beliefs through Active Exploration?**<br>
  Citation key: `theoryofspace2026`<br>
  Team: Northwestern University; Stanford University; University of Washington; Cornell University | ICLR 2026<br>
  *Pingyue Zhang, Zihan Huang, Yue Wang, et al.*<br>
  Tags: `Perceive` `Memory/Belief` `Active Perception`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.07055)

- **3D-Belief: Embodied Belief Inference via Generative 3D World Modeling**<br>
  Citation key: `threedbelief2026`<br>
  Team: Johns Hopkins University; Lambda; University of Cambridge | arXiv 2026<br>
  *Yifan Yin, Zehao Wen, Suyu Ye, et al.*<br>
  Tags: `Perceive` `World Model` `Memory/Belief`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.11367) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://3d-belief.github.io/)

- **TIDAL: Temporally Interleaved Diffusion and Action Loop for High-Frequency VLA Control**<br>
  Citation key: `tidal2026`<br>
  Team: A*STAR I2R; Tsinghua University; Nanyang Technological University | arXiv 2026<br>
  *Yuteng Sun, Haoran Wang, Ruofei Bai, et al.*<br>
  Tags: `Act` `VLA` `Diffusion/Flow Policy`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2601.14945)

- **Visual Verification Enables Inference-time Steering and Autonomous Policy Improvement**<br>
  Citation key: `veritas2026`<br>
  Team: Princeton University | arXiv 2026<br>
  *Mingtong Zhang, Dhruv Shah*<br>
  Tags: `Verify` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.18247) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://veritas-improvement.github.io/)

- **VLA-FAIL: Efficient Task Failure Detection for Finetuned Vision-Language-Action Models**<br>
  Citation key: `vlafail2026`<br>
  Team: FZI Research Center for Information Technology; Karlsruhe Institute of Technology | arXiv 2026<br>
  *Florian Seligmann, Emiliyan Gospodinov, Enes Ulas Dincer, et al.*<br>
  Tags: `Verify` `VLA` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.21386)

- **VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model**<br>
  Citation key: `vlajepa2026`<br>
  Team: University of Science and Technology of China; Eastern Institute of Technology | arXiv 2026<br>
  *Jingwen Sun, Wenyao Zhang, Zekun Qi, et al.*<br>
  Tags: `Anticipate` `VLA` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.10098) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ginwind/VLA-JEPA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ginwind.github.io/VLA-JEPA/)

- **World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis**<br>
  Citation key: `wla2026`<br>
  Team: Shanghai Jiao Tong University | arXiv 2026<br>
  *Yi Yang, Zhihong Liu, Siqi Kou, et al.*<br>
  Tags: `Anticipate` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.05979) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/SJTU-DENG-Lab/WLA)

- **World-Value-Action Model: Implicit Planning for Vision-Language-Action Systems**<br>
  Citation key: `worldvalueaction2026`<br>
  Team: Westlake University | arXiv 2026<br>
  *Runze Li, Hongyin Zhang, Junxi Jin, et al.*<br>
  Tags: `Anticipate` `VLA` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.14732)

- **World-VLA-Loop: Closed-Loop Learning of Video World Model and VLA Policy**<br>
  Citation key: `worldvlaloop2026`<br>
  Team: Show Lab, National University of Singapore | arXiv 2026<br>
  *Xiaokang Liu, Zechen Bai, Hai Ci, et al.*<br>
  Tags: `Anticipate` `VLA` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.06508) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://showlab.github.io/World-VLA-Loop/)

- **PhyCritic: Multimodal Critic Models for Physical AI**<br>
  Citation key: `xiong2026phycritic`<br>
  Team: NVIDIA; University of Maryland | arXiv 2026<br>
  *Tianyi Xiong, Shihao Wang, Guilin Liu, et al.*<br>
  Tags: `Verify` `Verification/Reward` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.11124)

- **X-Tokenizer: A Multimodal Action Tokenizer for Vision-Language-Action Pretraining**<br>
  Citation key: `xtokenizer2026`<br>
  Team: X Square Robot; Tsinghua University | arXiv 2026<br>
  *Miracle Kang, Lights Shi, Lucy Liang, et al.*<br>
  Tags: `Act` `VLA` `Action Representation`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.14752) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://x-square-robot.github.io/X-Tokenizer_projectPage/)

- **X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model**<br>
  Citation key: `xvla2026`<br>
  Team: AIR, Tsinghua University; Shanghai AI Lab; Peking University | ICLR 2026<br>
  *Jinliang Zheng, Jianxiong Li, Zhihao Wang, et al.*<br>
  Tags: `Act` `VLA` `Cross-Embodiment`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.10274) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/2toinf/X-VLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://thu-air-dream.github.io/X-VLA/)

- **Leave No Observation Behind: Real-time Correction for VLA Action Chunks**<br>
  Citation key: `a2c2_2025`<br>
  Team: The University of Tokyo | arXiv 2025<br>
  *Kohei Sendai, Maxime Alvarez, Tatsuya Matsushima, et al.*<br>
  Tags: `Act` `VLA` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2509.23224)

- **Toward Ambulatory Vision: Learning Visually-Grounded Active View Selection**<br>
  Citation key: `ambulatoryvision2025`<br>
  Team: KAIST | arXiv 2025<br>
  *Juil Koo, Daehyeon Choi, Sangwoo Youn, et al.*<br>
  Tags: `Perceive` `Active Perception`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2512.13250)

- **AVA-VLA: Improving Vision-Language-Action models with Active Visual Attention**<br>
  Citation key: `avavla2025`<br>
  Team: LiAuto Inc.; Beijing University of Technology; CUHK-Shenzhen | arXiv 2025<br>
  *Lei Xiao, Jifeng Li, Juntao Gao, et al.*<br>
  Tags: `Perceive` `VLA` `Active Perception`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2511.18960)

- **Real-Time Execution of Action Chunking Flow Policies**<br>
  Citation key: `black2025rtc`<br>
  Team: Physical Intelligence; UC Berkeley | NeurIPS 2025<br>
  *Kevin Black, Manuel Y. Galliker, Sergey Levine*<br>
  Tags: `Act` `Real-Time Execution` `Diffusion/Flow Policy`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2506.07339)

- **Ctrl-World: A Controllable Generative World Model for Robot Manipulation**<br>
  Citation key: `ctrlworld2025`<br>
  Team: Stanford University; Tsinghua University | arXiv 2025<br>
  *Yanjiang Guo, Lucy Xiaoyang Shi, Jianyu Chen, et al.*<br>
  Tags: `Anticipate` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.10125) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ctrl-world.github.io)

- **Towards Reliable LLM-based Robot Planning via Combined Uncertainty Estimation**<br>
  Citation key: `cure2025`<br>
  Team: Henan University of Technology; TeleAI, China Telecom | arXiv 2025<br>
  *Shiyuan Yin, Chenjia Bai, Zihao Zhang, et al.*<br>
  Tags: `Plan` `Task Planning` `Uncertainty/Oversight`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.08044)

- **Scaling Cross-Embodied Learning: One Policy for Manipulation, Navigation, Locomotion and Aviation**<br>
  Citation key: `doshi2024crossformer`<br>
  Team: UC Berkeley | CoRL 2025<br>
  *Ria Doshi, Homer Rich Walke, Oier Mees, et al.*<br>
  Tags: `Act` `Cross-Embodiment`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v270/doshi25a.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/rail-berkeley/crossformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://crossformer-model.github.io/)

- **DreamVLA: A Vision-Language-Action Model Dreamed with Comprehensive World Knowledge**<br>
  Citation key: `dreamvla2025`<br>
  Team: Shanghai Jiao Tong University; Galbot; UIUC; USTC; Tsinghua University | NeurIPS 2025<br>
  *Wenyao Zhang, Hongsi Liu, Zekun Qi, et al.*<br>
  Tags: `Anticipate` `VLA` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2507.04447) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/Zhangwenyao1/DreamVLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://zhangwenyao1.github.io/DreamVLA/)

- **EVOLVE-VLA: Test-Time Training from Environment Feedback for Vision-Language-Action Models**<br>
  Citation key: `evolvevla2025`<br>
  Team: Show Lab, National University of Singapore | arXiv 2025<br>
  *Zechen Bai, Chen Gao, Mike Zheng Shou*<br>
  Tags: `Verify` `VLA`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2512.14666) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://showlab.github.io/EVOLVE-VLA)

- **FAST: Efficient Action Tokenization for Vision-Language-Action Models**<br>
  Citation key: `fast2025`<br>
  Team: Physical Intelligence; UC Berkeley; Stanford University | arXiv 2025<br>
  *Karl Pertsch, Kyle Stachowicz, Brian Ichter, et al.*<br>
  Tags: `Act` `VLA` `Action Representation`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2501.09747) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://pi.website/research/fast)

- **Fast-in-Slow: A Dual-System Foundation Model Unifying Fast Manipulation within Slow Reasoning**<br>
  Citation key: `fastinslow2025`<br>
  Team: The Chinese University of Hong Kong; Peking University | NeurIPS 2025<br>
  *Hao Chen, Jiaming Liu, Chenyang Gu, et al.*<br>
  Tags: `Act`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2506.01953)

- **Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer**<br>
  Citation key: `gemini2025robotics`<br>
  Team: Google DeepMind | arXiv 2025<br>
  *Gemini Robotics Team*<br>
  Tags: `Act`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.03342)

- **Genie Envisioner: A Unified World Foundation Platform for Robotic Manipulation**<br>
  Citation key: `genieenvisioner2025`<br>
  Team: AgiBot Genie Team; LV-NUS Lab; BUAA | arXiv 2025<br>
  *Yue Liao, Pengfei Zhou, Siyuan Huang, et al.*<br>
  Tags: `Anticipate`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2508.05635) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://genie-envisioner.github.io)

- **GraphPad: Inference-Time 3D Scene Graph Updates for Embodied Question Answering**<br>
  Citation key: `graphpad2025`<br>
  Team: University of Waterloo; UCLA | arXiv 2025<br>
  *Muhammad Qasim Ali, Saeejith Nair, Alexander Wong, et al.*<br>
  Tags: `Perceive` `3D Scene Graph`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2506.01174)

- **Scaling Cross-Environment Failure Reasoning Data for Vision-Language Robotic Manipulation**<br>
  Citation key: `guardian2025`<br>
  arXiv 2025<br>
  *Paul Pacaud, Ricardo Garcia, Shizhe Chen, et al.*<br>
  Tags: `Verify` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2512.01946)

- **Video Prediction Policy: A Generalist Robot Policy with Predictive Visual Representations**<br>
  Citation key: `hu2024video`<br>
  Team: Tsinghua University | ICML 2025<br>
  *Yucheng Hu, Yanjiang Guo, Pengchao Wang, et al.*<br>
  Tags: `Anticipate` `World Model` `Multimodal Understanding`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v267/hu25g.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/roboterax/video-prediction-policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://video-prediction-policy.github.io)

- **Transforming Monolithic Foundation Models into Embodied Multi-Agent Architectures for Human-Robot Collaboration**<br>
  Citation key: `interactgen2025`<br>
  Team: Tsinghua University; Beijing University of Posts and Telecommunications | arXiv 2025<br>
  *Nan Sun, Bo Mao, Yongchang Li, et al.*<br>
  Tags: `Plan`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2512.00797)

- **Kinodynamic Task and Motion Planning using VLM-guided and Interleaved Sampling**<br>
  Citation key: `kinodynamictamp2025`<br>
  Team: Ewha Womans University | arXiv 2025<br>
  *Minseo Kwon, Young J. Kim*<br>
  Tags: `Plan` `TAMP` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.26139)

- **RDT-1B: a Diffusion Foundation Model for Bimanual Manipulation**<br>
  Citation key: `liu2024rdt`<br>
  Team: Tsinghua University, THBI Lab | ICLR 2025<br>
  *Songming Liu, Lingxuan Wu, Bangguo Li, et al.*<br>
  Tags: `Act` `Diffusion Policy` `Bimanual Manipulation` `Robot Foundation Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.07864) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.iclr.cc/paper_files/paper/2025/hash/49f80e4d2471ad4f2edf4f5f1ab62339-Abstract-Conference.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/thu-ml/RoboticsDiffusionTransformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rdt-robotics.github.io/rdt-robotics/)

- **Enhancing Rating-Based Reinforcement Learning to Effectively Leverage Feedback from Large Vision-Language Models**<br>
  Citation key: `luu2025enhancing`<br>
  ICML 2025<br>
  *Tung Minh Luu, Younghwan Lee, Donghoon Lee, et al.*<br>
  Tags: `Verify`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v267/luu25a.html)

- **MADRA: Multi-Agent Debate for Risk-Aware Embodied Planning**<br>
  Citation key: `madra2025`<br>
  Team: Institute of Automation, CAS; University of Chinese Academy of Sciences | arXiv 2025<br>
  *Junjian Wang, Lidan Zhao, Xi Sheryl Zhang*<br>
  Tags: `Plan` `Task Planning` `Safety`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2511.21460)

- **Reflective Planning: Vision-Language Models for Multi-Stage Long-Horizon Robotic Manipulation**<br>
  Citation key: `reflectiveplanning2025`<br>
  Team: Cornell University; The Chinese University of Hong Kong; Yale University; UC Berkeley | CoRL 2025<br>
  *Yunhai Feng, Jiaming Han, Zhuoran Yang, et al.*<br>
  Tags: `Plan` `Task Planning` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2502.16707) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://reflect-vlm.github.io)

- **ReKep: Spatio-Temporal Reasoning of Relational Keypoint Constraints for Robotic Manipulation**<br>
  Citation key: `rekep2024`<br>
  Team: Stanford University; Columbia University | CoRL 2025<br>
  *Wenlong Huang, Chen Wang, Yunzhu Li, et al.*<br>
  Tags: `Plan`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v270/huang25g.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/huangwl18/ReKep) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rekep-robot.github.io/)

- **RoboMonkey: Scaling Test-Time Sampling and Verification for Vision-Language-Action Models**<br>
  Citation key: `robomonkey2025`<br>
  Team: Stanford University; UC Berkeley; NVIDIA Research | arXiv 2025<br>
  *Jacky Kwok, Christopher Agia, Rohan Sinha, et al.*<br>
  Tags: `Verify` `VLA` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2506.17811) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robomonkey-vla.github.io/)

- **SAFE: Multitask Failure Detection for Vision-Language-Action Models**<br>
  Citation key: `safe2025`<br>
  Team: University of Toronto; Vector Institute | NeurIPS 2025<br>
  *Qiao Gu, Yuanliang Ju, Shengxiang Sun, et al.*<br>
  Tags: `Verify` `VLA` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2506.09937) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vla-safe.github.io/)

- **A Unified Framework for Real-Time Failure Handling in Robotics Using Vision-Language Models, Reactive Planner and Behavior Trees**<br>
  Citation key: `unifiedfailure2025`<br>
  Team: Lund University; KTH Royal Institute of Technology; ABB Robotics | arXiv 2025<br>
  *Faseeh Ahmad, Hashim Ismail, Jonathan Styrud, et al.*<br>
  Tags: `Verify` `Failure Detection` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2503.15202)

- **Using VLM Reasoning to Constrain Task and Motion Planning**<br>
  Citation key: `vizcoast2025`<br>
  Team: Purdue University; Rice University | arXiv 2025<br>
  *Muyang Yan, Miras Mengdibayev, Ardon Floros, et al.*<br>
  Tags: `Plan` `TAMP` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.25548)

- **A Vision-Language-Action-Critic Model for Robotic Real-World Reinforcement Learning**<br>
  Citation key: `vlac2025`<br>
  Team: Shanghai AI Laboratory | arXiv 2025<br>
  *Shaopeng Zhai, Qi Zhang, Tianyi Zhang, et al.*<br>
  Tags: `Verify` `VLA` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2509.15937)

- **UP-VLA: A Unified Understanding and Prediction Model for Embodied Agent**<br>
  Citation key: `zhang2025up`<br>
  Team: Tsinghua University | ICML 2025<br>
  *Jianke Zhang, Yanjiang Guo, Yucheng Hu, et al.*<br>
  Tags: `Anticipate` `VLA` `World Model`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v267/zhang25w.html)

- **AHA: A Vision-Language-Model for Detecting and Reasoning Over Failures in Robotic Manipulation**<br>
  Citation key: `aha2024`<br>
  Team: NVIDIA; University of Washington; Universidad Católica San Pablo; MIT; Nanyang Technological University; Allen Institute for AI | ICLR 2024<br>
  *Jiafei Duan, Wilbert Pumacay, Nishanth Kumar, et al.*<br>
  Tags: `Verify` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.00371) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://aha-vlm.github.io/)

- **π₀: A Vision-Language-Action Flow Model for General Robot Control**<br>
  Citation key: `black2024pi0`<br>
  Team: Physical Intelligence | arXiv 2024<br>
  *Kevin Black, Noah Brown, Danny Driess, et al.*<br>
  Tags: `Act` `VLA` `Flow Matching` `Generalist Policy`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.24164) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/Physical-Intelligence/openpi) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.pi.website/blog/pi0)

- **CaStL: Constraints as Specifications through LLM Translation for Long-Horizon Task and Motion Planning**<br>
  Citation key: `castl2024`<br>
  Team: Rice University; Purdue University | arXiv 2024<br>
  *Weihang Guo, Zachary Kingston, Lydia E. Kavraki*<br>
  Tags: `Plan` `TAMP` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.22225)

- **Code-as-Monitor: Constraint-aware Visual Programming for Reactive and Proactive Robotic Failure Detection**<br>
  Citation key: `codeasmonitor2024`<br>
  Team: BAAI; Galbot; Beihang University; Peking University | CVPR 2024<br>
  *Enshen Zhou, Qi Su, Cheng Chi, et al.*<br>
  Tags: `Verify` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2412.04455)

- **Explore until Confident: Efficient Exploration for Embodied Question Answering**<br>
  Citation key: `exploreconfident2024`<br>
  Team: Princeton University; Stanford University; Toyota Research Institute | RSS 2024<br>
  *Allen Z. Ren, Jaden Clark, Anushri Dixit, et al.*<br>
  Tags: `Perceive` `Active Perception`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2403.15941) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://explore-eqa.github.io)

- **ConceptGraphs: Open-Vocabulary 3D Scene Graphs for Perception and Planning**<br>
  Citation key: `gu2024conceptgraphs`<br>
  Team: University of Toronto; Université de Montréal; MIT | ICRA 2024<br>
  *Qiao Gu, Alihusein Kuwajerwala, Sacha Morin, et al.*<br>
  Tags: `Perceive` `Plan` `3D Scene Graph` `Spatial Memory`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2309.16650) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/concept-graphs/concept-graphs) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://concept-graphs.github.io/)

- **DoReMi: Grounding Language Model by Detecting and Recovering from Plan-Execution Misalignment**<br>
  Citation key: `guo2024doremi`<br>
  Team: Tsinghua University | IROS 2024<br>
  *Yanjiang Guo, Yen-Jen Wang, Lihan Zha, et al.*<br>
  Tags: `Plan` `Verify`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1109/IROS58592.2024.10802284) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/doremi-paper)

- **Introspective Planning: Aligning Robots' Uncertainty with Inherent Task Ambiguity**<br>
  Citation key: `introspective2024`<br>
  Team: Princeton University | arXiv 2024<br>
  *Kaiqu Liang, Zixu Zhang, Jaime Fernandez Fisac*<br>
  Tags: `Plan` `Task Planning` `Uncertainty/Oversight`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2402.06529)

- **OK-Robot: What Really Matters in Integrating Open-Knowledge Models for Robotics**<br>
  Citation key: `liu2024okrobot`<br>
  Team: New York University; AI at Meta | arXiv 2024<br>
  *Peiqi Liu, Yaswanth Orru, Jay Vakil, et al.*<br>
  Tags: `Perceive` `Open-Vocabulary 3D`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2401.12202) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ok-robot/ok-robot) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ok-robot.github.io)

- **Clio: Real-time Task-Driven Open-Set 3D Scene Graphs**<br>
  Citation key: `maggio2024clio`<br>
  Team: MIT; MIT Lincoln Laboratory | arXiv 2024<br>
  *Dominic Maggio, Yun Chang, Nathan Hughes, et al.*<br>
  Tags: `Perceive` `3D Scene Graph` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2404.13696) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/MIT-SPARK/Clio)

- **Octo: An Open-Source Generalist Robot Policy**<br>
  Citation key: `octo2024`<br>
  Team: UC Berkeley; Stanford University; Carnegie Mellon University; Google DeepMind | RSS 2024<br>
  *Octo Model Team*<br>
  Tags: `Act`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2405.12213) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/octo-models/octo) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://octo-models.github.io)

- **Open X-Embodiment: Robotic Learning Datasets and RT-X Models**<br>
  Citation key: `oxe2024`<br>
  Team: Open X-Embodiment Collaboration | ICRA 2024<br>
  *Open X-Embodiment Collaboration*<br>
  Tags: `Act` `Cross-Embodiment`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2310.08864) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/google-deepmind/open_x_embodiment) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer-x.github.io)

- **RoboDreamer: Learning Compositional World Models for Robot Imagination**<br>
  Citation key: `robodreamer2024`<br>
  Team: HKUST; MIT; UC San Diego; Google Research; UMass Amherst | ICML 2024<br>
  *Siyuan Zhou, Yilun Du, Jiaben Chen, et al.*<br>
  Tags: `Anticipate` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2404.12377) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robovideo.github.io/)

- **RL-VLM-F: Reinforcement Learning from Vision Language Foundation Model Feedback**<br>
  Citation key: `wang2024rl`<br>
  Team: Carnegie Mellon University; University of Southern California | ICML 2024<br>
  *Yufei Wang, Zhanyi Sun, Jesse Zhang, et al.*<br>
  Tags: `Verify`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v235/wang24bn.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/yufeiwang63/RL-VLM-F) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rlvlmf2024.github.io/)

- **Hierarchical open-vocabulary 3d scene graphs for language-grounded robot navigation**<br>
  Citation key: `werby2024hierarchical`<br>
  Team: University of Freiburg; University of Technology Nuremberg | Workshop 2024<br>
  *Abdelrhman Werby, Chenguang Huang, Martin Buchner, et al.*<br>
  Tags: `Perceive` `3D Scene Graph` `Open-Vocabulary 3D`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2403.17846) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/hovsg/HOV-SG) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://hovsg.github.io/)

- **Plug in the Safety Chip: Enforcing Constraints for LLM-driven Robot Agents**<br>
  Citation key: `yang2024safetychip`<br>
  Team: Brown University | ICRA 2024<br>
  *Ziyi Yang, Shreyas Sundara Raman, Ankit Shah, et al.*<br>
  Tags: `Plan` `Safety`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1109/ICRA57147.2024.10611447)

- **Learning Interactive Real-World Simulators**<br>
  Citation key: `yang2024unisim`<br>
  Team: UC Berkeley; Google DeepMind; MIT; University of Alberta | ICLR 2024<br>
  *Sherry Yang, Yilun Du, Seyed Ghasemipour, et al.*<br>
  Tags: `Anticipate` `World Model`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://openreview.net/forum?id=sFyTZEqmUY) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://universal-simulator.github.io/unisim/)

- **Do As I Can, Not As I Say: Grounding Language in Robotic Affordances**<br>
  Citation key: `ahn2022do`<br>
  Team: Robotics at Google; Everyday Robots | CoRL 2022 (PMLR 205, 2023)<br>
  *Michael Ahn, Anthony Brohan, Noah Brown, et al.*<br>
  Tags: `Plan` `Language Grounding` `Robot Affordances`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2204.01691) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v205/ichter23a.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/google-research/google-research/tree/master/saycan) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://say-can.github.io/)

- **RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control**<br>
  Citation key: `brohan2023rt2`<br>
  Team: Google DeepMind | CoRL 2023<br>
  *Anthony Brohan, Noah Brown, Justice Carbajal, et al.*<br>
  Tags: `Act` `VLA` `Robot Control` `Knowledge Transfer`<br>
  [![Paper](https://img.shields.io/badge/-PMLR-0F6AB4?style=flat-square)](https://proceedings.mlr.press/v229/zitkovich23a.html) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer2.github.io/)

- **Vision-Language Models as Success Detectors**<br>
  Citation key: `du2023successdetectors`<br>
  Team: Google DeepMind; UC Berkeley | arXiv 2023<br>
  *Yuqing Du, Ksenia Konyushkova, Misha Denil, et al.*<br>
  Tags: `Verify` `Verification/Reward`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v232/du23b.html)

- **Visual language maps for robot navigation**<br>
  Citation key: `huang2023visual`<br>
  Team: University of Freiburg; Google Research; University of Technology Nuremberg | ICRA 2023<br>
  *Chenguang Huang, Oier Mees, Andy Zeng, et al.*<br>
  Tags: `Perceive`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2210.05714) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/vlmaps/vlmaps) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vlmaps.github.io/)

- **VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models**<br>
  Citation key: `huang2023voxposer`<br>
  Team: Stanford University; UIUC | CoRL 2023<br>
  *Wenlong Huang, Chen Wang, Ruohan Zhang, et al.*<br>
  Tags: `Anticipate` `Plan`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2307.05973) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/huangwl18/VoxPoser) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://voxposer.github.io/)

- **VIMA: Robot Manipulation with Multimodal Prompts**<br>
  Citation key: `jiang2023vima`<br>
  Team: Stanford University; NVIDIA; Macalester College; Caltech; Tsinghua University; UT Austin | ICML 2023<br>
  *Yunfan Jiang, Agrim Gupta, Zichen Zhang, et al.*<br>
  Tags: `Act` `Multimodal Understanding`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v202/jiang23b.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/vimalabs/VIMA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vimalabs.github.io/)

- **LERF: Language Embedded Radiance Fields**<br>
  Citation key: `kerr2023lerf`<br>
  Team: UC Berkeley | ICCV 2023<br>
  *Justin Kerr, Chung Min Kim, Ken Goldberg, et al.*<br>
  Tags: `Perceive` `Open-Vocabulary 3D`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2303.09553) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/kerrj/lerf) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.lerf.io/)

- **Code as Policies: Language Model Programs for Embodied Control**<br>
  Citation key: `liang2023code`<br>
  Team: Robotics at Google | ICRA 2023<br>
  *Jacky Liang, Wenlong Huang, Fei Xia, et al.*<br>
  Tags: `Plan` `Act` `Code Generation` `Robot Control`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2209.07753) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/google-research/google-research/tree/master/code_as_policies) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://code-as-policies.github.io/)

- **REFLECT: Summarizing Robot Experiences for Failure Explanation and Correction**<br>
  Citation key: `liu2023reflect`<br>
  Team: Columbia University | CoRL 2023<br>
  *Zeyi Liu, Arpit Bahety, Shuran Song*<br>
  Tags: `Verify` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2306.15724) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robot-reflect.github.io/)

- **LLM+P: Empowering Large Language Models with Optimal Planning Proficiency**<br>
  Citation key: `llmp2023`<br>
  Team: UT Austin; SUNY Binghamton | arXiv 2023<br>
  *Bo Liu, Yuqian Jiang, Xiaohan Zhang, et al.*<br>
  Tags: `Plan` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2304.11477) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/Cranial-XIX/llm-pddl)

- **Liv: Language-image representations and rewards for robotic control**<br>
  Citation key: `ma2023liv`<br>
  Team: University of Pennsylvania; Meta AI | ICML 2023<br>
  *Yecheng Jason Ma, Vikash Kumar, Amy Zhang, et al.*<br>
  Tags: `Verify` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2306.00958) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/penn-pal-lab/LIV) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://penn-pal-lab.github.io/LIV/)

- **Openscene: 3d scene understanding with open vocabularies**<br>
  Citation key: `peng2023openscene`<br>
  Team: Google Research; ETH Zurich; MPI for Intelligent Systems; Waymo; Simon Fraser University | CVPR 2023<br>
  *Songyou Peng, Kyle Genova, Chiyu Jiang, et al.*<br>
  Tags: `Perceive` `Open-Vocabulary 3D`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2211.15654) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/pengsongyou/openscene) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://pengsongyou.github.io/openscene)

- **Robots That Ask For Help: Uncertainty Alignment for Large Language Model Planners**<br>
  Citation key: `ren2023knowno`<br>
  Team: Princeton University; Google DeepMind | CoRL 2023<br>
  *Allen Z. Ren, Anushri Dixit, Alexandra Bodrova, et al.*<br>
  Tags: `Plan` `Task Planning` `Uncertainty/Oversight`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2307.01928) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robot-help.github.io)

- **SayPlan: Grounding Large Language Models using 3D Scene Graphs for Scalable Robot Task Planning**<br>
  Citation key: `sayplan2023`<br>
  Team: QUT Centre for Robotics; CSIRO Data61 | CoRL 2023<br>
  *Krishan Rana, Jesse Haviland, Sourav Garg, et al.*<br>
  Tags: `Plan` `3D Scene Graph` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2307.06135) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sayplan.github.io)

- **ProgPrompt: Generating Situated Robot Task Plans Using Large Language Models**<br>
  Citation key: `singh2023progprompt`<br>
  Team: University of Southern California; NVIDIA | ICRA 2023<br>
  *Ishika Singh, Valts Blukis, Arsalan Mousavian, et al.*<br>
  Tags: `Plan` `Program Generation` `Embodied Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2209.11302) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/NVlabs/progprompt-vh) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://progprompt.github.io/)

- **Zero-Shot Robotic Manipulation with Pretrained Image-Editing Diffusion Models**<br>
  Citation key: `susie2023`<br>
  Team: UC Berkeley; Stanford University; Google DeepMind | arXiv 2023<br>
  *Kevin Black, Mitsuhiko Nakamoto, Pranav Atreya, et al.*<br>
  Tags: `Anticipate` `Diffusion/Flow Policy`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2310.10639) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/kvablack/susie) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rail-berkeley.github.io/susie/)

- **Learning Universal Policies via Text-Guided Video Generation**<br>
  Citation key: `unipi2023`<br>
  Team: MIT; Google DeepMind; UC Berkeley; Georgia Tech; University of Alberta | NeurIPS 2023<br>
  *Yilun Du, Mengjiao Yang, Bo Dai, et al.*<br>
  Tags: `Anticipate` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2302.00111) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://universal-policy.github.io/)

- **Inner Monologue: Embodied Reasoning through Planning with Language Models**<br>
  Citation key: `huang2022inner`<br>
  Team: Robotics at Google | CoRL 2022<br>
  *Wenlong Huang, others*<br>
  Tags: `Verify` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2207.05608) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://innermonologue.github.io)

- **Learning Language-Conditioned Robot Behavior from Offline Data and Crowd-Sourced Annotation**<br>
  Citation key: `nair2022learning`<br>
  Team: Stanford University; Google | CoRL 2022<br>
  *Suraj Nair, Eric Mitchell, Kevin Chen, et al.*<br>
  Tags: `Verify`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v164/nair22a.html) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/robotlorel)

- **Language Models as Zero-Shot Planners: Extracting Actionable Knowledge for Embodied Agents**<br>
  Citation key: `pmlr-v162-huang22a`<br>
  Team: UC Berkeley; Carnegie Mellon University; Google Brain | ICML 2022<br>
  *Wenlong Huang, Pieter Abbeel, Deepak Pathak, et al.*<br>
  Tags: `Plan` `LLM Planning` `Embodied Agent`<br>
  [![Paper](https://img.shields.io/badge/-PMLR-0F6AB4?style=flat-square)](https://proceedings.mlr.press/v162/huang22a.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/huangwl18/language-planner) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://huangwl18.github.io/language-planner/)

- **SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities**<br>
  Citation key: `chen2024spatialvlm`<br>
  Team: Google DeepMind; Google Research; MIT | CVPR 2024<br>
  *Boyuan Chen, Zhuo Xu, Sean Kirmani, et al.*<br>
  Tags: `Perceive` `Spatial Reasoning` `Vision-Language Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2401.12168) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://openaccess.thecvf.com/content/CVPR2024/html/Chen_SpatialVLM_Endowing_Vision-Language_Models_with_Spatial_Reasoning_Capabilities_CVPR_2024_paper.html) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://spatial-vlm.github.io/)

- **PaLM-E: An Embodied Multimodal Language Model**<br>
  Citation key: `driess2023palm`<br>
  Team: Robotics at Google; TU Berlin | ICML 2023<br>
  *Danny Driess, Fei Xia, Mehdi S. M. Sajjadi, et al.*<br>
  Tags: `Perceive` `Plan` `Multimodal Model` `Robotics`<br>
  [![Paper](https://img.shields.io/badge/-PMLR-0F6AB4?style=flat-square)](https://proceedings.mlr.press/v202/driess23a.html) [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2303.03378) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://palm-e.github.io/)

- **RoboTTT: Context Scaling for Robot Policies**<br>
  Citation key: `jiang2026robotttt`<br>
  Team: NVIDIA GEAR Lab; Stanford University | arXiv 2026<br>
  *Yunfan Jiang, Yevgen Chebotar, Ruijie Zheng, et al.*<br>
  Tags: `Adapt` `Test-Time Training` `Long Context` `VLA`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2607.15275) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://research.nvidia.com/labs/gear/robottt/)

<div align="right"><a href="#table-of-contents">&uarr; back to top</a></div>

---

## C. Multimodal Agents

Agents built on multi-modal foundation models that perceive and act in **digital** environments —
screens, browsers, documents, and APIs — without a physical body.

- **A11y-Compressor: A Framework for Enhancing the Efficiency of GUI Agent Observations through Visual Context Reconstruction and Redundancy Reduction**<br>
  Citation key: `a11ycompressor2026`<br>
  Team: Hosei University | ACL SRW 2026<br>
  *Michito Takeshita, Takuro Kawada, Takumi Ohashi, et al.*<br>
  Tags: `Perceive` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.00551)

- **Let's Think in Two Steps: Mitigating Agreement Bias in MLLMs with Self-Grounded Verification**<br>
  Citation key: `andrade2026let`<br>
  Team: Georgia Institute of Technology | ICLR 2026<br>
  *Moises Andrade, Joonhyuk Cha, Brandon Ho, et al.*<br>
  Tags: `Verify` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2507.11662)

- **Mobiledreamer: Generative sketch world model for gui agent**<br>
  Citation key: `cao2026mobiledreamer`<br>
  Team: Institute of Automation, CAS; University of Chinese Academy of Sciences; Meituan | arXiv 2026<br>
  *Yilin Cao, Yufeng Zhong, Zhixiong Zeng, et al.*<br>
  Tags: `Anticipate` `World Model` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2601.04035)

- **Confident and Wrong: Silent Semantic Failures in Coding Agents**<br>
  Citation key: `confidentwrong2026`<br>
  Team: Snowflake AI Research | arXiv 2026<br>
  *Aman Mehta*<br>
  Tags: `Verify` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2603.25764)

- **Crab: A Semantics-Aware Checkpoint/Restore Runtime for Agent Sandboxes**<br>
  Citation key: `crab2026`<br>
  Team: HKUST | arXiv 2026<br>
  *Tianyuan Wu, Chaokun Chang, Lunxi Cao, et al.*<br>
  Tags: `Plan` `Agent Infrastructure`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.28138)

- **DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback**<br>
  Citation key: `deltabox2026`<br>
  Team: Shanghai Jiao Tong University; Huawei | arXiv 2026<br>
  *Yunpeng Dong, Jingkai He, Shiqi Liu, et al.*<br>
  Tags: `Plan` `Agent Infrastructure`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.22781)

- **Recoverability Has a Law: The ERR Measure for Tool-Augmented Agents**<br>
  Citation key: `errlaw2026`<br>
  arXiv 2026<br>
  *Sri Vatsa Vuddanti, Satwik Kumar Chittiprolu*<br>
  Tags: `Plan` `Tool Use`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2601.22352)

- **From Confident Closing to Silent Failure: Characterizing False Success in LLM Agents**<br>
  Citation key: `falsesuccess2026`<br>
  Team: University of Colorado | arXiv 2026<br>
  *Laksh Advani*<br>
  Tags: `Verify` `Failure Detection` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.09863)

- **Guitester: Enabling gui agents for exploratory defect discovery**<br>
  Citation key: `gao2026guitester`<br>
  Team: Beijing Jiaotong University; Hithink Research; Nanyang Technological University | ACL 2026<br>
  *Yifei Gao, Jiang Wu, Xiaoyi Chen, et al.*<br>
  Tags: `Verify` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2601.04500)

- **Do GUI Agents Believe Their Eyes? Diagnosing State-Belief Reliance on Pixels versus Structure**<br>
  Citation key: `guibelieve2026`<br>
  arXiv 2026<br>
  *Guijia Zhang, Yuxun Chen, Yuheng Qi, et al.*<br>
  Tags: `Perceive` `GUI/Web Agent` `Memory/Belief`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2607.04334)

- **Agent-SAMA: State-Aware Mobile Assistant**<br>
  Citation key: `guo2026agent`<br>
  AAAI 2026<br>
  *Linqiang Guo, Wei Liu, Yi Wen Heng, et al.*<br>
  Tags: `Verify` `GUI/Web Agent`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1609/aaai.v40i35.40187)

- **Generative Visual Code Mobile World Models**<br>
  Citation key: `gworld2026`<br>
  Team: Trillion Labs; KAIST AI | ICML 2026<br>
  *Woosung Koh, Sungjun Han, Segyu Lee, et al.*<br>
  Tags: `Anticipate` `World Model` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.01576)

- **Seeing, listening, remembering, and reasoning: A multimodal agent with long-term memory**<br>
  Citation key: `long2026seeing`<br>
  Team: ByteDance Seed | ICLR 2026<br>
  *Lin Long, Yichen He, Wentao Ye, et al.*<br>
  Tags: `Perceive` `Memory/Belief` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2508.09736) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/bytedance-seed/m3-agent)

- **Oversight Has a Capacity: Calibrating Agent Guards to a Subjective, Fatiguing Human**<br>
  Citation key: `oversight2026`<br>
  Team: Independent Researcher | arXiv 2026<br>
  *Emre Turan*<br>
  Tags: `Plan` `Safety` `Uncertainty/Oversight`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.08919) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/turangenesis/headroom)

- **Qwen-AgentWorld: Language World Models for General Agents**<br>
  Citation key: `qwenagentworld2026`<br>
  Team: Qwen Team, Alibaba | arXiv 2026<br>
  *Yuxin Zuo, Zikai Xiao, Li Sheng, et al.*<br>
  Tags: `Anticipate` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.24597)

- **VLM Judges Can Rank but Cannot Score: Task-Dependent Uncertainty in Multimodal Evaluation**<br>
  Citation key: `rankcannotscore2026`<br>
  Team: University of Illinois at Chicago; AI Labs at Capital One | arXiv 2026<br>
  *Divake Kumar, Sina Tayebati, Devashri Naik, et al.*<br>
  Tags: `Verify` `Verification/Reward` `Uncertainty/Oversight`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.25235)

- **Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification**<br>
  Citation key: `shi2026interactive`<br>
  arXiv 2026<br>
  *Chenrui Shi, Yuwei Wu, Yang Liu, et al.*<br>
  Tags: `Verify` `GUI/Web Agent` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2607.25904)

- **ShowUI-π: Flow-based Generative Models as GUI Dexterous Hands**<br>
  Citation key: `showuipi2026`<br>
  Team: Show Lab, National University of Singapore | arXiv 2026<br>
  *Siyuan Hu, Kevin Qinghong Lin, Mike Zheng Shou*<br>
  Tags: `Act` `GUI/Web Agent` `Diffusion/Flow Policy`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2512.24965) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://showlab.github.io/showui-pi)

- **Agentic Reward Modeling: Verifying GUI Agent via Progressive Trajectory-Grounded Interaction**<br>
  Citation key: `vagen2026`<br>
  Team: Institute of Automation, CAS; University of Chinese Academy of Sciences; Meituan; Beijing Jiaotong University | arXiv 2026<br>
  *Chaoqun Cui, Jing Huang, Shijing Wang, et al.*<br>
  Tags: `Verify` `GUI/Web Agent` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.00575)

- **WebArbiter: A Principle-Guided Reasoning Process Reward Model for Web Agents**<br>
  Citation key: `webarbiter2026`<br>
  Team: LMU Munich; Munich Center for Machine Learning; Technical University of Munich | ICLR 2026<br>
  *Yao Zhang, Shijie Tang, Zeyu Li, et al.*<br>
  Tags: `Verify` `GUI/Web Agent` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2601.21872)

- **AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents**<br>
  Citation key: `xu2026appdeltaworld`<br>
  arXiv 2026<br>
  *Weikai Xu, Yunren Feng, Haoxiang Lei, et al.*<br>
  Tags: `Anticipate` `World Model` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2608.05891)

- **Code2world: A gui world model via renderable code generation**<br>
  Citation key: `zheng2026code2world`<br>
  Team: University of Science and Technology of China; AMAP, Alibaba Group; Sun Yat-sen University | arXiv 2026<br>
  *Yuhao Zheng, Li'an Zhong, Yi Wang, et al.*<br>
  Tags: `Anticipate` `World Model` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.09856)

- **Agent S2: A Compositional Generalist-Specialist Framework for Computer Use Agents**<br>
  Citation key: `agashe2025agents`<br>
  Team: Simular Research | COLM 2025<br>
  *Saaket Agashe, Kyle Wong, Vincent Tu, et al.*<br>
  Tags: `Plan` `GUI/Web Agent`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://openreview.net/forum?id=zg5is4GJ3R) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/simular-ai/Agent-S)

- **Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation**<br>
  Citation key: `chae2025web`<br>
  Team: Yonsei University | ICLR 2025<br>
  *Hyungjoo Chae, Namyoung Kim, Kai Tzu-iunn Ong, et al.*<br>
  Tags: `Anticipate` `World Model` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.13232) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/kyle8581/WMA-Agents)

- **Webevolver: Enhancing web agent self-improvement with co-evolving world model**<br>
  Citation key: `fang2025webevolver`<br>
  Team: Tencent AI Lab | EMNLP 2025<br>
  *Tianqing Fang, Hongming Zhang, Zhisong Zhang, et al.*<br>
  Tags: `Anticipate` `World Model` `GUI/Web Agent`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.18653/v1/2025.emnlp-main.454)

- **Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents**<br>
  Citation key: `gou2025navigating`<br>
  Team: The Ohio State University; Orby AI | ICLR 2025<br>
  *Boyu Gou, Ruohan Wang, Boyuan Zheng, et al.*<br>
  Tags: `Act` `GUI/Web Agent`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://openreview.net/forum?id=kxnoqaisCT) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/OSU-NLP-Group/UGround) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osu-nlp-group.github.io/UGround/)

- **Learning GUI Grounding with Spatial Reasoning from Visual Feedback**<br>
  Citation key: `guicursor2025`<br>
  arXiv 2025<br>
  *Yu Zhao, Wei-Ning Chen, Huseyin Atahan Inan, et al.*<br>
  Tags: `Act` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2509.21552)

- **GUISpector: An MLLM Agent Framework for Automated Verification of Natural Language Requirements in GUI Prototypes**<br>
  Citation key: `kolthoff2025guispector`<br>
  Team: Clausthal University of Technology; Karlsruhe Institute of Technology | arXiv 2025<br>
  *Kristian Kolthoff, Felix Kretzer, Simone Paolo Ponzetto, et al.*<br>
  Tags: `Verify` `GUI/Web Agent` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2510.04791)

- **AutoGUI: Scaling GUI Grounding with Automatic Functionality Annotations from LLMs**<br>
  Citation key: `li2025autogui`<br>
  ACL 2025<br>
  *Hongxin Li, Jingfan Chen, Jingran Su, et al.*<br>
  Tags: `Plan` `GUI/Web Agent`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://aclanthology.org/2025.acl-long.510/)

- **Magentic-UI: Towards Human-in-the-loop Agentic Systems**<br>
  Citation key: `mozannar2025magenticui`<br>
  Team: Microsoft Research AI Frontiers | arXiv 2025<br>
  *Hussein Mozannar, Gagan Bansal, Cheng Tan, et al.*<br>
  Tags: `Plan`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2507.22358) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/microsoft/magentic-ui)

- **UI-TARS: Pioneering Automated GUI Interaction with Native Agents**<br>
  Citation key: `qin2025ui`<br>
  Team: ByteDance Seed; Tsinghua University | arXiv 2025<br>
  *Yujia Qin, Yining Ye, Junjie Fang, et al.*<br>
  Tags: `Plan` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2501.12326) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/bytedance/UI-TARS)

- **Active perception agent for omnimodal audio-video understanding**<br>
  Citation key: `tao2025active`<br>
  Team: Zhejiang University; Westlake University; Ant Group | arXiv 2025<br>
  *Keda Tao, Wenjie Du, Bohan Yu, et al.*<br>
  Tags: `Perceive` `Active Perception` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2512.23646)

- **ViMo: A Generative Visual GUI World Model for App Agents**<br>
  Citation key: `vimo2025`<br>
  Team: Queen Mary University of London; University of Oxford; Huawei Noah's Ark Lab | arXiv 2025<br>
  *Dezhao Luo, Bohan Tang, Kang Li, et al.*<br>
  Tags: `Anticipate` `World Model` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2504.13936)

- **Is Your LLM Secretly a World Model of the Internet? Model-Based Planning for Web Agents**<br>
  Citation key: `webdreamer2024`<br>
  Team: The Ohio State University | TMLR 2025<br>
  *Yu Gu, Kai Zhang, Yuting Ning, et al.*<br>
  Tags: `Anticipate` `Plan` `World Model` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2411.06559) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/OSU-NLP-Group/WebDreamer)

- **WebOperator: Action-Aware Tree Search for Autonomous Agents in Web Environment**<br>
  Citation key: `weboperator2025`<br>
  Team: BUET; Monash University; Qatar Computing Research Institute | arXiv 2025<br>
  *Mahir Labib Dihan, Tanzima Hashem, Mohammed Eunus Ali, et al.*<br>
  Tags: `Plan` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2512.12692)

- **Web-Shepherd: Advancing PRMs for Reinforcing Web Agents**<br>
  Citation key: `webshepherd2025`<br>
  Team: Yonsei University; Georgia Institute of Technology | NeurIPS 2025<br>
  *Hyungjoo Chae, Sunghwan Kim, Junhee Cho, et al.*<br>
  Tags: `Verify` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2505.15277) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/kyle8581/Web-Shepherd)

- **Backtrackagent: Enhancing gui agent with error detection and backtracking mechanism**<br>
  Citation key: `wu2025backtrackagent`<br>
  Team: MiLM Plus, Xiaomi | EMNLP 2025<br>
  *Qinzhuo Wu, Pengzhi Gao, Wei Liu, et al.*<br>
  Tags: `Verify` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2505.20660)

- **OS-ATLAS: A Foundation Action Model for Generalist GUI Agents**<br>
  Citation key: `wu2025osatlas`<br>
  Team: Shanghai AI Laboratory; The University of Hong Kong; MIT | ICLR 2025<br>
  *Zhiyong Wu, Zhenyu Wu, Fangzhi Xu, et al.*<br>
  Tags: `Act` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.23218) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/OS-Copilot/OS-Atlas) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osatlas.github.io/)

- **AgentOccam: A Simple Yet Strong Baseline for LLM-Based Web Agents**<br>
  Citation key: `yang2025agentoccam`<br>
  Team: UIUC; Amazon | ICLR 2025<br>
  *Ke Yang, Yao Liu, Sapana Chaudhary, et al.*<br>
  Tags: `Perceive` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.13825) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/amazon-science/AgentOccam)

- **Genie: Generative Interactive Environments**<br>
  Citation key: `bruce2024genie`<br>
  Team: Google DeepMind | ICML 2024<br>
  *Jake Bruce, Michael Dennis, Ashley Edwards, et al.*<br>
  Tags: `Anticipate`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2402.15391) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/genie-2024/home)

- **The Impact of Element Ordering on LM Agent Performance**<br>
  Citation key: `chi2024elementordering`<br>
  Team: Carnegie Mellon University | arXiv 2024<br>
  *Wayne Chi, Ameet Talwalkar, Chris Donahue*<br>
  Tags: `Perceive`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2409.12089)

- **Videoagent: A memory-augmented multimodal agent for video understanding**<br>
  Citation key: `fan2024videoagent`<br>
  Team: Stanford University | ECCV 2024<br>
  *Yue Fan, Xiaojian Ma, Rujie Wu, et al.*<br>
  Tags: `Memory/Belief` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2403.11481) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://videoagent.github.io/)

- **CogAgent: A Visual Language Model for GUI Agents**<br>
  Citation key: `hong2024cogagent`<br>
  Team: Tsinghua University; Zhipu AI | CVPR 2024<br>
  *Wenyi Hong, Weihan Wang, Qingsong Lv, et al.*<br>
  Tags: `Perceive` `Act` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2312.08914) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/THUDM/CogAgent)

- **LLaVA-Plus: Learning to Use Tools for Creating Multimodal Agents**<br>
  Citation key: `liu2024llava`<br>
  Team: Microsoft Research; Tsinghua University; University of Wisconsin–Madison; HKUST | ECCV 2024<br>
  *Shilong Liu, Hao Cheng, Haotian Liu, et al.*<br>
  Tags: `Plan` `Tool Use` `Multimodal Understanding`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1007/978-3-031-72970-6_8) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/LLaVA-VL/LLaVA-Plus-Codebase) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://llava-vl.github.io/llava-plus/)

- **Timechat: A time-sensitive multimodal large language model for long video understanding**<br>
  Citation key: `ren2024timechat`<br>
  Team: Peking University | CVPR 2024<br>
  *Shuhuai Ren, Linli Yao, Shicheng Li, et al.*<br>
  Tags: `Perceive` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2312.02051) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/RenShuhuai-Andy/TimeChat)

- **Identifying the Risks of LM Agents with an LM-Emulated Sandbox**<br>
  Citation key: `ruan2024toolemu`<br>
  Team: University of Toronto; Vector Institute; Stanford University | ICLR 2024<br>
  *Yangjun Ruan, Honghua Dong, Andrew Wang, et al.*<br>
  Tags: `Anticipate` `Safety` `Agent Infrastructure`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2309.15817) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ryoungj/ToolEmu)

- **Salmonn: Towards generic hearing abilities for large language models**<br>
  Citation key: `tang2024salmonn`<br>
  Team: Tsinghua University; ByteDance | ICLR 2024<br>
  *Changli Tang, Wenyi Yu, Guangzhi Sun, et al.*<br>
  Tags: `Perceive` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2310.13289) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/bytedance/SALMONN)

- **Tree Search for Language Model Agents**<br>
  Citation key: `treesearch2024`<br>
  Team: Carnegie Mellon University | COLM 2024<br>
  *Jing Yu Koh, Stephen McAleer, Daniel Fried, et al.*<br>
  Tags: `Act`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2407.01476) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/kohjingyu/search-agents) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://jykoh.com/search-agents)

- **Voyager: An Open-Ended Embodied Agent with Large Language Models**<br>
  Citation key: `wang2024voyager`<br>
  Team: NVIDIA; Caltech; UT Austin; Stanford University; UW–Madison | TMLR 2024<br>
  *Guanzhi Wang, Yuqi Xie, Yunfan Jiang, et al.*<br>
  Tags: `Verify`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2305.16291) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/MineDojo/Voyager) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://voyager.minedojo.org/)

- **Os-copilot: Towards generalist computer agents with self-improvement**<br>
  Citation key: `wu2024copilot`<br>
  Team: Shanghai AI Laboratory; East China Normal University; Princeton University; The University of Hong Kong | arXiv 2024<br>
  *Zhiyong Wu, Chengcheng Han, Zichen Ding, et al.*<br>
  Tags: `Plan` `Act` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2402.07456) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/OS-Copilot/OS-Copilot) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://os-copilot.github.io/)

- **Pandora: Towards general world model with natural language actions and video states**<br>
  Citation key: `xiang2024pandora`<br>
  Team: Maitrix.org; UC San Diego; MBZUAI | arXiv 2024<br>
  *Jiannan Xiang, Guangyi Liu, Yi Gu, et al.*<br>
  Tags: `Anticipate` `World Model` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2406.09455) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/maitrix-org/Pandora) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://world-model.maitrix.org/)

- **Aguvis: Unified pure vision agents for autonomous gui interaction**<br>
  Citation key: `xu2024aguvis`<br>
  Team: The University of Hong Kong; Salesforce Research | arXiv 2024<br>
  *Yiheng Xu, Zekun Wang, Junli Wang, et al.*<br>
  Tags: `Act` `GUI/Web Agent`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2412.04454) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/xlang-ai/aguvis) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://aguvis-project.github.io/)

- **Avis: Autonomous visual information seeking with large language model agent**<br>
  Citation key: `hu2023avis`<br>
  Team: Google Research; UCLA | NeurIPS 2023<br>
  *Ziniu Hu, Ahmet Iscen, Chen Sun, et al.*<br>
  Tags: <br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2306.08129)

- **Learning to model the world with language**<br>
  Citation key: `lin2023learning`<br>
  Team: UC Berkeley | arXiv 2023<br>
  *Jessy Lin, Yuqing Du, Olivia Watkins, et al.*<br>
  Tags: `Anticipate`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2308.01399) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/jlin816/dynalang) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://dynalang.github.io/)

- **Self-refine: Iterative refinement with self-feedback**<br>
  Citation key: `madaan2023self`<br>
  Team: Carnegie Mellon University; Allen Institute for AI | NeurIPS 2023<br>
  *Aman Madaan, Niket Tandon, Prakhar Gupta, et al.*<br>
  Tags: `Verify`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2303.17651) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/madaan/self-refine) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://selfrefine.info/)

- **Kosmos-2: Grounding multimodal large language models to the world**<br>
  Citation key: `peng2023kosmos`<br>
  Team: Microsoft Research | arXiv 2023<br>
  *Zhiliang Peng, Wenhui Wang, Li Dong, et al.*<br>
  Tags: `Perceive` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2306.14824) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/microsoft/unilm/tree/master/kosmos-2)

- **Hugginggpt: Solving ai tasks with chatgpt and its friends in hugging face**<br>
  Citation key: `shen2023hugginggpt`<br>
  Team: Zhejiang University; Microsoft Research Asia | NeurIPS 2023<br>
  *Yongliang Shen, Kaitao Song, Xu Tan, et al.*<br>
  Tags: `Perceive` `Plan`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2303.17580) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/microsoft/JARVIS)

- **Mm-react: Prompting chatgpt for multimodal reasoning and action**<br>
  Citation key: `yang2023mm`<br>
  Team: Microsoft Azure AI | arXiv 2023<br>
  *Zhengyuan Yang, Linjie Li, Jianfeng Wang, et al.*<br>
  Tags: `Perceive` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2303.11381) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/microsoft/MM-REACT) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://multimodal-react.github.io/)

- **Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V**<br>
  Citation key: `yang2023som`<br>
  Team: Microsoft Research; HKUST; UW–Madison | arXiv 2023<br>
  *Jianwei Yang, Hao Zhang, Feng Li, et al.*<br>
  Tags: `Perceive`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2310.11441) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/microsoft/SoM) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://som-gpt4v.github.io/)

- **Mastering atari, go, chess and shogi by planning with a learned model**<br>
  Citation key: `schrittwieser2020mastering`<br>
  Team: DeepMind | Nature 2020<br>
  *Julian Schrittwieser, Ioannis Antonoglou, Thomas Hubert, et al.*<br>
  Tags: `Anticipate` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1911.08265)

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

## D. Robotic Systems

Robot learning, perception, and control in the **physical** world — vision-language-action models,
manipulation, navigation, humanoids, and the data and simulators behind them.

- **ACSAC: Adaptive Chunk Size Actor-Critic with Causal Transformer Q-Network**<br>
  Citation key: `acsac2026`<br>
  Team: Tongji University | arXiv 2026<br>
  *Qian Chen, Junqiao Zhao, Hongtu Zhou, et al.*<br>
  Tags: `Act` `Verification/Reward` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.11009)

- **ActionMap: Robot Policy Learning via Voxel Action Heatmap**<br>
  Citation key: `actionmap2026`<br>
  Team: Show Lab, National University of Singapore; NVIDIA | arXiv 2026<br>
  *Pei Yang, Hai Ci, Yanzhe Chen, et al.*<br>
  Tags: `Act`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.06904)

- **ActProbe: Action-Space Probe for Early Failure Detection of Generative Robot Policies**<br>
  Citation key: `actprobe2026`<br>
  Team: AIR, Tsinghua University; UESTC; Nanjing University | arXiv 2026<br>
  *Bingjia Huang, Xiangyu Li, Xiang Wang, et al.*<br>
  Tags: `Verify` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.08508) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/air-embodied-brain/actprobe) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://air-embodied-brain.github.io/actprobe)

- **Beyond Binary Success: Sample-Efficient and Statistically Rigorous Robot Policy Comparison**<br>
  Citation key: `beyondbinary2026`<br>
  Team: University of Pennsylvania; Toyota Research Institute; Princeton University | arXiv 2026<br>
  *David Snyder, Apurva Badithela, Nikolai Matni, et al.*<br>
  Tags: `Verify` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2603.13616)

- **ComFree-Sim: A GPU-Parallelized Analytical Contact Physics Engine for Scalable Contact-Rich Robotics Simulation and Control**<br>
  Citation key: `comfreesim2026`<br>
  Team: UIUC; Arizona State University | arXiv 2026<br>
  *Chetan Borse, Zhixian Xie, Wei-Cheng Huang, et al.*<br>
  Tags: `Anticipate` `Tactile/Contact`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2603.12185)

- **Contact-Anchored Policies: Contact Conditioning Creates Strong Robot Utility Models**<br>
  Citation key: `contactanchored2026`<br>
  Team: New York University; UC Berkeley; UCLA; Hello Robot; Ai2; University of Waterloo | arXiv 2026<br>
  *Zichen Jeff Cui, Omar Rayyan, Haritheja Etukuru, et al.*<br>
  Tags: `Anticipate` `Tactile/Contact`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.09017) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://cap-policy.github.io)

- **ContactWorld: What Matters in Vision-Tactile World Models for Contact-Rich Manipulation**<br>
  Citation key: `contactworld2026`<br>
  Team: Texas A&M University | arXiv 2026<br>
  *Zhiyuan Zhang, Pokuang Zhou, Kaidi Zhang, et al.*<br>
  Tags: `Anticipate` `World Model` `Tactile/Contact`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.13877)

- **Critical Interval MSE: Toward Reliable Offline Validation for Robot Manipulation Policies**<br>
  Citation key: `criticalinterval2026`<br>
  Team: Tsinghua University; Shanghai Qi Zhi Institute; Spirit AI | arXiv 2026<br>
  *Haoxu Huang, Tongsam Zheng, Yifan Chen, et al.*<br>
  Tags: `Verify` `Verification/Reward`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.29898)

- **Demystifying Action Space Design for Robotic Manipulation Policies**<br>
  Citation key: `demystifyaction2026`<br>
  Team: AIR, Tsinghua University; Shanghai AI Lab; Peking University | arXiv 2026<br>
  *Yuchun Feng, Jinliang Zheng, Zhihao Wang, et al.*<br>
  Tags: `Act` `Action Representation`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2602.23408)

- **Foresight: Failure Detection for Long-Horizon Robotic Manipulation with Action-Conditioned World Model Latents**<br>
  Citation key: `foresight2026`<br>
  Team: Princeton University; University of Virginia; University of Michigan | arXiv 2026<br>
  *Haoran Zhang, Yifu Lu, Boyang Wang, et al.*<br>
  Tags: `Verify` `World Model` `Failure Detection`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.23085) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://haoranzhangumich.github.io/Forsight_web)

- **Mixture of Horizons in Action Chunking**<br>
  Citation key: `mixtureofhorizons2026`<br>
  Team: Renmin University of China; The Chinese University of Hong Kong; UNC Chapel Hill | ICML 2026<br>
  *Dong Jing, Gang Wang, Jiaqi Liu, et al.*<br>
  Tags: `Act` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2511.19433)

- **TacForeSight: Force-Guided Tactile World Model for Contact-Rich Manipulation**<br>
  Citation key: `tacforesight2026`<br>
  Team: TARS Robotics; National University of Singapore; Shanghai Jiao Tong University; Institute of Automation, CAS | arXiv 2026<br>
  *Yujie Zang, Yuhang Zheng, Xian Nie, et al.*<br>
  Tags: `Anticipate` `World Model` `Tactile/Contact`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2606.11184)

- **Reactive Diffusion Policy: Slow-Fast Visual-Tactile Policy Learning for Contact-Rich Manipulation**<br>
  Citation key: `reactivediffusion2025`<br>
  Team: Tsinghua University; Shanghai Qi Zhi Institute; Shanghai AI Laboratory; Shanghai Jiao Tong University | RSS 2025<br>
  *Han Xue, Jieji Ren, Wendi Chen, et al.*<br>
  Tags: `Act` `Tactile/Contact` `Diffusion/Flow Policy`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2503.02881) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/xiaoxiaoxh/reactive_diffusion_policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://reactive-diffusion-policy.github.io)

- **Unpacking Failure Modes of Generative Policies: Runtime Monitoring of Consistency and Progress**<br>
  Citation key: `sentinel2024`<br>
  Team: Stanford University; NVIDIA | CoRL 2025<br>
  *Christopher Agia, Rohan Sinha, Jingyun Yang, et al.*<br>
  Tags: `Verify` `Failure Detection` `Agent Infrastructure`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v270/agia25a.html)

- **Can we detect failures without failure data? uncertainty-aware runtime failure detection for imitation learning policies**<br>
  Citation key: `xu2025can`<br>
  Team: Toyota Research Institute; Woven by Toyota | arXiv 2025<br>
  *Chen Xu, Tony Khuong Nguyen, Emma Dixon, et al.*<br>
  Tags: `Verify` `Failure Detection` `Uncertainty/Oversight`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2503.08558)

- **MIRAGE: Cross-Embodiment Zero-Shot Policy Transfer with Cross-Painting**<br>
  Citation key: `chen2024mirage`<br>
  Team: UC Berkeley | RSS 2024<br>
  *Lawrence Yunliang Chen, Karthik Dharmarajan, Kush Hari, et al.*<br>
  Tags: `Act` `Cross-Embodiment`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://roboticsconference.org/2024/program/papers/69/)

- **IRASim: A Fine-Grained World Model for Robot Manipulation**<br>
  Citation key: `irasim2024`<br>
  Team: HKUST; ByteDance Seed | arXiv 2024<br>
  *Fangqi Zhu, Hongtao Wu, Song Guo, et al.*<br>
  Tags: `Anticipate` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2406.14540) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/bytedance/IRASim) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://gen-irasim.github.io/)

- **DROID: A Large-Scale In-the-Wild Robot Manipulation Dataset**<br>
  Citation key: `khazatsky2024droid`<br>
  Team: Stanford University; UC Berkeley; Toyota Research Institute; et al. | RSS 2024<br>
  *Alexander Khazatsky, Karl Pertsch, Suraj Nair, et al.*<br>
  Tags: <br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2403.12945) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/droid-dataset/droid) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://droid-dataset.github.io/)

- **TD-MPC2: Scalable, Robust World Models for Continuous Control**<br>
  Citation key: `tdmpc2_2024`<br>
  Team: UC San Diego | ICLR 2024<br>
  *Nicklas Hansen, Hao Su, Xiaolong Wang*<br>
  Tags: `Anticipate` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2310.16828) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/nicklashansen/tdmpc2) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.tdmpc2.com/)

- **Scaling Proprioceptive-Visual Learning with Heterogeneous Pre-trained Transformers**<br>
  Citation key: `wang2024hpt`<br>
  Team: MIT CSAIL; Meta FAIR | NeurIPS 2024<br>
  *Lirui Wang, Xinlei Chen, Jialiang Zhao, et al.*<br>
  Tags: `Act`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2409.20537) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/liruiw/HPT) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://liruiw.github.io/hpt)

- **Diffusion Policy: Visuomotor Policy Learning via Action Diffusion**<br>
  Citation key: `chi2023diffusionpolicy`<br>
  Team: Columbia University; Toyota Research Institute; MIT | RSS 2023<br>
  *Cheng Chi, Siyuan Feng, Yilun Du, et al.*<br>
  Tags: `Act` `Diffusion/Flow Policy`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2303.04137) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/real-stanford/diffusion_policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://diffusion-policy.cs.columbia.edu/)

- **See, Hear, and Feel: Smart Sensory Fusion for Robotic Manipulation**<br>
  Citation key: `li2023seehearfeel`<br>
  Team: Stanford University | CoRL 2023<br>
  *Hao Li, Yizhi Zhang, Junzhe Zhu, et al.*<br>
  Tags: `Perceive`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v205/li23c.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/JunzheJosephZhu/see_hear_feel) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ai.stanford.edu/~rhgao/see_hear_feel/)

- **Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware**<br>
  Citation key: `zhao2023act`<br>
  Team: Stanford University; UC Berkeley; Meta | RSS 2023<br>
  *Tony Z. Zhao, Vikash Kumar, Sergey Levine, et al.*<br>
  Tags: `Act`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2304.13705) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/tonyzhaozh/act) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://tonyzhaozh.github.io/aloha/)

- **Hydra: A Real-time Spatial Perception System for 3D Scene Graph Construction and Optimization**<br>
  Citation key: `hughes2022hydra`<br>
  Team: MIT | RSS 2022<br>
  *Nathan Hughes, Yun Chang, Luca Carlone*<br>
  Tags: `Perceive` `3D Scene Graph` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2201.13360) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/MIT-SPARK/Hydra)

- **Example-Driven Model-Based Reinforcement Learning for Solving Long-Horizon Visuomotor Tasks**<br>
  Citation key: `wu2021example`<br>
  Team: Stanford University | CoRL 2022<br>
  *Bohan Wu, Suraj Nair, Li Fei-Fei, et al.*<br>
  Tags: `Verify` `Real-Time Execution`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v164/wu22a.html)

- **ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM**<br>
  Citation key: `campos2021orb`<br>
  Team: University of Zaragoza | T-RO 2021<br>
  *Carlos Campos, Richard Elvira, Juan J. Gomez Rodriguez, et al.*<br>
  Tags: `Perceive` `SLAM/Mapping`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1109/TRO.2021.3075644) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/UZ-SLAMLab/ORB_SLAM3)

- **Pddlstream: Integrating symbolic planners and blackbox samplers via optimistic adaptive planning**<br>
  Citation key: `garrett2020pddlstream`<br>
  Team: MIT CSAIL | arXiv 2020<br>
  *Caelan Reed Garrett, Tomas Lozano-Perez, Leslie Pack Kaelbling*<br>
  Tags: `Plan` `TAMP` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1802.08705) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/caelan/pddlstream)

- **Multimodal sensor fusion with differentiable filters**<br>
  Citation key: `lee2020multimodal`<br>
  Team: Stanford University | IROS 2020<br>
  *Michelle A Lee, Brent Yi, Roberto Mart\'\in-Mart\'\in, et al.*<br>
  Tags: `Perceive` `Multimodal Understanding`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2010.13021)

- **Kimera: an open-source library for real-time metric-semantic localization and mapping**<br>
  Citation key: `rosinol2020kimera`<br>
  Team: MIT | ICRA 2020<br>
  *Antoni Rosinol, Marcus Abate, Yun Chang, et al.*<br>
  Tags: `Perceive` `SLAM/Mapping` `Real-Time Execution`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1910.02490) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/MIT-SPARK/Kimera)

- **Dream to control: Learning behaviors by latent imagination**<br>
  Citation key: `hafner2019dream`<br>
  Team: University of Toronto; Google Brain; DeepMind | arXiv 2019<br>
  *Danijar Hafner, Timothy Lillicrap, Jimmy Ba, et al.*<br>
  Tags: `Anticipate` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1912.01603) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/danijar/dreamer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/dreamer/)

- **Learning Latent Dynamics for Planning from Pixels**<br>
  Citation key: `hafner2019planet`<br>
  Team: Google Brain; University of Toronto; DeepMind; University of Michigan | ICML 2019<br>
  *Danijar Hafner, Timothy Lillicrap, Ian Fischer, et al.*<br>
  Tags: `Anticipate` `World Model` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1811.04551) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/google-research/planet) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/planet/)

- **Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models**<br>
  Citation key: `chua2018pets`<br>
  Team: UC Berkeley | NeurIPS 2018<br>
  *Kurtland Chua, Roberto Calandra, Rowan McAllister, et al.*<br>
  Tags: `Anticipate` `World Model`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1805.12114) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/kchua/handful-of-trials)

- **Composable action-conditioned predictors: Flexible off-policy learning for robot navigation**<br>
  Citation key: `kahn2018composable`<br>
  Team: UC Berkeley | CoRL 2018<br>
  *Gregory Kahn, Adam Villaflor, Pieter Abbeel, et al.*<br>
  Tags: `Anticipate` `World Model`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v87/kahn18a.html)

- **Self-Supervised Visual Planning with Temporal Skip Connections.**<br>
  Citation key: `ebert2017self`<br>
  Team: UC Berkeley; TU Munich | CoRL 2017<br>
  *Frederik Ebert, Chelsea Finn, Alex X Lee, et al.*<br>
  Tags: `Anticipate` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1710.05268)

- **Deep visual foresight for planning robot motion**<br>
  Citation key: `finn2017deep`<br>
  Team: Google Brain; UC Berkeley | ICRA 2017<br>
  *Chelsea Finn, Sergey Levine*<br>
  Tags: `Anticipate` `World Model` `Task Planning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1610.00696)

- **Dex-Net 2.0: Deep Learning to Plan Robust Grasps with Synthetic Point Clouds and Analytic Grasp Metrics**<br>
  Citation key: `mahler2017dexnet`<br>
  Team: UC Berkeley; Siemens | RSS 2017<br>
  *Jeffrey Mahler, Jacky Liang, Sherdil Niyaz, et al.*<br>
  Tags: `Anticipate` `Grasping`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/1703.09312) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://berkeleyautomation.github.io/dex-net/)

- **Hierarchical task and motion planning in the now**<br>
  Citation key: `kaelbling2011hierarchical`<br>
  Team: MIT CSAIL | ICRA 2011<br>
  *Leslie Pack Kaelbling, Tomas Lozano-Perez*<br>
  Tags: `Plan` `TAMP` `Task Planning`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1109/ICRA.2011.5980391)

- **Impedance Control: An Approach to Manipulation, Part I—Theory**<br>
  Citation key: `hogan1985impedance`<br>
  Team: MIT | J. Dyn. Sys., Meas., Control 1985<br>
  *Neville Hogan*<br>
  Tags: `Act`<br>
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1115/1.3140702)

- **Going Beyond World Models & VLAs**<br>
  Citation key: `florence2026going`<br>
  Team: Generalist AI | Industry Perspective, 2026<br>
  *Pete Florence and the Generalist Team*<br>
  Tags: `Framework` `Industry Perspective` `VLA` `World Model`<br>
  [![Article](https://img.shields.io/badge/-Article-FF6D00?logo=rss&logoColor=white&style=flat-square)](https://generalistai.com/blog/beyond-world-models)
- **3D-ViTac: Learning Fine-Grained Manipulation with Visuo-Tactile Sensing**<br>
  Citation key: `pmlr-v270-huang25e`<br>
  Team: Columbia University; UIUC; University of Washington | CoRL 2024 (PMLR 270, 2025)<br>
  *Binghao Huang, Yixuan Wang, Xinyi Yang, et al.*<br>
  Tags: `Perceive` `Act` `Visuo-Tactile Sensing` `Dexterous Manipulation`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2410.24091) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v270/huang25e.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/binghao-huang/3d-vitac-training-code) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://binghao-huang.github.io/3D-ViTac/)
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
- **RT-1: Robotics Transformer for Real-World Control at Scale**<br>
  Citation key: `brohan2023rt1`<br>
  Team: Robotics at Google; Everyday Robots | RSS 2023<br>
  *Anthony Brohan, Noah Brown, Justice Carbajal, et al.*<br>
  Tags: `Act` `VLA` `Robot Control` `Generalist Policy`<br>
  [![Paper](https://img.shields.io/badge/-RSS-0F6AB4?style=flat-square)](https://roboticsproceedings.org/rss19/p025.html) [![Code](https://img.shields.io/badge/-Code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/google-research/robotics_transformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer1.github.io/)
- **RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation**<br>
  Citation key: `bousmalis2023robocat`<br>
  Team: Google DeepMind | TMLR 2023<br>
  *Konstantinos Bousmalis, Giulia Vezzani, Dushyant Rao, et al.*<br>
  Tags: `Adapt` `Self-Improvement` `Generalist Policy` `Robot Learning`<br>
  [![arXiv](https://img.shields.io/badge/-arXiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2306.11706) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://deepmind.google/blog/robocat-a-self-improving-robotic-agent)
<div align="right"><a href="#table-of-contents">&uarr; back to top</a></div>

---

## E. Benchmarks
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

- **τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains**  
  Team: Sierra  
  *Shunyu Yao, Noah Shinn, Pedram Razavi, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2406.12045) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/sierra-research/tau-bench)

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

- **MiraBench: Evaluating Action-Conditioned Reliability in Robotic World Models**  
  Team: Institute for AI, Peking University  
  *Tianzhuo Yang, Zihan Shen, Zirui Mi, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.29360)

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

- **PhAIL: A Real-Robot VLA Benchmark and Distributional Methodology**  
  Team: Positronic Robotics  
  *Sergey Arkhangelskiy*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2605.29710)

- **AutoEval: Autonomous Evaluation of Generalist Robot Manipulation Policies in the Real World**  
  Team: UC Berkeley; NVIDIA  
  *Zhiyuan Zhou, Pranav Atreya, You Liang Tan, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2503.24278) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://auto-eval.github.io)

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

- **Evaluating Real-World Robot Manipulation Policies in Simulation**  
  Team: UC San Diego; Stanford University; UC Berkeley; Google DeepMind  
  *Xuanlin Li, Kyle Hsu, Jiayuan Gu, et al.*  
  [![Paper](https://img.shields.io/badge/-paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v270/li25c.html) [![Code](https://img.shields.io/badge/-code-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/simpler-env/SimplerEnv) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://simpler-env.github.io/)

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

- **ADAPT: Benchmarking Commonsense Planning under Unspecified Affordance Constraints**  
  Team: National Taiwan University; National Yang Ming Chiao Tung University; National Tsing Hua University  
  *Pei-An Chen, Yong-Ching Liang, Jia-Fong Yeh, et al.*  
  [![arXiv](https://img.shields.io/badge/-arxiv-B31B1B?logo=arxiv&logoColor=white&style=flat-square)](https://arxiv.org/abs/2604.14902) [![Project](https://img.shields.io/badge/-project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://charlotteannchen.github.io/ADAPT/)

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
