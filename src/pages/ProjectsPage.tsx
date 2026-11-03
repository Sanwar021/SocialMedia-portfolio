import { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import { projects, Project, links } from "../data/portfolio";

const filterCategories = [
  "All",
  "Featured",
  "AI",
  "Business Systems",
  "Hospitality",
  "FinTech",
  "Web Development",
  "Research",
  "UI/UX",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    if (activeCategory === "Featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="projects-safeer-page">
      <PageHero
        title="Engineering Projects & Live Systems"
        subtitle="Practical systems built with research thinking. Selected AI experiments, health platforms, and production software."
        variant="projects"
      />

      <section className="section_projects-gallery" id="projects-gallery">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="projects-index-summary">
              <div><strong>{String(projects.length).padStart(2, "0")}</strong><span>Selected projects</span></div>
              <div><strong>{projects.filter((p) => p.visibility === "Public" || p.github).length}</strong><span>Public repositories</span></div>
              <div><strong>{projects.filter((p) => p.visibility === "Private").length}</strong><span>Private production builds</span></div>
              <p>Independent research, open-source experiments, client platforms, and production systems built across two GitHub organizations.</p>
            </div>
            {/* Category Filter Pills */}
            <div className="projects-filter-bar" role="tablist" aria-label="Filter projects">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`projects-filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="projects-card-grid">
                {filteredProjects.map((project: Project) => (
                  <article
                    key={project.title}
                    className={`project-showcase-card ${project.featured ? "is-featured-live" : ""}`}
                  >
                    <div className="project-media-wrap">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="project-image"
                        loading="lazy"
                        decoding="async"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = "/Rectangle37.png";
                        }}
                      />
                      {project.featured && (
                        <div className="project-live-indicator">
                          <i className="status-live-dot"></i> Live Production
                        </div>
                      )}
                      <div className="project-categories-overlay">
                        {project.categories.map((c) => (
                          <span key={c} className="category-tag">#{c}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-body-wrap">
                      <div className="project-repo-meta">
                        <span>{project.owner || "Sanwar021"}</span>
                        <span className={`repo-visibility is-${(project.visibility || (project.github ? "Public" : "Private")).toLowerCase()}`}>
                          {project.visibility || (project.github ? "Public" : "Private")}
                        </span>
                      </div>
                      <div className="project-title-row">
                        <h3 className="project-heading">{project.title}</h3>
                        {project.liveUrl && (
                          <span className="running-badge">Running now</span>
                        )}
                      </div>

                      <p className="project-description">{project.description}</p>

                      <div className="project-stack-wrap">
                        {project.stack.map((tech) => (
                          <span key={tech} className="tech-badge">{tech}</span>
                        ))}
                      </div>

                      <div className="project-actions-row">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-live-btn"
                            aria-label={`Visit ${project.title} live website`}
                          >
                            <span>Visit Live Website</span>
                            <span className="arrow-glyph">↗</span>
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-github-btn"
                            aria-label={`View ${project.title} source on GitHub`}
                          >
                            <img src="/Rectangle10.png" alt="" className="github-icon-img" />
                            <span>GitHub</span>
                          </a>
                        )}
                        {!project.github && project.visibility === "Private" && (
                          <span className="project-private-label" title="Private client or production repository">
                            Private Repository
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="pub-empty-state">
                <div className="pub-empty-icon">📂</div>
                <h3 className="pub-empty-title">No projects in this category yet</h3>
                <p className="pub-empty-desc">Select another category or view all projects.</p>
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className="pub-reset-btn"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section_projects-cta">
        <div className="padding-global">
          <div className="container-large w-container">
            <div className="projects-collab-card">
              <div className="projects-collab-copy">
                <span className="section-eyebrow light">Collaboration</span>
                <h2 className="display-4xl text-color-white">
                  Have a research or engineering project in mind?
                </h2>
                <p className="projects-collab-desc">
                  Open to academic co-authorship, machine learning consulting, and full-stack software development.
                </p>
              </div>
              <div className="projects-collab-actions">
                <a href={links.whatsapp} target="_blank" rel="noreferrer" className="safeer-white-btn">
                  <span className="safeer-white-btn-text">Chat on WhatsApp</span>
                  <span className="safeer-white-btn-icon">↗</span>
                </a>
                <a href={`mailto:${links.email}`} className="safeer-hero-btn is-dark">
                  <span className="safeer-hero-btn-text">Email Sanwar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
