import DestinationBanner from "./../components/DestinationBanner";
import Gallery from "./../components/Gallery";
import AboutDestination from "./../components/AboutDestination";
import BasicInfoDestination from "../components/BasicInfoDestination";
import PopulerTour from "../components/PopulerTour";
const Destination = () => {
  return (
    <div>
      <DestinationBanner />
      <Gallery />
      <AboutDestination />
      <BasicInfoDestination />
      <PopulerTour />
    </div>
  );
};

export default Destination;
