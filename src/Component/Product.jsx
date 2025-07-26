import React, { useState } from "react";
import Button from "./Button";


function Product({val, mover, index, background, video }){
  const [isHovered, setIsHovered] = useState(false);

 const handleMouseEnter = () => {
    setIsHovered(true);
 };

 const handleMouseLeave = () => {
    setIsHovered(false);
 };

  return (
    <div className="w-full py-2 text-white h-[23rem] 
    "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
     
      style={{
        backgroundImage: isHovered ? `url(${background})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    }
  >
      
      <div onMouseEnter={()=>{mover(index)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="dets-1/2 flex items-center gap-5">
             {val.live && <Button title="Live Projects"/>}
          {val.case && <Button title="Case Study"/>}
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Product