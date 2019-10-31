import * as React from "react"
import Link from "next/link"

type NavBarProps = {
  title?: string
}

const NavBar = ({ title = "This is the default title" }: NavBarProps) => (
  <>
    <header>
      <nav>
        <h1>
          <title>{title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </h1>
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
    </header>
  </>
)

export default NavBar
