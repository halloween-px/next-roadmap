"use client"

import { getPostsBySearch } from "@/services/posts/getPosts";
import { usePosts } from "@/store/posts";
import { FormEventHandler, useState } from "react";

const PostSearch = () => {
    const [search, setSearch] = useState('');
    const getPostsBySearch = usePosts(state => state.getPostsBySearch);
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        await getPostsBySearch(search);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Поиск" value={search} onChange={(e) => setSearch(e.target.value)} name="" id="" />
            <button type="submit"> Search</button>
        </form>
    )
}

export default PostSearch;