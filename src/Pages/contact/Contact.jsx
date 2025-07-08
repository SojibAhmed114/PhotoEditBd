

import concept from '../../assets/concept.jpg'
import ContactDetails from './ContactDetails';
const Contact = () => {

  return (
    <section>
      <div
        className="w-full h-[200px] md:h-[400px] 2xl:h-[500px] bg-no-repeat  bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${concept})`,
        }}
      ></div>
      <ContactDetails/>
    </section>

  );
}

export default Contact