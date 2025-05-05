import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SmallLogo from "../../assets/final-small-logo.svg";

import GreenGirlleftImage from "../../assets/TropicalSensation/GreenGirlRightImage.jpeg";
import GreenGirlRightImage from "../../assets/TropicalSensation/GreenGirlRightImage.png";
import GreenGirlTitle from "../../assets/TropicalSensation/TROPICAL SENSATION.svg";
import Timeline from "../../assets/TimeLine.png";
import SlideArrowButton from "../Button";
import { Link } from "react-router";

const ProjectFour = () => {
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
            src={GreenGirlleftImage}
            alt="Project Left"
            className="w-[30%] h-[500px] object-cover"
          />
          <div className="w-[70%]">
            <img
              src={GreenGirlRightImage}
              alt="Project Right"
              className="w-full h-[500px] object-cover"
            />
            <img
              src={Timeline}
              alt="Project Timeline"
              className="mt-4 max-w-[200px] ml-auto"
            />
            <img
              src={GreenGirlTitle}
              alt="Project Title"
              className="max-w-[600px] -ml-[400px]"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-16 space-y-8">
          <div>
            <h3 className="text-gray-400 mb-2">[ Leather Design ]</h3>
            <p className="text-lg">
              A leather jacket inspired by dark tropical nature captures the
              essence of lush jungles and mysterious nights.
            </p>
          </div>

          <div>
            <h3 className="text-gray-400 mb-2">[ Consumer Profile ]</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Demographics:</span> Adults aged
                20-27, Women middle to high-income.
              </p>
              <p>
                <span className="font-bold">Psychographics:</span> Fashion
                enthusiasts, nature lovers, artistic, ethical consumers.
              </p>
              <p>
                <span className="font-bold">Preferences:</span> Unique, dark
                tropical nature inspired designs, premium quality.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-gray-400 mb-2">[ Concept & Design Brief ]</h3>
            <p className="text-lg">
              Brief: To design a collection of garments inspired by a concept
              and develop one prototype in leather.
            </p>
            <p className="text-lg mt-2 mb-[200px]">
              The Phenomenon of Synesthesia — when you experience one of your
              senses through another. Like hearing music but seeing shapes
              inspires new creative processes while celebrating neurodiversity.
              Tropical vibes is a mainstay for summer stories this collection is
              the evolution of it for autumn winter season.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectFour;
