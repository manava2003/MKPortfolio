import React, { useState, useEffect } from "react";
import sliderImage1 from "../assets/slider-image1.png";
import sliderImage2 from "../assets/slider-image2.jpeg";
import sliderImage3 from "../assets/slider-image3.jpeg";
import sliderImage4 from "../assets/slider-image4.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import wannaCreateSomething from "../assets/WANNA CREATE SOMETHING_.svg";

const CarouselBackground = () => {
  const [position, setPosition] = useState(0);
  const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];

  // Calculate total width of a single set of images
  const imageWidth = 400; // Width of each image
  const gapWidth = 32; // 8rem (md:gap-8) converted to pixels
  const totalWidth = images.length * (imageWidth + gapWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev < -totalWidth) {
          return 0;
        }
        return prev - 3;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div
        className="flex gap-4 md:gap-8 absolute transition-transform duration-500"
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Render 5 sets of images to ensure smooth infinite scroll */}
        {[...images, ...images, ...images, ...images, ...images].map(
          (src, index) => (
            <div
              key={index}
              s
              className="w-[200px] md:w-[400px] h-[200px] md:h-[400px] flex-shrink-0"
            >
              <img
                src={src}
                alt={`Carousel item ${index}`}
                className="w-full h-full object-cover rounded-lg filter grayscale"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

const ButtonMailto = ({
  mailto,
  label,
  submitted,
  setSubmitted,
  onEmailSent,
}) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        e.preventDefault();
        const mailtoLink = `mailto:${mailto}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
        onEmailSent();
        setTimeout(() => {
          setSubmitted(false);
        }, 2000);
      }}
      className="absolute right-0 top-0 h-full aspect-square bg-[#E90074] hover:bg-pink-500  text-white flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  );
};

const ContactForm = () => {
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    if (step === 0 && details.name.trim()) {
      setStep(1);
    } else if (step === 1 && details.message.trim()) {
      setStep(2);
    }
  };

  const handleClick = () => {
    if (step < 2) {
      handleNext();
    }
  };

  const recipientEmail = "mkbae@gmail.com";

  // Construct the mailto string with proper encoding
  const mailtoString = `${recipientEmail}?subject=${encodeURIComponent(
    `New Inquiry from ${details.name}`
  )}&body=${encodeURIComponent(
    `${details.message}\n\nContact: ${details.email}`
  )}`;

  const resetForm = () => {
    setTimeout(() => {
      setStep(0);
      setDetails({
        name: "",
        message: "",
        email: "",
      });
    }, 2000); // Reset form after 2 seconds
  };

  return (
    <div className="relative min-h-[50vh] md:min-h-screen translate-y-10 md:translate-y-20 z-10 max-w-8xl mx-auto px-4 md:px-6">
      <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 md:p-[100px] text-white">
        <img
          src={wannaCreateSomething}
          alt="wanna create something"
          className="md:-translate-y-10 max-w-full"
        />

        <p className="text-center -translate-y-8 md:-translate-y-16 text-base md:text-lg mt-10 mb-8">
          Let's connect
        </p>

        <div className="space-y-4">
          <div className="relative max-w-xl mx-auto">
            {step === 0 && (
              <input
                type="text"
                name="name"
                value={details.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full placeholder:text-center bg-gray-800/50 backdrop-blur rounded-lg pl-4 pr-16 py-6 md:py-8 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
              />
            )}
            {step === 1 && (
              <input
                name="message"
                value={details.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="3"
                className="w-full placeholder:text-center bg-gray-800/50 backdrop-blur rounded-lg pl-4 pr-16 py-6 md:py-8 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
              />
            )}
            {step === 2 && (
              <input
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full placeholder:text-center bg-gray-800/50 backdrop-blur rounded-lg pl-4 pr-16 py-6 md:py-8 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
              />
            )}

            {step < 2 ? (
              <button
                onClick={handleClick}
                className="absolute  right-0 top-0 h-full aspect-square bg-[#E90074] hover:bg-pink-500 text-white flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            ) : (
              <ButtonMailto
                submitted={submitted}
                setSubmitted={setSubmitted}
                onEmailSent={resetForm}
                label="Send Email"
                mailto={mailtoString}
              />
            )}
          </div>

          {submitted && (
            <div className="text-green-500 text-center mt-2">
              ✅ Email Sent!
            </div>
          )}

          <div className="flex gap-2 justify-center mt-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
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
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16 md:pt-32"
    >
      <CarouselBackground />
      <ContactForm />
    </motion.div>
  );
};

export default SketchSlider;
