'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  points: string[];
  stack: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: 'Lead Mobile Developer and Web Developer',
    company: 'Digisrupt Limited',
    period: 'Feb 2026 – Present',
    points: [
      'Lead a three-person technology team in building and deploying mobile and web applications.',
      'Develop client-facing systems including DCANDSONS, Evimeria, and Pamojah.',
      'Developed and deployed the Pamojah Android application to the Google Play Store.',
    ],
    stack: ['Flutter', 'Dart', 'Next.js', 'Laravel', 'Firebase', 'Payment Integration'],
  },
  {
    title: 'Lead Mobile Developer, Web Developer and Backend Developer',
    company: 'OHCARGO Limited',
    period: 'Aug 2025 – Present',
    points: [
      'Lead the mobile development team in the design and deployment of production-grade applications using Flutter and Laravel.',
      'Developed company websites including Aviemo, OHCARGO, and Liveguid.',
      'Contribute to backend development and integration between applications, APIs, and supporting services.',
    ],
    stack: ['Flutter', 'Laravel', 'REST APIs', 'Node.js', 'MySQL', 'Firebase'],
  },
  {
    title: 'Lead Mobile Developer',
    company: 'Yele Group (Alfa Yele)',
    period: 'Oct 2024 – May 2025',
    points: [
      'Led the mobile development team in designing and deploying production-grade applications.',
      'Developed and deployed three Android applications to the Google Play Store: Bontuteur, Bontuteur Pro, and Drassy App.',
      'Integrated Firebase authentication, payment systems, and custom user dashboards.',
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'Payment Integration', 'Google Play'],
  },
  {
    title: 'Mobile Developer',
    company: 'Dukatech Technologies',
    period: 'Feb 2023 – Oct 2024',
    points: [
      'Developed cross-platform applications using Flutter and Dart.',
      'Implemented responsive user interfaces, Firebase integrations, and RESTful API consumption.',
      'Developed Soko Beauty App, connecting customers and beauty service providers through secure authentication and a clean user interface.',
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
  },
  {
    title: 'IT Tutor and Instructor',
    company: 'Mactec Professional Institute',
    period: 'Jan 2021 – May 2021',
    points: [
      'Taught computer packages and introductory programming.',
      'Delivered hands-on practical sessions and helped students understand technical concepts.',
    ],
    stack: ['Computer Packages', 'Introductory Programming'],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-pad bg-surface">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="section-title mb-4">Where I lead and ship</h2>
          <p className="text-lg text-ink-muted">
            Leading mobile, web, and backend delivery for production products.
          </p>
        </motion.div>

        <div className="space-y-0 border-t border-ink/10">
          {experienceData.map((job, index) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="grid gap-6 border-b border-ink/10 py-10 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4">
                <p className="mb-1 text-sm font-medium text-accent">{job.period}</p>
                <h3 className="font-display text-xl font-bold text-ink">{job.company}</h3>
                <p className="mt-2 text-sm text-ink-muted">{job.title}</p>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-ink-soft leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span key={tech} className="skill-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
