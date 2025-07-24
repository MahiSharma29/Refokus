import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width, start, para, hover="false"}){
  const data =[
        {heading:"Up Next:News",secondheading:"Insights and behind the scenes"},
        {heading:"Get in Touch",secondheading:"Let's get to it,together"}
    ]
  return (
    <motion.div whileHover={{backgroundColor:hover==="true"&& "#7443ff", padding: "25px"}} className={` bg-zinc-800  p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
     <div className="w-full">
       <div className="w-full flex justify-betwen items-center">
         {start && <h3 className=''>{data[1].heading}</h3>}
        {!start && <h3 className=''>{data[0].heading}</h3>}
        <IoIosArrowRoundForward/>
      </div>
      {start && <h3 className='text-3xl font-medium mt-5'>{data[1].secondheading}</h3>}
{!start && <h3 className='text-3xl font-medium mt-5'>{data[0].secondheading}</h3>} 
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
          <p className="text-sm text-zinc-700 font-medium"></p>
        )
      }
      
     </div>
    </motion.div>
  )
}

export default Card