import React from "react"
import AdvertisedTime from "./AdvertisedTime"
import TrainId from "./TrainId"
import Short from "./Short"
import Destination from "./Destination"
import Time from "./Time"
import Deviation from "./Deviation"

export default function Table({ announcements, now }) {
  return (
    <table>
      <tbody>
        {announcements.map(announcement => {
          const id = announcement.AdvertisedTrainIdent
          return (
            <tr key={id} className={direction(id)}>
              <TrainId announcement={announcement} />
              <Short announcement={announcement} />
              <Destination announcement={announcement} />
              <AdvertisedTime announcement={announcement} />
              <Time announcement={announcement} />
              <Deviation announcement={announcement} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function direction(id) {
  return /\d+[24680]$/.test(id) ? "northbound" : "southbound"
}
