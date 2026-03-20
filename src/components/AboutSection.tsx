import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, TrendingUp, Shield } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Pioneering solutions with cutting-edge technologies that redefine what's possible." },
  { icon: TrendingUp, title: "Scalability", desc: "Architecture built to grow seamlessly with your business demands." },
  { icon: Shield, title: "Reliability", desc: "Rock-solid systems with 99.9% uptime and enterprise-grade security." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            A Startup Built on <span className="gradient-text">Vision & Code</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Deepak Tech Solutions is a forward-thinking IT startup dedicated to building innovative digital products. From full-stack web apps to cloud infrastructure, we help businesses transform their ideas into powerful, scalable realities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card rounded-2xl p-8 text-center group hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
