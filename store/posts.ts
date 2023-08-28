import { shallow } from 'zustand/shallow';
import { getPosts, getPostsBySearch } from '@/services/posts/getPosts';
import { createWithEqualityFn } from 'zustand/traditional'

type UsePosts = {
    posts: any[];
    loading: boolean,
    noResult: boolean,
    getPosts: () => Promise<void>;
    getPostsBySearch: (value: string) => Promise<void>;
}

//Все что потом будем деструктуризировать должно быть в том же порядке что и тут
export const usePosts = createWithEqualityFn<UsePosts>()((set) => ({
    posts: [],
    loading: false,
    noResult: false,
    getPosts: async () => {
        set({ loading: true })
        const posts = await getPosts()
        set({ posts: posts, loading: false })
    },
    getPostsBySearch: async (search) => {
        set({ loading: true })
        const posts = await getPostsBySearch(search)
        set({ posts: posts, loading: false, noResult: !posts.length ? true : false})
    }
}), shallow)