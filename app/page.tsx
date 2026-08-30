import EvolutionTree from './evolution-tree';
import BenchmarkExplorer from './benchmark-explorer';
import SimilarityDifference from './similarity-difference';

const capabilities = [
  { letter: 'P', name: 'Perceive', color: '#F57C6E', tag: 'Ground', text: 'Construct an action-relevant belief from heterogeneous, partial observations.' },
  { letter: 'A', name: 'Anticipate', color: '#F2B56F', tag: 'Forecast', text: 'Estimate action-conditioned futures, risks, rewards, and task progress before commitment.' },
  { letter: 'P', name: 'Plan', color: '#84C3B7', tag: 'Decide', text: 'Select an executable course of action under the current belief and applicable constraints.' },
  { letter: 'A', name: 'Act', color: '#71B7ED', tag: 'Intervene', text: 'Realize a selected decision as an environment-valid, revisable intervention.' },
  { letter: 'V', name: 'Verify', color: '#B8AEEB', tag: 'Judge', text: 'Use post-action evidence to determine whether the intended change actually occurred.' },
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
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="PAPAV home">
          <span className="brand-mark" aria-hidden="true">
            {capabilities.map((item) => (
              <i key={item.name} style={{ background: item.color }} />
            ))}
          </span>
          <span>PAPAV</span>
        </a>
        <div className="nav-links">
          <a href="#framework">Framework</a>
          <a href="#abstract">Abstract</a>
          <a href="#comparison">Compare</a>
          <a href="#benchmarks">Benchmarks</a>
          <a href="#challenges">Challenges</a>
        </div>
        <a className="nav-cta" href="#citation">Paper details <span>↓</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Capability-centric survey · 2026</p>
          <h1>
            <span className="papav-word" aria-label="PAPAV">
              {capabilities.map((item) => (
                <em key={item.name} style={{ color: item.color }}>{item.letter}</em>
              ))}
            </span>
            <span className="title-rest">A Capability-Centric Survey of<br />Multimodal Embodied Agents</span>
          </h1>
          <p className="hero-deck">
            A unified lens for understanding how multimodal agents perceive,
            anticipate, plan, act, and verify across digital and physical worlds.
          </p>
          <div className="hero-actions" id="paper">
            <a className="button primary" href="#framework">Explore the framework <span>↓</span></a>
            <a className="button secondary" href="#abstract">Read abstract</a>
          </div>
          <p className="affiliation">Show Lab · National University of Singapore · University of Oxford</p>
        </div>

        <div className="hero-visual" aria-label="PAPAV capability loop">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="loop-core">
            <span>Closed-loop</span>
            <strong>AGENCY</strong>
            <small>across worlds</small>
          </div>
          {capabilities.map((item, index) => (
            <div
              className={`cap-node cap-${index + 1}`}
              key={item.name}
              style={{ '--accent': item.color } as React.CSSProperties}
            >
              <span>{item.letter}</span>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="capability-strip" aria-label="Five capabilities">
        {capabilities.map((item, index) => (
          <a href="#framework" key={item.name} style={{ '--accent': item.color } as React.CSSProperties}>
            <span>0{index + 1}</span>
            <strong>{item.name}</strong>
            <i>→</i>
          </a>
        ))}
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
          <h2>Coming soon.</h2>
        </div>
        <div className="abstract-placeholder" aria-label="Abstract placeholder">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Five analytical coordinates</p>
            <h2 id="capabilities-title">Not a pipeline.<br />A way to compare.</h2>
          </div>
          <p>PAPAV does not prescribe five architectural modules or a fixed execution order. It offers an architecture-independent vocabulary for tracing where agency is grounded, imagined, committed, realized, and assessed.</p>
        </div>
        <div className="capability-cards">
          {capabilities.map((item, index) => (
            <article key={item.name} style={{ '--accent': item.color } as React.CSSProperties}>
              <header><span>0{index + 1}</span><i>{item.tag}</i></header>
              <div className="cap-letter">{item.letter}</div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          ))}
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
          <p>The survey maps 62 benchmarks across three research families. Most evaluation still emphasizes aggregate outcomes, leaving capability bottlenecks and failure transitions difficult to identify.</p>
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
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="citation-section" id="citation">
        <div className="citation-mark" aria-hidden="true">
          {capabilities.map((item) => <span key={item.name} style={{ color: item.color }}>{item.letter}</span>)}
        </div>
        <p className="section-kicker">Paper details</p>
        <h2>A Capability-Centric Survey of Multimodal Embodied Agents</h2>
        <p className="author-list">{authors.join(' · ')}</p>
        <div className="affiliations-grid">
          <span><b>01</b> Show Lab, National University of Singapore</span>
          <span><b>02</b> University of Oxford</span>
          <span><b>2026</b> Preprint · Work in progress</span>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">{capabilities.map((item) => <i key={item.name} style={{ background: item.color }} />)}</span>
          <span>PAPAV</span>
        </a>
        <p>Multimodal Embodied Agents Survey · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
