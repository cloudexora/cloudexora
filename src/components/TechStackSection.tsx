import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techs = [
  "React", "Node.js", "MongoDB", "TypeScript", "AWS", "Docker",
  "PostgreSQL", "GraphQL", "Next.js", "Tailwind CSS", "Python", "Redis",
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Tech Stack</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techs.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="glass-card rounded-xl px-6 py-4 font-display font-semibold text-sm hover:border-primary/30 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
