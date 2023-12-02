import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer padding bg-bgGrey font-assistant text-black">
      <div className="logo w-[40%] md:w-[25%] lg:w-[20%] xl:w-[20%] 2xl:w-[15%] 3xl:w-[10%]">
        <Link href={"/"}>
          <img src="./assets/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="flex flex-wrap">
        {/* Quick Links */}
        <div className="quick-links w-full xl:w-[75%] 2xl:w-[75%] 3xl:w-[75%] flex flex-wrap ">
        {/* Get Started */}
        <div className="get-started pt-5 w-full lg:w-[50%] xl:w-[33.3%] 2xl:w-[33.3%] 3xl:w-[33.3%]">
            <h4 className="links-heading font-bold text-[24px] leading-[24px] uppercase mb-5">
                Get Started
            </h4>
            <ul className="text-[18px] leading-[24px] text-black">
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Start a Free Trial</Link>
                </li>
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Sign-up</Link>
                </li>
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Schedule a Consultation</Link>
                </li>
            </ul>
        </div>
        {/* Product */}
        <div className="product pt-5 w-full lg:w-[50%] xl:w-[33.3%] 2xl:w-[33.3%] 3xl:w-[33.3%]">
            <h4 className="links-heading font-bold text-[24px] leading-[24px] uppercase mb-5">
                Product
            </h4>
            <ul className="text-[18px] leading-[24px] text-black">
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Product Overview</Link>
                </li>
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Why BitTruster ?</Link>
                </li>
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Pricing</Link>
                </li>
            </ul>
        </div>
        {/* About Us */}
        <div className="about-us pt-5 w-full lg:w-[50%] xl:w-[33.3%] 2xl:w-[33.3%] 3xl:w-[33.3%]">
            <h4 className="links-heading font-bold text-[24px] leading-[24px] uppercase mb-5">
                About us
            </h4>
            <ul className="text-[18px] leading-[24px] text-black">
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Company Overview</Link>
                </li>
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Customers</Link>
                </li>
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Blog</Link>
                </li>
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Partners</Link>
                </li>
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Imprint</Link>
                </li>
                <li className="mb-1">
                    <Link href={"#"} className=" hover:text-red duration-300">Start A Free Trial</Link>
                </li>
            </ul>
        </div>
        {/* Contact Info */}
        <div className="contact-info pt-5 w-full lg:w-[50%] xl:w-[33.3%] 2xl:w-[33.3%] 3xl:w-[33.3%]">
            <h4 className="links-heading font-bold text-[24px] leading-[24px] uppercase mb-5">
                Contact Info
            </h4>
            <ul className="text-[16px] leading-[24px] text-textGrey">
                <li className="mb-1">
                    BitTruster GmbH Breuerwiesenstrasse 43 <br /> 65929 Frankfurt Germany
                </li>
                <li className="mb-1">
                    <Link href={"tel:+4969175370"} className="">Phone: <span className="text-red text-[20px] leading-[30px]"> +49 69 175 370 – 870</span></Link>
                </li>
                <li className="mb-1">
                    <Link href={"fax:+4969175370"} className="">Fax: <span className="text-red text-[20px] leading-[30px]"> +49 69 175 370 – 879</span></Link>
                </li>
                <li className="mb-1">
                    <Link href={"mailto:info@bittruster.com"} className="">Email: <span className="text-red text-[20px] leading-[30px]"> info@bittruster.com</span></Link>
                </li>
               
            </ul>
        </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form hidden xl:block 2xl:block 3xl:block">
        <h4 className="links-heading font-bold pt-5 text-[24px] leading-[24px] uppercase mb-5">
                Contact Us
            </h4>
        </div>

        <div className="socials w-full pt-5">
        <ul className="text-[16px] leading-[24px] text-black lg:flex xl:flex 2xl:flex 3xl:flex items-center gap-4 mb-4">
                <li className="mb-1 w-fit mr-2">
                    <Link href={"https://twitter.com/bittruster"} className="text-black text-[30px] leading-[45px] font-bold hover:text-red flex items-center gap-2">
                        <Icons.twitter className=" text-black fill-black" />
                        SalesBitTruster</Link>
                </li>
                <li className="mb-1 w-fit mr-2">
                    <Link href={"https://www.facebook.com/bittruster"} className="text-black text-[30px] leading-[45px] font-bold hover:text-red flex items-center gap-2">
                        <Icons.facebook className=" text-black fill-black" />
                        BitTruster</Link>
                </li>
                <li className="mb-1 w-fit mr-2">
                    <Link href={"https://www.linkedin.com/company/bittruster-gmbh"} className="text-black text-[30px] leading-[45px] font-bold hover:text-red flex items-center gap-2">
                        <Icons.linkedin className=" text-black fill-black" />
                        LinkedIn</Link>
                </li>
                
            </ul>
            <p className="mb-4 text-textGrey text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] xl:text-[20px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[20px] 3xl:leading-[30px]">
                Copyright © 2023 All rights reserved I Designed with  by 
                <span className="text-red text-[20px] leading-[30px]"><Link href={"https://brandsonify.com/"}> Brandsonify.</Link></span>
                </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
