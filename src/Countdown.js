import React from "react"
import difference_in_seconds from "date-fns/difference_in_seconds"
import add_seconds from "date-fns/add_seconds"
import format from "date-fns/format"

export default function Countdown({ announcement, now }) {
  return <td className="countdown">{countdown(now, announcement)}</td>
}

function countdown(now, announcement) {
  if (!now) return ""

  const seconds = difference_in_seconds(
    announcement.EstimatedTimeAtLocation ||
      announcement.AdvertisedTimeAtLocation,
    now
  )

  if (seconds <= -100) return ""
  if (seconds >= 600)
    return `${format(add_seconds(new Date(0), seconds), "m")}min`
  if (seconds >= 100) return format(add_seconds(new Date(0), seconds), "m:ss")
  return `${seconds}s`
}
