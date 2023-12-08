import StatsSec from "@/components/StatsSec";
import TestimonialsSec from "@/components/TestimonialsSec";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <main className="Product-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Pricing_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
          Pricing
        </div>
      </section>

      {/* Plans & Subscriptions */}
      <section className="plans padding">
        <div className="headings p-[10px]">
          <h2 className="text-black font-bold text-[22px] leading-[22px] lg:text-[26px] lg:leading-[26px] xl:text-[26px] xl:leading-[26px] 2xl:text-[32px] 2xl:leading-[32px] 3xl:text-[32px] 3xl:leading-[32px] mb-5">
            Plans & Subscriptions
          </h2>
        </div>
        <div className="w-full">
          <div className="card mx-auto w-[80%] rounded-lg post_shadow p-[30px]">
            <div className="header flex flex-col items-center justify-center gap-5 w-full">
              <img
                src="/assets/images/shield.png"
                alt="shield img"
                className="grayscale"
              />
              <h3 className="text-black text-[45px] leading-none font-bold text-center">
                BitTruster
              </h3>
              <p className="text-textGrey font-bold text-[16px] leading-[16px] text-center">
                On-Premise
              </p>
              <p className="text-textGrey text-[16px] leading-[16px] text-center">
                Self-managed on-premise solution: Optimised for MS SQL and
                Active Directory. Administrate every aspect of BitTruster
                locally within the safety of your own perimeter.
              </p>
            </div>
            <div className="body w-full py-[20px]">
              <div className="max-w-[1140px] mx-auto pt-[10px] flex sm:flex-col md:flex-col">
                <ul className="left-points sm:w-full md:w-full w-[50%]  text-[16px] leading-[24px] text-textGrey red-tick ">
                  <li className="point mb-1">
                    End to end BitLocker encryption control
                  </li>
                  <li className="point mb-1">TPM/PIN management</li>
                  <li className="point mb-1">
                    Policy-driven BitLocker encryption management
                  </li>
                  <li className="point mb-1">
                    Helpdesk functionality to deal with PIN/password issues
                  </li>
                  <li className="point mb-1">
                    View, distribute and share protection status reports
                  </li>
                  <li className="point mb-1">Solution Support</li>
                </ul>
                <ul className="right-points sm:w-full md:w-full w-[50%] text-[16px] leading-[24px] text-textGrey red-tick">
                  <li className="point mb-1">
                    24/7 Encryption Status Monitoring
                  </li>
                  <li className="point mb-1">
                    Easy setup and administration of pre boot authentication
                  </li>
                  <li className="point mb-1">
                    Consistent handling of all endpoints
                  </li>
                  <li className="point mb-1">Role-Based Access control</li>
                  <li className="point mb-1">
                    Self Help portal for independent PIN/Password retrieval
                  </li>
                </ul>
              </div>
              <h3 className="text-center mt-8 mb-4 text-red font-bold text-[22px] leading-none lg:text-[28px] xl:text-[28px] 2xl:text-[28px] 3xl:text-[28px] ">
                $1.99* / per endpoint per month
              </h3>
              <h3 className="text-center mb-4 text-black font-bold text-[18px] leading-none lg:text-[20px] xl:text-[20px] 2xl:text-[20px] 3xl:text-[20px] ">
                Annually
              </h3>
              <div className="flex items-center justify-center">
                <div className="w-fit bg-red text-white text-[20px] leading-none font-medium py-[15px] px-[30px]">
                  <Link href={"#"}>Get Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSec />

      {/* Info Section */}
      <StatsSec />
    </main>
  );
};

export default Pricing;
