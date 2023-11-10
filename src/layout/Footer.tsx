// Footer.js

import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800  p-16 pb-0">
      <div className="container grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-center  w-[90%] mx-auto">
        <div className="text-warning text-lg mb-5 ">
          <img className="w-48 h-24" src={logo} alt="" />
          <p>Call :0178432015</p>
          <p>Uttora 10/NO sector, house NO-35</p>
        </div>

        <div className="text-warning text-lg mb-5">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Travel Guid</p>
          <p>Data Policy</p>
        </div>

        <div className="text-warning text-lg mb-5">
          <p>New York city</p>
          <p>Dubai</p>
          <p>Franc</p>
          <p>Dhaka</p>
        </div>
        <div className="text-warning text-lg mb-5">
          <p>New York city</p>
          <p>Dubai</p>
          <p>Franc</p>
          <p>Dhaka</p>
        </div>
      </div>
      <div className="container mx-auto text-center p-3">
        <p className="text-sm text-white">
          &copy; 2023 Arshad Ullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
