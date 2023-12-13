import { Icons } from '@/components/Icons';
import Link from 'next/link';
import React from 'react'
import moment from "moment"

async function getPost(slug:string) {
    const query = `
    {
        postBy(slug: "${slug}") {
            slug
            author {
              node {
                name
              }
            }
            date
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            title
            content
            categories {
              nodes {
                name
              }
            }
          }
    }
      `;
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
        query
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
        },
      }
    );
  
    const { data } = await res.json();
  
    return data.postBy;
  }

const BlogPost = async({ params }: { params: { slug: string } }) => {
    const post = await getPost(params.slug);
    console.log(post)

  return (
    <main className="Post-Page font-assistant p-[50px]">
        <article className='mx-auto max-w-[900px]'>
            <h1 className="text-red font-bold text-[45px] leading-none mb-[20px] text-center">{post.title}</h1>
            <img
            src={post.featuredImage.node.mediaItemUrl}
            // src="/assets/images/post1.jpg"
            alt="post-img"
            className="post-img w-full grayscale  z-0 aspect-auto object-cover object-center"
            />
            <p className="text-textGrey text-[18px] leading-none my-[20px] text-center">{post.title}</p>
            {/* Ebook */}
            <div className="bg-[url('/assets/images/post-ebook-bg.jpg')] bg-cover bg-center relative bg-blend-overlay">
                <div className="darkoverlay bg-black w-full h-full">
                <div className="flex flex-col gap-4 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row  p-[10px]">
                    <div className="w-full flex items-center justify-center lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                        <img src="/assets/images/ebook.png" alt="ebook" className='h-[150px] grayscale aspect-auto' />
                    </div>
                    <div className="w-full flex justify-center flex-col">
                        <h2 className="text-white font-bold text-[30px] leading-[35px] max-w-[80%]">Everything You Need to Know About Microsoft BitLocker</h2>
                        <p className="text-white font-semibold text-[16px] leading-none">by bitTruster</p>
                    </div>
                    <div className="w-full flex items-center justify-center lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                        <div className="w-fit">
                            <Link href={"https://bittruster.lpages.co/everything-you-need-to-know-about-bitlocker/"}>
                                <div className="bg-white w-fit py-[12px] px-[24px] text-black hover:bg-red hover:text-white text-[20px] leading-none text-center">Download Ebook</div>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Details */}
            <div className="details p-2">
                <div className="flex items-center flex-wrap gap-3">
                    <div className="user flex items-center gap-3">
                        <Icons.CircleUserRound className='text-red'/>
                        <Link href={"/blogs/author/"+post.author.node.name}>

                        <p className="text-textGrey text-[16px] leading-[24px]">By {post.author.node.name}</p>
                        </Link>
                    </div> |
                    <div className="category flex items-center gap-3">
                        <Icons.Tags className='text-red'/>
                        {post.categories.nodes.map((category)=>(
                          <Link href={"/blogs/category/"+category.name}>

                        <p className="text-textGrey text-[16px] leading-[24px]">{category.name}</p>
                          </Link>
                        ))}
                    </div> |
                    <div className="category flex items-center gap-3">
                        <Icons.Calendar className='text-red'/>
                        <Link href={"/blogs/date/"+post.date.substring(0,10)}>
                        <p className="text-textGrey text-[16px] leading-[24px]">{moment(post.date).format('MMMM Do YYYY')}</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="content py-5" dangerouslySetInnerHTML={{__html: post.content}}></div>
            {/* Ebook */}
            <div className="bg-[url('/assets/images/post-register-bg.jpg')] bg-cover bg-center relative bg-blend-overlay">
                <div className="whiteoverlay bg-white w-full h-full">
                <div className="flex flex-col gap-4 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row  p-[10px]">
                    <div className="w-full flex items-center justify-center lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                        <img src="/assets/images/webinar-image.png" alt="webinar-image.png" className='h-[150px] grayscale aspect-auto' />
                    </div>
                    <div className="w-full flex justify-center flex-col">
                        <h2 className="text-red font-bold text-[30px] leading-[35px] max-w-[80%]">Everything You Need to Know About Microsoft BitLocker</h2>
                        <p className="text-black font-semibold text-[16px] leading-none">by bitTruster</p>
                    </div>
                    <div className="w-full flex items-center justify-center lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                        <div className="w-fit">
                            <Link href={"https://bittruster.lpages.co/everything-you-need-to-know-about-bitlocker/"}>
                                <div className="bg-red w-fit py-[12px] px-[24px]  hover:bg-black text-white text-[20px] leading-none text-center">Register Now</div>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </article>
    </main>
  )
}

export default BlogPost