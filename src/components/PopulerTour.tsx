import img2 from "../assets/gallery1.jpg";
import img3 from "../assets/gallery2.jpg";
import img4 from "../assets/gallery3.jpg";
import img5 from "../assets/gallery4.jpg";

const PopulerTour = () => {
  return (
    <div className="py-16">
      <div className=" w-[90%] mx-auto ">
        <div className="mb-7 text-primary ">
          <p className="text-5xl   font-bold">Populer Tours In Uk</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
          <div className="w-72 mb-7">
            <img className="w-72 h-64 rounded-t-lg" src={img2} alt="" />

            <div className="bg-white rounded-b-lg  p-4">
              <span className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet.
              </span>
              <p className="text-xl text-primary font-bold ">
                Lorem ipsum dolor sit amet consectetur .
              </p>
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
                <span className="text-primary text-xl italic">$520</span>
              </div>
            </div>
          </div>

          <div className="w-72 mb-7">
            <img className="w-72 h-64 rounded-t-lg" src={img3} alt="" />

            <div className="bg-white rounded-b-lg  p-4">
              <span className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet.
              </span>
              <p className="text-xl text-primary font-bold ">
                Lorem ipsum dolor sit amet consectetur .
              </p>
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
                <span className="text-primary text-xl italic">$520</span>
              </div>
            </div>
          </div>

          <div className="w-72 mb-7">
            <img className="w-72 h-64 rounded-t-lg" src={img4} alt="" />

            <div className="bg-white rounded-b-lg  p-4">
              <span className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet.
              </span>
              <p className="text-xl text-primary font-bold ">
                Lorem ipsum dolor sit amet consectetur .
              </p>
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
                <span className="text-primary text-xl italic">$520</span>
              </div>
            </div>
          </div>

          <div className="w-72 mb-7">
            <img className="w-72 h-64 rounded-t-lg" src={img5} alt="" />

            <div className="bg-white rounded-b-lg  p-4">
              <span className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet.
              </span>
              <p className="text-xl text-primary font-bold ">
                Lorem ipsum dolor sit amet consectetur .
              </p>
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
                <span className="text-primary text-xl italic">$520</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerTour;
