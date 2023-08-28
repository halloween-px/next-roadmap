import getPost from '@/services/posts/getPost';
import type { Metadata } from 'next'

type Props = {
  params: {
    id: string,
  }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getPost(id);
  return {
    title: `Blog ${post.title}`
  }
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPost(id);
  return (
    <>
      <h1><strong>{post.title}</strong></h1>
      <p>{post.body}</p>
    </>
  )
}