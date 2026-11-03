// Md Sanwarul Islam — Complete Academic & Engineering Portfolio Data
// Synchronized with live portfolio: https://md-sanwarul-islam-one.vercel.app/

export const links = {
  "scholar": "https://scholar.google.com/citations?user=eqFfAEMAAAAJ&hl=en",
  "github": "https://github.com/Sanwar021",
  "linkedin": "https://www.linkedin.com/in/sanwarislam17/",
  "researchgate": "https://www.researchgate.net/profile/Md-Islam-2707?ev=hdr_xprf",
  "instagram": "https://www.instagram.com/mr.raw420_/?hl=en",
  "facebook": "https://www.facebook.com/sanwar.islam.2024/",
  "award": "https://fse.ewubd.edu/achievement-details/cse-students-won-two-springer-icdmis-2024-best-paper-awards",
  "whatsapp": "https://wa.me/8801537662683",
  "phone": "+8801537662683",
  "email": "sanwarul.ewu@gmail.com"
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  area: string;
  abstract: string;
  url?: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    "title": "Measuring Accuracy of Different Machine Learning Algorithms on Expectations and Experiences of University Students",
    "url": "https://ieeexplore.ieee.org/abstract/document/11171720",
    "authors": "Sarah Samiha Zaman, Md Jakir Hossain, Md Sanwarul Islam, et al.",
    "venue": "IEEE Conference Proceedings · QPAIN",
    "year": "2025",
    "area": "Machine Learning",
    "abstract": "A comparative study of machine-learning approaches for understanding and measuring university students’ expectations and experiences."
  },
  {
    "title": "Earthquake Magnitude Prediction: A Survey on Machine Learning Models, Datasets, Techniques, Challenges, and Future Directions",
    "url": "https://link.springer.com/chapter/10.1007/978-981-96-6303-3_42",
    "authors": "Md Sanwarul Islam, et al.",
    "venue": "Research publication",
    "year": "2024",
    "area": "Data Science",
    "abstract": "A structured survey of datasets and predictive models used for earthquake-magnitude forecasting, with open challenges and future research directions."
  },
  {
    "title": "Detection of Sugarcane Leaf Diseases Using Custom CNN and ResNet50",
    "url": "https://link.springer.com/chapter/10.1007/978-981-96-6303-3_20",
    "authors": "Md Sanwarul Islam, et al.",
    "venue": "Research publication",
    "year": "2024",
    "area": "Computer Vision",
    "abstract": "An image-classification study comparing a custom convolutional network with transfer learning for agricultural disease detection."
  },
  {
    "title": "Prediction of Glioblastoma Using Data Mining & AI",
    "authors": "Md Sanwarul Islam, et al.",
    "venue": "Springer publication",
    "year": "2025",
    "area": "Medical AI",
    "abstract": "A medical-AI workflow investigating data-driven methods for glioblastoma prediction and decision support."
  },
  {
    "title": "Deep Learning-Based Classification of Coconut Leaf Diseases Using Optimized CNN Models",
    "url": "https://ieeexplore.ieee.org/abstract/document/11172002",
    "authors": "Md Sanwarul Islam, et al.",
    "venue": "Research publication",
    "year": "2025",
    "area": "Deep Learning",
    "abstract": "Optimized convolutional models for identifying coconut leaf diseases from field imagery and supporting precision agriculture."
  },
  {
    "title": "Green Machine Learning (GML): Energy-Aware Approaches for Sustainable Computing",
    "url": "https://link.springer.com/chapter/10.1007/978-3-032-04539-3_9",
    "authors": "Md Sanwarul Islam, et al.",
    "venue": "Book chapter",
    "year": "2025",
    "area": "Sustainable AI",
    "abstract": "An exploration of energy-aware training, efficient inference, and responsible model design for more sustainable computing."
  },
  {
    "title": "Detection of Lemon Leaf Diseases Using Inception V3-Based Machine Learning Model",
    "url": "https://link.springer.com/chapter/10.1007/978-3-032-04539-3_10",
    "authors": "Md Sanwarul Islam, et al.",
    "venue": "Book chapter",
    "year": "2025",
    "area": "Computer Vision",
    "abstract": "A transfer-learning approach based on Inception V3 for automated detection of common lemon leaf diseases."
  },
  {
    "title": "Forecasting Air Quality: A Comprehensive Survey of Air Pollution Prediction Methods and Applications",
    "url": "https://link.springer.com/chapter/10.1007/978-3-032-02790-0_29",
    "authors": "Md Sanwarul Islam, et al.",
    "venue": "Research publication",
    "year": "2025",
    "area": "Data Science",
    "abstract": "A review of forecasting methods, data sources, and real-world applications for air-quality prediction."
  },
  {
    "title": "Prediction of Glioblastoma Using 3D-CNN",
    "url": "https://link.springer.com/chapter/10.1007/978-981-96-6046-9_28",
    "authors": "Md. Ashikur Rahoman, Md. Shakil, Md. Sanwarul Islam & Md. Ahnaf Morshed",
    "venue": "ICDMIS · Springer LNNS · SCOPUS indexed",
    "year": "2024",
    "area": "Medical AI",
    "abstract": "A 3D convolutional neural-network approach to glioblastoma prediction using volumetric medical imagery.",
    "featured": true
  }
];

