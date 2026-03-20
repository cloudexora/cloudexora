import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", desc: "Full-stack marketplace with real-time inventory and payment integration.", color: "from-primary/20 to-accent/20" },
  { title: "Health & Fitness App", category: "Mobile App", desc: "Cross-platform wellness tracker with AI-powered recommendations.", color: "from-accent/20 to-primary/20" },
  { title: "Cloud Dashboard", category: "Cloud Architecture", desc: "Enterprise monitoring dashboard with real-time analytics and alerts.", color: "from-primary/20 to-primary/10" },
  { title: "FinTech API Gateway", category: "API Development", desc: "High-throughput payment processing API serving 1M+ daily transactions.", color: "from-accent/20 to-accent/10" },
  { title: "SaaS Admin Panel", category: "UI/UX Design", desc: "Intuitive multi-tenant admin interface with role-based access control.", color: "from-primary/15 to-accent/15" },
  { title: "AI Content Platform", category: "Full Stack", desc: "AI-powered content generation platform with collaborative editing.", color: "from-accent/15 to-primary/15" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Our <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:glow-primary transition-all duration-500"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="font-display text-2xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">{p.category}</span>
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-primary" size={28} />
                </div>
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">{p.category}</span>
                <h3 className="font-display text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
