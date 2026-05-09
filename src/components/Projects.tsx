import ProjectCard from "./ProjectCard";

const projects = [
  {
    status: "In Development",
    statusColor: "text-accent",
    title: "AnnotateAI",
    previewUrl: "https://annotateai.it/",
    business:
      "An AI-powered image annotation platform designed for machine learning teams and data labeling workflows. The product addresses the bottleneck of manual image tagging in computer vision pipelines — where accuracy, speed, and consistency directly impact model performance.",
    goal: 'Architect an <strong>intelligent annotation pipeline</strong> that combines <strong>AI-assisted auto-labeling</strong> with human review workflows. The platform integrates <strong>YOLO-based object detection</strong>, real-time collaboration, and a structured data export system — reducing annotation time by 70% while maintaining human-level accuracy.',
    skills: [
      "React",
      "Python",
      "YOLO / Computer Vision",
      "REST API Design",
      "MongoDB", 
      "Docker",
      "JWT Authentication",
      "UI/UX Design",
      "Cloud Architecture",
      "Data Pipeline Design",
      "AI Integration",
      "DevOps",
    ],
    websiteUrl: "https://annotateai.it/",
    iframeScale: 0.6,
  },
  
  {
    status: "Ongoing (Preview)",
    statusColor: "text-green-700 dark:text-green-400",
    title: "Indomitum",
    previewUrl: "https://indomitum.online",
    business:
      "A cloud-native CRM prototype designed for industrial warehouse and logistics automation. The platform targets mid-size warehouses that still rely on paper-based tracking and disconnected inventory systems — bridging the gap between physical operations and digital intelligence.",
    goal: "Build a <strong>real-time data bridge</strong> between mobile barcode/QR scanning on the warehouse floor and a cloud-hosted database with intuitive dashboard visualization. Integrating <strong>Cloud Architecture</strong> (Docker, CI/CD pipelines) into a CRM that warehouse operators can actually use — prioritizing UX simplicity over feature bloat.",
    skills: [
      "React JS",
      "Node.js",
      "Cloud DevOps",
      "Docker",
      "CRM Integration",
      "Data Integration",
      "Scan Integration",
      "UI/UX Design",
      "Intuitive Logical Flow",
      "Design Thinking",
      "Database Design",
      "Real-time Data Sync",
      "Debugging",
      "CI/CD",
    ],
    websiteUrl: "https://indomitum.online",
    iframeScale: 0.75,
    improvements: [
      "Cloud backend integration with real-time database sync",
      "Delivery tracking system with live GPS and status updates",
      "Automated inventory alerts and reorder triggers",
      "Role-based access control for warehouse staff vs. management",
      "Analytics dashboard with predictive stock forecasting",
    ],
  },
  {
    status: "Upcoming",
    statusColor: "text-blue-600 dark:text-blue-400",
    title: "REAL",
    previewUrl: "https://realevent.lovable.app",
    business:
      "A hyperlocal social events platform for Romagna (Rimini, Cesena, Forlì). REAL connects people through real-life events — solving the fragmentation of local event discovery across Instagram stories, WhatsApp groups, and word-of-mouth. The platform makes it easy to find what's happening tonight and see who's going.",
    goal: "Build a <strong>community-driven event board</strong> with real-time sync, geolocation filtering, and social features. The UX prioritizes <strong>speed and simplicity</strong> — users can discover, create, and share events in under 30 seconds. Integrating <strong>multilingual support</strong>, auto-import from external sources, and a social layer where users see who's attending.",
    skills: [
      "React",
      "Supabase",
      "Geolocation API",
      "Real-time Sync",
      "Multilingual i18n",
      "Social Features",
      "UI/UX Design",
      "Mobile-First Design",
      "Community Building",
      "Event Data Modeling",
      "PWA",
      "SEO Optimization",
    ],
    websiteUrl: "https://realevent.lovable.app",
    iframeScale: 0.75,
    improvements: [
      "Native mobile app (iOS & Android) with push notifications",
      "AI-powered event recommendations based on user preferences",
      "Integration with Instagram/Facebook events auto-import",
      "In-app chat and group creation for event attendees",
      "Venue partnership dashboard for local businesses",
    ],
  },
  {
    status: "Launching Soon",
    statusColor: "text-amber-500 dark:text-amber-400",
    title: "Beerloga",
    previewUrl: "https://beerloga.beerloga-balti.workers.dev/",
    business:
      "A digital platform for Beerloga, a craft beer bar in Bălți, Moldova. The project reimagines the bar's online presence — transforming a local staple into a polished, modern brand experience that can attract both regulars and new customers through digital discovery.",
    goal: "Build a <strong>brand-forward web presence</strong> that communicates the bar's personality and offering at a glance. The design prioritizes <strong>atmosphere and identity</strong> over feature complexity — fast loading, mobile-first, and visually memorable. A foundation ready to expand with online reservations, event listings, and loyalty features.",
    skills: [
      "React",
      "Brand Design",
      "Mobile-First UX",
      "Cloudflare Workers",
      "Performance Optimization",
      "UI/UX Design",
      "Visual Identity",
      "Local SEO",
    ],
    websiteUrl: "https://beerloga.beerloga-balti.workers.dev/",
    improvements: [
      "Online table reservation system",
      "Weekly events and live music calendar",
      "Digital menu with seasonal updates",
      "Loyalty program integration",
      "Instagram feed auto-sync for social proof",
    ],
  },
  {
    status: "Sandbox (Preview)",
    statusColor: "text-accent",
    title: "Cruises with Mili",
    previewUrl: "https://cruiseswithmili.lovable.app",
    business:
      "A luxury B2C travel platform focused on curating premium cruise experiences for discerning travelers. The brand positions itself at the intersection of editorial storytelling and direct booking — transforming aspirational content into measurable conversions through trust-building design patterns.",
    goal: "Design a <strong>trust-based conversion funnel</strong> that guides users from editorial cruise content to direct bookings. The UX maps the emotional journey from inspiration → research → trust → purchase. Integrating <strong>Shopify Vouchers</strong> for gift experiences and building real-time availability displays to create urgency without pressure.",
    skills: [
      "React",
      "User Behavior Mapping",
      "Marketing Integration",
      "Tailwind CSS",
      "CRM Integration",
      "UI/UX Design",
      "Intuitive Logical Flow",
      "Design Thinking",
      "Project Management",
      "Conversion Optimization",
      "Editorial UX",
      "Data-Driven Design",
    ],
    websiteUrl: "https://cruiseswithmili.lovable.app",
    improvements: [
      "Shopify voucher selling integration for gift cruise experiences",
      "Social media feed integration (Instagram, TikTok) for social proof",
      "Real-time cruise availability API integration",
      "Email marketing automation with personalized cruise recommendations",
      "User review & rating system to boost trust signals",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <h2 className="section-heading mb-16">Case Studies</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Projects;
