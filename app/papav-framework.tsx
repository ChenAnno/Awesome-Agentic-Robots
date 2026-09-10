"use client";

import { useEffect, useRef } from "react";

export default function PapavFramework() {
  const figureRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = figureRef.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (motion.matches) {
        delete element.dataset.scrollReveal;
        return;
      }
      const rect = element.getBoundingClientRect();
      const start = window.innerHeight * 0.60;
      const travel = Math.max(
        120,
        Math.min(rect.height * 0.6, window.innerHeight * 0.28),
      );
      const progress = Math.max(0, Math.min(1, (start - rect.top) / travel));
      const eased = progress * progress * (3 - 2 * progress);
      element.style.setProperty("--robot-crop", `${47.5 * (1 - eased)}%`);
      element.dataset.scrollReveal = "true";
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      observer.disconnect();
    };
  }, []);

  return (
    <figure className="paper-figure papav-framework">
      <a
        ref={figureRef}
        className="papav-reveal"
        href="paper-figures/papav-teaser.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the PAPAV overview figure"
      >
        <img
          className="papav-computer-row"
          src="papav-teaser.webp"
          width="2400"
          height="999"
          alt="Perceive, Anticipate, Plan, Act, and Verify illustrated through computer-use above and robot-use below"
        />
      </a>
      <figcaption>
        <strong>From computer-use to robot-use.</strong> PAPAV compares five
        shared capabilities and shows how physical constraints change the task
        loop.
      </figcaption>
    </figure>
  );
}
