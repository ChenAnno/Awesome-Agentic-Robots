'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';

type Branch = 'root' | 'robotics' | 'embodied' | 'digital';

type TreeNode = {
  id: string;
  title: string;
  year: number;
  x: number;
  branch: Branch;
  parent?: string;
  kind: 'System' | 'Model' | 'Benchmark';
  detail: string;
};

const nodes: TreeNode[] = [
  { id: 'root', title: 'Embodied agency', year: 2017, x: 50, branch: 'root', kind: 'System', detail: 'The shared root: agents sensing, deciding, and intervening in an environment.' },
  { id: 'dvf', title: 'Deep Visual Foresight', year: 2017, x: 9, branch: 'robotics', parent: 'root', kind: 'Model', detail: 'Visual prediction supports action selection for robotic manipulation.' },
  { id: 'dexnet', title: 'Dex-Net 2.0', year: 2017, x: 19, branch: 'robotics', parent: 'root', kind: 'Model', detail: 'Synthetic grasp data connects perception to robust physical control.' },
  { id: 'r2r', title: 'R2R-VLN', year: 2018, x: 20, branch: 'robotics', parent: 'dexnet', kind: 'Benchmark', detail: 'Language-guided navigation links semantic goals to embodied trajectories.' },
  { id: 'alfred', title: 'ALFRED', year: 2020, x: 10, branch: 'robotics', parent: 'r2r', kind: 'Benchmark', detail: 'Long-horizon household tasks connect language, vision, and action.' },
  { id: 'kimera', title: 'Kimera', year: 2020, x: 28, branch: 'robotics', parent: 'r2r', kind: 'System', detail: 'Persistent spatial and semantic representations ground embodied perception.' },
  { id: 'saycan', title: 'SayCan', year: 2022, x: 39, branch: 'embodied', parent: 'alfred', kind: 'System', detail: 'Language-model proposals are grounded through learned robotic affordances.' },
  { id: 'inner', title: 'Inner Monologue', year: 2022, x: 54, branch: 'embodied', parent: 'alfred', kind: 'System', detail: 'Scene feedback and success signals close the planning loop.' },
  { id: 'rt2', title: 'RT-2', year: 2023, x: 19, branch: 'robotics', parent: 'kimera', kind: 'Model', detail: 'Vision-language knowledge transfers into generalizable robotic control.' },
  { id: 'palme', title: 'PaLM-E', year: 2023, x: 45, branch: 'embodied', parent: 'saycan', kind: 'Model', detail: 'Embodied multimodal representations connect language and sensor streams.' },
  { id: 'reflect', title: 'REFLECT', year: 2023, x: 59, branch: 'embodied', parent: 'inner', kind: 'System', detail: 'Failure explanation and correction make verification operational.' },
  { id: 'avis', title: 'AVIS', year: 2023, x: 77, branch: 'digital', parent: 'root', kind: 'System', detail: 'Adaptive tool use turns information seeking into a decision loop.' },
  { id: 'mmreact', title: 'MM-REACT', year: 2023, x: 89, branch: 'digital', parent: 'avis', kind: 'System', detail: 'Multimodal reasoning coordinates specialist tools in digital environments.' },
  { id: 'robodreamer', title: 'RoboDreamer', year: 2024, x: 19, branch: 'robotics', parent: 'rt2', kind: 'Model', detail: 'World-model imagination supports robotic planning before execution.' },
  { id: 'aha', title: 'AHA', year: 2024, x: 36, branch: 'embodied', parent: 'saycan', kind: 'Benchmark', detail: 'Embodied evaluation exposes hallucination and recovery behavior.' },
  { id: 'rekep', title: 'ReKep', year: 2024, x: 61, branch: 'embodied', parent: 'reflect', kind: 'System', detail: 'Relational keypoint constraints structure long-horizon manipulation.' },
  { id: 'visualwebarena', title: 'VisualWebArena', year: 2024, x: 76, branch: 'digital', parent: 'avis', kind: 'Benchmark', detail: 'Visual web tasks expose grounded reasoning over realistic interfaces.' },
  { id: 'osworld', title: 'OSWorld', year: 2024, x: 89, branch: 'digital', parent: 'mmreact', kind: 'Benchmark', detail: 'Computer-use agents are evaluated against observable application state.' },
  { id: 'roboarena', title: 'RoboArena', year: 2025, x: 27, branch: 'robotics', parent: 'robodreamer', kind: 'Benchmark', detail: 'Real-world evaluation adds environmental and execution variability.' },
  { id: 'reflective', title: 'Reflective Planning', year: 2025, x: 42, branch: 'embodied', parent: 'aha', kind: 'System', detail: 'Reflection links planning decisions to feedback and correction.' },
  { id: 'gemini', title: 'Gemini Robotics 1.5', year: 2025, x: 61, branch: 'embodied', parent: 'rekep', kind: 'System', detail: 'Generalist multimodal reasoning and physical action converge.' },
  { id: 'agents2', title: 'Agent S2', year: 2025, x: 73, branch: 'digital', parent: 'visualwebarena', kind: 'System', detail: 'Specialized agents coordinate perception, planning, and GUI interaction.' },
  { id: 'showui', title: 'ShowUI', year: 2025, x: 89, branch: 'digital', parent: 'osworld', kind: 'Model', detail: 'Vision-language-action modeling advances generalist GUI interaction.' },
  { id: 'metaworlds', title: 'Meta-Worlds', year: 2026, x: 8, branch: 'robotics', parent: 'roboarena', kind: 'Benchmark', detail: 'A current benchmark frontier for evaluating robotic interaction.' },
  { id: 'robolab', title: 'RoboLab', year: 2026, x: 22, branch: 'robotics', parent: 'roboarena', kind: 'System', detail: 'An integrated platform for studying capable robotic agents.' },
  { id: 'recursive', title: 'Recursive Belief VLA', year: 2026, x: 36, branch: 'embodied', parent: 'reflective', kind: 'Model', detail: 'Recursive belief updates connect observation, action, and task progress.' },
  { id: 'wla', title: 'World-Language-Action', year: 2026, x: 50, branch: 'embodied', parent: 'reflective', kind: 'Model', detail: 'World modeling and language reasoning are coupled to physical action.' },
  { id: 'adapt', title: 'ADAPT', year: 2026, x: 64, branch: 'embodied', parent: 'gemini', kind: 'System', detail: 'Closed-loop adaptation connects PAPAV capabilities across task progress.' },
  { id: 'osworld2', title: 'OS World 2.0', year: 2026, x: 78, branch: 'digital', parent: 'agents2', kind: 'Benchmark', detail: 'Broader operating-system tasks stress generalist digital agents.' },
  { id: 'code2world', title: 'Code2World', year: 2026, x: 91, branch: 'digital', parent: 'showui', kind: 'Model', detail: 'Executable world representations support prospective digital interaction.' },
];

