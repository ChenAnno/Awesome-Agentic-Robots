'use client';

import { useEffect, useMemo, useState } from 'react';
import { benchmarks, type Benchmark, type BenchmarkCategory, type Coverage } from './benchmark-data';

const capabilityNames = ['Perceive', 'Anticipate', 'Plan', 'Act', 'Verify'];
const capabilityColors = ['#F57C6E', '#F2B56F', '#84C3B7', '#71B7ED', '#B8AEEB'];
const coverageColors = {
  direct: '#6DA5D4',
  partial: '#EFAD67',
  none: '#DE6867',
};
const categoryLabels: Record<BenchmarkCategory, string> = {
  MMEA: 'MM embodied agents',
  MMA: 'Multimodal agents',
  RS: 'Robotic systems',
};
const coverageLabels: Record<Coverage, string> = {
  direct: 'Direct',
  partial: 'Partial',
  none: 'Not evaluated',
};

type CategoryFilter = 'ALL' | BenchmarkCategory;
type SortMode = 'year-desc' | 'year-asc' | 'name' | 'coverage';
type CoverageFilter = 'all' | Coverage;

const pageSize = 12;
const score = (row: Benchmark) => row.coverage.reduce((sum, value) => sum + (value === 'direct' ? 2 : value === 'partial' ? 1 : 0), 0);

