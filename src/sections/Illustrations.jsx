import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import i1 from "../assets/231 1.png";
import i2 from "../assets/image 10.png";
import i3 from "../assets/image 12.png";
import i4 from "../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce 1.png";
import i5 from "../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce421 1.png";

const Illustrations = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Adjust transform ranges for smoother sequential animation
  const centerScale = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const centerY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  // Adjust timing for side images
  const sideScale = useTransform(scrollYProgress, [0.2, 0.4], [0.6, 1]);
  const sideOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const leftX = useTransform(scrollYProgress, [0.2, 0.4], [-350, -280]);
  const rightX = useTransform(scrollYProgress, [0.2, 0.4], [350, 280]);

  // Adjust timing for outer images
  const outerScale = useTransform(scrollYProgress, [0.4, 0.6], [0.6, 1]);
  const outerOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const farLeftX = useTransform(scrollYProgress, [0.4, 0.6], [-700, -560]);
  const farRightX = useTransform(scrollYProgress, [0.4, 0.6], [700, 560]);

  const getImageStyle = (index) => {
    switch (index) {
      case 0: // Center image
        return {
          x: 0,
          y: centerY,
          scale: centerScale,
          opacity: centerOpacity,
          zIndex: 5,
        };
      case 1: // Left image
        return {
          x: leftX,
          y: 0,
          scale: sideScale,
          opacity: sideOpacity,
          zIndex: 4,
        };
      case 2: // Right image
        return {
          x: rightX,
          y: 0,
          scale: sideScale,
          opacity: sideOpacity,
          zIndex: 4,
        };
      case 3: // Far left
        return {
          x: farLeftX,
          y: 0,
          scale: outerScale,
          opacity: outerOpacity,
          zIndex: 3,
        };
      case 4: // Far right
        return {
          x: farRightX,
          y: 0,
          scale: outerScale,
          opacity: outerOpacity,
          zIndex: 3,
        };
      default:
        return {
          x: 0,
          scale: 1,
          opacity: 1,
        };
    }
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center">
      <div className="w-[665px] h-[300px] mb-8 font-poppins text-[40px] text-white font-light text-center">
        <p>
          Every project is different. We strive to offer you a customized
          solution that fulfills your artistic vision and conforms to the needs
          of your production.
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex justify-center items-center h-[120vh] relative w-full"
      >
        <div className="sticky top-[20vh] flex justify-center items-center w-full">
          {[i2, i3, i4, i1, i5].map((img, index) => (
            <motion.img
              key={index}
              src={img}
              className="absolute scale-[.8] w-[260px] h-auto object-contain"
              style={{
                ...getImageStyle(index),
                filter: "brightness(1.1)",
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                opacity: { duration: 1.5 },
              }}
              whileHover={{
                scale: 1.05,
                filter: "brightness(1.2)",
                transition: { duration: 0.3 },
              }}
            />
          ))}
        </div>
      </div>

      <button className="mb-36 w-[1155px] flex items-center justify-center text-center rounded-md border-2 border-white text-white hover:bg-[#E90074] text-[16px] h-[57px] group overflow-hidden relative">
        View All
      </button>

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
// Illustrations.js

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import i1 from "../assets/231 1.png";
// import i2 from "../assets/image 10.png";
// import i3 from "../assets/image 12.png";
// import i4 from "../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce 1.png";
// import i5 from "../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce421 1.png";

// const Illustrations = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   // Adjust transform ranges for smoother sequential animation
//   const centerScale = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
//   const centerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
//   const centerY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

//   // Adjust timing for side images
//   const sideScale = useTransform(scrollYProgress, [0.2, 0.4], [0.6, 1]);
//   const sideOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
//   const leftX = useTransform(scrollYProgress, [0.2, 0.4], [-350, -280]);
//   const rightX = useTransform(scrollYProgress, [0.2, 0.4], [350, 280]);

//   // Adjust timing for outer images
//   const outerScale = useTransform(scrollYProgress, [0.4, 0.6], [0.6, 1]);
//   const outerOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
//   const farLeftX = useTransform(scrollYProgress, [0.4, 0.6], [-700, -560]);
//   const farRightX = useTransform(scrollYProgress, [0.4, 0.6], [700, 560]);

//   const getImageStyle = (index) => {
//     switch (index) {
//       case 0: // Center image
//         return {
//           x: 0,
//           y: centerY,
//           scale: centerScale,
//           opacity: centerOpacity,
//           zIndex: 5,
//         };
//       case 1: // Left image
//         return {
//           x: leftX,
//           y: 0,
//           scale: sideScale,
//           opacity: sideOpacity,
//           zIndex: 4,
//         };
//       case 2: // Right image
//         return {
//           x: rightX,
//           y: 0,
//           scale: sideScale,
//           opacity: sideOpacity,
//           zIndex: 4,
//         };
//       case 3: // Far left
//         return {
//           x: farLeftX,
//           y: 0,
//           scale: outerScale,
//           opacity: outerOpacity,
//           zIndex: 3,
//         };
//       case 4: // Far right
//         return {
//           x: farRightX,
//           y: 0,
//           scale: outerScale,
//           opacity: outerOpacity,
//           zIndex: 3,
//         };
//       default:
//         return {
//           x: 0,
//           scale: 1,
//           opacity: 1,
//         };
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden flex flex-col items-center">
//       <div className="w-[665px] h-[300px] mb-8 font-poppins text-[40px] text-white font-light text-center">
//         <p>
//           Every project is different. We strive to offer you a customized
//           solution that fulfills your artistic vision and conforms to the needs
//           of your production.
//         </p>
//       </div>

//       <div
//         ref={containerRef}
//         className="flex justify-center items-center h-[120vh] relative w-full"
//       >
//         <div className="sticky top-[20vh] flex justify-center items-center w-full">
//           {[i2, i3, i4, i1, i5].map((img, index) => (
//             <motion.img
//               key={index}
//               src={img}
//               className="absolute scale-[.8] w-[260px] h-auto object-contain"
//               style={{
//                 ...getImageStyle(index),
//                 filter: "brightness(1.1)",
//               }}
//               transition={{
//                 duration: 1.2,
//                 ease: "easeOut",
//                 opacity: { duration: 1.5 },
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 filter: "brightness(1.2)",
//                 transition: { duration: 0.3 },
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <button className="mb-36 w-[1155px] flex items-center justify-center text-center rounded-md border-2 border-white text-white hover:bg-[#E90074] text-[16px] h-[57px] group overflow-hidden relative">
//         View All
//       </button>

//       <svg
//         className="mx-auto -translate-x-20"
//         width="154"
//         height="236"
//         viewBox="0 0 154 236"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* SVG Path */}
//       </svg>
//     </div>
//   );
// };
// export default Illustrations;
