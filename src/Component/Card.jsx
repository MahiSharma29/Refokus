import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width, start, para, hover}){
  return (
    <div className={` bg-zinc-800 hover:${hover} p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
     <div className="w-full">
       <div className="w-full flex justify-betwen items-center">
        <h3>Up Next: Culture</h3>
        <IoIosArrowRoundForward/>
      </div>
      <h1 className="text-3xl font-medium mt-5">Get In Touch</h1>
     </div>
     <div className="down w-full">
      {
         start && (
          <>
           <h1 className="text-6xl font-semibold tracking-tight leading-none">Start a project</h1>
      <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">Contact Us</button>
          </>
         )
      }
      {
        para && (
          <p className="text-sm text-zinc-700 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        )
      }
      
     </div>
    </div>
  )
}

export default Card