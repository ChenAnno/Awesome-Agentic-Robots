'use client';

import { useState, type CSSProperties } from 'react';

type HeroCapability = {
  letter: string;
  name: string;
  color: string;
  tag: string;
  question: string;
  text: string;
};

export default function HeroCapabilityOrbit({ capabilities }: { capabilities: HeroCapability[] }) {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : capabilities[active];

  return (
    <div className="hero-visual" aria-label="Interactive PAPAV capability loop">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <button
        type="button"
        className={`loop-core${selected ? ' selected' : ''}`}
        style={selected ? { '--accent': selected.color } as CSSProperties : undefined}
        aria-label={selected ? 'Close capability explanation' : 'Choose a PAPAV capability'}
        onClick={() => selected && setActive(null)}
      >
        {selected ? (
          <>
            <span>{String(active! + 1).padStart(2, '0')} · {selected.tag}</span>
            <strong><i>{selected.letter}</i>{selected.name}</strong>
            <p>{selected.text}</p>
            <small>Click to close</small>
          </>
        ) : (
          <>
            <span>Closed-loop</span>
            <strong>AGENCY</strong>
            <small>select a capability</small>
          </>
        )}
      </button>

      {capabilities.map((item, index) => (
        <button
          type="button"
          className={`cap-node cap-${index + 1}${active === index ? ' active' : ''}${active !== null && active !== index ? ' muted' : ''}`}
          key={item.name}
          style={{ '--accent': item.color } as CSSProperties}
          aria-label={`Explain ${item.name}: ${item.question}`}
          aria-pressed={active === index}
          onClick={() => setActive((current) => current === index ? null : index)}
        >
          <span>{item.letter}</span>
          <p>{item.name}</p>
        </button>
      ))}
    </div>
  );
}
