import React from "react"
import locations from "./locations"

export default function Destination({ announcement }) {
  return (
    <td className="destination">
      {announcement.ToLocation &&
        announcement.ToLocation.map(location =>
          locations(location.LocationName)
        ).join()}
    </td>
  )
}
