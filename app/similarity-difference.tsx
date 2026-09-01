'use client';

import { useState, type CSSProperties } from 'react';

const comparisons = [
  {
    letter: 'P', name: 'Perceive', color: '#E85F52',
    mma: { similarity: 'Integrate multimodal evidence into a task-relevant state', difference: 'Evidence acquisition is qualified by viewpoint, contact, timing, energy, and disturbance.' },
    robot: { similarity: 'Ground sensory evidence in an estimate of physical state', difference: 'The evolving task—not a fixed estimator—forms the information question.' },
    synthesis: 'Task-directed embodied inquiry → qualified belief',
    result: 'Perception becomes an active decision about what evidence the task still needs and how a body can safely obtain it.',
  },
  {
    letter: 'A', name: 'Anticipate', color: '#D88A2D',
    mma: { similarity: 'Predict consequences of candidate actions', difference: 'Forecasts must be calibrated against contact, dynamics, uncertainty, and physical realizability.' },
    robot: { similarity: 'Model physical dynamics under candidate controls', difference: 'Task-level agency selects which counterfactual matters and uses it to alter commitment.' },
    synthesis: 'Task-selected physical futures → commitment signal',
    result: 'Prediction is useful only when a task chooses the relevant future and the body can plausibly realize it.',
  },
  {
    letter: 'P', name: 'Plan', color: '#3A9A87',
    mma: { similarity: 'Decompose goals and select a sequence under constraints', difference: 'Recovery begins from a physically altered—and sometimes irreversible—world state.' },
    robot: { similarity: 'Search for feasible policies, motions, and controls', difference: 'The task-level agent governs when to commit, stop, clarify, escalate, or recover.' },
    synthesis: 'Executable, recoverable commitment',
    result: 'Planning connects semantic intent to feasible action while explicitly governing commitment and recovery.',
  },
  {
    letter: 'A', name: 'Act', color: '#347FB8',
    mma: { similarity: 'Ground semantic intention into an interface-valid action', difference: 'The interface expands from tokens and calls to bodies, trajectories, contact, timing, and safety.' },
    robot: { similarity: 'Realize decisions through closed-loop physical control', difference: 'Progress, interruption, and failure must remain visible to task-level agency.' },
    synthesis: 'Authorized plan → task-visible physical progress',
    result: 'Execution becomes a revisable contract between task-level intent and body-specific control.',
  },
  {
    letter: 'V', name: 'Verify', color: '#7564BC',
    mma: { similarity: 'Compare expected and observed outcomes', difference: 'A verdict requires post-action physical evidence—not confidence or a digital return code.' },
    robot: { similarity: 'Monitor execution against desired physical state', difference: 'The verdict must be consumed by planning, recovery, stopping, or belief revision.' },
    synthesis: 'Physically grounded verdict → loop update',
    result: 'Verification closes the agent loop only when grounded evidence changes what the task-level agent does next.',
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
          <h2 id="comparison-title">Two inheritances.<br />One new capability.</h2>
        </div>
        <p>MMEA is not the midpoint between a digital agent and a robot. It inherits a functional relation from each tradition, then changes the conditions under which that relation becomes embodied and task-level.</p>
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

      <div className="convergence-visual" key={item.name} style={{ '--capability': item.color } as CSSProperties}>
        <div className="convergence-key">
          <span><i className="key-source" /> Source tradition</span>
          <span><i className="key-similarity" /> Similarity · inherited function</span>
          <span><i className="key-difference" /> Difference · changed condition</span>
          <span><i className="key-synthesis" /> MMEA synthesis</span>
        </div>

        <div className="convergence-map">
          <div className="path-headings" aria-hidden="true">
            <span>Starts from</span><span>Retains</span><span>Transforms</span>
          </div>
          <div className="target-heading" aria-hidden="true">Converges as</div>

          <LineagePath code="MMA" name="Multimodal agent" tradition="Digital agency" similarity={item.mma.similarity} difference={item.mma.difference} />
          <LineagePath code="RS" name="Robotic system" tradition="Embodied control" similarity={item.robot.similarity} difference={item.robot.difference} />

          <article className="synthesis-card">
            <small>MMEA · {item.name}</small>
            <span>{item.letter}</span>
            <h3>{item.synthesis}</h3>
            <p>{item.result}</p>
          </article>
        </div>

        <div className="comparison-rule">
          <div><span>Similarity asks</span><strong>Which functional relation is inherited?</strong></div>
          <div><span>Difference asks</span><strong>What must change for embodied, task-level agency?</strong></div>
        </div>
      </div>
    </section>
  );
}

function LineagePath({ code, name, tradition, similarity, difference }: { code: string; name: string; tradition: string; similarity: string; difference: string }) {
  return (
    <div className={`lineage-path lineage-${code.toLowerCase()}`}>
      <div className="lineage-source">
        <b>{code}</b>
        <strong>{name}</strong>
        <small>{tradition}</small>
      </div>
      <div className="inheritance-cell similarity-cell">
        <span>Similarity</span>
        <strong>{similarity}</strong>
      </div>
      <div className="inheritance-cell difference-cell">
        <span>Difference</span>
        <strong>{difference}</strong>
      </div>
    </div>
  );
}
