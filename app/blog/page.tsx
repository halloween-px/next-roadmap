import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Blog'
}

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  });

  if(!response.ok) throw new Error("Пришла пизда");
  return response.json();
}

const Blog = async () => {
  const posts = await getData();
  return (
    <>
      <div className="container">
        <h1>Посты</h1>
        <ul className="flex flex-col gap-4">
          {posts.map((post: any) => {
            return (
              <li key={`blog${post.id}`}>
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Blog;