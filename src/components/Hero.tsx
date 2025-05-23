'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-dark overflow-hidden py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="w-full lg:w-5/12 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 transform rotate-6 rounded-2xl blur-sm"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
                <Image 
                  src="/IMG_7265.jpg" 
                  alt="Brian Maseno" 
                  width={500} 
                  height={500} 
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-3 shadow-lg">
                <div className="bg-green-500 h-5 w-5 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              ease: "easeOut"
            }}
            className="w-full lg:w-7/12 order-1 lg:order-2 text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              <span className="inline-block">Hello, I'm</span>
            </h2>
            <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
              Brian Maseno Mayoga
            </h1>
            <div className="inline-flex h-1 w-20 bg-primary-400 mb-6"></div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary-200 mb-6">
              Mobile Developer | Flutter Expert | Backend Developer
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto lg:mx-0 mb-8">
              A passionate and results-driven Mobile Developer with a strong foundation in Flutter and 
              backend integrations, delivering innovative, user-focused applications while growing professionally 
              in a dynamic and collaborative team environment.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="btn bg-white text-primary-800 hover:bg-gray-100"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
