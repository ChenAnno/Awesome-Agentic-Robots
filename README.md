<div align="center">
<br>

<img src="./assets/readme/papav-logo.png" width="39%" alt="PAPAV: Perceive, Anticipate, Plan, Act, Verify">

# PAPAV: A Capability-Centric Survey of Multimodal Embodied Agents

Yanzhe Chen<sup>1</sup> · Qiming Huang<sup>1</sup> · Jifeng Zhu<sup>1</sup> ·
Ziyi Yang<sup>1</sup> · Ruihe An<sup>1</sup> · Peiyao Xu<sup>1</sup> ·
Hesen Yang<sup>1</sup> · Runda Liu<sup>1</sup> · Chang Gong<sup>1</sup> ·
Zhijun Cao<sup>1</sup> · Zechen Bai<sup>1</sup> · Wenzheng Zeng<sup>1</sup> ·
Kevin Qinghong Lin<sup>2</sup> · Yiqi Lin<sup>1</sup> · Guoqiang Liang<sup>1</sup> ·
Mike Zheng Shou<sup>1,†</sup>

<sup>1</sup>Show Lab, National University of Singapore · <sup>2</sup>University of Oxford<br>
<sup>†</sup>Corresponding author

[![Survey PDF](https://img.shields.io/badge/Paper-Survey_PDF-B31B1B?style=flat-square&logo=adobeacrobatreader&logoColor=white)](./SURVEY_Multimodal_Embodied_Agent.pdf)
[![Paper list](https://img.shields.io/badge/Resource-Paper_List-F4A12D?style=flat-square)](#contents)
[![Benchmarks](https://img.shields.io/badge/Resource-Benchmarks-2E9DE0?style=flat-square)](#e-benchmarks)
[![Contribute](https://img.shields.io/badge/Community-Contribute-8056D9?style=flat-square)](./CONTRIBUTING.md)

[![Awesome](https://img.shields.io/badge/Awesome-yes-FC60A8?style=flat-square&logo=awesomelists&logoColor=white)](https://awesome.re)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0--1.0-lightgrey?style=flat-square)](./LICENSE)

</div>

---

This repository accompanies our survey on **multimodal embodied agents (MMEAs)**: systems that combine
general multimodal reasoning with closed-loop physical interaction. The survey introduces **PAPAV —
Perceive, Anticipate, Plan, Act, and Verify** — as a shared, architecture-independent lens for comparing
multimodal agents, robotic systems, and MMEAs.

- 🔁 **A unified capability view:** organize digital and physical agents around the same recurring task
  loop, without assuming a particular model family, architecture, task, or embodiment.
- 🤖 **From digital to physical:** examine what changes when an agent must ground its decisions in a
  partially observed, dynamic, time-coupled, and consequential physical world.
- 🧪 **Evaluation and outlook:** review how current benchmarks cover the interaction loop and outline
  open challenges for memory, planning, execution, verification, world modeling, and uncertainty.

## Taxonomy

<p align="center">
  <a href="./assets/readme/papav-taxonomy.png">
    <img src="./assets/readme/papav-taxonomy.png" width="100%" alt="Evolution of multimodal embodied agents across robotic systems, multimodal embodied agents, and multimodal agents">
  </a>
</p>

<p align="center"><sub>A chronological view of representative robotic systems, multimodal embodied agents, and multimodal agents. Click the figure to open the full-resolution image.</sub></p>

## News

- **[2026-08-05]** 🎉 Repository created.

<!-- Add only verified project milestones or substantial collection updates here. -->

## Contents

- [Taxonomy](#taxonomy) · [News](#news)
- [A. Related Surveys](#a-related-surveys)
- [B. Multimodal Embodied Agents](#b-multimodal-embodied-agents)
- [C. Multimodal Agents](#c-multimodal-agents)
- [D. Robotic Systems](#d-robotic-systems)
- [E. Benchmarks](#e-benchmarks)
  - [Multimodal Embodied Agents](#multimodal-embodied-agents)
  - [Multimodal Agents](#multimodal-agents)
  - [Robotic Systems](#robotic-systems)
- [Contributing](#contributing) · [Acknowledgements](#acknowledgements) · [Citation](#citation) ·
  [License](#license)

---

## A. Related Surveys

Prior surveys and reviews adjacent to our scope.

- **How Agents Ask for Permission: User Permissions for AI Agents, from Interfaces to Enforcement**  
  *Alexandra E. Michael, Franziska Roesner*  
  arXiv, 2026.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.13718)

- **Progress Reward Modeling for Robotic Learning: A Comprehensive Survey**  
  *Jianshu Zhang, Keliang Wu, Haoran Lu, et al.*  
  arXiv, 2026.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21655) [![Code](https://img.shields.io/github/stars/sterzhang/Awesome-Progress-Models?style=flat-square&logo=github&label=Code)](https://github.com/sterzhang/Awesome-Progress-Models)

- **Agentic Artificial Intelligence (AI): Architectures, Taxonomies, and Evaluation of Large Language Model Agents**  
  *V. Arunkumar, G. R. Gangadharan, Rajkumar Buyya*  
  arXiv, 2026.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.12560)

- **A Survey on Agentic Multimodal Large Language Models**  
  *Huanjin Yao, Ruifei Zhang, Jiaxing Huang, et al.*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.10991) [![Code](https://img.shields.io/github/stars/HJYao00/Awesome-Agentic-MLLMs?style=flat-square&logo=github&label=Code)](https://github.com/HJYao00/Awesome-Agentic-MLLMs)

- **Towards Embodied Agentic AI: Review and Classification of LLM- and VLM-Driven Robot Autonomy and Interaction**  
  *Sahar Salimpour, Lei Fu, Kajetan Rachwa\l, et al.*  
  arXiv, 2025.08  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.05294)

- **A Survey on (M)LLM-Based GUI Agents**  
  Team: Zhejiang University; Microsoft Research Asia  
  *Fei Tang, Haolei Xu, Hang Zhang, et al.*  
  arXiv, 2025.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.13865) [![Code](https://img.shields.io/github/stars/zju-real/Awesome-GUI-Agents?style=flat-square&logo=github&label=Code)](https://github.com/zju-real/Awesome-GUI-Agents)

- **Aligning Cyber Space with Physical World: A Comprehensive Survey on Embodied AI**  
  *Yang Liu, Weixing Chen, Yongjie Bai, et al.*  
  arXiv, 2024.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.06886) [![Code](https://img.shields.io/github/stars/HCPLab-SYSU/Embodied_AI_Paper_List?style=flat-square&logo=github&label=Code)](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List)

- **A Survey on Vision-Language-Action Models for Embodied AI**  
  *Yueen Ma, Zixing Song, Yuzheng Zhuang, et al.*  
  TNNLS 2026, 2024.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.14093) [![Code](https://img.shields.io/github/stars/yueen-ma/Awesome-VLA?style=flat-square&logo=github&label=Code)](https://github.com/yueen-ma/Awesome-VLA)

- **Large Multimodal Agents: A Survey**  
  *Junlin Xie, Zhihong Chen, Ruifei Zhang, et al.*  
  Visual Intelligence 2025, 2024.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.15116) [![Code](https://img.shields.io/github/stars/jun0wanan/awesome-large-multimodal-agents?style=flat-square&logo=github&label=Code)](https://github.com/jun0wanan/awesome-large-multimodal-agents)

- **Agent AI: Surveying the Horizons of Multimodal Interaction**  
  Team: Stanford University; Microsoft Research; UCLA; University of Washington  
  *Zane Durante, Qiuyuan Huang, Naoki Wake, et al.*  
  arXiv, 2024.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.03568)

- **Integrated Task and Motion Planning**  
  *Caelan Reed Garrett, Rohan Chitnis, Rachel Holladay, et al.*  
  Annual Reviews 2021, 2020.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2010.01083)

<div align="right"><a href="#contents">&uarr; back to top</a></div>

---

## B. Multimodal Embodied Agents

Foundation-model-driven agents that couple multimodal perception and reasoning to **embodied**
sensing and physical action in a closed loop — VLAs, LLM/VLM planners and critics for robots,
language-conditioned robot world models, and embodied memory.

- **Mimir: A Neuro-Symbolic Memory System with Dynamic Grounding for Embodied Agents in Interactive Environments**  
  *Haoming Xu, Zhenlin He, Hengyi Wang, et al.*  
  arXiv, 2026.08  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04933)

- **Claude Plays Robotics**  
  Team: Anthropic Frontier Red Team  
  *Shmuel Berman, Michael Ilie, Jia Deng, et al.*  
  Blog 2026, 2026.07  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://www.anthropic.com/research/claude-plays-robotics)

- **CheckVLA: Execution-Time Verification with Action-Conditioned World Model for Long-Horizon Mobile Manipulation**  
  *Yushan Liu, Peibo Sun, Xintao Chao, et al.*  
  arXiv, 2026.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.26789)

- **RoboTTT: Context Scaling for Robot Policies**  
  Team: NVIDIA GEAR Lab; Stanford University  
  *Yunfan Jiang, Yevgen Chebotar, Ruijie Zheng, et al.*  
  arXiv, 2026.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.15275) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://research.nvidia.com/labs/gear/robottt/)

- **Cloak: Zero-Shot Cross-Embodiment Manipulation by Masking the End-Effector from the VLA**  
  *Michael Piseno, Guy Tevet, C. Karen Liu*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.22836) [![Code](https://img.shields.io/github/stars/Stanford-TML/cloak?style=flat-square&logo=github&label=Code)](https://github.com/Stanford-TML/cloak) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://tml.stanford.edu/cloak)

- **CoFineLLM: Conformal Finetuning of LLMs for Language-Instructed Robot Planning**  
  *Jun Wang, Yevgeniy Vorobeychik, Yiannis Kantaros*  
  L4DC 2026, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.06575) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v331/wang26c.html)

- **eMEM: A Hybrid Spatio-Temporal Memory System For Embodied Agents**  
  Team: Automatika Robotics; Inria  
  *A. Haroon Rasheed, Maria Kabtoul*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.03374)

- **G³VLA: Geometric inductive bias for Vision-Language-Action Models**  
  *Yue Peng, Yongzhe Zhao, Artur Habuda, et al.*  
  CoRL 2026, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.24472)

- **Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation**  
  *Shahram Najam Syed, Arthur Jakobsson, Haoran Hao, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02486)

- **Kairos: A Regret-Aware Native World-Action Model Stack for Physical AI**  
  Team: Kairos AGI  
  *Kairos Team, Fei Wang, Shan You, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.16533) [![Code](https://img.shields.io/github/stars/kairos-agi/kairos?style=flat-square&logo=github&label=Code)](https://github.com/kairos-agi/kairos)

- **KITE: Decoupling Kinematics and Interaction for Zero-Shot Cross-Embodiment Manipulation**  
  *Qianxu Wang, Kuan Fang*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.22113)

- **What Spatial Memory Must Store: Occlusion as the Test for Language-Agent Memory**  
  Team: Space Zero, Inc.  
  *Doeon Kwon, Junho Bang*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.10299)

- **What Matters in Orchestrating Robot Policies: A Systematic Study of Hierarchical VLA Agents**  
  Team: Google DeepMind  
  *Jiaheng Hu, Mohit Shridhar, Caden Lu, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.10267)

- **Perturbation-Based Uncertainty for Failure Detection in Vision-Language-Action Models**  
  *Yousung Lee, Dongsoo Har*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.20754)

- **Robot Critics that Sweat the Small Stuff**  
  Team: Toyota Research Institute; Columbia University  
  *Sruthi Sudhakar, Junbang Liang, Sreehari Rammohan, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.21572) [![Code](https://img.shields.io/github/stars/SruthiSudhakar/robocritic?style=flat-square&logo=github&label=Code)](https://github.com/SruthiSudhakar/robocritic) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robocritic.cs.columbia.edu)

- **Visual Verification Enables Inference-time Steering and Autonomous Policy Improvement**  
  *Mingtong Zhang, Dhruv Shah*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.18247) [![Code](https://img.shields.io/github/stars/princeton-prism/veritas?style=flat-square&logo=github&label=Code)](https://github.com/princeton-prism/veritas) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://veritas-improvement.github.io/)

- **VLA-FAIL: Efficient Task Failure Detection for Finetuned Vision-Language-Action Models**  
  *Florian Seligmann, Emiliyan Gospodinov, Enes Ulas Dincer, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.21386)

- **World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis**  
  *Yi Yang, Zhihong Liu, Siqi Kou, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.05979) [![Code](https://img.shields.io/github/stars/SJTU-DENG-Lab/WLA?style=flat-square&logo=github&label=Code)](https://github.com/SJTU-DENG-Lab/WLA)

- **X-Tokenizer: A Multimodal Action Tokenizer for Vision-Language-Action Pretraining**  
  Team: X Square Robot; Tsinghua University  
  *Miracle Kang, Lights Shi, Lucy Liang, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.14752) [![Code](https://img.shields.io/github/stars/X-Square-Robot/X-Tokenizer?style=flat-square&logo=github&label=Code)](https://github.com/X-Square-Robot/X-Tokenizer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://x-square-robot.github.io/X-Tokenizer_projectPage/)

- **Dynamic Execution Commitment of Vision-Language-Action Models**  
  *Feng Chen, Xianghui Wang, Yuxuan Chen, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.11567)

- **EMBGuard: Constructing Hazard-Aware Guardrails for Safe Planning in Embodied Agents**  
  *Dongwook Choi, Taeyoon Kwon, Bogyung Jeong, et al.*  
  ICML 2026, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30924) [![Code](https://img.shields.io/github/stars/dongwxxkchoi/EMBGuard?style=flat-square&logo=github&label=Code)](https://github.com/dongwxxkchoi/EMBGuard)

- **Hide-and-Seek in Trajectories: Discovering Failure Signals for VLA Runtime Monitoring**  
  *Seongheon Park, Wendi Li, Changdae Oh, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30834)

- **OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation**  
  *Xinzhe Chen, Sihua Ren, Liqi Huang, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.25829)

- **3D-Belief: Embodied Belief Inference via Generative 3D World Modeling**  
  Team: Johns Hopkins University; Lambda; University of Cambridge  
  *Yifan Yin, Zehao Wen, Suyu Ye, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.11367) [![Code](https://img.shields.io/github/stars/3D-Belief/3d-belief?style=flat-square&logo=github&label=Code)](https://github.com/3D-Belief/3d-belief) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://3d-belief.github.io/)

- **Robot Planning and Situation Handling with Active Perception**  
  Team: SUNY Binghamton; CMU; Ford Research  
  *Austine Oloo, Zainab Altaweel, Yohei Hayamizu, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.26988)

- **Adaptive Action Chunking at Inference-time for Vision-Language-Action Models**  
  Team: Shenzhen University of Advanced Technology; Mininglamp Technology; Shenzhen Technology University; City University of Hong Kong; National University of Singapore  
  *Yuanchang Liang, Xiaobo Wang, Kai Wang, et al.*  
  CVPR 2026, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.04161)

- **Using large language models for embodied planning introduces systematic safety risks**  
  *Tao Zhang, Kaixian Qu, Zhibin Li, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.18463)

- **Libra-VLA: Achieving Learning Equilibrium via Asynchronous Coarse-to-Fine Dual-System**  
  Team: Beihang University; AgiBot  
  *Yifei Wei, Linqing Zhong, Yi Liu, et al.*  
  ACL 2026, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.24921)

- **World-Value-Action Model: Implicit Planning for Vision-Language-Action Systems**  
  *Runze Li, Hongyin Zhang, Junxi Jin, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.14732) [![Code](https://img.shields.io/github/stars/Win-commit/WAV?style=flat-square&logo=github&label=Code)](https://github.com/Win-commit/WAV)

- **GSMem: 3D Gaussian Splatting as Persistent Spatial Memory for Zero-Shot Embodied Exploration and Reasoning**  
  *Yiren Lu, Yi Du, Disheng Liu, et al.*  
  arXiv, 2026.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.19137)

- **Evaluating VLMs' Spatial Reasoning Over Robot Motion: A Step Towards Robot Planning with Motion Preferences**  
  *Wenxi Wu, Jingjing Zhang, Martim Brandao*  
  arXiv, 2026.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.13100)

- **AsyncVLA: An Asynchronous VLA for Fast and Robust Navigation on the Edge**  
  Team: UC Berkeley; Toyota Motor North America; Princeton University  
  *Noriaki Hirose, Catherine Glossop, Dhruv Shah, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.13476)

- **LAP: Language-Action Pre-Training Enables Zero-shot Cross-Embodiment Transfer**  
  *Lihan Zha, Asher J. Hancock, Mingtong Zhang, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10556) [![Code](https://img.shields.io/github/stars/lihzha/lap?style=flat-square&logo=github&label=Code)](https://github.com/lihzha/lap) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://lap-vla.github.io)

- **Modular Safety Guardrails Are Necessary for Foundation-Model-Enabled Robots in the Real World**  
  Team: Texas A&M University; Purdue University; Amazon  
  *Joonkyung Kim, Wenxi Chen, Davood Soleymanzadeh, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.04056)

- **Recursive Belief Vision Language Action Models**  
  *Vaidehi Bagaria, Bijo Sebastian, Nirav Kumar Patel*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.20659)

- **SafeGen-LLM: Enhancing Safety Generalization in Task Planning for Robotic Systems**  
  *Jialiang Fan, Weizhe Xu, Mengyu Liu, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.24235)

- **Theory of Space: Can Foundation Models Construct Spatial Beliefs through Active Exploration?**  
  *Pingyue Zhang, Zihan Huang, Yue Wang, et al.*  
  ICLR 2026, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.07055) [![Code](https://img.shields.io/github/stars/mll-lab-nu/Theory-of-Space?style=flat-square&logo=github&label=Code)](https://github.com/mll-lab-nu/Theory-of-Space)

- **VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model**  
  *Jingwen Sun, Wenyao Zhang, Zekun Qi, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10098) [![Code](https://img.shields.io/github/stars/ginwind/VLA-JEPA?style=flat-square&logo=github&label=Code)](https://github.com/ginwind/VLA-JEPA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ginwind.github.io/VLA-JEPA/)

- **World-VLA-Loop: Closed-Loop Learning of Video World Model and VLA Policy**  
  *Xiaokang Liu, Zechen Bai, Hai Ci, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.06508) [![Code](https://img.shields.io/github/stars/showlab/World-VLA-Loop?style=flat-square&logo=github&label=Code)](https://github.com/showlab/World-VLA-Loop) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://showlab.github.io/World-VLA-Loop/)

- **PhyCritic: Multimodal Critic Models for Physical AI**  
  Team: NVIDIA; University of Maryland  
  *Tianyi Xiong, Shihao Wang, Guilin Liu, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.11124)

- **ActiveVLA: Injecting Active Perception into Vision-Language-Action Models for Precise 3D Robotic Manipulation**  
  *Zhenyang Liu, Yongchong Gu, Yikai Wang, et al.*  
  arXiv, 2026.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.08325) [![Code](https://img.shields.io/github/stars/ZhenyangLiu/ActiveVLA-Injecting-Active-Perception-into-VLA?style=flat-square&logo=github&label=Code)](https://github.com/ZhenyangLiu/ActiveVLA-Injecting-Active-Perception-into-VLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://zhenyangliu.github.io/ActiveVLA/)

- **RoboReward: General-Purpose Vision-Language Reward Models for Robotics**  
  *Tony Lee, Andrew Wagenmaker, Karl Pertsch, et al.*  
  arXiv, 2026.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.00675)

- **TIDAL: Temporally Interleaved Diffusion and Action Loop for High-Frequency VLA Control**  
  *Yuteng Sun, Haoran Wang, Ruofei Bai, et al.*  
  arXiv, 2026.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.14945)

- **Toward Ambulatory Vision: Learning Visually-Grounded Active View Selection**  
  *Juil Koo, Daehyeon Choi, Sangwoo Youn, et al.*  
  arXiv, 2025.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.13250) [![Code](https://img.shields.io/github/stars/KAIST-Visual-AI-Group/VG-AVS?style=flat-square&logo=github&label=Code)](https://github.com/KAIST-Visual-AI-Group/VG-AVS)

- **EVOLVE-VLA: Test-Time Training from Environment Feedback for Vision-Language-Action Models**  
  *Zechen Bai, Chen Gao, Mike Zheng Shou*  
  arXiv, 2025.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.14666) [![Code](https://img.shields.io/github/stars/showlab/EVOLVE-VLA?style=flat-square&logo=github&label=Code)](https://github.com/showlab/EVOLVE-VLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://showlab.github.io/EVOLVE-VLA)

- **Scaling Cross-Environment Failure Reasoning Data for Vision-Language Robotic Manipulation**  
  *Paul Pacaud, Ricardo Garcia, Shizhe Chen, et al.*  
  arXiv, 2025.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.01946)

- **Transforming Monolithic Foundation Models into Embodied Multi-Agent Architectures for Human-Robot Collaboration**  
  *Nan Sun, Bo Mao, Yongchang Li, et al.*  
  arXiv, 2025.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.00797)

- **AVA-VLA: Improving Vision-Language-Action models with Active Visual Attention**  
  Team: LiAuto Inc.; Beijing University of Technology; CUHK-Shenzhen  
  *Lei Xiao, Jifeng Li, Juntao Gao, et al.*  
  arXiv, 2025.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.18960)

- **MADRA: Multi-Agent Debate for Risk-Aware Embodied Planning**  
  *Junjian Wang, Lidan Zhao, Xi Sheryl Zhang*  
  arXiv, 2025.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.21460)

- **X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model**  
  *Jinliang Zheng, Jianxiong Li, Zhihao Wang, et al.*  
  ICLR 2026, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.10274) [![Code](https://img.shields.io/github/stars/2toinf/X-VLA?style=flat-square&logo=github&label=Code)](https://github.com/2toinf/X-VLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://thu-air-dream.github.io/X-VLA/)

- **Ctrl-World: A Controllable Generative World Model for Robot Manipulation**  
  *Yanjiang Guo, Lucy Xiaoyang Shi, Jianyu Chen, et al.*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.10125) [![Code](https://img.shields.io/github/stars/Robert-gyj/Ctrl-World?style=flat-square&logo=github&label=Code)](https://github.com/Robert-gyj/Ctrl-World) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ctrl-world.github.io)

- **Towards Reliable LLM-based Robot Planning via Combined Uncertainty Estimation**  
  *Shiyuan Yin, Chenjia Bai, Zihao Zhang, et al.*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.08044)

- **Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer**  
  Team: Google DeepMind  
  *Gemini Robotics Team*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.03342)

- **Kinodynamic Task and Motion Planning using VLM-guided and Interleaved Sampling**  
  *Minseo Kwon, Young J. Kim*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.26139)

- **Using VLM Reasoning to Constrain Task and Motion Planning**  
  *Muyang Yan, Miras Mengdibayev, Ardon Floros, et al.*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.25548)

- **Leave No Observation Behind: Real-time Correction for VLA Action Chunks**  
  *Kohei Sendai, Maxime Alvarez, Tatsuya Matsushima, et al.*  
  arXiv, 2025.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.23224)

- **A Vision-Language-Action-Critic Model for Robotic Real-World Reinforcement Learning**  
  *Shaopeng Zhai, Qi Zhang, Tianyi Zhang, et al.*  
  arXiv, 2025.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.15937) [![Code](https://img.shields.io/github/stars/InternRobotics/VLAC?style=flat-square&logo=github&label=Code)](https://github.com/InternRobotics/VLAC)

- **Genie Envisioner: A Unified World Foundation Platform for Robotic Manipulation**  
  Team: AgiBot Genie Team; LV-NUS Lab; BUAA  
  *Yue Liao, Pengfei Zhou, Siyuan Huang, et al.*  
  arXiv, 2025.08  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.05635) [![Code](https://img.shields.io/github/stars/AgibotTech/Genie-Envisioner?style=flat-square&logo=github&label=Code)](https://github.com/AgibotTech/Genie-Envisioner) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://genie-envisioner.github.io)

- **DreamVLA: A Vision-Language-Action Model Dreamed with Comprehensive World Knowledge**  
  Team: Shanghai Jiao Tong University; Galbot; UIUC; USTC; Tsinghua University  
  *Wenyao Zhang, Hongsi Liu, Zekun Qi, et al.*  
  NeurIPS 2025, 2025.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.04447) [![Code](https://img.shields.io/github/stars/Zhangwenyao1/DreamVLA?style=flat-square&logo=github&label=Code)](https://github.com/Zhangwenyao1/DreamVLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://zhangwenyao1.github.io/DreamVLA/)

- **Real-Time Execution of Action Chunking Flow Policies**  
  Team: Physical Intelligence; UC Berkeley  
  *Kevin Black, Manuel Y. Galliker, Sergey Levine*  
  NeurIPS 2025, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.07339)

- **Fast-in-Slow: A Dual-System Foundation Model Unifying Fast Manipulation within Slow Reasoning**  
  *Hao Chen, Jiaming Liu, Chenyang Gu, et al.*  
  NeurIPS 2025, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01953)

- **GraphPad: Inference-Time 3D Scene Graph Updates for Embodied Question Answering**  
  *Muhammad Qasim Ali, Saeejith Nair, Alexander Wong, et al.*  
  arXiv, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01174)

- **Enhancing Rating-Based Reinforcement Learning to Effectively Leverage Feedback from Large Vision-Language Models**  
  *Tung Minh Luu, Younghwan Lee, Donghoon Lee, et al.*  
  ICML 2025, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.12822)

- **RoboMonkey: Scaling Test-Time Sampling and Verification for Vision-Language-Action Models**  
  Team: Stanford University; UC Berkeley; NVIDIA Research  
  *Jacky Kwok, Christopher Agia, Rohan Sinha, et al.*  
  arXiv, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.17811) [![Code](https://img.shields.io/github/stars/robomonkey-vla/RoboMonkey?style=flat-square&logo=github&label=Code)](https://github.com/robomonkey-vla/RoboMonkey) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robomonkey-vla.github.io/)

- **SAFE: Multitask Failure Detection for Vision-Language-Action Models**  
  *Qiao Gu, Yuanliang Ju, Shengxiang Sun, et al.*  
  NeurIPS 2025, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09937) [![Code](https://img.shields.io/github/stars/vla-safe/SAFE?style=flat-square&logo=github&label=Code)](https://github.com/vla-safe/SAFE) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vla-safe.github.io/)

- **A Unified Framework for Real-Time Failure Handling in Robotics Using Vision-Language Models, Reactive Planner and Behavior Trees**  
  Team: Lund University; KTH Royal Institute of Technology; ABB Robotics  
  *Faseeh Ahmad, Hashim Ismail, Jonathan Styrud, et al.*  
  arXiv, 2025.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.15202)

- **Hi Robot: Open-Ended Instruction Following with Hierarchical Vision-Language-Action Models**  
  *Lucy Xiaoyang Shi, Brian Ichter, Michael Equi, et al.*  
  ICML 2025, 2025.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.19417) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.physicalintelligence.company/research/hirobot)

