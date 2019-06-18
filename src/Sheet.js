import React from "react"

function Sheet({ announcements, locations }) {
  return (
    <div id="sheet">
      <div>{announcements.length} announcements</div>
      {/*<StationsColumn locations={locations} />*/}
      <div>{locations}</div>
      {/*<TrainColumns announcements={announcements} locations={locations} />*/}
    </div>
  )
}

export default Sheet
