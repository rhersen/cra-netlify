import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Short from "./Short"

configure({ adapter: new Adapter() })

test("text", () => {
  expect(
    shallow(<Short announcement={{ Deviation: ["Signalfel"] }} />).text()
  ).toBe("*")
  expect(
    shallow(<Short announcement={{ Deviation: ["Kort tåg"] }} />).text()
  ).toBe("K")
  expect(shallow(<Short announcement={{ Deviation: [] }} />).text()).toBe("")
  expect(shallow(<Short announcement={{}} />).text()).toBe("")
  expect(
    shallow(
      <Short announcement={{ Deviation: ["Kort tåg", "Spårspring"] }} />
    ).text()
  ).toBe("K*")
})
