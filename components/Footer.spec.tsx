import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Footer from "./Footer"

describe("Footer", () => {
  it("should return 'All rights reserved' ", () => {
    const { getByText } = render(<Footer />)
    expect(getByText("All rights reserved")).toBeInTheDocument()
  })
})
