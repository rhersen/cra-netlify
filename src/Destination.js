import React from "react"
import locations from "./locations"

export default function Destination({ announcement }) {
  return (
    <td className="destination">
      <span className="from">
        {announcement.FromLocation &&
          announcement.FromLocation.map(location =>
            locations(location.LocationName)
          ).join()}
        –
      </span>
      {announcement.ToLocation &&
        announcement.ToLocation.map(location =>
          locations(location.LocationName)
        ).join()}
    </td>
  )
}
