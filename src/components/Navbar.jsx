import React from "react";

const Navbar = ({
  scrollToSection,
  aboutRef,
  servicesRef,
  workRef,
  contactRef,
}) => {
  return (
    <div className="left-[390px] top-[500px] fixed z-40  ">
      <div className="bg-[#2424248C] gap-[40px] rounded-[10px] font-[Poppins] p-5 backdrop-blur-md fixed w-[497px] h-[40px] z-30 flex text-white justify-between items-center">
        
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <button onClick={() => scrollToSection(servicesRef)}>Services</button>
        <button onClick={() => scrollToSection(workRef)}>Work</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
