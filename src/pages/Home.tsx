import Banner from "../components/Banner";
import Fetarud from "../components/Fetarud";
import PickTour from "../components/PickTour";
import TopDestination from "../components/TopDestination";
import TravelGuid from "../components/TravelGuid";
import Trip from "../components/Trip";

const Home = () => {
  return (
    <div>
      <Banner />
      <PickTour />
      <Trip />
      <TopDestination />
      <Fetarud />
      <TravelGuid />
    </div>
  );
};

export default Home;