export type Project = {
  title: string;
  description: string;
  image: string;
  categories: string[];
  stack: string[];
  github?: string;
  liveUrl?: string;
  featured?: boolean;
  visibility?: "Public" | "Private";
  owner?: "Sanwar021" | "Fame IT Networks";
  updated?: string;
};

export const projects: Project[] = [
  {
    "title": "FameX 24/7",
    "description": "A polished service-business website that turns workspace discovery into a clear, conversion-focused journey with pricing, location, and quote pathways.",
    "image": "/project-famex247.png",
    "categories": [
      "Web Development",
      "UI/UX"
    ],
    "stack": [
      "Live Production",
      "Responsive UI",
      "Business Platform"
    ],
    "liveUrl": "https://www.famex247.com/",
    "featured": true
  },
  {
    "title": "Upasham Plus",
    "description": "A live telemedicine platform connecting patients across Bangladesh with certified doctors through phone, WhatsApp, and nearby Upasham care points.",
    "image": "/project-upasham-plus.png",
    "categories": [
      "Web Development",
      "UI/UX"
    ],
    "stack": [
      "Live Production",
      "HealthTech",
      "Responsive UI"
    ],
    "liveUrl": "https://upashamplus.com/",
    "featured": true
  },
  {
    "title": "Rodeway Inn · Point Pleasant Beach",
    "description": "A conversion-focused hotel website for a budget stay near Point Pleasant Beach, with room discovery, amenity highlights, and direct booking pathways.",
    "image": "/project-budget-hotel.png",
    "categories": ["Hospitality", "Web Development", "UI/UX"],
    "stack": ["Astro", "Responsive UI", "Hotel Booking"],
    "liveUrl": "https://budget-hotel-near-point-pleasant-be.vercel.app/",
    "visibility": "Public", "owner": "Fame IT Networks", "featured": true
  },
  {
    "title": "City Express by Marriott Bonham",
    "description": "A polished hospitality website presenting rooms, amenities, location advantages, and booking journeys for the Bonham property.",
    "image": "/project-city-express.png",
    "categories": ["Hospitality", "Web Development", "UI/UX"],
    "stack": ["CSS", "Responsive UI", "Hospitality"],
    "liveUrl": "https://city-express-by-marriott-bonham.vercel.app/",
    "visibility": "Public", "owner": "Fame IT Networks", "featured": true
  },
  {
    "title": "MainStay Suites Addison–Dallas",
    "description": "A live extended-stay hotel website designed around comfortable accommodation, local discovery, property information, and direct reservations.",
    "image": "/project-mainstay-suites.png",
    "categories": ["Hospitality", "Web Development"],
    "stack": ["Astro", "Production Website", "Hotel Booking"],
    "liveUrl": "https://mainstaysuitesaddison.com/",
    "visibility": "Public", "owner": "Fame IT Networks", "featured": true
  },
  {
    "title": "Magneto Solution",
    "description": "A live marketing-services platform communicating complete digital support through clear service architecture and conversion-driven presentation.",
    "image": "/project-magneto-solution.png",
    "categories": ["Business Systems", "Web Development", "UI/UX"],
    "stack": ["CSS", "Marketing", "Production Website"],
    "liveUrl": "https://magnetosolution.com/",
    "visibility": "Public", "owner": "Fame IT Networks", "featured": true
  },
  {
    "title": "Yummy Spice N Rice",
    "description": "A live restaurant website for Indian cuisine in Richardson, combining menu discovery, daily specials, strong food imagery, and a focused customer journey.",
    "image": "/project-spice-n-rice.png",
    "categories": ["Hospitality", "Web Development", "UI/UX"],
    "stack": ["TypeScript", "Restaurant", "Production Website"],
    "liveUrl": "https://yummyspicenrice.com/",
    "visibility": "Public", "owner": "Fame IT Networks", "featured": true
  },
  {
    "title": "Medical Image Intelligence",
    "description": "Computer-vision experiments focused on classification workflows, CNN architectures, and interpretable medical-AI research.",
    "image": "/research-medical-ai.jpg",
    "categories": [
      "AI",
      "Research"
    ],
    "stack": [
      "Python",
      "TensorFlow",
      "CNN",
      "OpenCV"
    ],
    "visibility": "Public"
  },
  {
    "title": "AI Analytics Dashboard",
    "description": "A responsive research dashboard concept for monitoring datasets, experiments, metrics, and model performance.",
    "image": "/research-data-science.jpg",
    "categories": [
      "Data Science",
      "UI/UX"
    ],
    "stack": [
      "React",
      "TypeScript",
      "Data Viz",
      "Figma"
    ],
    "visibility": "Public"
  },
  {
    "title": "Researcher Portfolio",
    "description": "This responsive academic portfolio, designed to present publications, research impact, and technical projects clearly.",
    "image": "/project-thumbnails/portfolio-site.png",
    "categories": [
      "Web Development",
      "UI/UX"
    ],
    "stack": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind"
    ],
    "github": "https://github.com/Sanwar021/Md-Sanwarul-Islam"
  },
  {
    "title": "LitchiHybridNet",
    "description": "A research-led hybrid deep-learning project exploring intelligent visual classification and reproducible model workflows.",
    "image": "/project-thumbnails/litchi-hybridnet.png", "categories": ["AI", "Research"], "stack": ["Deep Learning", "HTML", "Computer Vision"],
    "github": "https://github.com/Sanwar021/LitchiHybridNet-", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "Visitor Analysis",
    "description": "A visitor intelligence system for tracking activity, analyzing traffic patterns, and supporting operational decisions.",
    "image": "/project-visitor-analysis-v2.png", "categories": ["Business Systems", "Data Science"], "stack": ["Go", "Analytics", "Backend"],
    "visibility": "Public", "owner": "Fame IT Networks"
  },
  {
    "title": "Hotel Invoice System",
    "description": "A TypeScript invoicing platform designed for hotel billing, guest records, line items, totals, and printable documents.",
    "image": "/project-thumbnails/hotel-invoice.png", "categories": ["Business Systems", "Hospitality"], "stack": ["TypeScript", "Invoicing", "Hotel Operations"],
    "github": "https://github.com/Sanwar021/Hotel-invoice-system", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "Team Task Tracker",
    "description": "A collaborative task-management product for assigning work, monitoring progress, and keeping teams aligned.",
    "image": "/project-thumbnails/team-task-tracker.png", "categories": ["Business Systems", "Web Development"], "stack": ["TypeScript", "Productivity", "Team Workflow"],
    "github": "https://github.com/Sanwar021/Team-Task-Tracker", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "FIN Mobile Banking",
    "description": "A financial-technology interface concept for accessible mobile banking, account activity, and everyday transactions.",
    "image": "/project-thumbnails/fin-mobile-banking.png", "categories": ["FinTech", "UI/UX"], "stack": ["HTML", "FinTech", "Responsive UI"],
    "github": "https://github.com/Sanwar021/FIN-Mobile-banking", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "FIN Tracker",
    "description": "A lightweight monthly money-usage tracker for reviewing spending patterns and improving personal budgeting.",
    "image": "/project-thumbnails/fin-tracker.png", "categories": ["FinTech", "Web Development"], "stack": ["HTML", "Expense Tracking", "Budgeting"],
    "github": "https://github.com/Sanwar021/FIN-Tracker", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "Cineva",
    "description": "A Go-powered media experience for discovering and organizing movies and music through a focused interface.",
    "image": "/project-thumbnails/cineva.png", "categories": ["Media", "Web Development"], "stack": ["Go", "Movies", "Music"],
    "github": "https://github.com/Sanwar021/Cineva", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "Ocean International Website",
    "description": "A modern organization website focused on responsive presentation, clear service discovery, and accessible navigation.",
    "image": "/project-thumbnails/ocean-international.png", "categories": ["Web Development", "UI/UX"], "stack": ["JavaScript", "Responsive UI", "Corporate Web"],
    "github": "https://github.com/Sanwar021/Ocean-International-Website", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "Spice N Rice",
    "description": "A polished restaurant platform designed around menu discovery, brand storytelling, and conversion-focused dining experiences.",
    "image": "/project-spice-n-rice.png", "categories": ["Web Development", "Hospitality"], "stack": ["TypeScript", "Restaurant", "Responsive UI"],
    "github": "https://github.com/Sanwar021/Spice-n-Rice", "liveUrl": "https://yummyspicenrice.com/", "visibility": "Public", "owner": "Sanwar021", "featured": true
  },
  {
    "title": "Atelier Design Car",
    "description": "A design-forward automotive web experience exploring premium presentation, interaction, and modern TypeScript development.",
    "image": "/project-thumbnails/atelier-car.webp", "categories": ["Web Development", "UI/UX"], "stack": ["TypeScript", "Automotive", "Interactive Design"],
    "github": "https://github.com/Sanwar021/Atelier-Desgin-Car", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "Supershop POS",
    "description": "A TypeScript point-of-sale system for product management, checkout workflows, inventory visibility, and day-to-day retail operations.",
    "image": "/project-thumbnails/supershop-pos.png", "categories": ["Business Systems", "Web Development"], "stack": ["TypeScript", "POS", "Retail Operations"],
    "github": "https://github.com/Sanwar021/Supershop-POS", "visibility": "Public", "owner": "Sanwar021", "featured": true
  },
  {
    "title": "Coffee · Mr. Raw 420",
    "description": "A branded coffee web experience focused on atmospheric presentation, product storytelling, and a responsive customer journey.",
    "image": "/project-thumbnails/coffee-mrraw.webp", "categories": ["Web Development", "UI/UX"], "stack": ["HTML", "Brand Website", "Responsive UI"],
    "github": "https://github.com/Sanwar021/Coffe-Mr.Raw420", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "3D Test Visualization",
    "description": "An interactive browser-based 3D visualization experiment built to explore spatial presentation, motion, and immersive web interfaces.",
    "image": "/project-thumbnails/3d-visualization.png", "categories": ["Web Development", "UI/UX"], "stack": ["HTML", "3D Web", "Visualization"],
    "github": "https://github.com/Sanwar021/3D-Test-Visulization", "liveUrl": "https://3-d-test-visulization.vercel.app", "visibility": "Public", "owner": "Sanwar021", "featured": true
  },
  {
    "title": "Software-Defined IoT Emulation Platform",
    "description": "A Python platform for emulating IoT devices with real-time monitoring, control, telemetry, and analytics workflows.",
    "image": "/project-thumbnails/iot-emulation.png", "categories": ["AI", "Research", "Business Systems"], "stack": ["Python", "IoT", "Real-time Analytics"],
    "github": "https://github.com/Sanwar021/-A-Software-Defined-IoT-Device-Emulation-Platform-for-Real-Time-Monitoring-Control-and-Analytics.", "visibility": "Public", "owner": "Sanwar021", "featured": true
  },
  {
    "title": "IELTS Software",
    "description": "A learning platform designed to support IELTS practice through accessible exercises, structured preparation, and a focused study interface.",
    "image": "/project-thumbnails/ielts-software.png", "categories": ["Web Development", "UI/UX"], "stack": ["JavaScript", "Education", "Learning Platform"],
    "github": "https://github.com/Sanwar021/IELTS-Softwere", "liveUrl": "https://ielts-softwere.vercel.app", "visibility": "Public", "owner": "Sanwar021", "featured": true
  },
  {
    "title": "Fame IT Networks",
    "description": "A TypeScript web platform presenting technology services, digital capabilities, and business-focused customer pathways.",
    "image": "/project-thumbnails/fame-it-networks.png", "categories": ["Web Development", "Business Systems"], "stack": ["TypeScript", "Business Website", "Responsive UI"],
    "github": "https://github.com/Sanwar021/FameITNetworks", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "Uposhom",
    "description": "A healthcare-oriented web project exploring accessible service discovery and clear digital patient experiences.",
    "image": "/project-upasham-plus.png", "categories": ["Web Development", "UI/UX"], "stack": ["HTML", "HealthTech", "Responsive UI"],
    "github": "https://github.com/Sanwar021/Uposhom-", "visibility": "Public", "owner": "Sanwar021"
  },
  {
    "title": "CRM Software",
    "description": "A customer relationship management system for contacts, pipelines, activity tracking, and day-to-day business operations.",
    "image": "/project-crm-software-v2.png", "categories": ["Business Systems", "Web Development"], "stack": ["JavaScript", "CRM", "Workflow"],
    "visibility": "Private", "owner": "Fame IT Networks"
  }
];

