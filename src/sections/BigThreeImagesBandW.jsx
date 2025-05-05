import React from "react";
import { motion } from "framer-motion";
import BigThreeImage from "../assets/BigThreeImg.png";

const BigThreeImagesBandW = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full grid grid-cols-1 gap-4"
    >
      <div className="relative h-[180px] md:h-[600px] overflow-hidden min-w-[200px] mx-auto">
        <img
          src={BigThreeImage}
          alt="Big Three"
          className="w-full h-[180px] md:h-[600px] object-cover"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            filter: "grayscale(100%)",
          }}
        />
        <img
          src={BigThreeImage}
          alt="Big Three"
          className="w-full h-[180px] md:h-[600px] object-cover absolute top-0 left-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
          }}
        />
      </div>
    </motion.div>
  );
};
export default BigThreeImagesBandW;
