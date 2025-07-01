import banner from '../../assets/banner.jpg'

const Hero = () => {
  return (
    <section
      className="h-screen relative text-white  bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner})`,
      }}
    >
      <div className="pt-24 md:pt-48 text-center space-y-5 md:w-1/2 mx-auto ">
        <h1 className="text-3xl  md:text-4xl lg:text-6xl px-2 font-semibold leading-15 md:leading-20 font-Header">
          Retouch & clipping path service within
          <span className="text-myPrimary"> budget </span> and
          <span className="text-myPrimary"> time.</span>
        </h1>
        <p className="text-lg font-medium text-slate-300 px-2 text-justify">
          We’ll edit your product images so you can use them in any product
          listings, eCommerce sites, and promotional activities which boost your
          conversion rates faster.
        </p>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 h-3/12 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-lg"></div> */}
    </section>
  );
}

export default Hero


// className="h-screen relative bg-cover bg-center text-white" style={{ backgroundImage: `url(${banner})` }}
// className ="h-screen relative text-white bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/path-to-image.jpg')] bg-cover bg-center";