export type Milestone = {
  period: string;
  title: string;
  organization: string;
  description: string;
  link?: string;
};

export const milestones: Milestone[] = [
  {
    "period": "Feb 2026 — Present",
    "title": "Software Engineer",
    "organization": "Fame IT Networks LTD",
    "description": "Building and maintaining scalable web applications and dependable software solutions for real-world business needs.",
    "link": "https://famenetworks.net/"
  },
  {
    "period": "Nov 2025 — Jan 2026",
    "title": "Full-Stack Developer",
    "organization": "Softvence",
    "description": "Developed full-stack web applications and collaborated across teams to deliver polished, production-focused software.",
    "link": "https://softvence.agency/"
  },
  {
    "period": "2024",
    "title": "Springer ICDMIS Best Paper Award",
    "organization": "International Conference on Data Mining and Information Security",
    "description": "Co-authored the award-winning research “Prediction of Glioblastoma Using 3D-CNN.”",
    "link": "https://fse.ewubd.edu/achievement-details/cse-students-won-two-springer-icdmis-2024-best-paper-awards"
  },
  {
    "period": "2022 — Present",
    "title": "AI/ML Research & Development",
    "organization": "Independent and collaborative research projects",
    "description": "Developing machine-learning solutions for healthcare, agriculture, predictive analytics, and sustainable computing."
  },
  {
    "period": "2022 — 2025",
    "title": "Event Coordinator",
    "organization": "East West University Telecommunications Club",
    "description": "Organized technology events, workshops, and seminars connecting students with professionals and research communities.",
    "link": "https://clubs.ewubd.edu/ewutc"
  },
  {
    "period": "2021 — 2025",
    "title": "B.Sc. in Computer Science & Engineering",
    "organization": "East West University · Dhaka, Bangladesh",
    "description": "Built a strong foundation in artificial intelligence, machine learning, data science, and software engineering."
  }
];

