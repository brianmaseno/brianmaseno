'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-pad bg-surface">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <p className="section-label mb-3">About</p>
            <h2 className="section-title">Crafted for real products.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted lg:col-span-8">
            <p>
              I&apos;m Brian Maseno Mayoga — a Lead Mobile and Web Developer based in Nairobi.
              I lead small engineering teams and ship client systems end to end: Flutter apps,
              Laravel backends, Next.js sites, and cloud integrations.
            </p>
            <p>
              Currently leading development at{' '}
              <span className="font-medium text-ink">Digisrupt Limited</span> and{' '}
              <span className="font-medium text-ink">OHCARGO Limited</span>, delivering
              production apps on Google Play and live websites for logistics, healthcare,
              finance, and sports platforms.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-6 text-sm">
              <a
                href="mailto:brianmayoga@gmail.com"
                className="text-ink-soft transition-colors hover:text-accent"
              >
                brianmayoga@gmail.com
              </a>
              <a
                href="tel:+254719623146"
                className="text-ink-soft transition-colors hover:text-accent"
              >
                +254 719 623 146
              </a>
              <a
                href="https://github.com/brianmaseno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/brian-maseno-17a47a244/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
