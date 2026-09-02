import EvolutionTree from './evolution-tree';
import BenchmarkExplorer from './benchmark-explorer';
import SimilarityDifference from './similarity-difference';
import ImmersiveMotion from './immersive-motion';
import HeroCapabilityLogo from './hero-capability-logo';
import HeroCapabilityOrbit from './hero-capability-orbit';

const capabilities = [
  { letter: 'P', name: 'Perceive', color: '#F57C6E', tag: 'Ground', question: 'What is true now?', text: 'Construct an action-relevant belief from heterogeneous, partial observations.' },
  { letter: 'A', name: 'Anticipate', color: '#F2B56F', tag: 'Forecast', question: 'What may happen next?', text: 'Estimate action-conditioned futures, risks, rewards, and task progress before commitment.' },
  { letter: 'P', name: 'Plan', color: '#84C3B7', tag: 'Decide', question: 'What should be done?', text: 'Select an executable course of action under the current belief and applicable constraints.' },
  { letter: 'A', name: 'Act', color: '#71B7ED', tag: 'Intervene', question: 'How is it executed?', text: 'Realize a selected decision as an environment-valid, revisable intervention.' },
  { letter: 'V', name: 'Verify', color: '#B8AEEB', tag: 'Judge', question: 'Did the change occur?', text: 'Use post-action evidence to determine whether the intended change actually occurred.' },
];

const challenges = [
  ['01', 'Persistent state & memory', 'What should an agent retain, update, retrieve, and forget under partial observability?'],
  ['02', 'Planning & execution granularity', 'How long should an agent commit before it looks, thinks, and decides again?'],
  ['03', 'Verification architecture', 'Should the acting model judge its own outcome, or should a dedicated verifier intervene?'],
  ['04', 'Future prediction & world modeling', 'What is the minimal predictive representation sufficient for reliable decisions?'],
  ['05', 'Acting under uncertainty', 'When should an agent act, gather more evidence, ask for help, or abstain?'],
];

const authors = [
  'Yanzhe Chen', 'Qiming Huang', 'Jifeng Zhu', 'Ziyi Yang', 'Ruihe An', 'Peiyao Xu',
  'Hesen Yang', 'Runda Liu', 'Chang Gong', 'Zhijun Cao', 'Zechen Bai', 'Wenzheng Zeng',
  'Kevin Qinghong Lin', 'Yiqi Lin', 'Guoqiang Liang', 'Mike Zheng Shou',
];

