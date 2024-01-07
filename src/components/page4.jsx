import React from 'react'
import '../styles/page4.css'
import {useEffect,useState} from 'react'
import { Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
const page4 = () => {
    useEffect(() => {
    }, []);
  return (


    <div className='testimonial'><h1>
        TESTIMONIAL
        </h1>
        <div className="swipersection">

        <Swiper
      // install Swiper modules
      modules={[ Scrollbar]}
      spaceBetween={0}
      slidesPerView={3.5}
      scrollbar={{ draggable: true ,
        el: ".swiper-scrollbar",
        hide: true,  
    }}

    >
      <SwiperSlide><p>"Unforgettable stay! The hostel's lively ambiance and impeccable service exceeded my expectations. From the comfortable rooms to the friendly staff, it truly felt like a home away from home."</p>
    <h6>Alex M</h6>
      </SwiperSlide>
      <SwiperSlide><p>"Unforgettable stay! The hostel's lively ambiance and impeccable service exceeded my expectations. From the comfortable rooms to the friendly staff, it truly felt like a home away from home."</p>
    <h6>Alex M</h6></SwiperSlide>
      <SwiperSlide><p>"Unforgettable stay! The hostel's lively ambiance and impeccable service exceeded my expectations. From the comfortable rooms to the friendly staff, it truly felt like a home away from home."</p>
    <h6>Alex M</h6></SwiperSlide>
      <SwiperSlide><p>"Unforgettable stay! The hostel's lively ambiance and impeccable service exceeded my expectations. From the comfortable rooms to the friendly staff, it truly felt like a home away from home."</p>
    <h6>Alex M</h6></SwiperSlide>
    <SwiperSlide><p>"Unforgettable stay! The hostel's lively ambiance and impeccable service exceeded my expectations. From the comfortable rooms to the friendly staff, it truly felt like a home away from home."</p>
    <h6>Alex M</h6></SwiperSlide>
    <SwiperSlide><p>"Unforgettable stay! The hostel's lively ambiance and impeccable service exceeded my expectations. From the comfortable rooms to the friendly staff, it truly felt like a home away from home."</p>
    <h6>Alex M</h6></SwiperSlide>
     <SwiperSlide><p>"Unforgettable stay! The hostel's lively ambiance and impeccable service exceeded my expectations. From the comfortable rooms to the friendly staff, it truly felt like a home away from home."</p>
    <h6>Alex M</h6></SwiperSlide>
    </Swiper>
        
      </div>
        </div>
       
  )
}

export default page4