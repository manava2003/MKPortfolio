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
        className="flex gap-4 md:gap-8 absolute transition-transform duration-500"
        style={{ transform: `translateX(${position}px)` }}
      >
        {[...images, ...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-[200px] md:w-[400px] h-[200px] md:h-[400px] flex-shrink-0"
          >
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
  const [details, setDetails] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // New state for success message

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

  const handleKeyInput = (e, field) => {
    if (e.key === "Enter" || e.type === "input") {
      let timeout = setTimeout(() => {
        if (details[field].trim()) {
          handleNext();
        }
      }, 2000);

      return () => clearTimeout(timeout);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!details.email.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/rs1768867@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );

      if (response.ok) {
        setDetails({ name: "", message: "", email: "" });
        setStep(0);
        setSubmitted(true); // Show success message

        // Hide message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen translate-y-10 md:translate-y-20 z-10 max-w-6xl mx-auto px-4 md:px-6">
      <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 md:p-[200px] text-white">
        <h1 className="-translate-y-4 md:-translate-y-10 text-3xl md:text-5xl text-center font-extrabold leading-loose mt-10 md:mt-20 mb-2 tracking-tighter">
          WANNA <span className="text-pink-500">CREATE</span> SOMETHING?
        </h1>
        <p className="text-center -translate-y-8 md:-translate-y-16 text-base md:text-lg mt-10 mb-8">
          Let's connect
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {step === 0 && (
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={details.name}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyInput(e, "name")}
                  onInput={(e) => handleKeyInput(e, "name")}
                  placeholder="Your name"
                  className="w-full placeholder:text-center bg-gray-800/50 backdrop-blur rounded-lg px-4 py-6 md:py-10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            )}
            {step === 1 && (
              <div className="space-y-4">
                <input
                  type="text"
                  name="message"
                  value={details.message}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyInput(e, "message")}
                  onInput={(e) => handleKeyInput(e, "message")}
                  placeholder="Your message"
                  className="w-full placeholder:text-center bg-gray-800/50 backdrop-blur rounded-lg px-4 py-6 md:py-10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4 relative">
                <input
                  type="email"
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full placeholder:text-center bg-gray-800/50 backdrop-blur rounded-lg px-4 py-6 md:py-10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button type="submit" onClick={handleSubmit} className="hidden">
                  Next
                </button>

                {/* Success message with check mark */}
                {submitted && (
                  <div className="absolute bottom-2 right-4 flex items-center text-green-500 text-sm">
                    ✅ Form submitted
                  </div>
                )}
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
        </form>
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
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16 md:pt-32"
    >
      <CarouselBackground />
      <ContactForm />
    </motion.div>
  );
};

export default SketchSlider;
