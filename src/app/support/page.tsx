import Link from "next/link";
import React from "react";

const Support = () => {
  return (
    <main className="Support-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Support_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
          About Us
        </div>
      </section>

      {/* Actions */}
      <section className="actions p-[50px]">
        <h2 className="text-black font-bold text-[32px] leading-none mb-[20px]">
          BitTruster Support
        </h2>
        <p className="text-textGrey text-[16px] leading-none mb-[20px]">
          BitTruster offers solution support, troubleshooting and solution
          upgrades to all our active subsription and support contract customers.
        </p>
        <div className="btn w-fit">
        <Link
          href={"https://bittruster.atlassian.net/servicedesk/customer/portal/"}
          className="duration-0 w-fit"
        >
          <div className="btn border-2 border-red w-fit bg-red  text-white hover:text-white hover:border-black  hover:bg-black text-red   font-medium text-[20px] leading-none  px-[40px] py-[20px]">
            Customer Portal
          </div>
        </Link>
        </div>
        <p className="text-textGrey text-[16px] leading-none my-[20px]">
          Our working languages are English and German. You can also access our
          solution knowledge base for answers to common questions
        </p>
        <div className="btn w-fit">
        <Link
          href={"https://bittruster.atlassian.net/wiki/x/waw"}
          className="duration-0 w-fit"
        >
          <div className="btn border-2 border-red w-fit bg-red  text-white hover:text-white hover:border-black  hover:bg-black text-red   font-medium text-[20px] leading-none  px-[40px] py-[20px]">
            Knowledge Base
          </div>
        </Link>
        </div>
      </section>
    </main>
  );
};

export default Support;
