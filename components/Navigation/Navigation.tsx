import Link from "next/link";
const Navigation = () => {
  return (
    <>
      <li>
        <Link href="/">Main</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </>
  )
}

export default Navigation;