'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="hero-mesh absolute inset-0" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[8%] top-[18%] h-64 w-64 animate-float-soft rounded-full bg-accent/30 blur-3xl" />
        <div
          className="absolute bottom-[15%] right-[12%] h-72 w-72 animate-float-soft rounded-full bg-sand/20 blur-3xl"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container-narrow relative z-10 flex min-h-screen flex-col justify-center pb-16 pt-28 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-sand-light">
            Lead Mobile &amp; Web Developer
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Brian Maseno
            <span className="mt-1 block text-accent-light">Mayoga</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0">
            Building production mobile apps and client-facing web systems with Flutter,
            Laravel, and modern cloud stacks — from concept to Play Store.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#projects" className="btn bg-white text-ink hover:bg-white/90">
              View Projects
            </a>
            <a href="#experience" className="btn border border-white/25 text-white hover:border-white/50 hover:bg-white/5">
              Experience
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mt-12 w-full max-w-md flex-shrink-0 self-center lg:mt-0 lg:max-w-sm xl:max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <div className="absolute -inset-3 rounded-sm bg-gradient-to-br from-accent/40 to-sand/30 blur-md" />
            <Image
              src="/IMG_7265.jpg"
              alt="Brian Maseno Mayoga"
              fill
              priority
              className="relative z-10 object-cover object-top"
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="h-8 w-px bg-white/35"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
