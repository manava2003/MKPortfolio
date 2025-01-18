import React, { useState, useEffect } from "react";
import sliderImage1 from "../assets/slider-image1.png";
import sliderImage2 from "../assets/slider-image2.jpeg";
import sliderImage3 from "../assets/slider-image3.jpeg";
import sliderImage4 from "../assets/slider-image4.jpeg";
import { motion } from "framer-motion";

const CarouselBackground = () => {
  const [position, setPosition] = useState(0);

  const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (400 * images.length));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div
        className="flex gap-8 absolute transition-transform duration-500"
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Duplicate images for infinite effect */}
        {[...images, ...images, ...images].map((src, index) => (
          <div key={index} className="w-[400px] h-[400px] flex-shrink-0">
            <img
              src={src}
              alt={`Carousel item ${index}`}
              className="w-full h-full object-cover rounded-lg filter grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="relative min-h-screen translate-y-20  z-10  max-w-6xl mx-auto px-6">
      <div className="bg-black/50 backdrop-blur-md rounded-xl p-[200px] text-white">
        <h1 className="-translate-y-10 text-5xl text-center font-extrabold leading-loose mt-20 mb-2 tracking-tighter">
          WANNA <span className="text-pink-500">CREATE</span> SOMETHING?
        </h1>
        <p className="text-center -translate-y-16 text-lg mb-8">
          Let's connect
        </p>

        <div className="space-y-6">
          {step === 0 && (
            <input
              type="text"
              placeholder="Your name"
              className="w-full placeholder:text-center  bg-gray-800/50 backdrop-blur rounded-lg px-4 -translate-y-6 py-10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
            />
          )}

          <div className="flex gap-2 justify-center mt-4">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setStep(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  step === index ? "bg-pink-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SketchSlider = () => {
  return (
    <div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-32"
    >
      <CarouselBackground />
      <ContactForm />
    </div>
  );
};

export default SketchSlider;
