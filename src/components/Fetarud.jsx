import React from "react";
import img from "../assets/img4.jpg";
import img3 from "../assets/img6.jpg";
import img4 from "../assets/img7.jpg";

const Fetarud = () => {
  return (
    <div className=" mt-24 bg-primary p-14">
      <div className=" w-[90%] mx-auto ">
        <div className="mb-10 text-white text-center ">
          <span className=" italic text-lg">Tours</span>
          <p className="text-4xl   font-bold">Featured Tours</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
          <div className="w-72 ">
            <img className="w-72 h-64 rounded-t-lg" src={img} alt="" />

            <div className="bg-white rounded-b-lg  p-4">
              <span className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet.
              </span>
              <p className="text-xl text-primary font-bold ">
                Lorem ipsum dolor sit amet consectetur .
              </p>
              <span className="text-lg text-gray-500 ">1856566 Travels</span>
              <div className="text-gray-500 flex justify-between shadow-md py-3 font-semibold">
                <span>
                  <span className="bg-warning py-1 rounded text-black px-2 mr-2">
                    * 4.8
                  </span>
                  15 Reviews
                </span>
                <span>7 Days</span>
              </div>
              <div className="flex justify-between font-semibold mt-3">
                <span className="text-gray-500">Starting From</span>
                <span className="text-primary text-lg">$520</span>
              </div>
            </div>
          </div>

          <div className="w-72 ">
            <img className="w-72 h-64 rounded-t-lg" src={img} alt="" />

            <div className="bg-white rounded-b-lg  p-4">
              <span className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet.
              </span>
              <p className="text-xl text-primary font-bold ">
                Lorem ipsum dolor sit amet consectetur .
              </p>
              <span className="text-lg text-gray-500 ">1856566 Travels</span>
              <div className="text-gray-500 flex justify-between shadow-md py-3 font-semibold">
                <span>
                  <span className="bg-warning py-1 rounded text-black px-2 mr-2">
                    * 4.8
                  </span>
                  15 Reviews
                </span>
                <span>7 Days</span>
              </div>
              <div className="flex justify-between font-semibold mt-3">
                <span className="text-gray-500">Starting From</span>
                <span className="text-primary text-lg">$520</span>
              </div>
            </div>
          </div>

          <div className="w-72 ">
            <img className="w-72 h-64 rounded-t-lg" src={img} alt="" />

            <div className="bg-white rounded-b-lg  p-4">
              <span className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet.
              </span>
              <p className="text-xl text-primary font-bold ">
                Lorem ipsum dolor sit amet consectetur .
              </p>
              <span className="text-lg text-gray-500 ">1856566 Travels</span>
              <div className="text-gray-500 flex justify-between shadow-md py-3 font-semibold">
                <span>
                  <span className="bg-warning py-1 rounded text-black px-2 mr-2">
                    * 4.8
                  </span>
                  15 Reviews
                </span>
                <span>7 Days</span>
              </div>
              <div className="flex justify-between font-semibold mt-3">
                <span className="text-gray-500">Starting From</span>
                <span className="text-primary text-lg">$520</span>
              </div>
            </div>
          </div>

          <div className="w-72 ">
            <img className="w-72 h-64 rounded-t-lg" src={img} alt="" />

            <div className="bg-white rounded-b-lg  p-4">
              <span className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet.
              </span>
              <p className="text-xl text-primary font-bold ">
                Lorem ipsum dolor sit amet consectetur .
              </p>
              <span className="text-lg text-gray-500 ">1856566 Travels</span>
              <div className="text-gray-500 flex justify-between shadow-md py-3 font-semibold">
                <span>
                  <span className="bg-warning py-1 rounded text-black px-2 mr-2">
                    * 4.8
                  </span>
                  15 Reviews
                </span>
                <span>7 Days</span>
              </div>
              <div className="flex justify-between font-semibold mt-3">
                <span className="text-gray-500">Starting From</span>
                <span className="text-primary text-lg">$520</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetarud;