export type ResearchDomain = {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  focus: string[];
  tools: string[];
  outcome: string;
  accent: string;
};

export const researchDomains: ResearchDomain[] = [
  {
    "id": "iot",
    "title": "Internet of Things",
    "kicker": "Connected intelligence",
    "summary": "I explore IoT systems that connect physical sensors, edge devices, cloud services, and intelligent decision layers into dependable real-world products.",
    "focus": [
      "Sensor-driven monitoring",
      "Edge intelligence",
      "Device-to-cloud pipelines",
      "Real-time alerts"
    ],
    "tools": [
      "ESP32",
      "Arduino",
      "MQTT",
      "Node.js",
      "Python",
      "Cloud APIs"
    ],
    "outcome": "Responsive systems for health, agriculture, environmental sensing, and operational monitoring.",
    "accent": "cyan"
  },
  {
    "id": "uiux",
    "title": "UI/UX Design",
    "kicker": "Human-centered systems",
    "summary": "My design research studies how complex technical systems can feel simple, trustworthy, accessible, and efficient for the people who use them.",
    "focus": [
      "User research",
      "Information architecture",
      "Interaction design",
      "Usability evaluation"
    ],
    "tools": [
      "Figma",
      "Design systems",
      "Prototyping",
      "Accessibility",
      "User flows"
    ],
    "outcome": "Interfaces that reduce friction while making data, AI, and commerce workflows easier to understand.",
    "accent": "coral"
  },
  {
    "id": "llm",
    "title": "Large Language Models",
    "kicker": "Language intelligence",
    "summary": "I investigate responsible LLM applications that combine strong prompting, contextual retrieval, evaluation, and human oversight.",
    "focus": [
      "Retrieval-augmented generation",
      "Agent workflows",
      "Prompt evaluation",
      "Responsible AI"
    ],
    "tools": [
      "LLM APIs",
      "Embeddings",
      "Vector search",
      "RAG",
      "Python",
      "Evaluation"
    ],
    "outcome": "Grounded assistants, research copilots, and knowledge tools that prioritize reliable answers.",
    "accent": "violet"
  },
  {
    "id": "go",
    "title": "Go Engineering",
    "kicker": "Reliable backends",
    "summary": "I use Go to investigate fast, maintainable services for data-intensive applications, connected devices, and modular product platforms.",
    "focus": [
      "Concurrent services",
      "RESTful APIs",
      "Microservices",
      "Performance profiling"
    ],
    "tools": [
      "Go",
      "Goroutines",
      "Gin",
      "gRPC",
      "Docker",
      "Testing"
    ],
    "outcome": "Lean backend systems with predictable performance, clear boundaries, and production-focused reliability.",
    "accent": "blue"
  },
  {
    "id": "postgres",
    "title": "PostgreSQL",
    "kicker": "Data foundations",
    "summary": "My database work focuses on durable data models, measurable query performance, and secure information flows for analytical and transactional systems.",
    "focus": [
      "Relational modeling",
      "Query optimization",
      "Data integrity",
      "Analytics"
    ],
    "tools": [
      "PostgreSQL",
      "SQL",
      "Indexing",
      "JSONB",
      "PostGIS",
      "Migrations"
    ],
    "outcome": "Scalable data foundations that support research evidence, commerce operations, and intelligent products.",
    "accent": "indigo"
  },
  {
    "id": "medusa",
    "title": "Medusa.js Commerce",
    "kicker": "Composable commerce",
    "summary": "I study headless commerce architecture through Medusa.js, connecting modular commerce services with custom storefronts and research-led user experiences.",
    "focus": [
      "Headless architecture",
      "Custom workflows",
      "Storefront UX",
      "Integration design"
    ],
    "tools": [
      "Medusa.js",
      "React",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Payments"
    ],
    "outcome": "Flexible commerce platforms that can evolve without locking business logic to the presentation layer.",
    "accent": "amber"
  },
  {
    "id": "ai",
    "title": "Data Science & AI",
    "kicker": "Evidence into action",
    "summary": "I transform complex datasets into tested models, interpretable findings, and decision-support tools across healthcare, agriculture, and social research.",
    "focus": [
      "Predictive modeling",
      "Computer vision",
      "Statistical analysis",
      "Model explainability"
    ],
    "tools": [
      "Python",
      "Pandas",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Power BI"
    ],
    "outcome": "Reproducible evidence and useful intelligent systems grounded in careful evaluation.",
    "accent": "green"
  }
];

