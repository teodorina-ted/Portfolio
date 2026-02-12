import ProjectCard from "./ProjectCard";

const projects = [
  {
    status: "Completed (Preview)",
    statusColor: "text-muted-foreground",
    title: "London Foster",
    previewUrl: "https://www.londonfoster.com/",
    business:
      "A high-volume Miami Real Estate agency that needed to scale from manual entry to centralized digital management for hundreds of agents.",
    goal: 'Synchronize <strong>Shopify</strong> (payments), <strong>Wix</strong> (frontend), and <strong>AmoCRM</strong> (backend) to create an automated "Zero-Friction" onboarding flow for new realtors.',
    skills: [
      "CRM Implementation",
      "Wix Admin",
      "DBPR Compliance",
      "Financial Reporting",
      "User Training",
      "Problem Solving",
    ],
    websiteUrl: "https://www.londonfoster.com/",
  },
  {
    status: "Ongoing (Preview)",
    statusColor: "text-accent",
    title: "Cruises with Mili",
    previewUrl: "https://cruiseswithmili.lovable.app",
    business:
      "A luxury B2C travel platform focused on high-end cruise experiences.",
    goal: "Designing a trust-based user journey that transforms editorial content into direct conversions. Integrating <strong>Shopify Vouchers</strong> and real-time availability.",
    skills: [
      "React",
      "User Behavior Mapping",
      "Marketing Integration",
      "Tailwind CSS",
      "Project Management",
    ],
    websiteUrl: "https://cruiseswithmili.lovable.app",
  },
  {
    status: "Ongoing (Preview)",
    statusColor: "text-purple-500",
    title: "Indomitum",
    previewUrl: "https://indomitum.lovable.app/",
    business:
      "Cloud-native CRM prototype for industrial warehouse and logistics automation.",
    goal: "Integrating <strong>Cloud Architecture</strong> into a CRM with perfect intuitive design. Building a real-time data bridge between mobile scanning and cloud Databases.",
    skills: [
      "React JS",
      "Node.js",
      "Cloud Devops",
      "Docker",
      "UX Logic",
    ],
    websiteUrl: "https://indomitum.lovable.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="section-heading mb-16">Case Studies</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Projects;
