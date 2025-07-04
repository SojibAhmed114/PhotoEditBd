import aboutBg from '../../assets/aboutBg.png'

import AboutDetails from './AboutDetails';


const About = () => {
  return (
    <section
      className="max-w-[1400px] container mx-auto pt-32 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
    <AboutDetails/>
    </section>
  );
}

export default About









  


