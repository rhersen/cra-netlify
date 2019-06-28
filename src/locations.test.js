import locations from "./locations"

describe("locations", () => {
  it("gets", () => {
    expect(locations("Bkb")).toEqual("Barkarby")
    expect(locations("Hfa")).toEqual("Hemfosa")
    expect(locations("Bål")).toEqual("Bålsta")
  })

  it("falls back", () => {
    expect(locations("Oslo")).toEqual("Oslo")
  })
})
