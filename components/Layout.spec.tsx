import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Layout from "./Layout"

describe("Layout", () => {
  it("should return the children", () => {
    const { getByText } = render(
      <Layout title="Example title">
        <p>Random example</p>
      </Layout>
    )
    expect(getByText("Random example")).toBeInTheDocument()
  })
})