export default function Home() {
  return (
    <main>
      <ImmersiveMotion />
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="PAPAV home">
          <span className="brand-word" aria-hidden="true">
            {'PAPAV'.split('').map((letter, index) => (
              <i key={`${letter}-${index}`} style={{ color: capabilities[index].color }}>{letter}</i>
            ))}
          </span>
        </a>
        <div className="nav-links">
          <a href="#framework">Framework</a>
          <a href="#abstract">Abstract</a>
          <a href="#comparison">Compare</a>
          <a href="#benchmarks">Benchmarks</a>
          <a href="#challenges">Challenges</a>
        </div>
        <a
          className="nav-cta"
          href="https://github.com/ChenAnno/Awesome-Agentic-Robots#e-benchmarks"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <span>↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Capability-centric survey · 2026</p>
          <HeroCapabilityLogo capabilities={capabilities} />
          <h1>
            <span className="title-rest">When Agents Enter the Physical World:<br />A Capability-Centric Survey of<br />Multimodal Embodied Agents</span>
          </h1>
          <p className="hero-deck">
            A unified lens for understanding how multimodal agents perceive,
            anticipate, plan, act, and verify across digital and physical worlds.
          </p>
          <div className="hero-paper-details" id="citation" aria-label="Paper details">
            <p className="hero-paper-label">Paper details</p>
            <p className="hero-authors">{authors.join(' · ')}</p>
            <div className="hero-paper-meta">
              <span>Show Lab, National University of Singapore</span>
            </div>
          </div>
          <div className="hero-actions" id="paper">
            <a className="button primary" href="#framework">Explore the framework <span>↓</span></a>
            <a className="button secondary" href="#abstract">Read abstract</a>
          </div>
        </div>

        <HeroCapabilityOrbit capabilities={capabilities} />
      </section>

      <section className="intro-section" id="framework">
        <div className="section-kicker">The PAPAV framework</div>
        <div className="intro-grid">
          <h2>One coordinate system.<br />Three agent traditions.</h2>
          <p>
            PAPAV abstracts recurring input-output relations into five capabilities,
            making it possible to compare multimodal agents, robotic systems, and
            multimodal embodied agents without prescribing a fixed architecture.
          </p>
        </div>
      </section>

      <section className="abstract-section" id="abstract">
        <div>
          <p className="section-kicker">Abstract</p>
          <h2>What changes when a multimodal agent enters the physical world?</h2>
        </div>
        <div className="abstract-copy">
          <p>Multimodal agents sustain interaction through reasoning, memory, tools, and feedback, while robots close sensing–action loops under physical dynamics. Multimodal Embodied Agents (MMEAs) bring these traditions together. This raises a central question: what changes when a multimodal agent enters the physical world?</p>
          <p>We introduce PAPAV, a capability-centric framework organized around five functions in a recurring task loop: Perceive the current state, Anticipate action effects, Plan a feasible course, Act through an environment interface, and Verify the outcome. These functions support direct comparison across multimodal agents, robotic systems, and MMEAs because each is defined by its contribution to the task loop rather than by system architecture.</p>
          <p>Across partial observability, imperfect simulation, irreversible actions, real-time interaction, and uncertain success signals, embodiment preserves the task loop but shifts responsibility from structured interfaces and design choices to the running agent. Applying PAPAV to 62 benchmarks shows that Act is usually evaluated directly, while only 4 benchmarks directly assess Anticipate and 3 assess Verify, leaving key parts of the loop hidden behind task success. PAPAV therefore provides a common basis for designing reliable physical agents and measuring progress across the full interaction loop.</p>
        </div>
      </section>

      <SimilarityDifference />

      <section className="domains-section" aria-labelledby="domains-title">
        <div className="domains-copy">
          <p className="section-kicker">Across digital and physical worlds</p>
          <h2 id="domains-title">A common function.<br />Different constraints.</h2>
          <p>Digital agents, robotic systems, and multimodal embodied agents can instantiate similar capability relations while operating under very different evidence, action, and verification conditions.</p>
          <div className="domain-list">
            <div><span>01</span><strong>Multimodal agents</strong><small>Tool calls · GUI actions · digital feedback</small></div>
            <div><span>02</span><strong>Robotic systems</strong><small>Sensors · control signals · physical state</small></div>
            <div><span>03</span><strong>MM embodied agents</strong><small>Agentic reasoning under embodied constraints</small></div>
          </div>
        </div>
        <EvolutionTree />
      </section>

      <section className="benchmarks-section" id="benchmarks" aria-labelledby="benchmarks-title">
        <div className="benchmark-intro">
          <div>
            <p className="section-kicker">Benchmarks & evaluation</p>
            <h2 id="benchmarks-title">Coverage is broad.<br />Diagnosis is not.</h2>
          </div>
          <div className="benchmark-intro-copy">
            <p>The survey maps 62 benchmarks across three research families. Most evaluation still emphasizes aggregate outcomes, leaving capability bottlenecks and failure transitions difficult to identify.</p>
            <a
              className="benchmark-repo-link"
              href="https://github.com/ChenAnno/Awesome-Agentic-Robots#e-benchmarks"
              target="_blank"
              rel="noopener noreferrer"
            >
              View benchmark repository <span>↗</span>
            </a>
          </div>
        </div>
        <BenchmarkExplorer />
      </section>

      <section className="challenges-section" id="challenges" aria-labelledby="challenges-title">
        <div className="challenge-title-wrap">
          <p className="section-kicker">Open challenges</p>
          <h2 id="challenges-title">The loop is only as strong as its transitions.</h2>
          <p>Stronger components do not by themselves resolve the architectural choices that emerge when all five capabilities must operate together.</p>
        </div>
        <div className="challenge-list">
          {challenges.map(([number, title, text]) => (
            <article key={number}>
              <span>OC{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="PAPAV home">
          <span className="brand-word" aria-hidden="true">
            {'PAPAV'.split('').map((letter, index) => (
              <i key={`${letter}-${index}`} style={{ color: capabilities[index].color }}>{letter}</i>
            ))}
          </span>
        </a>
        <p>Multimodal Embodied Agents Survey · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
