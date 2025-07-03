
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderCallCenter } from "../../Utils/SliderPhoto";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        {sliderCallCenter.map((card) => (
          <SwiperSlide
            key={card.id}
            className="bg-no-repeat w-full h-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            {/* <div className="h-full"></div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
