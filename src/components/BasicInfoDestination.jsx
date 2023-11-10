import React from "react";

const BasicInfoDestination = () => {
  return (
    <div className="mx-auto w-[90%]">
      <p className="text-3xl font-bold text-primary mb-3">Basic Information</p>
      <div className="w-[600px] bg-gray-100 p-5">
        <p className="flex justify-between p-2 border-b-2 border-gray-400 ">
          <span className="text-gray-500 font-semibold text-sm">Country</span>
          <span className="text-primary font-semibold text-lg">Bangladesh</span>
        </p>
        <p className="flex justify-between p-2 border-b-2 border-gray-400 ">
          <span className="text-gray-500 font-semibold text-sm">Language</span>
          <span className="text-primary font-semibold text-lg">Bangla</span>
        </p>
        <p className="flex justify-between p-2 border-b-2 border-gray-400 ">
          <span className="text-gray-500 font-semibold text-sm">Currency</span>
          <span className="text-primary font-semibold text-lg">Taka</span>
        </p>
        <p className="flex justify-between p-2 border-b-2 border-gray-400 ">
          <span className="text-gray-500 font-semibold text-sm">Area</span>
          <span className="text-primary font-semibold text-lg">147570</span>
        </p>
        <p className="flex justify-between p-2 border-b-2 border-gray-400 ">
          <span className="text-gray-500 font-semibold text-sm">People</span>
          <span className="text-primary font-semibold text-lg">18000000</span>
        </p>
      </div>
    </div>
  );
};

export default BasicInfoDestination;