export type ResearchStream = {
  number: string;
  title: string;
  text: string;
  tags: string[];
};

export const researchStreams: ResearchStream[] = [
  {
    "number": "01",
    "title": "IoT-enabled health monitoring",
    "text": "Designing connected workflows that move sensor observations through secure APIs into meaningful dashboards and responsible assistive intelligence.",
    "tags": [
      "IoT",
      "Edge",
      "Health data"
    ]
  },
  {
    "number": "02",
    "title": "Grounded LLM research assistants",
    "text": "Evaluating retrieval strategies, source grounding, response quality, and human review for research and organizational knowledge systems.",
    "tags": [
      "RAG",
      "Evaluation",
      "Responsible AI"
    ]
  },
  {
    "number": "03",
    "title": "Robust disease classification",
    "text": "Comparing CNNs and transfer-learning architectures for medical and agricultural images, with close attention to error patterns and generalization.",
    "tags": [
      "Computer vision",
      "CNN",
      "Explainability"
    ]
  },
  {
    "number": "04",
    "title": "Intelligent commerce experiences",
    "text": "Connecting Medusa.js, PostgreSQL, and research-led UI/UX to study adaptive storefronts and maintainable headless commerce operations.",
    "tags": [
      "Medusa.js",
      "PostgreSQL",
      "UX"
    ]
  }
];

