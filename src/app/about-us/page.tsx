import CustomersSlider from "@/components/CustomersSlider";
import PartnersSlider from "@/components/PartnersSlider";
import Post from "@/components/Post";
import Statistics from "@/components/Statistics";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <main className="Product-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Aboutus_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
          About Us
        </div>
      </section>

      {/* overview */}
      <section id="company-overview" className="company-overview p-[50px]">
        <h2 className="text-black font-bold text-[45px] leading-[45px] mb-[20px]">
          Company Overview
        </h2>
        <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] ">
          BitTruster was founded on the premise that the implementation of
          Microsoft BitLocker was too difficult, decentralized and expensive.
          Therefore, our mission is to provide a simple, centralized and
          cost-effective solution to implement Microsoft BitLocker. Our team is
          dedicated to educate, inform, and help Business Owners, CIOs, and
          CISOs select and implement the best hard drive encryption solution on
          the market. Our state-of-the-art cloud-based or on-premise solution is
          designed from the ground up to support small to medium size companies
          secure their data and become compliant with GDPR and CCPA using
          Microsoft BitLocker.
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center xl:flex-row xl:justify-between xl:items-center 2xl:flex-row 2xl:justify-between 2xl:items-center 3xl:flex-row 3xl:justify-between 3xl:items-center my-[30px]">
          <h2 className="text-black font-bold text-[45px] leading-[45px] mb-[10px] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
            Statistics
          </h2>
          <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[10px] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
            We partner with the best
          </p>
        </div>
        <div className="statistics-cards  flex flex-wrap gap-5 justify-around pt-[30px]">
          <Statistics stat={10} heading="Employees" />
          <Statistics stat={200} heading="CUSTOMERS" />
          <Statistics stat={50} heading="PARTNERS" />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-team p-[50px] bg-bgGrey">
        <h2 className="text-black font-bold text-[45px] leading-[45px] mb-[40px]">
        Leadership Team
        </h2>
        <div className="team flex justify-between flex-wrap">
          <div className="team-card s-full flex  gap-4 flex-col items-start justify-center  lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row lg:w-[45%] xl:w-[33%] 2xl:w-[33%] 3xl:w-[33%] mb-6">
            <div className="image w-full flex  sm:justify-center md:justify-center lg:w-[30%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[30%] lg:mr-6  mb-4">
              <img src="/assets/images/Ralf_Picture.png" alt="Ralf_Picture" />
            </div>
            <div className="data w-full">
              <h3 className="text-black font-medium text-[24px] leading-[29px] mb-1 sm:text-center md:text-center">Ralf Kaiser</h3>
              <h3 className="text-grey font-medium text-[24px] leading-[29px] mb-4 sm:text-center md:text-center">Founder and Solution Evangelist</h3>
              <p className="text-textGrey text-[16px] leading-[24px] sm:text-center md:text-center">Ralf is one of the original inventors of BitTruster’s encryption management solution and he founded BitTruster in 2011. He believes passionately in BitTruster’s promise of simplifying BitLocker and remains our key Solution Evangelist. He has decades of experience leading technology, consulting and development teams being responsible in different roles as CEO and CTO. In one of his last roles he was responsible for Information Security and introduction of ISO 27001 at one of the major german law firms.</p>
            </div>
          </div>
          <div className="team-card s-full flex gap-4 flex-col items-start justify-center  lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row lg:w-[45%] xl:w-[33%] 2xl:w-[33%] 3xl:w-[33%] mb-6">
            <div className="image w-full flex   sm:justify-center md:justify-center lg:w-[30%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[30%] lg:mr-6  mb-4">
              <img src="/assets/images/Chris_Picture.png" alt="Chris_Picture" />
            </div>
            <div className="data w-full">
              <h3 className="text-black font-medium text-[24px] leading-[29px] mb-1 sm:text-center md:text-center">Chris Saven</h3>
              <h3 className="text-grey font-medium text-[24px] leading-[29px] mb-4 sm:text-center md:text-center">CEO</h3>
              <p className="text-textGrey text-[16px] leading-[24px] sm:text-center md:text-center">Chris joined BitTruster in 2013 to establish the company internationally by building up and developing BitTruster’s international sales and alliances. He took on the role of CEO in 2017. Prior to joining the BitTruster team, Chris held roles in territory, business development and sales management with Absolute Software, Nimsoft CA, IBM and SAP, as well as running his own sales and training consultancy. Chris is a graduate of the University of Helsinki, Finland, currently based in London.</p>
            </div>
          </div>
          <div className="team-card s-full flex gap-4 flex-col items-start justify-center  lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row lg:w-[45%] xl:w-[33%] 2xl:w-[33%] 3xl:w-[33%] mb-6">
            <div className="image w-full flex  sm:justify-center md:justify-center lg:w-[30%] xl:w-[30%] 2xl:w-[30%] 3xl:w-[30%] lg:mr-6  mb-4">
              <img src="/assets/images/Bilal_Picture.png" alt="Bilal_Picture" />
            </div>
            <div className="data w-full">
              <h3 className="text-black font-medium text-[24px] leading-[29px] mb-1 sm:text-center md:text-center">Bilal Ahmed</h3>
              <h3 className="text-grey font-medium text-[24px] leading-[29px] mb-4 sm:text-center md:text-center">CTO</h3>
              <p className="text-textGrey text-[16px] leading-[24px] sm:text-center md:text-center">Bilal recently joined the BitTruster team as CTO to lead the technology department including research and development. Bilal has a background as system analyst and software architect and being a certified cloud professional, Bilal has solid knowledge of latest technologies and systems. Before joining BitTruster Bilal held positions at Teradata and other multinational organizations. Bilal graduated from SSUET – Pakistan and currently resides in Bahrain, Manama.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Sliders */}
      <section className="customers-partners-slider p-[50px]">
        <h2 id="Customers" className="text-black font-bold text-[45px] leading-[45px] mb-[20px]">
        Customers
        </h2>
        <div className="w-full">
          <CustomersSlider />
        </div>
        <h2 id="Partners" className="text-black font-bold text-[45px] leading-[45px] mb-[20px]">
        Partners
        </h2>
        <div className="w-full">
          <PartnersSlider />
        </div>
        </section>

        {/* Recent Blogs */}
        <section className="blog-articles p-[50px] bg-bgGrey">
        <h2 className="text-black font-bold text-[45px] leading-[45px] mb-[20px]">
        Recent Blogs
        </h2>
        <div className="blog-posts max-w-[1536px] mx-auto mt-[20px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-[30px]">
            <Post />
            <Post />
            <Post />
          </div>

        </div>
      </section>

      {/* Action Banner */}
      <section className="action-banner p-[50px]">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between 3xl:flex-row 3xl:justify-between">
          <div className="image w-full lg:w-[48%] xl:w-[48%] 2xl:w-[48%] 3xl:w-[48%] mb-4">
            <img src="/assets/images/home-slider-6.png" alt="home-slider-6.png" className="grayscale w-full " />
          </div>
          <div className="content flex flex-col justify-center lg:w-[48%] xl:w-[48%] 2xl:w-[48%] 3xl:w-[48%]">
            <h3 className="text-black font-bold text-[22px] leading-[27px] xl:text-[30px] xl:leading-[40px] 2xl:text-[45px] 2xl:leading-[60px] 3xl:text-[45px] 3xl:leading-[60px] mb-[30px]">We believe great people make a great company – and we’re always looking to add more talented people.</h3>
                <Link href={"mailto:jobs@bittruster.tarbiyat.co"} className="duration-0 w-fit">
              <div className="btn border-2 border-red w-fit hover:text-white hover:border-black  hover:bg-black text-red py-[10px] px-[30px] xl:py-[30px] xl:px-[50px] 2xl:py-[30px] 2xl:px-[50px] 3xl:py-[30px] 3xl:px-[50px] font-medium text-[20px] leading-none  ">
                  Email Your Resume
              </div>
                </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
