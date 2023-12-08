import StatsSec from "@/components/StatsSec";
import TestimonialsSec from "@/components/TestimonialsSec";
import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <main className="Product-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Why_BitTruster_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
          Product
        </div>
      </section>

      {/* Features */}
      <section className="features padding pb-[50px]">
        <div className="headings p-[10px]">
          <h2 className="text-black font-bold text-[22px] leading-[22px] lg:text-[26px] lg:leading-[26px] xl:text-[26px] xl:leading-[26px] 2xl:text-[32px] 2xl:leading-[32px] 3xl:text-[32px] 3xl:leading-[32px] mb-5">
            Features & Benefits
          </h2>
          <h2 className="text-black font-bold text-[28px] leading-[28px] lg:text-[36px] lg:leading-[36px] xl:text-[36px] xl:leading-[36px] 2xl:text-[45px] 2xl:leading-[45px] 3xl:text-[45px] 3xl:leading-[45px] mb-[30px]">
            Simplify your BitLocker data encryption by using BitTruster!
          </h2>
          <p className="text-textGrey text-[16px] leading-[24px] lg:text-[22px] lg:leading-[33px] xl:text-[22px] xl:leading-[33px] 2xl:text-[30px] 2xl:leading-[45px] 3xl:text-[30px] 3xl:leading-[45px] mb-[20px]">
            Who knew it could be so simple?
          </p>
        </div>
        <div className="benefits p-[10px] flex items-center justify-center flex-wrap gap-5">
          <div className="feature-card w-full lg:w-[50%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[23%] h-[320px] md:h-[250px] mb-[10px] rounded-sm border-2 hover:border-red border-bgGrey p-[18px] shadow-md post_shadow">
            <Link href={"#"}>
              <div className="image w-fit">
                <img
                  src="/assets/images/bitlocker_recovery.png"
                  alt="bitlocker_recovery img"
                />
              </div>
              <h3 className="feature-title text-black text-[22px] leading-[24px] font-bold py-4">BitLocker Recovery</h3>
              <p className="feature-desc text-textGrey text-[15px] leading-[23px]">Never struggle with a forgotten TPM PIN or recovery password again. Both are centrally stored for all endpoints, and you can access them, send them to users or change them with a few clicks in the management console.</p>
            </Link>
          </div>
          <div className="feature-card w-full lg:w-[50%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[23%] h-[320px] md:h-[250px] mb-[10px] rounded-sm border-2 hover:border-red border-bgGrey p-[18px] shadow-md post_shadow">
            <Link href={"#"}>
              <div className="image w-fit">
                <img
                  src="/assets/images/policy-customization.png"
                  alt="policy-customization.png img"
                />
              </div>
              <h3 className="feature-title text-black text-[22px] leading-[24px] font-bold py-4">Policy customization</h3>
              <p className="feature-desc text-textGrey text-[15px] leading-[23px]">BitTruster BitLocker Management allows you to create, customize and automate encryption and TPM policies to suit your needs.</p>
            </Link>
          </div>
          <div className="feature-card w-full lg:w-[50%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[23%] h-[320px] md:h-[250px] mb-[10px] rounded-sm border-2 hover:border-red border-bgGrey p-[18px] shadow-md post_shadow">
            <Link href={"#"}>
              <div className="image w-fit">
                <img
                  src="/assets/images/Central-BitLocker-Key-Management.png"
                  alt="Central BitLocker Key Management img"
                />
              </div>
              <h3 className="feature-title text-black text-[22px] leading-[24px] font-bold py-4">Central BitLocker Key Management</h3>
              <p className="feature-desc text-textGrey text-[15px] leading-[23px]">BitTruster’s central key management makes storing and retrieving information an easy task. Never run the risk of not being able to access critical data when you need it.</p>
            </Link>
          </div>
          <div className="feature-card w-full lg:w-[50%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[23%] h-[320px] md:h-[250px] mb-[10px] rounded-sm border-2 hover:border-red border-bgGrey p-[18px] shadow-md post_shadow">
            <Link href={"#"}>
              <div className="image w-fit">
                <img
                  src="/assets/images/Time-Cost-effective.png"
                  alt="Time & Cost effective img"
                />
              </div>
              <h3 className="feature-title text-black text-[22px] leading-[24px] font-bold py-4">Time & Cost effective</h3>
              <p className="feature-desc text-textGrey text-[15px] leading-[23px]">BitTruster frees you to devote your precious resources to what matters most – towards ensuring compliance and utility.</p>
            </Link>
          </div>
          <div className="feature-card w-full lg:w-[50%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[23%] h-[320px] md:h-[250px] mb-[10px] rounded-sm border-2 hover:border-red border-bgGrey p-[18px] shadow-md post_shadow">
            <Link href={"#"}>
              <div className="image w-fit">
                <img
                  src="/assets/images/Transparency-and-Accuracy.png"
                  alt="Transparency and Accuracy img"
                />
              </div>
              <h3 className="feature-title text-black text-[22px] leading-[24px] font-bold py-4">Transparency and Accuracy</h3>
              <p className="feature-desc text-textGrey text-[15px] leading-[23px]">We are committed to providing a transparent view into our customers encryption status, from the entire environment at -a -glance down to granular insight into individual endpoints.</p>
            </Link>
          </div>
          <div className="feature-card w-full lg:w-[50%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[23%] h-[320px] md:h-[250px] mb-[10px] rounded-sm border-2 hover:border-red border-bgGrey p-[18px] shadow-md post_shadow">
            <Link href={"#"}>
              <div className="image w-fit">
                <img
                  src="/assets/images/Confidentiality.png"
                  alt="Confidentiality img"
                />
              </div>
              <h3 className="feature-title text-black text-[22px] leading-[24px] font-bold py-4">Confidentiality</h3>
              <p className="feature-desc text-textGrey text-[15px] leading-[23px]">We strongly believe in integrity and confidentiality. BitTruster allows you to define, set and customize different access rights based on user roles.</p>
            </Link>
          </div>
          <div className="feature-card w-full lg:w-[50%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[23%] h-[320px] md:h-[250px] mb-[10px] rounded-sm border-2 hover:border-red border-bgGrey p-[18px] shadow-md post_shadow">
            <Link href={"#"}>
              <div className="image w-fit">
                <img
                  src="/assets/images/Risk-Management.png"
                  alt="Risk Management img"
                />
              </div>
              <h3 className="feature-title text-black text-[22px] leading-[24px] font-bold py-4">Risk Management</h3>
              <p className="feature-desc text-textGrey text-[15px] leading-[23px]">BitTruster helps companies manage the risk associated with data loss and/or find potential violations of GDPR and CCPA</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Action Button */}
      <section className="pb-[50px] flex items-center justify-center">
        <div className="w-fit bg-red text-white text-[20px] leading-none font-medium py-[15px] px-[30px]">
            <Link href={"#"}>
                Get Start
            </Link>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSec />

      {/* Info Section */}
      <StatsSec />
      
    </main>
  );
};

export default Product;
