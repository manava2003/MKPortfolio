import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import SmallLogo from "../../assets/Group 15.png";

import PreciousOrangeLeftImage from "../../assets/PreciousOrange/OrangeLeftImage.png";
import PreciousOrangeRightImage from "../../assets/PreciousOrange/OrangeRightImage.png";
import PreciousOrangeTitle from "../../assets/PreciousOrange/PRECOCIOUS ORANGE.png";
import Timeline from "../../assets/TimeLine.png";
import SlideArrowButton from "../Button";
import { Link } from "react-router";

const ProjectThree = () => {
  return (
    <div className="min-h-screen overflow-y-clip bg-black text-white">
      <header className="flex mt-5 ml-3 justify-between">
        <Link to={"/"}>
          <img src={SmallLogo} alt="small logo" />
        </Link>{" "}
        <SlideArrowButton className="mr-5" />
      </header>
      <Navbar />

      {/* Hero Section with I   mages */}
      <main className="container mx-auto px-4 pt-20 max-w-7xl">
        <div className="flex gap-8">
          <img
            src={PreciousOrangeLeftImage}
            alt="Project Left"
            className="w-[30%] h-[500px] object-cover"
          />
          <div className="w-[70%]">
            <img
              src={PreciousOrangeRightImage}
              alt="Project Right"
              className="w-full h-[500px] object-cover"
            />
            <img
              src={Timeline}
              alt="Project Timeline"
              className="mt-4 max-w-[200px] ml-auto"
            />
            <img
              src={PreciousOrangeTitle}
              alt="Project Title"
              className="max-w-[600px] -ml-[400px]"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-16 space-y-8 ">
          <div>
            <h3 className="text-gray-400 mb-2">[ Leather Design ]</h3>
            <p className="text-lg">
              A leather handbag that pays homage to the fierce Y2K fashion era,
              drawing inspiration from its bold aesthetic, features a nostalgic
              orange hue reminiscent of Fanta.
            </p>
          </div>

          <div>
            <h3 className="text-gray-400 mb-2">[ Concept & Design Brief ]</h3>
            <p className="text-lg mb-1">
              Brief: To construct a shoulder bag taking an inspiration.
              <br /> The FANTA colour trend in 2000's served as the inspiration
              for this. Many people feel a connection to styles from their
              childhood or youth and enjoy seeing them reemerge in current
              fashion.
            </p>
          </div>
          <div>
            <h3 className="text-gray-400 mb-2">[ Brainstroming Process ]</h3>
            <p className="text-lg mb-[200px]">
              Flame like patterns, Textured materials, High quality materials,
              Unique closures, Distinctive strap design.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectThree;
