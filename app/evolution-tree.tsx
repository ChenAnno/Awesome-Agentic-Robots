"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import { nodes as papers, type Branch } from "./evolution-data";
import { createTreeLayout, approximateTextWidth } from "./evolution-layout";

const branchLabels: Record<Branch, string> = {
  root: "Shared root",
  robotics: "Robotic systems",
  embodied: "Multimodal embodied agents",
  digital: "Multimodal agents",
};

// Stable path segments let each year grow in without reshaping earlier branches.
function curvePath(
  from: { x: number; y: number },
  to: { x: number; y: number },
) {
  const bend = Math.abs(to.y - from.y) * 0.5;
  return `M ${from.x * 10} ${from.y} C ${from.x * 10} ${from.y - bend}, ${to.x * 10} ${to.y + bend}, ${to.x * 10} ${to.y}`;
}

function bottomBranchPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
) {
  const dx = (to.x - from.x) * 10;
  const rise = from.y - to.y;
  // Follow the bottom edge first, then sweep upward into the family branch.
  return `M ${from.x * 10} ${from.y} C ${from.x * 10 + dx * 0.6} ${from.y}, ${to.x * 10 - dx * 0.15} ${to.y + rise * 0.3}, ${to.x * 10} ${to.y}`;
}

export function AnimatedEvolutionTree() {
  const [activeYear, setActiveYear] = useState(2017);
  const [filter, setFilter] = useState<Branch>("root");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedId, setSelectedId] = useState("dvf");
  const treeRef = useRef<HTMLDivElement>(null);
  const plotRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState({
    width: 1000,
    measure: approximateTextWidth,
  });
  const layout = useMemo(
    () => createTreeLayout(papers, metrics.width, metrics.measure),
    [metrics],
  );
  const { nodes, years, yearPositions, height: treeHeight } = layout;
  const revealDelays = useMemo(() => {
    const delays = new Map<string, number>();
    for (const year of years) {
      const group = nodes.filter(
        (node) => node.year === year && node.branch !== "root",
      );
      const top = Math.min(...group.map((node) => node.y));
      const bottom = Math.max(...group.map((node) => node.y));
      group.forEach((node) =>
        delays.set(
          node.id,
          35 + ((bottom - node.y) / Math.max(1, bottom - top)) * 120,
        ),
      );
    }
    return delays;
  }, [nodes, years]);

  useEffect(() => {
    const plot = plotRef.current;
    if (!plot) return;
    const context = document.createElement("canvas").getContext("2d");
    if (!context) return;
    const title = plot.querySelector(".tree-node-title");
    context.font = title
      ? window.getComputedStyle(title).font
      : "700 13px Arial";
    const measure = (text: string) => context.measureText(text).width;
    const observer = new ResizeObserver(([entry]) => {
      const width = Math.round(entry.contentRect.width);
      if (!width) return;
      setMetrics((previous) =>
        previous.width === width && previous.measure === measure
          ? previous
          : { width, measure },
      );
    });
    observer.observe(plot);
    return () => observer.disconnect();
  }, []);

  const nodeMap = useMemo(
    () => new Map(nodes.map((node) => [node.id, node])),
    [nodes],
  );
  const matchesFilter = (branch: Branch) =>
    filter === "root" || branch === filter || branch === "root";
  const firstVisible = nodes.find(
    (node) =>
      node.branch !== "root" &&
      node.year <= activeYear &&
      matchesFilter(node.branch),
  );
  const candidate = nodeMap.get(selectedId) ?? firstVisible;
  const selected =
    candidate && candidate.year <= activeYear && matchesFilter(candidate.branch)
      ? candidate
      : firstVisible;
  const playing = isPlaying && activeYear < 2026;

  useEffect(() => {
    const element = treeRef.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setTimeout(() => setActiveYear(2026), 0);
      return () => window.clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const nextYear = Math.min(...years.filter((year) => year > activeYear));
    if (!Number.isFinite(nextYear)) return;
    const timer = window.setTimeout(() => setActiveYear(nextYear), 320);
    return () => window.clearTimeout(timer);
  }, [playing, activeYear, years]);

  const replay = () => {
    if (activeYear === 2026) {
      setActiveYear(2017);
      setIsPlaying(true);
    } else {
      setIsPlaying((value) => !value);
    }
  };

  return (
    <div className="animated-tree" ref={treeRef}>
      <div className="tree-toolbar">
        <div className="tree-filters" aria-label="Filter evolution branches">
          {(["root", "robotics", "embodied", "digital"] as Branch[]).map(
            (branch) => (
              <button
                type="button"
                key={branch}
                className={`tree-family-${branch}`}
                aria-pressed={filter === branch}
                onClick={() => setFilter(branch)}
              >
                {branch === "root" ? "All" : branchLabels[branch]}
              </button>
            ),
          )}
        </div>
        <button
          className="tree-play"
          type="button"
          onClick={replay}
          aria-label={
            playing
              ? "Pause timeline"
              : activeYear === 2026
                ? "Replay timeline"
                : "Play timeline"
          }
        >
          {playing ? "Pause" : activeYear === 2026 ? "Replay" : "Play"}
        </button>
      </div>
      <div
        className="tree-scroll"
        tabIndex={0}
        role="region"
        aria-label="Evolution tree; scroll horizontally on smaller screens"
      >
        <div
          className="tree-canvas"
          style={{ height: treeHeight }}
          aria-label={`Research milestones through ${activeYear}`}
        >
          <div className="tree-year-axis" aria-hidden="true">
            {years.map((year) => (
              <span key={year} style={{ top: yearPositions.get(year) }}>
                {year}
              </span>
            ))}
          </div>
          <div className="tree-plot" ref={plotRef}>
            <div className="tree-canopy-labels" aria-hidden="true">
              <span>Robotic systems</span>
              <span>Multimodal embodied agents</span>
              <span>Multimodal agents</span>
            </div>

            <svg
              className="tree-connections"
              viewBox={`0 0 1000 ${treeHeight}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {years.map((year) => (
                <line
                  className="tree-year-line"
                  key={year}
                  x1="0"
                  x2="20"
                  y1={yearPositions.get(year)}
                  y2={yearPositions.get(year)}
                />
              ))}
              {(["robotics", "embodied", "digital"] as const).map((branch) => {
                const branchYears = [
                  ...new Set(
                    nodes
                      .filter((node) => node.branch === branch)
                      .map((node) => node.year),
                  ),
                ].sort((a, b) => a - b);
                const root = nodes.find((node) => node.id === "root")!;
                return branchYears.map((year, index) => {
                  const yearNodes = nodes.filter(
                    (node) => node.branch === branch && node.year === year,
                  );
                  const junction = {
                    x:
                      yearNodes.reduce((sum, node) => sum + node.x, 0) /
                      yearNodes.length,
                    y:
                      Math.max(
                        ...yearNodes.map((node) => node.y + node.height / 2),
                      ) + 8,
                  };
                  const previousYear = branchYears[index - 1];
                  const previousNodes = nodes.filter(
                    (node) =>
                      node.branch === branch && node.year === previousYear,
                  );
                  const previous =
                    index === 0
                      ? root
                      : {
                          x:
                            previousNodes.reduce(
                              (sum, node) => sum + node.x,
                              0,
                            ) / previousNodes.length,
                          y:
                            Math.max(
                              ...previousNodes.map(
                                (node) => node.y + node.height / 2,
                              ),
                            ) + 8,
                        };
                  const className = `tree-branch tree-family-${branch} ${year <= activeYear ? "visible" : ""} ${matchesFilter(branch) ? "" : "muted"}`;
                  return (
                    <g key={`${branch}-${year}`}>
                      <path
                        pathLength="1"
                        className={className}
                        d={
                          index === 0 && branch !== "robotics"
                            ? bottomBranchPath(previous, junction)
                            : curvePath(previous, junction)
                        }
                      />
                      {yearNodes.map((node) => (
                        <path
                          key={node.id}
                          pathLength="1"
                          className={className}
                          style={
                            {
                              "--branch-delay": `${isPlaying ? (revealDelays.get(node.id) ?? 0) * 0.5 : 0}ms`,
                            } as CSSProperties
                          }
                          d={curvePath(junction, {
                            x: node.x,
                            y: node.y + node.height / 2,
                          })}
                        />
                      ))}
                    </g>
                  );
                });
              })}
            </svg>
            {nodes
              .filter((node) => node.branch !== "root")
              .map((node) => {
                const visible = node.year <= activeYear;
                const relevant = matchesFilter(node.branch);
                return (
                  <div
                    key={node.id}
                    className={`tree-node tree-family-${node.branch} ${visible ? "visible" : ""} ${relevant ? "" : "muted"}`}
                    style={
                      {
                        left: `${node.x}%`,
                        top: node.y,
                        width: `${node.width}%`,
                        height: node.height,
                        "--node-delay": `${isPlaying ? (revealDelays.get(node.id) ?? 0) : 0}ms`,
                      } as CSSProperties
                    }
                    aria-hidden={!visible || !relevant}
                    data-selected={selected?.id === node.id}
                    onMouseEnter={() => {
                      if (visible && relevant) setSelectedId(node.id);
                    }}
                  >
                    {node.url ? (
                      <a
                        className="tree-node-title"
                        href={node.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={visible && relevant ? 0 : -1}
                        onFocus={() => setSelectedId(node.id)}
                        title={`${node.detail} — ${node.linkLabel}`}
                        aria-label={`${node.title}, ${node.year} — open ${node.linkLabel?.toLowerCase()}`}
                      >
                        <span className="tree-node-label">
                          {node.labelLines.map((line, index) => (
                            <span key={index}>{line}</span>
                          ))}
                        </span>
                        <span className="tree-node-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <button
                        className="tree-node-title"
                        type="button"
                        onClick={() => setSelectedId(node.id)}
                        disabled={!visible || !relevant}
                      >
                        <span className="tree-node-label">
                          {node.labelLines.map((line, index) => (
                            <span key={index}>{line}</span>
                          ))}
                        </span>
                      </button>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="tree-timeline">
        <label htmlFor="evolution-year">
          Year <strong>{activeYear}</strong>
        </label>
        <span>2017</span>
        <input
          id="evolution-year"
          type="range"
          min="2017"
          max="2026"
          value={activeYear}
          onChange={(event) => {
            setActiveYear(Number(event.target.value));
            setIsPlaying(false);
          }}
        />
        <span>2026</span>
      </div>
    </div>
  );
}

export default function EvolutionTree() {
  const [showFigure, setShowFigure] = useState(false);
  return (
    <div className="evolution-tree">
      <div className="tree-view-bar">
        <span>Evolution tree</span>
        <button
          type="button"
          onClick={() => setShowFigure((value) => !value)}
          aria-pressed={showFigure}
          aria-controls="evolution-view"
        >
          {showFigure ? "Animated tree" : "High-res figure"}
        </button>
      </div>
      <div id="evolution-view">
        {showFigure ? (
          <figure className="paper-figure tree-full-figure">
            <a
              href="paper-figures/evolution-tree.svg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the full-resolution research evolution tree"
            >
              <img
                src="paper-figures/evolution-tree.svg"
                alt="Chronological overview of robotic systems, multimodal embodied agents, and multimodal agents from the survey introduction"
              />
            </a>
            <figcaption>
              <a
                href="paper-figures/evolution-tree.svg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open full-size figure
              </a>
            </figcaption>
          </figure>
        ) : (
          <AnimatedEvolutionTree />
        )}
      </div>
    </div>
  );
}
