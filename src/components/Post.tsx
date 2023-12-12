import Link from "next/link";
import React from "react";
import moment from "moment"

type Props = {
  title: string,
  featuredImage: {
    node: {
      mediaItemUrl: string,
    }
  },
  excerpt: string ,
  slug: string,
  date: string,
  author: { 
    // node: {
      avatar : {
        url:string,
      }
      name: string,
    // }
   }
}

const Post: React.FC<Props> = ({title="",featuredImage,excerpt="",slug="",date,author}) => {
  // const {node:{mediaItemUrl}} = featuredImage;
  return (
    <div className="post post_shadow rounded-xl p-5 bg-white">
      <div className="relative mb-[30px]">

        <Link href={"/"+slug} className="">
          <img
            src={featuredImage.node.mediaItemUrl}
            alt="post-img"
            className="post-img w-full grayscale  z-0 aspect-auto h-[300px] object-cover object-center"
            />
        </Link>
        {/* <Link href={"#"} className="">
          <img
            src="/assets/images/post1.jpg"
            alt="post-img"
            className="post-img w-full grayscale  z-0 "
            />
        </Link> */}
        <img
          src={author.avatar.url}
          // src="/assets/images/avatar.png"
          alt="avatar"
          className="w-[60px] h-[60px] rounded-full z-10 absolute -bottom-[30px] left-[30px]"
          />
      </div>
      <div className="mt-[50px] content">
        <h3 className="post-title text-[20px] leading-[24px] text-black font-semibold mb-[25px] line-clamp-2">
          <Link href={"/"+slug}>
            {/* Everything You Need to Know About Microsoft BitLocker */}
            {title}
          </Link>
        </h3>

        <p className="text-textGrey flex items-center gap-2 font-medium text-[12px] leading-[16px] mb-[10px]">
          By
          <span className="author text-red">{author.name}</span>
          ||
          <span className="postdate text-red">{moment(date).format('MMMM Do YYYY')}</span>
        </p>
        <div className="post-desc text-textGrey text-[18px] leading-[27px] line-clamp-2 mb-[25px]" dangerouslySetInnerHTML={{__html: excerpt}}>
          {/* {excerpt} */}
        </div>
        {/* <p className="post-desc text-textGrey text-[18px] leading-[27px] line-clamp-2 mb-[25px]" >
          {excerpt}
        </p> */}
        <div className="mb-5">
          <Link
            href={"/"+slug}
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
