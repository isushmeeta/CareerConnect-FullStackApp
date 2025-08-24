import React from "react";
import { FiSearch, FiMapPin, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mt-16 flex flex-col items-center px-4 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row shadow-md rounded-lg overflow-hidden w-full max-w-4xl mb-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center p-4 w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
          <FiSearch className="text-orange-400 mr-2" />
          <input
            type="text"
            placeholder="Job title..."
            className="w-full outline-none bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        <div className="flex items-center p-4 w-full md:w-1/2">
          <FiMapPin className="text-orange-400 mr-2" />
          <input
            type="text"
            placeholder="City..."
            className="w-full outline-none bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
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
      <h1 className="text-xl md:text-2xl font-semibold text-orange-800 dark:text-orange-400 mb-2">
        Find your desired job here
      </h1>
      <p className="text-orange-600 dark:text-gray-300 text-center mb-6">
        Create an account or sign in to see your personalized job recommendations.
      </p>
      <Link
        to="/signup"
        className="flex items-center bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-orange-800 transition mb-4"
      >
        Get Started <FiArrowRight className="ml-2" />
      </Link>
      <p className="text-sm text-orange-700 dark:text-orange-300 underline cursor-pointer hover:text-orange-800 dark:hover:text-orange-400">
        <Link to="/resume">Post your resume</Link>
      </p>
    </div>
  );
}
