import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import NavBar from "./Navbar"

describe("Navigation Bar", () => {
  it("should include the navigation links", () => {
    const { getByText } = render(<NavBar />)
    expect(getByText("Home")).toBeInTheDocument()
    expect(getByText("About")).toBeInTheDocument()
    expect(getByText("Products List")).toBeInTheDocument()
  })
})
