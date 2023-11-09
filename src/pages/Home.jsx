import Banner from "../components/Banner";
import Fetarud from "../components/Fetarud";
import PickTour from "../components/PickTour";
import TopDestination from "../components/TopDestination";
import Trip from "../components/trip";

const Home = () => {
  return (
    <div>
      <Banner />
      <PickTour />
      <Trip />
      <TopDestination />
      <Fetarud />
    </div>
  );
};

export default Home;
