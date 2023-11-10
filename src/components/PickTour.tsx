import { FaCity } from "react-icons/fa";

const PickTour = () => {
  return (
    <div className="">
      <div className="text-center mt-14">
        <span className="text-secondary text-xl italic bg-white font-semibold ">
          Brows By Category
        </span>
        <h1 className="text-primary font-bold text-4xl ">Pick A Tour Type</h1>
      </div>
      {/* tour type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 w-[90%] mx-auto  mt-14">
        <div className="flex justify-center items-center hover:shadow-2xl  rounded-md p-5">
          <div className=" ">
            <FaCity className=" bg-warning w-20 h-20 rounded-full flex justify-center items-center p-5" />
            <p className="text-primary font-bold text-xl text-center">
              Tour City
            </p>
            <span className="text-secondary">10 hours+</span>
          </div>
        </div>
        <div className="flex justify-center items-center hover:shadow-2xl  rounded-md p-5">
          <div className=" ">
            <FaCity className=" bg-warning w-20 h-20 rounded-full flex justify-center items-center p-5" />
            <p className="text-primary font-bold text-xl text-center">
              Beaches
            </p>
            <span className="text-secondary">10 hours+</span>
          </div>
        </div>

        <div className="flex justify-center items-center hover:shadow-2xl  rounded-md p-5">
          <div className=" ">
            <FaCity className=" bg-warning w-20 h-20 rounded-full flex justify-center items-center p-5" />
            <p className="text-primary font-bold text-xl text-center">
              Boat Tour
            </p>
            <span className="text-secondary">10 hours+</span>
          </div>
        </div>

        <div className="flex justify-center items-center hover:shadow-2xl  rounded-md p-5">
          <div className=" ">
            <FaCity className=" bg-warning w-20 h-20 rounded-full flex justify-center items-center p-5" />
            <p className="text-primary font-bold text-xl text-center">
              Adventure
            </p>
            <span className="text-secondary">10 hours+</span>
          </div>
        </div>

        <div className="flex justify-center items-center hover:shadow-2xl  rounded-md p-5">
          <div className=" ">
            <FaCity className=" bg-warning w-20 h-20 rounded-full flex justify-center items-center p-5" />
            <p className="text-primary font-bold text-xl text-center">Food</p>
            <span className="text-secondary">10 hours+</span>
          </div>
        </div>

        <div className="flex justify-center items-center hover:shadow-2xl  rounded-md p-5">
          <div className=" ">
            <FaCity className=" bg-warning w-20 h-20 rounded-full flex justify-center items-center p-5" />
            <p className="text-primary font-bold text-xl text-center">Hiking</p>
            <span className="text-secondary">10 hours+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickTour;
