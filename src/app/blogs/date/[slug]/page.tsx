import Post from '@/components/Post';
import React from 'react'


async function getPosts(slug:string) {
    const query = `
    {
        posts(where: {dateQuery: {compare: "${slug}"}}) {
            nodes {
              title
              excerpt
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              content
              slug
              date
              author {
                node {
                  avatar {
                    url
                  }
                  name
                }
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
  
    return data.posts.nodes;
  }

const PostsbyDate = async({ params }: { params: { slug: string } }) => {
    const posts = await getPosts(params.slug);
    console.log(posts)
  return (
    <main className="Start-A-Free-Trial-Page font-assistant text-black">
      {/* Page Header */}
      <section className="header bg-[url(/assets/images/Pricing_Page_Header.png)] bg-cover bg-center py-[50px] relative flex items-center justify-center">
        <div className="overlay absolute top-0 bg-black opacity-60 w-full h-full z-[1]"></div>
        <div className="title text-white w-full h-full flex items-center justify-center text-[48px] leading-[48px] font-bold z-10 p-[10px] text-center min-h-[180px]">
        Blogs by Date
        </div>
      </section>

      <section className="blogs padding ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-[30px]">
      {
      posts.map((post)=>(
        <Post key={post.title} title={post.title} featuredImage={post.featuredImage} excerpt={post.excerpt} date={post.date} slug={post.slug} author={post.author.node} />
      ))
    }
          </div>
      </section>
      </main>
  )
}

export default PostsbyDate