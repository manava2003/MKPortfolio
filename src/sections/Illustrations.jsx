import React from "react";
import { motion } from "framer-motion";
import i1 from "../assets/231 1.png";
import i2 from "../assets/image 10.png";
import i3 from "../assets/image 12.png";
import i4 from "../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce 1.png";
import i5 from "../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce421 1.png";

const Illustrations = () => {
  // Define variants for each position
  const imageVariants = {
    center: {
      hidden: { opacity: 0, scale: 0.5, y: 100 },
      visible: {
        opacity: 1,
        scale: 1,
        y: -80,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1,
          delay: 0,
        },
      },
    },
    left1: {
      hidden: { opacity: 0, scale: 0.5, x: -150, y: 100 },
      visible: {
        opacity: 1,
        scale: 1,
        x: -250 ,
        y: -80,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1,
          delay: 0.3,
        },
      },
    },
    right1: {
      hidden: { opacity: 0, scale: 0.5, x: 150, y: 100 },
      visible: {
        opacity: 1,
        scale: 1,
        x: 250,
        y: -80,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1,
          delay: 0.3,
        },
      },
    },
    left2: {
      hidden: { opacity: 0, scale: 0.5, x: -300, y: 100 },
      visible: {
        opacity: 1,
        scale: 1,
        x: -450,
        y: -80,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1,
          delay: 0.6,
        },
      },
    },
    right2: {
      hidden: { opacity: 0, scale: 0.5, x: 300, y: 100 },
      visible: {
        opacity: 1,
        scale: 1,
        x: 450,
        y: -80,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1,
          delay: 0.6,
        },
      },
    },
  };

  return (
    <div className="relative left-36 max-w-fit mt-40">
      <div className="w-[665px] h-[300px] mb-20 font-poppins text-[40px] text-white font-light text-justify">
        <p>
          Every project is different. We strive to offer you a customized
          solution that fulfills your artistic vision and conforms to the needs
          of your production.
        </p>
      </div>

      {/* Images Section */}
      <div className="relative h-[600px] flex justify-center items-center">
        {/* Center Image */}
        <motion.img
          src={i2}
          className="absolute w-[280px] object-contain"
          variants={imageVariants.center}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
            margin: "0px 0px -200px 0px",
          }}
        />

        {/* Left First */}
        <motion.img
          src={i3}
          className="absolute w-[280px] object-contain"
          variants={imageVariants.left1}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
            margin: "0px 0px -200px 0px",
          }}
        />

        {/* Right First */}
        <motion.img
          src={i4}
          className="absolute w-[280px] object-scale-down "
          variants={imageVariants.right1}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
            margin: "0px 0px -200px 0px",
          }}
        />

        {/* Left Second */}
        <motion.img
          src={i1}
          className="absolute w-[280px] object-contain"
          variants={imageVariants.left2}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
            margin: "0px 0px -200px 0px",
          }}
        />

        {/* Right Second */}
        <motion.img
          src={i5}
          className="absolute w-[280px] object-contain"
          variants={imageVariants.right2}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
            margin: "0px 0px -200px 0px",
          }}
        />
      </div>

      <button className="invisible mb-36 cursor-none w-[1155px] flex items-center justify-center text-center rounded-md border-2 border-white text-white transition-colors duration-300 hover:bg-[#E90074] text-[16px] h-[57px]">
        View All
      </button>
    </div>
  );
};

export default Illustrations;
