import React from "react"

export default function TrainId({ announcement }) {
  return <td className="track">{announcement.TrackAtLocation}</td>
}
