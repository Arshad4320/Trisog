import img from "../assets/img2.jpg";
import img2 from "../assets/img.jpg";
const AboutTeam = () => {
  return (
    <div className="  p-14">
      <div className=" lg:w-[90%] mx-auto ">
        <div className="mb-10  text-center">
          <span className=" italic text-secondary text-lg">Team</span>
          <p className="text-5xl text-primary  font-bold">Our Amazing Team</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
          <div className="mb-3">
            <img className="w-72 h-80 rounded-t-lg" src={img} alt="" />
            <p className="text-xl text-primary font-bold mt-5">Devid</p>
            <span className="text-lg text-gray-500 ">Founder & Directer</span>
          </div>

          <div className="mb-3">
            <img className="w-72 h-80 rounded-lg" src={img2} alt="" />
            <p className="text-xl text-primary font-bold mt-5">Filip Martin</p>
            <span className="text-lg text-gray-500 ">Chef Excutive</span>
          </div>

          <div className="mb-3">
            <img className="w-72 h-80 rounded-lg" src={img} alt="" />
            <p className="text-xl text-primary font-bold mt-5">Geail</p>
            <span className="text-lg text-gray-500 ">Co-Founder</span>
          </div>

          <div className="mb-3">
            <img className="w-72 h-80 rounded-lg" src={img2} alt="" />
            <p className="text-xl text-primary font-bold mt-5">Sorna</p>
            <span className="text-lg text-gray-500 ">Customer Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
