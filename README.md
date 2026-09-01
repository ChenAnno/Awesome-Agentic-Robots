<div align="center">
<br>

<img src="./assets/readme/papav-logo.png" width="39%" alt="PAPAV: Perceive, Anticipate, Plan, Act, Verify">

# PAPAV: A Capability-Centric Survey of Multimodal Embodied Agents

Yanzhe Chen<sup>1</sup> · Qiming Huang<sup>1</sup> · Jifeng Zhu<sup>1</sup> ·
Ziyi Yang<sup>1</sup> · Ruihe An<sup>1</sup> · Peiyao Xu<sup>1</sup> ·
Hesen Yang<sup>1</sup> · Runda Liu<sup>1</sup> · Chang Gong<sup>1</sup> ·
Zhijun Cao<sup>1</sup> · Zechen Bai<sup>1</sup> · Wenzheng Zeng<sup>1</sup> ·
Kevin Qinghong Lin · Yiqi Lin<sup>1</sup> · Guoqiang Liang<sup>1</sup> ·
Mike Zheng Shou<sup>1,†</sup>

<sup>1</sup>Show Lab, National University of Singapore<br>
<sup>†</sup>Corresponding author

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
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.13718)

- **Progress Reward Modeling for Robotic Learning: A Comprehensive Survey**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.21655) [![Code](https://img.shields.io/github/stars/sterzhang/Awesome-Progress-Models?style=flat-square&logo=github&label=Code)](https://github.com/sterzhang/Awesome-Progress-Models)

- **Agentic Artificial Intelligence (AI): Architectures, Taxonomies, and Evaluation of Large Language Model Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.12560)

- **A Survey on Agentic Multimodal Large Language Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.10991) [![Code](https://img.shields.io/github/stars/HJYao00/Awesome-Agentic-MLLMs?style=flat-square&logo=github&label=Code)](https://github.com/HJYao00/Awesome-Agentic-MLLMs)

- **Towards Embodied Agentic AI: Review and Classification of LLM- and VLM-Driven Robot Autonomy and Interaction**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.05294)

- **A Survey on (M)LLM-Based GUI Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.13865) [![Code](https://img.shields.io/github/stars/zju-real/Awesome-GUI-Agents?style=flat-square&logo=github&label=Code)](https://github.com/zju-real/Awesome-GUI-Agents)

- **Aligning Cyber Space with Physical World: A Comprehensive Survey on Embodied AI**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.06886) [![Code](https://img.shields.io/github/stars/HCPLab-SYSU/Embodied_AI_Paper_List?style=flat-square&logo=github&label=Code)](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List)

- **A Survey on Vision-Language-Action Models for Embodied AI**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.14093) [![Code](https://img.shields.io/github/stars/yueen-ma/Awesome-VLA?style=flat-square&logo=github&label=Code)](https://github.com/yueen-ma/Awesome-VLA)

- **Large Multimodal Agents: A Survey**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.15116) [![Code](https://img.shields.io/github/stars/jun0wanan/awesome-large-multimodal-agents?style=flat-square&logo=github&label=Code)](https://github.com/jun0wanan/awesome-large-multimodal-agents)

- **Agent AI: Surveying the Horizons of Multimodal Interaction**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.03568)

- **Integrated Task and Motion Planning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2010.01083)

<div align="right"><a href="#contents">&uarr; back to top</a></div>

---

## B. Multimodal Embodied Agents

Foundation-model-driven agents that couple multimodal perception and reasoning to **embodied**
sensing and physical action in a closed loop — VLAs, LLM/VLM planners and critics for robots,
language-conditioned robot world models, and embodied memory.

- **Mimir: A Neuro-Symbolic Memory System with Dynamic Grounding for Embodied Agents in Interactive Environments**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.04933)

- **Claude Plays Robotics**  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://www.anthropic.com/research/claude-plays-robotics)

- **CheckVLA: Execution-Time Verification with Action-Conditioned World Model for Long-Horizon Mobile Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.26789)

- **RoboTTT: Context Scaling for Robot Policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.15275) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://research.nvidia.com/labs/gear/robottt/)

- **Cloak: Zero-Shot Cross-Embodiment Manipulation by Masking the End-Effector from the VLA**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.22836) [![Code](https://img.shields.io/github/stars/Stanford-TML/cloak?style=flat-square&logo=github&label=Code)](https://github.com/Stanford-TML/cloak) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://tml.stanford.edu/cloak)

- **CoFineLLM: Conformal Finetuning of LLMs for Language-Instructed Robot Planning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.06575) [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://proceedings.mlr.press/v331/wang26c.html)

- **eMEM: A Hybrid Spatio-Temporal Memory System For Embodied Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.03374)

- **G³VLA: Geometric inductive bias for Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.24472)

- **Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02486)

- **Kairos: A Regret-Aware Native World-Action Model Stack for Physical AI**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.16533) [![Code](https://img.shields.io/github/stars/kairos-agi/kairos?style=flat-square&logo=github&label=Code)](https://github.com/kairos-agi/kairos)

- **KITE: Decoupling Kinematics and Interaction for Zero-Shot Cross-Embodiment Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.22113)

- **What Spatial Memory Must Store: Occlusion as the Test for Language-Agent Memory**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.10299)

- **What Matters in Orchestrating Robot Policies: A Systematic Study of Hierarchical VLA Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.10267)

- **Perturbation-Based Uncertainty for Failure Detection in Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.20754)

- **Robot Critics that Sweat the Small Stuff**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.21572) [![Code](https://img.shields.io/github/stars/SruthiSudhakar/robocritic?style=flat-square&logo=github&label=Code)](https://github.com/SruthiSudhakar/robocritic) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robocritic.cs.columbia.edu)

- **Visual Verification Enables Inference-time Steering and Autonomous Policy Improvement**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.18247) [![Code](https://img.shields.io/github/stars/princeton-prism/veritas?style=flat-square&logo=github&label=Code)](https://github.com/princeton-prism/veritas) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://veritas-improvement.github.io/)

- **VLA-FAIL: Efficient Task Failure Detection for Finetuned Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.21386)

- **World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.05979) [![Code](https://img.shields.io/github/stars/SJTU-DENG-Lab/WLA?style=flat-square&logo=github&label=Code)](https://github.com/SJTU-DENG-Lab/WLA)

- **X-Tokenizer: A Multimodal Action Tokenizer for Vision-Language-Action Pretraining**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.14752) [![Code](https://img.shields.io/github/stars/X-Square-Robot/X-Tokenizer?style=flat-square&logo=github&label=Code)](https://github.com/X-Square-Robot/X-Tokenizer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://x-square-robot.github.io/X-Tokenizer_projectPage/)

- **Dynamic Execution Commitment of Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.11567)

- **EMBGuard: Constructing Hazard-Aware Guardrails for Safe Planning in Embodied Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30924) [![Code](https://img.shields.io/github/stars/dongwxxkchoi/EMBGuard?style=flat-square&logo=github&label=Code)](https://github.com/dongwxxkchoi/EMBGuard)

- **Hide-and-Seek in Trajectories: Discovering Failure Signals for VLA Runtime Monitoring**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30834)

- **OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.25829)

- **3D-Belief: Embodied Belief Inference via Generative 3D World Modeling**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.11367) [![Code](https://img.shields.io/github/stars/3D-Belief/3d-belief?style=flat-square&logo=github&label=Code)](https://github.com/3D-Belief/3d-belief) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://3d-belief.github.io/)

- **Robot Planning and Situation Handling with Active Perception**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.26988)

- **Adaptive Action Chunking at Inference-time for Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.04161)

- **Using large language models for embodied planning introduces systematic safety risks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.18463)

- **Libra-VLA: Achieving Learning Equilibrium via Asynchronous Coarse-to-Fine Dual-System**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.24921)

- **World-Value-Action Model: Implicit Planning for Vision-Language-Action Systems**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.14732) [![Code](https://img.shields.io/github/stars/Win-commit/WAV?style=flat-square&logo=github&label=Code)](https://github.com/Win-commit/WAV)

- **GSMem: 3D Gaussian Splatting as Persistent Spatial Memory for Zero-Shot Embodied Exploration and Reasoning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.19137)

- **Evaluating VLMs' Spatial Reasoning Over Robot Motion: A Step Towards Robot Planning with Motion Preferences**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.13100)

- **AsyncVLA: An Asynchronous VLA for Fast and Robust Navigation on the Edge**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.13476)

- **LAP: Language-Action Pre-Training Enables Zero-shot Cross-Embodiment Transfer**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10556) [![Code](https://img.shields.io/github/stars/lihzha/lap?style=flat-square&logo=github&label=Code)](https://github.com/lihzha/lap) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://lap-vla.github.io)

- **Modular Safety Guardrails Are Necessary for Foundation-Model-Enabled Robots in the Real World**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.04056)

- **Recursive Belief Vision Language Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.20659)

