import DestinationBanner from "./../components/DestinationBanner";
import Gallery from "./../components/Gallery";
import AboutDestination from "./../components/AboutDestination";
import BasicInfoDestination from "../components/BasicInfoDestination";
import PopulerTour from "../components/PopulerTour";
import AdventureUk from "../components/AdventureUk";
const Destination = () => {
  return (
    <div>
      <DestinationBanner />
      <Gallery />
      <AboutDestination />
      <BasicInfoDestination />
      <PopulerTour />
      <AdventureUk />
    </div>
  );
};

export default Destination;
