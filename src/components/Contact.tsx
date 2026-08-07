'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="section-pad bg-surface-subtle">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <div>
            <p className="section-label mb-3">Contact</p>
            <h2 className="section-title mb-5">Let&apos;s build something</h2>
            <p className="mb-8 max-w-md text-lg text-ink-muted">
              Open to product collaborations, freelance builds, and full-time opportunities.
              Reach out on WhatsApp or email — I respond quickly.
            </p>
            <a
              href="https://wa.me/254719623146"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:brianmayoga@gmail.com"
              className="flex items-start gap-4 border-b border-ink/10 pb-5 transition-colors hover:text-accent"
            >
              <FaEnvelope className="mt-1 text-accent" />
              <div>
                <p className="text-sm text-ink-muted">Email</p>
                <p className="font-medium text-ink">brianmayoga@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+254719623146"
              className="flex items-start gap-4 border-b border-ink/10 pb-5 transition-colors hover:text-accent"
            >
              <FaPhone className="mt-1 text-accent" />
              <div>
                <p className="text-sm text-ink-muted">Phone</p>
                <p className="font-medium text-ink">+254 719 623 146</p>
              </div>
            </a>
            <div className="flex items-start gap-4 border-b border-ink/10 pb-5">
              <FaMapMarkerAlt className="mt-1 text-accent" />
              <div>
                <p className="text-sm text-ink-muted">Location</p>
                <p className="font-medium text-ink">Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/brian-maseno-17a47a244/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-ink/10 text-ink-soft transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/brianmaseno"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-ink/10 text-ink-soft transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/254719623146"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-ink/10 text-ink-soft transition-colors hover:border-accent hover:text-accent"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
