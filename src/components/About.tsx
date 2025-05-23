'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaCode, FaMobileAlt, FaUsers } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface AboutCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const AboutCard = ({ icon: Icon, title, description }: AboutCardProps) => {
  return (
    <div className="card group hover:bg-primary-50 transition-all duration-300 flex flex-col items-center p-6 text-center">
      <div className="mb-4 p-3 rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
        <Icon className="text-2xl" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const aboutCards = [
    {
      icon: FaUserGraduate,
      title: "Education",
      description: "B.Sc in Information Technology, Kenyatta University (2021-2025)"
    },
    {
      icon: FaCode,
      title: "Development",
      description: "Specializing in Flutter/Dart and backend development with Node.js"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Apps",
      description: "Created multiple production-grade mobile applications deployed to Google Play Store"
    },
    {
      icon: FaUsers,
      title: "Leadership",
      description: "Led mobile development teams and contributed to developer communities"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            A passionate mobile developer with expertise in Flutter and backend integrations,
            seeking to build innovative, user-focused applications.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <AboutCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">My Background</h3>
              <div className="h-1 w-16 bg-primary-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                I'm Brian Maseno Mayoga, a results-driven Mobile Developer with a strong foundation in Flutter and 
                backend integrations. My passion lies in creating innovative, user-focused applications.
              </p>
              <p className="text-gray-600 mb-4">
                My career journey includes working as a Mobile Development Lead at Yele Group (Alfa Yele) 
                and as a Mobile Developer at Dukatech Technologies, where I developed and deployed 
                production-grade applications to Google Play Store.
              </p>
              <p className="text-gray-600">
                I believe in the power of technology to transform lives and am dedicated to creating 
                seamless, efficient, and beautiful mobile experiences.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-600 to-secondary-500 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Details</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <span className="font-semibold w-24">Name:</span>
                  <span>Brian Maseno Mayoga</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-24">Email:</span>
                  <span>brianmayoga@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-24">Phone:</span>
                  <span>+254 719 623 146</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-24">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/brian-maseno-17a47a244/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-100">View Profile</a>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-24">GitHub:</span>
                  <a href="https://github.com/brianmaseno" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-100">View Profile</a>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-24">Languages:</span>
                  <span>English, Kiswahili</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
