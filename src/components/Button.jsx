import React from "react";
import { ArrowRight } from "lucide-react";

export default function SlideArrowButton({
  text = "Let's talk",
  primaryColor = "#E91E63",
  className = "",
  contactRef,
  scrollToSection, // Destructure contactRef from props
  ...props
}) {
  return (
    <button
       // Use the contactRef here
      onClick={() => scrollToSection(contactRef)}
      className={`group relative border border-white px-3 py-2 md:px-8 md:py-4 text-xl font-extrathin transition-all duration-300 ease-in-out hover:border-transparent ${className}`}
      {...props}
    >
      <div
        className="absolute left-0 top-0 h-full w-0 rounded-md transition-all duration-300 ease-in-out group-hover:w-full"
        style={{ backgroundColor: primaryColor }}
      />
      <span className="relative z-10 flex items-center gap-2 text-white transition-all duration-300">
        {text}
        <ArrowRight size={20} className="font-light" />
      </span>
    </button>
  );
}