export default function BenchmarkExplorer() {
  const [category, setCategory] = useState<CategoryFilter>('ALL');
  const [subcategory, setSubcategory] = useState('ALL');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortMode>('year-desc');
  const [capability, setCapability] = useState(0);
  const [coverageFilter, setCoverageFilter] = useState<CoverageFilter>('all');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const subcategories = useMemo(() => {
    const pool = category === 'ALL' ? benchmarks : benchmarks.filter((item) => item.category === category);
    return Array.from(new Set(pool.map((item) => item.subcategory))).sort();
  }, [category]);

  const profileRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return benchmarks.filter((item) => {
      const matchesCategory = category === 'ALL' || item.category === category;
      const matchesSubcategory = subcategory === 'ALL' || item.subcategory === subcategory;
      const matchesQuery = !normalized || [item.name, item.venue, item.task, item.subcategory, categoryLabels[item.category]]
        .some((value) => value.toLowerCase().includes(normalized));
      return matchesCategory && matchesSubcategory && matchesQuery;
    });
  }, [category, subcategory, query]);

  const filtered = useMemo(() => {
    const rows = profileRows.filter((item) => coverageFilter === 'all' || item.coverage[capability] === coverageFilter);

    return rows.sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'year-asc') return a.year - b.year || a.name.localeCompare(b.name);
      if (sort === 'coverage') return score(b) - score(a) || b.year - a.year;
      return b.year - a.year || a.name.localeCompare(b.name);
    });
  }, [profileRows, coverageFilter, capability, sort]);

  useEffect(() => {
    setPage(0);
    setExpanded(null);
  }, [category, subcategory, coverageFilter, capability, query, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visibleRows = filtered.slice(page * pageSize, page * pageSize + pageSize);

  const summaries = capabilityNames.map((_, index) => {
    const counts = { direct: 0, partial: 0, none: 0 };
    profileRows.forEach((item) => { counts[item.coverage[index]] += 1; });
    const total = Math.max(profileRows.length, 1);
    return {
      ...counts,
      directPct: (counts.direct / total) * 100,
      partialPct: (counts.partial / total) * 100,
      nonePct: (counts.none / total) * 100,
    };
  });

  const totalCells = Math.max(filtered.length * 5, 1);
  const directCells = filtered.reduce((sum, item) => sum + item.coverage.filter((value) => value === 'direct').length, 0);
  const latestYear = filtered.length ? Math.max(...filtered.map((item) => item.year)) : '—';
  const venueCount = new Set(filtered.map((item) => item.venue.replace(/'\d{2}$/, ''))).size;

  const chooseCategory = (next: CategoryFilter) => {
    setCategory(next);
    setSubcategory('ALL');
  };

  return (
    <div className="benchmark-explorer">
      <div className="benchmark-controls">
        <div className="benchmark-tabs" aria-label="Benchmark category">
          {(['ALL', 'MMEA', 'MMA', 'RS'] as CategoryFilter[]).map((item) => (
            <button key={item} type="button" className={category === item ? 'active' : ''} onClick={() => chooseCategory(item)} aria-pressed={category === item}>
              {item === 'ALL' ? 'All 62' : categoryLabels[item]}
            </button>
          ))}
        </div>
        <label className="benchmark-search">
          <span aria-hidden="true">⌕</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search benchmark, task, venue…" aria-label="Search benchmarks" />
        </label>
        <label className="benchmark-select">
          <span>Environment</span>
          <select value={subcategory} onChange={(event) => setSubcategory(event.target.value)}>
            <option value="ALL">All environments</option>
            {subcategories.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label className="benchmark-select">
          <span>Order by</span>
          <select value={sort} onChange={(event) => setSort(event.target.value as SortMode)}>
            <option value="year-desc">Newest first</option>
            <option value="year-asc">Oldest first</option>
            <option value="name">Name A–Z</option>
            <option value="coverage">PAPAV coverage</option>
          </select>
        </label>
      </div>

      <div className="benchmark-live-stats" aria-live="polite">
        <div><strong>{filtered.length}</strong><span>visible benchmarks</span></div>
        <div><strong>{Math.round((directCells / totalCells) * 100)}%</strong><span>direct PAPAV coverage</span></div>
        <div><strong>{venueCount}</strong><span>venue families</span></div>
        <div><strong>{latestYear}</strong><span>latest publication year</span></div>
      </div>

      <div className="coverage-dashboard">
        <div className="coverage-dashboard-head">
          <div>
            <span className="dashboard-kicker">Live capability profile</span>
            <h3>{category === 'ALL' ? 'All benchmark families' : categoryLabels[category]}</h3>
          </div>
          <div className="coverage-legend" aria-label="Coverage legend">
            <span><i className="legend-direct" /> Direct</span>
            <span><i className="legend-partial" /> Partial</span>
            <span><i className="legend-none" /> Not evaluated</span>
          </div>
        </div>
        <div className="coverage-bars">
          {summaries.map((summary, index) => (
            <button type="button" key={capabilityNames[index]} className={capability === index ? 'active' : ''} onClick={() => setCapability(index)} style={{ '--capability': capabilityColors[index] } as React.CSSProperties}>
              <span className="coverage-name"><b>{capabilityNames[index].slice(0, 1)}</b>{capabilityNames[index]}</span>
              <span className="coverage-stack" aria-label={`${capabilityNames[index]}: ${summary.direct} direct, ${summary.partial} partial, ${summary.none} not evaluated`}>
                <i className="segment-direct" style={{ width: `${summary.directPct}%`, flexBasis: `${summary.directPct}%`, backgroundColor: coverageColors.direct }} />
                <i className="segment-partial" style={{ width: `${summary.partialPct}%`, flexBasis: `${summary.partialPct}%`, backgroundColor: coverageColors.partial }} />
                <i className="segment-none" style={{ width: `${summary.nonePct}%`, flexBasis: `${summary.nonePct}%`, backgroundColor: coverageColors.none }} />
              </span>
              <span className="coverage-counts"><b>{summary.direct}</b><b>{summary.partial}</b><b>{summary.none}</b></span>
            </button>
          ))}
        </div>
        <div className="coverage-status-filter">
          <span>Filter table by <b>{capabilityNames[capability]}</b></span>
          {(['all', 'direct', 'partial', 'none'] as CoverageFilter[]).map((value) => (
            <button type="button" key={value} className={coverageFilter === value ? 'active' : ''} onClick={() => setCoverageFilter(value)}>
              {value === 'all' ? 'Any coverage' : coverageLabels[value]}
            </button>
          ))}
        </div>
      </div>

      <div className="paper-table-heading">
        <div>
          <span className="dashboard-kicker">Paper table · interactive edition</span>
          <h3>Benchmark overview & PAPAV coverage</h3>
        </div>
        <p><span className="coverage-symbol direct" /> Explicit &nbsp; <span className="coverage-symbol partial" /> Implicit &nbsp; <span className="coverage-symbol none" /> Not evaluated</p>
      </div>

      <div className="benchmark-table-wrap">
        <table className="benchmark-table">
          <thead>
            <tr>
              <th><button type="button" onClick={() => setSort('name')}>Benchmark ↕</button></th>
              <th><button type="button" onClick={() => setSort(sort === 'year-asc' ? 'year-desc' : 'year-asc')}>Venue ↕</button></th>
              <th>Task</th>
              <th>Family</th>
              <th>Setting</th>
              {capabilityNames.map((name, index) => (
                <th key={name} className={capability === index ? 'selected-capability' : ''} style={{ '--capability': capabilityColors[index] } as React.CSSProperties}>
                  <button type="button" onClick={() => setCapability(index)}>{index === 1 ? 'Ant.' : name.slice(0, 4) + '.'}</button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row) => {
              const rowId = `${row.category}-${row.name}`;
              const isExpanded = expanded === rowId;
              return (
                <BenchmarkRow key={rowId} row={row} expanded={isExpanded} onToggle={() => setExpanded(isExpanded ? null : rowId)} selectedCapability={capability} />
              );
            })}
          </tbody>
        </table>
        {!visibleRows.length && <div className="benchmark-empty">No benchmarks match these filters. Try a broader search.</div>}
      </div>

      <div className="benchmark-pagination">
        <span>Showing {filtered.length ? page * pageSize + 1 : 0}–{Math.min((page + 1) * pageSize, filtered.length)} of {filtered.length}</span>
        <div>
          <button type="button" onClick={() => setPage((value) => Math.max(0, value - 1))} disabled={page === 0}>← Previous</button>
          <span>{page + 1} / {pageCount}</span>
          <button type="button" onClick={() => setPage((value) => Math.min(pageCount - 1, value + 1))} disabled={page >= pageCount - 1}>Next →</button>
        </div>
      </div>
    </div>
  );
}

function BenchmarkRow({ row, expanded, onToggle, selectedCapability }: { row: Benchmark; expanded: boolean; onToggle: () => void; selectedCapability: number }) {
  const direct = row.coverage.filter((value) => value === 'direct').length;
  const partial = row.coverage.filter((value) => value === 'partial').length;

  return (
    <>
      <tr className={expanded ? 'expanded' : ''} onClick={onToggle}>
        <td><button type="button" className="benchmark-name" aria-expanded={expanded}>{row.name}<span>{expanded ? '−' : '+'}</span></button></td>
        <td><span className="venue-cell">{row.venue}</span></td>
        <td>{row.task}</td>
        <td><span className={`category-pill category-${row.category.toLowerCase()}`}>{row.category}</span></td>
        <td>{row.subcategory}</td>
        {row.coverage.map((value, index) => (
          <td key={`${row.name}-${index}`} className={selectedCapability === index ? 'selected-capability' : ''}>
            <span className={`coverage-symbol ${value}`} title={`${capabilityNames[index]}: ${coverageLabels[value]}`}><span className="sr-only">{coverageLabels[value]}</span></span>
          </td>
        ))}
      </tr>
      {expanded && (
        <tr className="benchmark-detail-row">
          <td colSpan={10}>
            <div>
              <span><b>{row.year}</b> publication year</span>
              <span><b>{direct}</b> directly evaluated capabilities</span>
              <span><b>{partial}</b> implicitly involved capabilities</span>
              <p><strong>Task profile</strong>{row.name} evaluates {row.task.toLowerCase()} in a {row.subcategory.toLowerCase()} setting, positioned within {categoryLabels[row.category].toLowerCase()}.</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
