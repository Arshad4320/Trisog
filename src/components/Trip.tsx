import img3 from "../assets/img3.jpg";
import { FaCheck } from "react-icons/fa";
const Trip = () => {
  return (
    <div className="flex justify-center mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="w-[400px] h-[400px]">
          <img className="w-full h-full rounded-lg" src={img3} alt="" />
        </div>
        <div className="w-[320px] mx-5">
          <p className="text-secondary italic text-xl">Why Choose Use</p>
          <h1 className="text-primary text-4xl font-bold">
            Plan Your Trip With Trisog
          </h1>
          <p className="w-[350px] text-lg mt-3 text-gray-500 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            repellat omnis aperiam nihil consequuntur.
          </p>

          <div className="grid grid-cols-2 mt-3">
            <div className="flex font-semibold text-primary text-lg">
              <FaCheck className="mt-1 mr-1" />
              <span>Travel Plan</span>
            </div>
            <div className="flex font-semibold text-primary text-lg">
              <FaCheck className="mt-1 mr-1" />
              <span>Travel Plan</span>
            </div>
            <div className="flex font-semibold text-primary text-lg">
              <FaCheck className="mt-1 mr-1" />
              <span>Travel Plan</span>
            </div>
            <div className="flex font-semibold text-primary text-lg">
              <FaCheck className="mt-1 mr-1" />
              <span>Travel Plan</span>
            </div>
          </div>
          <button className="border-2 border-secondary text-secondary text-xl px-5 mt-5 hover:bg-secondary hover:text-white hover:border-0 py-3 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trip;
