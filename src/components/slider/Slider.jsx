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
    <div className="pt-4">
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
            <div className="relative">
              <img src={item?.image} className="w-full max-h-screen " alt="" />
              <div className="absolute ">
                <h2 className="text-white">here me</h2>
              </div>
            </div>
            {/* <div
              key={index}
              style={{
                backgroundImage: `url(${item?.image})`,
                width: "100%",
                height: "600px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "10px",
              }}
              className="bg-cover  bg-center  bg-no-repeat "
            ></div> */}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {banarImage.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${item?.image})`,
            width: "200px",
            height: "200px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom: "10px",
          }}
        ></div>
      ))} */}
    </div>
  );
};

export default Slider;
