import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { links, projects, publications, keyStats } from "../data/portfolio";
import "./HomeLuxury.css";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProject, setActiveProject] = useState(0);
  const [projectCarouselPaused, setProjectCarouselPaused] = useState(false);
  const projectTrackRef = useRef<HTMLDivElement>(null);

  const goToProject = (index: number) => {
    const track = projectTrackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".home-project-card");
    const next = (index + projects.length) % projects.length;
    setActiveProject(next);
    track.scrollTo({ left: next * ((card?.offsetWidth ?? 360) + 12), behavior: "smooth" });
  };

  useEffect(() => {
    if (projectCarouselPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => goToProject(activeProject + 1), 4200);
    return () => window.clearInterval(timer);
  }, [activeProject, projectCarouselPaused]);

  const featuredPublications = [...publications]
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
    .slice(0, 3);

  const faqs = [
    {
      q: "What are your primary research specializations?",
      a: "My research focuses on Medical AI (such as 3D CNNs for brain tumor and glioblastoma segmentation), Computer Vision (transfer learning for agricultural leaf disease detection), and Sustainable AI.",
    },
    {
      q: "Where has your research been published?",
      a: "My papers and chapters are published with Springer LNNS (SCOPUS indexed), IEEE Conference Proceedings (including QPAIN), and international peer-reviewed journals.",
    },
    {
      q: "Are you open to graduate research and academic collaborations?",
      a: "Yes! I actively collaborate with international research groups, universities, and industry labs on co-authoring papers, developing novel architectures, and applying for grants.",
    },
    {
      q: "What tech stack do you utilize for engineering and modeling?",
      a: "For deep learning: Python, PyTorch, TensorFlow, OpenCV, Scikit-learn, and CUDA. For production web engineering: React, TypeScript, Vite, Go, PostgreSQL, and cloud deployments.",
    },
    {
      q: "How can I get in touch for projects or speaking engagements?",
      a: "You can reach me directly via WhatsApp at +8801537662683, email at sanwarul.ewu@gmail.com, or explore my citations on Google Scholar and GitHub.",
    },
  ];

  return (
    <div className="home-safeer-page">
      <section className="raw-home-hero" aria-label="Introduction to Md Sanwarul Islam">
        <div className="raw-hero-head">
          <span>Portfolio / 2026</span>
          <p><i /> Available for research collaboration</p>
          <span>Dhaka, Bangladesh</span>
        </div>
        <div className="raw-hero-title">
          <span>AI RESEARCHER</span>
          <h1>SANWARUL<br />ISLAM</h1>
        </div>
        <div className="raw-hero-portrait">
          <div className="raw-portrait-halo" aria-hidden="true" />
          <img src="/Rectangle3.png" alt="Md Sanwarul Islam" fetchPriority="high" />
          <div className="raw-portrait-tag"><span>Research</span><b>×</b><span>Engineering</span></div>
        </div>
        <div className="raw-hero-copy">
          <p>Building intelligent, production-ready systems across medical imaging, computer vision, data science, and full-stack engineering.</p>
          <div className="raw-hero-actions">
            <Link to="/research" className="raw-dot-button"><i aria-hidden="true" /><span>Explore research</span><i aria-hidden="true" /></Link>
            <Link to="/projects" className="raw-text-link">Selected systems <span>↗</span></Link>
          </div>
        </div>
        <div className="raw-hero-figures" aria-label="Research figures">
          <div><strong>11+</strong><span>Published works</span></div>
          <div><strong>01</strong><span>Springer best paper</span></div>
          <div><strong>3+</strong><span>Years in AI research</span></div>
        </div>
        <a className="raw-scroll-cue" href="#portfolio-introduction">Scroll <span>↓</span></a>
      </section>

      <section className="home-proof-strip" aria-label="Research highlights">
        <div className="home-proof-inner">
          {keyStats.map((stat) => (
            <div className="home-proof-item" key={stat.label}>
              <strong>{stat.value}</strong><span>{stat.label}</span><p>{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ABOUT PROFILE SECTION */}
      <section className="section_about" id="portfolio-introduction">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="about_wrapper">
              <div className="about_left">
                <div className="section-subtitle">
                  <span className="text-size-regular">(About Me)</span>
                </div>
                <div className="about_trust-block">
                  <div className="about_trust-rating">
                    <div className="about_trust-number">
                      <span className="display-5xl">01</span>
                    </div>
                    <div className="about_trust-label">Springer Award Winner</div>
                  </div>
                  <div className="text-size-large">11+ Research Projects &amp; Published Works</div>
                  <div className="about_trust-client-avatar-wrapper">
                    <div className="about_trust-client">
                      <img src="/Rectangle3.png" alt="Md Sanwarul Islam" className="about_trust-avatar" />
                    </div>
                    <div className="about_trust-client">
                      <img src="/about-profile-portrait.jpg" alt="Sanwarul" className="about_trust-avatar" />
                    </div>
                    <div className="about_trust-client">
                      <img src="/convocation-friends.jpg" alt="Co-author" className="about_trust-avatar" />
                    </div>
                    <div className="about_trust-client is-text">
                      <span className="text-size-regular text-color-white">IEEE</span>
                    </div>
                  </div>
                </div>

                <div className="about-socials-vertical">
                  <a href={links.scholar} target="_blank" rel="noreferrer" className="about-social-row">
                    <img src="/Rectangle8.png" alt="" />
                    <span>Google Scholar Profile</span>
                  </a>
                  <a href={links.github} target="_blank" rel="noreferrer" className="about-social-row">
                    <img src="/Rectangle10.png" alt="" />
                    <span>GitHub Repositories</span>
                  </a>
                  <a href={links.linkedin} target="_blank" rel="noreferrer" className="about-social-row">
                    <img src="/Rectangle9.png" alt="" />
                    <span>LinkedIn Network</span>
                  </a>
                  <a href={links.researchgate} target="_blank" rel="noreferrer" className="about-social-row">
                    <span>ResearchGate Record</span>
                  </a>
                </div>
              </div>

              <div className="about_right">
                <div className="section-title">
                  <h2 className="display-4xl">
                    Translating Deep Learning <br />into Tangible Real-World Solutions
                  </h2>
                </div>
                <div className="about-bio-paragraphs">
                  <p className="about-bio-p">
                    Dynamic researcher and programmer with expertise in deep learning, data analysis, and AI development.
                    An award-winning contributor passionate about solving real-world problems with artificial intelligence.
                  </p>
                  <p className="about-bio-p">
                    I’m a Computer Science and Engineering graduate from East West University. My work includes an
                    award-winning medical image analysis project using 3D CNNs.
                  </p>
                  <p className="about-bio-p">
                    Since 2022, I’ve developed AI solutions for healthcare and agriculture, published research papers,
                    and organized technology events connecting students with industry professionals.
                  </p>
                </div>

                <div className="about_cta-row">
                  <Link to="/about" className="safeer-hero-btn is-dark">
                    <span className="safeer-hero-btn-text">Read Full Story &amp; Journey</span>
                    <span className="safeer-hero-btn-icon">→</span>
                  </Link>
                  <Link to="/research" className="safeer-hero-btn is-brand">
                    <span className="safeer-hero-btn-text">Explore Research Domains</span>
                    <span className="safeer-hero-btn-icon">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPRINGER AWARD BANNER */}
      <section className="section_award-banner">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="award-banner-card">
              <div className="award-banner-content">
                <span className="award-kicker">Recognition · Springer ICDMIS 2024</span>
                <h2 className="award-heading">Best Paper Award Winner</h2>
                <p className="award-desc">
                  “Prediction of Glioblastoma Using 3D-CNN” — co-authored by Md Sanwarul Islam. Recognized for breakthrough
                  contributions to volumetric medical-image classification and decision-support AI.
                </p>
              </div>
              <div className="award-banner-cta">
                <a
                  href={links.award}
                  target="_blank"
                  rel="noreferrer"
                  className="safeer-white-btn"
                >
                  <span className="safeer-white-btn-text">Award Details &amp; Citation</span>
                  <span className="safeer-white-btn-icon">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED RESEARCH PUBLICATIONS */}
      <section className="section_featured-research">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(Selected Research)</span>
              </div>
              <div className="section-title-row-split">
                <h2 className="display-6xl">
                  Breakthrough Studies Across <br />Healthcare &amp; Vision
                </h2>
                <Link to="/publications" className="safeer-hero-btn is-brand">
                  <span className="safeer-hero-btn-text">View All Publications</span>
                  <span className="safeer-hero-btn-icon">→</span>
                </Link>
              </div>
            </div>

            <div className="featured-pubs-grid">
              {featuredPublications.map((pub, idx) => (
                <article key={pub.title} className={`featured-pub-card ${pub.featured ? "is-award" : ""}`}>
                  <div className="featured-pub-top">
                    <span className="pub-area-badge">{pub.area}</span>
                    <span className="pub-year-badge">{pub.year}</span>
                    {pub.featured && <span className="award-tag">🏆 Best Paper</span>}
                  </div>
                  <h3 className="featured-pub-title">{pub.title}</h3>
                  <p className="featured-pub-authors">{pub.authors}</p>
                  <p className="featured-pub-abstract">{pub.abstract}</p>
                  <div className="featured-pub-footer">
                    <span className="pub-venue-text">{pub.venue}</span>
                    <a
                      href={pub.url || links.scholar}
                      target="_blank"
                      rel="noreferrer"
                      className="pub-read-btn"
                    >
                      Read Paper ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTION PROJECTS */}
      <section className="section_featured-projects">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(Engineering &amp; Live Systems)</span>
              </div>
              <div className="section-title-row-split">
                <h2 className="display-6xl">Projects Beyond the Paper</h2>
                <div className="home-project-heading-actions">
                  <span className="home-project-count">{String(projects.length).padStart(2, "0")} projects</span>
                  <div className="home-project-carousel-controls" aria-label="Project carousel controls">
                    <button type="button" onClick={() => goToProject(activeProject - 1)} aria-label="Previous projects">←</button>
                    <button type="button" onClick={() => goToProject(activeProject + 1)} aria-label="Next projects">→</button>
                  </div>
                  <Link to="/projects" className="safeer-hero-btn is-dark">
                    <span className="safeer-hero-btn-text">All Projects</span>
                    <span className="safeer-hero-btn-icon">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="home-project-carousel-shell" onMouseEnter={() => setProjectCarouselPaused(true)} onMouseLeave={() => setProjectCarouselPaused(false)} onFocusCapture={() => setProjectCarouselPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setProjectCarouselPaused(false); }}>
              <div className="projects-preview-grid home-project-carousel-track" ref={projectTrackRef} tabIndex={0} aria-label="All portfolio projects" onScroll={(event) => { const card = event.currentTarget.querySelector<HTMLElement>(".home-project-card"); const step = (card?.offsetWidth ?? 360) + 12; const index = Math.round(event.currentTarget.scrollLeft / step); if (index !== activeProject && index >= 0 && index < projects.length) setActiveProject(index); }}>
              {projects.map((proj, index) => (
                <article key={proj.title} className={`home-project-card ${index === activeProject ? "is-current" : ""}`} aria-label={`${index + 1} of ${projects.length}: ${proj.title}`}>
                  <div className="home-project-media">
                    <img src={proj.image} alt={`${proj.title} project preview`} className="home-project-img" loading="lazy" decoding="async" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/Rectangle37.png"; }} />
                    {proj.featured && <span className="home-live-badge">● Live</span>}
                  </div>
                  <div className="home-project-body">
                    <h3 className="home-project-title">{proj.title}</h3>
                    <p className="home-project-desc">{proj.description}</p>
                    <div className="home-project-stack">
                      {proj.stack.map((s) => (
                        <span key={s} className="stack-pill">{s}</span>
                      ))}
                    </div>
                    {proj.liveUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="home-live-link">
                        Visit Live Website ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
              </div>
              <div className="home-project-carousel-status" aria-hidden="true"><span>{String(activeProject + 1).padStart(2, "0")}</span><div><i style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }} /></div><span>{String(projects.length).padStart(2, "0")}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORE CAPABILITIES */}
      <section className="section_capabilities">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="capabilities-grid">
              <div className="capabilities-copy">
                <span className="section-eyebrow light">Core Capabilities</span>
                <h2 className="display-4xl text-color-white">
                  From research question to working system.
                </h2>
                <p className="capabilities-p">
                  I combine academic methodology with practical engineering to produce work that is measurable,
                  reproducible, and useful.
                </p>
              </div>

              <div className="capabilities-cards">
                <div className="cap-card">
                  <div className="cap-icon">🔬</div>
                  <h3 className="cap-title">Research Design</h3>
                  <p className="cap-text">
                    Literature review, experimental design, baseline comparative analysis, and rigorous academic evaluation.
                  </p>
                </div>
                <div className="cap-card">
                  <div className="cap-icon">🧠</div>
                  <h3 className="cap-title">AI &amp; Deep Learning</h3>
                  <p className="cap-text">
                    3D CNNs, computer vision architectures, transfer learning, and model explainability for clinical workflows.
                  </p>
                </div>
                <div className="cap-card">
                  <div className="cap-icon">⚡</div>
                  <h3 className="cap-title">Full-Stack Data Systems</h3>
                  <p className="cap-text">
                    Scalable web applications, REST APIs, PostgreSQL data architectures, and interactive analytics dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ACADEMIC FAQ */}
      <section className="section_faq">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="faq_wrapper">
              <div className="section-title_wrapper">
                <div className="section-subtitle">
                  <span className="text-size-regular">(Common Inquiries)</span>
                </div>
                <h2 className="display-6xl">Frequently Asked Questions</h2>
              </div>

              <div className="faq-list">
                {faqs.map((faq, idx) => (
                  <div key={idx} className={`faq-accordion-item ${openFaq === idx ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      <span className="faq-toggle-icon">{openFaq === idx ? "−" : "+"}</span>
                    </button>
                    {openFaq === idx && (
                      <div className="faq-answer-panel">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
