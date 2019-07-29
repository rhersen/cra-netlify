import currentTrains from "./currentTrains"

describe("currentTrains", () => {
  test("empty", () => {
    expect(currentTrains([])).toEqual([])
  })

  it("works with ToLocation", () => {
    expect(
      currentTrains([
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:13:00",
          AdvertisedTrainIdent: "2865",
          LocationSignature: "HÃ¶n",
          TimeAtLocation: "2019-07-21T20:11:00"
        },
        {
          ActivityType: "Ankomst",
          AdvertisedTimeAtLocation: "2019-07-21T20:16:00",
          AdvertisedTrainIdent: "2865",
          LocationSignature: "Fas",
          TimeAtLocation: "2019-07-21T20:14:00",
          ToLocation: [{ LocationName: "Vhe", Priority: 1, Order: 0 }]
        },
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:16:00",
          AdvertisedTrainIdent: "2865",
          LocationSignature: "Fas",
          ToLocation: [{ LocationName: "Vhe", Priority: 1, Order: 0 }]
        }
      ])
    ).toEqual([
      {
        actual: {
          ActivityType: "Ankomst",
          AdvertisedTimeAtLocation: "2019-07-21T20:16:00",
          AdvertisedTrainIdent: "2865",
          LocationSignature: "Fas",
          TimeAtLocation: "2019-07-21T20:14:00",
          ToLocation: [{ LocationName: "Vhe", Order: 0, Priority: 1 }]
        }
      }
    ])
  })

  it("works without ToLocation", () => {
    expect(
      currentTrains([
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:10:00",
          AdvertisedTrainIdent: "2265",
          LocationSignature: "So",
          ModifiedTime: "2019-07-21T18:12:10.468Z",
          TimeAtLocation: "2019-07-21T20:12:00",
          ToLocation: [{ LocationName: "SÃ¶c", Priority: 1, Order: 0 }]
        },
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:13:00",
          AdvertisedTrainIdent: "2265",
          LocationSignature: "TmÃ¶",
          ModifiedTime: "2019-07-21T18:13:19.328Z",
          TimeAtLocation: "2019-07-21T20:13:00"
        },
        {
          ActivityType: "Ankomst",
          AdvertisedTimeAtLocation: "2019-07-21T20:15:00",
          AdvertisedTrainIdent: "2265",
          LocationSignature: "Sod",
          ModifiedTime: "2019-07-21T18:12:09.999Z",
          ToLocation: [{ LocationName: "SÃ¶c", Priority: 1, Order: 0 }]
        },
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:15:00",
          AdvertisedTrainIdent: "2265",
          LocationSignature: "Sod",
          ModifiedTime: "2019-07-21T18:12:10.109Z",
          ToLocation: [{ LocationName: "SÃ¶c", Priority: 1, Order: 0 }]
        }
      ])
    ).toEqual([
      {
        actual: {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:13:00",
          AdvertisedTrainIdent: "2265",
          LocationSignature: "TmÃ¶",
          ModifiedTime: "2019-07-21T18:13:19.328Z",
          TimeAtLocation: "2019-07-21T20:13:00",
          ToLocation: [{ LocationName: "SÃ¶c", Priority: 1, Order: 0 }]
        }
      }
    ])
  })

  it("removes trains with unknown ToLocation", () => {
    expect(
      currentTrains([
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:10:00",
          AdvertisedTrainIdent: "2265",
          LocationSignature: "So",
          ModifiedTime: "2019-07-21T18:12:10.468Z",
          TimeAtLocation: "2019-07-21T20:12:00"
        },
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:13:00",
          AdvertisedTrainIdent: "2265",
          LocationSignature: "TmÃ¶",
          ModifiedTime: "2019-07-21T18:13:19.328Z",
          TimeAtLocation: "2019-07-21T20:13:00"
        },
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:15:00",
          AdvertisedTrainIdent: "2265",
          LocationSignature: "Sod",
          ModifiedTime: "2019-07-21T18:12:10.109Z"
        }
      ])
    ).toEqual([])
  })

  it("works without TimeAtLocation", () => {
    expect(
      currentTrains([
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-07-21T20:16:00",
          AdvertisedTrainIdent: "2565",
          LocationSignature: "Sci",
          ModifiedTime: "2019-07-21T18:09:00.637Z",
          ToLocation: [{ LocationName: "Nyh", Priority: 1, Order: 0 }]
        }
      ])
    ).toEqual([])
  })
})
