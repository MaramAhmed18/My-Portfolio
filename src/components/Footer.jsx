import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* --- LOGO SECTION --- */}
        <a href="#" className="flex items-center gap-2 group mb-4 md:mb-0">
          {/* Logo Box: Fixed styles for dark background */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 bg-white text-indigo-600">
            <span className="font-bold text-lg">MA</span>
            <div className="absolute -inset-1 rounded-xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity bg-white"></div>
          </div>
          
          {/* Text: Fixed styles for dark background */}
          <div className="text-xl font-bold tracking-tight text-white">
            Maram <span className="text-indigo-400">Ahmed</span>
            <span className="text-indigo-500">.</span>
          </div>
        </a>

        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;