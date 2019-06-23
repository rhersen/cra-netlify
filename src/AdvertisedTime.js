import React from "react"

export default function AdvertisedTime({ announcement }) {
  return <td className="advertised">{t(announcement)}</td>
}

function t(announcement) {
  if (!announcement.TimeAtLocation) return ""
  return f(announcement.AdvertisedTimeAtLocation)
}

function f(advertised) {
  const m = /\d\d\d\d-\d\d-\d\dT(\d\d:\d\d)(:\d\d)/.exec(advertised)
  if (!m) return advertised
  if (m[2] === ":00") return m[1]
  return m[1] + m[2]
}
