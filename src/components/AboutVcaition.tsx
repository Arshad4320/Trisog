import img from "../assets/img9.jpg";
const AboutVcaition = () => {
  return (
    <div className="w-[90%] mx-auto">
      {/* <div className="flex flex-col md:flex-row p-5 justify-center items-center my-5">
        <img className=" w-[400px] h-[300px]" src={img} alt="" />
        <div className="md:w-1/2 mx-auto">
          <p className="font-semibold text-gray-600 my-5">
            <span className="text-xl font-bold text-[#26901b]">
              Grocery Shop{" "}
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            laborum veritatis enim atque dolor deleniti hic repudiandae, ut
            vitae magni officia eveniet temporibus sequi praesentium.
            Distinctio, ut sed! Enim explicabo ipsum quasi, beatae
            exercitationem dolore debitis hic odio totam illo.
          </p>
          <p className="font-semibold text-gray-600 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            laborum veritatis enim atque dolor deleniti hic repudiandae, ut
            vitae magni officia eveniet temporibus sequi praesentium.
            Distinctio, ut sed! Enim explicabo ipsum quasi, beatae
            exercitationem dolore debitis hic odio totam illo.
          </p>
        </div>
      </div> */}

      <div className="flex flex-wrap gap-16 mt-28  justify-center">
        <img className="w-[300px] rounded-lg h-[350px]" src={img} alt="" />
        <div className="w-[500px]">
          <span className="text-secondary text-xl font-semibold">About Us</span>
          <h1 className="text-primary text-4xl font-bold mb-2">
            Why Select Us for your Vcaition
          </h1>
          <div className="text-gray-500 text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              natus dolorum consequuntur dignissimos suscipit molestias saepe
              reiciendis, doloribus itaque quas eveniet, modi facere eligendi
              distinctio ea. Ipsam ea a recusandae.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              natus dolorum consequuntur dignissimos suscipit molestias saepe
              reiciendis, doloribus itaque quas eveniet,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVcaition;
