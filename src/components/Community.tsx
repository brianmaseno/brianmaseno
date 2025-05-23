'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaUsers, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface CommunityItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  icon: IconType;
}

interface HackathonItem {
  name: string;
  date: string;
  description: string;
  link: string;
  technologies: string[];
}

const communityData: CommunityItem[] = [
  {
    role: "Hult Prize Campus Director",
    organization: "Kenyatta University",
    period: "September 2024 – May 2025",
    description: "Led the organization of innovation and entrepreneurship events, mobilizing over 300 students.",
    icon: FaUsers
  },
  {
    role: "Google Developer Groups (GDG) – Android Lead",
    organization: "Kenyatta University",
    period: "September 2024 – May 2025",
    description: "Mentored junior developers, led Android workshops, and organized developer meetups.",
    icon: FaGraduationCap
  },
  {
    role: "Member – Google Developer Student Clubs (GDSC)",
    organization: "Kenyatta University",
    period: "2021 – Present",
    description: "Active participant in coding events, hackathons, and community learning initiatives.",
    icon: FaUsers
  }
];

const hackathonData: HackathonItem[] = [
  {
    name: "Africa's Talking Hackathon",
    date: "September 28, 2024",
    description: "Part of a team that developed an SMS-based ChatGPT system for remote areas with limited internet access, integrating Africa's Talking API with AI solutions.",
    link: "https://www.linkedin.com/posts/brian-maseno-17a47a244_hackathon-educationtechnology-teamwork-activity-7128675260928827393-ldPq",
    technologies: ["Node.js", "Express.js", "Prisma", "Africa's Talking API"]
  },
  {
    name: "ICP Blockchain Ideathon",
    date: "December 2, 2024",
    description: "Led a team that proposed a blockchain solution to address missing marks in public universities, focusing on record integrity and transparency.",
    link: "https://www.linkedin.com/posts/brian-maseno-17a47a244_blockchainideathon-icpkushite-activity-7137438831133212672-Fq1m",
    technologies: ["Blockchain", "ICP", "Smart Contracts"]
  }
];

interface CommunityCardProps {
  data: CommunityItem;
  index: number;
}

const CommunityCard = ({ data, index }: CommunityCardProps) => {
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
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="flex gap-4"
    >
      <div className="mt-1 p-2 bg-primary-100 text-primary-600 rounded-full h-fit">
        <data.icon className="text-xl" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{data.role}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <span>{data.organization}</span>
          <span className="text-xs">•</span>
          <span className="text-sm text-gray-500">{data.period}</span>
        </div>
        <p className="text-gray-700">{data.description}</p>
      </div>
    </motion.div>  );
};

interface HackathonCardProps {
  data: HackathonItem;
  index: number;
}

const HackathonCard = ({ data, index }: HackathonCardProps) => {
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
        delay: index * 0.2 + 0.3,
        ease: "easeOut"
      }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{data.name}</h3>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <FaCalendarAlt className="text-primary-500" />
        <span>{data.date}</span>
      </div>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {data.technologies.map((tech, i) => (
            <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a 
        href={data.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary-600 hover:text-primary-700 text-sm inline-flex items-center"
      >
        View Project Post
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </motion.div>
  );
};

const Community = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community & Hackathons</h2>
            <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              My involvement in tech communities and competitive coding events
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Leadership & Community */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Leadership & Community</h3>
            <div className="space-y-8">
              {communityData.map((item, i) => (
                <CommunityCard key={i} data={item} index={i} />
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Hackathons & Competitions</h3>
            <div className="space-y-6">
              {hackathonData.map((item, i) => (
                <HackathonCard key={i} data={item} index={i} />
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to collaborate?</h3>
            <p className="text-white/90 text-lg mb-6">
              I'm always open to joining hackathons, contributing to open-source projects, 
              or participating in community events. Feel free to reach out if you're looking for a team member!
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-primary-700 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
