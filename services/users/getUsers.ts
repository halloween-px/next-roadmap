export default async function getUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        next: {
            revalidate: 60
        }
    })

    if(!response.ok) throw new Error('очень печально')

    return response.json();
}