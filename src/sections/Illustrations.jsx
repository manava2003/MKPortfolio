import React from "react";

import illustartion from "../assets/illustrations.png";
import illustartionText from "../assets/MY ILLUSTRATIONS.png";
import illustrationRectangele from "../assets/Rectangle 13.png";
const Illustrations = () => {
  return (
    <div className="relative translate-x-14  left-36 max-w-fit mt-[20rem]">
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
        <img src={illustartion} className="mt-16" alt="illustaions" />
      </div>

      <button className="invisible mb-36 cursor-none w-[1155px] flex items-center justify-center text-center rounded-md border-2 border-white text-white transition-colors duration-300 hover:bg-[#E90074] text-[16px] h-[57px]">
        View All
      </button>
    </div>
  );
};

export default Illustrations;
