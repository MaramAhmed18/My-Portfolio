import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // ✅ تصحيح المسار: الملف لازم يكون جوه فولدر public مباشرة
  const cvUrl = "/Maram_Ahmed.pdf"; 

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* --- LOGO SECTION --- */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 ${scrolled ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'}`}>
            <span className="font-bold text-lg">MA</span>
            <div className={`absolute -inset-1 rounded-xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity ${scrolled ? 'bg-indigo-600' : 'bg-white'}`}></div>
          </div>
          
          <div className={`text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            Maram <span className={scrolled ? 'text-indigo-600' : 'text-indigo-200'}>Ahmed</span>
            <span className="text-indigo-500">.</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium text-sm uppercase tracking-wider hover:text-indigo-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Download CV Button (Desktop) */}
          <a 
            href={cvUrl}
            target="_blank" 
            rel="noopener noreferrer"
            download="Maram_Ahmed.pdf" 
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download size={18} />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-800' : 'text-white'}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 animate-fadeIn border-t border-gray-100">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium text-lg hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
          {/* Download CV Button (Mobile) */}
          <a 
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;