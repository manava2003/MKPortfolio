import React from "react";
import mk from "../assets/image 7.png";
import ParaPhoto from "../assets/Asaimage.png";
import mahinderKaur from "../assets/MAHINDER KAUR.svg";
import mobileText from "../assets/about-text-mobile.svg";

export const About = () => {
  return (
    <div className="text-white mx-auto md:mx-[70px] text-center self-center items-center px-4 md:px-40">
      <div className="p-4 md:p-9">
        <span className=" text-[20px] ml-56">[About]</span>
        <br></br>
        <br></br>
        <div className="text-center relative md:left-[-70px]"></div>
        {/* card */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col md:flex-row w-[400px] ml-10  md:ml-0 h-[800px] bg-[#171717] md:h-[618px] md:w-[1151px]  relative left-[-200px] -translate-x-1 md:translate-x-0 ">
          <img
            alt="mk"
            src={mk}
            className="w-[400px] h-[350px] object-cover md:object-contain md:w-[420px] md:h-[634px] mt-5 rounded-xl  md:rounded-md"
          ></img>
          <div className="flex flex-col  ml-5 md:ml-0 md:mt-20">
            <img
              src={mahinderKaur}
              alt="mk"
              className="w-[180px] h-[100px] md:w-[300px] md:h-[100px] "
            />

            <img
              className=" block   md:hidden h-[250px] w-[400px] "
              src={mobileText}
              alt="paraphoto"
            />

            <img
              className="pt-10 hidden md:block ml-12 scale-110 md:mb-10  "
              src={ParaPhoto}
              alt="paraphoto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
// aakhri commit