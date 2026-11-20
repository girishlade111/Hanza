export const ASSETS = {
  authorPortrait: "/src/assets/images/author_girish_portrait_1795174723384.jpg",
  heroBackdrop: "/src/assets/images/hero_editorial_backdrop_1795174718382.jpg",
  gbCoderCover: "/src/assets/images/project_gb_coder_1795174719204.jpg",
  lsPdfCover: "/src/assets/images/project_ls_pdf_1795174730989.jpg",
  md2pdfCover: "/src/assets/images/project_md2pdf_1795174719855.jpg",
  bharatLandCover: "/src/assets/images/project_bharat_land_1795174724874.jpg",
  blogBauhaus: "/src/assets/images/blog_editorial_bauhaus_1795174718914.jpg",
  blogEngineering: "/src/assets/images/blog_editorial_engineering_1795174717678.jpg",
} as const;

export interface ProjectItem {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  filterGroup: string;
  year: string;
  url: string;
  github: string;
  role: string;
  architecture: string;
  coverImage: string;
  tech: string[];
  overview: string;
  problemContext: string;
  architecturalSolution: string;
  useCases: string[];
  featured: boolean;
  homeFeatured?: boolean;
}

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  pullQuote?: string;
}

export interface ArticleItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  sections: ArticleSection[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  cadence: string;
  timeline: string;
  highlighted?: boolean;
  deliverables: string[];
  ctaLabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  projectRef: string;
  rating: number;
}

