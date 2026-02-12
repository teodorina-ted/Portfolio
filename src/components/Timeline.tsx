import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TimelineEntry {
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  highlight?: boolean;
}

const entries: TimelineEntry[] = [
  {
    title: "Pedagogical Psychology",
    description: "Studied human behavior fundamentals & learning logic.",
  },
  {
    title: "Seed Forum",
    subtitle: "Office & Event Manager",
    tags: ["Logistics", "PR", "Recruiting"],
  },
  {
    title: "London Foster",
    subtitle: "Onboarding Manager",
    tags: ["CRM Implementation", "UserTraining", "WixAdmin"],
  },
  {
    title: "Meta (Telus)",
    subtitle: "Ads Expert",
    tags: ["ROI Analysis", "A/B Testing", "KPIs"],
  },
  {
    title: "Google (TechFirefly)",
    subtitle: "AI Content Moderator",
    tags: ["DataQuality", "AI Training", "Compliance"],
  },
  {
    title: "FlashStart",
    subtitle: "Tech & SEO Internship",
    tags: ["CyberSecurity", "DNS", "MalwareFilter"],
  },
  {
    title: "ITS Academy Olivetti",
    subtitle: "DevOps Senior Technician",
    tags: ["CloudArchitecture", "Docker", "CI/CD"],
  },
  {
    title: "Big Data & AI Specialist",
    description: "Building predictive models and scalable data infrastructure.",
    highlight: true,
  },
];

const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="max-w-[90rem] mx-auto px-6 pb-16">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-0 py-12 border-t border-b border-border items-center"
        style={{ scrollbarWidth: "none" }}
      >
        {entries.map((entry, i) => (
          <div key={i} className="flex items-center shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="min-w-[220px] md:min-w-[240px] px-6 flex flex-col"
            >
              <p className={`text-base font-semibold mb-1 ${entry.highlight ? "text-accent" : ""}`}>
                {entry.title}
              </p>
              {entry.subtitle && (
                <p className="text-xs text-muted-foreground mb-1">
                  {entry.subtitle}
                </p>
              )}
              {entry.description && (
                <p className="text-xs text-muted-foreground">
                  {entry.description}
                </p>
              )}
              {entry.tags && (
                <div className="flex flex-wrap gap-1 mt-1">
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
            {i < entries.length - 1 && (
              <ArrowRight
                className="shrink-0 text-muted-foreground/40"
                size={18}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
