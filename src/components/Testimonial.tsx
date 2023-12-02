"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Icons } from "./Icons";

const Testimonial: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        loop={true}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          1025: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1201: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper tetimonials-carousel "
      >
        <SwiperSlide className="bg-white rounded-lg p-[35px]">
          <div className="flex gap-2">
            <div className="quote-img sm:hidden">
              <img
                src="/assets/images/quotes.png"
                alt="quote"
                className="grayscale-[100%] -mt-8"
              />
            </div>
            <div className="testimony font-assistant w-full">
              <p className="text-black text-[18px] leading-[27px] text-center w-full">
                "
                <span>
                  BitTruster's BitLocker Recovery System gave our finance team
                  confidence in data security. Knowing we can recover data if
                  needed, without disruption, is a game-changer for us.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                  Alex M.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                  -IT Director
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px]">
          <div className="flex gap-2">
            <div className="quote-img sm:hidden">
              <img
                src="/assets/images/quotes.png"
                alt="quote"
                className="grayscale-[100%] -mt-8"
              />
            </div>
            <div className="testimony font-assistant w-full">
              <p className="text-black text-[18px] leading-[27px] text-center w-full">
                "
                <span>
                  BitTruster's BitLocker Recovery System gave our finance team
                  confidence in data security. Knowing we can recover data if
                  needed, without disruption, is a game-changer for us.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                  Alex M.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                  -IT Director
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px]">
          <div className="flex gap-2">
            <div className="quote-img sm:hidden">
              <img
                src="/assets/images/quotes.png"
                alt="quote"
                className="grayscale-[100%] -mt-8"
              />
            </div>
            <div className="testimony font-assistant w-full">
              <p className="text-black text-[18px] leading-[27px] text-center w-full">
                "
                <span>
                  BitTruster's BitLocker Recovery System gave our finance team
                  confidence in data security. Knowing we can recover data if
                  needed, without disruption, is a game-changer for us.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                  Alex M.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                  -IT Director
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px]">
          <div className="flex gap-2">
            <div className="quote-img sm:hidden">
              <img
                src="/assets/images/quotes.png"
                alt="quote"
                className="grayscale-[100%] -mt-8"
              />
            </div>
            <div className="testimony font-assistant w-full">
              <p className="text-black text-[18px] leading-[27px] text-center w-full">
                "
                <span>
                  BitTruster's BitLocker Recovery System gave our finance team
                  confidence in data security. Knowing we can recover data if
                  needed, without disruption, is a game-changer for us.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                  Alex M.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                  -IT Director
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        {/* <button className="arrow-left arrow">Prev</button> */}
        <Icons.chevronLeft className="text-black arrow-left arrow cursor-pointer absolute top-[45%] left-0 z-10" />
        <Icons.chevronRight className="text-black arrow-right arrow cursor-pointer absolute top-[45%] right-0 z-10" />
        {/* <button className="arrow-right arrow">next</button> */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
