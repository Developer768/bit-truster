import React from 'react'
import Stat from './Stat'

const StatsSec:React.FC = () => {
  return (
    <section className="padding">
        {/* Content */}
        <div className="content flex sm:flex-col md:flex-col w-full p-[10px]">
          <div className="content-left p-[10px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
          <h2 className="sec_heading mb-[10px] lg:w-[83%] xl:w-[83%] 2xl:w-[83%] 3xl:w-[83%] ">What you should know about GDPR and CCPA and How Hard Drive encryption can protect your business</h2>
          <p className="body_text lg:w-[83%] xl:w-[83%] 2xl:w-[83%] 3xl:w-[83%] text-textGrey">As GDPR’s laws apply to businesses of every kind, the task of performing administrative duties and the need to make organizational decisions calls for solution utility maximization. Our experience of several successful implementations and countless referenceable customers, ensures you piece of mind in efficient BitLocker management. You can confide in BitTruster’s honesty and ready-to-help attitude to guide you through Microsoft BitLocker carrying out by ensuring utility and compliance.</p>
          </div>
          <div className="content-right p-[10px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
          <h2 className="sec_heading mb-[10px] lg:w-[83%] xl:w-[83%] 2xl:w-[83%] 3xl:w-[83%] ">Manage your BitLocker systems more effectively with BitTruster</h2>
          <p className="body_text lg:w-[83%] xl:w-[83%] 2xl:w-[83%] 3xl:w-[83%] text-textGrey">Managing the entire life cycle of your companies’ Microsoft BitLocker from a centralised cloud-based solution is ideal in utilizing cost, time and risk management. BitTruster ensures BitLocker can be used most effectively while being cost-efficient even in highly complex IT environments. It reduces administrative efforts by its automated management features, enabling you to protect your data all while meeting compliance regulations.</p>
          </div>
        </div>
        {/* Stats */}
        <div className="pt-[3%] px-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 gap-[20px]">
            <Stat progress={99} heading="Peace of mind" description="BitLocker management is under control" />
            <Stat progress={99} heading="Successful implementation" description="Hundreds of successful implementations" />
            <Stat progress={100} heading="Effective" description="You can count on our experience" />
            <Stat progress={100} heading="Easy to use" description="BitLocker simplified" />
            <Stat progress={95} heading="Happy Customer Service" description="We offer 24/7 unlimited support" />
            <Stat progress={99} heading="Trustworthy" description="Countless customer reference" />
            <Stat progress={99} heading="Cost effective" description="Reduce implementation cost" />
            <Stat progress={99} heading="Risk Management" description="Protect your business from data loss" />
          </div>
        </div>
      </section>
  )
}

export default StatsSec