- **SafeGen-LLM: Enhancing Safety Generalization in Task Planning for Robotic Systems**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.24235)

- **Theory of Space: Can Foundation Models Construct Spatial Beliefs through Active Exploration?**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.07055) [![Code](https://img.shields.io/github/stars/mll-lab-nu/Theory-of-Space?style=flat-square&logo=github&label=Code)](https://github.com/mll-lab-nu/Theory-of-Space)

- **VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10098) [![Code](https://img.shields.io/github/stars/ginwind/VLA-JEPA?style=flat-square&logo=github&label=Code)](https://github.com/ginwind/VLA-JEPA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ginwind.github.io/VLA-JEPA/)

- **World-VLA-Loop: Closed-Loop Learning of Video World Model and VLA Policy**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.06508) [![Code](https://img.shields.io/github/stars/showlab/World-VLA-Loop?style=flat-square&logo=github&label=Code)](https://github.com/showlab/World-VLA-Loop) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://showlab.github.io/World-VLA-Loop/)

- **PhyCritic: Multimodal Critic Models for Physical AI**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.11124)

- **ActiveVLA: Injecting Active Perception into Vision-Language-Action Models for Precise 3D Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.08325) [![Code](https://img.shields.io/github/stars/ZhenyangLiu/ActiveVLA-Injecting-Active-Perception-into-VLA?style=flat-square&logo=github&label=Code)](https://github.com/ZhenyangLiu/ActiveVLA-Injecting-Active-Perception-into-VLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://zhenyangliu.github.io/ActiveVLA/)

- **RoboReward: General-Purpose Vision-Language Reward Models for Robotics**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.00675)

- **TIDAL: Temporally Interleaved Diffusion and Action Loop for High-Frequency VLA Control**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.14945)

- **Toward Ambulatory Vision: Learning Visually-Grounded Active View Selection**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.13250) [![Code](https://img.shields.io/github/stars/KAIST-Visual-AI-Group/VG-AVS?style=flat-square&logo=github&label=Code)](https://github.com/KAIST-Visual-AI-Group/VG-AVS)

- **EVOLVE-VLA: Test-Time Training from Environment Feedback for Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.14666) [![Code](https://img.shields.io/github/stars/showlab/EVOLVE-VLA?style=flat-square&logo=github&label=Code)](https://github.com/showlab/EVOLVE-VLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://showlab.github.io/EVOLVE-VLA)

- **Scaling Cross-Environment Failure Reasoning Data for Vision-Language Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.01946)

- **Transforming Monolithic Foundation Models into Embodied Multi-Agent Architectures for Human-Robot Collaboration**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.00797)

- **AVA-VLA: Improving Vision-Language-Action models with Active Visual Attention**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.18960)

- **MADRA: Multi-Agent Debate for Risk-Aware Embodied Planning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.21460)

- **X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.10274) [![Code](https://img.shields.io/github/stars/2toinf/X-VLA?style=flat-square&logo=github&label=Code)](https://github.com/2toinf/X-VLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://thu-air-dream.github.io/X-VLA/)

- **Ctrl-World: A Controllable Generative World Model for Robot Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.10125) [![Code](https://img.shields.io/github/stars/Robert-gyj/Ctrl-World?style=flat-square&logo=github&label=Code)](https://github.com/Robert-gyj/Ctrl-World) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ctrl-world.github.io)

- **Towards Reliable LLM-based Robot Planning via Combined Uncertainty Estimation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.08044)

- **Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.03342)

- **Kinodynamic Task and Motion Planning using VLM-guided and Interleaved Sampling**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.26139)

- **Using VLM Reasoning to Constrain Task and Motion Planning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.25548)

- **Leave No Observation Behind: Real-time Correction for VLA Action Chunks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.23224)

- **A Vision-Language-Action-Critic Model for Robotic Real-World Reinforcement Learning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.15937) [![Code](https://img.shields.io/github/stars/InternRobotics/VLAC?style=flat-square&logo=github&label=Code)](https://github.com/InternRobotics/VLAC)

- **Genie Envisioner: A Unified World Foundation Platform for Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.05635) [![Code](https://img.shields.io/github/stars/AgibotTech/Genie-Envisioner?style=flat-square&logo=github&label=Code)](https://github.com/AgibotTech/Genie-Envisioner) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://genie-envisioner.github.io)

- **DreamVLA: A Vision-Language-Action Model Dreamed with Comprehensive World Knowledge**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.04447) [![Code](https://img.shields.io/github/stars/Zhangwenyao1/DreamVLA?style=flat-square&logo=github&label=Code)](https://github.com/Zhangwenyao1/DreamVLA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://zhangwenyao1.github.io/DreamVLA/)

- **Real-Time Execution of Action Chunking Flow Policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.07339)

- **Fast-in-Slow: A Dual-System Foundation Model Unifying Fast Manipulation within Slow Reasoning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01953)

- **GraphPad: Inference-Time 3D Scene Graph Updates for Embodied Question Answering**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01174)

- **Enhancing Rating-Based Reinforcement Learning to Effectively Leverage Feedback from Large Vision-Language Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.12822)

- **RoboMonkey: Scaling Test-Time Sampling and Verification for Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.17811) [![Code](https://img.shields.io/github/stars/robomonkey-vla/RoboMonkey?style=flat-square&logo=github&label=Code)](https://github.com/robomonkey-vla/RoboMonkey) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robomonkey-vla.github.io/)

- **SAFE: Multitask Failure Detection for Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09937) [![Code](https://img.shields.io/github/stars/vla-safe/SAFE?style=flat-square&logo=github&label=Code)](https://github.com/vla-safe/SAFE) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vla-safe.github.io/)

- **A Unified Framework for Real-Time Failure Handling in Robotics Using Vision-Language Models, Reactive Planner and Behavior Trees**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.15202)

- **Hi Robot: Open-Ended Instruction Following with Hierarchical Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.19417) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.physicalintelligence.company/research/hirobot)

