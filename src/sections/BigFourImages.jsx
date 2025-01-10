import React from "react";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";
import frame4 from "../assets/Frame4.png";

const BigFourImages = () => {
  const images = [
    {
      src: frame1,
      title: "TROPICAL SENSATION",
      alt: "Tropical Sensation Image",
    },
    {
      src: frame2,
      title: "MANIAC BIKER JACKET",
      alt: "Maniac Biker Jacket Image",
    },
    {
      src: frame3,
      title: "URBAN STYLE",
      alt: "Urban Style Image",
    },
    {
      src: frame4,
      title: "STREET FASHION",
      alt: "Street Fashion Image",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col gap-16 max-w-6xl w-full">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <div className="relative aspect-[3/1] overflow-hidden rounded-lg mb-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h2 className="text-3xl font-bold tracking-normal text-white">
              {image.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigFourImages;
