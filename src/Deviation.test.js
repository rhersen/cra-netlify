import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Deviation from "./Deviation"

configure({ adapter: new Adapter() })

describe("Deviation", () => {
  it("shows deviation", () =>
    expect(
      shallow(<Deviation announcement={{ Deviation: ["Signalfel"] }} />).text()
    ).toBe("Signalfel"))

  it("Does not show 'Kort tåg'", () =>
    expect(
      shallow(<Deviation announcement={{ Deviation: ["Kort tåg"] }} />).text()
    ).toBe(""))

  it("shows empty string if there are no deviations", () =>
    expect(shallow(<Deviation announcement={{ Deviation: [] }} />).text()).toBe(
      ""
    ))

  it("shows empty string if there is no deviations array", () =>
    expect(shallow(<Deviation announcement={{}} />).text()).toBe(""))

  it("does not show short train", () =>
    expect(
      shallow(
        <Deviation announcement={{ Deviation: ["Kort tåg", "Spårspring"] }} />
      ).text()
    ).toBe("Spårspring"))

  it("shows two deviations", () =>
    expect(
      shallow(
        <Deviation
          announcement={{ Deviation: ["Spårändrat", "Plattformsbyte"] }}
        />
      ).html()
    ).toBe(
      '<td class="deviation"><div>Spårändrat</div><div>Plattformsbyte</div></td>'
    ))
})
