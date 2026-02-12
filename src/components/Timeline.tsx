import { useRef } from "react";
import { motion } from "framer-motion";

interface TimelineEntry {
  label: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  highlight?: boolean;
}

const entries: TimelineEntry[] = [
  {
    label: "Education",
    title: "Pedagogical Psychology",
    description: "Studied human behavior fundamentals & learning logic.",
  },
  {
    label: "Chisinau",
    title: "Seed Forum",
    subtitle: "Office & Event Manager",
    tags: ["Logistics", "PR", "Recruiting"],
  },
  {
    label: "Miami (US)",
    title: "London Foster",
    subtitle: "Onboarding Manager",
    tags: ["CRM Implementation", "UserTraining", "WixAdmin"],
  },
  {
    label: "Remote",
    title: "Meta (Telus)",
    subtitle: "Ads Expert",
    tags: ["ROI Analysis", "A/B Testing", "KPIs"],
  },
  {
    label: "Portugal",
    title: "Google (TechFirefly)",
    subtitle: "AI Content Moderator",
    tags: ["DataQuality", "AI Training", "Compliance"],
  },
  {
    label: "Italy",
    title: "FlashStart",
    subtitle: "Tech & SEO Internship",
    tags: ["CyberSecurity", "DNS", "MalwareFilter"],
  },
  {
    label: "Current (Cesena)",
    title: "ITS Academy Olivetti",
    subtitle: "DevOps Senior Technician",
    tags: ["CloudArchitecture", "Docker", "CI/CD"],
  },
  {
    label: "Future Goal",
    title: "Big Data & AI Specialist",
    description: "Building predictive models and scalable data infrastructure.",
    highlight: true,
  },
];

const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="max-w-[90rem] mx-auto px-6 pb-24">
      <div className="flex justify-between text-muted-foreground text-[11px] uppercase tracking-[0.2em] mb-4 px-1">
        <span>← Scroll Timeline</span>
        <span>Performance Journey →</span>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-0 py-16 border-t border-b border-border items-start"
        style={{ scrollbarWidth: "none" }}
      >
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="min-w-[280px] md:min-w-[300px] px-8 relative flex flex-col"
          >
            {i < entries.length - 1 && (
              <span
                className="absolute right-0 top-0 text-lg"
                style={{ color: "hsl(var(--timeline-arrow))" }}
              >
                →
              </span>
            )}

            <span
              className={`label-micro mb-3 ${
                entry.highlight ? "!text-accent" : ""
              }`}
            >
              {entry.label}
            </span>
            <p className="text-lg font-semibold mb-2">{entry.title}</p>
            {entry.subtitle && (
              <p className="text-xs text-muted-foreground mb-2">
                {entry.subtitle}
              </p>
            )}
            {entry.description && (
              <p className="text-xs text-muted-foreground">
                {entry.description}
              </p>
            )}
            {entry.tags && (
              <div className="flex flex-wrap gap-1 mt-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
