import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Arjun Mehta", role: "CEO, FinStack", text: "Deepak Tech Solutions transformed our vision into a world-class fintech platform. Their technical expertise and dedication are unmatched." },
  { name: "Priya Sharma", role: "Founder, HealthLoop", text: "The mobile app they built exceeded all expectations. Smooth UX, fast delivery, and outstanding post-launch support." },
  { name: "Rahul Kapoor", role: "CTO, CloudNine", text: "Their cloud architecture expertise saved us 40% on infrastructure costs while improving performance tenfold." },
  { name: "Sneha Reddy", role: "Product Lead, EduSpark", text: "Incredible attention to detail in UI/UX design. Our user engagement tripled after the redesign." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Client <span className="gradient-text">Love</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
              "{t.text}"
            </p>
            <div>
              <p className="font-display font-semibold">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/30 transition-colors" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/30 transition-colors" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
