'use client';

import { useState, type CSSProperties } from 'react';

const comparisons = [
  {
    letter: 'P', name: 'Perceive', color: '#E85F52', target: 'Task-directed embodied inquiry',
    mma: { shared: 'Task-level information need and multimodal evidence integration', changed: 'Evidence must be actively acquired through a situated body.' },
    robot: { shared: 'Sensor evidence grounds an actionable physical state', changed: 'The evolving task dynamically forms the information question.' },
    outcome: 'Qualified belief for the next task decision',
  },
  {
    letter: 'A', name: 'Anticipate', color: '#D88A2D', target: 'Task-selected physical futures',
    mma: { shared: 'Action-conditioned prediction serves task-level reasoning', changed: 'Forecasts must respect contact, dynamics, uncertainty, and realizability.' },
    robot: { shared: 'Physical dynamics are modeled under candidate controls', changed: 'The task selects which counterfactual matters for commitment.' },
    outcome: 'A calibrated signal for whether to commit',
  },
  {
    letter: 'P', name: 'Plan', color: '#3A9A87', target: 'Executable, recoverable commitment',
    mma: { shared: 'Goals are decomposed and actions selected under constraints', changed: 'Recovery begins from a physically altered, sometimes irreversible state.' },
    robot: { shared: 'Feasible policies, motions, and controls are searched', changed: 'Task-level agency governs commitment, stopping, clarification, and recovery.' },
    outcome: 'A plan that is both semantically valid and physically feasible',
  },
  {
    letter: 'A', name: 'Act', color: '#347FB8', target: 'Task-visible physical execution',
    mma: { shared: 'Semantic intention is grounded into an interface-valid action', changed: 'The interface expands to body, trajectory, contact, timing, and safety.' },
    robot: { shared: 'Decisions are realized through closed-loop physical control', changed: 'Progress, interruption, and failure become visible to task-level agency.' },
    outcome: 'A revisable contract between intent and body-specific control',
  },
  {
    letter: 'V', name: 'Verify', color: '#7564BC', target: 'Physically grounded loop closure',
    mma: { shared: 'Expected and observed outcomes are compared for the task', changed: 'A verdict requires post-action physical evidence, not model confidence.' },
    robot: { shared: 'Execution is monitored against a desired physical state', changed: 'The verdict must be consumed by planning, recovery, or belief revision.' },
    outcome: 'A verdict that changes what the agent does next',
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
          <h2 id="comparison-title">One map.<br />Two comparisons.</h2>
        </div>
        <p>Position reveals similarity; distance reveals difference. MMEA aligns vertically with multimodal agents on task-level agency, and horizontally with robotic systems on physical embodiment.</p>
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

      <div className="coordinate-visual" key={item.name} style={{ '--capability': item.color } as CSSProperties}>
        <div className="coordinate-key">
          <span><i className="coordinate-sim" /> Alignment = similarity retained</span>
          <span><i className="coordinate-diff" /> Distance = condition changed</span>
          <strong>{item.name}</strong>
        </div>

        <div className="agency-plane">
          <div className="plane-grid" aria-hidden="true" />
          <div className="plane-quadrant q-digital-control"><span>Digital<br />automation</span><small>outside survey focus</small></div>

          <div className="plane-axis axis-agency" aria-hidden="true">
            <span>Supplied-goal control</span><strong>Task-level agency →</strong>
          </div>
          <div className="plane-axis axis-embodiment" aria-hidden="true">
            <span>Digital closure</span><strong>Physical embodiment →</strong>
          </div>

          <div className="coordinate-route route-robot" aria-hidden="true">
            <i />
            <span className="route-similarity">same physical relation</span>
            <span className="route-difference">adds task-level agency</span>
          </div>
          <div className="coordinate-route route-mma" aria-hidden="true">
            <i />
            <span className="route-similarity">same agentic relation</span>
            <span className="route-difference">adds physical closure</span>
          </div>

          <SystemPoint code="RS" name="Robotic system" descriptor="Embodied + control-centric" className="point-rs" />
          <SystemPoint code="MMA" name="Multimodal agent" descriptor="Agentic + digital" className="point-mma" />

          <article className="coordinate-target">
            <header><span>{item.letter}</span><small>MMEA · {item.name}</small></header>
            <h3>{item.target}</h3>
            <p>{item.outcome}</p>
          </article>
        </div>

        <div className="coordinate-explanations">
          <article>
            <header><b>MMA</b><span>→</span><strong>MMEA</strong></header>
            <div><small>Similarity retained</small><p>{item.mma.shared}</p></div>
            <div><small>Difference introduced</small><p>{item.mma.changed}</p></div>
          </article>
          <article>
            <header><b>RS</b><span>→</span><strong>MMEA</strong></header>
            <div><small>Similarity retained</small><p>{item.robot.shared}</p></div>
            <div><small>Difference introduced</small><p>{item.robot.changed}</p></div>
          </article>
        </div>

        <div className="coordinate-reading">
          <span>How to read</span>
          <p><b>MMEA–MMA:</b> same task-level agency, different degree of physical closure. <b>MMEA–RS:</b> same physical embodiment, different source and governance of the task.</p>
        </div>
      </div>
    </section>
  );
}

function SystemPoint({ code, name, descriptor, className }: { code: string; name: string; descriptor: string; className: string }) {
  return (
    <article className={`coordinate-point ${className}`}>
      <b>{code}</b>
      <strong>{name}</strong>
      <small>{descriptor}</small>
    </article>
  );
}
