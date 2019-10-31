import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import NavBar from "./NavBar"

describe("Datco Page", () => {
  it("should return the title", () => {
    const { getByText } = render(<NavBar title={"Datco"} />)
    expect(getByText("Datco")).toBeInTheDocument()
  })
})
