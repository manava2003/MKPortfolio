import "./App.css";

import { Images } from "./components/Images";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import CustomCursor from "./components/CustomCursor";
import { useRef } from "react";
import Illustrations from "./sections/Illustrations";
import { motion } from "framer-motion";

import PinkSectionCarousel from "./sections/PinkSectionCarousel";
import BigThreeImagesBandW from "./sections/BigThreeImagesBandW";
import BigFourImages from "./sections/BigFourImages";
import SketchSlider from "./sections/SketchSlider";
import backgroundVideo from "./assets/video.mp4";
import BigLogo from "./assets/Group 14.png";
import SmallLogo from "./assets/Group 15.png";
import Footer from "./components/Footer";
import MileyCollection from "./assets/MILEY COLLECTION.png";

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" bg-black  min-h-screen w-full bg-custom-image overflow-y-clip  bg-center bg-100% overflow-x-hidden">
      <CustomCursor></CustomCursor>
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-6">
        <img src={SmallLogo} alt="small logo" />
        <button className="flex items-center justify-center text-center rounded-md border-2 border-white text-white hover:bg-[#E90074] text-[16px] w-[160px] h-[57px] group overflow-hidden relative">
          <span className="absolute inset-0 bg-[#E90074] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10">Let's Talk!</span>
          <svg
            className="ml-2 relative z-10"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.20623 8.61111L9.58755 9L14 4.5L9.58755 0L9.20623 0.388889L12.965 4.22222H0V4.77778H12.965L9.20623 8.61111Z"
              fill="white"
            />
          </svg>
        </button>
      </header>

      {/* Main Section */}
      <main className="">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img src={BigLogo} alt="big logo" />
          {/* <svg
            width="627"
            height="339"
            viewBox="0 0 627 339"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M620.652 186.213H601.607V304.711H624.884C626.154 304.711 627 305.558 627 306.827V336.452C627 337.722 626.154 338.568 624.884 338.568H561.402C560.133 338.568 559.286 337.722 559.286 336.452V2.11605C559.286 0.846408 560.133 0 561.402 0H624.884C626.154 0 627 0.846408 627 2.11605V31.7408C627 33.0104 626.154 33.8568 624.884 33.8568H601.607V152.356H620.652C621.921 152.356 622.768 153.202 622.768 154.472V184.096C622.768 185.366 621.921 186.213 620.652 186.213Z"
              fill="#E90074"
            />
            <path
              d="M546.865 2.11605L552.789 336.452C552.789 338.145 551.943 338.568 550.673 338.568H512.584C511.315 338.568 510.468 338.145 510.468 336.452L509.622 243.346H500.735L499.888 336.452C499.888 338.145 499.042 338.568 497.772 338.568H459.683C458.414 338.568 457.567 338.145 457.567 336.452L463.492 2.11605C463.492 0.423203 464.339 0 465.608 0H544.748C546.018 0 546.865 0.423203 546.865 2.11605ZM502.004 38.0889L500.735 209.489H509.622L508.352 38.0889H502.004Z"
              fill="#E90074"
            />
            <path
              d="M455.253 67.7136V128.233C455.253 151.086 442.133 157.857 435.362 158.704V162.936C441.71 163.782 455.253 170.554 455.253 193.407V270.855C455.253 317.408 455.253 338.568 421.396 338.568H364.263C362.993 338.568 362.146 337.722 362.146 336.452V2.11605C362.146 0.846408 362.993 0 364.263 0H421.396C455.253 0 455.253 21.1605 455.253 67.7136ZM404.468 38.0889V141.775H412.932V38.0889H404.468ZM412.932 300.479V179.864H404.468V300.479H412.932Z"
              fill="#E90074"
            />
            <path
              d="M351.123 239.537H338.744V316.561H353.874C354.699 316.561 355.249 317.111 355.249 317.937V337.193C355.249 338.018 354.699 338.568 353.874 338.568H312.611C311.786 338.568 311.236 338.018 311.236 337.193V119.874C311.236 119.049 311.786 118.499 312.611 118.499H353.874C354.699 118.499 355.249 119.049 355.249 119.874V139.13C355.249 139.956 354.699 140.506 353.874 140.506H338.744V217.53H351.123C351.948 217.53 352.499 218.08 352.499 218.905V238.162C352.499 238.987 351.948 239.537 351.123 239.537Z"
              fill="white"
            />
            <path
              d="M303.161 119.874L307.013 337.193C307.013 338.293 306.462 338.568 305.637 338.568H280.879C280.054 338.568 279.504 338.293 279.504 337.193L278.954 276.674H273.177L272.627 337.193C272.627 338.293 272.077 338.568 271.251 338.568H246.493C245.668 338.568 245.118 338.293 245.118 337.193L248.969 119.874C248.969 118.774 249.519 118.499 250.345 118.499H301.786C302.611 118.499 303.161 118.774 303.161 119.874ZM274.002 143.257L273.177 254.667H278.954L278.128 143.257H274.002Z"
              fill="white"
            />
            <path
              d="M174.938 338.568H136.849C135.579 338.568 134.733 337.722 134.733 336.452V2.11605C134.733 0.846408 135.579 0 136.849 0H174.938C176.208 0 177.054 0.846408 177.054 2.11605V150.24H183.402L195.675 2.11605C195.675 0.846408 196.945 0 198.214 0H237.996C239.266 0 239.689 0.846408 239.689 2.11605L224.03 169.284L239.689 336.452C239.689 338.145 239.266 338.568 237.996 338.568H198.214C196.945 338.568 195.675 337.722 195.675 336.452L183.402 188.329H177.054V336.452C177.054 337.722 176.208 338.568 174.938 338.568Z"
              fill="#E90074"
            />
            <path
              d="M40.205 338.568H2.11605C0.84642 338.568 0 337.722 0 336.452V2.11605C0 0.846408 0.84642 0 2.11605 0H48.6692C49.9388 0 50.7852 0.423203 50.7852 2.11605L62.2119 165.052H64.328L75.3314 2.11605C75.3314 0.423203 76.1778 0 77.4475 0H124.001C125.27 0 126.117 0.846408 126.117 2.11605V336.452C126.117 337.722 125.27 338.568 124.001 338.568H85.9117C84.6421 338.568 83.7956 337.722 83.7956 336.452V152.356H81.6796L71.5225 336.452C71.5225 338.145 70.6761 338.568 69.4065 338.568H56.7102C55.4405 338.568 54.5941 338.145 54.5941 336.452L44.4371 152.356H42.321V336.452C42.321 337.722 41.4746 338.568 40.205 338.568Z"
              fill="#E90074"
            />
          </svg> */}
        </motion.div>

        {/* Images Component */}
        <div className="">
          <Images />
        </div>
      </main>

      {/* Navbar */}
      <div className="left-[477px] top-[550px] fixed z-50 ">
        <div className=" bg-[#2424248C] gap-[40px] rounded-[10px] font-[Poppins] p-5 backdrop-blur-md fixed  w-[477px] h-[40px] z-30 flex text-white justify-between items-center">
          {/* item1 */}
          <button className="flex items-center justify-center">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5646 0.5C14.3572 0.5 15 1.14279 15 1.93533V3.17188C15 3.96444 14.3572 4.60721 13.5646 4.60721H1.43538C0.642801 4.60721 0 3.96442 0 3.17188V1.93533C0 1.14278 0.642817 0.5 1.43538 0.5H13.5646ZM13.5646 5.94639C14.3572 5.94639 15 6.58919 15 7.38173V8.61827C15 9.41083 14.3572 10.0536 13.5646 10.0536H1.43538C0.642801 10.0536 0 9.41081 0 8.61827V7.38173C0 6.58917 0.642817 5.94639 1.43538 5.94639H13.5646ZM13.5646 11.3928C14.3572 11.3928 15 12.0356 15 12.8281V14.0647C15 14.8572 14.3572 15.5 13.5646 15.5H1.43538C0.642801 15.5 0 14.8572 0 14.0647V12.8281C0 12.0356 0.642817 11.3928 1.43538 11.3928H13.5646Z"
                fill="white"
              />
            </svg>

            <span className="ml-5">Menu</span>
          </button>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(servicesRef)}>Services</button>
          <button onClick={() => scrollToSection(workRef)}>Work</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </div>
      </div>

      {/* Decorative SVG */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.0 }}
        className=" flex justify-center py-6 top-[700px] mx-auto"
      >
        <svg
          width="47"
          height="277"
          viewBox="0 0 47 277"
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
        className=" flex justify-center py-6 top-[700px] mx-auto"
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
      >
        <Services></Services>

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
        className="relative bg-pink-500 min-h-[120vh] w-full rounded-t-[350px] overflow-hidden mt-70"
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
            <div className="flex items-center translate-x-10 gap-5 mb-12">
              <div className="bg-white w-5 h-5"></div>

              <img src={MileyCollection} alt="mileycollection" />
            </div>
            <div className="flex items-center gap-5 m-44">
              <p className="text-xs translate-x-[550px] md:text-4xl text-left tracking-none font-thin subpixel-antialiased leading-none text-white [word-spacing:10px]">
                From her days as a Disney
                <br /> superstar to the fearless rebel <br />
                breaking societal norms, this
                <br /> collection captures the nostalgic <br />
                echoes of her evolution
              </p>
            </div>

            {/* Carousel Section */}
            <div className="w-full  bg-pink-700 p-8 md:p-12 lg:p-24">
              <PinkSectionCarousel />
            </div>

            {/* Images Section */}
            <div className="w-screen -mx-[50vw] left-[50%] relative mt-72 translate-y-24">
              <BigThreeImagesBandW />
            </div>
          </div>
        </div>
      </motion.div>
      <div>
        <div className=" mt-40">
          <BigFourImages />
        </div>
        <div className=" mt-40">
          <SketchSlider />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
