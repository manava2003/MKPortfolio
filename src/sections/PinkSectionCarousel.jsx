import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // No need for navigation CSS anymore
import pinkStatue from "../assets/pink-statue.png";
import girlWithNewspaper from "../assets/girlWithNewspaper.png";

import { motion } from "framer-motion";

import { Pagination, Autoplay } from "swiper/modules";

const PinkSectionCarousel = () => {
  const slides = [
    {
      image: pinkStatue,
      para1: `It is an avant-garde leather garment collection inspired by Miley Cyrus, celebrating her fearless approach to fashion and individuality. It pays homage to rock ‘n’ roll culture, and embraces an eclectic fusion of styles. It's a unique and immersive fashion experience that invites individuals to break free from the ordinary and celebrate their inner wilderness. `,
      para2: `It represents not only the sunny side of self-expression, but also the darker, more introspective aspects of human existence. Each garment is a reflection of of her life's highs and lows, translating her personal triumphs and traumas into intricate designs that tell a profound story.`,
    },
    {
      image: girlWithNewspaper,
      para1: `It is an avant-garde leather garment collection inspired by Miley Cyrus, celebrating her fearless approach to fashion and individuality. It pays homage to rock 'n' roll culture, and embraces an eclectic fusion of styles. It's a unique and immersive fashion experience that invites individuals to break free from the ordinary and celebrate their inner wilderness. `,
      para2: `It represents not only the sunny side of self-expression, but also the darker, more introspective aspects of human existence. Each garment is a reflection of of her life's highs and lows, translating her personal triumphs and traumas into intricate designs that tell a profound story.`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="rounded-t-lg flex items-center justify-center w-full h-auto md:h-[523px] mx-auto"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center p-4 md:p-5"
          >
            <figure
              className="w-full md:w-[500px] h-[300px] md:h-[489px] mx-auto md:mx-0"
              style={{
                borderRadius: "4px 0 0 0",
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-scale-down md:-translate-x-20"
              />
            </figure>
            <div
              className="text-white md:-translate-y-10 w-full md:w-[600px]"
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                md: { fontSize: "18px" },
                fontWeight: "400",
                lineHeight: "27px",
                textAlign: "justify",
              }}
            >
              <div className="flex flex-col gap-2">
                <span>{slide.para1}</span>
                <span>{slide.para2}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default PinkSectionCarousel;
