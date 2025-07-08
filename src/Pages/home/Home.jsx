
import AboutDetails from "../about/AboutDetails";
import ContactDetails from "../contact/ContactDetails";
import Location from "../location/Location";
import Products from "../services/Products";
import Hero from "./Hero";
import HowWork from "./HowWork";
import Slider from "./Slider";

const Home = () => {

  return (
    <>
      <Hero />
      <Slider />
      <Products headerText="Our All Services" />
      <HowWork />
      <AboutDetails />
      <ContactDetails/>
      <Location />
    </>
  );
};

export default Home;
