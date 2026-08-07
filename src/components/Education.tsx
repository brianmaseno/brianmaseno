'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="education" className="section-pad bg-surface">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid items-end gap-8 border-t border-ink/10 pt-12 md:grid-cols-12"
        >
          <div className="md:col-span-4">
            <p className="section-label mb-3">Education</p>
            <h2 className="section-title">Academic foundation</h2>
          </div>
          <div className="md:col-span-8">
            <p className="mb-2 text-sm font-medium text-accent">2021 – 2025</p>
            <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Bachelor of Information Technology
            </h3>
            <p className="mt-2 text-lg text-ink-soft">Kenyatta University</p>
            <p className="mt-4 inline-block border border-accent/30 bg-accent-mist px-4 py-2 text-sm font-medium text-accent-dark">
              Second Class Upper Division
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
