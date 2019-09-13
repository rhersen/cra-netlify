import { map } from "lodash"

import difference_in_minutes from "date-fns/difference_in_minutes"

export function line1(train, stations) {
  if (!train) return "Aktuell information saknas"

  return `${id(train)} mot ${map(map(train.ToLocation, "LocationName"), loc =>
    stationName(loc, stations)
  )} ${precision(train)}`
}

export function line2(train, stations) {
  if (!train) return "line2"

  return `${activity(train)} ${location(
    train
  )} kl ${train.TimeAtLocation.substring(11, 16)}`

  function location(a) {
    return stationName(a.LocationSignature, stations)
  }
}

function id(a) {
  return a.AdvertisedTrainIdent
}

function stationName(locationSignature, stations) {
  return (
    (stations &&
      stations[locationSignature] &&
      stations[locationSignature].AdvertisedShortLocationName) ||
    locationSignature
  )
}

function precision(a) {
  const delay = difference_in_minutes(
    a.TimeAtLocation,
    a.AdvertisedTimeAtLocation
  )

  return delay === 1
    ? "nästan i tid"
    : delay > 0
    ? `${delay} minuter försenat`
    : delay < -1
    ? "i god tid"
    : "i tid"
}

function activity(a) {
  return a.ActivityType === "Ankomst" ? "ank" : "avg"
}
