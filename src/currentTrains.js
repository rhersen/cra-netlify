import { groupBy, filter, find, map, reject, maxBy, orderBy } from "lodash"
import * as wgs from "./wgs"

export default function currentTrains(announcement, stations) {
  const grouped = groupBy(announcement, "AdvertisedTrainIdent")
  const object = filter(map(grouped, announcementsToObject), "ToLocation")
  const sorted = sortTrains(object, direction(announcement), stations)
  return reject(sorted, hasArrivedAtDestination)

  function announcementsToObject(v) {
    const found = find(v, "ToLocation")
    const actual = maxBy(
      filter(v, "TimeAtLocation"),
      a => a.TimeAtLocation + a.ActivityType
    )

    if (actual)
      return {
        ...actual,
        ToLocation:
          found && !actual.ToLocation ? found.ToLocation : actual.ToLocation
      }
  }

  function direction(announcements) {
    return (
      announcements.length &&
      /\d\d\d[13579]/.test(announcements[0].AdvertisedTrainIdent)
    )
  }

  function hasArrivedAtDestination(train) {
    return (
      train.ActivityType === "Ankomst" &&
      map(train.ToLocation, "LocationName").join() === train.LocationSignature
    )
  }

  function sortTrains(object, dir) {
    return orderBy(
      object,
      [
        a => north(a.LocationSignature, stations),
        "ActivityType",
        "TimeAtLocation"
      ],
      ["desc", dir ? "asc" : "desc", dir ? "desc" : "asc"]
    )
  }

  function north(location) {
    if (location === "Gdv") return between("Ngd", "Nyh")
    if (location === "Söc") return between("Söd", "Söu")
    if (location === "Gn") return between("Mö", "Ssä")
    return wgs.north(location, stations)
  }

  function between(loc1, loc2) {
    return 0.5 * wgs.north(loc1, stations) + 0.5 * wgs.north(loc2, stations)
  }
}
