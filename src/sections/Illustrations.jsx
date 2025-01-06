import React from 'react';
import { motion } from 'framer-motion';
import i1 from '../assets/231 1.png';
import i2 from '../assets/image 10.png';
import i3 from '../assets/image 12.png';
import i4 from '../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce 1.png';
import i5 from '../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce421 1.png';

const Illustrations = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="relative left-36 max-w-fit">
      <div className="w-[665px] h-[300px] mb-8 font-poppins text-[40px] text-white font-light text-justify">
        <p>
          Every project is different. We strive to offer you a customized solution that fulfills your artistic vision and conforms to the needs of your production.
        </p>
      </div>

      {/* Images Section */}
      <motion.div
        className="flex -translate-x-32 overflow-x-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% visible
        transition={{ staggerChildren: 0.3 }} // Stagger each image
      >
        {[i2, i3, i4, i1, i5].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className={`scale-[.8] -translate-x-${index * 8}`}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          />
        ))}
      </motion.div>

      {/* Button */}
      <button className="mb-36 w-[1155px] flex items-center justify-center text-center rounded-md border-2 border-white text-white hover:bg-[#E90074] text-[16px] h-[57px] group overflow-hidden relative">
        View All
      </button>

      {/* Arrow */}
      <svg
        className="mx-auto -translate-x-20"
        width="154"
        height="236"
        viewBox="0 0 154 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG Path */}
      </svg>
    </div>
  );
};

export default Illustrations;
