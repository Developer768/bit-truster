import Post from '@/components/Post'
import React from 'react'

const Blogs = () => {
  return (
    <main className="Start-A-Free-Trial-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Pricing_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
        Blogs
        </div>
      </section>

      {/* Imprint | Impressum */}
      <section className="blogs padding ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-[30px]">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
      </section>
      </main>
  )
}

export default Blogs