import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Chatbot from "../components/Chatbot";
import {
  links,
  milestones,
  coreExpertise,
  skillMetrics,
  skillCategories,
  keyStats,
  personalNarrative,
  convocationGallery,
  clubJourneyGallery,
} from "../data/portfolio";

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeClubSlide, setActiveClubSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (!document.hidden) setActiveSlide((prev) => (prev + 1) % convocationGallery.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (!document.hidden) setActiveClubSlide((prev) => (prev + 1) % clubJourneyGallery.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const currentMemory = convocationGallery[activeSlide];
  const currentClubMemory = clubJourneyGallery[activeClubSlide];

  return (
    <div className="about-safeer-page">
      <PageHero
        title="About Md Sanwarul Islam"
        subtitle="AI Researcher, Machine Learning Engineer & East West University Graduate"
        variant="about"
      />

      {/* 1. HERO BIO PROFILE */}
      <section className="section_about-profile">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="about-profile-grid">
              <div className="about-profile-visual">
                <div className="about-profile-frame">
                  <img
                    src="/graduation-gallery-img_9464.jpg"
                    alt="Md Sanwarul Islam"
                    className="about-profile-img"
                    loading="eager"
                  />
                  <div className="about-profile-badge">
                    <span>EWU CSE '25</span>
                  </div>
                </div>
              </div>

              <div className="about-profile-copy">
                <span className="section-eyebrow">Researcher · Developer · Data Professional</span>
                <h1 className="about-profile-name">Md Sanwarul Islam</h1>
                <p className="about-profile-role">
                  Data Scientist, Researcher, Developer <br />
                  <span>&amp; Event Coordinator</span>
                </p>

                <div className="about-profile-bio">
                  <p>
                    Dynamic researcher and programmer with expertise in deep learning, data analysis, and AI development.
                    An award-winning contributor passionate about solving real-world problems with artificial intelligence.
                  </p>
                  <p>
                    I’m a Computer Science and Engineering graduate from East West University. My work includes an
                    award-winning medical image analysis project using 3D CNNs.
                  </p>
                  <p>
                    Since 2022, I’ve developed AI solutions for healthcare and agriculture, published research papers,
                    and organized technology events connecting students with industry professionals.
                  </p>
                </div>

                <div className="about-profile-socials">
                  <a href={links.scholar} target="_blank" rel="noreferrer" className="about-social-pill">
                    <img src="/Rectangle8.png" alt="" />
                    <span>Google Scholar</span>
                  </a>
                  <a href={links.github} target="_blank" rel="noreferrer" className="about-social-pill">
                    <img src="/Rectangle10.png" alt="" />
                    <span>GitHub</span>
                  </a>
                  <a href={links.linkedin} target="_blank" rel="noreferrer" className="about-social-pill">
                    <img src="/Rectangle9.png" alt="" />
                    <span>LinkedIn</span>
                  </a>
                  <a href={links.researchgate} target="_blank" rel="noreferrer" className="about-social-pill">
                    <span>ResearchGate</span>
                  </a>
                  <Link to="/games" className="about-games-btn">
                    <span>Arcade Games ↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROFESSIONAL HIGHLIGHTS METRICS */}
      <section className="section_about-metrics">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="about-metrics-grid">
              {keyStats.map((stat, idx) => (
                <div key={idx} className="about-metric-card">
                  <div className="about-metric-number">{stat.value}</div>
                  <h3 className="about-metric-label">{stat.label}</h3>
                  <p className="about-metric-detail">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL MANIFESTO */}
      <section className="section_about-manifesto" id="who-i-am">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="about-manifesto-grid">
              <div className="about-manifesto-heading">
                <span className="section-subtitle">(Who I Am)</span>
                <h2>Research thinking.<br /><em>Product mindset.</em></h2>
                <div className="about-manifesto-mark" aria-hidden="true">SI</div>
              </div>
              <div className="about-manifesto-copy">
                <p>I am a Computer Science and Engineering graduate from East West University with a deep interest in machine learning, medical AI, computer vision, and full-stack product development.</p>
                <p>My work began with research questions: how can intelligent models identify disease earlier, interpret complex images, or reveal useful patterns in data? That curiosity grew into award-winning academic work and practical engineering experience.</p>
                <p>Today, I bring those two perspectives together. I value careful experimentation, honest evaluation, clean implementation, and accessible user experiences. My long-term goal is to contribute to responsible AI research and build systems that create measurable social value.</p>
                <div className="about-principles-row" aria-label="Working principles">
                  <span><i>01</i>Evidence first</span>
                  <span><i>02</i>Human impact</span>
                  <span><i>03</i>Continuous growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UNDERGRADUATE JOURNEY (CHAPTERS & NARRATIVE) */}
      <section className="section_graduation-journey">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(The Undergraduate Story)</span>
              </div>
              <h2 className="display-6xl">East West University Journey (2021 — 2025)</h2>
            </div>

            <div className="graduation-narrative-layout">
              <aside className="graduation-narrative-sidebar">
                <span className="section-eyebrow">The Journey</span>
                <p className="graduation-sidebar-text">
                  Four years shaped by resilience, friendship, service, and gratitude.
                </p>
                <div className="graduation-sidebar-stats">
                  <div className="grad-stat-item">
                    <strong>03</strong>
                    <span>Student Clubs</span>
                  </div>
                  <div className="grad-stat-item">
                    <strong>02</strong>
                    <span>National Events</span>
                  </div>
                  <div className="grad-stat-item">
                    <strong>16th</strong>
                    <span>Executive Panel</span>
                  </div>
                </div>
              </aside>

              <div className="graduation-chapters-list">
                {personalNarrative.map((chapter) => (
                  <article key={chapter.number} className="graduation-chapter-card">
                    <span className="chapter-number">{chapter.number}</span>
                    <div className="chapter-body">
                      <h3 className="chapter-title">{chapter.title}</h3>
                      {chapter.paragraphs.map((p, i) => (
                        <p key={i} className="chapter-p">{p}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* TWO NATIONAL EVENTS */}
            <div className="graduation-events-grid">
              <article className="grad-event-card">
                <span className="grad-event-kicker">Major Event · 01</span>
                <h3 className="grad-event-title">National Entrepreneur Summit</h3>
                <time className="grad-event-date">10 December 2023</time>
              </article>
              <article className="grad-event-card">
                <span className="grad-event-kicker">Major Event · 02</span>
                <h3 className="grad-event-title">National Telco Warfare</h3>
                <time className="grad-event-date">23 December 2024</time>
              </article>
              <div className="grad-event-note">
                <span className="grad-event-note-icon">🏆</span>
                <p>Two landmark events delivered successfully with a team I will always be proud of.</p>
              </div>
            </div>

            {/* CONVOCATION CAROUSEL */}
            <div className="convocation-carousel-wrapper">
              <div className="convocation-carousel-header">
                <div>
                  <span className="section-eyebrow">Convocation 2026 Archive</span>
                  <h3 className="convocation-carousel-title">Milestones &amp; Reflections</h3>
                </div>
                <div className="convocation-carousel-count">
                  {String(activeSlide + 1).padStart(2, "0")} / {String(convocationGallery.length).padStart(2, "0")}
                </div>
              </div>

              <div className="convocation-stage">
                <div className="convocation-media">
                  <img
                    src={currentMemory.image}
                    alt={currentMemory.alt}
                    className="convocation-main-image"
                  />
                </div>
                <div className="convocation-info">
                  <span className="convocation-eyebrow">{currentMemory.eyebrow}</span>
                  <h4 className="convocation-slide-title">{currentMemory.title}</h4>
                  <p className="convocation-slide-caption">{currentMemory.caption}</p>

                  <div className="convocation-controls">
                    <div className="convocation-dots">
                      {convocationGallery.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`convocation-dot ${i === activeSlide ? "active" : ""}`}
                          onClick={() => setActiveSlide(i)}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="convocation-arrows">
                      <button
                        type="button"
                        onClick={() => setActiveSlide((prev) => (prev - 1 + convocationGallery.length) % convocationGallery.length)}
                        className="carousel-arrow-btn"
                        aria-label="Previous slide"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSlide((prev) => (prev + 1) % convocationGallery.length)}
                        className="carousel-arrow-btn"
                        aria-label="Next slide"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GRADUATION GRATITUDE */}
            <div className="graduation-gratitude-card">
              <div className="grad-gratitude-title">
                <span className="section-eyebrow light">With Gratitude</span>
                <h2>To Those Who Showed Me the Way</h2>
              </div>
              <div className="grad-gratitude-body">
                <p>
                  I am especially thankful to <strong>Dr. Raihan Ul Islam</strong>,{" "}
                  <strong>Dr. Mohammad Manzurul Alam</strong>, and <strong>Dr. Ahmed Wasif Reza</strong> for their kindness,
                  support, and guidance. Their teaching, knowledge, and experience inspired me and helped me find the right
                  path toward better results.
                </p>
                <p>
                  To every teacher and friend who stood beside me: thank you. I hope the bonds we built will continue far
                  beyond university. If I made mistakes along the way, knowingly or unknowingly, I sincerely ask for
                  forgiveness and wish everyone a happy and successful life.
                </p>
                <div className="grad-gratitude-signoff">
                  <span>Forever grateful.</span>
                  <strong>Thank you, EWU.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EWUTC CLUB JOURNEY */}
      <section className="section_club-journey">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(Leadership &amp; Service)</span>
              </div>
              <h2 className="display-6xl">East West University Telecommunications Club</h2>
            </div>

            <div className="club-journey-stage">
              <div className="club-journey-image-wrapper">
                <img
                  src={currentClubMemory.image}
                  alt={currentClubMemory.alt}
                  className="club-journey-image"
                />
              </div>
              <div className="club-journey-info">
                <span className="section-eyebrow">{currentClubMemory.eyebrow}</span>
                <h3 className="club-journey-title">{currentClubMemory.title}</h3>
                <p className="club-journey-caption">{currentClubMemory.caption}</p>

                <div className="club-journey-controls">
                  <div className="convocation-dots">
                    {clubJourneyGallery.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`convocation-dot ${idx === activeClubSlide ? "active" : ""}`}
                        onClick={() => setActiveClubSlide(idx)}
                        aria-label={`Club slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="convocation-arrows">
                    <button
                      type="button"
                      onClick={() => setActiveClubSlide((prev) => (prev - 1 + clubJourneyGallery.length) % clubJourneyGallery.length)}
                      className="carousel-arrow-btn"
                      aria-label="Previous club slide"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveClubSlide((prev) => (prev + 1) % clubJourneyGallery.length)}
                      className="carousel-arrow-btn"
                      aria-label="Next club slide"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESEARCH INTERESTS & PILLARS */}
      <section className="section_research-pillars">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(Research Interests)</span>
              </div>
              <h2 className="display-6xl">Questions Worth Investigating</h2>
            </div>

            <div className="about-interest-grid">
              {coreExpertise.map((item, idx) => (
                <article key={idx} className="about-interest-card">
                  <span className="about-interest-number">0{idx + 1}</span>
                  <h3 className="about-interest-title">{item.title}</h3>
                  <p className="about-interest-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL EXPERTISE & SKILLS */}
      <section className="section_technical-skills">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="about-skills-header-grid">
              <div>
                <span className="section-eyebrow light">Technical Expertise</span>
                <h2 className="display-6xl text-color-white">Tools for Research &amp; Production</h2>
                <p className="about-skills-sub">
                  A balanced toolkit spanning model development, analytical workflows, software engineering, and academic communication.
                </p>
              </div>

              <div className="about-strengths-list">
                {skillMetrics.map((sm, i) => (
                  <div key={i} className="about-strength-item">
                    <div className="strength-label-row">
                      <b>{sm.name}</b>
                      <em>{sm.level}%</em>
                    </div>
                    <div className="strength-bar-track" role="progressbar" aria-valuenow={sm.level}>
                      <div className="strength-bar-fill" style={{ width: `${sm.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-skill-groups-grid">
              {skillCategories.map((cat, i) => (
                <article key={i} className="about-skill-group-card">
                  <h3 className="skill-group-title">{cat.title}</h3>
                  <div className="skill-pills-wrap">
                    {cat.skills.map((s, si) => (
                      <span key={si} className="skill-pill">{s}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CAREER TIMELINE & MILESTONES */}
      <section className="section_career-timeline">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="section-title_wrapper">
              <div className="section-subtitle">
                <span className="text-size-regular">(Experience &amp; Education)</span>
              </div>
              <h2 className="display-6xl">Milestones &amp; Academic Background</h2>
            </div>

            <div className="milestones-timeline-list">
              {milestones.map((m, idx) => (
                <article key={idx} className="timeline-entry-card">
                  <div className="timeline-period-col">
                    <span className="timeline-period-badge">{m.period}</span>
                  </div>
                  <div className="timeline-content-col">
                    <h3 className="timeline-title">{m.title}</h3>
                    <div className="timeline-org">{m.organization}</div>
                    <p className="timeline-desc">{m.description}</p>
                    {m.link && (
                      <a href={m.link} target="_blank" rel="noreferrer" className="timeline-link">
                        Learn more ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOOKING AHEAD & PROFESSIONAL NETWORK */}
      <section className="section_about-future">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="about-future-panel">
              <div className="about-future-copy">
                <span className="section-eyebrow light">Looking Ahead</span>
                <h2>Research that earns trust.<br />Technology that improves lives.</h2>
                <p>I aim to deepen my work in responsible AI, medical intelligence, and data science while collaborating with researchers and engineering teams on meaningful, high-impact problems.</p>
                <Link to="/research" className="about-future-cta">Explore my research <span>↗</span></Link>
              </div>
              <div className="about-network-block">
                <span className="section-eyebrow light">Professional Network</span>
                <h3>Connect &amp; collaborate</h3>
                <div className="about-network-links">
                  <a href={links.scholar} target="_blank" rel="noreferrer"><span>Google Scholar<small>Publications and academic profile</small></span><i>↗</i></a>
                  <a href={links.github} target="_blank" rel="noreferrer"><span>GitHub<small>Code, experiments, and projects</small></span><i>↗</i></a>
                  <a href={links.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn<small>Professional experience and network</small></span><i>↗</i></a>
                  <a href={`mailto:${links.email}`}><span>Email<small>{links.email}</small></span><i>↗</i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
    </div>
  );
}
