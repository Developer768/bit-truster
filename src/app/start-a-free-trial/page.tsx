import TrialForm from '@/components/Forms/TrialForm'
import React from 'react'

const StartAFreeTrial = () => {
  return (
    <main className="Start-A-Free-Trial-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Start_A_Free_Trial_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
        Start A Free Trial
        </div>
      </section>

      {/* Imprint | Impressum */}
      <section className="Imprint padding ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 lg:gap-5 xl:gap-5 2xl:gap-5 3xl:gap-5">
            <div className="form w-full">
                <TrialForm />
            </div>
            <div className="map w-full">
            <iframe loading="lazy" className='w-full h-full' src="https://maps.google.com/maps?q=BitTruster%20GmbH&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="BitTruster GmbH" aria-label="BitTruster GmbH"></iframe>
            </div>
        </div>
      </section>
      </main>
  )
}

export default StartAFreeTrial