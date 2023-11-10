import img from "../assets/gallery.jpg";
import img2 from "../assets/gallery1.jpg";
import img3 from "../assets/gallery2.jpg";
import img4 from "../assets/gallery3.jpg";
import img5 from "../assets/gallery4.jpg";
import map from "../assets/map.jpg";

const Gallery = () => {
  return (
    <div className="w-[90%] mx-auto my-16 flex flex-wrap">
      <div className="w-[65%]">
        <div className="w-[855px] h-[300px] mb-7">
          <img className="w-full h-full rounded-lg" src={img} alt="" />
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="w-[200px] h-[220px]">
            <img className="rounded-lg w-full h-full" src={img2} alt="" />
          </div>
          <div className="w-[200px] h-[220px]">
            <img className="rounded-lg w-full h-full" src={img3} alt="" />
          </div>
          <div className="w-[200px] h-[220px]">
            <img className="rounded-lg w-full h-full" src={img4} alt="" />
          </div>
          <div className="w-[200px] h-[220px]">
            <img className="rounded-lg w-full h-full" src={img5} alt="" />
          </div>
        </div>
      </div>
      <div className="w-35%">
        <div className="w-[320px] h-[200px]">
          <p className="text-xl font-bold text-primary mb-3">City Map</p>
          <img className="rounded-t-lg" src={map} alt="" />
        </div>
        <div className="w-[320px] mt-10  rounded-b-lg bg-gray-100 p-4">
          <div>
            <p className="border-b-2 text-gray-400 p-2">
              Jan-Feb <span>10Jan-22Feb</span>
            </p>
            <p className="border-b-2 text-gray-400 p-2">
              Mar-April <span>10Jan-22Feb</span>
            </p>
            <p className="border-b-2 text-gray-400 p-2">
              May-June <span>10Jan-22Feb</span>
            </p>
            <p className="border-b-2 text-gray-400 p-2">
              Jul-Agu <span>10Jan-22Feb</span>
            </p>
            <p className="border-b-2 text-gray-400 p-2">
              Sep-Oct <span>10Jan-22Feb</span>
            </p>
            <p className="border-b-2 text-gray-400 p-2">
              Nov-Dec <span>10Jan-22Feb</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
