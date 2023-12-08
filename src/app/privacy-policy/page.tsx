import Link from 'next/link'
import React from 'react'

const PrivacyPolicy:React.FC = () => {
  return (
    <main className="Privacy-Policy-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Pricing_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
        Privacy Policy
        </div>
      </section>

      {/* Imprint | Impressum */}
      <section className="Imprint padding">
      {/* Imprint | Impressum */}
        <div className="we-put-trust max-w-[1140px] mx-auto mb-[30px]">
            <h2 className="pb-[20px] text-[30px] lg:text-[42px] xl:text-[42px] 2xl:text-[42px] 3xl:text-[42px] leading-none font-bold">BitTruster Privacy Policy</h2>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4 font-semibold">Last updated: May 21, 2021</p>
            <h3 className="pb-4 text-[26px]  leading-[30px]  text-textGrey font-medium">Our Privacy Policy in a nutshell</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4 ">The following notes give you an overview of how we collect and process your information.</p>
            <h3 className="pb-4 text-[26px]  leading-[30px]  text-textGrey font-medium">Your rights as a user of our services</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4 ">You have the right to information, correction, blocking or deletion of your data at any time. Any given consent can be revoked at any time and you may partially object to the processing of your data, even if no consent was required from you for the processing.</p>
            <h3 className="pb-4 text-[26px]  leading-[30px]  text-textGrey font-medium">Data we collect about you</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4 ">On the one hand, your data is captured because you communicate it to us. This may, for example, be data that you enter in our contact form. Other data is collected automatically when visiting the website through our IT systems. These are above all technical data (e.g. Internet browser, operating system or time of the page request). The collection of this data is automatic as soon as you visit our platform.</p>
            <div className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">
            <ul className="ml-[40px]  text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] list-disc text-textGrey">
                <li className="mb-1">
                <span className='font-bold'>Registration Information:</span>When you register for BitTruster (for our free offer, paid subscription, or use of a code), we collect the personal information that you voluntarily provide to us when registering through your access device.
                </li>
                <li className="mb-1">
                <span className='font-bold'>Mobile Advertising ID:</span>If not disabled by the user, we collect the Mobile Advertising ID provided by your mobile device. If you do not want us to collect this Mobile Advertising ID, you can always disable or change this on your device. Please see
                 <span className='text-red underline mx-[6px]'>
                    <Link href={"https://support.apple.com/en-us/HT205223"}>
                     this manual for iOS devices 
                    </Link>
                    </span>
                 and 
                <span className='text-red underline mx-[6px]'>
                <Link href={"https://policies.google.com/technologies/ads?hl=en"}>
                 this manual for Android devices.
                    </Link>
                </span>
                </li>
                <li className="mb-1">
                <span className='font-bold'>Cookies and Cookie-Policy:</span>For the provision of the BitTruster service and to make our offer more user-friendly, effective and secure, we also use so-called cookies for data collection and storage. Cookies are small data packets that are stored on your device and do no harm. We collect Cookies in the following categories:
                </li>
            </ul></div>
            <div className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">
            <ul className="ml-[80px] text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] list-disc text-textGrey">
                <li className="mb-1">
                <span className='font-bold'>Necessary technical or functional cookies:</span>They help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                </li>
                <li className="mb-1">
                <span className='font-bold'>Preference cookies:</span>They enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.
                </li>
                <li className="mb-1">
                <span className='font-bold'>Statistical cookies:</span>They help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.
                </li>
                <li className="mb-1">
                <span className='font-bold'>Marketing cookies: </span>They are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
                </li>
            </ul></div>
            <div className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">
            <ul className="ml-[40px]  text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] list-disc text-textGrey">
                <li className="mb-1">
                <span className='font-bold'>Tracking Services:</span>We use tracking services to collect information about the behavior of visitors to our pages. So we can ensure an optimal user experience. These services use pseudonymised user profiles with the help of cookies, so that a direct inference to persons is not possible. Of course you can contradict the creation of these profiles at any time. Incidentally, each access device can be configured in such a way that basically no cookies can be created at all, or they can be deleted directly after the session.
                </li>
                <li className="mb-1">
                <span className='font-bold'>Social Plugins:</span>Our pages contain buttons from various social networks so that you can recommend our offers, services and / or products to other interested people. If you click on such a button, data such as your current IP address, browser and access device information (type and operating system), the resolution of the screen, if you have plug-ins installed will be the referrer (from where you came to the site) and the current URL to the site operator.
                </li>
                <li className="mb-1">
                <span className='font-bold'>Newsletter: </span>When you sign up for our newsletter, your email address will be used for information on advertising and advertising purposes. Of course, this is voluntary and you can even after the consent at any time unsubscribe.
                </li>
                <li className="mb-1">
                <span className='font-bold'>Payment Information:</span> If you use our free access, any of our trial phases or any of our subscriptions or you purchase anything through the Service, credit card information and other financial information we need to process the payment will be collected and stored with a payment service provider. We ourselves receive very little information from the payment providers about you.
                </li>
                <li className="mb-1">
                <span className='font-bold'>Personal Data of Children:</span>We are not aware of collecting personal data from children under 16 years of age; if you are under 16 years of age, please do not register for BitTruster or send us any personal data. If we learn we have collected personal data from a child under 16 years of age, we will delete that information as quickly as possible.
                </li>
            </ul></div>
            <h3 className="pb-4 text-[26px]  leading-[30px]  text-textGrey font-medium">How we collect your data</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4 ">We collect your data in three different ways:</p>
            <div className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">
            <ul className="ml-[40px]  text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] list-disc text-textGrey">
                <li className="mb-1">Automated when you visit our website</li>
                <li className="mb-1">Through cookies</li>
                <li className="mb-1">Through your voluntary input</li>
            </ul></div>
            <h3 className="pb-4 text-[26px]  leading-[30px]  text-textGrey font-medium">What we use your data for</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4 ">We want to offer you a faultless use of our services. Therefore, data is needed for the administration and troubleshooting of our websites. We pass on the collected data for processing to the respective internal departments or to external service providers and contract processors according to the required purposes. However, as we are constantly improving ourselves and offering you optimized services, data in pseudonymised form (through usage profiles) are also needed for advertising and / or market research. Of course, this can be contradicted at any time.</p>
            <h3 className="pb-4 text-[26px]  leading-[30px]  text-textGrey font-medium">How we work with partners</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4 ">In some cases, your data is also processed with the help of third-party providers of various online services (please refer to our privacy policy in detail further below). However, this is exclusively regulated by data processing agreements and the processing is instruction-bound, so that we always keep the responsibility for the processing. Processors from a third country outside the European Economic Area only receive access to personal data if these third countries offer an appropriate level of data protection in connection with an adequacy decision by the EU Commission or if we have suitable guarantees with these service providers (so-called Standard Contractual Clauses in accordance with Art. 46 GDPR)</p>
            <h3 className="pb-4 text-[26px]  leading-[30px]  text-textGrey font-medium">Use of your data for other purposes</h3>
            <p className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4 ">In addition to the purposes already mentioned, we are also subject to legal requirements. These are:</p>
            <div className="text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] mb-4">
            <ul className="ml-[40px] text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px] list-disc text-textGrey">
                <li className="mb-1">Any request for information (and the related disclosure) to governmental authorities</li>
                <li className="mb-1">Any request for information (and the related disclosure) to copyright holders</li>
                <li className="mb-1">For the misuse recognition of our provided services</li>
                <li className="mb-1">Trouble-shooting or -avoidance</li>
            </ul></div>
        </div>
        </section>
      </main>
  )
}

export default PrivacyPolicy