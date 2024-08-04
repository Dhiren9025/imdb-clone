// import React from "react";
import Logo from "../assets/clapperboard4.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center border-b-2 border-gray-300 py-4 pl-3">
      <img className="w-[55px] mr-4" src={Logo} alt="Logo" />
      <Link
        to="/"
        className="text-3xl font-bold tracking-wide hover:text-blue-600"
        
      >
        Movies
      </Link>
      <Link
        to="/watchlist"
        className="ml-4 text-3xl font-bold  hover:text-blue-600"
        
      >
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
