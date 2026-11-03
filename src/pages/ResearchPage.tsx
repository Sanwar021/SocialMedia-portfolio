import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import {
  researchDomains,
  researchStreams,
  researchPrinciples,
  researchFaqs,
  links,
} from "../data/portfolio";

export default function ResearchPage() {
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const activeDomain = researchDomains[activeDomainIdx];

  return (
    <div className="research-safeer-page">
      <PageHero
        title="Research Portfolio & Frontiers"
        subtitle="Investigating intelligent systems across medical imaging, computer vision, and responsible AI."
        variant="research"
      />

      {/* 1. RESEARCH SIGNAL STRIP (MARQUEE) */}
      <section className="research-signal-strip" aria-label="Research disciplines">
        <div className="research-signal-track">
          {[...researchDomains, ...researchDomains].map((d, idx) => (
            <span key={`${d.id}-${idx}`} className="signal-item">
              <strong>{d.title}</strong>
              <i className="signal-dot">·</i>
            </span>
          ))}
        </div>
      </section>

      {/* 2. RESEARCH DOMAINS INTERACTIVE ECOSYSTEM */}
      <section className="section_research-domains" id="research-domains">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(Research Domains)</span>
              </div>
              <h2 className="display-6xl">One Connected Research Ecosystem</h2>
              <p className="section-intro-desc">
                Select a domain to explore its research questions, methods, working toolkit, and intended impact.
              </p>
            </div>

            <div className="research-domain-layout">
              {/* Domain Selector Tabs */}
              <div className="research-domain-tabs" role="tablist" aria-label="Research domains">
                {researchDomains.map((domain, idx) => (
                  <button
                    key={domain.id}
                    type="button"
                    role="tab"
                    aria-selected={activeDomainIdx === idx}
                    className={`domain-tab-btn ${activeDomainIdx === idx ? "active" : ""}`}
                    onClick={() => setActiveDomainIdx(idx)}
                  >
                    <span className="domain-tab-number">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="domain-tab-copy">
                      <small className="domain-tab-kicker">{domain.kicker}</small>
                      <strong className="domain-tab-title">{domain.title}</strong>
                    </div>
                    <span className="domain-tab-arrow">→</span>
                  </button>
                ))}
              </div>

              {/* Domain Detail Display */}
              <article className="research-domain-detail-card" data-accent={activeDomain.accent}>
                <div className="domain-detail-topline">
                  <span className="domain-field-tag">
                    Research Field · {String(activeDomainIdx + 1).padStart(2, "0")}
                  </span>
                  <span className="domain-status-badge">
                    <i className="status-live-dot"></i> Active Discipline
                  </span>
                </div>

                <div className="domain-detail-header">
                  <span className="domain-kicker">{activeDomain.kicker}</span>
                  <h3 className="domain-title">{activeDomain.title}</h3>
                </div>

                <p className="domain-summary">{activeDomain.summary}</p>

                <div className="domain-columns-grid">
                  <div className="domain-focus-box">
                    <h4 className="domain-box-title">Research Focus</h4>
                    <ul className="domain-focus-list">
                      {activeDomain.focus.map((f, fi) => (
                        <li key={fi}>
                          <span className="focus-num">{String(fi + 1).padStart(2, "0")}</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="domain-toolkit-box">
                    <h4 className="domain-box-title">Working Toolkit</h4>
                    <div className="domain-tools-wrap">
                      {activeDomain.tools.map((t, ti) => (
                        <span key={ti} className="toolkit-pill">{t}</span>
                      ))}
                    </div>

                    <div className="domain-outcome-box">
                      <h4 className="domain-box-title">Real-World Outcome</h4>
                      <p className="domain-outcome-text">{activeDomain.outcome}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACTIVE RESEARCH STREAMS */}
      <section className="section_research-streams" id="research-streams">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(Active Investigations)</span>
              </div>
              <h2 className="display-6xl">Current Research Streams</h2>
            </div>

            <div className="research-streams-grid">
              {researchStreams.map((stream) => (
                <article key={stream.number} className="research-stream-card">
                  <span className="stream-number">{stream.number}</span>
                  <h3 className="stream-title">{stream.title}</h3>
                  <p className="stream-text">{stream.text}</p>
                  <div className="stream-tags-wrap">
                    {stream.tags.map((tag, ti) => (
                      <span key={ti} className="stream-tag-pill">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESEARCH PRINCIPLES */}
      <section className="section_research-principles">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(Methodology &amp; Ethics)</span>
              </div>
              <h2 className="display-6xl text-color-white">Foundational Principles</h2>
            </div>

            <div className="research-principles-grid">
              {researchPrinciples.map((p, idx) => (
                <div key={idx} className="research-principle-card">
                  <span className="principle-number">0{idx + 1}</span>
                  <h3 className="principle-title">{p.title}</h3>
                  <p className="principle-text">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESEARCH FAQ */}
      <section className="section_research-faq">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(Scientific Inquiries)</span>
              </div>
              <h2 className="display-6xl">Frequently Asked Questions</h2>
            </div>

            <div className="research-faq-list">
              {researchFaqs.map((faq, idx) => (
                <div key={idx} className={`faq-accordion-item ${openFaqIdx === idx ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                    aria-expanded={openFaqIdx === idx}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-toggle-icon">{openFaqIdx === idx ? "−" : "+"}</span>
                  </button>
                  {openFaqIdx === idx && (
                    <div className="faq-answer-panel">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="research-cta-strip">
              <p>Interested in collaborating on research or co-authoring a paper?</p>
              <div className="research-cta-btns">
                <Link to="/publications" className="safeer-hero-btn is-brand">
                  <span className="safeer-hero-btn-text">View Publications</span>
                </Link>
                <a href={links.scholar} target="_blank" rel="noreferrer" className="safeer-hero-btn is-dark">
                  <span className="safeer-hero-btn-text">Google Scholar ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
