import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products(){
  var products = [
    {title: "Arqitel", description: "", live: true , case: false},
    {title: "Cula", description: "", live: true , case: false},
    {title: "TTR", description: "", live: true , case: false},
    {title: "Maniv", description: "", live: true , case: false},
    {title: "YIR", description: "", live: true , case: false},
    {title: "Yahoo!", description: "", live: true , case: true},
    {title: "Rainfall", description: "", live: true , case: true},
    {title: "Jungle", description: "", live: true , case: true},
    {title: "Silvr", description: "", live: true , case: false},
    {title: "Remind", description: "", live: true , case: true},
    {title: "Summon", description: "", live: true , case: true},
    {title: "Magic", description: "", live: true , case: true},
    {title: "RocketChat", description: "", live: true , case: false},
    {title: "Haufe", description: "", live: true , case: false},
    {title: "YIR 2022", description: "", live: true , case: false},
    {title: "Weglot", description: "", live: true , case: false},
    {title: "Candid", description: "", live: true , case: false},
    {title: "Showcase", description: "", live: true , case: false}
  ];
  
  let material =[
       {video:"https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-2000.webp"},
      {video:"https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png"},
      {video:"https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299ec9a478d08095a0122_Rainfall%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/Maniv-Compressed.mp4",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201-p-1600.png"},
      {video:"https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/yahoo.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299cbb5dc5fd8b2972010_Yahoo%20bg.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/rainfall.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299ec9a478d08095a0122_Rainfall%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/jungle-4-3-.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/63ede953b6b5f3582560753a_Work%20Background-p-2000.jpg"},
      {video:"https://cdn.refokus.com/website/2022/videos/Silvr.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/64868917c44436f6a7595e4f_Work%20Background%20(1)-p-2000.jpg"},
      {video:"https://cdn.refokus.com/website/2022/videos/remind.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2191211c3ebc67e4b7_Remind%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/summon.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299c0532977f3221f06f5_Summon%20bg-p-2000.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/637e6790db842e13a0e0aa51_Work-Background-p-2000.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/rocketchat.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299e14c14ec42d53e6614_RocketChat%20bg.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/haufe.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2b9a478df1ef5a0435_Haufe.de%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/yearinreview.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299a728ba3624405c1f46_Year%20in%20Review%202022%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/2022/videos/weglot.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299d5545a912e9e4a9cb4_Weglot%20for%20Germany%20bg-p-1600.png"},
      {video:"https://cdn.refokus.com/website/Candid/Candid%20Health%204_3_H.264.webm",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/64b7dbf5f12bc6fafbfb90fa_Candid%20Work%20Background.jpg"},
      {video:"https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4",background:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/6352999803e7fe5651137f1e_Showcase%20Website%20bg-p-1600.png"}
    ]


 const [pos, setPos] = useState(0);
 const mover = (val) => {
  setPos(val*23)
 }

  return (
    <div className='relative mt-5 '>
        {products.map((val, index) => ( 
        <Product mover={mover} index={index} key={index} val={val} background={material[index].background} />))}
        <div className=" w-full h-full hidden sm:block  absolute top-0 pointer-events-none">
            <motion.div initial={{y:pos, x:"30%"}} animate={{y:pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:.6}} className=" rounded-xl w-[30rem] h-[23rem] absolute left-32 overflow-hidden ml-20">
              {material.map((elem,key)=>(
                   <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} key={key} animate={{y:-pos+'rem'}} className="w-full  h-full ">
                    <video muted autoPlay loop className='w-full h-full ' src={elem.video}></video>
                   </motion.div> 
              ))}
              
             </motion.div>
        </div>
    </div>
  )
}

export default Products