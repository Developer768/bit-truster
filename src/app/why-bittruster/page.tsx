import StatsSec from "@/components/StatsSec";
import TestimonialsSec from "@/components/TestimonialsSec";
import Link from "next/link";
import React from "react";

const WhyBittruster = () => {
  return (
    <main className="Why-BitTruster-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Why_BitTruster_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
          Why BitTruster ?
        </div>
      </section>

      {/* Info Section */}
      <StatsSec />

      {/* Action Button */}
      <section className="p-[20px] flex items-center justify-center">
        <div className="w-fit bg-red text-white text-[20px] leading-none font-medium py-[15px] px-[30px]">
            <Link href={"#"}>
                Get Start
            </Link>
        </div>
      </section>

      {/* Why Content */}
      <section className="why-content padding">
        <div className="why-cios why-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row items-center mb-[30px]">
            <div className="left w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
            <h2 className="pb-[30px] text-[20px] leading-none font-semibold">How BitTruster helps CIO/CISO</h2>
            <h2 className="pb-[30px] text-[20px] lg:text-[26px] xl:text-[26px] 2xl:text-[26px] 3xl:text-[26px] leading-none font-bold">Why CIOs & CISOs LOVE BitTruster</h2>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[30px]">With CIO being the company’s executive responsible for the management implementation and usability of information and CISO being the executive responsible for establishing and maintaining the enterprise vision and strategy to ensure information assets are adequately protected, there is a direct need for an encryption management solution. Especially in today’s digitalized world with the ever increasing regulations and privacy limitations regarding data security. In order to comply with privacy regulations, enable cognitive activities and identify threat/attack patterns, most companies need to house substantive amounts of data. Therefore, a direct need for an effective data storage strategy arises.</p>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[30px]">BitTruster is helping customers across the globe manage their BitLocker systems more efficiently. With BitTruster BitLocker management it takes CIOs and CISOs much less effort to keep their systems up and running. It enables you to define and manage BitLocker encryption policies from a unified console making the security specifications easy to put to action. Everything from initial client registration to ongoing recovery key management could be done with ease and efficiency with BitTruster BitLocker management.</p>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[30px]">Such companies should be careful in identifying, assessing and controlling threats from a wide variety of sources including data loss/theft. Data loss is a serious risk for businesses and companies of all sizes. It can happen for a number of reasons and these include accidental deletion, cybercrime, physical damage, and formatting errors. Not only does BitTruster help companies manage the risk associated with data loss, it also helps them find potential compliance violations. BitTruster promotes security awareness and encourages the usage of best practices from both a process and a technological point of view.</p>

            </div>
            <div className="right flex items-center justify-end w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                <img src="/assets/images/why-cio-img.png" alt="Why Cios Image" className="grayscale lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] 3xl:max-w-[90%] p-[10px] sm:p-0 md:p-0" />
            </div>
        </div>
        <div className="why-business why-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row items-center flex-wrap-reverse ">
        <div className="right flex items-center justify-start sm:hidden md:hidden lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                <img src="/assets/images/why-business-img.png" alt="Why Cios Image" className="grayscale lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] 3xl:max-w-[90%] p-[10px] sm:p-0 md:p-0" />
            </div>
            <div className="left w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
            <h2 className="pb-[30px] text-[20px] lg:text-[26px] xl:text-[26px] 2xl:text-[26px] 3xl:text-[26px] leading-none font-bold">Why business owners LOVE BitTruster</h2>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[30px]">Business owner’s utilization and overall efficiency is crucial when it comes to decision making. As an organization that collects personally identifiable information, whether you are a big, small or a midsize-business, data protection is critical. That is, if you are looking to avoid intellectual property losses, lost productivity, legal costs, and not to mention reputation damage. Therefore, it is of great importance to have a grasp on how encryption works- turning plain information to ciphertext. That can be achieved through the full volume encryption feature that is BitLocker.</p>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[30px]">However, tools built into the operating system to perform a variety of management tasks can be used. In order to access information using an authorized account for the device, normally the drive automatically unlocks. However, if trying to access the system in another way you will be prompted for a recovery key. With BitTruster, the two bits of information needed for account repossession are stored permanently in the database, allowing you to access them immediately if needed, making it both helpful and convenient to manage your data encryption.</p>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[30px]">With BitTruster BitLocker management your company can live up to its compliance obligations with significantly reduced effort needed for data protection. Not only does BitTruster have a simpler approach to make compliance reporting easier, the reporting functions of BitTruster BitLocker management can be customized to suit your needs as a company. Therefore, making it ideal for compliance solution implementation without having to hire a CIO or CISO.</p>

            </div>
            <div className="right flex items-center justify-start lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
                <img src="/assets/images/why-business-img.png" alt="Why Cios Image" className="grayscale lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] 3xl:max-w-[90%] sm:p-0 md:p-0 p-[10px]" />
            </div>
        </div>
      </section>

      {/* Action Button */}
      <section className="p-[20px] flex items-center justify-center">
        <div className="w-fit bg-red text-white text-[20px] leading-none font-medium py-[15px] px-[30px] mb-[30px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px]">
            <Link href={"#"}>
                Get Start
            </Link>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSec />
    </main>
  );
};

export default WhyBittruster;
