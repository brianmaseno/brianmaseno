'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  name: string;
  link: string;
  description: string;
}

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  projects: Project[];
  techStack: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 'yele',
    title: "Mobile Developer (Lead)",
    company: "YELE GROUP (Alfa Yele)",
    period: "October 2024 – May 2025",
    description: [
      "Led the mobile development team at Alfa Yele, overseeing the design and deployment of production-grade applications",
      "Developed and deployed three Android applications to Google Play Store: Bontuteur, Bontuteur Pro, and Drassy App",
      "Integrated Firebase authentication, payment systems, and custom user dashboards"
    ],    projects: [
      {
        name: "Bontuteur",
        link: "#",
        description: "Educational platform for tutoring services"
      },
      {
        name: "Bontuteur Pro",
        link: "#",
        description: "Advanced version with premium features"
      },
      {
        name: "Drassy App",
        link: "#",
        description: "Fashion and styling application"
      }
    ],
    techStack: ["Flutter", "Dart", "Firebase", "RESTful APIs", "Google Play Console"]
  },
  {
    id: 'dukatech',
    title: "Mobile Developer",
    company: "Dukatech Technologies",
    period: "February 2024 – October 2024",
    description: [
      "Developed cross-platform apps using Flutter and Dart",
      "Focused on UI/UX responsiveness, Firebase integration, and RESTful API consumption"
    ],    projects: [
      {
        name: "Soko Beauty App",
        link: "#",
        description: "A beauty services app connecting customers and service providers, with secure user authentication and a clean UI"
      }
    ],
    techStack: ["Flutter", "Dart", "Firebase", "RESTful APIs", "State Management (Provider)"]
  },
  {
    id: 'mactec',
    title: "IT Tutor and Instructor",
    company: "Mactec Professional Institute",
    period: "January 2021 – May 2021",    description: [
      "Taught computer packages and introductory programming",
      "Provided hands-on practical sessions for students"
    ],
    projects: [],
    techStack: ["Microsoft Office", "Basic Programming", "Computer Fundamentals"]
  }
];

interface TimelineItemProps {
  data: ExperienceItem;
  index: number;
  isActive: boolean;
  onClick: (id: string) => void;
}

const TimelineItem = ({ data, index, isActive, onClick }: TimelineItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className={`timeline-item ${isActive ? 'opacity-100' : 'opacity-70'}`}
      onClick={() => onClick(data.id)}
    >
      <div className={`timeline-dot ${isActive ? 'ring-4 ring-primary-100' : ''}`}></div>
      <div className="ml-4">
        <h3 className={`text-xl font-bold ${isActive ? 'text-primary-600' : 'text-gray-800'}`}>{data.company}</h3>
        <p className="text-sm text-gray-500">{data.period}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeId, setActiveId] = useState('yele');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activeExperience = experienceData.find(exp => exp.id === activeId) || experienceData[0];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Professional journey as a Mobile and Backend Developer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl h-full">
              {experienceData.map((exp, index) => (
                <TimelineItem 
                  key={exp.id}
                  data={exp}
                  index={index}
                  isActive={activeId === exp.id}
                  onClick={setActiveId}
                />
              ))}
            </div>
          </div>

          <div 
            ref={ref}
            className="md:col-span-2 bg-white rounded-xl shadow-md p-8 transition-all duration-300"
          >
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-full">
                  <FaBriefcase className="text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeExperience.title}</h3>
                  <p className="text-primary-600 font-medium">{activeExperience.company}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mb-6">{activeExperience.period}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Responsibilities</h4>
                <ul className="space-y-2">
                  {activeExperience.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {activeExperience.projects && activeExperience.projects.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Projects</h4>
                  <div className="space-y-3">
                    {activeExperience.projects.map((project, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <h5 className="font-medium text-gray-800">{project.name}</h5>
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700 inline-flex items-center text-sm"
                            >
                              View <FaExternalLinkAlt className="ml-1 text-xs" />
                            </a>
                          )}
                        </div>
                        {project.description && (
                          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-auto">
                <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeExperience.techStack.map((tech, i) => (
                    <span key={i} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
