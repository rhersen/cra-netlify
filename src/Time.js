import React from "react"

export default function Time({ announcement }) {
  return <td className="time">{t(announcement)}</td>
}

function t(announcement) {
  if (announcement.TimeAtLocation)
    return <b>{f(announcement.TimeAtLocation)}</b>
  if (announcement.EstimatedTimeAtLocation)
    return <i>{f(announcement.EstimatedTimeAtLocation)}</i>
  return f(announcement.AdvertisedTimeAtLocation)
}

function f(advertised) {
  const m = /\d\d\d\d-\d\d-\d\dT(\d\d:\d\d)(:\d\d)/.exec(advertised)
  if (!m) return advertised
  if (m[2] === ":00") return m[1]
  return m[1] + m[2]
}