export type ResearchPrinciple = {
  title: string;
  text: string;
};

export const researchPrinciples: ResearchPrinciple[] = [
  {
    "title": "Useful before impressive",
    "text": "A research contribution should answer a real question and improve a real decision, not only produce a high metric."
  },
  {
    "title": "Evidence over assumption",
    "text": "Baselines, ablations, error analysis, usability observations, and transparent limitations shape every conclusion."
  },
  {
    "title": "Systems thinking",
    "text": "Models, interfaces, databases, devices, and people are evaluated as one connected system."
  }
];

export type ResearchFaq = {
  q: string;
  a: string;
};

export const researchFaqs: ResearchFaq[] = [
  {
    "q": "How do these research areas connect?",
    "a": "IoT creates live signals, PostgreSQL preserves structured evidence, data science and LLMs create intelligence, Go delivers dependable services, and UI/UX makes the complete system usable. Medusa.js provides a practical environment for studying these ideas in composable commerce."
  },
  {
    "q": "What makes the work reproducible?",
    "a": "Each study begins with a defined question and evaluation protocol. Data preparation, baselines, model settings, design decisions, metrics, errors, and limitations are documented so the reasoning can be examined and repeated."
  },
  {
    "q": "How is responsible AI considered?",
    "a": "I examine privacy, bias, explainability, uncertainty, human oversight, and the cost of incorrect outputs. AI is treated as decision support, with safeguards shaped by the risk and context of the application."
  }
];

export type NarrativeChapter = {
  number: string;
  title: string;
  paragraphs: string[];
};

export const personalNarrative: NarrativeChapter[] = [
  {
    "number": "01",
    "title": "A beginning unlike any other",
    "paragraphs": [
      "I began my university journey during the COVID-19 pandemic, when every class, group project, and new friendship started through a screen. I arrived uncertain about what to do or where the road would lead, but that unfamiliar beginning became the start of something truly special.",
      "Slowly, online introductions became genuine friendships. A small group of us stayed together through the years, built a lasting bond, and helped one another through every challenge. I remain deeply grateful for their constant support."
    ]
  },
  {
    "number": "02",
    "title": "Finding my way forward",
    "paragraphs": [
      "The early years were demanding. I struggled to understand how to study effectively, manage everything, and move closer to my ambitions. After a long period of uncertainty, I found my rhythm in my third year.",
      "That was my turning point. I began taking ownership of my path, managing challenges independently, and finally seeing the results of consistent hard work. The experience taught me that progress is rarely immediate, but perseverance can transform uncertainty into direction."
    ]
  },
  {
    "number": "03",
    "title": "Leadership, service & community",
    "paragraphs": [
      "University life became especially meaningful through student clubs. I started as an online member of the Programming Club, later served the English Club as Treasurer and Sub-Executive, and then found a new creative and leadership journey in the Telecommunications Club.",
      "I joined the Telecommunications Club as a photographer, advanced to Sub-Executive in Event Management, and later became Event Coordinator of the 16th Executive Panel. The certificates and awards were meaningful, but the people, lessons, and shared memories remain the most valuable part of that journey."
    ]
  }
];

export type GalleryMemory = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  caption: string;
};