const branchLabels: Record<Branch, string> = {
  root: 'Shared root',
  robotics: 'Robotic systems',
  embodied: 'MM embodied agents',
  digital: 'Multimodal agents',
};

const milestones = [2017, 2020, 2022, 2024, 2026];
const round = (value: number) => Number(value.toFixed(3));
const yForYear = (year: number) => round(91 - ((year - 2017) / 9) * 76);

function lineStyle(node: TreeNode, parent: TreeNode): CSSProperties {
  const dx = node.x - parent.x;
  const dy = yForYear(node.year) - yForYear(parent.year);
  const scaledDy = dy * 0.67;
  const length = Math.hypot(dx, scaledDy);
  const angle = Math.atan2(scaledDy, dx) * (180 / Math.PI);

  return {
    left: `${parent.x}%`,
    top: `${yForYear(parent.year)}%`,
    width: `${round(length)}%`,
    transform: `rotate(${round(angle)}deg)`,
  };
}

export default function EvolutionTree() {
  const [activeYear, setActiveYear] = useState(2017);
  const [filter, setFilter] = useState<Branch>('root');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedId, setSelectedId] = useState('root');
  const [hasEntered, setHasEntered] = useState(false);
  const treeRef = useRef<HTMLDivElement>(null);
  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), []);
  const selected = nodeMap.get(selectedId) ?? nodes[0];

  useEffect(() => {
    const element = treeRef.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timer = window.setTimeout(() => {
        setActiveYear(2026);
        setHasEntered(true);
      }, 0);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEntered(true);
        setIsPlaying(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveYear((year) => {
        if (year >= 2026) {
          setIsPlaying(false);
          return year;
        }
        return year + 1;
      });
    }, 700);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const replay = () => {
    if (activeYear >= 2026) setActiveYear(2017);
    setIsPlaying((playing) => !playing || activeYear >= 2026);
  };

  const matchesFilter = (branch: Branch) => filter === 'root' || branch === filter || branch === 'root';

  return (
    <div className="evolution-tree" ref={treeRef}>
      <div className="tree-toolbar">
        <div>
          <span className="tree-live-dot" />
          <strong>Evolution tree</strong>
          <small>{hasEntered ? `Latest paper · growing through ${activeYear}` : 'Latest paper · ready to grow'}</small>
        </div>
        <div className="tree-filters" aria-label="Filter evolution branches">
          {(['root', 'robotics', 'embodied', 'digital'] as Branch[]).map((branch) => (
            <button
              type="button"
              key={branch}
              className={filter === branch ? 'active' : ''}
              onClick={() => setFilter(branch)}
              aria-pressed={filter === branch}
            >
              {branch === 'root' ? 'All branches' : branchLabels[branch]}
            </button>
          ))}
        </div>
        <button className="tree-play" type="button" onClick={replay} aria-label={isPlaying ? 'Pause timeline' : 'Play timeline'}>
          <span>{isPlaying ? 'Ⅱ' : '▶'}</span>{activeYear >= 2026 && !isPlaying ? 'Replay' : isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      <div className="tree-canvas" aria-label={`Interactive evolution tree shown through ${activeYear}`}>
        <div className="tree-year-axis" aria-hidden="true">
          {[2026, 2025, 2024, 2023, 2022, 2020, 2018, 2017].map((year) => (
            <span key={year} style={{ top: `${yForYear(year)}%` }}>{year}</span>
          ))}
        </div>
        <div className="tree-canopy-labels" aria-hidden="true">
          <span>ROBOTIC SYSTEMS</span>
          <span>MM EMBODIED AGENTS</span>
          <span>MULTIMODAL AGENTS</span>
        </div>
        <div className="tree-ground" aria-hidden="true" />

        {nodes.filter((node) => node.parent).map((node) => {
          const parent = nodeMap.get(node.parent!);
          if (!parent) return null;
          const visible = node.year <= activeYear && parent.year <= activeYear;
          const relevant = matchesFilter(node.branch);
          return (
            <i
              className={`tree-branch branch-${node.branch} ${visible ? 'visible' : ''} ${relevant ? '' : 'muted'}`}
              style={lineStyle(node, parent)}
              key={`line-${node.id}`}
              aria-hidden="true"
            />
          );
        })}

        {nodes.map((node) => {
          const visible = node.year <= activeYear;
          const relevant = matchesFilter(node.branch);
          return (
            <button
              type="button"
              key={node.id}
              className={`tree-node node-${node.branch} ${visible ? 'visible' : ''} ${relevant ? '' : 'muted'} ${selectedId === node.id ? 'selected' : ''}`}
              style={{ left: `${node.x}%`, top: `${yForYear(node.year)}%` }}
              onClick={() => setSelectedId(node.id)}
              tabIndex={visible ? 0 : -1}
              aria-label={`${node.title}, ${node.year}, ${branchLabels[node.branch]}`}
            >
              <span>{node.title}</span>
              <small>{node.kind}</small>
            </button>
          );
        })}
      </div>

      <div className="tree-timeline">
        <span>2017</span>
        <input
          type="range"
          min="2017"
          max="2026"
          value={activeYear}
          onChange={(event) => { setActiveYear(Number(event.target.value)); setIsPlaying(false); }}
          aria-label="Evolution year"
        />
        <span>2026</span>
        <div className="tree-milestones" aria-hidden="true">
          {milestones.map((year) => <i key={year} style={{ left: `${((year - 2017) / 9) * 100}%` }}>{year}</i>)}
        </div>
      </div>

      <div className={`tree-detail detail-${selected.branch}`} aria-live="polite">
        <div><span>{selected.year}</span><small>{selected.kind}</small></div>
        <strong>{selected.title}</strong>
        <p>{selected.detail}</p>
        <div className="tree-detail-links">
          <em>{branchLabels[selected.branch]}</em>
          <a href="evolution-tree-2026.jpg" target="_blank" rel="noopener noreferrer">Full 112-entry tree ↗</a>
        </div>
      </div>
    </div>
  );
}
