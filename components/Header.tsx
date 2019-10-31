import * as React from "react"
import NavBar from "./Navbar"

type HeaderProps = {
  title?: string
}

const Header = ({ title = "This is the default title" }: HeaderProps) => (
  <>
    <header>
      <h1>{title}</h1>
      <NavBar />
    </header>
  </>
)

export default Header
