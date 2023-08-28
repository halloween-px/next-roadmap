export default async function getPost(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })

    if(!response.ok) throw new Error('очень печально')

    return response.json();
}