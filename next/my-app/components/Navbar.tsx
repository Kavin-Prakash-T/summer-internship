import Link from "next/link"

function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact/teams">Contact</Link>
      <Link href="/users">Users</Link>
      <Link href="/todos">Todos</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}

export default Navbar