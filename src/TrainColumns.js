import React from "react"
import map from "lodash.map"
import trains from "./trains"
import Column from "./Column"

function TrainColumns({ announcements, locations }) {
  return (
    <div className="tr tbody">
      {map(trains(announcements, new Date()), id => (
        <Column announcements={announcements} id={id} locations={locations} />
      ))}
    </div>
  )
}

export default TrainColumns
