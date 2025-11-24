import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Custom WhatsApp Icon (SVG) ---
const WhatsAppIcon = ({ size = 22, color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /> 
  </svg>
);

const SocialLink = ({ href, icon, label, index }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20 group relative z-20 shadow-lg"
    aria-label={label}
  >
    {icon}
    <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      {label}
    </span>
  </motion.a>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 pt-20 overflow-hidden">
      
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              opacity: Math.random() * 0.3 + 0.1,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 30 + 10 + "px",
              height: Math.random() * 30 + 10 + "px",
              borderRadius: Math.random() > 0.5 ? "50%" : "20%",
            }}
          />
        ))}
      </div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], x: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative"
        >
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Freelance & Full-time
          </motion.div>

          <h2 className="text-lg md:text-xl text-indigo-200 font-medium mb-2 tracking-widest uppercase">
            Hello, I'm
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-200 mb-6 leading-tight drop-shadow-sm pb-2">
            Maram Ahmed
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
            Front-End Developer
          </h2>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
             Expert in crafting high-performance, modern interfaces with <span className="text-white font-semibold">React.js</span> and advanced styling frameworks, as well as developing cross-platform mobile applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-3 rounded-full bg-white text-indigo-900 font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 flex items-center gap-2"
            >
              View My Work <ExternalLink size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-3 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
             <SocialLink index={1} href="https://www.linkedin.com/in/maramahmed10" icon={<Linkedin size={22} />} label="LinkedIn" />
             <SocialLink index={2} href="https://github.com/MaramAhmed18" icon={<Github size={22} />} label="GitHub" />
             <SocialLink index={3} href="mailto:maramahmed1818@gmail.com" icon={<Mail size={22} />} label="Email" />
             
             {/* WhatsApp Link with your number */}
             <SocialLink 
               index={4} 
               href="https://wa.me/201551131442" 
               icon={<WhatsAppIcon size={22} />} 
               label="WhatsApp" 
             />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 absolute left-1/2 transform -translate-x-1/2 bottom-[-80px] md:bottom-[-100px] z-20"
        >
          <a href="#about" className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-2 cursor-pointer">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
