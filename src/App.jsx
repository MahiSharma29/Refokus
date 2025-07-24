import React from "react";
import Navbar from "./Component/Navbar";
import Work from "./Component/Work";
import Stripes from "./Component/Stripes";
import Products from "./Component/Products";
import Marquees from "./Component/Marquees";
import Cards from "./Component/Cards";
import Footer from "./Component/footer";
import LocomotiveScroll from "locomotive-scroll";

const App = ()=> {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className ="w-full bg-zinc-900 text-white  font-satoshi " >
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
    );
}

export default App;

