'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillGroups = [
  {
    title: 'Mobile & Frontend',
    skills: ['Flutter and Dart', 'Next.js and React', 'Website Development', 'Payment Integration'],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'REST API Development and Integration',
      'Node.js and Express.js',
      'PHP and Laravel',
      'Web and Mobile Application Deployment',
    ],
  },
  {
    title: 'Cloud & Data',
    skills: [
      'Microsoft Azure',
      'Firebase',
      'Cloud-Integrated Applications',
      'MySQL, SQL and MongoDB',
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-pad bg-ink text-white">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            Capabilities
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Stacks I work with daily
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <h3 className="mb-5 border-b border-white/10 pb-3 font-display text-lg font-semibold text-sand-light">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-white/75 leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
