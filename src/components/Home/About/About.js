import React from "react";
import "../../../style/style.css";
const About = () => {
  return (
    <div className="bg-[#000000] pb-6">
      {/* <div className="h-24 w-[1px] flex justify-center items-center mx-auto mt-[-50px] bg-white"></div> */}
      <div className="">
        <h2 className="textFormate text-xs text-[#757579] pt-12">ABOUT ME</h2>
        <p className="text-center w-2/4 text-white font-semibold text-xl mt-8 mx-auto">
          “The long story short is that I'm just a guy lucky enough to pick up a
          camera. How that went down is quite a tale, and the fact that I get to
          do what I love every day is something that I'll always cherish and be
          forever grateful for.”
        </p>

        <button className="uppercase text-white text-sm border rounded-full py-2 px-6 border-[#bb47fd] mt-8">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
