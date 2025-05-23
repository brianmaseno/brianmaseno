'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe, FaPlayCircle, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectLink {
  type: string;
  url: string;
  label: string;
}

interface ProjectDetails {
  problem: string;
  solution: string;
  features: string[];
}

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  details: ProjectDetails;
}

const projectsData: Project[] = [
  {
    id: 'bontuteur',
    title: 'Bontuteur App',
    category: 'Mobile App',
    image: '/projects/bontuteur.png',
    description: 'A mobile application for tutoring services, connecting students with professional tutors in various subjects.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Payment Integration'],
    links: [
      { type: 'playstore', url: '#', label: 'View on Play Store' },
    ],
    details: {
      problem: 'Students struggling to find qualified tutors for personalized learning needs.',
      solution: 'Created a platform that matches students with verified tutors based on subject expertise and proximity.',
      features: [
        'User authentication and profile management',
        'Tutor search and filtering',
        'Real-time messaging between tutors and students',
        'Session scheduling and payment processing',
        'Ratings and reviews system'
      ]
    }
  },
  {
    id: 'drassy',
    title: 'Drassy App',
    category: 'Mobile App',
    image: '/projects/drassy.png',
    description: 'A comprehensive mobile app for fashion and clothing needs, connecting customers with tailors and fashion designers.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Push Notifications'],
    links: [
      { type: 'playstore', url: '#', label: 'View on Play Store' },
    ],
    details: {
      problem: 'Difficulty in connecting with reliable tailors and tracking custom clothing orders.',
      solution: 'Built a platform that streamlines custom clothing orders and connects customers with skilled tailors.',
      features: [
        'User profiles with measurement tracking',
        'Fashion designer/tailor portfolios',
        'Order management and tracking',
        'In-app messaging',
        'Payment integration'
      ]
    }
  },
  {
    id: 'soko',
    title: 'Soko Beauty App',
    category: 'Mobile App',
    image: '/projects/soko.png',
    description: 'A beauty services marketplace app connecting customers with beauty service providers, featuring appointment booking and secure payments.',
    technologies: ['Flutter', 'Dart', 'Provider State Management', 'Firebase', 'RESTful APIs'],
    links: [
      { type: 'playstore', url: '#', label: 'View on Play Store' },
    ],
    details: {
      problem: 'Fragmented beauty services market making it difficult for customers to find and book services.',
      solution: 'Developed an app that centralizes beauty service providers and allows for easy discovery and booking.',
      features: [
        'Service provider profiles and portfolios',
        'Appointment scheduling system',
        'Payment processing',
        'Rating and review system',
        'Service categorization and search'
      ]
    }
  },
  {
    id: 'sms-chatgpt',
    title: 'SMS ChatGPT',
    category: 'Web Application',
    image: '/projects/sms-chatgpt.png',
    description: 'A system that allows users in remote areas to access AI tools like ChatGPT through SMS, bridging the digital divide.',
    technologies: ['Node.js', 'Express.js', 'Prisma', "Africa's Talking API", 'OpenAI API'],
    links: [
      { type: 'github', url: 'https://github.com/GrishonNganga/SMS-ChatGPT.git', label: 'GitHub Repository' },
      { type: 'linkedin', url: 'https://www.linkedin.com/posts/brian-maseno-17a47a244_hackathon-educationtechnology-teamwork-activity-7128675260928827393-ldPq', label: 'Project Post' },
    ],
    details: {
      problem: 'Limited access to AI tools for students in remote areas with poor internet connectivity.',
      solution: "Created a system using Africa's Talking API to enable AI interaction via SMS for users without internet access.",
      features: [
        'SMS-based interaction with ChatGPT',
        'Answer optimization for SMS format',
        'User session management',
        'Query history tracking',
        'Multi-language support'
      ]
    }
  },
  {
    id: 'blockchain-marks',
    title: 'Blockchain for Academic Records',
    category: 'Blockchain',
    image: '/projects/blockchain.png',
    description: 'A blockchain-based solution to address the problem of missing marks in public universities, ensuring integrity and transparency of academic records.',
    technologies: ['Blockchain', 'ICP', 'Smart Contracts', 'Web3'],
    links: [
      { type: 'linkedin', url: 'https://www.linkedin.com/posts/brian-maseno-17a47a244_blockchainideathon-icpkushite-activity-7137438831133212672-Fq1m', label: 'Project Post' },
    ],
    details: {
      problem: 'Frequent cases of missing or altered marks in public universities affecting student records.',
      solution: 'Proposed a blockchain system to securely store and verify academic records, preventing unauthorized alterations.',
      features: [
        'Immutable record-keeping',
        'Transparent verification process',
        'Decentralized storage',
        'Permission-based access',
        'Audit trail for any changes'
      ]
    }
  }
];

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {/* This is a placeholder for project images. In a real implementation, you would have actual project images */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-full w-full flex items-center justify-center text-white">
            {project.category === 'Mobile App' ? (
              <FaMobileAlt className="text-6xl" />
            ) : project.category === 'Web Application' ? (
              <FaLaptopCode className="text-6xl" />
            ) : (
              <FaCode className="text-6xl" />
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{project.title}</h3>
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-full">{project.category}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <motion.div 
          className="flex justify-center mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="text-primary-600 border border-primary-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-50 transition-colors duration-300">
            View Details
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-56 bg-gradient-to-r from-primary-600 to-secondary-500 relative">
          <div className="absolute inset-0 flex items-center justify-center text-white">
            {project.category === 'Mobile App' ? (
              <FaMobileAlt className="text-8xl opacity-20" />
            ) : project.category === 'Web Application' ? (
              <FaLaptopCode className="text-8xl opacity-20" />
            ) : (
              <FaCode className="text-8xl opacity-20" />
            )}
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <p className="text-white/80">{project.category}</p>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">The Problem</h3>
              <p className="text-gray-700">{project.details.problem}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">My Solution</h3>
              <p className="text-gray-700">{project.details.solution}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.details.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-sm bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {project.links && project.links.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Project Links</h3>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors duration-300"
                  >
                    {link.type === 'github' && <FaGithub />}
                    {link.type === 'website' && <FaGlobe />}
                    {link.type === 'playstore' && <FaPlayCircle />}
                    {link.type === 'linkedin' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Mobile App', 'Web Application', 'Blockchain'];
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Showcasing my work and technical expertise
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-full shadow-md">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={(project) => setSelectedProject(project)} 
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
