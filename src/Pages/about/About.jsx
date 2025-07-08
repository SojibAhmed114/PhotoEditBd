import aboutBg01 from '../../assets/aboutBg01.png.png'
import AboutDetails from './AboutDetails';


const About = () => {
  return (
    <section
      className="max-w-[1400px] container mx-auto pt-20 md:pt-32 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${aboutBg01})`,
      }}
    >
    <AboutDetails/>
    </section>
  );
}

export default About









  


