'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Scroll to top button */}
      <div className="container mx-auto px-4 md:px-6 relative">
        <button 
          onClick={scrollToTop}
          className="absolute -top-5 left-1/2 transform -translate-x-1/2 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Brian Maseno Mayoga</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate mobile developer with expertise in Flutter and backend integrations, 
              dedicated to creating innovative user-focused applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/brian-maseno-17a47a244/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/brianmaseno" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="mailto:brianmayoga@gmail.com" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "React", "Node.js", "Firebase", "MongoDB"].map((skill, i) => (
                <span 
                  key={i} 
                  className="inline-block px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Brian Maseno Mayoga. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with Next.js, React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
