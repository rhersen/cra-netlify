import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Deviation from "./Deviation"

configure({ adapter: new Adapter() })

describe("text", () => {
  it("should ", () => {
    expect(
      shallow(<Deviation announcement={{ Deviation: ["Signalfel"] }} />).text()
    ).toBe("Signalfel")
  })

  it("should ", () => {
    expect(
      shallow(<Deviation announcement={{ Deviation: ["Kort tåg"] }} />).text()
    ).toBe("")
  })

  it("should ", () => {
    expect(shallow(<Deviation announcement={{ Deviation: [] }} />).text()).toBe(
      ""
    )
  })

  it("should ", () => {
    expect(shallow(<Deviation announcement={{}} />).text()).toBe("")
  })

  it("should ", () => {
    expect(
      shallow(
        <Deviation announcement={{ Deviation: ["Kort tåg", "Spårspring"] }} />
      ).text()
    ).toBe("Spårspring")
  })

  it("should ", () => {
    expect(
      shallow(
        <Deviation
          announcement={{ Deviation: ["Spårändrat", "Plattformsbyte"] }}
        />
      ).html()
    ).toBe(
      '<td class="deviation"><div>Spårändrat</div><div>Plattformsbyte</div></td>'
    )
  })
})
