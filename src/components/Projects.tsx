'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGlobe, FaGooglePlay } from 'react-icons/fa';

type ProjectType = 'website' | 'app';

interface Project {
  name: string;
  type: ProjectType;
  description: string;
  url: string;
  stack: string[];
}

const projects: Project[] = [
  {
    name: 'LiveGuid',
    type: 'website',
    description: 'Explore, book, and experience — tourism and guiding platform.',
    url: 'https://liveguid.com/',
    stack: ['Next.js', 'Web'],
  },
  {
    name: 'OhCargo',
    type: 'website',
    description: 'Logistics company website for cargo transport in Kenya.',
    url: 'https://ohcargo.com/',
    stack: ['Web', 'Laravel'],
  },
  {
    name: 'DCANDSONS',
    type: 'website',
    description: 'Client-facing business web presence built with Digisrupt.',
    url: 'https://dcandsons.com/',
    stack: ['Web'],
  },
  {
    name: 'Evimeria Initiative',
    type: 'website',
    description: 'Christian-based investment community platform.',
    url: 'https://evimeriainitiative.com/',
    stack: ['Web'],
  },
  {
    name: 'Alina Medical',
    type: 'website',
    description: 'Gastroenterology and liver care clinic website.',
    url: 'https://alinamedical.co.ke/',
    stack: ['Web'],
  },
  {
    name: 'Fuelvance',
    type: 'website',
    description: 'Fuel now, pay later — fintech landing experience.',
    url: 'https://fuelvance.com/',
    stack: ['Web'],
  },
  {
    name: 'Afrisport Connect',
    type: 'website',
    description: "Africa's football super app web presence.",
    url: 'https://afrisportconnect.com/',
    stack: ['Web', 'Flutter'],
  },
  {
    name: 'Ohcargo Customer',
    type: 'app',
    description: 'Customer app connecting cargo requests with drivers in real time.',
    url: 'https://play.google.com/store/apps/details?id=com.ohcargo.customer',
    stack: ['Flutter', 'Firebase', 'Payments'],
  },
  {
    name: 'OHCARGO Merchant',
    type: 'app',
    description: 'Merchant and driver app for truck booking and cargo delivery.',
    url: 'https://play.google.com/store/apps/details?id=com.ohcargo.ohcargo_truck_driver',
    stack: ['Flutter', 'Laravel', 'APIs'],
  },
  {
    name: 'Housepital',
    type: 'app',
    description: 'Home medical services — book appointments and emergency visits.',
    url: 'https://play.google.com/store/apps/details?id=com.housepital.operations',
    stack: ['Flutter', 'Cloud'],
  },
  {
    name: 'Pamoja HOH',
    type: 'app',
    description: 'SACCO management — savings, loans, invoices, and M-Pesa payments.',
    url: 'https://play.google.com/store/apps/details?id=com.digisrupt.pamojahoh',
    stack: ['Flutter', 'Payments', 'Firebase'],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const websites = projects.filter((p) => p.type === 'website');
  const apps = projects.filter((p) => p.type === 'app');

  return (
    <section id="projects" className="section-pad bg-surface-subtle">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-3">Selected Work</p>
          <h2 className="section-title mb-4">Projects shipped to production</h2>
          <p className="text-lg text-ink-muted">
            Live websites and Google Play apps built for logistics, healthcare, finance, and community platforms.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <FaGlobe className="text-accent" />
            Websites
          </h3>
          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {websites.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col bg-surface-raised p-6 transition-colors duration-300 hover:bg-accent-mist"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h4 className="font-display text-xl font-bold text-ink group-hover:text-accent">
                    {project.name}
                  </h4>
                  <span className="mt-1 text-ink-muted opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <FaGooglePlay className="text-accent" />
            Play Store Apps
          </h3>
          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {apps.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                className="group flex flex-col bg-surface-raised p-6 transition-colors duration-300 hover:bg-accent-mist sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex-1">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h4 className="font-display text-xl font-bold text-ink group-hover:text-accent">
                      {project.name}
                    </h4>
                    <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-accent">
                      Play Store
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs text-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
