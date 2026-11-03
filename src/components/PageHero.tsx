import React from "react";
import { Link } from "react-router-dom";
import "./PageHero.css";

interface PageHeroProps { title: string | React.ReactNode; subtitle?: string; variant?: string; }
type HeroDetail = {
  index: string; eyebrow: string; tags: string[]; cta: string; href: string;
  cover: string;
  images: { src: string; label: string; href: string; position?: string }[];
};

const media = {
  medical: { src: "/research-medical-ai.jpg", label: "Medical AI", href: "/research#research-domains", position: "center" },
  vision: { src: "/research-computer-vision.jpg", label: "Computer Vision", href: "/research#research-domains", position: "center" },
  data: { src: "/research-data-science.jpg", label: "Data Intelligence", href: "/research#research-streams", position: "center" },
  upasham: { src: "/project-upasham-plus.png", label: "Digital Health", href: "/projects#projects-gallery", position: "top" },
  famex: { src: "/project-famex247.png", label: "Product Engineering", href: "/projects#projects-gallery", position: "top" },
};

const heroDetails: Record<string, HeroDetail> = {
  about: { index: "01", eyebrow: "PROFILE & JOURNEY", tags: ["Researcher", "Engineer", "Problem Solver"], cta: "Explore My Research", href: "/research", cover: "/hero-about-v2.png", images: [media.vision, media.medical, media.data, media.upasham, media.famex] },
  research: { index: "02", eyebrow: "RESEARCH PRACTICE", tags: ["Medical AI", "Computer Vision", "Responsible AI"], cta: "View Research Archive", href: "/publications", cover: "/hero-research-v2.png", images: [media.data, media.vision, media.medical, media.upasham, media.vision] },
  publications: { index: "03", eyebrow: "SCHOLARLY WORK", tags: ["IEEE", "Springer", "Peer Reviewed"], cta: "Explore Applied Work", href: "/projects", cover: "/hero-publications-v2.png", images: [media.medical, media.data, media.vision, media.medical, media.upasham] },
  projects: { index: "04", eyebrow: "SELECTED SYSTEMS", tags: ["AI Products", "Data Systems", "Web Engineering"], cta: "Discover My Story", href: "/about", cover: "/hero-projects-v2.png", images: [media.data, media.upasham, media.famex, media.medical, media.vision] },
  default: { index: "05", eyebrow: "PORTFOLIO", tags: ["Research", "Engineering", "Impact"], cta: "Explore the Work", href: "/research", cover: "/hero-about-v2.png", images: [media.medical, media.vision, media.data, media.upasham, media.famex] },
};

export default function PageHero({ title, subtitle, variant = "default" }: PageHeroProps) {
  const details = heroDetails[variant] ?? heroDetails.default;
  return (
    <header className={`profile-page-hero is-${variant}`}>
      <div className="profile-page-hero-container">
        <div className="page-hero-banner">
          <img className="page-hero-cover" src={details.cover} alt="" loading="eager" />
          <div className="profile-page-hero-copy">
            <div className="profile-page-hero-kicker"><span>({details.eyebrow})</span><span className="profile-page-hero-index">{details.index} / 05</span></div>
            <h1>{title}</h1>
            <div className="profile-page-hero-meta">
              {subtitle && <p className="profile-page-hero-subtitle">{subtitle}</p>}
              <Link to={details.href} className="page-hero-cta"><span>{details.cta}</span><i>↗</i></Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
