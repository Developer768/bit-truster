"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const CustomersSlider:React.FC = () => {
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
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        className="mySwiper customers-slider my-6"
      >
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/hengeler.png" alt="hengeler img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/Geberit.png" alt="Geberit img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/corsair.png" alt="corsair img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/bvv.png" alt="bvv img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/Taylor.jpg" alt="Taylor img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/neba.png" alt="neba img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center h-[200px]'>
                <img src="/assets/images/kurtz.png" alt="kurtz img" className='grayscale opacity-50 w-[140px]' />
            </div>
        </SwiperSlide>
        </Swiper>
  )
}

export default CustomersSlider