import React from "react"
import map from "lodash.map"
import cx from "classnames"
import shortLocationName from "./shortLocationName"

function StationsColumn({ locations }) {
  return (
    <div className="tc station">
      <span className="td station">
        prod
        <br />
        dest
        <br />
        train
      </span>
      {map(locations, loc =>
        map(["Ankomst", "Avgang"], activity => (
          <span key={loc + activity} className={cx("td", "station", activity)}>
            {activity.substr(0, 3).toLowerCase()}{" "}
            {(shortLocationName[loc] || loc).substr(0, 15)}
          </span>
        ))
      )}
    </div>
  )
}

export default StationsColumn
