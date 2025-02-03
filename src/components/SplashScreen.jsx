"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // Adjust this value to control how long the splash screen shows

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { scale: 0, y: 50, opacity: 0 },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      scale: 0,
      y: -50,
      opacity: 0,
      filter: "blur(10px)",
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center  z-50 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            background:
              "radial-gradient(circle, rgba(255,192,203,1) 0%, rgba(255,105,180,1) 35%, rgba(199,21,133,1) 70%, rgba(0,0,0,1) 100%)",
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-pink-100 blur-3xl opacity-50" />
          <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-pink-100 blur-3xl opacity-50" />
          <div className="text-gray-800 text-center px-4 relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={textVariants}
            >
              Fashion Redefined
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-2xl mx-auto"
              variants={textVariants}
            >
              Transcending conventional fashion norms into a form of art that
              people can wear with pride
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
