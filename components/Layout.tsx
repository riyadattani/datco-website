import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <Header title="Datco" />
    {children}
    <Footer />
  </div>
)

export default Layout
