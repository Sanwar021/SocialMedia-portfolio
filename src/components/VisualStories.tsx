import { Link, useLocation } from "react-router-dom";
import "./PageHero.css";

type Story = { src: string; label: string; href: string; position?: string };
type StorySet = { eyebrow: string; tags: string[]; stories: Story[] };

const researchStories: Story[] = [
  { src: "/research-computer-vision.jpg", label: "Computer Vision", href: "/research#research-domains" },
  { src: "/research-medical-ai.jpg", label: "Medical AI", href: "/research#research-domains" },
  { src: "/research-data-science.jpg", label: "Data Intelligence", href: "/research#research-streams" },
  { src: "/project-upasham-plus.png", label: "Digital Health", href: "/projects#projects-gallery", position: "top" },
  { src: "/project-famex247.png", label: "Product Engineering", href: "/projects#projects-gallery", position: "top" },
];

const storySets: Record<string, StorySet> = {
  home: { eyebrow: "PORTFOLIO HIGHLIGHTS", tags: ["Researcher", "Engineer", "Problem Solver"], stories: researchStories },
  about: {
    eyebrow: "PROFILE & JOURNEY",
    tags: ["Researcher", "Leadership", "Growth"],
    stories: [
      { src: "/graduation-gallery-img_9464.jpg", label: "Profile & Journey", href: "/about#who-i-am", position: "center 25%" },
      { src: "/graduation-east-west-university.jpg", label: "EWU Journey", href: "/about#who-i-am" },
      { src: "/research-medical-ai.jpg", label: "Medical AI", href: "/research#research-domains" },
      { src: "/club-journey-event-coordinator.jpg", label: "Leadership", href: "/about" },
      { src: "/project-upasham-plus.png", label: "Applied Impact", href: "/projects#projects-gallery", position: "top" },
    ],
  },
  research: { eyebrow: "RESEARCH PRACTICE", tags: ["Medical AI", "Computer Vision", "Responsible AI"], stories: researchStories },
  publications: {
    eyebrow: "SCHOLARLY WORK",
    tags: ["IEEE", "Springer", "Peer Reviewed"],
    stories: [researchStories[1], researchStories[2], researchStories[0], researchStories[1], researchStories[3]],
  },
  projects: {
    eyebrow: "SELECTED SYSTEMS",
    tags: ["AI Products", "Data Systems", "Web Engineering"],
    stories: [
      { src: "/project-upasham-plus.png", label: "Digital Health", href: "/projects#projects-gallery", position: "top" },
      { src: "/project-thumbnails/litchi-hybridnet.png", label: "HybridNet AI", href: "/projects#projects-gallery" },
      { src: "/project-thumbnails/fin-mobile-banking.png", label: "FinTech", href: "/projects#projects-gallery" },
      { src: "/project-famex247.png", label: "Product Engineering", href: "/projects#projects-gallery", position: "top" },
      { src: "/project-thumbnails/3d-visualization.png", label: "3D Visualization", href: "/projects#projects-gallery" },
    ],
  },
  games: {
    eyebrow: "INTERACTIVE LAB",
    tags: ["Play", "Interaction", "Creative Code"],
    stories: [
      { src: "/project-thumbnails/3d-visualization.png", label: "3D Worlds", href: "/games" },
      { src: "/project-thumbnails/javascript-test.webp", label: "JavaScript Lab", href: "/games" },
      { src: "/project-thumbnails/cineva.png", label: "Visual Stories", href: "/games" },
      { src: "/project-thumbnails/iot-emulation.png", label: "Interactive Systems", href: "/games" },
      { src: "/project-thumbnails/portfolio-site.png", label: "Creative Engineering", href: "/games" },
    ],
  },
};

export default function VisualStories() {
  const { pathname } = useLocation();
  const route = pathname.split("/")[1] || "home";
  const details = storySets[route] ?? storySets.home;

  return (
    <aside className={`footer-visual-stories is-${route}`} aria-label={`${details.eyebrow} selected visual stories`}>
      <div className="footer-visual-stories-container">
        <div className="page-hero-carousel-shell">
          <div className="page-hero-carousel-head">
            <span>({details.eyebrow})</span><strong>Selected visual stories</strong><small>Click to explore</small>
          </div>
          <div className="page-hero-gallery">
            {details.stories.map((story, index) => (
              <Link className={`page-hero-image-card card-${index + 1}`} to={story.href} key={`${story.src}-${index}`} aria-label={`Explore ${story.label}`}>
                <img src={story.src} alt={story.label} style={{ objectPosition: story.position }} loading="lazy" />
                <figcaption><span>0{index + 1}</span><strong>{story.label}</strong></figcaption>
                <span className="page-hero-card-action" aria-hidden="true">Explore <i>↗</i></span>
              </Link>
            ))}
            <div className="page-hero-gallery-center" aria-hidden="true"><span>{details.tags[0]}</span><i /><span>{details.tags[1]}</span><i /><span>{details.tags[2]}</span></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
