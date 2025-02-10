import React from "react";
import i1 from "../assets/231 1.png";
import i2 from "../assets/image 10.png";
import i3 from "../assets/image 12.png";
import i4 from "../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce 1.png";
import i5 from "../assets/WhatsApp Image 2024-11-30 at 00.31.04_111f25ce421 1.png";
import illustartion from "../assets/illustrations.png";
import illustartionText from "../assets/MY ILLUSTRATIONS.png";
import illustrationRectangele from "../assets/Rectangle 13.png";
const Illustrations = () => {
  return (
    <div className="relative  left-36 max-w-fit mt-44">
      <div className="flex flex-row justify-start items-start gap-10">
        <img
          src={illustrationRectangele}
          alt="illustration reactangle"
          className="-translate-y-14"
        />
        <div className="-translate-y-24">
          {/* <p>
          Every project is different. We strive to offer you a customized
          solution that fulfills your artistic vision and conforms to the needs
          of your production.
        </p> */}
          <img src={illustartionText} alt="illustartion text" />
        </div>
      </div>

      {/* Images Section */}
      <div className="relative h-[600px] flex justify-center items-center">
        {/* Center Image */}
        {/* <img
          src={i2}
          className="absolute w-[280px] -translate-y-[70px] object-contain"
          alt="Illustration 1"
        /> */}

        {/* Left First */}
        {/* <img
          src={i3}
          className="absolute w-[280px] object-contain -translate-x-[250px] -translate-y-[80px]"
          alt="Illustration 2"
        /> */}

        {/* Right First */}
        {/* <img
          src={i4}
          className="absolute w-[280px] object-scale-down translate-x-[250px] -translate-y-[80px]"
          alt="Illustration 3"
        /> */}

        {/* Left Second */}
        {/* <img
          src={i1}
          className="absolute w-[280px] object-contain -translate-x-[450px] -translate-y-[80px]"
          alt="Illustration 4"
        /> */}

        {/* Right Second */}
        {/* <img
          src={i5}
          className="absolute w-[280px] object-contain translate-x-[450px] -translate-y-[80px]"
          alt="Illustration 5"
        /> */}
        <img src={illustartion} className="mt-16" alt="illustaions" />
      </div>

      <button className="invisible mb-36 cursor-none w-[1155px] flex items-center justify-center text-center rounded-md border-2 border-white text-white transition-colors duration-300 hover:bg-[#E90074] text-[16px] h-[57px]">
        View All
      </button>
    </div>
  );
};

export default Illustrations;
