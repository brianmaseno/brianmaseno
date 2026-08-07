'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-ink/5 bg-surface/90 py-3 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        <Link
          href="#home"
          className={`font-display text-xl font-bold tracking-tight transition-colors md:text-2xl ${
            isScrolled ? 'text-ink' : 'text-white'
          }`}
        >
          Brian<span className="text-accent-light"> Maseno</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? 'text-ink-muted hover:text-accent'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://wa.me/254719623146"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-3 btn text-sm ${
              isScrolled ? 'btn-primary' : 'bg-white text-ink hover:bg-white/90'
            }`}
          >
            Let&apos;s Talk
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`inline-flex p-2 md:hidden ${
            isScrolled ? 'text-ink' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-ink/5 bg-surface md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-accent-mist hover:text-accent"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/254719623146"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary mt-2 w-full"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
