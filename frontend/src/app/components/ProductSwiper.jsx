"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Product from './Product';
import useDevice from '@/hooks/useDevice';
export default function ProductSwiper({products,userId}) {
  const isMediumDevice = useDevice("only screen and (max-width : 1023px)");
  const isExtraSmallDevice = useDevice("only screen and (max-width : 660px)");
  return (
    (
        <Swiper
        slidesPerView={isExtraSmallDevice ? 1 : isMediumDevice ? 2 : 3}
        navigation={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {products.map((product,id)=>{
            return <SwiperSlide key={id}><Product userId={userId} productLink={`/categories/${product.product_id}`} id={product.product_id} name={product.name} img={JSON.parse(product.images)[0]} price={product.price} description={product.description}/></SwiperSlide>
        })}
      </Swiper>
    )
  )
}
