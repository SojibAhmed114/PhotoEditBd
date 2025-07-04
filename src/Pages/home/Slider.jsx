
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination } from "swiper/modules";
import { silderPhoto } from "../../Utils/SliderPhoto";
import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <section className="max-w-[1400px] container mx-auto py-6 px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {silderPhoto.map((cardImg) => (
          <SwiperSlide
            key={cardImg.id}
            className="bg-no-repeat bg-cover rounded-xl mx-auto"
            style={{ backgroundImage: `url(${cardImg.img})` }}
          >
            <div className="h-[300px] relative">
              <p className="text-red-500/60 text-[10px] absolute m-2">photo edit bd</p>
              {/* <img className="bg-center bg-no-repeat bg-cover rounded-xl h-full" src={cardImg.img} alt="photo" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
