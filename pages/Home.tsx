
import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ChevronDown, MessageSquare, Twitter, Mail, ArrowUpRight, Send, MapPin, User } from 'lucide-react';
import { PROJECTS, SKILLS, REVIEWS, FAQS } from '../constants.tsx';
import { CursorContext, Magnetic } from '../Shared.tsx';
import { Skill } from '../types.ts';
import { useNavigate } from 'react-router-dom';

const CharReveal = ({ children, className = "", delay = 0 }: { children: string, className?: string, delay?: number }) => {
  const characters = children.split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const SectionDivider = () => (
  <div className="w-full py-32 md:py-64 flex justify-center items-center overflow-hidden">
    <motion.div 
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "60%", opacity: 0.15 }}
      viewport={{ once: false }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
    />
  </div>
);

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="min-h-screen pt-48 pb-20 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
      {/* Left Column: Profile Card */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-2/5 flex flex-col"
      >
        <div className="h-full bg-white/[0.03] border border-white/[0.08] rounded-[4rem] p-10 flex flex-col justify-between backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-all duration-1000"></div>
          
          <div className="relative z-10 space-y-10">
            <motion.div 
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-square overflow-hidden rounded-[3rem] border border-white/10"
            >
              <img 
                src="https://picsum.photos/600/600?random=1" 
                alt="Muhammad Asad" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
                <CharReveal>MUHAMMAD ASAD</CharReveal>
              </h2>
              <p className="text-lg text-white/40 font-medium tracking-tight">
                Turning coffee into code and ideas into digital experiences.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex gap-4 mt-12">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-asad-a09381327" },
              { Icon: Github, href: "https://github.com/MuhammadAsadMajeed" },
              { Icon: Twitter, href: "#" },
              { Icon: Mail, href: "#" }
            ].map((social, i) => (
              <Magnetic key={i}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}
                  className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white transition-all duration-500"
                >
                  <social.Icon size={20} />
                </motion.a>
              </Magnetic>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Column: About Description */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full md:w-3/5 flex flex-col"
      >
        <div className="h-full flex flex-col justify-center py-12 md:px-12">
          <div className="space-y-10">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 mb-4">
                {/* <CharReveal>IDENTITY / VISION</CharReveal> */}
              </p>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">
                <CharReveal>ABOUT ME</CharReveal>
              </h1>
            </div>
            
            <div className="space-y-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="text-xl md:text-3xl text-white/60 font-medium leading-tight"
              >
                I create digital experiences that blend clean code with intuitive design. 
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl"
              >
                I've been building web applications for the past two years, working with technologies like React, Node.js, MongoDB, and PostgreSQL. I design user interfaces in Figma and bring them to life with clean, responsive code. I enjoy creating websites that not only look good but also feel natural to use.
Currently studying Data Science, I also work with Python for data analysis and machine learning. I use libraries like Pandas and NumPy to work with data, Matplotlib and Seaborn for visualization, and Scikit-learn to build predictive models. This mix of web development and data science skills helps me create applications that are both user-friendly and intelligent. Whether I'm adding smooth animations with GSAP or analyzing datasets, I love turning ideas into working solutions
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="pt-8 flex items-center gap-6"
              >
                <div className="h-[1px] w-24 bg-white/20"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">SCROLL TO EXPLORE WORK</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, index, isTall }: { project: any, index: number, isTall?: boolean }) => {
  const { setCursorType } = useContext(CursorContext);
  
  return (
    <motion.a
      href={project.link}
      onMouseEnter={() => setCursorType('project')}
      onMouseLeave={() => setCursorType('default')}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative block overflow-hidden rounded-[3rem] bg-white/5 border border-white/10 ${isTall ? 'md:h-[600px] lg:h-[800px]' : 'h-[360px] md:h-[300px] lg:h-[380px]'}`}
    >
      <motion.img 
        src={project.image} 
        alt={project.title} 
        whileHover={{ scale: 1.15, rotate: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>

      <div className="absolute inset-0 p-12 flex flex-col justify-end">
        <div className="overflow-hidden">
          <motion.span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-3 block transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
            {project.category}
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <motion.h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-[0.16,1,0.3,1]">
            {project.title}
          </motion.h3>
        </div>
        
        <motion.div className="mt-8 flex items-center space-x-3 text-white/40 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200 ease-[0.16,1,0.3,1]">
          <span className="text-xs font-bold uppercase tracking-widest">Explore Narrative</span>
          <ArrowUpRight size={16} />
        </motion.div>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-10">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
          <CharReveal>Recent</CharReveal><br/>
          <span className="text-white/20"><CharReveal delay={0.3}>Projects</CharReveal></span>
        </h2>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-right flex flex-col items-end"
        >
          <p className="text-white/40 text-[10px] font-black tracking-[0.6em] uppercase mb-4">Crafting Visual Legacies</p>
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent to-white/30"></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <ProjectCard project={PROJECTS[0]} index={0} isTall />
        </div>
        <div className="md:col-span-5 flex flex-col gap-8">
          <ProjectCard project={PROJECTS[1]} index={1} />
          <ProjectCard project={PROJECTS[2]} index={2} />
        </div>
        <div className="md:col-span-5 flex flex-col gap-8">
          <ProjectCard project={PROJECTS[3]} index={3} />
          <ProjectCard project={PROJECTS[4]} index={4} />
        </div>
        <div className="md:col-span-7">
          <ProjectCard project={PROJECTS[5]} index={5} isTall />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
  const isLocalIcon = skill.icon.startsWith('/');
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.08, type: "spring", stiffness: 100 }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <motion.div
        whileHover={{ 
          y: -15, 
          scale: 1.15,
          rotate: [0, -5, 5, 0],
          boxShadow: "0 40px 100px -20px rgba(255, 255, 255, 0.25)"
        }}
        className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-all duration-500 hover:bg-white hover:border-white shadow-xl overflow-hidden"
      >
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className={`w-16 h-16 md:w-20 md:h-20 group-hover:scale-110 transition-all duration-500 object-contain ${!isLocalIcon ? 'invert group-hover:invert-0' : ''}`}
        />
      </motion.div>
      <span className="mt-8 text-[10px] font-black tracking-[0.5em] text-white/30 uppercase group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-48 uppercase">
        <CharReveal>My</CharReveal> <br/>
        <span className="text-white/20"><CharReveal delay={0.4}>Skills</CharReveal></span>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-12 md:gap-20">
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-40 overflow-hidden bg-white/[0.02]">
      <div className="px-8 max-w-7xl mx-auto mb-20">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase">
          <CharReveal>CLIENT</CharReveal> <br/>
          <span className="text-white/20"><CharReveal delay={0.3}>TESTIMONIALS</CharReveal></span>
        </h2>
      </div>
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 100, 
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          className="flex space-x-8 px-4"
        >
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 0.98 }}
              className="inline-block w-[400px] md:w-[600px] bg-white/5 border border-white/10 p-12 rounded-[3.5rem] whitespace-normal flex flex-col justify-between group hover:bg-white/10 transition-colors duration-700"
            >
              <div>
                <MessageSquare className="text-white/10 mb-8 group-hover:text-white/40 transition-colors duration-500" size={48} />
                <p className="text-xl md:text-3xl font-medium tracking-tight text-white/80 italic leading-relaxed">
                  "{review.content}"
                </p>
              </div>
              <div className="mt-12 flex items-center space-x-6">
                <img src={review.avatar} className="w-16 h-16 rounded-full border border-white/10 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tighter group-hover:text-white transition-colors">{review.name}</h4>
                  <p className="text-white/30 text-[10px] font-black tracking-[0.3em] uppercase">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [active, setActive] = React.useState<number | null>(0);

  return (
    <section className="py-20 px-8 max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-24 text-center uppercase  whitespace-nowrap">
        <CharReveal>FREQUENTLY ASKED</CharReveal>
      </h2>
      <div className="space-y-6">
        {FAQS.map((faq, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border-b border-white/10 py-10 group cursor-pointer" 
            onClick={() => setActive(active === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <span className={`text-3xl md:text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${active === i ? 'text-white translate-x-4' : 'text-white/30'}`}>
                {faq.question}
              </span>
              <motion.div animate={{ rotate: active === i ? 180 : 0, scale: active === i ? 1.2 : 1 }} className="text-white/30">
                <ChevronDown size={32} />
              </motion.div>
            </div>
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: 40 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-white/50 text-xl md:text-2xl leading-relaxed pl-4 border-l-2 border-white/20">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact-me" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-2/3 space-y-12">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            <CharReveal>Let's</CharReveal><br/>
            <span className="text-white/20"><CharReveal delay={0.4}>Connect</CharReveal></span>
          </h2>
          <p className="text-xl md:text-2xl text-white/40 font-medium leading-relaxed max-w-md">
              Let's build something great together. I'm currently open to freelance projects, collaborations, and full-time opportunities.
          </p>
          
          <div className="space-y-8 pt-8">
            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500"><Mail size={24} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Direct Inquiries</p>
                <p className="text-xl font-bold">muhammadasadmajeed2@gmail.com</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500"><MapPin size={24} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Location</p>
                <p className="text-xl font-bold">Remote / Worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white/[0.03] border border-white/[0.08] p-12 rounded-[4rem] backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-2">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-white/40 transition-all font-medium text-white placeholder:text-white/10" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-white/40 transition-all font-medium text-white placeholder:text-white/10" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-2">Message</label>
              <textarea rows={5} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-white/40 transition-all font-medium text-white placeholder:text-white/10 resize-none"></textarea>
            </div>
            <Magnetic>
              <button className="w-full px-14 py-6 bg-white text-black rounded-3xl font-black text-xs uppercase tracking-[0.4em] hover:bg-gray-100 transition-all flex items-center justify-center space-x-4 shadow-2xl overflow-hidden group">
                <motion.span whileHover={{ y: -20, opacity: 0 }} className="flex items-center space-x-4">
                  <span>Send Message</span>
                  <Send size={16} />
                </motion.span>
              </button>
            </Magnetic>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent">
      <Hero />
      <SectionDivider />
      <SectionReveal><Projects /></SectionReveal>
      <SectionDivider />
      <SectionReveal><Skills /></SectionReveal>
      <SectionDivider />
      <SectionReveal><Reviews /></SectionReveal>
      <SectionDivider />
      <SectionReveal><FAQSection /></SectionReveal>
      <SectionDivider />
      
      <section className="py-48 px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 border border-white/10 rounded-[5rem] p-24 md:p-48 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000"></div>
          <motion.h2 
            className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-16 text-white"
          >
            READY TO <br/> <span className="text-white/20">COLLABORATE?</span>
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Magnetic>
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center space-x-6 px-16 py-8 bg-white text-black rounded-full font-black text-xl hover:scale-105 hover:bg-gray-100 transition-all duration-500 shadow-2xl relative z-20 pointer-events-auto"
              >
                <span>LET'S TALK</span>
                <Send size={24} />
              </button>
            </Magnetic>
            <Magnetic>
              <button 
                onClick={() => navigate('/about')}
                className="inline-flex items-center space-x-6 px-16 py-8 bg-white/5 border border-white/10 text-white rounded-full font-black text-xl hover:scale-105 hover:bg-white/10 transition-all duration-500 shadow-2xl backdrop-blur-xl relative z-20 pointer-events-auto"
              >
                <span>WHO AM I?</span>
                <User size={24} />
              </button>
            </Magnetic>
          </div>
        </motion.div>
      </section>

      <SectionDivider />
      <SectionReveal><ContactSection /></SectionReveal>
    </div>
  );
};

export default Home;
