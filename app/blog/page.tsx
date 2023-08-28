import Post from "@/components/Post/Post";
import PostSearch from "@/components/Post/PostSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog'
}

const Blog = () => {
  
  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4">Посты</h1>
        <PostSearch />
        <Post />
      </div>
    </>
  )
}

export default Blog;