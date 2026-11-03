import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, FlaskConical, Gamepad2, GraduationCap, Home, Layers3, Menu, UserRound, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { links } from "../data/portfolio";

const navigation = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/about", label: "About", icon: UserRound },
  { to: "/research", label: "Research", icon: FlaskConical },
  { to: "/publications", label: "Publications", icon: BookOpen },
  { to: "/projects", label: "Projects", icon: Layers3 },
  { to: "/games", label: "Games", icon: Gamepad2 },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenuPinned, setDesktopMenuPinned] = useState(false);
  const [desktopMenuHover, setDesktopMenuHover] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const desktopMenuOpen = desktopMenuPinned || desktopMenuHover;

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenuPinned(false);
    setDesktopMenuHover(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(window.scrollY / available, 1) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setDesktopMenuPinned(false);
        setDesktopMenuHover(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = mobileOpen || desktopMenuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, desktopMenuOpen]);

  return (
    <>
      <header className="portfolio-rail" role="banner">
        <div className="rail-progress" aria-hidden="true"><span style={{ transform: `scaleY(${progress})` }} /></div>
        <Link to="/" className="rail-brand" aria-label="Md Sanwarul Islam — home">
          <span className="rail-monogram">SI</span>
          <span className="rail-brand-copy"><strong>Sanwarul Islam</strong><small>Researcher · Engineer</small></span>
        </Link>
        <nav className="rail-navigation" aria-label="Primary navigation">
          {navigation.map(({ to, label, icon: Icon, end }, index) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `rail-link ${isActive ? "is-active" : ""}`} aria-label={label}>
              <span className="rail-icon"><Icon size={19} strokeWidth={1.6} /></span>
              <span className="rail-label">{label}</span><span className="rail-index">0{index + 1}</span>
            </NavLink>
          ))}
        </nav>
        <a href={links.scholar} target="_blank" rel="noreferrer" className="rail-scholar">
          <span className="rail-icon"><GraduationCap size={19} strokeWidth={1.6} /></span>
          <span className="rail-label">Scholar</span><ArrowUpRight className="rail-external" size={15} />
        </a>
        <button
          type="button"
          className={`rail-signature ${desktopMenuOpen ? "is-open" : ""}`}
          aria-expanded={desktopMenuOpen}
          aria-controls="desktop-portfolio-menu"
          aria-label={desktopMenuOpen ? "Close portfolio menu" : "Open portfolio menu"}
          onClick={() => {
            if (desktopMenuPinned) {
              setDesktopMenuPinned(false);
              setDesktopMenuHover(false);
            } else {
              setDesktopMenuPinned(true);
            }
          }}
          onMouseEnter={() => setDesktopMenuHover(true)}
        ><i /><i /><i /></button>
      </header>

      <div
        id="desktop-portfolio-menu"
        className={`desktop-portfolio-menu ${desktopMenuOpen ? "is-open" : ""}`}
        aria-hidden={!desktopMenuOpen}
        onMouseEnter={() => setDesktopMenuHover(true)}
        onMouseLeave={() => { if (!desktopMenuPinned) setDesktopMenuHover(false); }}
      >
        <div className="desktop-menu-atmosphere" aria-hidden="true"><span>SI</span></div>
        <div className="desktop-menu-inner">
          <div className="desktop-menu-topline"><span>Portfolio navigation</span><small>Md Sanwarul Islam · Researcher &amp; Engineer</small></div>
          <nav className="desktop-menu-grid" aria-label="Expanded portfolio navigation">
            {navigation.map(({ to, label, end }, index) => (
              <NavLink key={to} to={to} end={end} tabIndex={desktopMenuOpen ? 0 : -1} className={({ isActive }) => `desktop-menu-link ${isActive ? "is-active" : ""}`}>
                <span className="desktop-menu-number">0{index + 1}</span>
                <strong>{label}</strong>
                <i>↗</i>
              </NavLink>
            ))}
            <a className="desktop-menu-link is-external" href={links.scholar} target="_blank" rel="noreferrer" tabIndex={desktopMenuOpen ? 0 : -1}>
              <span className="desktop-menu-number">07</span><strong>Google Scholar</strong><i>↗</i>
            </a>
            <a className="desktop-menu-link is-contact" href="mailto:sanwarul.ewu@gmail.com" tabIndex={desktopMenuOpen ? 0 : -1}>
              <span className="desktop-menu-number">08</span><strong>Contact</strong><i>↗</i>
            </a>
          </nav>
          <div className="desktop-menu-footer"><span>AI Research · Machine Learning · Full-Stack Engineering</span><span>Dhaka, Bangladesh</span></div>
        </div>
      </div>

      <header className="mobile-portfolio-nav">
        <Link to="/" className="mobile-brand"><span>SI</span><strong>Sanwarul Islam</strong></Link>
        <button type="button" className="mobile-menu-trigger" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-portfolio-menu" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className="mobile-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      </header>
      <div id="mobile-portfolio-menu" className={`mobile-portfolio-menu ${mobileOpen ? "is-open" : ""}`}>
        <p>Explore the portfolio</p>
        <nav aria-label="Mobile navigation">
          {navigation.map(({ to, label, icon: Icon, end }, index) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? "is-active" : ""}>
              <span>0{index + 1}</span><Icon size={19} strokeWidth={1.5} /><strong>{label}</strong>
            </NavLink>
          ))}
        </nav>
        <a href={links.scholar} target="_blank" rel="noreferrer" className="mobile-scholar-link">Google Scholar <ArrowUpRight size={17} /></a>
      </div>
    </>
  );
}
