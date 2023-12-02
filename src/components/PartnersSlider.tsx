"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const PartnersSlider = () => {
  return (
    <Swiper
    loop={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        breakpoints={{
            769: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1401: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        className="mySwiper customers-slider my-6"
      >
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/partner-img.gif" alt="partner-img img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/etg.png" alt="etg.png img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/prosoft.png" alt="prosoft img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/anexia.jpg" alt="anexia img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/compose.jpg" alt="compose.jpg img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/inovatus.jpg" alt="inovatus.jpg img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/kis.png" alt="kis.png img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/sksys.jpg" alt="sksys.jpg img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        </Swiper>
  )
}

export default PartnersSlider