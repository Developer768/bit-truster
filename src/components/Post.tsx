import Link from "next/link";
import React from "react";

const Post = () => {
  return (
    <div className="post post_shadow rounded-xl p-5 bg-white">
      <div className="relative mb-[30px]">

        <Link href={"#"} className="">
          <img
            src="/assets/images/post1.jpg"
            alt="post-img"
            className="post-img w-full grayscale  z-0 "
            />
        </Link>
        <img
          src="/assets/images/avatar.png"
          alt="avatar"
          className="w-[60px] h-[60px] rounded-full z-10 absolute -bottom-[30px] left-[30px]"
          />
      </div>
      <div className="mt-[50px] content">
        <h3 className="post-title text-[20px] leading-[24px] text-black font-semibold mb-[25px] line-clamp-2">
          <Link href={"#"}>
            Everything You Need to Know About Microsoft BitLocker
          </Link>
        </h3>

        <p className="text-textGrey flex items-center gap-2 font-medium text-[12px] leading-[16px] mb-[10px]">
          By
          <span className="author text-red">admin</span>
          ||
          <span className="postdate text-red">February 7, 2022</span>
        </p>
        <p className="post-desc text-textGrey text-[18px] leading-[27px] line-clamp-2 mb-[25px]">
          Being compliant under the CCPA can benefit your business. You will
          have the chance to keep data safe using BitLocker and BitTruster. And,
          your CIOs and CISOs will also have an easier time doing their job.
          They can also help you set up some CCPA related guidelines. These
          guidelines can include keeping track of the changing regulations,
          making communication a big factor, only collecting what a company
          needs, and so much more if needed.
        </p>
        <div className="mb-5">
          <Link
            href={"#"}
            className="uppercase underline text-red font-medium text-[18px] leading-[27px]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
