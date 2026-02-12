import ProjectCard from "./ProjectCard";

const projects = [
  {
    status: "Completed (Preview)",
    statusColor: "text-muted-foreground",
    title: "London Foster",
    previewUrl: "https://www.londonfoster.com/",
    business:
      "A high-volume Miami Real Estate agency managing 200+ active agents across South Florida. The company was scaling rapidly but relied on manual data entry, fragmented spreadsheets, and disconnected platforms — creating bottlenecks in onboarding, compliance tracking, and commission processing.",
    goal: 'Architect a fully automated <strong>\"Zero-Friction\" onboarding pipeline</strong> by synchronizing <strong>Shopify</strong> (payment processing & subscription management), <strong>Wix</strong> (public-facing agent portal & frontend), and <strong>AmoCRM</strong> (internal CRM & backend workflows). The system needed to auto-generate agent profiles, trigger DBPR compliance checks, and route financial reporting — reducing onboarding time from 3 days to under 2 hours.',
    skills: [
      "WordPress",
      "CRM Implementation",
      "Data Integration",
      "Wix Admin",
      "DBPR Compliance",
      "Financial Reporting",
      "User Training",
      "UI/UX Design",
      "Intuitive Logical Flow",
      "Design Thinking",
      "Problem Solving",
      "API Integration",
      "Process Automation",
    ],
    websiteUrl: "https://www.londonfoster.com/",
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
  {
    status: "Ongoing (Preview)",
    statusColor: "text-green-500",
    title: "Indomitum",
    previewUrl: "https://indomitum.lovable.app/",
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
    websiteUrl: "https://indomitum.lovable.app/",
    improvements: [
      "Cloud backend integration with real-time database sync",
      "Delivery tracking system with live GPS and status updates",
      "Automated inventory alerts and reorder triggers",
      "Role-based access control for warehouse staff vs. management",
      "Analytics dashboard with predictive stock forecasting",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <h2 className="section-heading mb-16">Case Studies</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Projects;
