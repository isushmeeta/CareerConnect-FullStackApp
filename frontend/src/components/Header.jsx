import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    //background
    <header className="bg-orange-500 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {/* Text color white */}
          <h1 className="text-white font-bold text-xl">CareerConnect</h1>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            {/* White text + border, lighter pink on hover */}
            <a href="#" className="text-white font-semibold border-b-2 border-white hover:text-pink-200">Home</a>
            <a href="#" className="text-white hover:text-gray-200">Company reviews</a>
            <a href="#" className="text-white hover:text-gray-200">Find salaries</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          {/* White text, lighter pink on hover */}
          <a href="#" className="text-white font-semibold hover:text-orange-200">Sign in</a>
          <span className="hidden md:inline border-l h-4 border-white" />
          <Link to="/post-job" className="text-white hover:text-orange-200">Employers / Post Job</Link>
        </div>
      </div>
    </header>
  );
}

