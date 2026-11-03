import { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import { publications, links, Publication } from "../data/portfolio";

export default function PublicationsPage() {
  const [activeArea, setActiveArea] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const areas = useMemo(() => {
    const set = new Set(publications.map((p) => p.area));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchArea = activeArea === "All" || pub.area === activeArea;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchArea;
      const combined = `${pub.title} ${pub.authors} ${pub.venue} ${pub.abstract} ${pub.year}`.toLowerCase();
      return matchArea && combined.includes(q);
    });
  }, [activeArea, searchQuery]);

  const toggleAbstract = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const handleReset = () => {
    setActiveArea("All");
    setSearchQuery("");
  };

  return (
    <div className="publications-safeer-page">
      <PageHero
        title="Research Archive · 2024—2025"
        subtitle="Ideas made public. Peer-reviewed papers, book chapters, and conference proceedings."
        variant="publications"
      />

      {/* STATS STRIP */}
      <section className="section_pub-stats-bar">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="pub-stats-flex">
              <div className="pub-stat-group">
                <div className="pub-stat-box">
                  <div className="pub-stat-num">{String(publications.length).padStart(2, "0")}</div>
                  <div className="pub-stat-label">Indexed Works</div>
                </div>
                <div className="pub-stat-box">
                  <div className="pub-stat-num highlight">01</div>
                  <div className="pub-stat-label">Best Paper Award</div>
                </div>
                <div className="pub-stat-box">
                  <div className="pub-stat-num">IEEE · Springer</div>
                  <div className="pub-stat-label">SCOPUS &amp; LNNS</div>
                </div>
              </div>

              <div className="pub-scholar-btn-wrap">
                <a
                  href={links.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="safeer-white-btn"
                >
                  <span className="safeer-white-btn-text">Google Scholar Citations</span>
                  <span className="safeer-white-btn-icon">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTER CONTROLS */}
      <section className="section_pub-library">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="pub-controls-wrapper">
              <div className="pub-search-bar">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search papers by title, author, venue, or keywords..."
                  className="pub-search-input"
                  aria-label="Search publications"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="pub-search-clear"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="pub-area-filters" role="tablist" aria-label="Filter by research area">
                {areas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    className={`pub-filter-pill ${activeArea === area ? "active" : ""}`}
                    onClick={() => setActiveArea(area)}
                  >
                    {area}
                  </button>
                ))}
              </div>

              <div className="pub-results-indicator">
                <span>{String(filteredPublications.length).padStart(2, "0")} records found</span>
                <i>·</i>
                <span>{activeArea === "All" ? "All disciplines" : activeArea}</span>
              </div>
            </div>

            {/* PUBLICATIONS LIST */}
            {filteredPublications.length > 0 ? (
              <div className="pub-cards-stack">
                {filteredPublications.map((pub: Publication, index: number) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <article
                      key={pub.title}
                      className={`pub-entry-card ${pub.featured ? "is-featured-paper" : ""}`}
                    >
                      <div className="pub-rail-col">
                        <span className="pub-rail-index">{String(index + 1).padStart(2, "0")}</span>
                        <span className="pub-rail-year">{pub.year}</span>
                      </div>

                      <div className="pub-main-col">
                        <div className="pub-meta-row">
                          <span className="pub-area-badge">{pub.area}</span>
                          <span className="pub-venue-badge">{pub.venue}</span>
                          {pub.featured && (
                            <span className="pub-award-badge">
                              🏆 Springer ICDMIS Best Paper Award
                            </span>
                          )}
                        </div>

                        <h3 className="pub-entry-title">{pub.title}</h3>

                        <p className="pub-entry-authors">
                          <strong>Authors:</strong> {pub.authors}
                        </p>

                        <div className="pub-abstract-block">
                          <p className={`pub-abstract-text ${isExpanded ? "expanded" : ""}`}>
                            {pub.abstract}
                          </p>
                          <button
                            type="button"
                            className="pub-expand-btn"
                            onClick={() => toggleAbstract(index)}
                          >
                            {isExpanded ? "Show less ↑" : "Read abstract ↓"}
                          </button>
                        </div>
                      </div>

                      <div className="pub-action-col">
                        {pub.url ? (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noreferrer"
                            className="pub-open-link-btn"
                            aria-label={`Open publication ${pub.title}`}
                          >
                            <span>Read Paper</span>
                            <span className="arrow-glyph">↗</span>
                          </a>
                        ) : (
                          <a
                            href={links.scholar}
                            target="_blank"
                            rel="noreferrer"
                            className="pub-open-link-btn"
                            aria-label="View on Google Scholar"
                          >
                            <span>Scholar</span>
                            <span className="arrow-glyph">↗</span>
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="pub-empty-state">
                <div className="pub-empty-icon">📄</div>
                <h3 className="pub-empty-title">No matching papers found</h3>
                <p className="pub-empty-desc">
                  Try adjusting your search terms or selecting a different research discipline.
                </p>
                <button type="button" onClick={handleReset} className="pub-reset-btn">
                  Reset Library Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GOOGLE SCHOLAR BANNER */}
      <section className="section_scholar-cta">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="scholar-cta-card">
              <div className="scholar-cta-copy">
                <span className="section-eyebrow light">Academic Profiles</span>
                <h2 className="display-4xl text-color-white">
                  Continue exploring citations &amp; preprints on Google Scholar
                </h2>
                <p className="scholar-cta-desc">
                  Full citation index, co-author networks, and metrics tracked through Google Scholar and ResearchGate.
                </p>
              </div>
              <div className="scholar-cta-action">
                <a
                  href={links.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="safeer-white-btn"
                >
                  <span className="safeer-white-btn-text">Open Google Scholar Profile</span>
                  <span className="safeer-white-btn-icon">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
