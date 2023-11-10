import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaOutdent } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routing = (
    <>
      <Link
        to="/"
        className="block  px-4 py-2 font-semibold text-secondary hover:text-teal-500 rounded "
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block  px-4 py-2 font-semibold text-secondary hover:text-teal-500 rounded "
      >
        About
      </Link>
      <Link
        to="/destination"
        className="block  px-4 py-2 font-semibold text-secondary hover:text-teal-500 rounded "
      >
        Destination
      </Link>
      <Link
        to="/login"
        className="block  px-4 py-2 font-semibold text-secondary hover:text-teal-500 rounded "
      >
        Login
      </Link>
    </>
  );
  return (
    <div className=" bg-white  sticky   p-4 xl:mb-0 lg:mb-0  shadow-md z-10 lg:p-5 xl:p-5 ">
      <div className="flex justify-between    ">
        <button
          onClick={toggleMenu}
          className=" text-gray-900 bg-white focus:outline-none md:block lg:hidden xl:hidden flex"
        >
          {isMenuOpen ? (
            <HiMiniXMark className=" h-6 w-6   ml-4   " />
          ) : (
            <div className="">
              <FaOutdent className=" h-6 w-6   ml-4" />
            </div>
          )}
        </button>

        <button className="text-lg sm:block md:block text-secondary  xl:hidden border bg-white font-semibold  px-6 py-2 rounded-md ml:0 lg:hidden ">
          Tourist Place
        </button>
      </div>
      {/* Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:block xl:block  `}>
        {/* Menu Content */}
        <div className=" scroll-m-3 ">
          <ul className="space-y-2 ">
            <li className="">{routing}</li>

            {/* Add more menu items here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
