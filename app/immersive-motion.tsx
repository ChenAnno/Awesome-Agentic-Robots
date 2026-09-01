'use client';

import { useEffect } from 'react';

const staggerSelectors = [
  '.capability-strip a',
  '.capability-index a',
  '.domain-list div',
  '.benchmark-live-stats div',
  '.coverage-bars > button',
  '.challenge-list article',
];

export default function ImmersiveMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const nav = document.querySelector<HTMLElement>('.site-nav');
    const hero = document.querySelector<HTMLElement>('.hero');
    const heroVisual = document.querySelector<HTMLElement>('.hero-visual');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.classList.add('motion-ready');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -8% 0px' });

    const revealTargets = new Set<Element>();
    document.querySelectorAll('main > section:not(.hero):not(.capability-strip)').forEach((section) => {
      section.classList.add('motion-chapter');
      Array.from(section.children).forEach((child, index) => {
        child.classList.add('motion-item');
        (child as HTMLElement).style.setProperty('--motion-delay', `${Math.min(index * 90, 270)}ms`);
        revealTargets.add(child);
      });
    });

    staggerSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add('motion-stagger');
        (element as HTMLElement).style.setProperty('--motion-delay', `${Math.min(index * 70, 350)}ms`);
        revealTargets.add(element);
      });
    });

    revealTargets.forEach((element) => revealObserver.observe(element));

    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      root.style.setProperty('--page-progress', `${Math.min(scrollY / maxScroll, 1)}`);
      nav?.classList.toggle('is-scrolled', scrollY > 24);

      if (!reduceMotion && hero) {
        const progress = Math.min(scrollY / Math.max(hero.offsetHeight, 1), 1);
        hero.style.setProperty('--hero-shift', `${progress * 82}px`);
        hero.style.setProperty('--hero-fade', `${1 - progress * .7}`);
        heroVisual?.style.setProperty('--visual-scroll', `${progress * 46}px`);
      }

    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion || !hero || !heroVisual) return;
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - .5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - .5) * 2;
      heroVisual.style.setProperty('--pointer-x', `${x * 13}px`);
      heroVisual.style.setProperty('--pointer-y', `${y * 10}px`);
    };

    const onPointerLeave = () => {
      heroVisual?.style.setProperty('--pointer-x', '0px');
      heroVisual?.style.setProperty('--pointer-y', '0px');
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    hero?.addEventListener('pointermove', onPointerMove);
    hero?.addEventListener('pointerleave', onPointerLeave);

    return () => {
      root.classList.remove('motion-ready');
      root.style.removeProperty('--page-progress');
      window.removeEventListener('scroll', onScroll);
      hero?.removeEventListener('pointermove', onPointerMove);
      hero?.removeEventListener('pointerleave', onPointerLeave);
      revealObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
