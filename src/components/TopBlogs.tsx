
import React from "react";
import Post from "./Post";
import { Suspense } from "react";

async function getPosts() {
    const query = `
    {
      posts(first: 5) {
        nodes {
          title
          content
          uri
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

const TopBlogs: React.FC = async() => {
    const posts = await getPosts();
    console.log(posts)


  return (
    <>
      <Post />
      <Post />
      <Post />
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
