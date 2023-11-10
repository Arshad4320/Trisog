import banner from "../assets/img8.jpg"; // Adjust the path based on your project structure

const AboutBanner = () => {
  return (
    <div
      className="relative flex justify-center items-center text-white text-center"
      style={{
        width: "full",
        height: "400px",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-primary opacity-70 py-30"></div>

      <div className="relative  z-10">
        <h1 className="text-5xl font-bold mb-4">About</h1>
        <p className="text-lg">Home/About</p>
      </div>
    </div>
  );
};

export default AboutBanner;
