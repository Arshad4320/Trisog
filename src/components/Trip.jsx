import React from "react";
import img3 from "../assets/img3.jpg";
const Trip = () => {
  return (
    <div className="flex gap-16 w-70% mx-auto">
      <div className="w-[300px] h-[300px] ">
        <img className="w-full h-full rounded-lg" src={img3} alt="" />
      </div>
      <div className="w-[320px]">
        <p className="text-secondary italic text-xl">Why Choose Use</p>
        <h1 className="text-primary text-4xl font-bold">
          Plan Your Trip With Trisog
        </h1>
        <p className="w-[350px] text-lg mt-3 text-gray-500 font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          repellat omnis aperiam nihil consequuntur.
        </p>
      </div>
    </div>
  );
};

export default Trip;
