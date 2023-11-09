// import React from "react";
// import img from "../assets/img4.jpg";
// import img3 from "../assets/img6.jpg";
// import img4 from "../assets/img7.jpg";
// const TopDestination = () => {
//   return (
//     <div>
//       <div className="w-[90%] mx-auto  mt-24 ">
//         <div className="mb-5 ">
//           <span className="text-secondary italic text-lg">Destination</span>
//           <p className="text-4xl text-primary  font-bold">Top Destination</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
//           <div className="">
//             <div className="w-72 h-64">
//               <img className="w-full h-full rounded-lg" src={img} alt="" />
//             </div>
//             <p className="text-xl text-primary font-bold mt-5">
//               United Kingdom
//             </p>
//             <span className="text-lg text-gray-500 ">1856566 Travels</span>
//           </div>

//           <div className="">
//             <div className="w-72 h-64">
//               <img className="w-full h-full rounded-lg" src={img4} alt="" />
//             </div>
//             <p className="text-xl text-primary font-bold mt-5">Turki</p>
//             <span className="text-lg text-gray-500 ">1856566 Travels</span>
//           </div>

//           <div className="">
//             <div className="w-72 h-64">
//               <img className="w-full h-full rounded-lg" src={img3} alt="" />
//             </div>
//             <p className="text-xl text-primary font-bold mt-5">Thailand</p>
//             <span className="text-lg text-gray-500 ">1856566 Travels</span>
//           </div>

//           <div className="">
//             <div className="w-72 h-64">
//               <img className="w-full h-full rounded-lg" src={img} alt="" />
//             </div>
//             <p className="text-xl text-primary font-bold mt-5">Franc</p>
//             <span className="text-lg text-gray-500 ">1856566 Travels</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopDestination;

import React from "react";
import img from "../assets/img4.jpg";
import img3 from "../assets/img6.jpg";
import img4 from "../assets/img7.jpg";

const TopDestination = () => {
  return (
    <div className="  p-14">
      <div className=" lg:w-[90%] mx-auto ">
        <div className="mb-10  ">
          <span className=" italic text-secondary text-lg">Destination</span>
          <p className="text-5xl text-primary  font-bold">Top Destination</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
          <div className="mb-3">
            <img className="w-72 h-80 rounded-t-lg" src={img} alt="" />
            <p className="text-xl text-primary font-bold mt-5">
              United Kingdom
            </p>
            <span className="text-lg text-gray-500 ">1856566 Travels</span>
          </div>

          <div className="mb-3">
            <img className="w-72 h-80 rounded-lg" src={img4} alt="" />
            <p className="text-xl text-primary font-bold mt-5">Turki</p>
            <span className="text-lg text-gray-500 ">1856566 Travels</span>
          </div>

          <div className="mb-3">
            <img className="w-72 h-80 rounded-lg" src={img3} alt="" />
            <p className="text-xl text-primary font-bold mt-5">Thailand</p>
            <span className="text-lg text-gray-500 ">1856566 Travels</span>
          </div>

          <div className="mb-3">
            <img className="w-72 h-80 rounded-lg" src={img4} alt="" />
            <p className="text-xl text-primary font-bold mt-5">Franc</p>
            <span className="text-lg text-gray-500 ">1856566 Travels</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
