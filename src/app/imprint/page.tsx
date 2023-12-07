import Link from 'next/link'
import React from 'react'

const Imprint:React.FC = () => {
  return (
    <main className="Imprint-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Pricing_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-50 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
          Imprint
        </div>
      </section>

      {/* Imprint | Impressum */}
      <section className="Imprint padding">
      {/* Imprint | Impressum */}
        <div className="we-put-trust max-w-[1140px] mx-auto mb-[30px]">
            <h2 className="pb-[20px] text-[30px] lg:text-[42px] xl:text-[42px] 2xl:text-[42px] 3xl:text-[42px] leading-none font-bold">Imprint | Impressum</h2>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">We assume no liability for the accuracy, completeness and topicality of the information.
            <br/>
            The following company is responsible for the content of this Web site:</p>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">BitTruster GmbH</p>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">Breuerwiesenstrasse 43
            <br/> 65929 Frankfurt</p>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">Vertreten durch:
            <br/>Ralf Kaiser</p>
            <div className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">
            <ul className="text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] text-textGrey">
                <li className="mb-1">
                Kontakt:
                </li>
                <li className="mb-1">
                    <Link href={"tel:+4969175370-870"} className="">Telefon: <span className="text-red text-[20px] leading-[30px]"> +49 69 175 370 – 870</span></Link>
                </li>
                <li className="mb-1">
                    <Link href={"fax:+4969175370–879"} className="">Telefax: <span className="text-red text-[20px] leading-[30px]"> +49 69 175 370 – 879</span></Link>
                </li>
                <li className="mb-1">
                    <Link href={"mailto:info@bittruster.com"} className="">Email: <span className="text-red text-[20px] leading-[30px]"> info@bittruster.com</span></Link>
                </li>
               
            </ul></div>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">
            Registereintrag
            <br/>
            Registergericht: Amtsgericht Frankfurt am Main
            <br />
            Registernummer: HRB 96708
            <br />
            Umsatzsteuer-ID: DE 279 577 672
            </p>
            <h3 className="pb-4 pt-2 text-[28px]  leading-[32px]  text-textGrey font-medium">Data protection</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">To the extent that as part of this Web site, users can enter personal or business data (email addresses, names, addresses) such data shall be deemed to have be provided by the user on an explicitly voluntary basis. Your data will be stored to memory by us for the purposes of the transaction desired. All data will be treated confidentially and not forwarded to third parties. Use of and payment for all services offered is, to the extent that this is technically possible and feasible, made possible without the need to enter such data and/or using anonymized data or a pseudonym. Use by third parties is not permitted of the contact data such as postal addresses, phone and fax numbers or email addresses provided in the imprint for the purposes of sending information to us that we have not explicitly requested. We expressly reserve the right to take legal action against persons sending so-called spam mail and violating the above prohibition.</p>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">To the extent that the Web site gives users an opportunity to enter personal or business data (email addresses, names, addresses) such data shall be deemed to have be provided by the user on an explicitly voluntary basis.</p>
            <h3 className="pb-4 pt-2 text-[28px]  leading-[32px]  text-textGrey font-medium">Google Analytics</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">This Web site uses Google Analytics, a proprietary Google Inc. (“Google”) Web analysis service. Google Analytics makes use of so-called “Cookies”, i.e., text files that are stored to your computer and enable an analysis of how you use the Web site. The information the cookie generates on how you used this Web site (including your IP address) will be transferred to a Google server in the United States and stored to memory there. Google will use this information to evaluate your use of the Web site, compile reports on the Web site activities for the Web site operator, and in order to provide additional services relating to the use of the Web site and the Internet. Google will potentially forward this information to third parties to the extent that this is legally mandatory or to the extent that third parties process this data on Google’s behalf. Google will in no event link your IP address with other data held by Google. You can prevent the installation of cookies by activating the relevant setting in your browser software; we would like to point out that in this case you may possibly not be able to fully use all the functions of this Web site. By using this Web site you declare that you agree to Google processing the data gathered on you in the above-described way and for the afore-mentioned purpose.</p>
            <h3 className="pb-4 pt-2 text-[28px]  leading-[32px]  text-textGrey font-medium">Copyrights</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">2021</p>


        </div>
        </section>
      </main>
  )
}

export default Imprint