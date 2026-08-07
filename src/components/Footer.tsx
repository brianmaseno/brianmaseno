'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-narrow relative pt-14 pb-10">
        <button
          onClick={scrollToTop}
          className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center bg-accent text-white transition-colors hover:bg-accent-light"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-sm" />
        </button>

        <div className="mb-10 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold">Brian Maseno</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              Lead Mobile &amp; Web Developer shipping Flutter apps, Laravel backends, and modern web products.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.linkedin.com/in/brian-maseno-17a47a244/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-accent-light"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/brianmaseno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-accent-light"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:brianmayoga@gmail.com"
                className="text-white/50 transition-colors hover:text-accent-light"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-white/65">
              {[
                ['Projects', '#projects'],
                ['Experience', '#experience'],
                ['Skills', '#skills'],
                ['Education', '#education'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Laravel', 'Next.js', 'Firebase', 'Azure', 'Payments'].map((skill) => (
                <span
                  key={skill}
                  className="border border-white/10 px-2.5 py-1 text-xs text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; {year} Brian Maseno Mayoga. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
