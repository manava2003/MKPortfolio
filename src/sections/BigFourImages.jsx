import React from "react";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";
import frame4 from "../assets/Frame4.png";
import { motion } from "framer-motion";
const BigFourImages = () => {
  const images = [
    {
      src: frame1,
      title: "TROPICAL SENSATION",
      alt: "Tropical Sensation Image",
    },
    {
      src: frame2,
      title: "MANIAC BIKER JACKET",
      alt: "Maniac Biker Jacket Image",
    },
    {
      src: frame3,
      title: "URBAN STYLE",
      alt: "Urban Style Image",
    },
    {
      src: frame4,
      title: "STREET FASHION",
      alt: "Street Fashion Image",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="flex flex-col gap-16 max-w-6xl w-full">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <div className="relative aspect-[3/1] overflow-hidden rounded-lg mb-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <motion.h2
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-normal text-white"
            >
              {image.title}
            </motion.h2>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BigFourImages;
