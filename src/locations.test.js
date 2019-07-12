import locations from "./locations"

describe("locations", () => {
  it("should", () => {
    const tu = locations()["Tu"]
    expect(tu).toHaveProperty("AdvertisedShortLocationName", "Tumba")
    expect(tu).toHaveProperty(
      "Geometry.WGS84",
      "POINT (17.838385524043542 59.199494369094495)"
    )
    expect(tu).toHaveProperty("east", "17.838385524043542")
    expect(tu).toHaveProperty("north", "59.199494369094495")
  })
})
