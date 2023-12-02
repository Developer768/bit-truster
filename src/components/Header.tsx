import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";

const Header = () => {
  return (
    <header className="py-1 px-5 md:py-1 md:px-6 lg:py-2 lg:px-9 xl:py-3 xl:px-[60px] 2xl:py-3 2xl:px-[60px] 3xl:py-5 3xl:px-[95px] flex items-center justify-between text-black bg-white shadow-md">
      <Link
        href={"/"}
        className="w-[30%] lg:w-[15%] xl:w-[15%] 2xl:w-[15%] 3xl:w-[15%]"
      >
        <img src="./assets/images/logo.png" alt="Logo" />
      </Link>
      <div className="flex items-center justify-between">
        <nav className="hidden xl:flex 2xl:flex 3xl:flex font-normal text-[18px] 2xl:text-[20px] 3xl:text-[20px] mx-4">
          <Link href={"/why-bittruster"} className="py-1 px-[10px] 2xl:mx-2 3xl:mx-5">Why BitTruster ?</Link>
          <Link href={"/product"} className="py-1 px-[10px] 2xl:mx-2 3xl:mx-5">Product</Link>
          <Link href={"/pricing"} className="py-1 px-[10px] 2xl:mx-2 3xl:mx-5">Pricing</Link>
          <Link href={"/about-us"} className="py-1 px-[10px] 2xl:mx-2 3xl:mx-5">About Us</Link>
          <Link href={"/support"} className="py-1 px-[10px] 2xl:mx-2 3xl:mx-5">Support</Link>
          <Link href={"#"} className="py-1 px-[10px] 2xl:mx-2 3xl:mx-5">Login</Link>
        </nav>
        <div className="flex xl:hidden 2xl:hidden 3xl:hidden border-2 border-black p-1 mx-2 lg:p-[6px]">
            <Icons.menu className="" />
        </div>
        <Link href={""} className="uppercase text-[14px] lg:text-[16px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[20px] lg:font-normal  leading-[1.3em] tracking-[1.53px] border-2 border-black p-2 lg:py-2 lg:px-5 xl:py-2 xl:px-5 2xl:py-2 2xl:px-5 3xl:py-4 3xl:px-5 text-black hover:border-red hover:text-white hover:bg-red">
          Get Start
        </Link>
      </div>
    </header>
  );
};

export default Header;