- **Reflective Planning: Vision-Language Models for Multi-Stage Long-Horizon Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.16707) [![Code](https://img.shields.io/github/stars/yunhaif/reflect-vlm?style=flat-square&logo=github&label=Code)](https://github.com/yunhaif/reflect-vlm) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://reflect-vlm.github.io)

- **FAST: Efficient Action Tokenization for Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.09747) [![Code](https://img.shields.io/github/stars/Physical-Intelligence/openpi?style=flat-square&logo=github&label=Code)](https://github.com/Physical-Intelligence/openpi) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://pi.website/research/fast)

- **UP-VLA: A Unified Understanding and Prediction Model for Embodied Agent**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.18867)

- **Video Prediction Policy: A Generalist Robot Policy with Predictive Visual Representations**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.14803) [![Code](https://img.shields.io/github/stars/roboterax/video-prediction-policy?style=flat-square&logo=github&label=Code)](https://github.com/roboterax/video-prediction-policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://video-prediction-policy.github.io)

- **Code-as-Monitor: Constraint-aware Visual Programming for Reactive and Proactive Robotic Failure Detection**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.04455)

- **RDT-1B: a Diffusion Foundation Model for Bimanual Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.07864) [![Code](https://img.shields.io/github/stars/thu-ml/RoboticsDiffusionTransformer?style=flat-square&logo=github&label=Code)](https://github.com/thu-ml/RoboticsDiffusionTransformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rdt-robotics.github.io/rdt-robotics/)

- **AHA: A Vision-Language-Model for Detecting and Reasoning Over Failures in Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.00371) [![Code](https://img.shields.io/github/stars/NVlabs/AHA?style=flat-square&logo=github&label=Code)](https://github.com/NVlabs/AHA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://aha-vlm.github.io/)

- **π₀: A Vision-Language-Action Flow Model for General Robot Control**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.24164) [![Code](https://img.shields.io/github/stars/Physical-Intelligence/openpi?style=flat-square&logo=github&label=Code)](https://github.com/Physical-Intelligence/openpi) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.pi.website/blog/pi0)

- **CaStL: Constraints as Specifications through LLM Translation for Long-Horizon Task and Motion Planning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.22225)

- **ReKep: Spatio-Temporal Reasoning of Relational Keypoint Constraints for Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.01652) [![Code](https://img.shields.io/github/stars/huangwl18/ReKep?style=flat-square&logo=github&label=Code)](https://github.com/huangwl18/ReKep) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rekep-robot.github.io/)

- **Scaling Cross-Embodied Learning: One Policy for Manipulation, Navigation, Locomotion and Aviation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.11812) [![Code](https://img.shields.io/github/stars/rail-berkeley/crossformer?style=flat-square&logo=github&label=Code)](https://github.com/rail-berkeley/crossformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://crossformer-model.github.io/)

- **Octo: An Open-Source Generalist Robot Policy**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.12213) [![Code](https://img.shields.io/github/stars/octo-models/octo?style=flat-square&logo=github&label=Code)](https://github.com/octo-models/octo) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://octo-models.github.io)

- **Clio: Real-time Task-Driven Open-Set 3D Scene Graphs**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.13696) [![Code](https://img.shields.io/github/stars/MIT-SPARK/Clio?style=flat-square&logo=github&label=Code)](https://github.com/MIT-SPARK/Clio)

- **RoboDreamer: Learning Compositional World Models for Robot Imagination**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.12377) [![Code](https://img.shields.io/github/stars/rainbow979/robodreamer?style=flat-square&logo=github&label=Code)](https://github.com/rainbow979/robodreamer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robovideo.github.io/)

- **Explore until Confident: Efficient Exploration for Embodied Question Answering**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.15941) [![Code](https://img.shields.io/github/stars/Stanford-ILIAD/explore-eqa?style=flat-square&logo=github&label=Code)](https://github.com/Stanford-ILIAD/explore-eqa) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://explore-eqa.github.io)

- **Hierarchical open-vocabulary 3d scene graphs for language-grounded robot navigation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.17846) [![Code](https://img.shields.io/github/stars/hovsg/HOV-SG?style=flat-square&logo=github&label=Code)](https://github.com/hovsg/HOV-SG) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://hovsg.github.io/)

- **Vision-Language Models for Robot Success Detection**  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1609/aaai.v38i21.30552)

- **Introspective Planning: Aligning Robots' Uncertainty with Inherent Task Ambiguity**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.06529) [![Code](https://img.shields.io/github/stars/kevinliang888/IntroPlan?style=flat-square&logo=github&label=Code)](https://github.com/kevinliang888/IntroPlan)

- **RL-VLM-F: Reinforcement Learning from Vision Language Foundation Model Feedback**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.03681) [![Code](https://img.shields.io/github/stars/yufeiwang63/RL-VLM-F?style=flat-square&logo=github&label=Code)](https://github.com/yufeiwang63/RL-VLM-F) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rlvlmf2024.github.io/)

- **OK-Robot: What Really Matters in Integrating Open-Knowledge Models for Robotics**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.12202) [![Code](https://img.shields.io/github/stars/ok-robot/ok-robot?style=flat-square&logo=github&label=Code)](https://github.com/ok-robot/ok-robot) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ok-robot.github.io)

- **SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.12168) [![Code](https://img.shields.io/github/stars/remyxai/VQASynth?style=flat-square&logo=github&label=Code)](https://github.com/remyxai/VQASynth) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://spatial-vlm.github.io/)

- **Open X-Embodiment: Robotic Learning Datasets and RT-X Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08864) [![Code](https://img.shields.io/github/stars/google-deepmind/open_x_embodiment?style=flat-square&logo=github&label=Code)](https://github.com/google-deepmind/open_x_embodiment) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer-x.github.io)

- **Learning Interactive Real-World Simulators**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.06114) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://universal-simulator.github.io/unisim/)

- **Zero-Shot Robotic Manipulation with Pretrained Image-Editing Diffusion Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.10639) [![Code](https://img.shields.io/github/stars/kvablack/susie?style=flat-square&logo=github&label=Code)](https://github.com/kvablack/susie) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://rail-berkeley.github.io/susie/)

- **ConceptGraphs: Open-Vocabulary 3D Scene Graphs for Perception and Planning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.16650) [![Code](https://img.shields.io/github/stars/concept-graphs/concept-graphs?style=flat-square&logo=github&label=Code)](https://github.com/concept-graphs/concept-graphs) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://concept-graphs.github.io/)

- **Plug in the Safety Chip: Enforcing Constraints for LLM-driven Robot Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.09919)

- **DoReMi: Grounding Language Model by Detecting and Recovering from Plan-Execution Misalignment**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.00329) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/doremi-paper)

- **RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.15818) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer2.github.io/)

- **VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.05973) [![Code](https://img.shields.io/github/stars/huangwl18/VoxPoser?style=flat-square&logo=github&label=Code)](https://github.com/huangwl18/VoxPoser) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://voxposer.github.io/)

- **Robots That Ask For Help: Uncertainty Alignment for Large Language Model Planners**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.01928) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robot-help.github.io)

- **SayPlan: Grounding Large Language Models using 3D Scene Graphs for Scalable Robot Task Planning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.06135) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sayplan.github.io)

- **REFLECT: Summarizing Robot Experiences for Failure Explanation and Correction**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.15724) [![Code](https://img.shields.io/github/stars/real-stanford/reflect?style=flat-square&logo=github&label=Code)](https://github.com/real-stanford/reflect) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robot-reflect.github.io/)

- **Liv: Language-image representations and rewards for robotic control**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.00958) [![Code](https://img.shields.io/github/stars/penn-pal-lab/LIV?style=flat-square&logo=github&label=Code)](https://github.com/penn-pal-lab/LIV) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://penn-pal-lab.github.io/LIV/)

- **LLM+P: Empowering Large Language Models with Optimal Planning Proficiency**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2304.11477) [![Code](https://img.shields.io/github/stars/Cranial-XIX/llm-pddl?style=flat-square&logo=github&label=Code)](https://github.com/Cranial-XIX/llm-pddl)

- **Vision-Language Models as Success Detectors**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.07280)

- **LERF: Language Embedded Radiance Fields**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.09553) [![Code](https://img.shields.io/github/stars/kerrj/lerf?style=flat-square&logo=github&label=Code)](https://github.com/kerrj/lerf) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.lerf.io/)

- **PaLM-E: An Embodied Multimodal Language Model**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.03378) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://palm-e.github.io/)

- **Learning Universal Policies via Text-Guided Video Generation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2302.00111) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://universal-policy.github.io/)

- **Openscene: 3d scene understanding with open vocabularies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2211.15654) [![Code](https://img.shields.io/github/stars/pengsongyou/openscene?style=flat-square&logo=github&label=Code)](https://github.com/pengsongyou/openscene) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://pengsongyou.github.io/openscene)

- **Visual language maps for robot navigation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2210.05714) [![Code](https://img.shields.io/github/stars/vlmaps/vlmaps?style=flat-square&logo=github&label=Code)](https://github.com/vlmaps/vlmaps) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vlmaps.github.io/)

- **VIMA: Robot Manipulation with Multimodal Prompts**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2210.03094) [![Code](https://img.shields.io/github/stars/vimalabs/VIMA?style=flat-square&logo=github&label=Code)](https://github.com/vimalabs/VIMA) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vimalabs.github.io/)

- **Code as Policies: Language Model Programs for Embodied Control**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2209.07753) [![Code](https://img.shields.io/github/stars/google-research/google-research?style=flat-square&logo=github&label=Code)](https://github.com/google-research/google-research/tree/master/code_as_policies) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://code-as-policies.github.io/)

- **ProgPrompt: Generating Situated Robot Task Plans Using Large Language Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2209.11302) [![Code](https://img.shields.io/github/stars/NVlabs/progprompt-vh?style=flat-square&logo=github&label=Code)](https://github.com/NVlabs/progprompt-vh) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://progprompt.github.io/)

- **Inner Monologue: Embodied Reasoning through Planning with Language Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2207.05608) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://innermonologue.github.io)

- **Do As I Can, Not As I Say: Grounding Language in Robotic Affordances**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2204.01691) [![Code](https://img.shields.io/github/stars/google-research/google-research?style=flat-square&logo=github&label=Code)](https://github.com/google-research/google-research/tree/master/saycan) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://say-can.github.io/)

- **Language Models as Zero-Shot Planners: Extracting Actionable Knowledge for Embodied Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2201.07207) [![Code](https://img.shields.io/github/stars/huangwl18/language-planner?style=flat-square&logo=github&label=Code)](https://github.com/huangwl18/language-planner) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://huangwl18.github.io/language-planner/)

- **Learning Language-Conditioned Robot Behavior from Offline Data and Crowd-Sourced Annotation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2109.01115) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/robotlorel)

<div align="right"><a href="#contents">&uarr; back to top</a></div>

---

## C. Multimodal Agents

Agents built on multi-modal foundation models that perceive and act in **digital** environments —
screens, browsers, documents, and APIs — without a physical body.

- **AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.05891)

- **Do GUI Agents Believe Their Eyes? Diagnosing State-Belief Reliance on Pixels versus Structure**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.04334)

- **Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.25904)

- **From Confident Closing to Silent Failure: Characterizing False Success in LLM Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.09863)

- **Oversight Has a Capacity: Calibrating Agent Guards to a Subjective, Fatiguing Human**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.08919) [![Code](https://img.shields.io/github/stars/turangenesis/headroom?style=flat-square&logo=github&label=Code)](https://github.com/turangenesis/headroom)

- **Qwen-AgentWorld: Language World Models for General Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.24597) [![Code](https://img.shields.io/github/stars/QwenLM/Qwen-AgentWorld?style=flat-square&logo=github&label=Code)](https://github.com/QwenLM/Qwen-AgentWorld)

- **A11y-Compressor: A Framework for Enhancing the Efficiency of GUI Agent Observations through Visual Context Reconstruction and Redundancy Reduction**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.00551)

- **DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22781)

- **Crab: A Semantics-Aware Checkpoint/Restore Runtime for Agent Sandboxes**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28138)

- **VLM Judges Can Rank but Cannot Score: Task-Dependent Uncertainty in Multimodal Evaluation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.25235) [![Code](https://img.shields.io/github/stars/divake/VLM-Judge-Uncertainty?style=flat-square&logo=github&label=Code)](https://github.com/divake/VLM-Judge-Uncertainty)

- **Confident and Wrong: Silent Semantic Failures in Coding Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.25764)

- **Generative Visual Code Mobile World Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.01576) [![Code](https://img.shields.io/github/stars/trillion-labs/gWorld?style=flat-square&logo=github&label=Code)](https://github.com/trillion-labs/gWorld)

- **Agentic Reward Modeling: Verifying GUI Agent via Progressive Trajectory-Grounded Interaction**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.00575)

- **Code2world: A gui world model via renderable code generation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.09856) [![Code](https://img.shields.io/github/stars/AMAP-ML/Code2World?style=flat-square&logo=github&label=Code)](https://github.com/AMAP-ML/Code2World)

- **Mobiledreamer: Generative sketch world model for gui agent**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04035)

- **Recoverability Has a Law: The ERR Measure for Tool-Augmented Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.22352)

- **Guitester: Enabling gui agents for exploratory defect discovery**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04500) [![Code](https://img.shields.io/github/stars/ADaM-BJTU/GUITestBench?style=flat-square&logo=github&label=Code)](https://github.com/ADaM-BJTU/GUITestBench)

- **WebArbiter: A Principle-Guided Reasoning Process Reward Model for Web Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.21872)

- **ShowUI-π: Flow-based Generative Models as GUI Dexterous Hands**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.24965) [![Code](https://img.shields.io/github/stars/showlab/showui-pi?style=flat-square&logo=github&label=Code)](https://github.com/showlab/showui-pi) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://showlab.github.io/showui-pi)

- **Active perception agent for omnimodal audio-video understanding**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.23646)

- **WebOperator: Action-Aware Tree Search for Autonomous Agents in Web Environment**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.12692) [![Code](https://img.shields.io/github/stars/kagnlp/WebOperator?style=flat-square&logo=github&label=Code)](https://github.com/kagnlp/WebOperator)

- **GUISpector: An MLLM Agent Framework for Automated Verification of Natural Language Requirements in GUI Prototypes**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.04791)

- **Scaling Synthetic Task Generation for Agents via Exploration**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.25047)

- **Learning GUI Grounding with Spatial Reasoning from Visual Feedback**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.21552)

- **Seeing, listening, remembering, and reasoning: A multimodal agent with long-term memory**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.09736) [![Code](https://img.shields.io/github/stars/bytedance-seed/m3-agent?style=flat-square&logo=github&label=Code)](https://github.com/bytedance-seed/m3-agent)

- **Let's Think in Two Steps: Mitigating Agreement Bias in MLLMs with Self-Grounded Verification**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.11662)

- **Magentic-UI: Towards Human-in-the-loop Agentic Systems**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.22358) [![Code](https://img.shields.io/github/stars/microsoft/magentic-ui?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/magentic-ui)

- **Agent-SAMA: State-Aware Mobile Assistant**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.23596)

- **Web-Shepherd: Advancing PRMs for Reinforcing Web Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.15277) [![Code](https://img.shields.io/github/stars/kyle8581/Web-Shepherd?style=flat-square&logo=github&label=Code)](https://github.com/kyle8581/Web-Shepherd)

- **Backtrackagent: Enhancing gui agent with error detection and backtracking mechanism**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.20660)

- **Agent S2: A Compositional Generalist-Specialist Framework for Computer Use Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.00906) [![Code](https://img.shields.io/github/stars/simular-ai/Agent-S?style=flat-square&logo=github&label=Code)](https://github.com/simular-ai/Agent-S)

- **Webevolver: Enhancing web agent self-improvement with co-evolving world model**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.21024) [![Code](https://img.shields.io/github/stars/Tencent/SelfEvolvingAgent?style=flat-square&logo=github&label=Code)](https://github.com/Tencent/SelfEvolvingAgent)

- **ViMo: A Generative Visual GUI World Model for App Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.13936)

- **AutoGUI: Scaling GUI Grounding with Automatic Functionality Annotations from LLMs**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.01977) [![Code](https://img.shields.io/github/stars/ZJULiHongxin/AutoGUI?style=flat-square&logo=github&label=Code)](https://github.com/ZJULiHongxin/AutoGUI)

- **UI-TARS: Pioneering Automated GUI Interaction with Native Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.12326) [![Code](https://img.shields.io/github/stars/bytedance/UI-TARS?style=flat-square&logo=github&label=Code)](https://github.com/bytedance/UI-TARS)

- **Aguvis: Unified pure vision agents for autonomous gui interaction**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.04454) [![Code](https://img.shields.io/github/stars/xlang-ai/aguvis?style=flat-square&logo=github&label=Code)](https://github.com/xlang-ai/aguvis) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://aguvis-project.github.io/)

- **Is Your LLM Secretly a World Model of the Internet? Model-Based Planning for Web Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.06559) [![Code](https://img.shields.io/github/stars/OSU-NLP-Group/WebDreamer?style=flat-square&logo=github&label=Code)](https://github.com/OSU-NLP-Group/WebDreamer)

- **ShowUI: One Vision-Language-Action Model for GUI Visual Agent**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.17465) [![Code](https://img.shields.io/github/stars/showlab/ShowUI?style=flat-square&logo=github&label=Code)](https://github.com/showlab/ShowUI)

- **Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.13232) [![Code](https://img.shields.io/github/stars/kyle8581/WMA-Agents?style=flat-square&logo=github&label=Code)](https://github.com/kyle8581/WMA-Agents)

- **Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.05243) [![Code](https://img.shields.io/github/stars/OSU-NLP-Group/UGround?style=flat-square&logo=github&label=Code)](https://github.com/OSU-NLP-Group/UGround) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osu-nlp-group.github.io/UGround/)

- **OS-ATLAS: A Foundation Action Model for Generalist GUI Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.23218) [![Code](https://img.shields.io/github/stars/OS-Copilot/OS-Atlas?style=flat-square&logo=github&label=Code)](https://github.com/OS-Copilot/OS-Atlas) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osatlas.github.io/)

- **AgentOccam: A Simple Yet Strong Baseline for LLM-Based Web Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.13825) [![Code](https://img.shields.io/github/stars/amazon-science/AgentOccam?style=flat-square&logo=github&label=Code)](https://github.com/amazon-science/AgentOccam)

- **The Impact of Element Ordering on LM Agent Performance**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.12089) [![Code](https://img.shields.io/github/stars/waynchi/gui-agent?style=flat-square&logo=github&label=Code)](https://github.com/waynchi/gui-agent)

- **Tree Search for Language Model Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.01476) [![Code](https://img.shields.io/github/stars/kohjingyu/search-agents?style=flat-square&logo=github&label=Code)](https://github.com/kohjingyu/search-agents) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://jykoh.com/search-agents)

- **Pandora: Towards general world model with natural language actions and video states**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.09455) [![Code](https://img.shields.io/github/stars/maitrix-org/Pandora?style=flat-square&logo=github&label=Code)](https://github.com/maitrix-org/Pandora) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://world-model.maitrix.org/)

- **OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.07972) [![Code](https://img.shields.io/github/stars/xlang-ai/OSWorld?style=flat-square&logo=github&label=Code)](https://github.com/xlang-ai/OSWorld) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://os-world.github.io/)

- **Videoagent: A memory-augmented multimodal agent for video understanding**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.11481) [![Code](https://img.shields.io/github/stars/YueFan1014/VideoAgent?style=flat-square&logo=github&label=Code)](https://github.com/YueFan1014/VideoAgent) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://videoagent.github.io/)

- **Genie: Generative Interactive Environments**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.15391) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/genie-2024/home)

- **Os-copilot: Towards generalist computer agents with self-improvement**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.07456) [![Code](https://img.shields.io/github/stars/OS-Copilot/OS-Copilot?style=flat-square&logo=github&label=Code)](https://github.com/OS-Copilot/OS-Copilot) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://os-copilot.github.io/)

- **Position: LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.01817)

- **SeeClick: Harnessing GUI Grounding for Advanced Visual GUI Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.10935) [![Code](https://img.shields.io/github/stars/njucckevin/SeeClick?style=flat-square&logo=github&label=Code)](https://github.com/njucckevin/SeeClick)

- **GPT-4V(ision) Is a Generalist Web Agent, If Grounded**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.01614) [![Code](https://img.shields.io/github/stars/OSU-NLP-Group/SeeAct?style=flat-square&logo=github&label=Code)](https://github.com/OSU-NLP-Group/SeeAct) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osu-nlp-group.github.io/SeeAct/)

- **CogAgent: A Visual Language Model for GUI Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.08914) [![Code](https://img.shields.io/github/stars/THUDM/CogAgent?style=flat-square&logo=github&label=Code)](https://github.com/THUDM/CogAgent)

- **Timechat: A time-sensitive multimodal large language model for long video understanding**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.02051) [![Code](https://img.shields.io/github/stars/RenShuhuai-Andy/TimeChat?style=flat-square&logo=github&label=Code)](https://github.com/RenShuhuai-Andy/TimeChat)

- **LLaVA-Plus: Learning to Use Tools for Creating Multimodal Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.05437) [![Code](https://img.shields.io/github/stars/LLaVA-VL/LLaVA-Plus-Codebase?style=flat-square&logo=github&label=Code)](https://github.com/LLaVA-VL/LLaVA-Plus-Codebase) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://llava-vl.github.io/llava-plus/)

- **Salmonn: Towards generic hearing abilities for large language models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.13289) [![Code](https://img.shields.io/github/stars/bytedance/SALMONN?style=flat-square&logo=github&label=Code)](https://github.com/bytedance/SALMONN)

- **ControlLLM: Augment Language Models with Tools by Searching on Graphs**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.17796) [![Code](https://img.shields.io/github/stars/OpenGVLab/ControlLLM?style=flat-square&logo=github&label=Code)](https://github.com/OpenGVLab/ControlLLM)

- **Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.11441) [![Code](https://img.shields.io/github/stars/microsoft/SoM?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/SoM) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://som-gpt4v.github.io/)

- **Identifying the Risks of LM Agents with an LM-Emulated Sandbox**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.15817) [![Code](https://img.shields.io/github/stars/ryoungj/ToolEmu?style=flat-square&logo=github&label=Code)](https://github.com/ryoungj/ToolEmu)

- **Learning to model the world with language**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2308.01399) [![Code](https://img.shields.io/github/stars/jlin816/dynalang?style=flat-square&logo=github&label=Code)](https://github.com/jlin816/dynalang) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://dynalang.github.io/)

- **Avis: Autonomous visual information seeking with large language model agent**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.08129)

- **Kosmos-2: Grounding multimodal large language models to the world**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.14824) [![Code](https://img.shields.io/github/stars/microsoft/unilm?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/unilm/tree/master/kosmos-2)

- **Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.07863) [![Code](https://img.shields.io/github/stars/ltzheng/Synapse?style=flat-square&logo=github&label=Code)](https://github.com/ltzheng/Synapse) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ltzheng.github.io/Synapse/)

- **Voyager: An Open-Ended Embodied Agent with Large Language Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.16291) [![Code](https://img.shields.io/github/stars/MineDojo/Voyager?style=flat-square&logo=github&label=Code)](https://github.com/MineDojo/Voyager) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://voyager.minedojo.org/)

- **Self-refine: Iterative refinement with self-feedback**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.17651) [![Code](https://img.shields.io/github/stars/madaan/self-refine?style=flat-square&logo=github&label=Code)](https://github.com/madaan/self-refine) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://selfrefine.info/)

- **Hugginggpt: Solving ai tasks with chatgpt and its friends in hugging face**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.17580) [![Code](https://img.shields.io/github/stars/microsoft/JARVIS?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/JARVIS)

- **Mm-react: Prompting chatgpt for multimodal reasoning and action**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.11381) [![Code](https://img.shields.io/github/stars/microsoft/MM-REACT?style=flat-square&logo=github&label=Code)](https://github.com/microsoft/MM-REACT) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://multimodal-react.github.io/)

- **Reflexion: Language Agents with Verbal Reinforcement Learning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.11366) [![Code](https://img.shields.io/github/stars/noahshinn/reflexion?style=flat-square&logo=github&label=Code)](https://github.com/noahshinn/reflexion)

- **ReAct: Synergizing Reasoning and Acting in Language Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2210.03629) [![Code](https://img.shields.io/github/stars/ysymyth/ReAct?style=flat-square&logo=github&label=Code)](https://github.com/ysymyth/ReAct) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://react-lm.github.io/)

- **Mastering atari, go, chess and shogi by planning with a learned model**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1911.08265)

<div align="right"><a href="#contents">&uarr; back to top</a></div>

---

## D. Robotic Systems

Robot learning, perception, and control in the **physical** world — vision-language-action models,
manipulation, navigation, humanoids, and the data and simulators behind them.

- **ActionMap: Robot Policy Learning via Voxel Action Heatmap**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06904)

- **ActProbe: Action-Space Probe for Early Failure Detection of Generative Robot Policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.08508) [![Code](https://img.shields.io/github/stars/air-embodied-brain/actprobe?style=flat-square&logo=github&label=Code)](https://github.com/air-embodied-brain/actprobe) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://air-embodied-brain.github.io/actprobe)

- **ContactWorld: What Matters in Vision-Tactile World Models for Contact-Rich Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.13877)

- **Critical Interval MSE: Toward Reliable Offline Validation for Robot Manipulation Policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29898)

- **Foresight: Failure Detection for Long-Horizon Robotic Manipulation with Action-Conditioned World Model Latents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.23085) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://haoranzhangumich.github.io/Forsight_web)

- **TacForeSight: Force-Guided Tactile World Model for Contact-Rich Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.11184)

- **ACSAC: Adaptive Chunk Size Actor-Critic with Causal Transformer Q-Network**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.11009)

- **Going Beyond World Models and VLAs**  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://generalistai.com/blog/beyond-world-models)

- **Beyond Binary Success: Sample-Efficient and Statistically Rigorous Robot Policy Comparison**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.13616)

- **ComFree-Sim: A GPU-Parallelized Analytical Contact Physics Engine for Scalable Contact-Rich Robotics Simulation and Control**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.12185)

- **Contact-Anchored Policies: Contact Conditioning Creates Strong Robot Utility Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.09017) [![Code](https://img.shields.io/github/stars/jeffacce/cap-policy?style=flat-square&logo=github&label=Code)](https://github.com/jeffacce/cap-policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://cap-policy.github.io)

- **Demystifying Action Space Design for Robotic Manipulation Policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23408)

- **Mixture of Horizons in Action Chunking**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.19433) [![Code](https://img.shields.io/github/stars/Timsty1/MixtureOfHorizons?style=flat-square&logo=github&label=Code)](https://github.com/Timsty1/MixtureOfHorizons)

- **APPLE: Toward General Active Perception via Reinforcement Learning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.06182) [![Code](https://img.shields.io/github/stars/TimSchneider42/apple?style=flat-square&logo=github&label=Code)](https://github.com/TimSchneider42/apple/) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://timschneider42.github.io/apple/)

- **Reactive Diffusion Policy: Slow-Fast Visual-Tactile Policy Learning for Contact-Rich Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.02881) [![Code](https://img.shields.io/github/stars/xiaoxiaoxh/reactive_diffusion_policy?style=flat-square&logo=github&label=Code)](https://github.com/xiaoxiaoxh/reactive_diffusion_policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://reactive-diffusion-policy.github.io)

- **Can we detect failures without failure data? uncertainty-aware runtime failure detection for imitation learning policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.08558)

- **Unpacking Failure Modes of Generative Policies: Runtime Monitoring of Consistency and Progress**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.04640)

- **3D-ViTac: Learning Fine-Grained Manipulation with Visuo-Tactile Sensing**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.24091) [![Code](https://img.shields.io/github/stars/binghao-huang/3d-vitac-training-code?style=flat-square&logo=github&label=Code)](https://github.com/binghao-huang/3d-vitac-training-code) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://binghao-huang.github.io/3D-ViTac/)

- **Scaling Proprioceptive-Visual Learning with Heterogeneous Pre-trained Transformers**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.20537) [![Code](https://img.shields.io/github/stars/liruiw/HPT?style=flat-square&logo=github&label=Code)](https://github.com/liruiw/HPT) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://liruiw.github.io/hpt)

- **IRASim: A Fine-Grained World Model for Robot Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.14540) [![Code](https://img.shields.io/github/stars/bytedance/IRASim?style=flat-square&logo=github&label=Code)](https://github.com/bytedance/IRASim) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://gen-irasim.github.io/)

- **DROID: A Large-Scale In-the-Wild Robot Manipulation Dataset**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.12945) [![Code](https://img.shields.io/github/stars/droid-dataset/droid?style=flat-square&logo=github&label=Code)](https://github.com/droid-dataset/droid) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://droid-dataset.github.io/)

- **MIRAGE: Cross-Embodiment Zero-Shot Policy Transfer with Cross-Painting**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.19249)

- **TD-MPC2: Scalable, Robust World Models for Continuous Control**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) [![Code](https://img.shields.io/github/stars/nicklashansen/tdmpc2?style=flat-square&logo=github&label=Code)](https://github.com/nicklashansen/tdmpc2) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.tdmpc2.com/)

- **RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.11706) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://deepmind.google/blog/robocat-a-self-improving-robotic-agent)

- **Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2304.13705) [![Code](https://img.shields.io/github/stars/tonyzhaozh/act?style=flat-square&logo=github&label=Code)](https://github.com/tonyzhaozh/act) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://tonyzhaozh.github.io/aloha/)

- **Diffusion Policy: Visuomotor Policy Learning via Action Diffusion**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2303.04137) [![Code](https://img.shields.io/github/stars/real-stanford/diffusion_policy?style=flat-square&logo=github&label=Code)](https://github.com/real-stanford/diffusion_policy) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://diffusion-policy.cs.columbia.edu/)

- **Mastering diverse control tasks through world models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) [![Code](https://img.shields.io/github/stars/danijar/dreamerv3?style=flat-square&logo=github&label=Code)](https://github.com/danijar/dreamerv3) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/dreamerv3/)

- **See, Hear, and Feel: Smart Sensory Fusion for Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2212.03858) [![Code](https://img.shields.io/github/stars/JunzheJosephZhu/see_hear_feel?style=flat-square&logo=github&label=Code)](https://github.com/JunzheJosephZhu/see_hear_feel) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ai.stanford.edu/~rhgao/see_hear_feel/)

- **RT-1: Robotics Transformer for Real-World Control at Scale**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2212.06817) [![Code](https://img.shields.io/github/stars/google-research/robotics_transformer?style=flat-square&logo=github&label=Code)](https://github.com/google-research/robotics_transformer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotics-transformer1.github.io/)

- **DayDreamer: World Models for Physical Robot Learning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2206.14176) [![Code](https://img.shields.io/github/stars/danijar/daydreamer?style=flat-square&logo=github&label=Code)](https://github.com/danijar/daydreamer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/daydreamer/)

- **Hydra: A Real-time Spatial Perception System for 3D Scene Graph Construction and Optimization**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2201.13360) [![Code](https://img.shields.io/github/stars/MIT-SPARK/Hydra?style=flat-square&logo=github&label=Code)](https://github.com/MIT-SPARK/Hydra)

- **Example-Driven Model-Based Reinforcement Learning for Solving Long-Horizon Visuomotor Tasks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2109.10312)

- **The PANDA Framework for Hierarchical Planning**  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1007/s13218-020-00699-y)

- **Multimodal sensor fusion with differentiable filters**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2010.13021)

- **ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2007.11898) [![Code](https://img.shields.io/github/stars/UZ-SLAMLab/ORB_SLAM3?style=flat-square&logo=github&label=Code)](https://github.com/UZ-SLAMLab/ORB_SLAM3)

- **Dream to control: Learning behaviors by latent imagination**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01603) [![Code](https://img.shields.io/github/stars/danijar/dreamer?style=flat-square&logo=github&label=Code)](https://github.com/danijar/dreamer) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/dreamer/)

- **Kimera: an open-source library for real-time metric-semantic localization and mapping**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1910.02490) [![Code](https://img.shields.io/github/stars/MIT-SPARK/Kimera?style=flat-square&logo=github&label=Code)](https://github.com/MIT-SPARK/Kimera)

- **Learning Latent Dynamics for Planning from Pixels**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1811.04551) [![Code](https://img.shields.io/github/stars/google-research/planet?style=flat-square&logo=github&label=Code)](https://github.com/google-research/planet) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://danijar.com/project/planet/)

- **Composable action-conditioned predictors: Flexible off-policy learning for robot navigation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1810.07167) [![Code](https://img.shields.io/github/stars/gkahn13/CAPs?style=flat-square&logo=github&label=Code)](https://github.com/gkahn13/CAPs)

- **Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1805.12114) [![Code](https://img.shields.io/github/stars/kchua/handful-of-trials?style=flat-square&logo=github&label=Code)](https://github.com/kchua/handful-of-trials)

- **Pddlstream: Integrating symbolic planners and blackbox samplers via optimistic adaptive planning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1802.08705) [![Code](https://img.shields.io/github/stars/caelan/pddlstream?style=flat-square&logo=github&label=Code)](https://github.com/caelan/pddlstream)

- **Self-Supervised Visual Planning with Temporal Skip Connections.**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1710.05268)

- **Dex-Net 2.0: Deep Learning to Plan Robust Grasps with Synthetic Point Clouds and Analytic Grasp Metrics**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1703.09312) [![Code](https://img.shields.io/github/stars/BerkeleyAutomation/gqcnn?style=flat-square&logo=github&label=Code)](https://github.com/BerkeleyAutomation/gqcnn) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://berkeleyautomation.github.io/dex-net/)

- **Deep visual foresight for planning robot motion**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1610.00696)

- **Hierarchical task and motion planning in the now**  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1109/ICRA.2011.5980391)

- **Impedance Control: An Approach to Manipulation, Part I-Theory**  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://doi.org/10.1115/1.3140702)

<div align="right"><a href="#contents">&uarr; back to top</a></div>

---

## E. Benchmarks

### Multimodal Embodied Agents

#### Sim

- **ESI-Bench: Towards Embodied Spatial Intelligence that Closes the Perception-Action Loop**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.18746) [![Code](https://img.shields.io/github/stars/ESI-Bench/ESI-Bench?style=flat-square&logo=github&label=Code)](https://github.com/ESI-Bench/ESI-Bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://esi-bench.github.io/)

- **ADAPT: Benchmarking Commonsense Planning under Unspecified Affordance Constraints**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.14902) [![Code](https://img.shields.io/github/stars/charlotteannchen/ADAPT-Codebase?style=flat-square&logo=github&label=Code)](https://github.com/charlotteannchen/ADAPT-Codebase) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://charlotteannchen.github.io/ADAPT/)

- **RoboCerebra: A Large-scale Benchmark for Long-horizon Robotic Manipulation Evaluation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.06677) [![Code](https://img.shields.io/github/stars/qiuboxiang/RoboCerebra?style=flat-square&logo=github&label=Code)](https://github.com/qiuboxiang/RoboCerebra) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robocerebra.github.io/)

- **IS-Bench: Evaluating Interactive Safety of VLM-Driven Embodied Agents in Daily Household Tasks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.16402) [![Code](https://img.shields.io/github/stars/AI45Lab/IS-Bench?style=flat-square&logo=github&label=Code)](https://github.com/AI45Lab/IS-Bench)

- **EMBODIEDBENCH: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.09560) [![Code](https://img.shields.io/github/stars/EmbodiedBench/EmbodiedBench?style=flat-square&logo=github&label=Code)](https://github.com/EmbodiedBench/EmbodiedBench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://embodiedbench.github.io/)

- **PARTNR: A Benchmark for Planning and Reasoning in Embodied Multi-agent Tasks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.00081) [![Code](https://img.shields.io/github/stars/facebookresearch/partnr-planner?style=flat-square&logo=github&label=Code)](https://github.com/facebookresearch/partnr-planner/tree/main/) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://aihabitat.org/partnr/)

- **EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.22662) [![Code](https://img.shields.io/github/stars/SgtVincent/EMOS?style=flat-square&logo=github&label=Code)](https://github.com/SgtVincent/EMOS) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://emos-project.github.io/)

- **RoCo: Dialectic Multi-Robot Collaboration with Large Language Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.04738) [![Code](https://img.shields.io/github/stars/MandiZhao/robot-collab?style=flat-square&logo=github&label=Code)](https://github.com/MandiZhao/robot-collab) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://project-roco.github.io/)

#### Real

- **PLanAR: Planning-Language-Grounded Agentic Reasoning for Robot Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.01662) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://planar-robot.github.io/)

#### Hybrid

- **CaP-X: A Framework for Benchmarking and Improving Coding Agents for Robot Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.22435) [![Code](https://img.shields.io/github/stars/capgym/cap-x?style=flat-square&logo=github&label=Code)](https://github.com/capgym/cap-x) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://capgym.github.io/)

### Multimodal Agents

#### Understanding

- **Video-MME-v2: Towards the Next Stage in Benchmarks for Comprehensive Video Understanding**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.05015) [![Code](https://img.shields.io/github/stars/MME-Benchmarks/Video-MME-v2?style=flat-square&logo=github&label=Code)](https://github.com/MME-Benchmarks/Video-MME-v2) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://video-mme-v2.netlify.app/)

- **Thinking in Space: How Multimodal Large Language Models See, Remember, and Recall Spaces**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.14171) [![Code](https://img.shields.io/github/stars/vision-x-nyu/thinking-in-space?style=flat-square&logo=github&label=Code)](https://github.com/vision-x-nyu/thinking-in-space) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vision-x-nyu.github.io/thinking-in-space.github.io/)

- **MMMU-Pro: A More Robust Multi-discipline Multimodal Understanding Benchmark**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.02813) [![Code](https://img.shields.io/github/stars/MMMU-Benchmark/MMMU?style=flat-square&logo=github&label=Code)](https://github.com/MMMU-Benchmark/MMMU) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mmmu-benchmark.github.io/)

#### Interaction

- **OSWorld 2.0: Benchmarking Computer-Use Agents on Long-Horizon Real-World Tasks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.29537) [![Code](https://img.shields.io/github/stars/xlang-ai/OSWorld-V2?style=flat-square&logo=github&label=Code)](https://github.com/xlang-ai/OSWorld-V2) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://osworld-v2.xlang.ai/)

- **GameWorld: Towards Standardized and Verifiable Evaluation of Multimodal Game Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.07429) [![Code](https://img.shields.io/github/stars/gameworld-project/gameworld?style=flat-square&logo=github&label=Code)](https://github.com/gameworld-project/gameworld) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://gameworld-project.github.io/)

- **OmniGAIA: Towards Native Omni-Modal AI Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.22897) [![Code](https://img.shields.io/github/stars/RUC-NLPIR/OmniGAIA?style=flat-square&logo=github&label=Code)](https://github.com/RUC-NLPIR/OmniGAIA)

- **AgentVista: Evaluating Multimodal Agents in Ultra-Challenging Realistic Visual Scenarios**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23166) [![Code](https://img.shields.io/github/stars/hkust-nlp/AgentVista?style=flat-square&logo=github&label=Code)](https://github.com/hkust-nlp/AgentVista) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://agentvista-bench.github.io/)

- **MMSearch-Plus: Benchmarking Provenance-Aware Search for Multimodal Browsing Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.21475) [![Code](https://img.shields.io/github/stars/mmsearch-plus/MMSearch-Plus?style=flat-square&logo=github&label=Code)](https://github.com/mmsearch-plus/MMSearch-Plus) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mmsearch-plus.github.io/)

- **iVISPAR -- An Interactive Visual-Spatial Reasoning Benchmark for VLMs**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.03214) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://microcosm.ai/ivispar/)

- **CRAB: Cross-environment Agent Benchmark for Multimodal Language Model Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.01511) [![Code](https://img.shields.io/github/stars/camel-ai/crab?style=flat-square&logo=github&label=Code)](https://github.com/camel-ai/crab) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://crab.camel-ai.org/)

- **τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.12045) [![Code](https://img.shields.io/github/stars/sierra-research/tau-bench?style=flat-square&logo=github&label=Code)](https://github.com/sierra-research/tau-bench)

- **AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.14573) [![Code](https://img.shields.io/github/stars/google-research/android_world?style=flat-square&logo=github&label=Code)](https://github.com/google-research/android_world) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://google-research.github.io/android_world/)

- **MMInA: Benchmarking Multihop Multimodal Internet Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.09992) [![Code](https://img.shields.io/github/stars/shulin16/mmina?style=flat-square&logo=github&label=Code)](https://github.com/shulin16/mmina) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mmina.cliangyu.com/)

- **AgentStudio: A Toolkit for Building General Virtual Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.17918) [![Code](https://img.shields.io/github/stars/ltzheng/agent-studio?style=flat-square&logo=github&label=Code)](https://github.com/ltzheng/agent-studio) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://ltzheng.github.io/agent-studio/)

- **VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.13649) [![Code](https://img.shields.io/github/stars/web-arena-x/visualwebarena?style=flat-square&logo=github&label=Code)](https://github.com/web-arena-x/visualwebarena) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://jykoh.com/vwa)

- **WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.13919) [![Code](https://img.shields.io/github/stars/MinorJerry/WebVoyager?style=flat-square&logo=github&label=Code)](https://github.com/MinorJerry/WebVoyager)

- **GAIA: A Benchmark for General AI Assistants**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.12983) [![Hugging Face](https://img.shields.io/badge/Hugging_Face-Benchmark-FFD21E?style=flat-square&logo=huggingface&logoColor=black)](https://huggingface.co/gaia-benchmark) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://huggingface.co/gaia-benchmark)

- **WebArena: A Realistic Web Environment for Building Autonomous Agents**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.13854) [![Code](https://img.shields.io/github/stars/web-arena-x/webarena?style=flat-square&logo=github&label=Code)](https://github.com/web-arena-x/webarena) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://webarena.dev/og/)

#### Generation

- **GameCraft-Bench: Can Agents Build Playable Games End-to-End in a Real Game Engine?**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.17861) [![Code](https://img.shields.io/github/stars/FreedomIntelligence/gamecraft-bench?style=flat-square&logo=github&label=Code)](https://github.com/FreedomIntelligence/gamecraft-bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://tongxuluo.github.io/gamecraft-bench-website/)

- **PBench: A Physical AI Benchmark for World Models**  
  [![Paper](https://img.shields.io/badge/-Paper-2F6F9F?style=flat-square)](https://research.nvidia.com/labs/cosmos-lab/pbench/) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://huggingface.co/datasets/nvidia/PBench)

- **WebGen-Bench: Evaluating LLMs on Generating Interactive and Functional Websites from Scratch**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.03733) [![Code](https://img.shields.io/github/stars/mnluzimu/WebGen-Bench?style=flat-square&logo=github&label=Code)](https://github.com/mnluzimu/WebGen-Bench)

- **WorldModelBench: Judging Video Generation Models As World Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.20694) [![Code](https://img.shields.io/github/stars/WorldModelBench-Team/WorldModelBench?style=flat-square&logo=github&label=Code)](https://github.com/WorldModelBench-Team/WorldModelBench/tree/main?tab=readme-ov-file#evaluation) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://worldmodelbench-team.github.io/)

- **SWE-BENCH: CAN LANGUAGE MODELS RESOLVE REAL-WORLD GITHUB ISSUES?**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.06770) [![Code](https://img.shields.io/github/stars/SWE-bench/SWE-bench?style=flat-square&logo=github&label=Code)](https://github.com/SWE-bench/SWE-bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://www.swebench.com/SWE-bench/)

### Robotic Systems

#### Sim

- **Dream.exe: Can Video Generation Models Dream Executable Robot Manipulation?**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.04811) [![Code](https://img.shields.io/github/stars/showlab/Dream.exe?style=flat-square&logo=github&label=Code)](https://github.com/showlab/Dream.exe)

- **MiraBench: Evaluating Action-Conditioned Reliability in Robotic World Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.29360)

- **SafeManip: A Property-Driven Benchmark for Temporal Safety Evaluation in Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.12386) [![Code](https://img.shields.io/github/stars/chengyuehuang511/SafeManip?style=flat-square&logo=github&label=Code)](https://github.com/chengyuehuang511/SafeManip) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://hvkhcm.github.io/projects/safemanip/)

- **RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.09860) [![Code](https://img.shields.io/github/stars/NVLabs/RoboLab?style=flat-square&logo=github&label=Code)](https://github.com/NVLabs/RoboLab) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://research.nvidia.com/labs/srl/projects/robolab/)

- **RoboCasa365: A Large-Scale Simulation Framework for Training and Benchmarking Generalist Robots**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.04356) [![Code](https://img.shields.io/github/stars/robocasa/robocasa?style=flat-square&logo=github&label=Code)](https://github.com/robocasa/robocasa) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robocasa.ai/)

- **LIBERO-PRO: Towards Robust and Fair Evaluation of Vision-Language-Action Models Beyond Memorization**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.03827) [![Code](https://img.shields.io/github/stars/Zxy-MLlab/LIBERO-PRO?style=flat-square&logo=github&label=Code)](https://github.com/Zxy-MLlab/LIBERO-PRO) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://zxy-mllab.github.io/LIBERO-PRO-Webpage/)

- **Meta-World+: An Improved, Standardized, RL Benchmark**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11289) [![Code](https://img.shields.io/github/stars/Farama-Foundation/Metaworld?style=flat-square&logo=github&label=Code)](https://github.com/Farama-Foundation/Metaworld) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://metaworld.farama.org/)

- **VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation with Long-Horizon Reasoning Tasks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.18194) [![Code](https://img.shields.io/github/stars/OpenMOSS/VLABench?style=flat-square&logo=github&label=Code)](https://github.com/OpenMOSS/VLABench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://vlabench.github.io/)

- **GOAT-Bench: A Benchmark for Multi-Modal Lifelong Navigation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.06609) [![Code](https://img.shields.io/github/stars/Ram81/goat-bench?style=flat-square&logo=github&label=Code)](https://github.com/Ram81/goat-bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://mukulkhanna.github.io/goat-bench/)

- **BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.09227) [![Code](https://img.shields.io/github/stars/StanfordVL/BEHAVIOR-1K?style=flat-square&logo=github&label=Code)](https://github.com/StanfordVL/BEHAVIOR-1K) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://behavior.stanford.edu/index.html)

- **Safety-Gymnasium: A Unified Safe Reinforcement Learning Benchmark**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.12567) [![Code](https://img.shields.io/github/stars/PKU-Alignment/safety-gymnasium?style=flat-square&logo=github&label=Code)](https://github.com/PKU-Alignment/safety-gymnasium) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://safety-gymnasium.readthedocs.io/en/latest/)

- **LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2306.03310) [![Code](https://img.shields.io/github/stars/Lifelong-Robot-Learning/LIBERO?style=flat-square&logo=github&label=Code)](https://github.com/Lifelong-Robot-Learning/LIBERO) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://libero-project.github.io/intro.html)

- **ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2302.04659) [![Code](https://img.shields.io/github/stars/mani-skill/ManiSkill?style=flat-square&logo=github&label=Code)](https://github.com/mani-skill/ManiSkill) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://maniskill2.github.io/)

- **CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2112.03227) [![Code](https://img.shields.io/github/stars/mees/calvin?style=flat-square&logo=github&label=Code)](https://github.com/mees/calvin) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](http://calvin.cs.uni-freiburg.de/)

- **TEACh: Task-driven Embodied Agents that Chat**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2110.00534) [![Code](https://img.shields.io/github/stars/alexa/teach?style=flat-square&logo=github&label=Code)](https://github.com/alexa/teach)

- **robosuite: A Modular Simulation Framework and Benchmark for Robot Learning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2009.12293) [![Code](https://img.shields.io/github/stars/ARISE-Initiative/robosuite?style=flat-square&logo=github&label=Code)](https://github.com/ARISE-Initiative/robosuite) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robosuite.ai/)

- **ALFRED: A Benchmark for Interpreting Grounded Instructions for Everyday Tasks**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01734) [![Code](https://img.shields.io/github/stars/askforalfred/alfred?style=flat-square&logo=github&label=Code)](https://github.com/askforalfred/alfred) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://askforalfred.com/)

- **Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1910.10897) [![Code](https://img.shields.io/github/stars/Farama-Foundation/Metaworld?style=flat-square&logo=github&label=Code)](https://github.com/Farama-Foundation/Metaworld) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://metaworld.farama.org/)

- **RLBench: The Robot Learning Benchmark and Learning Environment**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1909.12271) [![Code](https://img.shields.io/github/stars/stepjam/RLBench?style=flat-square&logo=github&label=Code)](https://github.com/stepjam/RLBench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://sites.google.com/view/rlbench)

- **Vision-and-Language Navigation: Interpreting visually-grounded navigation instructions in real environments**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/1711.07280) [![Code](https://img.shields.io/github/stars/peteanderson80/Matterport3DSimulator?style=flat-square&logo=github&label=Code)](https://github.com/peteanderson80/Matterport3DSimulator) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://bringmeaspoon.org)

#### Real

- **PhAIL: A Real-Robot VLA Benchmark and Distributional Methodology**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.29710) [![Code](https://img.shields.io/github/stars/Positronic-Robotics/phail-paper?style=flat-square&logo=github&label=Code)](https://github.com/Positronic-Robotics/phail-paper)

- **VLA-REPLICA: A Low-Cost, Reproducible Benchmark for Real-World Evaluation of Vision-Language-Action Models**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.20774) [![Code](https://img.shields.io/github/stars/IRVLUTD/VLAReplica?style=flat-square&logo=github&label=Code)](https://github.com/IRVLUTD/VLAReplica) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://irvlutd.github.io/VLAReplica/)

- **RoboChallenge: Large-scale Real-robot Evaluation of Embodied Policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.17950) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robochallenge.ai/home)

- **RoboArena: Distributed Real-World Evaluation of Generalist Robot Policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.18123) [![Code](https://img.shields.io/github/stars/robo-arena/roboarena?style=flat-square&logo=github&label=Code)](https://github.com/robo-arena/roboarena) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robo-arena.github.io/)

- **AutoEval: Autonomous Evaluation of Generalist Robot Manipulation Policies in the Real World**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.24278) [![Code](https://img.shields.io/github/stars/zhouzypaul/auto_eval?style=flat-square&logo=github&label=Code)](https://github.com/zhouzypaul/auto_eval) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://auto-eval.github.io)

- **BEHAVIOR Robot Suite: Streamlining Real-World Whole-Body Manipulation for Everyday Household Activities**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.05652) [![Code](https://img.shields.io/github/stars/behavior-robot-suite/brs-algo?style=flat-square&logo=github&label=Code)](https://github.com/behavior-robot-suite/brs-algo) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://behavior-robot-suite.github.io/)

- **FMB: a Functional Manipulation Benchmark for Generalizable Robotic Learning**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.08553) [![Code](https://img.shields.io/github/stars/rail-berkeley/fmb?style=flat-square&logo=github&label=Code)](https://github.com/rail-berkeley/fmb) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://functional-manipulation-benchmark.github.io/)

- **FurnitureBench: Reproducible Real-World Benchmark for Long-Horizon Complex Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.12821) [![Code](https://img.shields.io/github/stars/clvrai/furniture-bench?style=flat-square&logo=github&label=Code)](https://github.com/clvrai/furniture-bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://clvrai.github.io/furniture-bench/)

#### Hybrid

- **RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.04434) [![Code](https://img.shields.io/github/stars/robodojo-benchmark/RoboDojo?style=flat-square&logo=github&label=Code)](https://github.com/robodojo-benchmark/RoboDojo) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robodojo-benchmark.com/)

- **Assistance Without Interruption: A Benchmark and LLM-based Framework for Non-Intrusive Human-Robot Assistance**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.01368) [![Code](https://img.shields.io/github/stars/Cognition2Action-Lab/NIABench?style=flat-square&logo=github&label=Code)](https://github.com/Cognition2Action-Lab/NIABench.git) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://renytek13.github.io/assistance-without-interruption/)

- **RoboWM-Bench: A Benchmark for Evaluating World Models in Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19092) [![Code](https://img.shields.io/github/stars/fffstrong/RoboWM-Bench?style=flat-square&logo=github&label=Code)](https://github.com/fffstrong/RoboWM-Bench) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robowm-bench.github.io/RoboWM-Bench/)

- **RobotArena ∞: Scalable Robot Benchmarking via Real-to-Sim Translation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.23571) [![Code](https://img.shields.io/github/stars/offjangir/RobotArena?style=flat-square&logo=github&label=Code)](https://github.com/offjangir/RobotArena) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotarenainf.github.io/)

- **RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.18088) [![Code](https://img.shields.io/github/stars/robotwin-Platform/RoboTwin?style=flat-square&logo=github&label=Code)](https://github.com/robotwin-Platform/RoboTwin) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotwin-platform.github.io/)

- **RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.13059) [![Code](https://img.shields.io/github/stars/robotwin-Platform/RoboTwin?style=flat-square&logo=github&label=Code)](https://github.com/robotwin-Platform/RoboTwin) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://robotwin-platform.github.io/)

- **Evaluating Real-World Robot Manipulation Policies in Simulation**  
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.05941) [![Code](https://img.shields.io/github/stars/simpler-env/SimplerEnv?style=flat-square&logo=github&label=Code)](https://github.com/simpler-env/SimplerEnv) [![Project](https://img.shields.io/badge/-Project-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://simpler-env.github.io/)

- **HomeRobot: Open-Vocabulary Mobile Manipulation**  
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
