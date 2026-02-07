
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import { CursorContext, Magnetic } from './Shared.tsx';

const Background = () => {
  const { scrollYProgress } = useScroll();
  const moonY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const starsY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
      <motion.div style={{ y: moonY }} className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px]">
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 50%, transparent 80%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>
      
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>

      <motion.div style={{ y: starsY }} className="absolute inset-0 opacity-40">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, top: `${(i * 13) % 100}%`, left: `${(i * 19) % 100}%` }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.4, 1] }}
            transition={{ duration: 5 + (i % 8), repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
          />
        ))}
      </motion.div>
    </div>
  );
};

const CustomCursor = ({ type }: { type: 'default' | 'project' | 'hidden' }) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 300 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ 
        x: springX, 
        y: springY,
      }}
    >
      <motion.div
        style={{ x: "-50%", y: "-50%" }}
        animate={{
          width: type === 'project' ? 160 : (type === 'hidden' ? 0 : 12),
          height: type === 'project' ? 50 : (type === 'hidden' ? 0 : 12),
          backgroundColor: type === 'project' ? 'rgba(255, 255, 255, 0.25)' : '#ffffff',
          border: type === 'project' ? '1px solid rgba(255, 255, 255, 0.5)' : 'none',
          backdropFilter: type === 'project' ? 'blur(12px)' : 'none',
          boxShadow: type === 'project' ? '0 10px 30px rgba(0,0,0,0.5)' : '0 0 20px rgba(255,255,255,0.3)'
        }}
        className="rounded-full flex items-center justify-center overflow-hidden transition-all duration-300"
      >
        <AnimatePresence>
          {type === 'project' && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-white text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap"
            >
              View Case Study
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Contact Me', path: '/contact' }
  ];

  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-8 md:px-16 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <Magnetic>
          <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white transition-all hover:tracking-normal duration-700">
            MUHAMMAD<span className="text-white/20"> ASAD</span>
          </Link>
        </Magnetic>
      </div>

      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 px-2 py-2 rounded-full flex items-center space-x-1 pointer-events-auto shadow-2xl">
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700 ${
                location.pathname === link.path ? 'bg-white text-black' : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-3 hover:bg-white/10 rounded-full">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 md:hidden bg-black z-[60] flex flex-col items-center justify-center space-y-12 pointer-events-auto"
          >
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white p-4 bg-white/5 rounded-full hover:rotate-90 transition-transform">
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-6xl font-black tracking-tighter uppercase transition-all duration-700 ${
                  location.pathname === link.path ? 'text-white' : 'text-white/10 hover:text-white/40 hover:tracking-normal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ResumeButton = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-10 right-10 z-[60] pointer-events-auto"
    >
      <Magnetic>
        <motion.a
          href="#"
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-black p-5 rounded-full shadow-2xl flex items-center space-x-3 group transition-all duration-500"
        >
          <Download size={24} />
          <span className="font-black text-[10px] uppercase tracking-[0.4em] overflow-hidden w-0 group-hover:w-32 transition-all duration-700">Download CV</span>
        </motion.a>
      </Magnetic>
    </motion.div>
  );
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-32 right-10 z-[60] bg-white/5 border border-white/10 text-white p-4 rounded-full backdrop-blur-xl shadow-2xl hover:bg-white hover:text-black transition-all duration-500"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/20 via-white to-white/20 z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

const App: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'project' | 'hidden'>('default');
  const location = useLocation();

  return (
    <CursorContext.Provider value={{ setCursorType }}>
      <div className="min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
        <ScrollProgress />
        <Background />
        <CustomCursor type={cursorType} />
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -100, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <main className="relative z-10">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </motion.div>
        </AnimatePresence>

        <ResumeButton />
        <BackToTop />
        
        <footer className="relative z-10 pt-48 pb-16 px-8 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-16 text-white text-center"
            >
              MUHAMMAD <span className="text-white/10">ASAD</span>
            </motion.h2>
            
            <div className="flex space-x-6 mb-24">
              {[Linkedin, Github, Twitter, Mail].map((Icon, i) => (
                <Magnetic key={i}>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,1)", color: "black", borderColor: "white" }}
                    className="w-16 h-16 rounded-[1.8rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex items-center justify-center text-white/40 transition-all duration-700"
                  >
                    <Icon size={24} />
                  </motion.a>
                </Magnetic>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full border-t border-white/5 pt-12 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
              <p>© {new Date().getFullYear()} CREATED BY MUHAMMAD ASAD</p>
              <div className="flex space-x-8">
                <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
                <a href="#" className="hover:text-white transition-colors">TERMS</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </CursorContext.Provider>
  );
};

export default App;
