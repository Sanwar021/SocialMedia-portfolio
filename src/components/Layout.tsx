import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageTransition from "./PageTransition";
import VisualStories from "./VisualStories";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section, .site-footer"));
    const headings = Array.from(document.querySelectorAll<HTMLElement>(
      "main h1, main h2, main .section-subtitle, main .page-hero_eyebrow, .footer-intro > *"
    ));
    const cards = Array.from(document.querySelectorAll<HTMLElement>(
      "main article, main .featured-pub-card, main .home-project-card, main .about-card, main .research-card, main .faq-item, .footer-socials > a"
    ));
    const media = Array.from(document.querySelectorAll<HTMLElement>(
      "main .home-project-media, main .about-card_image-wrapper, main .tour-card_image-wrapper, main .page-hero_image-wrapper"
    ));

    sections.forEach((node, index) => {
      node.classList.add("motion-section");
      node.style.setProperty("--motion-order", String(index % 3));
    });
    headings.forEach((node, index) => {
      node.classList.add("motion-copy");
      node.style.setProperty("--motion-delay", `${Math.min((index % 4) * 70, 210)}ms`);
    });
    cards.forEach((node, index) => {
      node.classList.add("motion-card");
      node.style.setProperty("--motion-delay", `${(index % 4) * 85}ms`);
    });
    media.forEach((node, index) => {
      node.classList.add("motion-media");
      node.style.setProperty("--motion-delay", `${(index % 3) * 90}ms`);
    });

    const nodes = Array.from(new Set([...sections, ...headings, ...cards, ...media]));
    const hashTimer = location.hash
      ? window.setTimeout(() => {
          document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80)
      : undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("motion-visible"));
      return () => window.clearTimeout(hashTimer);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.045, rootMargin: "50px 0px -45px" });

    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      window.clearTimeout(hashTimer);
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="page-wrapper">
      <Navbar />
      <PageTransition />
      <main className="main-wrapper" id="main-content">
        <Outlet />
      </main>
      <VisualStories />
      <Footer />
    </div>
  );
}
