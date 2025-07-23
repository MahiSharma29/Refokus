import React from "react";
import Product from "./Product";

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
  ]
  return (
    <div className="mt-32">
      {products.map((elem, index)=><Product val ={elem}/>)}
      
    </div>
  )
}

export default Products