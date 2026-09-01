'use client';

import { useState, type CSSProperties } from 'react';

type Flow = {
  code: string;
  input: [string, string];
  output: [string, string];
  caption: string;
};

const comparisons: Array<{
  letter: string;
  name: string;
  color: string;
  left: [Flow, Flow];
  shared: { image: string; title: string; detail: string };
  right: [Flow, Flow];
}> = [
  {
    letter: 'P', name: 'Perceive', color: '#E85F52',
    left: [
      { code: 'MMA', input: ['ppt-icons/image6.png', 'Inspect / query'], output: ['ppt-icons/image7.png', 'Digital evidence'], caption: 'Digital evidence inquiry' },
      { code: 'MMEA', input: ['ppt-icons/image8.png', 'Inspect / query'], output: ['ppt-icons/image9.png', 'Physical evidence'], caption: 'Physical evidence inquiry' },
    ],
    shared: { image: 'ppt-icons/image51.png', title: 'Multimodal evidence grounding', detail: 'All three traditions integrate heterogeneous observations into an actionable state.' },
    right: [
      { code: 'MMEA', input: ['ppt-icons/image15.png', 'Evidence gap'], output: ['ppt-icons/image16.png', 'Perceptual autoselection'], caption: 'Task-formed inquiry' },
      { code: 'ROBOTICS', input: ['ppt-icons/image17.png', 'External percept target'], output: ['ppt-icons/image18.png', 'Targeted measurement'], caption: 'Supplied sensing goal' },
    ],
  },
  {
    letter: 'A', name: 'Anticipate', color: '#D88A2D',
    left: [
      { code: 'MMA', input: ['ppt-icons/image11.png', 'Software intervention'], output: ['ppt-icons/image12.png', 'Rule-bounded future'], caption: 'Rule-bounded forecasts' },
      { code: 'MMEA', input: ['ppt-icons/image13.png', 'Physical intervention'], output: ['ppt-icons/image14.png', 'Risk-qualified future'], caption: 'Qualified physical forecasts' },
    ],
    shared: { image: 'ppt-icons/image50.png', title: 'State-transition forecasting', detail: 'Each system models how a candidate intervention may change the environment.' },
    right: [
      { code: 'MMEA', input: ['ppt-icons/image19.png', 'Task forecast need'], output: ['ppt-icons/image20.png', 'Task-relevant futures'], caption: 'Task-selected counterfactuals' },
      { code: 'ROBOTICS', input: ['ppt-icons/image21.png', 'Control objective'], output: ['ppt-icons/image22.png', 'Predicted trajectories'], caption: 'Control-scoped counterfactuals' },
    ],
  },
  {
    letter: 'P', name: 'Plan', color: '#3A9A87',
    left: [
      { code: 'MMA', input: ['ppt-icons/image24.png', 'Digital checkpoint'], output: ['ppt-icons/image23.png', 'Reversible plan'], caption: 'Snapshot-backed planning' },
      { code: 'MMEA', input: ['ppt-icons/image25.png', 'Altered physical state'], output: ['ppt-icons/image26.png', 'Contingency plan'], caption: 'Changed-state planning' },
    ],
    shared: { image: 'ppt-icons/image52.png', title: 'Constraint-aware planning', detail: 'All three propose and select a course under goals, affordances, and constraints.' },
    right: [
      { code: 'MMEA', input: ['ppt-icons/image27.png', 'Task failure context'], output: ['ppt-icons/image28.png', 'Revised task course'], caption: 'Task-level recovery' },
      { code: 'ROBOTICS', input: ['ppt-icons/image29.png', 'Local skill failure'], output: ['ppt-icons/image30.png', 'Revised skill course'], caption: 'Skill-level recovery' },
    ],
  },
  {
    letter: 'A', name: 'Act', color: '#347FB8',
    left: [
      { code: 'MMA', input: ['ppt-icons/image31.png', 'Semantic intent'], output: ['ppt-icons/image32.png', 'Interface event'], caption: 'Interface-level actions' },
      { code: 'MMEA', input: ['ppt-icons/image33.png', 'Semantic intent'], output: ['ppt-icons/image34.png', 'Physical execution'], caption: 'Body-grounded actions' },
    ],
    shared: { image: 'ppt-icons/image53.png', title: 'Semantic action grounding', detail: 'Each system maps a semantic intervention into an environment-valid action.' },
    right: [
      { code: 'MMEA', input: ['ppt-icons/image35.png', 'Task command'], output: ['ppt-icons/image36.png', 'Visible execution state'], caption: 'Task-visible execution' },
      { code: 'ROBOTICS', input: ['ppt-icons/image37.png', 'Control target'], output: ['ppt-icons/image38.png', 'Local execution state'], caption: 'Controller-local execution' },
    ],
  },
  {
    letter: 'V', name: 'Verify', color: '#7564BC',
    left: [
      { code: 'MMA', input: ['ppt-icons/image43.png', 'Structured state'], output: ['ppt-icons/image44.png', 'Functional verdict'], caption: 'Structured digital verdicts' },
      { code: 'MMEA', input: ['ppt-icons/image39.png', 'Physical evidence'], output: ['ppt-icons/image45.png', 'Calibrated verdict'], caption: 'Calibrated physical verdicts' },
    ],
    shared: { image: 'ppt-icons/image54.png', title: 'Evidence-grounded verification', detail: 'Each system compares observed and expected outcomes to form corrective feedback.' },
    right: [
      { code: 'MMEA', input: ['ppt-icons/image46.png', 'Physical verdict'], output: ['ppt-icons/image47.png', 'Task state update'], caption: 'Task-level verdicts' },
      { code: 'ROBOTICS', input: ['ppt-icons/image48.png', 'Monitor verdict'], output: ['ppt-icons/image49.png', 'Skill state update'], caption: 'Skill-local verdicts' },
    ],
  },
];

