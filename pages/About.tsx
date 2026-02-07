
import React from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';

const CharReveal = ({ children, className = "", delay = 0 }: { children: string, className?: string, delay?: number }) => {
  const characters = children.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };
  // Fix: Use 'as const' for the transition type to match Framer Motion's literal type requirements
  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20, transition: { type: "spring" as const, damping: 12, stiffness: 100 } },
  };
  return (
    <motion.span variants={container} initial="hidden" animate="visible" className={className}>
      {characters.map((char, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Counter = ({ value, label, delay = 0 }: { value: number, label: string, delay?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      animate(count, value, { duration: 2.5, ease: [0.16, 1, 0.3, 1] });
    }, 500 + delay * 200);
    return () => clearTimeout(timer);
  }, [value, count, delay]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.h3 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2">
        <motion.span>{rounded}</motion.span><span className="text-white/20">+</span>
      </motion.h3>
      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">{label}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <div className="pt-48 pb-32 px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
              <CharReveal>BEYOND</CharReveal> <br/>
              <CharReveal delay={0.3}>THE</CharReveal> <br/>
              <span className="text-white/20"><CharReveal delay={0.6}>CODE.</CharReveal></span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-2xl md:text-4xl font-medium text-white/60 leading-tight"
            >
              Combining technical precision with creative design to build digital experiences that perform.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -3, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/5 rounded-[4rem] rotate-6 group-hover:rotate-0 transition-transform duration-1000"></div>
            <img 
              src="https://picsum.photos/800/1000?random=100" 
              className="relative rounded-[4rem] border border-white/10 w-full aspect-[4/5] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Muhammad Asad"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-24 border-y border-white/5">
          <Counter value={2.5} label="Years Experience" delay={0} />
          <Counter value={20} label="Shipped Products" delay={1} />
          <Counter value={10} label="Global Partners" delay={2} />
          <Counter value={4500} label="Hours of Coding" delay={3} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-black uppercase tracking-tighter">The Philosophical Vision</h3>
            <p className="text-xl text-white/50 leading-relaxed font-medium">
              In a digital world filled with complexity, I believe in the power of simplicity. Every line of code I write serves a purpose to create experiences that feel effortless. My approach combines the precision of engineering with the creativity of design, resulting in web applications that are both beautiful and functional. I don't just build websites; I craft digital solutions that solve real problems.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-black uppercase tracking-tighter">The Engineered Core</h3>
            <p className="text-xl text-white/50 leading-relaxed font-medium">
              Performance is not optional it's fundamental. I build applications using the MERN stack, ensuring they're fast, secure, and scalable. My code is clean and well-documented. I optimize databases, implement responsive designs, and create smooth animations that enhance user experience. With expertise in both frontend frameworks and backend architecture, I deliver complete solutions from concept to deployment.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
