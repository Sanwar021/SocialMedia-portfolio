import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { links } from "../data/portfolio";

const socialLinks = [
  { name: "GitHub", href: links.github, className: "social-github", logo: "https://cdn.simpleicons.org/github/f0f4f6" },
  { name: "Scholar", href: links.scholar, className: "social-scholar", logo: "https://cdn.simpleicons.org/googlescholar/78aaff" },
  { name: "LinkedIn", href: links.linkedin, className: "social-linkedin", logo: "https://cdn.simpleicons.org/linkedin/55a7ff" },
  { name: "ResearchGate", href: links.researchgate, className: "social-researchgate", logo: "https://cdn.simpleicons.org/researchgate/18d5c5" },
  { name: "Instagram", href: links.instagram, className: "social-instagram", logo: "https://cdn.simpleicons.org/instagram/f06b96" },
  { name: "Facebook", href: links.facebook, className: "social-facebook", logo: "https://cdn.simpleicons.org/facebook/70a7ff" },
];

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-ambient" aria-hidden="true" />
      <div className="footer-container footer-grid">
        <div className="footer-intro">
          <span className="footer-eyebrow"><i /> Research. Build. Contribute.</span>
          <h2>Turning rigorous research into <em>useful technology.</em></h2>
          <p>Open to research collaborations, graduate opportunities, and AI/ML engineering roles.</p>
          <a className="footer-conversation" href={links.linkedin} target="_blank" rel="noreferrer">
            Start a conversation <ArrowUpRight size={18} />
          </a>
        </div>

        <nav className="footer-pages" aria-label="Footer navigation">
          <h3>Pages</h3>
          <Link to="/">Home</Link>
          <Link to="/research">Research</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/games">Games</Link>
        </nav>

        <div className="footer-connect">
          <h3>Connect</h3>
          <div className="footer-socials">
            {socialLinks.map(({ name, href, className, logo }) => (
              <a key={name} className={className} href={href} target="_blank" rel="noreferrer">
                <span className="social-icon">
                  {name === "LinkedIn" ? (
                    <svg className="linkedin-brand-logo" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.55V9H3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
                    </svg>
                  ) : (
                    <img src={logo} alt="" loading="lazy" decoding="async" />
                  )}
                </span>
                <b>{name}</b>
                <ArrowUpRight className="social-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-container footer-signature" aria-hidden="true">
        <div className="footer-signature-spinner">
          <span className="footer-signature-face is-front">MD SANWARUL ISLAM</span>
          <span className="footer-signature-face is-back">MD SANWARUL ISLAM</span>
        </div>
      </div>
      <div className="footer-container footer-bottom">
        <span>© {new Date().getFullYear()} Md Sanwarul Islam</span>
        <span>AI Researcher · Engineer · Dhaka, Bangladesh</span>
        <a href="#main-content">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
