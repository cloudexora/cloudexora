import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Cloud, Code2, Palette, Database } from "lucide-react";

const services = [
  { icon: Globe, title: "Full Stack Web Development", desc: "End-to-end web applications with modern frameworks, optimized for performance and scalability." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform mobile experiences built with React Native and Flutter." },
  { icon: Cloud, title: "Cloud Architecture", desc: "Scalable, secure cloud infrastructure on AWS, Azure, and GCP." },
  { icon: Code2, title: "API Development", desc: "RESTful and GraphQL APIs designed for reliability and speed." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centric designs that convert visitors into loyal customers." },
  { icon: Database, title: "Database Solutions", desc: "Optimized database design, migration, and management for any scale." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            What We <span className="gradient-text">Deliver</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-8 group hover:glow-primary hover:border-primary/20 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
