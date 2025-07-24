import React from "react";
import { FiSearch, FiMapPin, FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="mt-16 flex flex-col items-center px-4">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row shadow-md rounded-lg overflow-hidden w-full max-w-4xl mb-10">
        <div className="flex items-center p-4 w-full md:w-1/2 border-b md:border-b-0 md:border-r">
          <FiSearch className="text-orange-400 mr-2" />
          <input
            type="text"
            placeholder="Job title..."
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center p-4 w-full md:w-1/2">
          <FiMapPin className="text-orange-400 mr-2" />
          <input
            type="text"
            placeholder="City..."
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Search Button */}
      <button className="bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-orange-800 mb-6">
        Search
      </button>

      {/* Branding & CTA */}
      <img
        src="logo.png"
        alt="Career Connect"
        className="w-40 mb-4"
      />
      <h1 className="text-xl md:text-2xl font-semibold text-orange-800 mb-2">
        Find your desired job here
      </h1>
      <p className="text-orange-600 text-center mb-6">
        Create an account or sign in to see your personalized job recommendations.
      </p>
      <button className="flex items-center bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-orange-800 transition mb-4">
        Get Started <FiArrowRight className="ml-2" />
      </button>
      <p className="text-sm text-orange-700 underline cursor-pointer hover:text-orange-800">
        Post your resume
      </p>
    </div>
  );
}
