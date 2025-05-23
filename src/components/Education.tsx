'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMedal } from 'react-icons/fa';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Kenyatta University",
    degree: "Bachelor of Information Technology",
    period: "2021 - 2025",
    description: "Comprehensive IT program covering programming, systems analysis, database management, networking, and software development."
  },
  {
    institution: "Mbita High School",
    degree: "Kenya Certificate of Secondary Education (K.C.S.E)",
    period: "2017 - 2021",
    description: "Achieved a B+ (72 Points) in the national high school examination."
  },
  {
    institution: "Muhoroni Success Primary School",
    degree: "Kenya Certificate of Primary Education (K.C.P.E)",
    period: "2006 - 2016",
    description: "Scored 376 out of 500 marks in the national primary school examination."
  }
];

interface EducationCardProps {
  data: EducationItem;
  index: number;
}

const EducationCard = ({ data, index }: EducationCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary-100 text-primary-600 rounded-full">
            <FaGraduationCap className="text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{data.institution}</h3>
        </div>
        
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{data.degree}</h4>
        
        <div className="flex items-center text-gray-500 mb-4">
          <FaCalendarAlt className="mr-2" />
          <span>{data.period}</span>
        </div>
        
        <p className="text-gray-600">{data.description}</p>
        
        {index === 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-primary-600">
              <FaMedal className="mr-2" />
              <span className="font-medium">Currently pursuing</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Background</h2>
            <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              My academic journey and learning experiences
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, i) => (
            <EducationCard key={i} data={edu} index={i} />
          ))}
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gray-50 rounded-xl shadow-md p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Continuous Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h4 className="text-lg font-semibold mb-3">Online Courses & Certifications</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Flutter Development Bootcamp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">RESTful API Development with Node.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Firebase for Mobile & Web Development</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h4 className="text-lg font-semibold mb-3">Community Learning</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Google Developer Groups (GDG) Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Hackathons & Coding Challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Open Source Contributions</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
