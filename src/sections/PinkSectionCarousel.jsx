import React, { useState, useEffect } from "react";
import pinkStatue from "../assets/pink-statue.png";
import girlWithNewspaper from "../assets/girlWithNewspaper.png";
import { motion } from "framer-motion";

const PinkSectionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: pinkStatue,
      para1: `It is an avant-garde leather garment collection inspired by Miley Cyrus, celebrating her fearless approach to fashion and individuality. It pays homage to rock 'n' roll culture, and embraces an eclectic fusion of styles. It's a unique and immersive fashion experience that invites individuals to break free from the ordinary and celebrate their inner wilderness. `,
      para2: `It represents not only the sunny side of self-expression, but also the darker, more introspective aspects of human existence. Each garment is a reflection of of her life's highs and lows, translating her personal triumphs and traumas into intricate designs that tell a profound story.`,
    },
    {
      image: girlWithNewspaper,
      para1: `It is an avant-garde leather garment collection inspired by Miley Cyrus, celebrating her fearless approach to fashion and individuality. It pays homage to rock 'n' roll culture, and embraces an eclectic fusion of styles. It's a unique and immersive fashion experience that invites individuals to break free from the ordinary and celebrate their inner wilderness. `,
      para2: `It represents not only the sunny side of self-expression, but also the darker, more introspective aspects of human existence. Each garment is a reflection of of her life's highs and lows, translating her personal triumphs and traumas into intricate designs that tell a profound story.`,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Pagination click handler
  const handlePaginationClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="rounded-t-lg flex items-center justify-center w-full h-auto mx-auto relative"
      >
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center p-2 md:p-5"
              >
                <figure className="w-full h-[200px] sm:h-[250px] md:h-[489px] mx-auto">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain md:-translate-x-20"
                  />
                </figure>
                <div
                  className="text-white w-full px-3 md:px-0 md:-translate-x-36 md:w-[600px]"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    lineHeight: "20px",
                    textAlign: "justify",
                  }}
                >
                  <div className="flex flex-col gap-3 md:gap-2 md:-translate-y-20">
                    <span className="md:text-base md:leading-[24px]">
                      {slide.para1}
                    </span>
                    <span className="md:text-base md:leading-[24px]">
                      {slide.para2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Custom Pagination */}
      <div className="flex rounded-md bg-pink-700 p-1 translate-y-4 md:translate-y-16 gap-2 justify-center mt-2 md:mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-yellow-200" : "bg-pink-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PinkSectionCarousel;
