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
        ActivityType: "Ankomst",
        AdvertisedTimeAtLocation: "2019-07-21T20:16:00",
        AdvertisedTrainIdent: "2865",
        LocationSignature: "Fas",
        TimeAtLocation: "2019-07-21T20:14:00",
        ToLocation: [{ LocationName: "Vhe", Order: 0, Priority: 1 }]
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
        ActivityType: "Avgang",
        AdvertisedTimeAtLocation: "2019-07-21T20:13:00",
        AdvertisedTrainIdent: "2265",
        LocationSignature: "TmÃ¶",
        ModifiedTime: "2019-07-21T18:13:19.328Z",
        TimeAtLocation: "2019-07-21T20:13:00",
        ToLocation: [{ LocationName: "SÃ¶c", Priority: 1, Order: 0 }]
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

  it("finds ProductInformation if it's missing from latest actual", () => {
    expect(
      currentTrains([
        {
          ActivityType: "Ankomst",
          AdvertisedTimeAtLocation: "2019-09-13T07:20:00",
          AdvertisedTrainIdent: "2815",
          LocationSignature: "Sub",
          ModifiedTime: "2019-09-13T05:18:57.598Z",
          ProductInformation: ["PendeltÃ¥g", "43"],
          TimeAtLocation: "2019-09-13T07:19:00",
          ToLocation: [{ LocationName: "Ts", Priority: 1, Order: 0 }]
        },
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-09-13T07:20:00",
          AdvertisedTrainIdent: "2815",
          LocationSignature: "Sub",
          ModifiedTime: "2019-09-13T05:20:48.047Z",
          ProductInformation: ["PendeltÃ¥g", "43"],
          TimeAtLocation: "2019-09-13T07:20:00",
          ToLocation: [{ LocationName: "Ts", Priority: 1, Order: 0 }]
        },
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-09-13T07:23:00",
          AdvertisedTrainIdent: "2815",
          LocationSignature: "Huv",
          ModifiedTime: "2019-09-13T05:22:05.162Z",
          TimeAtLocation: "2019-09-13T07:22:00"
        },
        {
          ActivityType: "Avgang",
          AdvertisedTimeAtLocation: "2019-09-13T07:26:00",
          AdvertisedTrainIdent: "2815",
          LocationSignature: "Sod",
          ModifiedTime: "2019-09-05T23:23:16.190Z",
          ProductInformation: ["PendeltÃ¥g", "43"],
          ToLocation: [{ LocationName: "Ts", Priority: 1, Order: 0 }]
        }
      ])
    ).toEqual([
      {
        ActivityType: "Avgang",
        AdvertisedTimeAtLocation: "2019-09-13T07:23:00",
        AdvertisedTrainIdent: "2815",
        LocationSignature: "Huv",
        ModifiedTime: "2019-09-13T05:22:05.162Z",
        TimeAtLocation: "2019-09-13T07:22:00",
        ProductInformation: ["PendeltÃ¥g", "43"],
        ToLocation: [{ LocationName: "Ts", Order: 0, Priority: 1 }]
      }
    ])
  })
})
