import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Cloud, Code2, Palette, Database, ArrowRight } from "lucide-react";

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
    <section id="services" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Ambient glowing orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />

      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">Our Capabilities</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Digital Engineering <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide comprehensive, end-to-end IT solutions designed to propel your business forward in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none -m-[1px]" />
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col hover:border-primary/30 transition-all duration-500 relative bg-secondary/50 group-hover:bg-secondary/80 cursor-pointer overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-500">
                  <s.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={28} />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{s.desc}</p>
                
                <div className="mt-8 flex items-center text-sm font-semibold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
