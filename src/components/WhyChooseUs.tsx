import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Zap, Clock, Headphones } from "lucide-react";

const reasons = [
  { icon: Users, text: "Experienced Developers" },
  { icon: Zap, text: "Scalable Solutions" },
  { icon: Clock, text: "Fast Delivery" },
  { icon: Headphones, text: "24/7 Support" },
];

const stats = [
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

const WhyChooseUs = () => {
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
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Built to <span className="gradient-text">Outperform</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((r, i) => (
            <motion.div
              key={r.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <r.icon className="text-primary" size={22} />
              </div>
              <span className="font-display font-semibold text-sm">{r.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                <Counter target={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
