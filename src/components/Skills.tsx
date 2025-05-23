'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaMobile, FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  icon: IconType;
  title: string;
  skills: Skill[];
  index: number;
}

const SkillCategory = ({ icon: Icon, title, skills, index }: SkillCategoryProps) => {
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
        delay: index * 0.1 + 0.2,
        ease: "easeOut"
      }}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary-100 text-primary-600 rounded-full">
            <Icon className="text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <div className="space-y-4">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: FaMobile,
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter & Dart', level: 95 },
        { name: 'State Management', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'SQLite & Local Storage', level: 85 },
      ]
    },
    {
      icon: FaCode,
      title: 'Web & Backend',
      skills: [
        { name: 'Node.js & Express', level: 80 },
        { name: 'Next.js & React', level: 75 },
        { name: 'Prisma', level: 70 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 70 },
      ]
    },
    {
      icon: FaDatabase,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Cloud Firestore', level: 85 },
        { name: 'SQLite', level: 80 },
        { name: 'Hive', level: 90 },
      ]
    },
    {
      icon: FaTools,
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Play Store Deployment', level: 85 },
        { name: 'CI/CD for Mobile Apps', level: 75 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Problem Solving', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              My expertise and proficiency in various technologies
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCategory
              key={i}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              index={i}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Other Skills & Attributes</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Critical Thinking",
              "Communication",
              "Team Collaboration",
              "Integrity",
              "Interpersonal Skills",
              "English Proficiency",
              "Creativity",
              "Innovativeness",
              "Problem Solving",
              "Time Management",
              "Self-motivated",
              "Adaptability"
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="skill-badge text-center py-2 px-4"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
