import React from "react";
// import Navbar from "../components/Navbar";
import heroImg from "../assets/photo_hero.png";
import Countup from "../components/Countup";
import Heroteach from "../components/Heroteach";

const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-white-50 pt-5 md:ml-32 md:mr-28">
        {/* Hero Section */}
        <div className="container mx-auto my-12 grid-cols-1 gap-8 px-6 lg:grid lg:grid-cols-2 lg:px-12">
          {/* Left Section */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl xl:text-6xl">
              Take your education to the next level with <span className="font-extrabold text-green-700">E-Vidyalaya</span>
            </h1>
            <p className="mb-8 text-lg font-medium leading-relaxed text-gray-600 mt-11">
              Unlock the future of online learning. Discover the joy of learning, tailored to your pace and goals.
              Transform your future, one lesson at a time.
            </p>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <button className="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition">
                Get started now
              </button>
              <button className="flex items-center justify-center rounded-lg bg-gray-200 px-6 py-3 text-base font-medium text-gray-800 shadow-md hover:bg-gray-300 hover:shadow-lg transition" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
                Learn More
              </button>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              className="w-11/12 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              src={heroImg}
              alt="Hero section illustration"
            />

          </div>
        </div>
      </div>
      <Countup/>

      {/* Teachers Section */} 
      <Heroteach />
    </>
  );
};

export default Hero;
