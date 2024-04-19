"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClientImage from './ClientImage';
export default function ProoductSwiper({images}) {
  return (
    (
        <Swiper
        slidesPerView={1}
        navigation={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[Pagination,Navigation]}
        className="mySwiperr"
        style={{height:"350px"}}
        
      >
        {images.map((image,id)=>{
            return  <SwiperSlide key={id}><ClientImage classn={"oproductImg"} src={image} style={{objectFit:"contain"}}/></SwiperSlide>
        })}
      </Swiper>
    )
  )
}
