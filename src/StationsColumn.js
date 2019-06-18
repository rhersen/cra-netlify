import React from "react"
import map from "lodash.map"
import cx from "classnames"

function StationsColumn({ locations }) {
  return (
    <div className="tc station">
      <span className="td station">
        train
        <br />
        station
      </span>
      {map(locations, loc =>
        map(["Ankomst", "Avgang"], activity => (
          <span className={cx("td", "station", activity)}>
            {activity.substr(0, 3)} {loc}
          </span>
        ))
      )}
    </div>
  )
}

export default StationsColumn