export const convocationGallery: GalleryMemory[] = [
  {
    "image": "/convocation-2026.jpg",
    "alt": "Md Sanwarul Islam at his 2026 East West University convocation holding his degree certificate",
    "eyebrow": "Convocation · 2026",
    "title": "A milestone earned at East West University.",
    "caption": "In 2026, I proudly celebrated my convocation at East West University—the joyful culmination of an undergraduate journey shaped by persistence, growth, and gratitude."
  },
  {
    "image": "/convocation-friends.jpg",
    "alt": "Md Sanwarul Islam with two close friends from his East West University journey",
    "eyebrow": "Friendship · EWU",
    "title": "The friends who always stood beside me.",
    "caption": "Through every challenge and celebration of university life, these two friends remained by my side. Their friendship made my EWU journey stronger, warmer, and truly unforgettable."
  },
  {
    "image": "/convocation-mother.jpg",
    "alt": "Md Sanwarul Islam's mother lovingly placing his graduation cap on his head",
    "eyebrow": "A mother’s blessing",
    "title": "The proudest hands placed the cap.",
    "caption": "With happiness in her eyes, my mother placed the graduation cap on my head—a quiet, beautiful moment filled with her love, prayers, sacrifice, and pride."
  },
  {
    "image": "/graduation-gallery-img_8446.jpg",
    "alt": "Md Sanwarul Islam playfully holding his graduation cap in front of his face",
    "eyebrow": "Portrait · Playful spirit",
    "title": "The graduate behind the cap.",
    "caption": "A playful pause in the middle of a meaningful day—one eye on the camera, the cap in hand, and a future full of possibilities waiting just beyond the frame."
  },
  {
    "image": "/graduation-gallery-img_9359.jpg",
    "alt": "Md Sanwarul Islam wearing his East West University graduation gown against a blue backdrop",
    "eyebrow": "Portrait · Quiet pride",
    "title": "Stepping into the moment with gratitude.",
    "caption": "Wearing the EWU gown carried the weight of every demanding semester and every lesson learned—a simple portrait of a milestone earned with patience and persistence."
  },
  {
    "image": "/graduation-gallery-img_9360.jpg",
    "alt": "Md Sanwarul Islam in his graduation gown looking thoughtfully away from the camera",
    "eyebrow": "Portrait · Reflection",
    "title": "A calm frame before the celebration.",
    "caption": "Between the excitement and photographs came a quiet moment to reflect on how far the journey had come and how much remained possible ahead."
  },
  {
    "image": "/graduation-gallery-img_9362.jpg",
    "alt": "Profile portrait of Md Sanwarul Islam in his graduation gown against a blue backdrop",
    "eyebrow": "Portrait · Looking ahead",
    "title": "Turning toward the next chapter.",
    "caption": "Graduation closes one chapter, but it also asks where the next path will lead. This moment holds that sense of direction, ambition, and readiness for what comes next."
  },
  {
    "image": "/graduation-gallery-img_9388.jpg",
    "alt": "Md Sanwarul Islam in cap and graduation gown standing against the brick architecture of East West University",
    "eyebrow": "Campus · Final chapter",
    "title": "Among the walls that shaped the journey.",
    "caption": "The familiar brickwork of campus became the backdrop to a final student portrait—a place connected to years of learning, challenges, friendships, and unforgettable memories."
  },
  {
    "image": "/graduation-gallery-img_9464.jpg",
    "alt": "Md Sanwarul Islam posing in his graduation gown with the EWU emblem visible",
    "eyebrow": "Portrait · Earned moment",
    "title": "Wearing the achievement with pride.",
    "caption": "The graduation gown and EWU emblem represent more than a ceremony; they carry the discipline, resilience, and personal growth that made this day possible."
  },
  {
    "image": "/graduation-gallery-img_9502.jpg",
    "alt": "Md Sanwarul Islam standing thoughtfully beside a sunlit brick wall in his graduation gown",
    "eyebrow": "Campus · In reflection",
    "title": "A pause between the memories.",
    "caption": "In the warm campus light, this quiet portrait captures a reflective pause—looking back with gratitude while preparing to move confidently forward."
  },
  {
    "image": "/graduation-gallery-img_9528.jpg",
    "alt": "Md Sanwarul Islam in graduation cap, gown, and sunglasses standing in a sunlit East West University corridor",
    "eyebrow": "Campus · Celebration",
    "title": "Walking proudly through a familiar place.",
    "caption": "A confident graduation-day portrait in the corridors of EWU, where ordinary university spaces became part of an extraordinary personal milestone."
  },
  {
    "image": "/graduation-gallery-img_9538.jpg",
    "alt": "Md Sanwarul Islam holding his graduation cap outdoors on the East West University campus",
    "eyebrow": "Campus · Achievement",
    "title": "Holding close what the journey represents.",
    "caption": "With the graduation cap held close, this portrait honors the effort behind the achievement and the memories that will always remain connected to East West University."
  },
  {
    "image": "/graduation-gallery-img_9558.jpg",
    "alt": "Md Sanwarul Islam wearing sunglasses and holding his graduation cap in a sunlit campus corridor",
    "eyebrow": "Campus · New beginning",
    "title": "Standing in the light of what comes next.",
    "caption": "Sunlight, confidence, and a graduation cap in hand—an image of accomplishment that also feels like the first frame of a new professional journey."
  },
  {
    "image": "/graduation-gallery-img_9463-2.jpg",
    "alt": "Md Sanwarul Islam seated in his graduation gown beside flowers, his cap, and an East West University bag",
    "eyebrow": "Details · A day remembered",
    "title": "Flowers, sunlight, and a chapter completed.",
    "caption": "A quiet scene of graduation-day details: flowers, the cap, the EWU name, and the afternoon light coming together in one warm memory of a journey completed."
  }
];
export const clubJourneyGallery: GalleryMemory[] = [
  {
    "image": "/club-journey-event-coordinator.jpg",
    "alt": "East West University Telecommunications Club 16th Executive Panel event coordinator poster for Md Sanwarul Islam",
    "eyebrow": "EWUTC - 16th Panel",
    "title": "From passion to responsibility.",
    "caption": "My club journey began in 2021 and grew into one of the most defining parts of my university life. From the first steps of participation to representing the 16th Executive Panel as Event Coordinator, this journey taught me leadership, teamwork, and accountability."
  },
  {
    "image": "/club-journey-team-energy.jpg",
    "alt": "Md Sanwarul Islam celebrating with East West University Telecommunications Club teammates",
    "eyebrow": "Team spirit",
    "title": "The energy that made every event possible.",
    "caption": "Behind every successful club event was a team full of energy, pressure, laughter, and late-night effort. These moments remind me how powerful a committed group can be when everyone works for the same goal."
  },
  {
    "image": "/club-journey-ewutc-family.jpg",
    "alt": "East West University Telecommunications Club members gathered together at an event",
    "eyebrow": "Club family",
    "title": "A community that became family.",
    "caption": "The Telecommunications Club gave me more than roles and certificates. It gave me people, memories, confidence, and a place where I learned how to serve a community with sincerity."
  },
  {
    "image": "/club-journey-event-moments.jpg",
    "alt": "Md Sanwarul Islam standing with fellow East West University Telecommunications Club event members",
    "eyebrow": "Event leadership",
    "title": "Growing through every responsibility.",
    "caption": "I first received the role of Photography Associate Executive, then continued growing through event management until becoming Event Coordinator. Each responsibility shaped my confidence and helped me become more professional."
  }
];

