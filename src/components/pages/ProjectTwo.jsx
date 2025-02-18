import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import SmallLogo from "../../assets/Group 15.png";

import MetaVerseSmall from "../../assets/Metaverse/MetaverseLeftImage.png";
import MetaVerseBig from "../../assets/Metaverse/MetaverseRightImage.png";
import MetaVerseTitle from "../../assets/METAVERSE COSTUME.png";
import Timeline from "../../assets/TimeLine.png";
import SlideArrowButton from "../Button";
import { Link } from "react-router";

const ProjectTwo = () => {
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
            src={MetaVerseSmall}
            alt="Project Left"
            className="w-[30%] h-[500px] object-cover"
          />
          <div className="w-[70%]">
            <img
              src={MetaVerseBig}
              alt="Project Right"
              className="w-full h-[500px] object-cover"
            />
            <img
              src={Timeline}
              alt="Project Timeline"
              className="mt-4 max-w-[200px] ml-auto"
            />
            <img
              src={MetaVerseTitle}
              alt="Project Title"
              className="max-w-[600px] -ml-[400px]"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-16 space-y-8">
          <div>
            <h3 className=" mb-2">
              [ “It’s the villain who drives the plot” ]
            </h3>
            <p className="text-lg">
              Where pixels and imagination merge to redefine fashion in a
              digital world . This metaverse gaming costume embodies the
              sinister allure of a virtual villain.
            </p>
          </div>

          <div>
            <h3 className=" mb-2">[ Brainstorming Process ]</h3>
            <p className="text-lg mb-[200px]">
              Oversized pleated pants as it is a gaming character. Used a layer
              of EVA sheet under the silver rexine, heated it to give the
              distorted metal look.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectTwo;
