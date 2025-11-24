import React from 'react';
import { Github, ExternalLink } from 'lucide-react';


import enjezImage from '../assets/images/enjez-mockup.jpg'; 
import eLearningImage from '../assets/images/e-learning-mockup.jpg';
import eCommerceImage from '../assets/images/e-commerce-mockup.png';

const Projects = () => {
  const projects = [
    {
      title: "Enjez Website",
      desc: "A complete service booking platform offering a seamless user experience from browsing to booking. Users can explore services, compare providers, make reservations, track requests, and chat directly. Includes an admin dashboard.",
      tech: ["React","Redux", "Tailwind", "Firebase", "Supabase", "RAG"],
      image: enjezImage,
      github: "https://github.com/MaramAhmed18/Enjez.git"
    },
    {
      title: "E-learning Website",
      desc: "A comprehensive e-learning platform provides a dynamic and interactive experience for discovering, managing, and engaging with online courses. Features localization support.",
      tech: ["React", "Redux", "Tailwind", "Axios", "i18next"],
      image: eLearningImage,
      github: "https://github.com/MaramAhmed18/E-learning-React-Website.git"
    },
    {
      title: "E-Commerce Website",
      desc: "A responsive online store with product listing, cart, and secure checkout using PayPal. Implemented user authentication and real-time database capabilities.",
      tech: ["HTML", "CSS", "JS", "Firebase", "Supabase"],
      image: eCommerceImage,
      github: "https://github.com/MaramAhmed18/E-Commerce-WebSite-main.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-bold uppercase tracking-wider mb-2">Portfolio</h3>
          <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex gap-2">
                    {/* Github Button - Functional Link */}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-indigo-500 hover:text-white transition-colors" 
                      title="View Code"
                    >
                       <Github size={18} />
                    </a>
                    {/* Live Demo Button - Placeholder since no live links provided yet */}
                    {/* <button 
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-indigo-500 hover:text-white transition-colors cursor-not-allowed opacity-70" 
                      title="Live Demo (Coming Soon)"
                    >
                       <ExternalLink size={18} />
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;