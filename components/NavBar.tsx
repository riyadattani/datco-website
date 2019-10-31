import * as React from "react"
import Link from "next/link"

// type NavBarProps = {
//   title?: string
// }

const NavBar = () => (
  <>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      |{" "}
      <Link href="/about">
        <a>About</a>
      </Link>{" "}
      |{" "}
      <Link href="/products">
        <a>Products List</a>
      </Link>
    </nav>
  </>
)

export default NavBar
