"use client"
import { PostsPops } from "@/services/posts/postType";
import { UserType } from "@/services/users/userProps";
import Link from "next/link";

interface PostProps {
    post: PostsPops
    user: UserType
}

const PostItem = ({ post, user }: PostProps) => {
    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                        className="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    Tutorial
                </span>
                <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link href={`/blog/${post.id}`}>
                    {post.title}
                </Link>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                {post.body}
            </p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img
                        className="w-7 h-7 rounded-full"
                        src={`https://i.pravatar.cc/150?img=${user?.id}`}
                        alt="Jese Leos avatar"
                    />
                    <span className="font-medium dark:text-white">{user?.username}</span>
                </div>
                <div
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                    <svg
                        className="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </article>
    )
}

export default PostItem;