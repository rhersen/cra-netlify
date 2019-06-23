import React from "react"

export default function Destination({ announcement }) {
  return (
    <td className="destination">
      {announcement.ToLocation &&
        announcement.ToLocation.map(location => location.LocationName).join()}
    </td>
  )
}
