import React from "react"
import StationsColumn from "./StationsColumn"
import TrainColumns from "./TrainColumns"

function Sheet({ announcements, locations }) {
  return (
    <div id="sheet">
      <StationsColumn locations={locations} />
      <TrainColumns announcements={announcements} locations={locations} />
    </div>
  )
}

export default Sheet
