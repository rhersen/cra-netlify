import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import keyby from "lodash.keyby"
import mapvalues from "lodash.mapvalues"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test("stations", () => {
  console.log(
    mapvalues(keyby(a, "LocationSignature"), "AdvertisedShortLocationName")
  )
})

const a = [
  {
    Advertised: true,
    AdvertisedLocationName: "Arbrå",
    AdvertisedShortLocationName: "Arbrå",
    CountryCode: "SE",
    CountyNo: [21],
    Geometry: {
      SWEREF99TM: "POINT (573518 6816033)",
      WGS84: "POINT (16.37983461815908 61.471034792465439)"
    },
    LocationSignature: "Ab",
    ModifiedTime: "2019-04-02T08:33:53.083Z",
    PlatformLine: ["1"],
    Prognosticated: true
  }
]
