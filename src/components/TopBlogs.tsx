
import React from "react";
import Post from "./Post";

async function getPosts() {
    const query = `
    {
      posts(first: 3) {
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

  type PostType = {
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
      node: {
        avatar : {
          url:string,
        }
        name: string,
      }
     }
  }

const TopBlogs: React.FC = async() => {
    const posts:PostType[] = await getPosts();
    console.log(posts)


  return (
    <>
    {
      posts.map((post)=>(
        <Post key={post.title} title={post.title} featuredImage={post.featuredImage} excerpt={post.excerpt} date={post.date} slug={post.slug} author={post.author.node} />
      ))
    }
    </>
  );
};

export default TopBlogs;



// "use client"
// import React, { useEffect, useState } from "react";
// import Post from "./Post";
// import { getTopPosts } from "@/headlessCalls/getTopPosts";



// const TopBlogs: React.FC = () => {
//     const [posts,setPosts] = useState();
    
//     useEffect(() => {
//         async function getData() {
//             // const posts = await getTopPosts();
//             setPosts(await getTopPosts())
//         }
//         getData();
//     }, [])
    
//     console.log(posts)

//   return (
//     <>
//       <Post />
//       <Post />
//       <Post />
//     </>
//   );
// };

// export default TopBlogs;
