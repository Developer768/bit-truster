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
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                Managing BitLocker encryption for hundreds of devices in an educational institution can be daunting. BitTruster makes it easy, and its user-friendly interface has been a hit with our staff.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Natalie W.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Education Technology Coordinator 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster's BitLocker Recovery System aligns perfectly with our stringent security requirements in the financial sector. It's a robust solution for managing encrypted data.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Brian C.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Banking Security Specialist 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                As a small business owner, I needed an uncomplicated solution for data security. BitTruster's BitLocker Recovery System fits the bill, providing peace of mind without a steep learning curve.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Lisa M.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Small Business Entrepreneur 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster has been a lifesaver for our IT team. We had a few instances where employees forgot their BitLocker passwords, and BitTruster's recovery system worked like a charm. It's a must-have tool for anyone managing BitLocker encryption.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                John D.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - IT Administrator 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                As a small business owner, data security is a top priority. BitTruster's BitLocker Recovery System gives me peace of mind. It's user-friendly, and I know that even if something goes wrong, our data is safe.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Sarah K.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Small Business Owner 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster has simplified our BitLocker key management. The centralized system is efficient, and the reporting features are fantastic. It's a game-changer for anyone dealing with BitLocker encryption on a large scale.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Michael P.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Network Security Specialist 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster's BitLocker Recovery System is a valuable asset for ensuring GDPR compliance. It simplifies key management and makes data recovery a breeze. Highly recommended for organizations handling sensitive data.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Emily G.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Data Privacy Officer 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                I recommend BitTruster to all my clients. It streamlines BitLocker management, and the recovery process is straightforward. It's an essential tool for anyone looking to enhance their data security.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                David R.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - IT Consultant
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster's BitLocker Recovery System is a real time-saver. It has drastically reduced our response time to BitLocker-related issues. It's a must-have tool in our IT toolbox.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Jennifer H.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - System Administrator 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                Security is a top priority in my role, and BitTruster has been an invaluable asset. It not only simplifies BitLocker key management but also enhances our overall data security strategy.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Alex M.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Cybersecurity Analyst 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster's BitLocker Recovery System gave our finance team confidence in data security. Knowing we can recover data if needed, without disruption, is a game-changer for us.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Linda B.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Financial Controller 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster has been instrumental in ensuring our data security compliance. Its comprehensive reporting and auditing features make compliance reporting a breeze.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Robert S.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Compliance Officer 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                We deployed BitTruster across our organization, and it has made BitLocker management and recovery effortless. The support from the BitTruster team has been exceptional.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Daniel F.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - IT Director 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                We deployed BitTruster across our organization, and it has made BitLocker management and recovery effortless. The support from the BitTruster team has been exceptional.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Sophia L.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Healthcare IT Manager 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster's BitLocker Recovery System is a game-changer for our legal team. It not only enhances data security but also simplifies e-discovery and data retrieval during legal proceedings.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Mark R.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Legal Counsel
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                Managing BitLocker encryption for hundreds of devices in an educational institution can be daunting. BitTruster makes it easy, and its user-friendly interface has been a hit with our staff.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Natalie W.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Education Technology Coordinator 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster's BitLocker Recovery System aligns perfectly with our stringent security requirements in the financial sector. It's a robust solution for managing encrypted data.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Brian C.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Banking Security Specialist 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                As a small business owner, I needed an uncomplicated solution for data security. BitTruster's BitLocker Recovery System fits the bill, providing peace of mind without a steep learning curve.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Lisa M.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Small Business Entrepreneur 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster has been a lifesaver for our IT team. We had a few instances where employees forgot their BitLocker passwords, and BitTruster's recovery system worked like a charm. It's a must-have tool for anyone managing BitLocker encryption.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                John D.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - IT Administrator 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                As a small business owner, data security is a top priority. BitTruster's BitLocker Recovery System gives me peace of mind. It's user-friendly, and I know that even if something goes wrong, our data is safe.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Sarah K.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Small Business Owner 
                </span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg p-[35px] ">
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
                BitTruster has simplified our BitLocker key management. The centralized system is efficient, and the reporting features are fantastic. It's a game-changer for anyone dealing with BitLocker encryption on a large scale.
                </span>
                "
              </p>
              <cite className="flex items-center justify-center flex-col mt-6">
                <span className="text-red text-[22px] leading-[33px] font-bold italic">
                Michael P.
                </span>
                <span className="text-black font-semibold italic text-[16px] leading-[24px] font-robotoSlab">
                - Network Security Specialist 
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
