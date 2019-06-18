import React from "react"
import map from "lodash.map"
import find from "lodash.find"

function Column({ announcements, id }) {
  return (
    <span className="td">
      {map(
        find(announcements, a => a.AdvertisedTrainIdent === id && a.ToLocation)
          .ToLocation,
        "LocationName"
      )}
      <br />
      {id}
    </span>
  )
}

export default Column
