import React from "react";
// import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";
import frame4 from "../assets/Frame4.png";
import { motion } from "framer-motion";
import manicJacket from "../assets/MANIAC BIKER JACKET.png";
import metaverseCostume from "../assets/METAVERSE COSTUME.png";
import priscousImage from "../assets/PRECOCIOUS ORANGE.png";

const BigFourImages = () => {
  const images = [
    {
      src: frame2,
      titleImg: manicJacket,
      subtitle: "Leather Design",
      alt: "Maniac Biker Jacket Image",
    },
    {
      src: frame3,
      titleImg: metaverseCostume,
      subtitle: " Leather Design",
      alt: "Urban Style Image",
    },
    {
      src: frame4,
      titleImg: priscousImage,
      subtitle: " Leather Design",
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
            <div className="relative aspect-[3/1] overflow-hidden rounded-lg group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-[2px] group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="absolute  ml-8 bottom-0 left-0 p-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="h-full">
                  <motion.img
                    src={image.titleImg}
                    alt={image.alt}
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="h-20 object-contain"
                  />
                </div>
                <p className="text-white/90 mt-2 text-lg">
                  [ {image.subtitle} ]
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BigFourImages;
