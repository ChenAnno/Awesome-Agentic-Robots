'use client';

import { useState, type CSSProperties } from 'react';

const comparisons = [
  {
    letter: 'P', name: 'Perceive', color: '#F57C6E', core: 'State grounding & estimation',
    shared: ['Integrate heterogeneous evidence', 'Ground observations into an environment state'],
    mma: { title: 'Digital evidence requests → embodied inquiry', text: 'Viewpoint, contact, timing, energy, and disturbance now qualify how missing evidence can be acquired.' },
    robot: { title: 'Supplied objectives → task-formed questions', text: 'The evolving task state forms the semantic question; the sensing specialist controls acquisition and cost.' },
  },
  {
    letter: 'A', name: 'Anticipate', color: '#F2B56F', core: 'Action-conditioned prospective modeling',
    shared: ['Predict environmental change under intervention', 'Abstract futures into semantic or latent states'],
    mma: { title: 'Inspectable digital futures → qualified physical forecasts', text: 'A plausible future must also be calibrated against contact, dynamics, uncertainty, and physical realizability.' },
    robot: { title: 'Control-centric prediction → task-selected counterfactuals', text: 'Prediction becomes agentic when the task chooses which possible future matters and uses it to alter commitment.' },
  },
  {
    letter: 'P', name: 'Plan', color: '#84C3B7', core: 'Constrained proposal & selection',
    shared: ['Turn complex goals into hierarchical subgoals', 'Select a course under affordances and constraints'],
    mma: { title: 'Digital recovery → physically altered-state recovery', text: 'Failed execution may irreversibly change the world, so recovery starts from a newly grounded physical state.' },
    robot: { title: 'Local replanning → governance of commitment', text: 'The agent decides when to commit, stop, clarify, escalate, or hand recovery to a specialized controller.' },
  },
  {
    letter: 'A', name: 'Act', color: '#71B7ED', core: 'Action grounding & closed-loop execution',
    shared: ['Map semantic interventions to grounded specifications', 'Use action representations valid for the environment'],
    mma: { title: 'Agent-facing interface → physical execution', text: 'The action interface expands from tokens and tool calls to bodies, trajectories, contact, timing, and safety limits.' },
    robot: { title: 'Goal-conditioned control → task-visible contract', text: 'Body-specific control remains local, while progress, interruption, and failure become visible to task-level agency.' },
  },
  {
    letter: 'V', name: 'Verify', color: '#B8AEEB', core: 'Evidence-grounded outcome adjudication',
    shared: ['Compare observed and expected outcomes', 'Turn judgments into corrective feedback'],
    mma: { title: 'Functional checks → physically grounded verdicts', text: 'Success must be supported by post-action physical evidence rather than model confidence or a digital return code.' },
    robot: { title: 'Local monitoring → task-level verdict consumption', text: 'A verdict matters when it changes the plan, triggers recovery, stops execution, or revises the task belief.' },
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
          <h2 id="comparison-title">Same function.<br />New conditions of agency.</h2>
        </div>
        <p>Similarity identifies the shared capability relation across multimodal agents and robotic systems. Difference traces what changes when that relation must close through a physical body and remain visible to task-level agency.</p>
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

      <div className="comparison-visual" key={item.name} style={{ '--capability': item.color } as CSSProperties}>
        <div className="similarity-map">
          <div className="comparison-label similarity-label"><span>01</span> Similarity · shared functional relation</div>
          <div className="system-node system-mma">
            <small>Digital tradition</small>
            <strong>Multimodal<br />Agent</strong>
          </div>
          <div className="relation-line line-left"><i /><span>same capability</span></div>
          <div className="shared-core">
            <span>{item.letter}</span>
            <small>Shared operation</small>
            <strong>{item.core}</strong>
          </div>
          <div className="relation-line line-right"><i /><span>same capability</span></div>
          <div className="system-node system-rs">
            <small>Physical tradition</small>
            <strong>Robotic<br />System</strong>
          </div>
          <div className="shared-evidence">
            {item.shared.map((text, index) => <span key={text}><b>0{index + 1}</b>{text}</span>)}
          </div>
        </div>

        <div className="embodiment-gate" aria-hidden="true">
          <span>Embodiment</span><i /><small>changes how the relation is closed</small>
        </div>

        <div className="difference-map">
          <div className="comparison-label difference-label"><span>02</span> Difference · embodiment shifts</div>
          <article>
            <header><span>MMA</span><i>→</i><b>MMEA</b></header>
            <small>Digital-to-physical shift</small>
            <h3>{item.mma.title}</h3>
            <p>{item.mma.text}</p>
          </article>
          <div className="mmea-core">
            <span>Task-level agency</span>
            <strong>MMEA</strong>
            <small>closes the loop through a body</small>
          </div>
          <article>
            <header><span>RS</span><i>→</i><b>MMEA</b></header>
            <small>Control-to-agency shift</small>
            <h3>{item.robot.title}</h3>
            <p>{item.robot.text}</p>
          </article>
        </div>
      </div>

      <div className="comparison-takeaway">
        <span>How to read this</span>
        <p><b>Similarity</b> tells us that the systems solve the same functional problem. <b>Difference</b> tells us who forms the question, what evidence qualifies the answer, and how the result changes physical commitment.</p>
      </div>
    </section>
  );
}
