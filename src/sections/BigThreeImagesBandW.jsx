import React from "react";
import performance1 from "../assets/performance1.png";
import performance2 from "../assets/performance2.png";
import performance3 from "../assets/performance3.png";
import { motion } from "framer-motion";

const BigThreeImagesBandW = () => {
  const images = [
    {
      id: 1,
      label: "performance1",
      src: performance1,
    },
    {
      id: 2,
      label: "performance2",
      src: performance2,
    },
    {
      id: 3,
      label: "performance3",
      src: performance3,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full grid grid-cols-3 gap-1"
    >
      {images.map((image) => (
        <div key={image.id} className="relative h-[600px] overflow-hidden">
          {/* Pink colored section (now 60% of height) */}
          <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
            <img
              src={image.src}
              alt="performance"
              className="w-full h-[600px] object-cover"
              style={{
                filter:
                  "brightness(0.9) sepia(0.4) hue-rotate(310deg) saturate(2.5)",
              }}
            />
          </div>

          {/* Black and white section (now 40% of height) */}
          <div className="absolute bottom-0 left-0 w-full h-[40%] overflow-hidden">
            <img
              src={image.src}
              alt="performance"
              className="w-full h-[600px] object-cover"
              style={{
                filter: "grayscale(100%) contrast(120%) brightness(0.9)",
                transform: "translateY(-360px)", // Adjusted to match new split point
              }}
            />
          </div>

          {/* Split line at 60% height */}
          <div
            className="absolute left-0 right-0 h-[1px] bg-black opacity-20"
            style={{ top: "60%" }}
          />
        </div>
      ))}
    </motion.div>
  );
};
export default BigThreeImagesBandW;
