"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function Swiper({products}) {
  return (
    (
        <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product,id)=>{
            return <SwiperSlide key={id}>product</SwiperSlide>
        })}
      </Swiper>
    )
  )
}
