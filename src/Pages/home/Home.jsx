
import About from "../about/About"
import Contact from "../contact/Contact"
import Location from "../location/Location"
import Hero from "./Hero"
import HowWork from "./HowWork"
import Slider from "./Slider"



const Home = () => {
  return (
    <>
      <Hero />
      <Slider/>
      <HowWork />
      <About/>
      <Contact/>
      <Location />
    
    </>
  );
}

export default Home