import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Time from "./Time"

configure({ adapter: new Adapter() })

test("zero seconds", () => {
  expect(
    shallow(
      <Time
        announcement={{ AdvertisedTimeAtLocation: "2019-04-10T20:56:00" }}
      />
    ).text()
  ).toBe("20:56")
})

test("non-zero seconds", () => {
  expect(
    shallow(
      <Time
        announcement={{ AdvertisedTimeAtLocation: "2019-04-10T20:56:25" }}
      />
    ).text()
  ).toBe("20:56:25")
})

test("unrecognized format", () => {
  expect(
    shallow(
      <Time announcement={{ AdvertisedTimeAtLocation: "20:56:25" }} />
    ).text()
  ).toBe("20:56:25")
})

it("renders estimated time in italics", () => {
  expect(
    shallow(
      <Time
        announcement={{
          AdvertisedTimeAtLocation: "2019-04-10T20:56:00",
          EstimatedTimeAtLocation: "2019-04-10T20:57:00"
        }}
      />
    ).html()
  ).toMatch(/<i>20:57<.i>/)
})

it("renders actual time in bold", () => {
  expect(
    shallow(
      <Time
        announcement={{
          AdvertisedTimeAtLocation: "2019-04-10T20:56:00",
          EstimatedTimeAtLocation: "2019-04-10T20:57:00",
          TimeAtLocation: "2019-04-10T20:58:00"
        }}
      />
    ).html()
  ).toMatch(/<b>20:58<.b>/)
})
