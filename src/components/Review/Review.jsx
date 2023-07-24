import useReview from "../../hooks/useReview";
import Container from "../Container/Container";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Rate } from "antd";

const Review = () => {
  const [reviews] = useReview();
  console.log(reviews);
  return (
    <Container>
      <div className="my-10">
        <h4 className="text-center text-3xl md:text-5xl font-semibold text-gray-700 mb-8">
          Top Reviews
        </h4>
        <div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="py-6 flex flex-col justify-center items-center">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={item?.image} />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold">{item?.name}</h4>
                  </div>
                  <p className="break-all">{item?.description}</p>
                  <Rate disabled defaultValue={item?.rating} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div></div>
      </div>
    </Container>
  );
};

export default Review;
