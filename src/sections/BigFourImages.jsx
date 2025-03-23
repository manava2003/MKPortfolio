import React, { useState } from "react";
// import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";
import frame4 from "../assets/Frame4.png";
import { motion } from "framer-motion";
import manicJacket from "../assets/MANIAC BIKER JACKET.png";
import metaverseCostume from "../assets/METAVERSE COSTUME.png";
import priscousImage from "../assets/PRECOCIOUS ORANGE.png";
import blackJacketGirl from "../assets/frame1.jpeg";
import torphicalSensation from "../assets/TROPICAL SENSATION.svg";
import { Link } from "react-router-dom";

const BigFourImages = () => {
  const [touchedIndex, setTouchedIndex] = useState(null);

  const images = [
    {
      src: frame2,
      titleImg: manicJacket,
      subtitle: "Leather Design",
      alt: "Maniac Biker Jacket Image",
      page: 1,
    },
    {
      src: frame3,
      titleImg: metaverseCostume,
      subtitle: " Leather Design",
      alt: "Urban Style Image",
      page: 2,
    },
    {
      src: frame4,
      titleImg: priscousImage,
      subtitle: " Leather Design",
      alt: "Street Fashion Image",
      page: 3,
    },
    {
      src: blackJacketGirl,
      titleImg: torphicalSensation,
      subtitle: "Leather Design",
      alt: "Street Fashion Design",
      page: 4,
    },
  ];
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
    >
      <div className="flex flex-col gap-8 md:gap-16 max-w-6xl w-full">
        {images.map((image, index) => (
          <Link onClick={scrollToTop} to={`/project${image.page}`} key={index}>
            <div className="w-full">
              <div className="relative aspect-square md:aspect-[3/1] overflow-hidden rounded-lg group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-[2px] group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-black/30 opacity-100 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 transition-all duration-300">
                  <div className="flex flex-col items-start gap-2 ml-4">
                    <motion.img
                      src={image.titleImg}
                      alt={image.alt}
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="h-12 md:h-20 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <p className="text-white/90 text-sm md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      [ {image.subtitle} ]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default BigFourImages;
