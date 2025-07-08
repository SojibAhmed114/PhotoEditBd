
import serviceBanner from "../../assets/serivesPhoto/serviceBanner.jpg";
import Products from "./Products";
const Services = () => {
  return (
    <section>
      <div
        className="w-full h-[200px] md:h-[400px] 2xl:h-[500px] bg-no-repeat  bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${serviceBanner})`,
        }}
      ></div>
      <Products headerText="What's Your Choice" />
    </section>
  );
};

export default Services;
