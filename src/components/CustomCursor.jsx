import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      document.body.style.cursor = "auto";
    };
  });   

  const spotlightRadius = Math.min(screenSize.width, screenSize.height) * 0.66;
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Soft background light effect */}
      <div
        className="absolute inset-0"
        style={{
          background: isVisible
            ? `radial-gradient(
                circle ${spotlightRadius}px at ${position.x}px ${position.y}px,
                rgba(255, 255, 255, 0.15) 0%,
                rgba(255, 255, 255, 0.1) 35%,
                rgba(255, 255, 255, 0.05) 60%,
                rgba(255, 255, 255, 0) 80%
              )`
            : "transparent",
          transition: "background 150ms ease-out",
        }}
      />
      {/* Outer white circle */}
      <div
        className={`absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full 
          border-2 border-white/50 transition-opacity duration-300 ease-out
          ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />
      {/* Inner cursor dot */}
      <div
        className={`absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full 
          bg-white transition-opacity duration-300 ease-out
          ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
