import React from 'react';
import { 
  Code2, 
  Terminal, 
  Palette, 
  Layout, 
  Smartphone, 
  Database, 
  Server, 
  Globe, 
  Cpu, 
  Layers, 
  Box, 
  FileCode 
} from 'lucide-react';

const Skills = () => {
  const skills = [
    // Frontend Core
    { name: "React.js", icon: <Code2 size={24} />, color: "text-blue-500" },
    { name: "Next.js", icon: <Globe size={24} />, color: "text-gray-800" },
    { name: "JavaScript (ES6+)", icon: <Terminal size={24} />, color: "text-yellow-500" },
    { name: "TypeScript", icon: <FileCode size={24} />, color: "text-blue-600" },
    { name: "HTML5 / CSS3", icon: <Layout size={24} />, color: "text-orange-500" },
    
    // Styling
    { name: "Tailwind CSS", icon: <Palette size={24} />, color: "text-teal-500" },
    { name: "Material UI", icon: <Box size={24} />, color: "text-blue-400" },
    { name: "Bootstrap", icon: <Layout size={24} />, color: "text-purple-600" },
    { name: "Sass", icon: <Layers size={24} />, color: "text-pink-500" },

    // Mobile & Backend
    { name: "React Native", icon: <Smartphone size={24} />, color: "text-blue-400" },
    { name: "Node.js", icon: <Server size={24} />, color: "text-green-600" },
    { name: "RESTful APIs", icon: <Globe size={24} />, color: "text-indigo-500" },

    // Database & Cloud
    { name: "Firebase", icon: <Database size={24} />, color: "text-yellow-600" },
    { name: "Supabase", icon: <Database size={24} />, color: "text-emerald-500" },

    // Tools & Others
    { name: "Redux / Context", icon: <Box size={24} />, color: "text-purple-500" },
    { name: "jQuery", icon: <Code2 size={24} />, color: "text-blue-700" },
    { name: "Git / GitHub", icon: <Code2 size={24} />, color: "text-gray-700" },
    { name: "AI Tools", icon: <Cpu size={24} />, color: "text-rose-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-bold uppercase tracking-wider mb-2">My Toolbox</h3>
          <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A collection of technologies and tools I use to build high-performance applications.
          </p>
        </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className={`p-3 rounded-full bg-slate-50 group-hover:bg-indigo-50 transition-colors duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <h4 className="font-bold text-gray-800 text-sm group-hover:text-indigo-600 transition-colors">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;