- **Reflective Planning: Vision-Language Models for Multi-Stage Long-Horizon Robotic Manipulation**  
  *Yunhai Feng, Jiaming Han, Zhuoran Yang, et al.*  
  CoRL 2025, 2025.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.16707) [![Code](https://img.shields.io/github/stars/yunhaif/reflect-vlm?style=flat-square&logo=github&label=Code)](https://github.com/yunhaif/reflect-vlm) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://reflect-vlm.github.io)

- **FAST: Efficient Action Tokenization for Vision-Language-Action Models**  
  Team: Physical Intelligence; UC Berkeley; Stanford University  
  *Karl Pertsch, Kyle Stachowicz, Brian Ichter, et al.*  
  arXiv, 2025.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.09747) [![Code](https://img.shields.io/github/stars/Physical-Intelligence/openpi?style=flat-square&logo=github&label=Code)](https://github.com/Physical-Intelligence/openpi) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://pi.website/research/fast)

- **UP-VLA: A Unified Understanding and Prediction Model for Embodied Agent**  
  *Jianke Zhang, Yanjiang Guo, Yucheng Hu, et al.*  
  ICML 2025, 2025.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.18867)

- **Video Prediction Policy: A Generalist Robot Policy with Predictive Visual Representations**  
  *Yucheng Hu, Yanjiang Guo, Pengchao Wang, et al.*  
  ICML 2025, 2024.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.14803) [![Code](https://img.shields.io/github/stars/roboterax/video-prediction-policy?style=flat-square&logo=github&label=Code)](https://github.com/roboterax/video-prediction-policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://video-prediction-policy.github.io)

- **Code-as-Monitor: Constraint-aware Visual Programming for Reactive and Proactive Robotic Failure Detection**  
  Team: BAAI; Galbot; Beihang University; Peking University  
  *Enshen Zhou, Qi Su, Cheng Chi, et al.*  
  CVPR 2024, 2024.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.04455)

- **RDT-1B: a Diffusion Foundation Model for Bimanual Manipulation**  
  *Songming Liu, Lingxuan Wu, Bangguo Li, et al.*  
  ICLR 2025, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.07864) [![Code](https://img.shields.io/github/stars/thu-ml/RoboticsDiffusionTransformer?style=flat-square&logo=github&label=Code)](https://github.com/thu-ml/RoboticsDiffusionTransformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rdt-robotics.github.io/rdt-robotics/)

- **AHA: A Vision-Language-Model for Detecting and Reasoning Over Failures in Robotic Manipulation**  
  Team: NVIDIA; University of Washington; Universidad Católica San Pablo; MIT; Nanyang Technological University; Allen Institute for AI  
  *Jiafei Duan, Wilbert Pumacay, Nishanth Kumar, et al.*  
  ICLR 2024, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.00371) [![Code](https://img.shields.io/github/stars/NVlabs/AHA?style=flat-square&logo=github&label=Code)](https://github.com/NVlabs/AHA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://aha-vlm.github.io/)

- **π₀: A Vision-Language-Action Flow Model for General Robot Control**  
  Team: Physical Intelligence  
  *Kevin Black, Noah Brown, Danny Driess, et al.*  
  arXiv, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.24164) [![Code](https://img.shields.io/github/stars/Physical-Intelligence/openpi?style=flat-square&logo=github&label=Code)](https://github.com/Physical-Intelligence/openpi) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.pi.website/blog/pi0)

- **CaStL: Constraints as Specifications through LLM Translation for Long-Horizon Task and Motion Planning**  
  *Weihang Guo, Zachary Kingston, Lydia E. Kavraki*  
  arXiv, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.22225)

- **ReKep: Spatio-Temporal Reasoning of Relational Keypoint Constraints for Robotic Manipulation**  
  *Wenlong Huang, Chen Wang, Yunzhu Li, et al.*  
  CoRL 2025, 2024.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.01652) [![Code](https://img.shields.io/github/stars/huangwl18/ReKep?style=flat-square&logo=github&label=Code)](https://github.com/huangwl18/ReKep) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rekep-robot.github.io/)

- **Scaling Cross-Embodied Learning: One Policy for Manipulation, Navigation, Locomotion and Aviation**  
  *Ria Doshi, Homer Rich Walke, Oier Mees, et al.*  
  CoRL 2025, 2024.08  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.11812) [![Code](https://img.shields.io/github/stars/rail-berkeley/crossformer?style=flat-square&logo=github&label=Code)](https://github.com/rail-berkeley/crossformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://crossformer-model.github.io/)

- **Octo: An Open-Source Generalist Robot Policy**  
  Team: UC Berkeley; Stanford University; Carnegie Mellon University; Google DeepMind  
  *Octo Model Team*  
  RSS 2024, 2024.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.12213) [![Code](https://img.shields.io/github/stars/octo-models/octo?style=flat-square&logo=github&label=Code)](https://github.com/octo-models/octo) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://octo-models.github.io)

- **Clio: Real-time Task-Driven Open-Set 3D Scene Graphs**  
  *Dominic Maggio, Yun Chang, Nathan Hughes, et al.*  
  arXiv, 2024.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.13696) [![Code](https://img.shields.io/github/stars/MIT-SPARK/Clio?style=flat-square&logo=github&label=Code)](https://github.com/MIT-SPARK/Clio)

- **RoboDreamer: Learning Compositional World Models for Robot Imagination**  
  Team: HKUST; MIT; UC San Diego; Google Research; UMass Amherst  
  *Siyuan Zhou, Yilun Du, Jiaben Chen, et al.*  
  ICML 2024, 2024.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.12377) [![Code](https://img.shields.io/github/stars/rainbow979/robodreamer?style=flat-square&logo=github&label=Code)](https://github.com/rainbow979/robodreamer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robovideo.github.io/)

- **Explore until Confident: Efficient Exploration for Embodied Question Answering**  
  Team: Princeton University; Stanford University; Toyota Research Institute  
  *Allen Z. Ren, Jaden Clark, Anushri Dixit, et al.*  
  RSS 2024, 2024.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.15941) [![Code](https://img.shields.io/github/stars/Stanford-ILIAD/explore-eqa?style=flat-square&logo=github&label=Code)](https://github.com/Stanford-ILIAD/explore-eqa) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://explore-eqa.github.io)

- **Hierarchical open-vocabulary 3d scene graphs for language-grounded robot navigation**  
  *Abdelrhman Werby, Chenguang Huang, Martin Buchner, et al.*  
  ICRA 2024, 2024.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.17846) [![Code](https://img.shields.io/github/stars/hovsg/HOV-SG?style=flat-square&logo=github&label=Code)](https://github.com/hovsg/HOV-SG) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://hovsg.github.io/)

- **Vision-Language Models for Robot Success Detection**  
  *Fiona Luo*  
  AAAI 2024, 2024.03  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1609/aaai.v38i21.30552)

- **Introspective Planning: Aligning Robots' Uncertainty with Inherent Task Ambiguity**  
  *Kaiqu Liang, Zixu Zhang, Jaime Fernandez Fisac*  
  arXiv, 2024.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.06529) [![Code](https://img.shields.io/github/stars/kevinliang888/IntroPlan?style=flat-square&logo=github&label=Code)](https://github.com/kevinliang888/IntroPlan)

- **RL-VLM-F: Reinforcement Learning from Vision Language Foundation Model Feedback**  
  *Yufei Wang, Zhanyi Sun, Jesse Zhang, et al.*  
  ICML 2024, 2024.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.03681) [![Code](https://img.shields.io/github/stars/yufeiwang63/RL-VLM-F?style=flat-square&logo=github&label=Code)](https://github.com/yufeiwang63/RL-VLM-F) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rlvlmf2024.github.io/)

- **OK-Robot: What Really Matters in Integrating Open-Knowledge Models for Robotics**  
  Team: New York University; AI at Meta  
  *Peiqi Liu, Yaswanth Orru, Jay Vakil, et al.*  
  arXiv, 2024.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.12202) [![Code](https://img.shields.io/github/stars/ok-robot/ok-robot?style=flat-square&logo=github&label=Code)](https://github.com/ok-robot/ok-robot) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ok-robot.github.io)

- **SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities**  
  Team: Google DeepMind; Google Research; MIT  
  *Boyuan Chen, Zhuo Xu, Sean Kirmani, et al.*  
  CVPR 2024, 2024.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.12168) [![Code](https://img.shields.io/github/stars/remyxai/VQASynth?style=flat-square&logo=github&label=Code)](https://github.com/remyxai/VQASynth) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://spatial-vlm.github.io/)

- **Open X-Embodiment: Robotic Learning Datasets and RT-X Models**  
  Team: Open X-Embodiment Collaboration  
  *Open X-Embodiment Collaboration*  
  ICRA 2024, 2023.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08864) [![Code](https://img.shields.io/github/stars/google-deepmind/open_x_embodiment?style=flat-square&logo=github&label=Code)](https://github.com/google-deepmind/open_x_embodiment) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer-x.github.io)

- **Learning Interactive Real-World Simulators**  
  Team: UC Berkeley; Google DeepMind; MIT; University of Alberta  
  *Sherry Yang, Yilun Du, Seyed Ghasemipour, et al.*  
  ICLR 2024, 2023.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.06114) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://universal-simulator.github.io/unisim/)

- **Zero-Shot Robotic Manipulation with Pretrained Image-Editing Diffusion Models**  
  Team: UC Berkeley; Stanford University; Google DeepMind  
  *Kevin Black, Mitsuhiko Nakamoto, Pranav Atreya, et al.*  
  arXiv, 2023.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.10639) [![Code](https://img.shields.io/github/stars/kvablack/susie?style=flat-square&logo=github&label=Code)](https://github.com/kvablack/susie) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rail-berkeley.github.io/susie/)

- **ConceptGraphs: Open-Vocabulary 3D Scene Graphs for Perception and Planning**  
  *Qiao Gu, Alihusein Kuwajerwala, Sacha Morin, et al.*  
  ICRA 2024, 2023.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.16650) [![Code](https://img.shields.io/github/stars/concept-graphs/concept-graphs?style=flat-square&logo=github&label=Code)](https://github.com/concept-graphs/concept-graphs) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://concept-graphs.github.io/)

- **Plug in the Safety Chip: Enforcing Constraints for LLM-driven Robot Agents**  
  *Ziyi Yang, Shreyas Sundara Raman, Ankit Shah, et al.*  
  ICRA 2024, 2023.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.09919)

- **DoReMi: Grounding Language Model by Detecting and Recovering from Plan-Execution Misalignment**  
  *Yanjiang Guo, Yen-Jen Wang, Lihan Zha, et al.*  
  IROS 2024, 2023.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.00329) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/doremi-paper)

- **RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control**  
  Team: Google DeepMind  
  *Anthony Brohan, Noah Brown, Justice Carbajal, et al.*  
  CoRL 2023, 2023.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.15818) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer2.github.io/)

- **VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models**  
  *Wenlong Huang, Chen Wang, Ruohan Zhang, et al.*  
  CoRL 2023, 2023.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.05973) [![Code](https://img.shields.io/github/stars/huangwl18/VoxPoser?style=flat-square&logo=github&label=Code)](https://github.com/huangwl18/VoxPoser) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://voxposer.github.io/)

- **Robots That Ask For Help: Uncertainty Alignment for Large Language Model Planners**  
  Team: Princeton University; Google DeepMind  
  *Allen Z. Ren, Anushri Dixit, Alexandra Bodrova, et al.*  
  CoRL 2023, 2023.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.01928) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robot-help.github.io)

- **SayPlan: Grounding Large Language Models using 3D Scene Graphs for Scalable Robot Task Planning**  
  *Krishan Rana, Jesse Haviland, Sourav Garg, et al.*  
  CoRL 2023, 2023.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.06135) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sayplan.github.io)

- **REFLECT: Summarizing Robot Experiences for Failure Explanation and Correction**  
  *Zeyi Liu, Arpit Bahety, Shuran Song*  
  CoRL 2023, 2023.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.15724) [![Code](https://img.shields.io/github/stars/real-stanford/reflect?style=flat-square&logo=github&label=Code)](https://github.com/real-stanford/reflect) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robot-reflect.github.io/)

- **Liv: Language-image representations and rewards for robotic control**  
  Team: University of Pennsylvania; Meta AI  
  *Yecheng Jason Ma, Vikash Kumar, Amy Zhang, et al.*  
  ICML 2023, 2023.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.00958) [![Code](https://img.shields.io/github/stars/penn-pal-lab/LIV?style=flat-square&logo=github&label=Code)](https://github.com/penn-pal-lab/LIV) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://penn-pal-lab.github.io/LIV/)

- **LLM+P: Empowering Large Language Models with Optimal Planning Proficiency**  
  *Bo Liu, Yuqian Jiang, Xiaohan Zhang, et al.*  
  arXiv, 2023.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2304.11477) [![Code](https://img.shields.io/github/stars/Cranial-XIX/llm-pddl?style=flat-square&logo=github&label=Code)](https://github.com/Cranial-XIX/llm-pddl)

- **Vision-Language Models as Success Detectors**  
  Team: Google DeepMind; UC Berkeley  
  *Yuqing Du, Ksenia Konyushkova, Misha Denil, et al.*  
  arXiv, 2023.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.07280)

- **LERF: Language Embedded Radiance Fields**  
  *Justin Kerr, Chung Min Kim, Ken Goldberg, et al.*  
  ICCV 2023, 2023.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.09553) [![Code](https://img.shields.io/github/stars/kerrj/lerf?style=flat-square&logo=github&label=Code)](https://github.com/kerrj/lerf) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.lerf.io/)

- **PaLM-E: An Embodied Multimodal Language Model**  
  Team: Robotics at Google; TU Berlin  
  *Danny Driess, Fei Xia, Mehdi S. M. Sajjadi, et al.*  
  ICML 2023, 2023.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.03378) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://palm-e.github.io/)

- **Learning Universal Policies via Text-Guided Video Generation**  
  Team: MIT; Google DeepMind; UC Berkeley; Georgia Tech; University of Alberta  
  *Yilun Du, Mengjiao Yang, Bo Dai, et al.*  
  NeurIPS 2023, 2023.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2302.00111) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://universal-policy.github.io/)

- **Openscene: 3d scene understanding with open vocabularies**  
  Team: Google Research; ETH Zurich; MPI for Intelligent Systems; Waymo; Simon Fraser University  
  *Songyou Peng, Kyle Genova, Chiyu Jiang, et al.*  
  CVPR 2023, 2022.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2211.15654) [![Code](https://img.shields.io/github/stars/pengsongyou/openscene?style=flat-square&logo=github&label=Code)](https://github.com/pengsongyou/openscene) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://pengsongyou.github.io/openscene)

- **Visual language maps for robot navigation**  
  Team: University of Freiburg; Google Research; University of Technology Nuremberg  
  *Chenguang Huang, Oier Mees, Andy Zeng, et al.*  
  ICRA 2023, 2022.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2210.05714) [![Code](https://img.shields.io/github/stars/vlmaps/vlmaps?style=flat-square&logo=github&label=Code)](https://github.com/vlmaps/vlmaps) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vlmaps.github.io/)

- **VIMA: Robot Manipulation with Multimodal Prompts**  
  Team: Stanford University; NVIDIA; Macalester College; Caltech; Tsinghua University; UT Austin  
  *Yunfan Jiang, Agrim Gupta, Zichen Zhang, et al.*  
  ICML 2023, 2022.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2210.03094) [![Code](https://img.shields.io/github/stars/vimalabs/VIMA?style=flat-square&logo=github&label=Code)](https://github.com/vimalabs/VIMA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vimalabs.github.io/)

- **Code as Policies: Language Model Programs for Embodied Control**  
  Team: Robotics at Google  
  *Jacky Liang, Wenlong Huang, Fei Xia, et al.*  
  ICRA 2023, 2022.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2209.07753) [![Code](https://img.shields.io/github/stars/google-research/google-research?style=flat-square&logo=github&label=Code)](https://github.com/google-research/google-research/tree/master/code_as_policies) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://code-as-policies.github.io/)

- **ProgPrompt: Generating Situated Robot Task Plans Using Large Language Models**  
  Team: University of Southern California; NVIDIA  
  *Ishika Singh, Valts Blukis, Arsalan Mousavian, et al.*  
  ICRA 2023, 2022.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2209.11302) [![Code](https://img.shields.io/github/stars/NVlabs/progprompt-vh?style=flat-square&logo=github&label=Code)](https://github.com/NVlabs/progprompt-vh) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://progprompt.github.io/)

- **Inner Monologue: Embodied Reasoning through Planning with Language Models**  
  Team: Robotics at Google  
  *Wenlong Huang, others*  
  CoRL 2022, 2022.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2207.05608) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://innermonologue.github.io)

- **Do As I Can, Not As I Say: Grounding Language in Robotic Affordances**  
  Team: Robotics at Google; Everyday Robots  
  *Michael Ahn, Anthony Brohan, Noah Brown, et al.*  
  CoRL 2023, 2022.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2204.01691) [![Code](https://img.shields.io/github/stars/google-research/google-research?style=flat-square&logo=github&label=Code)](https://github.com/google-research/google-research/tree/master/saycan) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://say-can.github.io/)

- **Language Models as Zero-Shot Planners: Extracting Actionable Knowledge for Embodied Agents**  
  Team: UC Berkeley; Carnegie Mellon University; Google Brain  
  *Wenlong Huang, Pieter Abbeel, Deepak Pathak, et al.*  
  ICML 2022, 2022.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2201.07207) [![Code](https://img.shields.io/github/stars/huangwl18/language-planner?style=flat-square&logo=github&label=Code)](https://github.com/huangwl18/language-planner) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://huangwl18.github.io/language-planner/)

- **Learning Language-Conditioned Robot Behavior from Offline Data and Crowd-Sourced Annotation**  
  Team: Stanford University; Google  
  *Suraj Nair, Eric Mitchell, Kevin Chen, et al.*  
  CoRL 2022, 2021.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2109.01115) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/robotlorel)

<div align="right"><a href="#contents">&uarr; back to top</a></div>

---

## C. Multimodal Agents

Agents built on multi-modal foundation models that perceive and act in **digital** environments —
screens, browsers, documents, and APIs — without a physical body.

- **AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents**  
  *Weikai Xu, Yunren Feng, Haoxiang Lei, et al.*  
  arXiv, 2026.08  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.05891)

- **Do GUI Agents Believe Their Eyes? Diagnosing State-Belief Reliance on Pixels versus Structure**  
  *Guijia Zhang, Yuxun Chen, Yuheng Qi, et al.*  
  arXiv, 2026.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.04334)

- **Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification**  
  *Chenrui Shi, Yuwei Wu, Yang Liu, et al.*  
  arXiv, 2026.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25904)

- **From Confident Closing to Silent Failure: Characterizing False Success in LLM Agents**  
  *Laksh Advani*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.09863)

- **Oversight Has a Capacity: Calibrating Agent Guards to a Subjective, Fatiguing Human**  
  *Emre Turan*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.08919) [![Code](https://img.shields.io/github/stars/turangenesis/headroom?style=flat-square&logo=github&label=Code)](https://github.com/turangenesis/headroom)

- **Qwen-AgentWorld: Language World Models for General Agents**  
  Team: Qwen Team, Alibaba  
  *Yuxin Zuo, Zikai Xiao, Li Sheng, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.24597) [![Code](https://img.shields.io/github/stars/QwenLM/Qwen-AgentWorld?style=flat-square&logo=github&label=Code)](https://github.com/QwenLM/Qwen-AgentWorld)

- **A11y-Compressor: A Framework for Enhancing the Efficiency of GUI Agent Observations through Visual Context Reconstruction and Redundancy Reduction**  
  *Michito Takeshita, Takuro Kawada, Takumi Ohashi, et al.*  
  ACL 2026, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.00551)

- **DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback**  
  Team: Shanghai Jiao Tong University; Huawei  
  *Yunpeng Dong, Jingkai He, Shiqi Liu, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22781)

- **Crab: A Semantics-Aware Checkpoint/Restore Runtime for Agent Sandboxes**  
  *Tianyuan Wu, Chaokun Chang, Lunxi Cao, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28138)

- **VLM Judges Can Rank but Cannot Score: Task-Dependent Uncertainty in Multimodal Evaluation**  
  Team: University of Illinois at Chicago; AI Labs at Capital One  
  *Divake Kumar, Sina Tayebati, Devashri Naik, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.25235) [![Code](https://img.shields.io/github/stars/divake/VLM-Judge-Uncertainty?style=flat-square&logo=github&label=Code)](https://github.com/divake/VLM-Judge-Uncertainty)

- **Confident and Wrong: Silent Semantic Failures in Coding Agents**  
  Team: Snowflake AI Research  
  *Aman Mehta*  
  arXiv, 2026.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.25764)

- **Generative Visual Code Mobile World Models**  
  Team: Trillion Labs; KAIST AI  
  *Woosung Koh, Sungjun Han, Segyu Lee, et al.*  
  ICML 2026, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.01576) [![Code](https://img.shields.io/github/stars/trillion-labs/gWorld?style=flat-square&logo=github&label=Code)](https://github.com/trillion-labs/gWorld)

- **Agentic Reward Modeling: Verifying GUI Agent via Progressive Trajectory-Grounded Interaction**  
  Team: Institute of Automation, CAS; University of Chinese Academy of Sciences; Meituan; Beijing Jiaotong University  
  *Chaoqun Cui, Jing Huang, Shijing Wang, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.00575)

- **Code2world: A gui world model via renderable code generation**  
  Team: University of Science and Technology of China; AMAP, Alibaba Group; Sun Yat-sen University  
  *Yuhao Zheng, Li'an Zhong, Yi Wang, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.09856) [![Code](https://img.shields.io/github/stars/AMAP-ML/Code2World?style=flat-square&logo=github&label=Code)](https://github.com/AMAP-ML/Code2World)

- **Mobiledreamer: Generative sketch world model for gui agent**  
  Team: Institute of Automation, CAS; University of Chinese Academy of Sciences; Meituan  
  *Yilin Cao, Yufeng Zhong, Zhixiong Zeng, et al.*  
  arXiv, 2026.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04035)

- **Recoverability Has a Law: The ERR Measure for Tool-Augmented Agents**  
  *Sri Vatsa Vuddanti, Satwik Kumar Chittiprolu*  
  arXiv, 2026.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.22352)

- **Guitester: Enabling gui agents for exploratory defect discovery**  
  Team: Beijing Jiaotong University; Hithink Research; Nanyang Technological University  
  *Yifei Gao, Jiang Wu, Xiaoyi Chen, et al.*  
  ACL 2026, 2026.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04500) [![Code](https://img.shields.io/github/stars/ADaM-BJTU/GUITestBench?style=flat-square&logo=github&label=Code)](https://github.com/ADaM-BJTU/GUITestBench)

- **WebArbiter: A Principle-Guided Reasoning Process Reward Model for Web Agents**  
  *Yao Zhang, Shijie Tang, Zeyu Li, et al.*  
  ICLR 2026, 2026.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.21872)

- **ShowUI-π: Flow-based Generative Models as GUI Dexterous Hands**  
  *Siyuan Hu, Kevin Qinghong Lin, Mike Zheng Shou*  
  arXiv, 2025.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.24965) [![Code](https://img.shields.io/github/stars/showlab/showui-pi?style=flat-square&logo=github&label=Code)](https://github.com/showlab/showui-pi) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://showlab.github.io/showui-pi)

- **Active perception agent for omnimodal audio-video understanding**  
  Team: Zhejiang University; Westlake University; Ant Group  
  *Keda Tao, Wenjie Du, Bohan Yu, et al.*  
  arXiv, 2025.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.23646)

- **WebOperator: Action-Aware Tree Search for Autonomous Agents in Web Environment**  
  *Mahir Labib Dihan, Tanzima Hashem, Mohammed Eunus Ali, et al.*  
  arXiv, 2025.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.12692) [![Code](https://img.shields.io/github/stars/kagnlp/WebOperator?style=flat-square&logo=github&label=Code)](https://github.com/kagnlp/WebOperator)

- **GUISpector: An MLLM Agent Framework for Automated Verification of Natural Language Requirements in GUI Prototypes**  
  *Kristian Kolthoff, Felix Kretzer, Simone Paolo Ponzetto, et al.*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.04791)

- **Scaling Synthetic Task Generation for Agents via Exploration**  
  *Ram Ramrakhya, Andrew Szot, Omar Attia, et al.*  
  ICLR 2026, 2025.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.25047)

- **Learning GUI Grounding with Spatial Reasoning from Visual Feedback**  
  *Yu Zhao, Wei-Ning Chen, Huseyin Atahan Inan, et al.*  
  arXiv, 2025.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.21552)

- **Seeing, listening, remembering, and reasoning: A multimodal agent with long-term memory**  
  Team: ByteDance Seed  
  *Lin Long, Yichen He, Wentao Ye, et al.*  
  ICLR 2026, 2025.08  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.09736) [![Code](https://img.shields.io/github/stars/bytedance-seed/m3-agent?style=flat-square&logo=github&label=Code)](https://github.com/bytedance-seed/m3-agent)

- **Let's Think in Two Steps: Mitigating Agreement Bias in MLLMs with Self-Grounded Verification**  
  *Moises Andrade, Joonhyuk Cha, Brandon Ho, et al.*  
  ICLR 2026, 2025.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.11662)

- **Magentic-UI: Towards Human-in-the-loop Agentic Systems**  
  Team: Microsoft Research AI Frontiers  
  *Hussein Mozannar, Gagan Bansal, Cheng Tan, et al.*  
  arXiv, 2025.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.22358) [![Code](https://img.shields.io/github/stars/microsoft/magentic-ui?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/magentic-ui)

- **Agent-SAMA: State-Aware Mobile Assistant**  
  *Linqiang Guo, Wei Liu, Yi Wen Heng, et al.*  
  AAAI 2026, 2025.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.23596)

- **Web-Shepherd: Advancing PRMs for Reinforcing Web Agents**  
  *Hyungjoo Chae, Sunghwan Kim, Junhee Cho, et al.*  
  NeurIPS 2025, 2025.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.15277) [![Code](https://img.shields.io/github/stars/kyle8581/Web-Shepherd?style=flat-square&logo=github&label=Code)](https://github.com/kyle8581/Web-Shepherd)

- **Backtrackagent: Enhancing gui agent with error detection and backtracking mechanism**  
  Team: MiLM Plus, Xiaomi  
  *Qinzhuo Wu, Pengzhi Gao, Wei Liu, et al.*  
  EMNLP 2025, 2025.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.20660)

- **Agent S2: A Compositional Generalist-Specialist Framework for Computer Use Agents**  
  Team: Simular Research  
  *Saaket Agashe, Kyle Wong, Vincent Tu, et al.*  
  COLM 2025, 2025.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.00906) [![Code](https://img.shields.io/github/stars/simular-ai/Agent-S?style=flat-square&logo=github&label=Code)](https://github.com/simular-ai/Agent-S)

- **Webevolver: Enhancing web agent self-improvement with co-evolving world model**  
  Team: Tencent AI Lab  
  *Tianqing Fang, Hongming Zhang, Zhisong Zhang, et al.*  
  EMNLP 2025, 2025.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.21024) [![Code](https://img.shields.io/github/stars/Tencent/SelfEvolvingAgent?style=flat-square&logo=github&label=Code)](https://github.com/Tencent/SelfEvolvingAgent)

- **ViMo: A Generative Visual GUI World Model for App Agents**  
  Team: Queen Mary University of London; University of Oxford; Huawei Noah's Ark Lab  
  *Dezhao Luo, Bohan Tang, Kang Li, et al.*  
  arXiv, 2025.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.13936)

- **AutoGUI: Scaling GUI Grounding with Automatic Functionality Annotations from LLMs**  
  *Hongxin Li, Jingfan Chen, Jingran Su, et al.*  
  ACL 2025, 2025.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.01977) [![Code](https://img.shields.io/github/stars/ZJULiHongxin/AutoGUI?style=flat-square&logo=github&label=Code)](https://github.com/ZJULiHongxin/AutoGUI)

- **UI-TARS: Pioneering Automated GUI Interaction with Native Agents**  
  Team: ByteDance Seed; Tsinghua University  
  *Yujia Qin, Yining Ye, Junjie Fang, et al.*  
  arXiv, 2025.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.12326) [![Code](https://img.shields.io/github/stars/bytedance/UI-TARS?style=flat-square&logo=github&label=Code)](https://github.com/bytedance/UI-TARS)

- **Aguvis: Unified pure vision agents for autonomous gui interaction**  
  Team: The University of Hong Kong; Salesforce Research  
  *Yiheng Xu, Zekun Wang, Junli Wang, et al.*  
  arXiv, 2024.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.04454) [![Code](https://img.shields.io/github/stars/xlang-ai/aguvis?style=flat-square&logo=github&label=Code)](https://github.com/xlang-ai/aguvis) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://aguvis-project.github.io/)

- **Is Your LLM Secretly a World Model of the Internet? Model-Based Planning for Web Agents**  
  *Yu Gu, Kai Zhang, Yuting Ning, et al.*  
  TMLR 2025, 2024.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.06559) [![Code](https://img.shields.io/github/stars/OSU-NLP-Group/WebDreamer?style=flat-square&logo=github&label=Code)](https://github.com/OSU-NLP-Group/WebDreamer)

- **ShowUI: One Vision-Language-Action Model for GUI Visual Agent**  
  Team: Show Lab, NUS; Microsoft  
  *Kevin Qinghong Lin, Linjie Li, Difei Gao, et al.*  
  CVPR 2025, 2024.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.17465) [![Code](https://img.shields.io/github/stars/showlab/ShowUI?style=flat-square&logo=github&label=Code)](https://github.com/showlab/ShowUI)

- **Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation**  
  *Hyungjoo Chae, Namyoung Kim, Kai Tzu-iunn Ong, et al.*  
  ICLR 2025, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.13232) [![Code](https://img.shields.io/github/stars/kyle8581/WMA-Agents?style=flat-square&logo=github&label=Code)](https://github.com/kyle8581/WMA-Agents)

- **Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents**  
  Team: The Ohio State University; Orby AI  
  *Boyu Gou, Ruohan Wang, Boyuan Zheng, et al.*  
  ICLR 2025, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.05243) [![Code](https://img.shields.io/github/stars/OSU-NLP-Group/UGround?style=flat-square&logo=github&label=Code)](https://github.com/OSU-NLP-Group/UGround) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osu-nlp-group.github.io/UGround/)

- **OS-ATLAS: A Foundation Action Model for Generalist GUI Agents**  
  *Zhiyong Wu, Zhenyu Wu, Fangzhi Xu, et al.*  
  ICLR 2025, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.23218) [![Code](https://img.shields.io/github/stars/OS-Copilot/OS-Atlas?style=flat-square&logo=github&label=Code)](https://github.com/OS-Copilot/OS-Atlas) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osatlas.github.io/)

- **AgentOccam: A Simple Yet Strong Baseline for LLM-Based Web Agents**  
  Team: UIUC; Amazon  
  *Ke Yang, Yao Liu, Sapana Chaudhary, et al.*  
  ICLR 2025, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.13825) [![Code](https://img.shields.io/github/stars/amazon-science/AgentOccam?style=flat-square&logo=github&label=Code)](https://github.com/amazon-science/AgentOccam)

- **The Impact of Element Ordering on LM Agent Performance**  
  *Wayne Chi, Ameet Talwalkar, Chris Donahue*  
  arXiv, 2024.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.12089) [![Code](https://img.shields.io/github/stars/waynchi/gui-agent?style=flat-square&logo=github&label=Code)](https://github.com/waynchi/gui-agent)

- **Tree Search for Language Model Agents**  
  *Jing Yu Koh, Stephen McAleer, Daniel Fried, et al.*  
  COLM 2024, 2024.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.01476) [![Code](https://img.shields.io/github/stars/kohjingyu/search-agents?style=flat-square&logo=github&label=Code)](https://github.com/kohjingyu/search-agents) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://jykoh.com/search-agents)

- **Pandora: Towards general world model with natural language actions and video states**  
  *Jiannan Xiang, Guangyi Liu, Yi Gu, et al.*  
  arXiv, 2024.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.09455) [![Code](https://img.shields.io/github/stars/maitrix-org/Pandora?style=flat-square&logo=github&label=Code)](https://github.com/maitrix-org/Pandora) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://world-model.maitrix.org/)

- **OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments**  
  Team: HKU; Salesforce Research; CMU; University of Waterloo  
  *Tianbao Xie, Danyang Zhang, Jixuan Chen, et al.*  
  NeurIPS 2024, 2024.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.07972) [![Code](https://img.shields.io/github/stars/xlang-ai/OSWorld?style=flat-square&logo=github&label=Code)](https://github.com/xlang-ai/OSWorld) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://os-world.github.io/)

- **Videoagent: A memory-augmented multimodal agent for video understanding**  
  *Yue Fan, Xiaojian Ma, Rujie Wu, et al.*  
  ECCV 2024, 2024.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.11481) [![Code](https://img.shields.io/github/stars/YueFan1014/VideoAgent?style=flat-square&logo=github&label=Code)](https://github.com/YueFan1014/VideoAgent) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://videoagent.github.io/)

- **Genie: Generative Interactive Environments**  
  Team: Google DeepMind  
  *Jake Bruce, Michael Dennis, Ashley Edwards, et al.*  
  ICML 2024, 2024.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.15391) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/genie-2024/home)

- **Os-copilot: Towards generalist computer agents with self-improvement**  
  *Zhiyong Wu, Chengcheng Han, Zichen Ding, et al.*  
  arXiv, 2024.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.07456) [![Code](https://img.shields.io/github/stars/OS-Copilot/OS-Copilot?style=flat-square&logo=github&label=Code)](https://github.com/OS-Copilot/OS-Copilot) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://os-copilot.github.io/)

- **Position: LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks**  
  *Subbarao Kambhampati, Karthik Valmeekam, Lin Guan, et al.*  
  ICML 2024, 2024.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.01817)

- **SeeClick: Harnessing GUI Grounding for Advanced Visual GUI Agents**  
  *Kanzhi Cheng, Qiushi Sun, Yougang Chu, et al.*  
  ACL 2024, 2024.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.10935) [![Code](https://img.shields.io/github/stars/njucckevin/SeeClick?style=flat-square&logo=github&label=Code)](https://github.com/njucckevin/SeeClick)

- **GPT-4V(ision) Is a Generalist Web Agent, If Grounded**  
  *Boyuan Zheng, Boyu Gou, Jihyung Kil, et al.*  
  ICML 2024, 2024.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.01614) [![Code](https://img.shields.io/github/stars/OSU-NLP-Group/SeeAct?style=flat-square&logo=github&label=Code)](https://github.com/OSU-NLP-Group/SeeAct) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osu-nlp-group.github.io/SeeAct/)

- **CogAgent: A Visual Language Model for GUI Agents**  
  Team: Tsinghua University; Zhipu AI  
  *Wenyi Hong, Weihan Wang, Qingsong Lv, et al.*  
  CVPR 2024, 2023.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.08914) [![Code](https://img.shields.io/github/stars/THUDM/CogAgent?style=flat-square&logo=github&label=Code)](https://github.com/THUDM/CogAgent)

- **Timechat: A time-sensitive multimodal large language model for long video understanding**  
  *Shuhuai Ren, Linli Yao, Shicheng Li, et al.*  
  CVPR 2024, 2023.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.02051) [![Code](https://img.shields.io/github/stars/RenShuhuai-Andy/TimeChat?style=flat-square&logo=github&label=Code)](https://github.com/RenShuhuai-Andy/TimeChat)

- **LLaVA-Plus: Learning to Use Tools for Creating Multimodal Agents**  
  Team: Microsoft Research; Tsinghua University; University of Wisconsin-Madison; HKUST  
  *Shilong Liu, Hao Cheng, Haotian Liu, et al.*  
  ECCV 2024, 2023.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.05437) [![Code](https://img.shields.io/github/stars/LLaVA-VL/LLaVA-Plus-Codebase?style=flat-square&logo=github&label=Code)](https://github.com/LLaVA-VL/LLaVA-Plus-Codebase) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://llava-vl.github.io/llava-plus/)

- **Salmonn: Towards generic hearing abilities for large language models**  
  Team: Tsinghua University; ByteDance  
  *Changli Tang, Wenyi Yu, Guangzhi Sun, et al.*  
  ICLR 2024, 2023.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.13289) [![Code](https://img.shields.io/github/stars/bytedance/SALMONN?style=flat-square&logo=github&label=Code)](https://github.com/bytedance/SALMONN)

- **ControlLLM: Augment Language Models with Tools by Searching on Graphs**  
  *Zhaoyang Liu, Zeqiang Lai, Zhangwei Gao, et al.*  
  ECCV 2024, 2023.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.17796) [![Code](https://img.shields.io/github/stars/OpenGVLab/ControlLLM?style=flat-square&logo=github&label=Code)](https://github.com/OpenGVLab/ControlLLM)

- **Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V**  
  Team: Microsoft Research; HKUST; UW-Madison  
  *Jianwei Yang, Hao Zhang, Feng Li, et al.*  
  arXiv, 2023.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.11441) [![Code](https://img.shields.io/github/stars/microsoft/SoM?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/SoM) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://som-gpt4v.github.io/)

- **Identifying the Risks of LM Agents with an LM-Emulated Sandbox**  
  *Yangjun Ruan, Honghua Dong, Andrew Wang, et al.*  
  ICLR 2024, 2023.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.15817) [![Code](https://img.shields.io/github/stars/ryoungj/ToolEmu?style=flat-square&logo=github&label=Code)](https://github.com/ryoungj/ToolEmu)

- **Learning to model the world with language**  
  *Jessy Lin, Yuqing Du, Olivia Watkins, et al.*  
  arXiv, 2023.08  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2308.01399) [![Code](https://img.shields.io/github/stars/jlin816/dynalang?style=flat-square&logo=github&label=Code)](https://github.com/jlin816/dynalang) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://dynalang.github.io/)

- **Avis: Autonomous visual information seeking with large language model agent**  
  Team: Google Research; UCLA  
  *Ziniu Hu, Ahmet Iscen, Chen Sun, et al.*  
  NeurIPS 2023, 2023.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.08129)

- **Kosmos-2: Grounding multimodal large language models to the world**  
  Team: Microsoft Research  
  *Zhiliang Peng, Wenhui Wang, Li Dong, et al.*  
  arXiv, 2023.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.14824) [![Code](https://img.shields.io/github/stars/microsoft/unilm?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/unilm/tree/master/kosmos-2)

- **Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control**  
  *Longtao Zheng, Rundong Wang, Xinrun Wang, et al.*  
  ICLR 2024, 2023.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.07863) [![Code](https://img.shields.io/github/stars/ltzheng/Synapse?style=flat-square&logo=github&label=Code)](https://github.com/ltzheng/Synapse) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ltzheng.github.io/Synapse/)

- **Voyager: An Open-Ended Embodied Agent with Large Language Models**  
  Team: NVIDIA; Caltech; UT Austin; Stanford University; UW-Madison  
  *Guanzhi Wang, Yuqi Xie, Yunfan Jiang, et al.*  
  TMLR 2024, 2023.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.16291) [![Code](https://img.shields.io/github/stars/MineDojo/Voyager?style=flat-square&logo=github&label=Code)](https://github.com/MineDojo/Voyager) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://voyager.minedojo.org/)

- **Self-refine: Iterative refinement with self-feedback**  
  *Aman Madaan, Niket Tandon, Prakhar Gupta, et al.*  
  NeurIPS 2023, 2023.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.17651) [![Code](https://img.shields.io/github/stars/madaan/self-refine?style=flat-square&logo=github&label=Code)](https://github.com/madaan/self-refine) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://selfrefine.info/)

- **Hugginggpt: Solving ai tasks with chatgpt and its friends in hugging face**  
  Team: Zhejiang University; Microsoft Research Asia  
  *Yongliang Shen, Kaitao Song, Xu Tan, et al.*  
  NeurIPS 2023, 2023.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.17580) [![Code](https://img.shields.io/github/stars/microsoft/JARVIS?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/JARVIS)

- **Mm-react: Prompting chatgpt for multimodal reasoning and action**  
  Team: Microsoft Azure AI  
  *Zhengyuan Yang, Linjie Li, Jianfeng Wang, et al.*  
  arXiv, 2023.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.11381) [![Code](https://img.shields.io/github/stars/microsoft/MM-REACT?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/MM-REACT) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://multimodal-react.github.io/)

- **Reflexion: Language Agents with Verbal Reinforcement Learning**  
  *Noah Shinn, Federico Cassano, Edward Berman, et al.*  
  NeurIPS 2023, 2023.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.11366) [![Code](https://img.shields.io/github/stars/noahshinn/reflexion?style=flat-square&logo=github&label=Code)](https://github.com/noahshinn/reflexion)

- **ReAct: Synergizing Reasoning and Acting in Language Models**  
  Team: Princeton University; Google Research  
  *Shunyu Yao, Jeffrey Zhao, Dian Yu, et al.*  
  ICLR 2023, 2022.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2210.03629) [![Code](https://img.shields.io/github/stars/ysymyth/ReAct?style=flat-square&logo=github&label=Code)](https://github.com/ysymyth/ReAct) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://react-lm.github.io/)

- **Mastering atari, go, chess and shogi by planning with a learned model**  
  Team: DeepMind  
  *Julian Schrittwieser, Ioannis Antonoglou, Thomas Hubert, et al.*  
  Nature 2020, 2019.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1911.08265)

<div align="right"><a href="#contents">&uarr; back to top</a></div>

---

## D. Robotic Systems

Robot learning, perception, and control in the **physical** world — vision-language-action models,
manipulation, navigation, humanoids, and the data and simulators behind them.

- **ActionMap: Robot Policy Learning via Voxel Action Heatmap**  
  Team: Show Lab, National University of Singapore; NVIDIA  
  *Pei Yang, Hai Ci, Yanzhe Chen, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06904)

- **ActProbe: Action-Space Probe for Early Failure Detection of Generative Robot Policies**  
  *Bingjia Huang, Xiangyu Li, Xiang Wang, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.08508) [![Code](https://img.shields.io/github/stars/air-embodied-brain/actprobe?style=flat-square&logo=github&label=Code)](https://github.com/air-embodied-brain/actprobe) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://air-embodied-brain.github.io/actprobe)

- **ContactWorld: What Matters in Vision-Tactile World Models for Contact-Rich Manipulation**  
  *Zhiyuan Zhang, Pokuang Zhou, Kaidi Zhang, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.13877)

- **Critical Interval MSE: Toward Reliable Offline Validation for Robot Manipulation Policies**  
  Team: Tsinghua University; Shanghai Qi Zhi Institute; Spirit AI  
  *Haoxu Huang, Tongsam Zheng, Yifan Chen, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29898)

- **Foresight: Failure Detection for Long-Horizon Robotic Manipulation with Action-Conditioned World Model Latents**  
  *Haoran Zhang, Yifu Lu, Boyang Wang, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.23085) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://haoranzhangumich.github.io/Forsight_web)

- **TacForeSight: Force-Guided Tactile World Model for Contact-Rich Manipulation**  
  Team: TARS Robotics; National University of Singapore; Shanghai Jiao Tong University; Institute of Automation, CAS  
  *Yujie Zang, Yuhang Zheng, Xian Nie, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.11184)

- **ACSAC: Adaptive Chunk Size Actor-Critic with Causal Transformer Q-Network**  
  *Qian Chen, Junqiao Zhao, Hongtu Zhou, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.11009)

- **Going Beyond World Models and VLAs**  
  Team: Generalist AI  
  *Pete Florence and the Generalist Team*  
  Blog, 2026.04  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://generalistai.com/blog/beyond-world-models)

- **Beyond Binary Success: Sample-Efficient and Statistically Rigorous Robot Policy Comparison**  
  Team: University of Pennsylvania; Toyota Research Institute; Princeton University  
  *David Snyder, Apurva Badithela, Nikolai Matni, et al.*  
  arXiv, 2026.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.13616)

- **ComFree-Sim: A GPU-Parallelized Analytical Contact Physics Engine for Scalable Contact-Rich Robotics Simulation and Control**  
  *Chetan Borse, Zhixian Xie, Wei-Cheng Huang, et al.*  
  arXiv, 2026.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.12185)

- **Contact-Anchored Policies: Contact Conditioning Creates Strong Robot Utility Models**  
  Team: New York University; UC Berkeley; UCLA; Hello Robot; Ai2; University of Waterloo  
  *Zichen Jeff Cui, Omar Rayyan, Haritheja Etukuru, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.09017) [![Code](https://img.shields.io/github/stars/jeffacce/cap-policy?style=flat-square&logo=github&label=Code)](https://github.com/jeffacce/cap-policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://cap-policy.github.io)

- **Demystifying Action Space Design for Robotic Manipulation Policies**  
  *Yuchun Feng, Jinliang Zheng, Zhihao Wang, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23408)

- **Mixture of Horizons in Action Chunking**  
  *Dong Jing, Gang Wang, Jiaqi Liu, et al.*  
  ICML 2026, 2025.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.19433) [![Code](https://img.shields.io/github/stars/Timsty1/MixtureOfHorizons?style=flat-square&logo=github&label=Code)](https://github.com/Timsty1/MixtureOfHorizons)

- **APPLE: Toward General Active Perception via Reinforcement Learning**  
  *Tim Schneider, Cristiana de Farias, Roberto Calandra, et al.*  
  ICLR 2026, 2025.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.06182) [![Code](https://img.shields.io/github/stars/TimSchneider42/apple?style=flat-square&logo=github&label=Code)](https://github.com/TimSchneider42/apple/) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://timschneider42.github.io/apple/)

- **Reactive Diffusion Policy: Slow-Fast Visual-Tactile Policy Learning for Contact-Rich Manipulation**  
  *Han Xue, Jieji Ren, Wendi Chen, et al.*  
  RSS 2025, 2025.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.02881) [![Code](https://img.shields.io/github/stars/xiaoxiaoxh/reactive_diffusion_policy?style=flat-square&logo=github&label=Code)](https://github.com/xiaoxiaoxh/reactive_diffusion_policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://reactive-diffusion-policy.github.io)

- **Can we detect failures without failure data? uncertainty-aware runtime failure detection for imitation learning policies**  
  Team: Toyota Research Institute; Woven by Toyota  
  *Chen Xu, Tony Khuong Nguyen, Emma Dixon, et al.*  
  arXiv, 2025.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.08558)

- **Unpacking Failure Modes of Generative Policies: Runtime Monitoring of Consistency and Progress**  
  Team: Stanford University; NVIDIA  
  *Christopher Agia, Rohan Sinha, Jingyun Yang, et al.*  
  CoRL 2025, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.04640)

- **3D-ViTac: Learning Fine-Grained Manipulation with Visuo-Tactile Sensing**  
  *Binghao Huang, Yixuan Wang, Xinyi Yang, et al.*  
  CoRL 2024, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.24091) [![Code](https://img.shields.io/github/stars/binghao-huang/3d-vitac-training-code?style=flat-square&logo=github&label=Code)](https://github.com/binghao-huang/3d-vitac-training-code) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://binghao-huang.github.io/3D-ViTac/)

- **Scaling Proprioceptive-Visual Learning with Heterogeneous Pre-trained Transformers**  
  Team: MIT CSAIL; Meta FAIR  
  *Lirui Wang, Xinlei Chen, Jialiang Zhao, et al.*  
  NeurIPS 2024, 2024.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.20537) [![Code](https://img.shields.io/github/stars/liruiw/HPT?style=flat-square&logo=github&label=Code)](https://github.com/liruiw/HPT) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://liruiw.github.io/hpt)

- **IRASim: A Fine-Grained World Model for Robot Manipulation**  
  Team: HKUST; ByteDance Seed  
  *Fangqi Zhu, Hongtao Wu, Song Guo, et al.*  
  arXiv, 2024.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.14540) [![Code](https://img.shields.io/github/stars/bytedance/IRASim?style=flat-square&logo=github&label=Code)](https://github.com/bytedance/IRASim) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://gen-irasim.github.io/)

- **DROID: A Large-Scale In-the-Wild Robot Manipulation Dataset**  
  Team: Stanford University; UC Berkeley; Toyota Research Institute; et al.  
  *Alexander Khazatsky, Karl Pertsch, Suraj Nair, et al.*  
  RSS 2024, 2024.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.12945) [![Code](https://img.shields.io/github/stars/droid-dataset/droid?style=flat-square&logo=github&label=Code)](https://github.com/droid-dataset/droid) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://droid-dataset.github.io/)

- **MIRAGE: Cross-Embodiment Zero-Shot Policy Transfer with Cross-Painting**  
  *Lawrence Yunliang Chen, Karthik Dharmarajan, Kush Hari, et al.*  
  RSS 2024, 2024.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.19249)

- **TD-MPC2: Scalable, Robust World Models for Continuous Control**  
  *Nicklas Hansen, Hao Su, Xiaolong Wang*  
  ICLR 2024, 2023.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) [![Code](https://img.shields.io/github/stars/nicklashansen/tdmpc2?style=flat-square&logo=github&label=Code)](https://github.com/nicklashansen/tdmpc2) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.tdmpc2.com/)

- **RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation**  
  Team: Google DeepMind  
  *Konstantinos Bousmalis, Giulia Vezzani, Dushyant Rao, et al.*  
  TMLR 2023, 2023.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.11706) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://deepmind.google/blog/robocat-a-self-improving-robotic-agent)

- **Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware**  
  Team: Stanford University; UC Berkeley; Meta  
  *Tony Z. Zhao, Vikash Kumar, Sergey Levine, et al.*  
  RSS 2023, 2023.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2304.13705) [![Code](https://img.shields.io/github/stars/tonyzhaozh/act?style=flat-square&logo=github&label=Code)](https://github.com/tonyzhaozh/act) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://tonyzhaozh.github.io/aloha/)

- **Diffusion Policy: Visuomotor Policy Learning via Action Diffusion**  
  Team: Columbia University; Toyota Research Institute; MIT  
  *Cheng Chi, Siyuan Feng, Yilun Du, et al.*  
  RSS 2023, 2023.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.04137) [![Code](https://img.shields.io/github/stars/real-stanford/diffusion_policy?style=flat-square&logo=github&label=Code)](https://github.com/real-stanford/diffusion_policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://diffusion-policy.cs.columbia.edu/)

- **Mastering diverse control tasks through world models**  
  Team: Google DeepMind; University of Toronto  
  *Danijar Hafner, Jurgis Pasukonis, Jimmy Ba, et al.*  
  Nature 2025, 2023.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) [![Code](https://img.shields.io/github/stars/danijar/dreamerv3?style=flat-square&logo=github&label=Code)](https://github.com/danijar/dreamerv3) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/dreamerv3/)

- **See, Hear, and Feel: Smart Sensory Fusion for Robotic Manipulation**  
  *Hao Li, Yizhi Zhang, Junzhe Zhu, et al.*  
  CoRL 2023, 2022.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2212.03858) [![Code](https://img.shields.io/github/stars/JunzheJosephZhu/see_hear_feel?style=flat-square&logo=github&label=Code)](https://github.com/JunzheJosephZhu/see_hear_feel) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ai.stanford.edu/~rhgao/see_hear_feel/)

- **RT-1: Robotics Transformer for Real-World Control at Scale**  
  Team: Robotics at Google; Everyday Robots  
  *Anthony Brohan, Noah Brown, Justice Carbajal, et al.*  
  RSS 2023, 2022.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2212.06817) [![Code](https://img.shields.io/github/stars/google-research/robotics_transformer?style=flat-square&logo=github&label=Code)](https://github.com/google-research/robotics_transformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer1.github.io/)

- **DayDreamer: World Models for Physical Robot Learning**  
  *Philipp Wu, Alejandro Escontrela, Danijar Hafner, et al.*  
  CoRL 2023, 2022.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2206.14176) [![Code](https://img.shields.io/github/stars/danijar/daydreamer?style=flat-square&logo=github&label=Code)](https://github.com/danijar/daydreamer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/daydreamer/)

- **Hydra: A Real-time Spatial Perception System for 3D Scene Graph Construction and Optimization**  
  *Nathan Hughes, Yun Chang, Luca Carlone*  
  RSS 2022, 2022.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2201.13360) [![Code](https://img.shields.io/github/stars/MIT-SPARK/Hydra?style=flat-square&logo=github&label=Code)](https://github.com/MIT-SPARK/Hydra)

- **Example-Driven Model-Based Reinforcement Learning for Solving Long-Horizon Visuomotor Tasks**  
  *Bohan Wu, Suraj Nair, Li Fei-Fei, et al.*  
  CoRL 2022, 2021.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2109.10312)

- **The PANDA Framework for Hierarchical Planning**  
  *Daniel Höller, Gregor Behnke, Pascal Bercher, Susanne Biundo*  
  KI - Künstliche Intelligenz, 2021.01  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1007/s13218-020-00699-y)

- **Multimodal sensor fusion with differentiable filters**  
  *Michelle A Lee, Brent Yi, Roberto Mart\'\in-Mart\'\in, et al.*  
  IROS 2020, 2020.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2010.13021)

- **ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM**  
  *Carlos Campos, Richard Elvira, Juan J. Gomez Rodriguez, et al.*  
  T-RO 2021, 2020.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2007.11898) [![Code](https://img.shields.io/github/stars/UZ-SLAMLab/ORB_SLAM3?style=flat-square&logo=github&label=Code)](https://github.com/UZ-SLAMLab/ORB_SLAM3)

- **Dream to control: Learning behaviors by latent imagination**  
  Team: University of Toronto; Google Brain; DeepMind  
  *Danijar Hafner, Timothy Lillicrap, Jimmy Ba, et al.*  
  arXiv, 2019.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01603) [![Code](https://img.shields.io/github/stars/danijar/dreamer?style=flat-square&logo=github&label=Code)](https://github.com/danijar/dreamer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/dreamer/)

- **Kimera: an open-source library for real-time metric-semantic localization and mapping**  
  *Antoni Rosinol, Marcus Abate, Yun Chang, et al.*  
  ICRA 2020, 2019.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1910.02490) [![Code](https://img.shields.io/github/stars/MIT-SPARK/Kimera?style=flat-square&logo=github&label=Code)](https://github.com/MIT-SPARK/Kimera)

- **Learning Latent Dynamics for Planning from Pixels**  
  Team: Google Brain; University of Toronto; DeepMind; University of Michigan  
  *Danijar Hafner, Timothy Lillicrap, Ian Fischer, et al.*  
  ICML 2019, 2018.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1811.04551) [![Code](https://img.shields.io/github/stars/google-research/planet?style=flat-square&logo=github&label=Code)](https://github.com/google-research/planet) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/planet/)

- **Composable action-conditioned predictors: Flexible off-policy learning for robot navigation**  
  *Gregory Kahn, Adam Villaflor, Pieter Abbeel, et al.*  
  CoRL 2018, 2018.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1810.07167) [![Code](https://img.shields.io/github/stars/gkahn13/CAPs?style=flat-square&logo=github&label=Code)](https://github.com/gkahn13/CAPs)

- **Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models**  
  *Kurtland Chua, Roberto Calandra, Rowan McAllister, et al.*  
  NeurIPS 2018, 2018.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1805.12114) [![Code](https://img.shields.io/github/stars/kchua/handful-of-trials?style=flat-square&logo=github&label=Code)](https://github.com/kchua/handful-of-trials)

- **Pddlstream: Integrating symbolic planners and blackbox samplers via optimistic adaptive planning**  
  *Caelan Reed Garrett, Tomas Lozano-Perez, Leslie Pack Kaelbling*  
  arXiv, 2018.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1802.08705) [![Code](https://img.shields.io/github/stars/caelan/pddlstream?style=flat-square&logo=github&label=Code)](https://github.com/caelan/pddlstream)

- **Self-Supervised Visual Planning with Temporal Skip Connections.**  
  *Frederik Ebert, Chelsea Finn, Alex X Lee, et al.*  
  CoRL 2017, 2017.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1710.05268)

- **Dex-Net 2.0: Deep Learning to Plan Robust Grasps with Synthetic Point Clouds and Analytic Grasp Metrics**  
  Team: UC Berkeley; Siemens  
  *Jeffrey Mahler, Jacky Liang, Sherdil Niyaz, et al.*  
  RSS 2017, 2017.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1703.09312) [![Code](https://img.shields.io/github/stars/BerkeleyAutomation/gqcnn?style=flat-square&logo=github&label=Code)](https://github.com/BerkeleyAutomation/gqcnn) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://berkeleyautomation.github.io/dex-net/)

- **Deep visual foresight for planning robot motion**  
  Team: Google Brain; UC Berkeley  
  *Chelsea Finn, Sergey Levine*  
  ICRA 2017, 2016.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1610.00696)

- **Hierarchical task and motion planning in the now**  
  *Leslie Pack Kaelbling, Tomas Lozano-Perez*  
  ICRA 2011, 2011.05  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1109/ICRA.2011.5980391)

- **Impedance Control: An Approach to Manipulation, Part I-Theory**  
  *Neville Hogan*  
  ASME J. Dyn. Sys. 1985, 1985.03  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1115/1.3140702)

<div align="right"><a href="#contents">&uarr; back to top</a></div>

---

## E. Benchmarks
### Multimodal Embodied Agents

#### Sim

- **ESI-Bench: Towards Embodied Spatial Intelligence that Closes the Perception-Action Loop**  
  *Yining Hong, Jiageng Liu, Han Yin, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.18746) [![Code](https://img.shields.io/github/stars/ESI-Bench/ESI-Bench?style=flat-square&logo=github&label=Code)](https://github.com/ESI-Bench/ESI-Bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://esi-bench.github.io/)

- **ADAPT: Benchmarking Commonsense Planning under Unspecified Affordance Constraints**  
  *Pei-An Chen, Yong-Ching Liang, Jia-Fong Yeh, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.14902) [![Code](https://img.shields.io/github/stars/charlotteannchen/ADAPT-Codebase?style=flat-square&logo=github&label=Code)](https://github.com/charlotteannchen/ADAPT-Codebase) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://charlotteannchen.github.io/ADAPT/)

- **RoboCerebra: A Large-scale Benchmark for Long-horizon Robotic Manipulation Evaluation**  
  *Songhao Han, Boxiang Qiu, Yue Liao, et al.*  
  NeurIPS 2025, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.06677) [![Code](https://img.shields.io/github/stars/qiuboxiang/RoboCerebra?style=flat-square&logo=github&label=Code)](https://github.com/qiuboxiang/RoboCerebra) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robocerebra.github.io/)

- **IS-Bench: Evaluating Interactive Safety of VLM-Driven Embodied Agents in Daily Household Tasks**  
  *Xiaoya Lu, Zeren Chen, Xuhao Hu, et al.*  
  AAAI 2026, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.16402) [![Code](https://img.shields.io/github/stars/AI45Lab/IS-Bench?style=flat-square&logo=github&label=Code)](https://github.com/AI45Lab/IS-Bench)

- **EMBODIEDBENCH: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents**  
  *Rui Yang, Hanyang Chen, Junyu Zhang, et al.*  
  arXiv, 2025.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.09560) [![Code](https://img.shields.io/github/stars/EmbodiedBench/EmbodiedBench?style=flat-square&logo=github&label=Code)](https://github.com/EmbodiedBench/EmbodiedBench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://embodiedbench.github.io/)

- **PARTNR: A Benchmark for Planning and Reasoning in Embodied Multi-agent Tasks**  
  Team: FAIR, Meta  
  *Matthew Chang, Gunjan Chhablani, Alexander Clegg, et al.*  
  ICLR 2025, 2024.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.00081) [![Code](https://img.shields.io/github/stars/facebookresearch/partnr-planner?style=flat-square&logo=github&label=Code)](https://github.com/facebookresearch/partnr-planner/tree/main/) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://aihabitat.org/partnr/)

- **EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents**  
  *Junting Chen, Checheng Yu, Xunzhe Zhou, et al.*  
  ICLR 2025, 2024.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.22662) [![Code](https://img.shields.io/github/stars/SgtVincent/EMOS?style=flat-square&logo=github&label=Code)](https://github.com/SgtVincent/EMOS) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://emos-project.github.io/)

- **RoCo: Dialectic Multi-Robot Collaboration with Large Language Models**  
  *Zhao Mandi, Shreeya Jain, Shuran Song*  
  ICRA 2024, 2023.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.04738) [![Code](https://img.shields.io/github/stars/MandiZhao/robot-collab?style=flat-square&logo=github&label=Code)](https://github.com/MandiZhao/robot-collab) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://project-roco.github.io/)

#### Real

- **PLanAR: Planning-Language-Grounded Agentic Reasoning for Robot Manipulation**  
  *Pengyuan Guo, Zhonghao Mai, Zhengtong Xu, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.01662) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://planar-robot.github.io/)

#### Hybrid

- **CaP-X: A Framework for Benchmarking and Improving Coding Agents for Robot Manipulation**  
  Team: NVIDIA and University of California, Berkeley  
  *Letian Fu, Justin Yu, Karim El-Refai, et al.*  
  arXiv, 2026.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.22435) [![Code](https://img.shields.io/github/stars/capgym/cap-x?style=flat-square&logo=github&label=Code)](https://github.com/capgym/cap-x) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://capgym.github.io/)
### Multimodal Agents

#### Understanding

- **Video-MME-v2: Towards the Next Stage in Benchmarks for Comprehensive Video Understanding**  
  *Chaoyou Fu, Haozhi Yuan, Yuhao Dong, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.05015) [![Code](https://img.shields.io/github/stars/MME-Benchmarks/Video-MME-v2?style=flat-square&logo=github&label=Code)](https://github.com/MME-Benchmarks/Video-MME-v2) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://video-mme-v2.netlify.app/)

- **Thinking in Space: How Multimodal Large Language Models See, Remember, and Recall Spaces**  
  *Jihan Yang, Shusheng Yang, Anjali W. Gupta, et al.*  
  CVPR 2025, 2024.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.14171) [![Code](https://img.shields.io/github/stars/vision-x-nyu/thinking-in-space?style=flat-square&logo=github&label=Code)](https://github.com/vision-x-nyu/thinking-in-space) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vision-x-nyu.github.io/thinking-in-space.github.io/)

- **MMMU-Pro: A More Robust Multi-discipline Multimodal Understanding Benchmark**  
  *Xiang Yue, Tianyu Zheng, Yuansheng Ni, et al.*  
  ACL 2025, 2024.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.02813) [![Code](https://img.shields.io/github/stars/MMMU-Benchmark/MMMU?style=flat-square&logo=github&label=Code)](https://github.com/MMMU-Benchmark/MMMU) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mmmu-benchmark.github.io/)

#### Interaction

- **OSWorld 2.0: Benchmarking Computer-Use Agents on Long-Horizon Real-World Tasks**  
  *Mengqi Yuan, Zilong Zhou, Xinzhuang Xiong, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29537) [![Code](https://img.shields.io/github/stars/xlang-ai/OSWorld-V2?style=flat-square&logo=github&label=Code)](https://github.com/xlang-ai/OSWorld-V2) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osworld-v2.xlang.ai/)

- **GameWorld: Towards Standardized and Verifiable Evaluation of Multimodal Game Agents**  
  *Mingyu Ouyang, Siyuan Hu, Kevin Qinghong Lin, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.07429) [![Code](https://img.shields.io/github/stars/gameworld-project/gameworld?style=flat-square&logo=github&label=Code)](https://github.com/gameworld-project/gameworld) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://gameworld-project.github.io/)

- **OmniGAIA: Towards Native Omni-Modal AI Agents**  
  *Xiaoxi Li, Wenxiang Jiao, Jiarui Jin, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.22897) [![Code](https://img.shields.io/github/stars/RUC-NLPIR/OmniGAIA?style=flat-square&logo=github&label=Code)](https://github.com/RUC-NLPIR/OmniGAIA)

- **AgentVista: Evaluating Multimodal Agents in Ultra-Challenging Realistic Visual Scenarios**  
  *Zhaochen Su, Jincheng Gao, Hangyu Guo, et al.*  
  arXiv, 2026.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23166) [![Code](https://img.shields.io/github/stars/hkust-nlp/AgentVista?style=flat-square&logo=github&label=Code)](https://github.com/hkust-nlp/AgentVista) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://agentvista-bench.github.io/)

- **MMSearch-Plus: Benchmarking Provenance-Aware Search for Multimodal Browsing Agents**  
  *Xijia Tao, Yihua Teng, Xinxing Su, et al.*  
  ICLR 2026, 2025.08  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.21475) [![Code](https://img.shields.io/github/stars/mmsearch-plus/MMSearch-Plus?style=flat-square&logo=github&label=Code)](https://github.com/mmsearch-plus/MMSearch-Plus) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mmsearch-plus.github.io/)

- **iVISPAR -- An Interactive Visual-Spatial Reasoning Benchmark for VLMs**  
  *Julius Mayer, Mohamad Ballout, Serwan Jassim, et al.*  
  EMNLP 2025, 2025.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.03214) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://microcosm.ai/ivispar/)

- **CRAB: Cross-environment Agent Benchmark for Multimodal Language Model Agents**  
  *Tianqi Xu, Linyao Chen, Dai-Jie Wu, et al.*  
  ACL 2025, 2024.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.01511) [![Code](https://img.shields.io/github/stars/camel-ai/crab?style=flat-square&logo=github&label=Code)](https://github.com/camel-ai/crab) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://crab.camel-ai.org/)

- **τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains**  
  Team: Sierra  
  *Shunyu Yao, Noah Shinn, Pedram Razavi, et al.*  
  arXiv, 2024.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.12045) [![Code](https://img.shields.io/github/stars/sierra-research/tau-bench?style=flat-square&logo=github&label=Code)](https://github.com/sierra-research/tau-bench)

- **AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents**  
  Team: Google DeepMind  
  *Christopher Rawles, Sarah Clinckemaillie, Yifan Chang, et al.*  
  ICLR 2025, 2024.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.14573) [![Code](https://img.shields.io/github/stars/google-research/android_world?style=flat-square&logo=github&label=Code)](https://github.com/google-research/android_world) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://google-research.github.io/android_world/)

- **MMInA: Benchmarking Multihop Multimodal Internet Agents**  
  *Shulin Tian, Ziniu Zhang, Liangyu Chen, et al.*  
  ACL 2025, 2024.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.09992) [![Code](https://img.shields.io/github/stars/shulin16/mmina?style=flat-square&logo=github&label=Code)](https://github.com/shulin16/mmina) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mmina.cliangyu.com/)

- **AgentStudio: A Toolkit for Building General Virtual Agents**  
  *Longtao Zheng, Zhiyuan Huang, Zhenghai Xue, et al.*  
  ICLR 2025, 2024.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.17918) [![Code](https://img.shields.io/github/stars/ltzheng/agent-studio?style=flat-square&logo=github&label=Code)](https://github.com/ltzheng/agent-studio) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ltzheng.github.io/agent-studio/)

- **VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks**  
  *Jing Yu Koh, Robert Lo, Lawrence Jang, et al.*  
  ACL 2024, 2024.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.13649) [![Code](https://img.shields.io/github/stars/web-arena-x/visualwebarena?style=flat-square&logo=github&label=Code)](https://github.com/web-arena-x/visualwebarena) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://jykoh.com/vwa)

- **WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models**  
  *Hongliang He, Wenlin Yao, Kaixin Ma, et al.*  
  ACL 2024, 2024.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.13919) [![Code](https://img.shields.io/github/stars/MinorJerry/WebVoyager?style=flat-square&logo=github&label=Code)](https://github.com/MinorJerry/WebVoyager)

- **GAIA: A Benchmark for General AI Assistants**  
  Team: Meta AI  
  *Grégoire Mialon, Clémentine Fourrier, Craig Swift, et al.*  
  ICLR 2024, 2023.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.12983) [![Hugging Face](https://img.shields.io/badge/Hugging_Face-Benchmark-FFD21E?style=flat-square&logo=huggingface&logoColor=black)](https://huggingface.co/gaia-benchmark) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://huggingface.co/gaia-benchmark)

- **WebArena: A Realistic Web Environment for Building Autonomous Agents**  
  *Shuyan Zhou, Frank F. Xu, Hao Zhu, et al.*  
  ICLR 2024, 2023.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.13854) [![Code](https://img.shields.io/github/stars/web-arena-x/webarena?style=flat-square&logo=github&label=Code)](https://github.com/web-arena-x/webarena) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://webarena.dev/og/)

#### Generation

- **GameCraft-Bench: Can Agents Build Playable Games End-to-End in a Real Game Engine?**  
  *Tongxu Luo, Rongsheng Wang, Jiaxi Bi, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17861) [![Code](https://img.shields.io/github/stars/FreedomIntelligence/gamecraft-bench?style=flat-square&logo=github&label=Code)](https://github.com/FreedomIntelligence/gamecraft-bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://tongxuluo.github.io/gamecraft-bench-website/)

- **PBench: A Physical AI Benchmark for World Models**  
  Team: NVIDIA  
  *NVIDIA*  
  Tech report, 2025.06  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://research.nvidia.com/labs/cosmos-lab/pbench/) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://huggingface.co/datasets/nvidia/PBench)

- **WebGen-Bench: Evaluating LLMs on Generating Interactive and Functional Websites from Scratch**  
  *Zimu Lu, Yunqiao Yang, Houxing Ren, et al.*  
  NeurIPS 2025, 2025.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.03733) [![Code](https://img.shields.io/github/stars/mnluzimu/WebGen-Bench?style=flat-square&logo=github&label=Code)](https://github.com/mnluzimu/WebGen-Bench)

- **WorldModelBench: Judging Video Generation Models As World Models**  
  *Dacheng Li, Yunhao Fang, Yukang Chen, et al.*  
  NeurIPS 2025, 2025.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.20694) [![Code](https://img.shields.io/github/stars/WorldModelBench-Team/WorldModelBench?style=flat-square&logo=github&label=Code)](https://github.com/WorldModelBench-Team/WorldModelBench/tree/main?tab=readme-ov-file#evaluation) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://worldmodelbench-team.github.io/)

- **SWE-BENCH: CAN LANGUAGE MODELS RESOLVE REAL-WORLD GITHUB ISSUES?**  
  *Carlos E. Jimenez, John Yang, Alexander Wettig, et al.*  
  ICLR 2024, 2023.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.06770) [![Code](https://img.shields.io/github/stars/SWE-bench/SWE-bench?style=flat-square&logo=github&label=Code)](https://github.com/SWE-bench/SWE-bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.swebench.com/SWE-bench/)

### Robotic Systems

#### Sim

- **Dream.exe: Can Video Generation Models Dream Executable Robot Manipulation?**  
  *Rui Zhao, Kaiming Yang, Jifeng Zhu, et al.*  
  arXiv, 2026.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.04811) [![Code](https://img.shields.io/github/stars/showlab/Dream.exe?style=flat-square&logo=github&label=Code)](https://github.com/showlab/Dream.exe)

- **MiraBench: Evaluating Action-Conditioned Reliability in Robotic World Models**  
  *Tianzhuo Yang, Zihan Shen, Zirui Mi, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.29360)

- **SafeManip: A Property-Driven Benchmark for Temporal Safety Evaluation in Robotic Manipulation**  
  *Chengyue Huang, Khang Vo Huynh, Sebastian Elbaum, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.12386) [![Code](https://img.shields.io/github/stars/chengyuehuang511/SafeManip?style=flat-square&logo=github&label=Code)](https://github.com/chengyuehuang511/SafeManip) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://hvkhcm.github.io/projects/safemanip/)

- **RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies**  
  Team: NVIDIA Research  
  *Xuning Yang, Rishit Dagli, Alex Zook, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.09860) [![Code](https://img.shields.io/github/stars/NVLabs/RoboLab?style=flat-square&logo=github&label=Code)](https://github.com/NVLabs/RoboLab) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://research.nvidia.com/labs/srl/projects/robolab/)

- **RoboCasa365: A Large-Scale Simulation Framework for Training and Benchmarking Generalist Robots**  
  *Soroush Nasiriany, Sepehr Nasiriany, Abhiram Maddukuri, et al.*  
  ICLR 2026, 2026.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.04356) [![Code](https://img.shields.io/github/stars/robocasa/robocasa?style=flat-square&logo=github&label=Code)](https://github.com/robocasa/robocasa) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robocasa.ai/)

- **LIBERO-PRO: Towards Robust and Fair Evaluation of Vision-Language-Action Models Beyond Memorization**  
  *Xueyang Zhou, Yangming Xu, Guiyao Tie, et al.*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.03827) [![Code](https://img.shields.io/github/stars/Zxy-MLlab/LIBERO-PRO?style=flat-square&logo=github&label=Code)](https://github.com/Zxy-MLlab/LIBERO-PRO) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://zxy-mllab.github.io/LIBERO-PRO-Webpage/)

- **Meta-World+: An Improved, Standardized, RL Benchmark**  
  *Reginald McLean, Evangelos Chatzaroulas, Luc McCutcheon, et al.*  
  NeurIPS 2025, 2025.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11289) [![Code](https://img.shields.io/github/stars/Farama-Foundation/Metaworld?style=flat-square&logo=github&label=Code)](https://github.com/Farama-Foundation/Metaworld) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://metaworld.farama.org/)

- **VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation with Long-Horizon Reasoning Tasks**  
  *Shiduo Zhang, Zhe Xu, Peiju Liu, et al.*  
  ICCV 2025, 2024.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.18194) [![Code](https://img.shields.io/github/stars/OpenMOSS/VLABench?style=flat-square&logo=github&label=Code)](https://github.com/OpenMOSS/VLABench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vlabench.github.io/)

- **GOAT-Bench: A Benchmark for Multi-Modal Lifelong Navigation**  
  *Mukul Khanna, Ram Ramrakhya, Gunjan Chhablani, et al.*  
  CVPR 2024, 2024.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.06609) [![Code](https://img.shields.io/github/stars/Ram81/goat-bench?style=flat-square&logo=github&label=Code)](https://github.com/Ram81/goat-bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mukulkhanna.github.io/goat-bench/)

- **BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation**  
  *Chengshu Li, Ruohan Zhang, Josiah Wong, et al.*  
  CoRL 2022, 2024.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.09227) [![Code](https://img.shields.io/github/stars/StanfordVL/BEHAVIOR-1K?style=flat-square&logo=github&label=Code)](https://github.com/StanfordVL/BEHAVIOR-1K) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://behavior.stanford.edu/index.html)

- **Safety-Gymnasium: A Unified Safe Reinforcement Learning Benchmark**  
  *Jiaming Ji, Borong Zhang, Jiayi Zhou, et al.*  
  NeurIPS 2023, 2023.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.12567) [![Code](https://img.shields.io/github/stars/PKU-Alignment/safety-gymnasium?style=flat-square&logo=github&label=Code)](https://github.com/PKU-Alignment/safety-gymnasium) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://safety-gymnasium.readthedocs.io/en/latest/)

- **LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning**  
  *Bo Liu, Yifeng Zhu, Chongkai Gao, et al.*  
  NeurIPS 2023, 2023.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.03310) [![Code](https://img.shields.io/github/stars/Lifelong-Robot-Learning/LIBERO?style=flat-square&logo=github&label=Code)](https://github.com/Lifelong-Robot-Learning/LIBERO) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://libero-project.github.io/intro.html)

- **ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills**  
  *Jiayuan Gu, Fanbo Xiang, Xuanlin Li, et al.*  
  arXiv, 2023.02  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2302.04659) [![Code](https://img.shields.io/github/stars/mani-skill/ManiSkill?style=flat-square&logo=github&label=Code)](https://github.com/mani-skill/ManiSkill) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://maniskill2.github.io/)

- **CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks**  
  *Oier Mees, Lukas Hermann, Erick Rosete-Beas, et al.*  
  arXiv, 2021.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2112.03227) [![Code](https://img.shields.io/github/stars/mees/calvin?style=flat-square&logo=github&label=Code)](https://github.com/mees/calvin) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](http://calvin.cs.uni-freiburg.de/)

- **TEACh: Task-driven Embodied Agents that Chat**  
  Team: Amazon Alexa AI  
  *Aishwarya Padmakumar, Jesse Thomason, Ayush Shrivastava, et al.*  
  AAAI 2022, 2021.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2110.00534) [![Code](https://img.shields.io/github/stars/alexa/teach?style=flat-square&logo=github&label=Code)](https://github.com/alexa/teach)

- **robosuite: A Modular Simulation Framework and Benchmark for Robot Learning**  
  *Yuke Zhu, Josiah Wong, Ajay Mandlekar, et al.*  
  arXiv, 2020.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2009.12293) [![Code](https://img.shields.io/github/stars/ARISE-Initiative/robosuite?style=flat-square&logo=github&label=Code)](https://github.com/ARISE-Initiative/robosuite) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robosuite.ai/)

- **ALFRED: A Benchmark for Interpreting Grounded Instructions for Everyday Tasks**  
  *Mohit Shridhar, Jesse Thomason, Daniel Gordon, et al.*  
  CVPR 2020, 2019.12  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01734) [![Code](https://img.shields.io/github/stars/askforalfred/alfred?style=flat-square&logo=github&label=Code)](https://github.com/askforalfred/alfred) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://askforalfred.com/)

- **Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning**  
  *Tianhe Yu, Deirdre Quillen, Zhanpeng He, et al.*  
  CoRL 2019, 2019.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1910.10897) [![Code](https://img.shields.io/github/stars/Farama-Foundation/Metaworld?style=flat-square&logo=github&label=Code)](https://github.com/Farama-Foundation/Metaworld) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://metaworld.farama.org/)

- **RLBench: The Robot Learning Benchmark and Learning Environment**  
  *Stephen James, Zicong Ma, David Rovick Arrojo, et al.*  
  arXiv, 2019.09  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1909.12271) [![Code](https://img.shields.io/github/stars/stepjam/RLBench?style=flat-square&logo=github&label=Code)](https://github.com/stepjam/RLBench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/rlbench)

- **Vision-and-Language Navigation: Interpreting visually-grounded navigation instructions in real environments**  
  *Peter Anderson, Qi Wu, Damien Teney, et al.*  
  CVPR 2018, 2017.11  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1711.07280) [![Code](https://img.shields.io/github/stars/peteanderson80/Matterport3DSimulator?style=flat-square&logo=github&label=Code)](https://github.com/peteanderson80/Matterport3DSimulator) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://bringmeaspoon.org)

#### Real

- **PhAIL: A Real-Robot VLA Benchmark and Distributional Methodology**  
  Team: Positronic Robotics  
  *Sergey Arkhangelskiy*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.29710) [![Code](https://img.shields.io/github/stars/Positronic-Robotics/phail-paper?style=flat-square&logo=github&label=Code)](https://github.com/Positronic-Robotics/phail-paper)

- **VLA-REPLICA: A Low-Cost, Reproducible Benchmark for Real-World Evaluation of Vision-Language-Action Models**  
  *Alex S. Huang, Jiahui Zhang, Shiqing Tang, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.20774) [![Code](https://img.shields.io/github/stars/IRVLUTD/VLAReplica?style=flat-square&logo=github&label=Code)](https://github.com/IRVLUTD/VLAReplica) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://irvlutd.github.io/VLAReplica/)

- **RoboChallenge: Large-scale Real-robot Evaluation of Embodied Policies**  
  *RoboChallenge Team*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.17950) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robochallenge.ai/home)

- **RoboArena: Distributed Real-World Evaluation of Generalist Robot Policies**  
  *Pranav Atreya, Karl Pertsch, Tony Lee, et al.*  
  arXiv, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.18123) [![Code](https://img.shields.io/github/stars/robo-arena/roboarena?style=flat-square&logo=github&label=Code)](https://github.com/robo-arena/roboarena) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robo-arena.github.io/)

- **AutoEval: Autonomous Evaluation of Generalist Robot Manipulation Policies in the Real World**  
  Team: UC Berkeley; NVIDIA  
  *Zhiyuan Zhou, Pranav Atreya, You Liang Tan, et al.*  
  arXiv, 2025.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.24278) [![Code](https://img.shields.io/github/stars/zhouzypaul/auto_eval?style=flat-square&logo=github&label=Code)](https://github.com/zhouzypaul/auto_eval) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://auto-eval.github.io)

- **BEHAVIOR Robot Suite: Streamlining Real-World Whole-Body Manipulation for Everyday Household Activities**  
  *Yunfan Jiang, Ruohan Zhang, Josiah Wong, et al.*  
  arXiv, 2025.03  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.05652) [![Code](https://img.shields.io/github/stars/behavior-robot-suite/brs-algo?style=flat-square&logo=github&label=Code)](https://github.com/behavior-robot-suite/brs-algo) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://behavior-robot-suite.github.io/)

- **FMB: a Functional Manipulation Benchmark for Generalizable Robotic Learning**  
  *Jianlan Luo, Charles Xu, Fangchen Liu, et al.*  
  arXiv, 2024.01  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.08553) [![Code](https://img.shields.io/github/stars/rail-berkeley/fmb?style=flat-square&logo=github&label=Code)](https://github.com/rail-berkeley/fmb) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://functional-manipulation-benchmark.github.io/)

- **FurnitureBench: Reproducible Real-World Benchmark for Long-Horizon Complex Manipulation**  
  *Minho Heo, Youngwoon Lee, Doohyun Lee, et al.*  
  RSS 2023, 2023.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.12821) [![Code](https://img.shields.io/github/stars/clvrai/furniture-bench?style=flat-square&logo=github&label=Code)](https://github.com/clvrai/furniture-bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://clvrai.github.io/furniture-bench/)

#### Hybrid

- **RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies**  
  *Tianxing Chen, Yue Chen, Zixuan Li, et al.*  
  arXiv, 2026.07  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.04434) [![Code](https://img.shields.io/github/stars/robodojo-benchmark/RoboDojo?style=flat-square&logo=github&label=Code)](https://github.com/robodojo-benchmark/RoboDojo) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robodojo-benchmark.com/)

- **Assistance Without Interruption: A Benchmark and LLM-based Framework for Non-Intrusive Human-Robot Assistance**  
  *Yuedi Zhang, Shuanghao Bai, Wanqi Zhou, et al.*  
  arXiv, 2026.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.01368) [![Code](https://img.shields.io/github/stars/Cognition2Action-Lab/NIABench?style=flat-square&logo=github&label=Code)](https://github.com/Cognition2Action-Lab/NIABench.git) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://renytek13.github.io/assistance-without-interruption/)

- **RoboWM-Bench: A Benchmark for Evaluating World Models in Robotic Manipulation**  
  *Feng Jiang, Yang Chen, Kyle Xu, et al.*  
  arXiv, 2026.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19092) [![Code](https://img.shields.io/github/stars/fffstrong/RoboWM-Bench?style=flat-square&logo=github&label=Code)](https://github.com/fffstrong/RoboWM-Bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robowm-bench.github.io/RoboWM-Bench/)

- **RobotArena ∞: Scalable Robot Benchmarking via Real-to-Sim Translation**  
  *Yash Jangir, Yidi Zhang, Pang-Chi Lo, et al.*  
  arXiv, 2025.10  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.23571) [![Code](https://img.shields.io/github/stars/offjangir/RobotArena?style=flat-square&logo=github&label=Code)](https://github.com/offjangir/RobotArena) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotarenainf.github.io/)

- **RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation**  
  *Tianxing Chen, Zanxin Chen, Baijun Chen, et al.*  
  arXiv, 2025.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.18088) [![Code](https://img.shields.io/github/stars/robotwin-Platform/RoboTwin?style=flat-square&logo=github&label=Code)](https://github.com/robotwin-Platform/RoboTwin) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotwin-platform.github.io/)

- **RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins**  
  *Yao Mu, Tianxing Chen, Zanxin Chen, et al.*  
  CVPR 2025, 2025.04  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.13059) [![Code](https://img.shields.io/github/stars/robotwin-Platform/RoboTwin?style=flat-square&logo=github&label=Code)](https://github.com/robotwin-Platform/RoboTwin) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotwin-platform.github.io/)

- **Evaluating Real-World Robot Manipulation Policies in Simulation**  
  Team: UC San Diego; Stanford University; UC Berkeley; Google DeepMind  
  *Xuanlin Li, Kyle Hsu, Jiayuan Gu, et al.*  
  CoRL 2025, 2024.05  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.05941) [![Code](https://img.shields.io/github/stars/simpler-env/SimplerEnv?style=flat-square&logo=github&label=Code)](https://github.com/simpler-env/SimplerEnv) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://simpler-env.github.io/)

- **HomeRobot: Open-Vocabulary Mobile Manipulation**  
  *Sriram Yenamandra, Arun Ramachandran, Karmesh Yadav, et al.*  
  arXiv, 2023.06  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.11565) [![Code](https://img.shields.io/github/stars/facebookresearch/home-robot?style=flat-square&logo=github&label=Code)](https://github.com/facebookresearch/home-robot) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ovmm.github.io/)


## Contributing

Contributions are very welcome — new papers, corrections, better categorization, or dead-link fixes.

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md) for the entry format and placement rules.
2. Either [open an issue](https://github.com/ChenAnno/Awesome-Agentic-Robots/issues/new/choose)
   with the paper details, or send a pull request directly.

Every correction, addition, and categorization improvement is appreciated. Contributors are recorded
in the repository history and on GitHub's contributor graph.

## Acknowledgements

We thank the researchers who make their papers, code, models, datasets, and project pages publicly
available, as well as the maintainers of the related collections that help the community navigate this
fast-moving field.

## Citation

The official survey citation is not public yet. A verified BibTeX entry will be added after the
manuscript is released. Until then, please link to this repository rather than using a provisional
citation.

## License

Released under [CC0-1.0](./LICENSE). The listed papers remain under their own licenses and copyright.
