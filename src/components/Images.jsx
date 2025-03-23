import React, { useState, useEffect } from "react";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 3.png";
import image3 from "../assets/image 4.png";
import { motion } from "framer-motion";

export const Images = () => {
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 3 }}
      className={`flex justify-center ${
        isMobile ? "" : "group"
      } relative h-[300px] md:h-[700px] items-center`}
    >
      {/* Left Image */}
      <img
        alt="image3"
        src={image3}
        className={`w-[200px] h-[250px] md:w-[564px] md:h-[650px] absolute transform transition-all duration-500 origin-bottom
              ${
                isMobile
                  ? "translate-x-[-100px] translate-y-[-10px] rotate-[3deg]"
                  : "group-hover:translate-x-[-100px] md:group-hover:translate-x-[-295px] group-hover:translate-y-[-10px] group-hover:rotate-[3deg]"
              }`}
      />

      {/* Center Image */}
      <img
        alt="image1"
        src={image1}
        className={`w-[180px] h-[220px] md:w-[500px] md:h-[606px] absolute transform transition-all duration-500 z-10
              ${isMobile ? "scale-100" : "group-hover:scale-100"}`}
      />

      {/* Right Image */}
      <img
        alt="image2"
        src={image2}
        className={`w-[200px] h-[250px] md:w-[564px] md:h-[650px] absolute transform transition-all duration-500 origin-bottom
              ${
                isMobile
                  ? "translate-x-[100px] rotate-[5deg] -translate-y-[-10px]"
                  : "group-hover:translate-x-[100px] md:group-hover:translate-x-[250px] group-hover:rotate-[5deg] group-hover:-tranlate-y-[-10px]"
              }`}
      />
    </motion.div>
  );
};
