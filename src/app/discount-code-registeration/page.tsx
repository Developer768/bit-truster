import DiscountCodeRegistrationForm from '@/components/Forms/DiscountCodeRegistrationForm'
import React from 'react'

const DiscountCodeRegisteration:React.FC = () => {
  return (
    <main className="discount-code-registeration-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Why_BitTruster_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
        Discount Code Registeration
        </div>
      </section>

      {/* Imprint | Impressum */}
      <section className="Discount-Code-Registeration padding">
      {/* Imprint | Impressum */}
        <div className="Discount-Code-Registeration-form max-w-[672px] mx-auto mb-[30px]">
        <p className="text-textGrey text-[16px] leading-[24px] text-center mb-5">To continue with your subscription, insert your name and <br /> email address down below.</p>
        <div className="Discount-Code-Registration-Form">
            <DiscountCodeRegistrationForm />
        </div>
        <p className="text-textGrey text-[16px] leading-[24px] text-center">Thank you for choosing us!</p>
        </div>
        </section>
      </main>
  )
}

export default DiscountCodeRegisteration