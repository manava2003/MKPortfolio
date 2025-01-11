import React from "react";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 3.png";
import image3 from "../assets/image 4.png";
import { motion } from "framer-motion";

export const Images = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex justify-center group relative h-[700px] items-center"
    >
      {/* Left Image */}
      <img
        alt="image3"
        src={image3}
        className="w-[564px] h-[606px] absolute transform transition-all duration-500 origin-bottom
              group-hover:translate-x-[-350px] group-hover:rotate-[-10deg] group-hover:scale-95"
      />

      {/* Center Image */}
      <img
        alt="image1"
        src={image1}
        className="w-[534px] h-[606px] absolute transform transition-all duration-500 z-10
              group-hover:translate-y-[-10px] group-hover:scale-100"
      />

      {/* Right Image */}
      <img
        alt="image2"
        src={image2}
        className="w-[464px] h-[606px] absolute transform transition-all duration-500 origin-bottom
              group-hover:translate-x-[350px] group-hover:rotate-[10deg] group-hover:scale-95"
      />
    </motion.div>
  );
};
