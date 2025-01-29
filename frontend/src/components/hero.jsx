import React from "react";
import backgroundImage from "../assets/school.jpg"; 

function HeroSection() {
  return (
    <div className="pt-16 mb-12">
      <div className="hero min-h-screen relative overflow-hidden rounded-lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mb-10"> 
            <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            <p className="mb-5 text-white">The High School is The Most Popular school.</p>
            <button className="btn text-sm text-white bg-purple-600 transition-all duration-700 hover:bg-purple-800 shadow">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
 