export default function SimilarityDifference() {
  const [active, setActive] = useState(0);
  const item = comparisons[active];

  return (
    <section className="comparison-section" id="comparison" aria-labelledby="comparison-title">
      <div className="comparison-heading">
        <div>
          <p className="section-kicker">Similarity × Difference</p>
          <h2 id="comparison-title">One shared relation.<br />Two boundaries.</h2>
        </div>
        <p>Following the paper figure, the center isolates the capability shared by MMA, MMEA, and robotic systems. The two sides show exactly how MMEA departs from each neighboring tradition.</p>
      </div>

      <div className="comparison-tabs" aria-label="Select PAPAV capability">
        {comparisons.map((entry, index) => (
          <button
            type="button"
            key={entry.name}
            onClick={() => setActive(index)}
            className={active === index ? 'active' : ''}
            style={{ '--capability': entry.color } as CSSProperties}
            aria-pressed={active === index}
          >
            <span>{entry.letter}</span>
            <strong>{entry.name}</strong>
            <small>0{index + 1}</small>
          </button>
        ))}
      </div>

      <div className="triptych-visual" key={item.name} style={{ '--capability': item.color } as CSSProperties}>
        <ComparisonColumn label="Difference from MMA" note="Digital → physical evidence and action" flows={item.left} side="left" />

        <article className="shared-capability">
          <header><span>Similarity</span><strong>Shared capability</strong></header>
          <div className="shared-artwork"><img src={item.shared.image} alt="" /></div>
          <small>{item.letter} · {item.name}</small>
          <h3>{item.shared.title}</h3>
          <p>{item.shared.detail}</p>
        </article>

        <ComparisonColumn label="Difference from Robotics" note="Supplied control → task-formed agency" flows={item.right} side="right" />
      </div>

      <div className="triptych-reading" aria-label="How to read the comparison">
        <span>Reading guide</span>
        <div className="triptych-reading-grid">
          <article className="reading-left">
            <small><b>01</b> Left boundary</small>
            <strong>Embodiment shift</strong>
            <p>What physical embodiment changes relative to multimodal agents.</p>
          </article>
          <article className="reading-center">
            <small><b>02</b> Shared relation</small>
            <strong>Common capability</strong>
            <p>The input–output relation shared across all three traditions.</p>
          </article>
          <article className="reading-right">
            <small><b>03</b> Right boundary</small>
            <strong>Agency shift</strong>
            <p>What task-level agency changes relative to robotic systems.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ComparisonColumn({ label, note, flows, side }: { label: string; note: string; flows: [Flow, Flow]; side: 'left' | 'right' }) {
  return (
    <div className={`comparison-column comparison-column-${side}`}>
      <header className="column-heading"><span>Difference</span><strong>{label}</strong><small>{note}</small></header>
      <div className="paired-flows">
        {flows.map((flow) => <FlowCard key={`${flow.code}-${flow.caption}`} flow={flow} />)}
      </div>
    </div>
  );
}

function FlowCard({ flow }: { flow: Flow }) {
  return (
    <article className={`flow-card flow-${flow.code.toLowerCase()}`}>
      <header>{flow.code}</header>
      <div className="flow-sequence">
        <div><img src={flow.input[0]} alt="" /><span>{flow.input[1]}</span></div>
        <i aria-hidden="true">→</i>
        <div><img src={flow.output[0]} alt="" /><span>{flow.output[1]}</span></div>
      </div>
      <strong>{flow.caption}</strong>
    </article>
  );
}
