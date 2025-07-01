import React from "react";
// import bgVideo from "../assets/background.mp4"; // Adjust path as needed
import bgVideo from "../../assets/bannarVideoTwo.mp4"
const Test = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-white">
        {/* my file */}
        <div className=" text-center space-y-5 md:w-1/2 mx-auto ">
          <h1 className="text-3xl  md:text-5xl lg:text-6xl px-2 font-semibold leading-15 md:leading-17 lg:leading-20 font-Header">
            Retouch & clipping path service within
            <span className="text-myPrimary"> budget </span> and
            <span className="text-myPrimary"> time.</span>
          </h1>
          <p className="text-lg font-medium text-slate-300 px-2 text-justify">
            We’ll edit your product images so you can use them in any product
            listings, eCommerce sites, and promotional activities which boost
            your conversion rates faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;
