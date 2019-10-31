import * as React from "react"
import NavBar from "./NavBar"

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <NavBar title="Datco" />
    {children}
    <footer>
      <hr />
      <span>All rights reserved</span>
    </footer>
  </div>
)

export default Layout
