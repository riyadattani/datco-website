import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Header from "./Header"

describe("Datco Page", () => {
  it("should return the title", () => {
    const { getByText } = render(<Header title={"Datco Page here"} />)
    expect(getByText("Datco Page here")).toBeInTheDocument()
  })
})
