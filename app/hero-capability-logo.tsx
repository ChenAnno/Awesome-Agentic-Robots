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

const hotspotPositions = [
  { left: '19.5%', width: '11.5%' },
  { left: '31%', width: '14%' },
  { left: '45%', width: '11%' },
  { left: '56%', width: '13%' },
  { left: '69%', width: '12%' },
];

export default function HeroCapabilityLogo({ capabilities }: { capabilities: HeroCapability[] }) {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : capabilities[active];

  const choose = (index: number) => setActive((current) => current === index ? null : index);

  return (
    <div className="hero-brand-logo">
      <div className="hero-logo-artwork">
        <img src="papav-hero-cutout.png" alt="PAPAV" />
        <div className="hero-logo-hotspots" aria-label="Explore PAPAV capabilities">
          {capabilities.map((item, index) => (
            <button
              type="button"
              key={item.name}
              data-label={item.name}
              aria-label={`Explain ${item.name}`}
              aria-pressed={active === index}
              onClick={() => choose(index)}
              style={{ ...hotspotPositions[index], '--accent': item.color } as CSSProperties}
            />
          ))}
        </div>
      </div>

      <div className="hero-brand-expansion" aria-label="PAPAV capabilities">
        {capabilities.map((item, index) => (
          <button
            type="button"
            key={item.name}
            className={active === index ? 'active' : ''}
            style={{ '--accent': item.color } as CSSProperties}
            aria-pressed={active === index}
            onClick={() => choose(index)}
          >
            <b>{item.name.slice(0, 1)}</b>{item.name.slice(1)}
          </button>
        ))}
      </div>

      {selected && (
        <div className="hero-capability-explainer" style={{ '--accent': selected.color } as CSSProperties} aria-live="polite">
          <div className="hero-explainer-index">
            <span>{String(active! + 1).padStart(2, '0')}</span>
            <b>{selected.letter}</b>
          </div>
          <div className="hero-explainer-copy">
            <small>{selected.tag} · {selected.question}</small>
            <strong>{selected.name}</strong>
            <p>{selected.text}</p>
          </div>
          <button type="button" className="hero-explainer-close" aria-label="Close capability explanation" onClick={() => setActive(null)}>×</button>
        </div>
      )}
    </div>
  );
}
