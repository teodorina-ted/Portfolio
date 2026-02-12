import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TimelineEntry {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  highlight?: boolean;
}

const entries: TimelineEntry[] = [
  {
    year: "2015",
    title: "Pedagogical Psychology",
    description: "Studied human behavior fundamentals & learning logic.",
  },
  {
    year: "2017",
    title: "Seed Forum",
    subtitle: "Office & Event Manager",
    tags: ["Logistics", "PR", "Recruiting"],
  },
  {
    year: "2019",
    title: "London Foster",
    subtitle: "Onboarding Manager",
    tags: ["CRM Implementation", "UserTraining", "WixAdmin"],
  },
  {
    year: "2020",
    title: "Meta (Telus)",
    subtitle: "Ads Expert",
    tags: ["ROI Analysis", "A/B Testing", "KPIs"],
  },
  {
    year: "2021",
    title: "Google (TechFirefly)",
    subtitle: "AI Content Moderator",
    tags: ["DataQuality", "AI Training", "Compliance"],
  },
  {
    year: "2023",
    title: "FlashStart",
    subtitle: "Tech & SEO Internship",
    tags: ["CyberSecurity", "DNS", "MalwareFilter"],
  },
  {
    year: "2024",
    title: "ITS Academy Olivetti",
    subtitle: "DevOps Senior Technician",
    tags: ["CloudArchitecture", "Docker", "CI/CD"],
  },
  {
    year: "2026+",
    title: "Big Data & AI Specialist",
    description: "Building predictive models and scalable data infrastructure.",
    highlight: true,
  },
];

const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth;
  }, []);

  return (
    <section className="max-w-[90rem] mx-auto px-6 pb-8">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-0 py-12 border-t border-b border-border items-center scroll-smooth timeline-scroll"
      >
        {entries.map((entry, i) => (
          <div key={i} className="flex items-center shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="min-w-[200px] md:min-w-[240px] px-4 md:px-6 flex flex-col"
            >
              <span className={`text-[10px] uppercase tracking-[0.2em] mb-2 ${entry.highlight ? "text-accent" : "text-muted-foreground"}`}>
                {entry.year}
              </span>
              <p className={`text-sm md:text-base font-semibold mb-1 ${entry.highlight ? "text-accent" : ""}`}>
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
                    <span key={tag} className="text-[10px] text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
            {i < entries.length - 1 && (
              <ArrowRight className="shrink-0 text-muted-foreground/40" size={18} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
