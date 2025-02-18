import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import SmallLogo from "../../assets/Group 15.png";

import ManiacBikerLeftImage from "../../assets/ManiacBiker/ManiacBikerLeftImage.png";
import ManiacBikerRightImage from "../../assets/ManiacBiker/ManiacBikerRightImage.png";
import ManiacTitle from "../../assets/ManiacBiker/MANIAC BIKER JACKET.png";

import Timeline from "../../assets/TimeLine.png";
import SlideArrowButton from "../Button";
import { Link } from "react-router";
const ProjectOne = () => {
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
            src={ManiacBikerLeftImage}
            alt="Project Left"
            className="w-[30%] h-[500px] object-cover"
          />
          <div className="w-[70%]">
            <img
              src={ManiacBikerRightImage}
              alt="Project Right"
              className="w-full h-[500px] object-cover"
            />
            <img
              src={Timeline}
              alt="Project Timeline"
              className="mt-4 max-w-[200px] ml-auto"
            />
            <img
              src={ManiacTitle}
              alt="Project Title"
              className="max-w-[600px] -ml-[400px]"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-16 space-y-8 ">
          <div>
            <h3 className="text-white mb-2">[ Leather Design ]</h3>
            <p className="text-lg">
              The jacket pays homage to Eddie Munson’s iconic look from Stranger
              Things, making it a must-have for fans seeking a slice of Hawkins
              inspired fashion.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-2">[ Concept & Design Brief ]</h3>
            <p className="text-lg mb-[200px]">
              Brief: Construct a unisex jacket inspired by a your favorite
              character using leather or its alternatives . <br /> <br />
              This is for someone who can identify with Eddie's personality.
              anti-institutional, expressionist, and rebellious. Eddie stood up
              for the fundamental ideals of love and friendship despite
              constantly being criticized by society.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectOne;
