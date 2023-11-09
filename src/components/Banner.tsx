import img from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";

const Banner = () => {
  return (
    <div className="bg-primary pt-16 relative">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1   px-4 sm:px-7 md:px-10 lg:px-20 ">
        <div>
          <span className="text-warning text-xl italic font-semibold">
            Explore The
          </span>
          <br />
          <span className="text-5xl arial tracking-wider text-white font-bold">
            Travel &
          </span>
          <br />
          <span className="text-5xl text-white font-bold tracking-wider">
            Adventures
          </span>
        </div>
        {/* grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2
        xl-grid-cols-2 */}
        <div className="flex flex-wrap gap-10 z-0">
          <div className="w-[220px] h-[250px]">
            <img className="w-full h-full rounded-md" src={img} alt="women" />
          </div>
          <div className="w-[290px] h-[500px] ">
            <img className="w-full h-full rounded-t-md" src={img2} alt="man" />
          </div>
        </div>
      </div>
      {/* Destination form code start */}
      <div className="flex justify-center">
        <form
          className="absolute  -mt-48 px-7 lg:py-10 rounded-lg grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 grid-cols-1  gap-10 bg-white  w-[70%] mx-auto items-center"
          action=""
        >
          <div>
            <label className=" text-secondary ">Destination </label>
            <br />
            <input
              className="border-2 mt-1 shadow-md border-gray-400 p-2 rounded"
              placeholder="when to go ?"
              type="text"
            />
          </div>

          <div>
            <label className=" text-secondary ">Type </label>
            <br />
            <input
              className="border-2 mt-1 shadow-md border-gray-400 p-2 rounded"
              placeholder="Activity"
              type="text"
            />
          </div>

          <div>
            <label className=" text-secondary ">When </label>
            <br />
            <input
              className="border-2 mt-1 shadow-md border-gray-400 p-2 rounded"
              placeholder="Date"
            />
          </div>

          <div>
            <label className=" text-secondary ">Guers </label>
            <br />
            <input
              className="border-2 mt-1 shadow-md border-gray-400 p-2 rounded"
              placeholder="0"
            />
          </div>
          <div>
            <button className="bg-warning text-black px-5 py-2 mt-6 text-xl rounded-md">
              Search
            </button>
          </div>
        </form>
      </div>
      ;{/* Destination form code start */}
    </div>
  );
};

export default Banner;
