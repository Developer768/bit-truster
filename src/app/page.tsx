import StatsSec from "@/components/StatsSec";
import TestimonialsSec from "@/components/TestimonialsSec";
import TopBlogs from "@/components/TopBlogs";
import Link from "next/link";

export default function Home  () {
  return (
    <main className="Home-Page font-assistant text-black">
      {/* Hero Section */}
      <section className="hero flex sm:flex-col md:flex-col w-full">
        <div className="register-hero bg-cover bg-center bg-[url(/assets/images/home-register-hero.jpg)] w-full h-screen lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%] ">
          <div className="w-full h-full bg-[#C0C0C0E3] flex items-center p-[50px]">
            <div>
              <h1 className="xl:max-w-[90%] 2xl:max-w-[85%] 3xl:max-w-[80%] text-[28px] leading-[38px] lg:text-[32px] lg:leading-[55px] xl:text-[45px] xl:leading-[55px] 2xl:text-[45px] 2xl:leading-[55px] 3xl:text-[60px] 3xl:leading-[70px]   font-semibold">
                Everything You Need to Know About Microsoft BitLocker
              </h1>
              <h6 className="text-[16px] leading-[16px] font-bold mb-5">by BitTruster</h6>
              <div className="register-action clipped-btn bg-red text-white hover:bg-white hover:text-black cursor-pointer w-fit py-[15px] px-[30px] text-[20px] leading-none font-semibold">
                <Link href={"/discount-code-registeration"}>
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ebook-hero bg-cover bg-[url(/assets/images/home-ebook-hero.jpg)] w-full h-screen lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%] ">
        <div className="w-full h-full bg-[#252423CC] flex items-center p-[50px]">
            <div>
              <h1 className="xl:max-w-[90%] 2xl:max-w-[85%] 3xl:max-w-[80%] text-[28px] leading-[38px] lg:text-[32px] lg:leading-[55px] xl:text-[45px] xl:leading-[55px] 2xl:text-[45px] 2xl:leading-[55px] 3xl:text-[60px] 3xl:leading-[70px]   text-white font-semibold">
              Everything You Need to Know About Microsoft BitLocker
              </h1>
              <h6 className="text-[16px] leading-[16px] font-bold mb-5 text-white">by BitTruster</h6>
              <div className="download-action clipped-btn bg-white text-black hover:bg-red hover:text-white cursor-pointer w-fit py-[15px] px-[30px] text-[20px] leading-none font-semibold">
                <Link target="_blank" href={"https://bittruster.lpages.co/everything-you-need-to-know-about-bitlocker/"}>
                  Download Ebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <StatsSec />

      {/* Testimonials */}
      <TestimonialsSec />
      
      {/* Blog Articles */}
      <section className="blog-articles padding">
        <div className="head mb-[50px] flex sm:flex-col md:flex-col">
        <h2 className="sec_norm_heading  text-black lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">Recent Blog Articles</h2>
        <div className="info lg:w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
        <h2 className="sec_norm_heading  mb-5 text-black">Make data protection a priority in your organization.</h2>
        <p className="desc text-[16px] leading-[24px] lg:text-[22px] lg:leading-[33px] xl:text-[22px] xl:leading-[33px] 2xl:text-[22px] 2xl:leading-[33px] 3xl:text-[22px] 3xl:leading-[33px] mb-[14px]  text-textGrey ">Make sure your business is meeting industry standards for both compliance and security!

</p>
        </div>
        </div>
        <div className="blog-posts max-w-[1536px] mx-auto mt-[20px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-[30px]">
            <TopBlogs />
          </div>

        </div>
      </section>
    </main>
  );
}
