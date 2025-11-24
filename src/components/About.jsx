import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-bold uppercase tracking-wider mb-2">About Me</h3>
          <h2 className="text-4xl font-bold text-gray-900">My Journey & Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* --- Left Column: Bio --- */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="text-indigo-600" />
              Who I am
            </h3>
            
            {/* تم تصغير الخط هنا من text-lg إلى text-base */}
            <p className="text-gray-600 leading-relaxed mb-6 text-base text-justify">
              Front-End Web Developer and ITI graduate, specialized in creating modern, responsive, and user-friendly interfaces. Focused on React for building clean, efficient UI components and delivering smooth, seamless user experiences.
            </p>
            
            {/* تم تصغير الخط هنا أيضاً وتحديث المهارات */}
            <p className="text-gray-600 leading-relaxed mb-8 text-base text-justify">
              Experienced with <span className="font-semibold text-indigo-600">HTML, CSS, JavaScript, TypeScript, Node.js, React</span>, as well as modern libraries and frameworks like <span className="font-semibold text-indigo-600">Tailwind, Material UI, Next.js, Redux</span>, and <span className="font-semibold text-indigo-600">Firebase</span>. I also have experience in cross-platform development.
            </p>

            {/* Stats Updated */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              <div>
                <span className="block text-3xl font-bold text-indigo-600">1+</span>
                <span className="text-sm text-gray-500">Years Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-indigo-600">10+</span>
                <span className="text-sm text-gray-500">Projects</span>
              </div>
              
            </div>
          </div>

          {/* --- Right Column: Education --- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="text-indigo-600" />
              Education
            </h3>

            {/* Education Card 1 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 group-hover:bg-purple-500 transition-colors"></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                <h4 className="font-bold text-gray-900 text-lg">Front-End Diploma</h4>
                <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar size={12} /> Feb 2024 - May 2024
                </span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">Eraasort Academy</p>
              <p className="text-gray-500 text-sm">
                Intensive training program focused on modern web technologies and best practices.
              </p>
            </div>

            {/* Education Card 2 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 group-hover:bg-purple-500 transition-colors"></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                <h4 className="font-bold text-gray-900 text-lg">Bachelor's Degree in Bioinformatics</h4>
                <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar size={12} /> 2019 - 2023
                </span>
              </div>
              
              <p className="text-indigo-600 font-medium mb-1">Faculty of Computers and Information</p>
              <p className="text-gray-600 text-sm mb-4">Minya University</p>
              
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="inline-flex items-center gap-1 text-sm bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-700">
                  <Award size={14} className="text-yellow-500" /> GPA: 3.03
                </span>
                <span className="inline-flex items-center gap-1 text-sm bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-700">
                  <Award size={14} className="text-green-500" /> Graduation Project: A+
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
