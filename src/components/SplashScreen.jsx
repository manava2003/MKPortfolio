import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BigLogo from "../assets/Group 14.png";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 2,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      scale: 0,
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
          className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            background:
              "radial-gradient(circle, #FF69B4 0%, #FF1493 35%, #8B008B 70%, #000000 100%)",
          }}
        >
          <div
            className="absolute left-0 rounded-lg top-0 bottom-0 w-1/4 opacity-50"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-1/4 opacity-50"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)",
            }}
          />
          <motion.div
            className="relative z-10  flex items-center justify-center"
            variants={imageVariants}
          >
            <img
              src={BigLogo}
              alt="Splash screen logo"
              className="w-[300px] h-[300px] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
