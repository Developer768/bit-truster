import Link from 'next/link'
import React from 'react'

const GetStarted:React.FC = () => {
  return (
    <main className="Get-Started-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Aboutus_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-50 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
          Get Started
        </div>
      </section>

      {/* Info Content */}
      <section className="info-content padding">
      {/* We put the Trust in BitTruster */}
        <div className="we-put-trust why-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row items-center mb-[30px]">
            <div className="left w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%] mb-5">
            <h2 className="pb-[20px] text-[30px] lg:text-[42px] xl:text-[42px] 2xl:text-[42px] 3xl:text-[42px] leading-none font-bold">We put the Trust in BitTruster</h2>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[30px]">Trust that you are working with a company that has won the credibility of its peers in the industry regarding efficient data encryption and management.
            <br/>See for yourself why BitTruster is the best BitLocker encryption management solution with a 30-day free trial.</p>
            <Link  href={"/discount-code-registeration"} className="duration-0 w-fit">
              <div className="btn border-2 border-red w-fit hover:text-white hover:border-black  hover:bg-black font-bold text-red py-[10px] px-[30px] xl:py-[20px] xl:px-[40px] 2xl:py-[20px] 2xl:px-[40px] 3xl:py-[20px] 3xl:px-[40px] text-[20px] leading-none  ">
                  Free Trial
              </div>
                </Link>
            </div>
            <div className="right flex items-center justify-end w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                <img src="/assets/images/why-cio-img.png" alt="Why Cios Image" className="grayscale lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] 3xl:max-w-[90%] p-[10px] sm:p-0 md:p-0" />
            </div>
        </div>
        {/* Learn more about BitTruster */}
        <div className="learn-more why-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row items-center flex-wrap-reverse ">
        <div className="right flex items-center justify-start sm:hidden md:hidden lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                <img src="/assets/images/why-business-img.png" alt="Why Cios Image" className="grayscale lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] 3xl:max-w-[90%] p-[10px] sm:p-0 md:p-0" />
            </div>
            <div className="left w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%] mb-5">
            <h2 className="pb-[20px] text-[30px] lg:text-[42px] xl:text-[42px] 2xl:text-[42px] 3xl:text-[42px] leading-none font-bold">Learn more about BitTruster</h2>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[30px]">You can count on BitTruster’s knowledge about Microsoft BitLocker and our willingness for customer guidance whenever needed. Book your free consultation to learn more about BitTruster implementation and its perks!</p>
            <Link  href={"https://calendly.com/bittruster/call"} className="duration-0 w-fit">
              <div className="btn border-2 border-red w-fit hover:text-white hover:border-black  hover:bg-black font-bold text-red py-[10px] px-[30px] xl:py-[20px] xl:px-[40px] 2xl:py-[20px] 2xl:px-[40px] 3xl:py-[20px] 3xl:px-[40px] text-[20px] leading-none  ">
              Schedule a Consultation
              </div>
                </Link>
            </div>
            <div className="right flex items-center justify-start lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
                <img src="/assets/images/why-business-img.png" alt="Why Cios Image" className="grayscale lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] 3xl:max-w-[90%] sm:p-0 md:p-0 p-[10px]" />
            </div>
        </div>
        {/* Become a member */}
        <div className="become-a-member why-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row items-center mb-[30px]">
            <div className="left w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%] my-[30px]">
            <h2 className="pb-[20px] text-[30px] lg:text-[42px] xl:text-[42px] 2xl:text-[42px] 3xl:text-[42px] leading-none font-bold">Become a member</h2>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-[30px]">Start enjoying the benefits of efficient BitLocker encryption management solution for a monthly subscription $1.99</p>
            <Link  href={"/discount-code-registeration"} className="duration-0 w-fit">
              <div className="btn border-2 border-red w-fit hover:text-white hover:border-black  hover:bg-black font-bold text-red py-[10px] px-[30px] xl:py-[20px] xl:px-[40px] 2xl:py-[20px] 2xl:px-[40px] 3xl:py-[20px] 3xl:px-[40px] text-[20px] leading-none  ">
                  Sign up now
              </div>
                </Link>
            </div>
            <div className="right flex items-center justify-end w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                <img src="/assets/images/typing.png" alt="typing.png" className="grayscale lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] 3xl:max-w-[90%] p-[10px] sm:p-0 md:p-0" />
            </div>
        </div>
      </section>
      </main>
  )
}

export default GetStarted