import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper/modules";
// import Swiper from "swiper";
const banarImage = [
  { image: "https://i.ibb.co/L6KxXL2/a-1.jpg" },
  { image: "https://i.ibb.co/MpK69TZ/a-2.jpg" },
  { image: "https://i.ibb.co/KDW885P/a-3.jpg" },
  { image: "https://i.ibb.co/ChRfQ3L/a-4.jpg" },
  { image: "https://i.ibb.co/qsc4gPk/a-5.jpg" },
  { image: "https://i.ibb.co/vwSmcL7/a-6.jpg" },
];
const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {banarImage.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item?.image} className="md:w-full max-h-max" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