export type CoreExpertise = {
  title: string;
  text: string;
};

export const coreExpertise: CoreExpertise[] = [
  {
    "title": "Artificial Intelligence",
    "text": "Responsible intelligent systems that translate research into practical tools."
  },
  {
    "title": "Data Science",
    "text": "Data preparation, statistical analysis, visualization, and evidence-led forecasting."
  },
  {
    "title": "Medical AI",
    "text": "Medical-image analysis and assistive workflows for accessible healthcare."
  },
  {
    "title": "Computer Vision",
    "text": "CNN and transfer-learning systems for visual classification and interpretation."
  },
  {
    "title": "AI for Agriculture",
    "text": "Early crop-disease detection and data-driven support for precision agriculture."
  }
];

export type SkillMetric = {
  name: string;
  level: number;
};

export const skillMetrics: SkillMetric[] = [
  {
    "name": "Machine Learning & AI",
    "level": 90
  },
  {
    "name": "Python & Data Science",
    "level": 88
  },
  {
    "name": "Deep Learning · CNN",
    "level": 85
  },
  {
    "name": "Research & Analysis",
    "level": 82
  }
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    "title": "Programming languages",
    "skills": [
      "Python",
      "JavaScript",
      "TypeScript",
      "Go",
      "C",
      "Java"
    ]
  },
  {
    "title": "Machine learning",
    "skills": [
      "TensorFlow",
      "Scikit-learn",
      "CNN",
      "3D CNN",
      "OpenCV",
      "Model evaluation"
    ]
  },
  {
    "title": "Data science",
    "skills": [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data preprocessing",
      "Statistical analysis",
      "PostgreSQL"
    ]
  },
  {
    "title": "Web technologies",
    "skills": [
      "React",
      "Node.js",
      "Vite",
      "REST APIs",
      "Full-stack development",
      "Responsive UI"
    ]
  },
  {
    "title": "Research practice",
    "skills": [
      "Literature review",
      "Experimental design",
      "Comparative analysis",
      "Research writing",
      "Academic publishing"
    ]
  }
];

export type KeyStat = {
  value: string;
  label: string;
  detail: string;
};

export const keyStats: KeyStat[] = [
  {
    "value": "11",
    "label": "Research projects",
    "detail": "Across healthcare, agriculture, education, and forecasting."
  },
  {
    "value": "01",
    "label": "Best Paper Award",
    "detail": "Springer ICDMIS 2024 recognition for medical-AI research."
  },
  {
    "value": "IEEE",
    "label": "Published researcher",
    "detail": "Research contributions presented through recognized academic venues."
  },
  {
    "value": "3+",
    "label": "Years of research",
    "detail": "Building AI and machine-learning solutions since 2022."
  }
];
