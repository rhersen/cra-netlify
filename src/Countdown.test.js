import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Countdown from "./Countdown"

configure({ adapter: new Adapter() })

test("uninitialized", () => {
  expect(
    shallow(
      <Countdown
        announcement={{ AdvertisedTimeAtLocation: "2019-04-10T20:57:00" }}
      />
    ).text()
  ).toBe("")
})

test("seconds", () => {
  expect(
    shallow(
      <Countdown
        now="2019-04-10T20:55:21"
        announcement={{ AdvertisedTimeAtLocation: "2019-04-10T20:57:00" }}
      />
    ).text()
  ).toBe("99s")
})

test("minutes:seconds", () => {
  expect(
    shallow(
      <Countdown
        now="2019-04-10T20:55:20"
        announcement={{ AdvertisedTimeAtLocation: "2019-04-10T20:57:00" }}
      />
    ).text()
  ).toBe("1:40")
})

test("minutes", () => {
  expect(
    shallow(
      <Countdown
        now="2019-04-10T20:45:20"
        announcement={{ AdvertisedTimeAtLocation: "2019-04-10T20:57:00" }}
      />
    ).text()
  ).toBe("11min")
})

test("estimated time overrides advertised", () => {
  expect(
    shallow(
      <Countdown
        now="2019-04-10T20:55:20"
        announcement={{
          AdvertisedTimeAtLocation: "2019-04-10T20:56:00",
          EstimatedTimeAtLocation: "2019-04-10T20:57:00"
        }}
      />
    ).text()
  ).toBe("1:40")
})

test("negative seconds, less than 100", () => {
  expect(
    shallow(
      <Countdown
        now="2019-04-10T20:58:39"
        announcement={{ AdvertisedTimeAtLocation: "2019-04-10T20:57:00" }}
      />
    ).text()
  ).toBe("-99s")
})

test("negative seconds, more than 100", () => {
  expect(
    shallow(
      <Countdown
        now="2019-04-10T20:58:40"
        announcement={{ AdvertisedTimeAtLocation: "2019-04-10T20:57:00" }}
      />
    ).text()
  ).toBe("")
})
