import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/piper.jpg";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="App Icon" className="w-12 h-12 rounded-lg" />
          <Link to="/" className="text-2xl font-bold text-gray-800 mx-3">
            Piper
          </Link>
        </div>
        <div>
          <Link to="/" className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Home
          </Link>
          <Link
            to="/download"
            className="text-gray-600 hover:text-gray-800 px-3 py-2"
          >
            Download
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
