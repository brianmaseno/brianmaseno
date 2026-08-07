'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/254719623146?text=Hi%20Brian%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-shadow hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent" />
    </motion.a>
  );
};

export default WhatsAppFloat;
