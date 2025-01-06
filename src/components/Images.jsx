import React from 'react'
import image1 from '../assets/image 1.png'
import image2 from '../assets/image 3.png'
import image3 from '../assets/image 4.png'
export const Images = () => {
  return (
    <div className="flex justify-center group left-[-50px] relative ">
        {/* Left Image */}
        <img 
          src={image3} 
          className="w-[564px] h-[606px] relative top-[0px] left-[220px] transform transition-all duration-[300ms] group-hover:scale-110 group-hover:translate-x-[-200px] group-hover:rotate-[15deg]" 
        />
        
        {/* Center Image */}
        <img 
          src={image1} 
          className="w-[534px] h-[606px] top-[444px] left-[453px] transform transition-all duration-[300ms] group-hover:scale-110 z-10" 
        />
        
        {/* Right Image */}
        <img 
          src={image2} 
          className="w-[464px] h-[606px] top-[0px] left-[-320px] relative transform transition-all duration-[300ms] group-hover:scale-110 group-hover:translate-x-[220px] group-hover:rotate-[-9.84deg]" 
        />
      </div>
  )
}
