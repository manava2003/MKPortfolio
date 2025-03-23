import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Only add event listeners if not mobile
    if (!isMobile) {
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseEnter = () => setIsVisible(true);
      const handleMouseLeave = () => setIsVisible(false);

      document.addEventListener("mousemove", updatePosition);
      document.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("resize", checkMobile);
      document.body.style.cursor = "none";

      return () => {
        document.removeEventListener("mousemove", updatePosition);
        document.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("resize", checkMobile);
        document.body.style.cursor = "auto";
      };
    } else {
      // Reset cursor style for mobile
      document.body.style.cursor = "auto";

      // Only listen for resize events on mobile
      window.addEventListener("resize", checkMobile);
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, [isMobile]); // Re-run effect when isMobile changes

  // Don't render anything if on mobile
  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
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
