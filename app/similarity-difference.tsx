'use client';

import { useState, type CSSProperties } from 'react';

const comparisons = [
  {
    letter: 'P', name: 'Perceive', color: '#E85F52', relation: 'Integrate evidence and ground an environment state',
    rows: [
      ['MMA', 'Multimodal agent', 'Multimodal observations', 'Integrate & ground', 'Digital environment state'],
      ['RS', 'Robotic system', 'Sensors + proprioception', 'Integrate & estimate', 'Physical state estimate'],
      ['MMEA', 'MM embodied agent', 'Task-formed information gap', 'Embodied acquisition + grounding', 'Qualified belief'],
    ],
    mma: { title: 'Digital evidence request → embodied inquiry', text: 'Viewpoint, contact, timing, energy, and disturbance now qualify how missing evidence can be acquired.' },
    robot: { title: 'Supplied objective → task-formed question', text: 'The evolving task state forms the semantic question; the sensing specialist controls acquisition and cost.' },
  },
  {
    letter: 'A', name: 'Anticipate', color: '#D88A2D', relation: 'Model how a candidate intervention may change the environment',
    rows: [
      ['MMA', 'Multimodal agent', 'Digital state + candidate action', 'Predict consequences', 'Inspectable future'],
      ['RS', 'Robotic system', 'Physical state + control', 'Model dynamics', 'Predicted motion / reward'],
      ['MMEA', 'MM embodied agent', 'Task-selected counterfactual', 'Prospective modeling', 'Qualified action forecast'],
    ],
    mma: { title: 'Inspectable future → qualified physical forecast', text: 'A plausible future must also be calibrated against contact, dynamics, uncertainty, and physical realizability.' },
    robot: { title: 'Control prediction → task-selected counterfactual', text: 'Prediction becomes agentic when the task chooses which possible future matters and uses it to alter commitment.' },
  },
  {
    letter: 'P', name: 'Plan', color: '#3A9A87', relation: 'Propose and select a course under goals and constraints',
    rows: [
      ['MMA', 'Multimodal agent', 'Goal + digital state', 'Propose & select', 'Tool / action sequence'],
      ['RS', 'Robotic system', 'Goal + world state', 'Search / optimize', 'Feasible policy or motion'],
      ['MMEA', 'MM embodied agent', 'Goal + belief + forecast', 'Authorize commitment', 'Executable, recoverable plan'],
    ],
    mma: { title: 'Digital recovery → altered-state recovery', text: 'Failed execution may irreversibly change the world, so recovery starts from a newly grounded physical state.' },
    robot: { title: 'Local replanning → governance of commitment', text: 'The agent decides when to commit, stop, clarify, escalate, or hand recovery to a specialized controller.' },
  },
  {
    letter: 'A', name: 'Act', color: '#347FB8', relation: 'Ground a semantic intervention into an environment-valid action',
    rows: [
      ['MMA', 'Multimodal agent', 'Semantic intention', 'Schema grounding', 'API / GUI command'],
      ['RS', 'Robotic system', 'Goal or reference', 'Body controller', 'Trajectory / control'],
      ['MMEA', 'MM embodied agent', 'Authorized plan', 'Closed-loop physical execution', 'Task-visible progress / failure'],
    ],
    mma: { title: 'Agent-facing interface → physical execution', text: 'The action interface expands from tokens and tool calls to bodies, trajectories, contact, timing, and safety limits.' },
    robot: { title: 'Goal-conditioned control → task-visible contract', text: 'Body-specific control remains local, while progress, interruption, and failure become visible to task-level agency.' },
  },
  {
    letter: 'V', name: 'Verify', color: '#7564BC', relation: 'Compare expected and observed outcomes to form a verdict',
    rows: [
      ['MMA', 'Multimodal agent', 'Expected + observed digital state', 'Compare outcomes', 'Functional result'],
      ['RS', 'Robotic system', 'Desired + observed physical state', 'Monitor execution', 'Local success / failure'],
      ['MMEA', 'MM embodied agent', 'Goal conditions + post-action evidence', 'Adjudicate outcome', 'Verdict consumed by plan'],
    ],
    mma: { title: 'Functional check → physically grounded verdict', text: 'Success must be supported by post-action physical evidence rather than model confidence or a digital return code.' },
    robot: { title: 'Local monitoring → task-level verdict use', text: 'A verdict matters when it changes the plan, triggers recovery, stops execution, or revises the task belief.' },
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
          <h2 id="comparison-title">Align the function.<br />Locate the shift.</h2>
        </div>
        <p>The vertical band marks the functional relation shared by three agent traditions. The horizontal boundary shows what embodiment changes: the conditions of evidence, execution, and task-level closure.</p>
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

      <div className="alignment-visual" key={item.name} style={{ '--capability': item.color } as CSSProperties}>
        <div className="alignment-summary">
          <span>Shared capability relation</span>
          <strong>{item.relation}</strong>
        </div>

        <div className="alignment-matrix">
          <div className="matrix-head system-col">System</div>
          <div className="matrix-head">Input / context</div>
          <div className="matrix-head relation-col"><span>Similarity</span> Functional relation</div>
          <div className="matrix-head">Observable result</div>

          {item.rows.map((row, index) => (
            <div className={`matrix-row ${index === 2 ? 'mmea-row' : ''}`} key={row[0]}>
              {index === 2 && (
                <div className="embodiment-boundary" aria-hidden="true">
                  <span>Difference boundary</span>
                  <strong>Embodiment changes the conditions of closure</strong>
                </div>
              )}
              <div className="system-cell">
                <b>{row[0]}</b>
                <span>{row[1]}</span>
              </div>
              <div className="matrix-cell"><small>Receives</small><strong>{row[2]}</strong></div>
              <div className="matrix-cell relation-cell"><small>Performs</small><strong>{row[3]}</strong></div>
              <div className="matrix-cell"><small>Produces</small><strong>{row[4]}</strong></div>
            </div>
          ))}
        </div>

        <div className="difference-notes">
          <article>
            <header><span>MMA</span><i>→</i><b>MMEA</b></header>
            <small>Digital-to-physical shift</small>
            <h3>{item.mma.title}</h3>
            <p>{item.mma.text}</p>
          </article>
          <article>
            <header><span>RS</span><i>→</i><b>MMEA</b></header>
            <small>Control-to-agency shift</small>
            <h3>{item.robot.title}</h3>
            <p>{item.robot.text}</p>
          </article>
        </div>

        <div className="comparison-takeaway">
          <span>Reading rule</span>
          <p><b>Read down</b> to compare how each tradition realizes the same functional relation. <b>Cross the boundary</b> to see what must change when the loop closes through a physical body.</p>
        </div>
      </div>
    </section>
  );
}