export const personalInfo = {
  fullName: "Girish Balaso Lade",
  displayName: "Girish Lade",
  brandName: "LADESTACK®",
  headline: "UI/UX Designer · Full-Stack Developer · Founder of LadeStack",
  secondaryHeadline: "Engineer by training. Product builder by choice.",
  oneLinePositioning:
    "Independent developer and product designer building LadeStack, a growing ecosystem of browser-first developer utilities, AI-assisted workflows, and practical web applications.",
  shortBio:
    "I'm Girish Lade, a UI/UX designer, full-stack developer, and founder of LadeStack. I combine an engineering mindset with design-led product development to build free, useful, and privacy-conscious tools for developers, students, and creators.",
  extendedBio:
    "I'm an engineer by education and a software product builder by choice. My background in Mechanical Engineering shaped how I approach problems: identify constraints, understand the system, simplify the process, and iterate until the result becomes dependable. Over time, that problem-solving mindset found a new outlet in software engineering, UI/UX design, and product architecture. Today, I design and develop modern websites, full-stack applications, browser-based utilities, and experimental AI-powered developer tools under LadeStack.",
  location: "Pune, Maharashtra, India",
  shortLocation: "PUNE, INDIA",
  email: "admin@ladestack.in",
  brandUrl: "https://ladestack.in/",
  availability: "2 SLOTS AVAILABLE / Q2 2026",
  socials: {
    github: "https://github.com/girishlade111",
    linkedin: "https://www.linkedin.com/in/girish-lade/",
    instagram: "https://www.instagram.com/girish_lade_/",
    codepen: "https://codepen.io/Girish-Lade-the-looper",
  },
  ecosystemStack: [
    "TypeScript",
    "Next.js 15",
    "React 19",
    "Astro",
    "Monaco Editor",
    "WebContainers",
    "Tailwind CSS",
    "Framer Motion",
    "Web Workers",
    "PDF.js & pdf-lib",
    "HTML5 Canvas",
    "IndexedDB",
  ],
  metrics: [
    { value: "10+", label: "Products Shipped", note: "Developer tools & web apps" },
    { value: "100%", label: "Client-Side Privacy", note: "Zero forced cloud uploads" },
    { value: "9+", label: "Multilingual Locales", note: "Astro internationalization" },
    { value: "33+", label: "Interactive Games", note: "Live on GameHub" },
  ],
  bioChapters: [
    {
      index: "01",
      title: "MECHANICAL FOUNDATIONS AT SVERI'S COLLEGE",
      body: "Training in Mechanical Engineering at SVERI's College of Engineering instilled a deep respect for physical constraints, tolerances, and root-cause diagnostics. Every system fails at its weakest assumption—so before writing a line of code, I map the real operating constraints, edge conditions, and maintenance surfaces.",
    },
    {
      index: "02",
      title: "TRANSITION TO DESIGN-LED SOFTWARE ARCHITECTURE",
      body: "As I transitioned into full-stack development and interface design, I carried that same structural rigor into the browser. Clean Swiss grids, strict typographic hierarchy, and deterministic TypeScript models replaced guesswork. Good software feels effortless precisely because its internal load paths are disciplined.",
    },
    {
      index: "03",
      title: "FOUNDING LADESTACK & THE BROWSER-FIRST ECOSYSTEM",
      body: "LadeStack grew from a simple frustration: everyday developer and document utilities were buried behind logins, paywalls, and unnecessary server uploads. Today, LadeStack spans 9+ shipped browser-first tools—from a Monaco and WebContainers code studio to a 17-in-1 client-side PDF toolkit—serving developers, students, and creators globally across 9 languages.",
    },
  ],
  services: [
    {
      id: "01",
      title: "WEBSITES & WEB APPS",
      description:
        "Full-stack development with Next.js, React, and Astro. Highly performant, accessible web applications with resilient architecture, responsive layouts, and elegant interaction design.",
      deliverables: [
        "Production Next.js / React / Astro builds",
        "Strict TypeScript & Core Web Vitals optimization",
        "Multilingual static & dynamic routing",
      ],
    },
    {
      id: "02",
      title: "UI/UX & DESIGN SYSTEMS",
      description:
        "Swiss-inspired editorial interfaces, modular component tokens, typography systems, Figma-to-code translations, and micro-interactions that communicate clarity and intent.",
      deliverables: [
        "Tokenized light & dark theme architecture",
        "Accessible, keyboard-first component libraries",
        "Framer Motion choreography & spring systems",
      ],
    },
    {
      id: "03",
      title: "BROWSER-FIRST DEVELOPER TOOLS",
      description:
        "Client-side computing using Monaco Editor, WebContainers, Web Workers, Canvas APIs, and WebAssembly to eliminate setup overhead and preserve local privacy.",
      deliverables: [
        "In-browser sandboxes & editor studios",
        "Off-main-thread Web Worker document engines",
        "Zero-upload local persistence via IndexedDB",
      ],
    },
    {
      id: "04",
      title: "AI-AUGMENTED APPS & WORKFLOWS",
      description:
        "Transparent Bring-Your-Own-Key (BYOK) multi-LLM integrations, agentic workflows, prompt engineering, and intelligent documentation utilities designed with user privacy in mind.",
      deliverables: [
        "Structured streaming & schema-validated outputs",
        "Privacy-respecting BYOK provider abstractions",
        "Developer-centric AI workflow UX",
      ],
    },
  ] as ServiceItem[],
  pricingTiers: [
    {
      id: "starter",
      name: "STARTER PROTOTYPE",
      subtitle: "Ideal for founders validating a focused product concept or editorial launch site.",
      price: "$1,800",
      cadence: "FIXED SCOPE",
      timeline: "1 – 2 WEEKS",
      deliverables: [
        "Swiss editorial visual direction & responsive layout",
        "Up to 4 structured pages with light/dark theme",
        "Framer Motion micro-interactions & smooth scroll",
        "Clean TypeScript & Tailwind production handoff",
        "Core Web Vitals & semantic SEO setup",
      ],
      ctaLabel: "START PROTOTYPE",
    },
    {
      id: "product",
      name: "FULL PRODUCT BUILD",
      subtitle: "End-to-end architecture, design system, and production full-stack web application.",
      price: "$4,200",
      cadence: "MILESTONE BASED",
      timeline: "3 – 5 WEEKS",
      highlighted: true,
      deliverables: [
        "Complete UX architecture & tokenized design system",
        "Full-stack Next.js, React, or Astro application",
        "Interactive dashboards, forms & validated state flows",
        "Multilingual i18n or structured CMS content pipelines",
        "Post-launch hardening & performance audit",
      ],
      ctaLabel: "BOOK PRODUCT SLOT",
    },
    {
      id: "devtools",
      name: "CUSTOM DEV TOOLS",
      subtitle: "Specialized browser-first engineering for IDEs, document suites, and AI utilities.",
      price: "CUSTOM",
      cadence: "ARCHITECTURE SPRINT",
      timeline: "4 – 8 WEEKS",
      deliverables: [
        "Monaco Editor, WebContainers, or Canvas engineering",
        "Client-side Web Worker & WebAssembly processing",
        "Privacy-first local storage & export pipelines",
        "Transparent BYOK AI workflow integration",
        "Technical documentation & long-term maintainability",
      ],
      ctaLabel: "DISCUSS ARCHITECTURE",
    },
  ] as PricingTier[],
  testimonials: [
    {
      id: "t1",
      quote:
        "Before working with Girish, our documentation portal felt sluggish and fragmented across three repos. He rebuilt the entire architecture in Astro with a Swiss editorial grid—cutting page load times by more than half and turning our docs into our strongest acquisition channel.",
      author: "Rohan Deshmukh",
      role: "Engineering Lead",
      organization: "Kinetix Systems, Pune",
      projectRef: "Documentation & Web Architecture",
      rating: 5,
    },
    {
      id: "t2",
      quote:
        "LS PDF replaced four clunky paid subscriptions for our operations team. Being able to merge, split, and compress confidential vendor packets locally in the browser without uploading a single byte to external servers saved hours every week.",
      author: "Ananya Kulkarni",
      role: "Product Operations Manager",
      organization: "Veridian Legal Tech",
      projectRef: "LS PDF Client-Side Suite",
      rating: 5,
    },
    {
      id: "t3",
      quote:
        "Girish bridges the rare gap between mechanical systems rigor and editorial visual taste. He translated our rough product brief into a tokenized React component library and interactive prototype in twelve days with zero throwaway code.",
      author: "Siddharth Nair",
      role: "Co-Founder",
      organization: "Stackloom Labs",
      projectRef: "Design System & Web App",
      rating: 5,
    },
    {
      id: "t4",
      quote:
        "We adopted GB Coder during our college frontend bootcamps because students on low-spec laptops could open a full Monaco editor and preview HTML, CSS, JS, and Node sandboxes instantly without fighting local environment errors.",
      author: "Prof. Vikram Joshi",
      role: "Faculty Coordinator",
      organization: "Pune Developer Guild",
      projectRef: "GB Coder Browser IDE",
      rating: 5,
    },
  ] as TestimonialItem[],
  projects: [
    {
      slug: "ladestack",
      name: "LadeStack Platform",
      tagline: "Brand platform and central developer-tool directory",
      category: "DEVELOPER TOOLS",
      filterGroup: "DEVELOPER TOOLS",
      year: "2024 - 2026",
      url: "https://ladestack.in/",
      github: "https://github.com/girishlade111",
      role: "Founder & Full-Stack Architect",
      architecture: "Static Astro + 9-Locale i18n",
      coverImage: ASSETS.heroBackdrop,
      tech: ["Astro", "TypeScript", "Tailwind CSS", "Hreflang i18n", "Static Generation"],
      overview:
        "LadeStack is the central home of an independent developer-tool ecosystem. Built with Astro, it delivers high-performance static pages across 9 international languages, providing low-friction discovery for developer utilities.",
      problemContext:
        "Independent developer utilities often live on disconnected subdomains with inconsistent navigation, heavy client JavaScript bundles, and English-only metadata that leaves international students and engineers behind.",
      architecturalSolution:
        "Engineered a zero-JS-by-default Astro architecture featuring automated hreflang canonical mapping across 9 locales, unified design tokens, and instant tool routing so every visitor reaches their utility in under a second.",
      useCases: [
        "Discover targeted tools without bloated onboarding friction.",
        "Learn browser-first computing architectures through technical documentation.",
        "Collaborate with an independent software creator.",
      ],
      featured: true,
      homeFeatured: false,
    },
    {
      slug: "gb-coder",
      name: "GB Coder",
      tagline: "Browser-based IDE and code studio with Monaco & WebContainers",
      category: "DEVELOPER TOOLS",
      filterGroup: "DEVELOPER TOOLS",
      year: "2025 - 2026",
      url: "https://code.ladestack.in/",
      github: "https://github.com/girishlade111/GB-CODER-PUBLIC-ALPHA",
      role: "Creator & Architect",
      architecture: "Monaco + WebContainers + IndexedDB",
      coverImage: ASSETS.gbCoderCover,
      tech: ["Monaco Editor", "WebContainers", "TypeScript", "IndexedDB", "ZIP Export"],
      overview:
        "A browser-based development studio offering instant static prototyping (HTML/CSS/JS) and advanced Node.js execution via WebContainers directly in supported browsers. Zero cloud sign-up required for local prototyping.",
      problemContext:
        "Spinning up a quick UI experiment or testing a Node.js snippet still forces developers to install local dependencies or authenticate into hosted cloud IDEs that meter compute hours and lock away workspace files.",
      architecturalSolution:
        "Paired the VS Code Monaco Editor with a dual-mode execution engine: instant iframe sandboxing for static web stacks and browser-native WebContainers for Node.js workloads, backed by IndexedDB auto-persistence and one-click ZIP archive export.",
      useCases: [
        "Prototype UI components instantly without local dev environment setup.",
        "Experiment with framework projects inside a sandboxed browser runtime.",
        "Persist and export portable project archives locally.",
      ],
      featured: true,
      homeFeatured: true,
    },
    {
      slug: "ls-pdf",
      name: "LS PDF",
      tagline: "17-in-1 privacy-first client-side PDF utility toolkit",
      category: "DOCUMENT UTILITIES",
      filterGroup: "DOCUMENT UTILITIES",
      year: "2025 - 2026",
      url: "https://pdf.ladestack.in/",
      github: "https://github.com/girishlade111/LS-PDF",
      role: "Creator & Maintainer",
      architecture: "100% On-Device Web Workers",
      coverImage: ASSETS.lsPdfCover,
      tech: ["React", "TypeScript", "PDF.js", "pdf-lib", "Web Workers", "JSZip"],
      overview:
        "A comprehensive in-browser PDF suite supporting 17 operations including merge, split, compress, rotate, and text extraction. All file operations execute on the user's hardware without server-side file uploads.",
      problemContext:
        "Most mainstream online PDF utilities force users to upload sensitive invoices, contracts, and identity documents to opaque third-party servers, then gate downloads behind daily quotas or watermarks.",
      architecturalSolution:
        "Built a modular browser pipeline combining PDF.js rendering with pdf-lib binary manipulation inside dedicated Web Workers, keeping the UI responsive at 60fps while guaranteeing zero network transmission of user documents.",
      useCases: [
        "Organize, merge, and re-order PDF documentation packets.",
        "Compress and prepare documents for strict email upload limits.",
        "Process confidential files with complete client-side security.",
      ],
      featured: true,
      homeFeatured: true,
    },
    {
      slug: "md2pdf",
      name: "MD2PDF",
      tagline: "Markdown to PDF publisher and technical book builder",
      category: "DOCUMENT UTILITIES",
      filterGroup: "DOCUMENT UTILITIES",
      year: "2024 - 2026",
      url: "https://md2pdf.ladestack.in/",
      github: "https://github.com/girishlade111/ReadmePDF",
      role: "Product Owner & Developer",
      architecture: "GFM + KaTeX + Print CSS Engine",
      coverImage: ASSETS.md2pdfCover,
      tech: ["Astro", "Markdown/GFM", "DOMPurify", "KaTeX", "pdf-lib", "Print CSS"],
      overview:
        "A developer-centric publishing utility that turns GitHub READMEs, local markdown notes, and multi-file repositories into professionally formatted books, complete with cover pages, syntax highlighting, and table of contents.",
      problemContext:
        "Developers write rich documentation in Markdown, yet exporting a README or multi-chapter repository into a typographically sound PDF typically produces broken page breaks, unrendered math formulas, and raw code blocks.",
      architecturalSolution:
        "Crafted a deterministic sanitization and typesetting pipeline powered by DOMPurify, GitHub Flavored Markdown parsing, KaTeX math rendering, and curated paged-media print stylesheets with automatic cover and TOC assembly.",
      useCases: [
        "Convert technical READMEs into shareable offline deliverables.",
        "Assemble multi-chapter documentation books from GitHub repositories.",
        "Typeset academic and mathematical equations with KaTeX.",
      ],
      featured: true,
      homeFeatured: true,
    },
    {
      slug: "bharat-land-converter",
      name: "Bharat Land Converter",
      tagline: "Indian regional land area measurement converter",
      category: "MEASUREMENT",
      filterGroup: "MEASUREMENT",
      year: "2025",
      url: "https://land.ladestack.in/",
      github: "https://github.com/girishlade111",
      role: "Product Creator",
      architecture: "State-Aware Formula Matrix",
      coverImage: ASSETS.bharatLandCover,
      tech: ["TypeScript", "Responsive UI", "Regional Formula Engine"],
      overview:
        "A specialized measurement tool mapping traditional Indian land units (Guntha, Bigha, Biswa, Kattha, Dhur, Kanal, Marla, Cent) to modern metric and imperial standards (Sq.Ft, Acres, Hectares).",
      problemContext:
        "Traditional Indian land units vary dramatically by state and district—a Bigha in Maharashtra differs from one in Uttar Pradesh or West Bengal—leading to costly miscalculations when generic calculators assume a single global ratio.",
      architecturalSolution:
        "Authored a verified regional conversion matrix indexed by Indian state definitions, wrapped in an instant zero-latency TypeScript calculator with clear tabular comparison outputs and mobile-first field ergonomics.",
      useCases: [
        "Cross-compare regional land units across Indian state boundaries.",
        "Understand varying district-level definitions of traditional units.",
        "Perform rapid field calculations for engineering and surveying.",
      ],
      featured: true,
      homeFeatured: true,
    },
    {
      slug: "swift-resume",
      name: "Swift Resume",
      tagline: "ATS-friendly browser resume builder with live A4 preview",
      category: "CAREER TOOLS",
      filterGroup: "DEVELOPER TOOLS",
      year: "2025",
      url: "https://resume.ladestack.in/",
      github: "https://github.com/girishlade111/swift-resume-builder",
      role: "Creator",
      architecture: "Schema-Driven Live A4 Print",
      coverImage: ASSETS.blogBauhaus,
      tech: ["React", "TypeScript", "Print CSS", "Structured Resume Schema"],
      overview:
        "A clean, form-based resume builder helping job seekers structure work history, technical proficiencies, and project portfolios into recruiter-friendly formats with instant live preview and PDF generation.",
      problemContext:
        "Many online resume builders trap job seekers by allowing full editing and then hiding the final PDF export behind surprise subscriptions, while also generating multi-column graphics that break Applicant Tracking Systems.",
      architecturalSolution:
        "Designed a structured JSON resume schema bound to a real-time A4 print canvas using semantic HTML and strict `@page` print CSS rules, ensuring crisp selectable text for ATS parsers and instant free local export.",
      useCases: [
        "Draft a structured, professional resume in minutes.",
        "Tailor content quickly for specific job opportunities.",
        "Export clean, print-ready PDF files without account locks.",
      ],
      featured: false,
    },
    {
      slug: "ls-image-compressor",
      name: "LS Image Compressor",
      tagline: "Client-side image optimizer, resizer, and format converter",
      category: "IMAGE UTILITIES",
      filterGroup: "DOCUMENT UTILITIES",
      year: "2025",
      url: "https://img.ladestack.in/",
      github: "https://github.com/girishlade111/Image-Compressor",
      role: "Creator",
      architecture: "Offscreen Canvas + EXIF Strip",
      coverImage: ASSETS.blogEngineering,
      tech: ["HTML5 Canvas", "Web Workers", "WebP/JPEG", "EXIF Handling"],
      overview:
        "An on-device image compression tool enabling dimension resizing, quality target calibration, and batch WebP conversion directly inside browser memory.",
      problemContext:
        "Preparing high-resolution photos for web performance budgets or government portal upload limits typically requires desktop software or uploading personal photographs to ad-heavy compression sites.",
      architecturalSolution:
        "Implemented a client-side Canvas re-encoding pipeline with quality sliders, target aspect ratio resizing, EXIF metadata stripping, and batch ZIP downloads entirely inside browser memory.",
      useCases: [
        "Optimize web assets for improved Core Web Vitals.",
        "Resize photos for strict portal upload boundaries.",
        "Strip EXIF metadata on-device before public sharing.",
      ],
      featured: false,
    },
    {
      slug: "gamehub",
      name: "GameHub",
      tagline: "Catalog of 33 instant-play browser mini-games",
      category: "GAMES",
      filterGroup: "GAMES",
      year: "2025",
      url: "https://games-ladestack.vercel.app/",
      github: "https://github.com/girishlade111/games-ladestack",
      role: "Developer",
      architecture: "Next.js 15 + Canvas Game Loops",
      coverImage: ASSETS.gbCoderCover,
      tech: ["Next.js 15", "React 19", "Tailwind CSS", "Canvas Game Loops"],
      overview:
        "An entertainment portal demonstrating high-frequency frontend rendering, dynamic code splitting, and canvas animation loops across 33 classic arcade and puzzle games.",
      problemContext:
        "Casual browser game portals are notoriously overloaded with pop-up scripts, auto-playing video ads, and sluggish bundle payloads that ruin quick five-minute study breaks.",
      architecturalSolution:
        "Architected a cleanly code-split Next.js 15 and React 19 catalog where each of the 33 games lazy-loads its isolated Canvas or state loop on demand, preserving crisp 60fps responsiveness on desktop and touch screens.",
      useCases: [
        "Play casual games during quick study breaks.",
        "Practice logic and reaction skills with instant load times.",
        "Reference interactive canvas rendering in React.",
      ],
      featured: false,
    },
    {
      slug: "ladestack-drive",
      name: "LadeStack Drive",
      tagline: "Privacy-conscious cloud storage and digital organization concept",
      category: "FILE MANAGEMENT",
      filterGroup: "DOCUMENT UTILITIES",
      year: "2025 - 2026",
      url: "https://drive.ladestack.in/",
      github: "https://github.com/girishlade111",
      role: "Architect",
      architecture: "Scoped Storage + Tree Indexing",
      coverImage: ASSETS.lsPdfCover,
      tech: ["Web Storage", "React", "Supabase concepts"],
      overview:
        "A prototype exploring friction-free file grouping, personal asset management, and secure private link sharing.",
      problemContext:
        "Users bouncing across multiple LadeStack utilities often need a lightweight, structured staging space to organize exported PDFs, archives, and study assets without enterprise cloud bloat.",
      architecturalSolution:
        "Prototyped a clean hierarchical file tree with instant client-side search, scoped access models, and keyboard-navigable folder operations designed to pair naturally with the broader LadeStack suite.",
      useCases: [
        "Organize project files and exported documents in a clean tree.",
        "Access digital tools and assets across devices.",
        "Explore scoped asset-sharing workflows.",
      ],
      featured: false,
    },
  ] as ProjectItem[],
  faq: [
    {
      q: "01. WHAT SERVICES DO YOU PROVIDE?",
      a: "I provide end-to-end full-stack web development, modern Swiss/editorial UI/UX design, custom browser-based developer utilities (Monaco, WebContainers, WebAssembly), and transparent AI API integrations.",
    },
    {
      q: "02. WHAT IS YOUR APPROACH TO USER PRIVACY?",
      a: "I practice 'Privacy by Architecture.' Where technically practical, computation and document transformation happen on the user's device via client-side libraries, Web Workers, and IndexedDB rather than forcing arbitrary cloud uploads.",
    },
    {
      q: "03. HOW DOES A MECHANICAL ENGINEERING BACKGROUND BENEFIT SOFTWARE?",
      a: "Mechanical engineering instills a strict discipline of constraint analysis, system tolerances, physical trade-offs, and iterative refinement. In software, this translates into clean system architecture, lean bundles, and reliable UX.",
    },
    {
      q: "04. WHAT IS YOUR CORE TECHNICAL STACK?",
      a: "Next.js 15, React 19, TypeScript, Astro, Tailwind CSS, Framer Motion, Monaco Editor, WebContainers, Node.js, and modern browser storage APIs.",
    },
    {
      q: "05. ARE YOU AVAILABLE FOR CONTRACT OR PRODUCT WORK?",
      a: "Yes. I accept select contract engagements for founders, startups, and teams needing high-polish web applications, developer-first tools, and design system engineering.",
    },
  ],
  articles: [
    {
      slug: "building-browser-ides-monaco-webcontainers",
      title: "Building Browser-Based IDEs With Monaco & WebContainers",
      category: "DEVELOPER TOOLS",
      date: "MAY 20, 2026",
      readTime: "7 MIN READ",
      excerpt:
        "How we eliminated local dev server setup by running Node.js and code compilation directly inside browser memory.",
      coverImage: ASSETS.gbCoderCover,
      sections: [
        {
          id: "why-browser-runtimes",
          heading: "01. Why Zero-Setup Runtimes Matter",
          paragraphs: [
            "Every minute a developer spends debugging mismatched Node versions or missing local environment variables is momentum lost before the real engineering problem even begins. When designing GB Coder, the core constraint was unambiguous: a learner or prototype engineer should open a single URL and be executing code inside two seconds.",
            "Modern browsers now ship with capabilities that rival lightweight operating systems—SharedArrayBuffer, Origin Private File System, WebAssembly, and WebContainers allow us to bring the runtime to the user's tab rather than provisioning expensive remote virtual machines.",
          ],
          pullQuote:
            "The fastest cloud environment is the CPU already sitting on your desk—orchestrated safely inside browser memory.",
        },
        {
          id: "dual-execution-engine",
          heading: "02. Designing a Dual-Mode Execution Architecture",
          paragraphs: [
            "Not every project needs a full Node.js container. Static HTML, CSS, and vanilla JavaScript experiments benefit from an instant sandboxed iframe preview that compiles on keystroke with sub-16ms latency. Framework workloads, however, require package resolution and dev servers.",
            "In GB Coder, we separated the Monaco Editor state tree from the execution runtime via a clean virtual filesystem adapter. Files persist automatically into IndexedDB so reloading never discards work, while the runtime mounts the same tree into either a lightweight iframe bundler or a WebContainer instance.",
          ],
          codeSnippet: {
            language: "typescript",
            code: `export async function mountWorkspaceFiles(
  container: WebContainer,
  files: Record<string, string>
) {
  const tree = Object.fromEntries(
    Object.entries(files).map(([path, contents]) => [
      path,
      { file: { contents } },
    ])
  );
  await container.mount(tree);
  return container.spawn("npm", ["run", "dev"]);
}`,
          },
        },
        {
          id: "portability-first",
          heading: "03. Portability Over Platform Lock-In",
          paragraphs: [
            "Browser studios lose developer trust the moment they hold code hostage behind proprietary cloud accounts. Every workspace inside GB Coder exports to a clean, standard ZIP archive with zero hidden config wrappers—allowing teams to start in the browser and graduate to local Git repositories effortlessly.",
          ],
        },
      ],
    },
    {
      slug: "privacy-first-web-apps-client-side-paradigm",
      title: "Designing Privacy-First Web Apps: The Client-Side Paradigm",
      category: "ARCHITECTURE",
      date: "MAY 12, 2026",
      readTime: "5 MIN READ",
      excerpt:
        "Why modern web tools should process user documents on the CPU they already own instead of sending them to unknown servers.",
      coverImage: ASSETS.lsPdfCover,
      sections: [
        {
          id: "privacy-by-architecture",
          heading: "01. Privacy by Architecture, Not Policy",
          paragraphs: [
            "A privacy policy promise that says 'we delete your uploaded PDFs after 24 hours' still asks users to trust a remote server, its logs, and its storage buckets. Privacy by architecture removes the trust requirement altogether: if the file never leaves the browser's memory space, there is nothing to leak.",
            "When building LS PDF and LS Image Compressor, running binary transformations client-side also eliminated server egress bills and upload wait times, making the tools simultaneously more private and noticeably faster.",
          ],
          pullQuote:
            "Zero uploads means zero server retention risk, zero bandwidth wait, and infinite horizontal scale on the user's own hardware.",
        },
        {
          id: "worker-isolation",
          heading: "02. Keeping the Main Thread Unblocked",
          paragraphs: [
            "Client-side processing has one classic trap: running heavy PDF parsing or canvas re-encoding on the main JavaScript thread freezes animations and click handlers. Offloading binary ArrayBuffers via Transferable Objects into dedicated Web Workers preserves smooth 60fps UI responsiveness even on large 50-page documents.",
          ],
          codeSnippet: {
            language: "typescript",
            code: `const worker = new Worker(new URL("./pdf.worker.ts", import.meta.url), {
  type: "module",
});

// Zero-copy transfer to worker memory
worker.postMessage({ op: "merge", buffers }, buffers);`,
          },
        },
      ],
    },
    {
      slug: "swiss-grid-crafting-brutalist-editorial-interfaces",
      title: "The Swiss Grid: Crafting Brutalist & Editorial Interfaces",
      category: "UI/UX DESIGN",
      date: "APR 28, 2026",
      readTime: "6 MIN READ",
      excerpt:
        "Using strict 1px hairline borders, high-contrast typography, and deliberate whitespace to craft timeless software interfaces.",
      coverImage: ASSETS.blogBauhaus,
      sections: [
        {
          id: "grid-as-structure",
          heading: "01. Hairlines as Architectural Load Paths",
          paragraphs: [
            "Josef Müller-Brockmann demonstrated that a mathematical grid does not constrain creativity—it liberates the reader's eye. On the web, replacing drop-shadow card soup with crisp 1px hairline divisions exposes the exact structural hierarchy of a page.",
            "When every section aligns to shared vertical and horizontal axes, the interface gains the quiet authority of a well-printed monograph. Visual noise drops away, and the actual work—case studies, typography, photography—takes center stage.",
          ],
          pullQuote:
            "Restraint is not the absence of detail; it is the decision to make every remaining pixel carry structural weight.",
        },
        {
          id: "typographic-contrast",
          heading: "02. Pairing Monumental Display With Monospace Precision",
          paragraphs: [
            "Editorial clarity relies on sharp scale jumps rather than timid step sizes. Combining tight-tracked 800-weight uppercase display headlines with 11px tabular monospace indices gives readers immediate spatial landmarks without decorating every paragraph with icons or colored pills.",
          ],
        },
      ],
    },
    {
      slug: "from-mechanical-engineering-to-software-architecture",
      title: "From Mechanical Engineering to Software Architecture",
      category: "CAREER & CRAFT",
      date: "APR 15, 2026",
      readTime: "8 MIN READ",
      excerpt:
        "How systems thinking, mechanical tolerances, and structural constraints inform reliable software systems.",
      coverImage: ASSETS.blogEngineering,
      sections: [
        {
          id: "constraints-first",
          heading: "01. Respecting Tolerances and Failure Modes",
          paragraphs: [
            "In mechanical engineering, you cannot patch a fractured shaft after deployment with a hotfix. You study stress concentrations, thermal expansion, and safety factors upfront. Bringing that mentality to frontend and full-stack software changes how you treat edge cases.",
            "Empty states, slow mobile networks, dark-mode contrast inversions, and invalid user inputs are not afterthoughts—they are the operating envelope of the machine.",
          ],
          pullQuote:
            "Good engineering is invisible when conditions are ideal, and unmistakable when inputs get messy.",
        },
        {
          id: "iterative-simplification",
          heading: "02. Removing Parts Until Nothing Breaks",
          paragraphs: [
            "Every extra dependency in a package manifest is another moving part that can seize or drift. Across LadeStack, my favorite refactoring milestones are rarely the ones that add features—they are the releases that delete fragile abstractions while making the user workflow noticeably cleaner.",
          ],
        },
      ],
    },
    {
      slug: "multilingual-static-architecture-astro-i18n",
      title: "Shipping Nine Languages With Zero Runtime Overhead in Astro",
      category: "ARCHITECTURE",
      date: "MAR 29, 2026",
      readTime: "6 MIN READ",
      excerpt:
        "Structuring hreflang metadata, localized copy dictionaries, and static routes for a global developer tool directory.",
      coverImage: ASSETS.md2pdfCover,
      sections: [
        {
          id: "global-reach",
          heading: "01. Developer Tools Beyond English",
          paragraphs: [
            "Students and independent builders across India, Europe, Latin America, and Southeast Asia search for utilities in their native languages every day. Supporting 9 locales statically on LadeStack meant every localized landing page ships pure HTML with zero client-side translation flicker.",
          ],
        },
        {
          id: "typed-dictionaries",
          heading: "02. Compile-Time Translation Safety",
          paragraphs: [
            "Using strict TypeScript record types for translation keys guarantees that adding a new tool card or FAQ entry never silently ships an untranslated fallback string in another locale.",
          ],
        },
      ],
    },
    {
      slug: "canvas-game-loops-react-19-gamehub",
      title: "60fps Canvas Game Loops Inside React 19 Without Re-Render Jank",
      category: "DEVELOPER TOOLS",
      date: "MAR 14, 2026",
      readTime: "7 MIN READ",
      excerpt:
        "Architectural lessons from building 33 instant-play browser mini-games in GameHub while keeping React state strictly decoupled.",
      coverImage: ASSETS.gbCoderCover,
      sections: [
        {
          id: "decoupling-raf",
          heading: "01. Never Call setState Inside requestAnimationFrame",
          paragraphs: [
            "Building 33 distinct arcade and puzzle games inside a single Next.js 15 app quickly exposes React reconciliation bottlenecks if simulation coordinates live in React state. Keeping physics, particle vectors, and timers inside mutable refs while emitting coarse HUD snapshots on score changes yields rock-solid frame pacing.",
          ],
        },
      ],
    },
    {
      slug: "byok-ai-workflows-transparent-ux",
      title: "BYOK AI Workflows: Designing Transparent, User-Owned Tools",
      category: "UI/UX DESIGN",
      date: "FEB 26, 2026",
      readTime: "5 MIN READ",
      excerpt:
        "Why Bring-Your-Own-Key interfaces respect user budgets, prevent vendor lock-in, and clarify exactly where data flows.",
      coverImage: ASSETS.bharatLandCover,
      sections: [
        {
          id: "transparent-data-paths",
          heading: "01. Clarity Over Black-Box Magic",
          paragraphs: [
            "Users are increasingly skeptical of opaque AI wrappers that mark up token costs and store private prompts indefinitely. A well-crafted BYOK workflow clearly states which provider endpoint receives the request, keeps keys scoped safely, and lets power users choose the exact model for the task.",
          ],
        },
      ],
    },
    {
      slug: "typesetting-markdown-books-print-css-katex",
      title: "Typesetting Technical Books From Markdown With Print CSS & KaTeX",
      category: "CAREER & CRAFT",
      date: "FEB 10, 2026",
      readTime: "6 MIN READ",
      excerpt:
        "Turning raw GitHub repositories into clean, print-ready technical monographs directly inside the browser.",
      coverImage: ASSETS.md2pdfCover,
      sections: [
        {
          id: "paged-media",
          heading: "01. Controlling Page Breaks and Widow Lines",
          paragraphs: [
            "Print CSS remains one of the web's most underused layout engines. Combining `break-inside: avoid` on code fences and figures with clean typographic margins transforms everyday Markdown documentation into reference books that read comfortably offline.",
          ],
        },
      ],
    },
  ] as ArticleItem[],
  legal: {
    termsUpdated: "MAY 01, 2026",
    privacyUpdated: "MAY 01, 2026",
    termsSections: [
      {
        index: "01",
        title: "ACCEPTANCE & SCOPE OF SERVICES",
        body: "By accessing this portfolio website (Girish Lade / LadeStack®) or using any browser-based utilities linked across the LadeStack ecosystem, you agree to these clear, plain-language Terms of Service. These tools are crafted for developers, students, creators, and teams seeking fast, transparent software.",
      },
      {
        index: "02",
        title: "CLIENT-SIDE EXECUTION & USER RESPONSIBILITY",
        body: "Most LadeStack utilities—including LS PDF, MD2PDF, LS Image Compressor, Swift Resume, and GB Coder's static sandbox—execute directly within your local browser memory. You retain full ownership and sole responsibility for all files, code snippets, and documents you process or export.",
      },
      {
        index: "03",
        title: "OPEN-SOURCE & INTELLECTUAL PROPERTY",
        body: "Original interface design, editorial essays, and brand marks under LADESTACK® belong to Girish Balaso Lade unless explicitly released under an open-source license on GitHub (such as MIT). Where open-source repositories are linked, their respective repository LICENSE files govern redistribution and modification.",
      },
      {
        index: "04",
        title: "CONTRACT & CONSULTING ENGAGEMENTS",
        body: "Inquiries submitted through the contact forms initiate a discussion and do not constitute a binding contract until a written Statement of Work (SOW), scope schedule, and milestone agreement are mutually approved by both parties.",
      },
      {
        index: "05",
        title: "WARRANTY DISCLAIMER & AVAILABILITY",
        body: "Free browser utilities are provided on an 'as-is' basis without warranties of uninterrupted availability. While engineered with strict care and testing, always keep backups of critical source files and confidential documents.",
      },
    ],
    privacySections: [
      {
        index: "01",
        title: "PRIVACY BY ARCHITECTURE",
        body: "LadeStack is built around a foundational principle: your files belong on your device. Client-side tools process PDFs, images, Markdown books, and resumes locally using browser APIs, Web Workers, and IndexedDB—never forcing arbitrary uploads to third-party servers.",
      },
      {
        index: "02",
        title: "ZERO INVASIVE TRACKERS OR AD PROFILING",
        body: "This portfolio does not run third-party advertising pixels, cross-site behavioral trackers, or invasive fingerprinting scripts. Theme preference (light or dark mode) is stored exclusively in your browser's localStorage under the key 'ladestack-theme'.",
      },
      {
        index: "03",
        title: "CONTACT FORM SUBMISSIONS",
        body: "When you voluntarily submit a project inquiry with your name, email address, and message, that information is used solely to respond to your request and evaluate potential collaboration. It is never sold, rented, or shared with marketing brokers.",
      },
      {
        index: "04",
        title: "LOCAL PERSISTENCE & BROWSER STORAGE",
        body: "Workspace drafts in tools such as GB Coder or Swift Resume use local browser storage (localStorage / IndexedDB) solely so your work survives page reloads. Clearing your browser site data permanently removes these local records immediately.",
      },
      {
        index: "05",
        title: "CONTACT FOR PRIVACY QUESTIONS",
        body: "If you have questions regarding data handling, open-source security disclosures, or removal of correspondence, email Girish Lade directly at admin@ladestack.in.",
      },
    ],
  },
};
