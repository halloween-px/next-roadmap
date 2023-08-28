"use client"
import { PostsPops } from "@/services/posts/postType";
import getUsers from "@/services/users/getUsers";
import { UserType } from "@/services/users/userProps";
import { shallow } from "zustand/shallow";
import { useEffect, useState } from "react";
import { usePosts } from "@/store/posts";
import PostItem from "./PostItem";

const Post = () => {
    const [users, setUsers] = useState([]);

    const [getPosts, posts, loading, noResult] = usePosts(state => [
        state.getPosts,
        state.posts,
        state.loading,
        state.noResult,
    ], shallow);

    const dictionary = users.reduce((d: any, user: UserType) => {
        return {
            ...d,
            [user.id]: user
        }
    }, {});

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data))
    }, [])

    useEffect(() => {
        getPosts()
    }, [getPosts])

    return (
        <div className="grid gap-4 lg:grid-cols-2">
            {!loading
                ? posts.map((post: PostsPops) => {
                    return (
                        <PostItem key={`post${post.id}`} post={post} user={dictionary[post.userId]} />
                    )
                })
                : <div className="h-full"><p>Жди</p></div>}
            {noResult && <p>Ничего не найдено</p>}
        </div>
    )
}

export default Post;