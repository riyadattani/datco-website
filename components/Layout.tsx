import * as React from "react"
import Header from "./Header"

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <Header title="Datco" />
    {children}
    <footer>
      <hr />
      <span>All rights reserved</span>
    </footer>
  </div>
)

export default Layout
