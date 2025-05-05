// External libraries
import { useRef } from "react";
import { motion } from "framer-motion";

// Styles
// import "../App.css";

// Components
import { Images } from "../../components/Images";
import CustomCursor from "../../components/CustomCursor";
import Footer from "../../components/Footer";
import SplashScreen from "../../components/SplashScreen";
import SlideArrowButton from "../../components/Button";
import Navbar from "../../components/Navbar";

// Sections
import { About } from "../../sections/About";
import { Services } from "../../sections/Services";
import Illustrations from "../../sections/Illustrations";
import PinkSectionCarousel from "../../sections/PinkSectionCarousel";
import BigThreeImagesBandW from "../../sections/BigThreeImagesBandW";
import BigFourImages from "../../sections/BigFourImages";
import SketchSlider from "../../sections/SketchSlider";

// Assets
import backgroundVideo from "../../assets/video.mp4";
import BigLogo from "../../assets/final-Big-logo.svg";
import SmallLogo from "../../assets/final-small-logo.svg";
import MileyCollection from "../../assets/MILEY COLLECTION.png";
import customOrderBelowtext from "../../assets/cutomOrderBelowText.png";
import illustrationAboveText from "../../assets/illustration-above-text.svg";
import projectText from "../../assets/projects-text.svg";
const Home = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to a specific section

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        backgroundImage: `
            linear-gradient(to right, rgba(233, 0, 116, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(233, 0, 116, 0.25) 1px, transparent 1px)`,
        backgroundSize: "200px 200px",
        "@media (min-width: 768px)": {
          backgroundSize: "400px 400px",
        },
        backgroundPosition: "center center",
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        overflowX: "hidden",
      }}
      className="min-h-screen w-full overflow-y-clip bg-center bg-100% overflow-x-hidden mx-auto"
    >
      <SplashScreen />
      <CustomCursor></CustomCursor>
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-6 md:py-6 md:px-6">
        <img src={SmallLogo} alt="small logo" />
        <div  onClick={() => scrollToSection(contactRef)}>
        <SlideArrowButton  />
        </div>
      </header>
      {/* Main Section */}
      <main className="">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mx-auto mt-[-20px] w-[250px] md:w-[500px]"
        >
          <img src={BigLogo} alt="big logo" />
        </motion.div>

        {/* Images Component */}
        <div className="">
          <Images />
        </div>
      </main>
      {/* Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        workRef={workRef}
        contactRef={contactRef}
      />
      {/* Decorative SVG */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.0 }}
        className="flex justify-center py-6 top-[700px] mx-auto -translate-x-30 md:-translate-x-0"
      >
        <svg
          width="100"
          height="200"
          viewBox="0 0 47 277"
          className="md:h-[277px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5824 1.49989C1.29637 28.5 -4.96547 65.8406 13.5825 94.6353C19.5186 103.851 50.9011 125.266 43.5358 138.791C34.781 154.867 8.17583 153.151 31.1475 171.972C34.3473 174.593 45.9829 182.563 45.7163 187.568C45.4324 192.898 31.7637 197.653 28.0366 201.003C22.8322 205.68 27.885 215.234 30.988 219.543C38.1305 229.46 35.85 234.502 29.3572 243.265C22.1465 252.998 25.2482 259.155 27.524 269.7C28.3197 273.387 28.7391 276.769 32.4029 272.721C33.837 271.136 46.0778 260.854 42 264.5C38.6154 267.527 33.2938 273.564 29.907 275.716C28.056 276.892 21.5 269 19.2959 266.114C18.0636 264.5 13.8745 259.429 13.5 257.5"
            stroke="#E90074"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.0 }}
        className=" text-center font-[Poppins] "
        ref={aboutRef}
      >
        <About></About>
      </motion.div>
      <br></br>
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.0 }}
        className=" flex justify-center translate-x-4 py-6 top-[700px] mx-auto"
      >
        <svg
          width="101"
          height="292"
          viewBox="0 0 101 292"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.4999 1.50001C18.4999 38.5 47.8097 104.397 73.4467 137.011C82.0768 147.99 99.6457 157.477 99.8637 135.405C100.066 114.901 75.3831 95.0522 54.8065 95.6707C23.9279 96.5988 11.4598 127.176 9.40112 153.481C6.2162 194.177 24.0101 244.885 32.4122 285.158M32.4122 285.158C34.1237 293.362 70.2279 229.296 59.2662 243.587C51.5292 253.674 36.6355 273.374 32.4122 285.158ZM32.4122 285.158C29.3711 293.644 35.044 291.657 32.4122 285.158ZM32.4122 285.158C28.1349 274.597 10.8586 259.295 1.02213 252.855"
            stroke="#E90074"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </motion.div>
      <br></br>
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.0 }}
        ref={servicesRef}
        className=""
      >
        <span className="mx-[150px] md:mx-[699px] text-center text-[20px]">
          [Services]
        </span>

        <Services></Services>

        <img
          className="hidden md:block md:translate-x-[200px] "
          src={customOrderBelowtext}
          alt="service below text"
        />
        <img
          src={illustrationAboveText}
          alt="illustration-above-text"
          className="block md:hidden ml-8"
        />
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.0 }}
          className=""
        >
          <Illustrations></Illustrations>
        </motion.div>
      </motion.div>
      {/* Decorative SVG */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.0 }}
        className=" flex flex-col items-center   top-[600px] gap-5 "
      >
        <svg
          width="154"
          height="236"
          className="translate-x-19"
          viewBox="0 0 154 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7498 17.7257C24.4896 9.01698 35.8471 6.3938 45.4443 4.77065C57.0589 2.80578 68.9355 2.54701 80.6399 3.79075C92.4017 5.03952 104.009 7.9416 114.999 12.3387C120.007 14.3437 125.043 16.5826 129.56 19.5701C133.37 22.0902 137.207 25.462 138.807 29.8918C142.55 40.2513 132.973 48.8395 124.706 53.0054C114.61 58.0934 103.1 59.4352 91.9449 59.4754C79.6213 59.5206 67.3701 57.8873 55.0565 57.6511C48.7075 57.528 42.3509 57.802 36.0718 58.7995C30.8488 59.6286 25.6806 60.9804 20.9644 63.4428C16.6751 65.6815 12.7003 69.0006 10.5007 73.4077C8.15637 78.1063 7.94426 83.4758 9.41479 88.481C12.4582 98.8304 21.1767 106.579 30.5317 111.225C51.9981 121.891 76.4081 117.921 98.7758 112.798C104.928 111.388 111.057 109.821 117.256 108.622C122.909 107.529 128.901 106.848 134.533 108.411C142.827 110.71 147.885 118.067 149.413 126.291C151.006 134.854 148.592 143.595 143.142 150.309C136.75 158.181 127.507 163.151 117.96 166.05C95.1555 172.978 70.4409 168.571 47.9134 176.953C38.2813 180.536 29.0137 186.375 23.3612 195.217C18.3004 203.134 16.1583 213.265 18.4128 222.479C19.5213 227.009 21.7783 230.755 24.9416 234.117C26.5819 235.858 29.1934 233.225 27.5555 231.486C21.2989 224.841 20.5949 214.509 23.0167 206.114C25.8229 196.388 32.9335 189.109 41.6369 184.352C62.956 172.701 88.2872 176.473 111.329 171.912C130.244 168.169 151.406 156.528 153.792 135.258C154.751 126.728 152.397 117.484 146.555 111.084C143.371 107.597 139.147 105.228 134.568 104.18C128.646 102.825 122.522 103.479 116.622 104.607C103.966 107.022 91.5954 110.735 78.8423 112.677C67.5848 114.391 55.9927 114.75 44.8476 112.097C34.8234 109.713 24.7868 104.833 18.2106 96.6194C15.0523 92.6746 12.6205 87.6794 12.4857 82.5411C12.3583 77.6918 14.4879 73.3952 18.0582 70.2092C21.6434 67.0106 26.2923 65.1187 30.8712 63.9026C36.8882 62.3071 43.1374 61.7015 49.3416 61.5457C62.0022 61.2291 74.5955 62.8825 87.2386 63.1714C98.6235 63.4327 110.38 62.6437 121.111 58.513C130.354 54.9551 141.029 48.1912 142.845 37.5176C144.657 26.8691 136.218 19.1453 127.752 14.5372C117.531 8.97428 106.123 5.20031 94.7761 2.82337C83.1316 0.386136 71.1626 -0.498285 59.2909 0.268063C53.4487 0.644955 47.6214 1.40877 41.8816 2.56708C36.8383 3.58469 31.9398 5.02452 27.3759 7.44668C23.2763 9.62261 19.6636 12.8311 17.3167 16.8739C16.77 17.8186 18.1631 18.6152 18.7498 17.7257Z"
            fill="#E90074"
          />
          <path
            d="M26.4405 234.781C28.7099 232.085 30.8595 229.424 33.7807 227.399C35.1988 226.416 36.6893 225.54 38.2647 224.833C39.875 224.112 41.7201 223.808 43.0733 222.627C43.8972 221.909 43.4777 220.348 42.4166 220.127C40.4492 219.715 38.5194 220.678 36.7692 221.499C34.9666 222.343 33.2588 223.389 31.6859 224.612C28.6525 226.972 25.8263 229.952 24.3483 233.555C23.8714 234.716 25.659 235.708 26.4405 234.781Z"
            fill="#E90074"
          />
          <path
            d="M25.413 234.37C24.5467 232.194 22.4968 230.27 20.8915 228.619C19.1088 226.785 17.2189 225.101 15.2091 223.523C13.2417 221.981 11.2143 220.528 9.09466 219.207C6.92256 217.852 4.56322 216.259 1.99913 215.847C0.618471 215.624 -0.767189 217.302 0.496128 218.445C2.28125 220.064 4.53323 221.033 6.59299 222.242C8.72515 223.493 10.8074 224.85 12.8147 226.295C14.7596 227.694 16.6546 229.189 18.4896 230.732C19.4134 231.511 20.3123 232.318 21.2261 233.109C22.1299 233.89 22.9961 234.858 24.0547 235.421C24.6939 235.762 25.7326 235.177 25.413 234.37Z"
            fill="#E90074"
          />
        </svg>

        <span className=" text-[20px] -translate-x-12 mb-10">[Work]</span>
      </motion.div>
      {/* pink section */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.0 }}
        className="relative bg-pink-500 min-h-[120vh] w-full rounded-t-[150px] md:rounded-t-[350px] overflow-hidden mt-70"
      >
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="mt-32">
            {/* Title Section */}
            <div className="flex flex-col md:flex-row md:items-center translate-x-0 md:translate-x-10 gap-3 md:gap-5 mb-8 md:mb-12">
              <div className="bg-white w-3 h-4 mr-2 md:mr-0 md:w-5 md:h-5"></div>
              <img
                src={MileyCollection}
                alt="mileycollection"
                className="w-[70%] md:w-auto mx-5 mt-[-40px] md:mt-[-0px] md:mx-0"
              />
            </div>
            <div className="flex  items-center gap-5 m-44">
              <p className="text-xs hidden md:block md:translate-x-[550px] md:text-4xl text-left tracking-none font-thin subpixel-antialiased leading-none text-white [word-spacing:10px]">
                From her days as a Disney
                <br /> superstar to the fearless rebel <br />
                breaking societal norms, this
                <br /> collection captures the nostalgic <br />
                echoes of her evolution
              </p>
            </div>
            <div className="flex flex-col  md:hidden items-center gap-5 -translate-y-20">
              <p className="text-xl flex flex-col [word-spacing:20px] ">
                From her days as a Disney superstar to the fearless rebel
                breaking societal norms, this collection captures the nostalgic
                echoes of her evolution
              </p>
            </div>

            {/* Carousel Section */}
            <div className=" mx-auto bg-pink-900 p-10 w-[400px] md:w-full  -translate-x-[145px] rounded-md md:rounded-none md:-translate-x-0">
              <PinkSectionCarousel />
            </div>

            {/* Images Section */}
            <div className="w-screen -mx-[50vw] left-[50%] relative md:mt-72 translate-y-24">
              <BigThreeImagesBandW />
            </div>
          </div>
        </div>
      </motion.div>
      <div>
        <div className=" mt-40">
          <div className="flex flex-row gap-4">
            <div className="w-6 h-5 ml-4 bg-white"></div>
            <img
              src={projectText}
              className="-translate-y-5"
              alt="projectText"
              ref={workRef}
            />
          </div>
          <BigFourImages />
        </div>
        <div className="mt-40">
          <SketchSlider />
        </div>
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
