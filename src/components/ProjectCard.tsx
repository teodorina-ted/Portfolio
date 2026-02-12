import { motion } from "framer-motion";

interface ProjectCardProps {
  status: string;
  statusColor: string;
  title: string;
  previewUrl: string;
  business: string;
  goal: string;
  skills: string[];
  websiteUrl: string;
}

const ProjectCard = ({
  status,
  statusColor,
  title,
  previewUrl,
  business,
  goal,
  skills,
  websiteUrl,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-border bg-card overflow-hidden mb-24 transition-colors duration-300 hover:border-muted-foreground/40"
    >
      {/* Header */}
      <div className="p-6 border-b border-border flex justify-between items-center bg-secondary">
        <span className={`text-[10px] uppercase tracking-widest ${statusColor}`}>
          {status}
        </span>
        <span className="text-lg font-semibold">{title}</span>
      </div>

      {/* Preview */}
      <div
        className="w-full h-[500px] border-b border-border relative overflow-hidden"
        style={{ background: "hsl(var(--preview-bg))" }}
      >
        <iframe
          src={previewUrl}
          title={`${title} Preview`}
          className="w-full h-full border-none pointer-events-none"
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="p-10 grid md:grid-cols-2 gap-12">
        <div>
          <h4 className="label-micro mb-4">The Business</h4>
          <p className="text-sm mb-6 text-foreground/80">{business}</p>
          <h4 className="label-micro mb-4">The Goal</h4>
          <p
            className="text-sm text-foreground/80"
            dangerouslySetInnerHTML={{ __html: goal }}
          />
        </div>
        <div>
          <h4 className="label-micro mb-4">Skills Achieved</h4>
          <div className="mb-8">
            {skills.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-btn"
          >
            Visit Website
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
