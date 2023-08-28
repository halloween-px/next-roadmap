export async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })

    if(!response.ok) throw new Error('Все печально');

    return response.json();
}

export async function getPostsBySearch(search: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`, {
        next: {
            revalidate: 60
        }
    })

    if(!response.ok) throw new Error('Все печально');

    return response.json();
}