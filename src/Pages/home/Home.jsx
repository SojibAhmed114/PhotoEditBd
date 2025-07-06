
import AboutDetails from "../about/AboutDetails";
import Contact from "../contact/Contact";
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
      <Contact />
      <Location />
    </>
  );
};

export default Home;
