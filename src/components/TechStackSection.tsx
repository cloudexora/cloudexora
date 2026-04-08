import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Server, Database, Cloud } from "lucide-react";

const techCategories = [
  {
    title: "Frontend Development",
    icon: <Layers className="w-6 h-6 text-primary mb-4" />,
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Services",
    icon: <Server className="w-6 h-6 text-primary mb-4" />,
    techs: ["Node.js", "Python", "GraphQL", "REST APIs"],
  },
  {
    title: "Database Management",
    icon: <Database className="w-6 h-6 text-primary mb-4" />,
    techs: ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-primary mb-4" />,
    techs: ["AWS", "Docker", "Kubernetes", "CI/CD Platforms"],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">Our Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            The <span className="gradient-text">Technologies</span> We Master
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            We leverage industry-leading frameworks and tools to build robust, scalable, and high-performance digital solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {techCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold font-display mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.techs.map((tech) => (
                  <li key={tech} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3 group-hover:bg-primary transition-colors duration-300" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
