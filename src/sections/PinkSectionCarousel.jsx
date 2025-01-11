import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // No need for navigation CSS anymore
import pinkStatue from "../assets/pink-statue.png";
import { motion } from "framer-motion";

import { Pagination, Autoplay } from "swiper/modules";

const PinkSectionCarousel = () => {
  const slides = [
    {
      image: pinkStatue,
      text: `It is an avant-garde leather garment collection inspired by Miley Cyrus, celebrating her fearless approach to fashion and individuality. It pays homage to rock ‘n’ roll culture, and embraces an eclectic fusion of styles. It’s a unique and immersive fashion experience that invites individuals to break free from the ordinary and celebrate their inner wilderness. It represents not only the sunny side of self-expression, but also the darker, more introspective aspects of human existence. Each garment is a reflection of of her life’s highs and lows, translating her personal triumphs and traumas into intricate designs that tell a profound story.`,
    },
    {
      image: pinkStatue,
      text: `It is an avant-garde leather garment collection inspired by Miley Cyrus, celebrating her fearless approach to fashion and individuality. It pays homage to rock ‘n’ roll culture, and embraces an eclectic fusion of styles. It’s a unique and immersive fashion experience that invites individuals to break free from the ordinary and celebrate their inner wilderness. It represents not only the sunny side of self-expression, but also the darker, more introspective aspects of human existence. Each garment is a reflection of of her life’s highs and lows, translating her personal triumphs and traumas into intricate designs that tell a profound story.`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="bg-[#BE0561] rounded-t-lg flex items-center justify-center"
      style={{
        width: "100%",
        maxWidth: "1154px",
        height: "523px",
        margin: "0 auto",
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]} // Include Autoplay module
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Adjust this value to control the autoplay speed (3 seconds in this case)
          disableOnInteraction: false, // Keep autoplay running after user interaction
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-start gap-10 items-center p-5"
          >
            <figure
              className=""
              style={{
                width: "307px",
                height: "489px",
                borderRadius: "4px 0 0 0",
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </figure>
            <div
              className="text-white"
              style={{
                width: "721px",
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "27px",
                textAlign: "justify",
              }}
            >
              {slide.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default PinkSectionCarousel;
