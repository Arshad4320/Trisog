import React from "react";
import img from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";
const TravelGuid = () => {
  return (
    <div className="w-[100%] md:w-[95%] xl:w-[90%] lg:w-[90%] mx-auto p-16">
      <div className="mb-7   text-center ">
        <span className=" italic text-lg text-secondary">Updates</span>
        <p className="text-5xl text-primary  font-bold">Latest Travel Guid</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:flex gap-5 mb-5">
          <div className="w-40 h-40 ">
            <img className="w-full h-full rounded-lg" src={img} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <span className="text-gray-500 font-semibold">
                July 13 2023 .Admin
              </span>
              <p className="lg:w-[350px] font-bold text-primary text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nisi inventore !
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 mb-5">
          <div className="w-40 h-40 ">
            <img className="w-full h-full rounded-lg" src={img2} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <span className="text-gray-500 font-semibold">
                July 13 2023 .Admin
              </span>
              <p className="lg:w-[350px] font-bold text-primary text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nisi inventore !
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mb-5">
          <div className="w-40 h-40 ">
            <img className="w-full h-full rounded-lg" src={img2} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <span className="text-gray-500 font-semibold">
                July 13 2023 .Admin
              </span>
              <p className="lg:w-[350px] font-bold text-primary text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nisi inventore !
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mb-5">
          <div className="w-40 h-40 ">
            <img className="w-full h-full rounded-lg" src={img} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <span className="text-gray-500 font-semibold">
                July 13 2023 .Admin
              </span>
              <p className="lg:w-[350px] font-bold text-primary text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nisi inventore !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuid;
