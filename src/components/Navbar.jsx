import React from "react";

export const Navbar = () => {
  return (
    <div className=" bg-[#2424248C] gap-[40px] rounded-[10px] font-[Poppins] p-5 backdrop-blur-md fixed  w-[477px] h-[40px] z-30 flex text-white justify-between items-center">
      <button className="flex items-center justify-center ">
        <span>Menu</span>
      </button>
      <button>About</button>
      <button>Services</button>
      <button>Work</button>
      <button>Contact</button>
    </div>
  );
};
