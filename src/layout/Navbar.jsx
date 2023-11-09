// import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

import logo from "../assets/logo.png";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const routing = (
    <>
      <Link
        to="/"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Product
      </Link>
      <Link
        to="/destination"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Destination
      </Link>
      <Link
        to="/login"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Login
      </Link>

      <button className="text-white px-5 py-2 rounded-md bg-secondary    ">
        Logout
      </button>
    </>
  );

  return (
    <div className="">
      {/* single nav */}
      <div className="  shadow-sm  xl:hidden lg:hidden md:block sm:block top-0  fixed  left-0 right-0 z-50 ">
        <MobileNavbar />
      </div>
      {/* main navbar */}
      <div className="hidden sm:hidden md:hidden lg:block xl:block bg-white">
        <nav className="  py-4 px-2 flex justify-between   shadow-md z-10 w-[95%] mx-auto">
          <div className=" flex justify-center items-center ">
            <div className="w-[200px] h-[50px]">
              <img src={logo} alt="" />
            </div>
          </div>
          <div>
            <div className="container ">
              <div className="hidden md:flex space-x-4">{routing}</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
