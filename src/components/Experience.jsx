import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      role: "Front-End Developer (Freelance)",
      company: "Enjez Project",
      period: "Nov 2025 - Present",
      desc: "A complete service booking platform offering a seamless user experience from browsing to booking. Users can explore services, compare providers, make reservations, track requests, and chat directly. Includes an admin dashboard for managing services, providers, bookings, and notifications with real-time updates."
    },
    {
      type: "internship",
      role: "Front-end and Cross-Platform Trainee",
      company: "Information Technology Institute (ITI)",
      period: "Jul 2025 - Nov 2025",
      desc: "Intensive training program covering Front-End & Web (HTML5, CSS3, JS, React, Next.js) and Cross-Platform Mobile (React Native, Flutter). Gained hands-on experience with State Management (Redux, Provider, Bloc), Databases (Node.js, Firebase), and Tools like Git & GitHub."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-indigo-600 font-bold uppercase tracking-wider mb-2">My Journey</h3>
          <h2 className="text-4xl font-bold text-gray-900">Experience & Internships</h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-200 before:via-purple-200 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              
              {/* Icon dot */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${exp.type === 'work' ? 'bg-indigo-600' : 'bg-purple-600'}`}>
                {exp.type === 'work' ? (
                  <Briefcase size={16} className="text-white" />
                ) : (
                  <GraduationCap size={16} className="text-white" />
                )}
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"> 
                {/* Arrow for desktop */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 ${index % 2 === 0 ? '-right-2.5 border-r-0 border-b-0' : '-left-2.5 border-t-0 border-l-0 border-r border-b'}`}></div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                  <h3 className={`font-bold text-lg ${exp.type === 'work' ? 'text-indigo-900' : 'text-purple-900'}`}>
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full whitespace-nowrap">
                    <Calendar size={12} /> {exp.period}
                  </span>
                </div>
                
                <div className="text-base font-medium text-slate-700 mb-3">
                  {exp.company}
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
