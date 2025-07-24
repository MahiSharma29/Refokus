import React from "react";

function Marquee({imgurl}){
  return(
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imgurl.map((url, index) => <img key={index} src ={url} className="w-[6vw] flex-shrink-0"/> )}
      {imgurl.map((url, index) => <img key ={index} src ={url} className="w-[6vw] flex-shrink-0" /> )}
    </div>
  )
}

export default Marquee