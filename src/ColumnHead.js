import React from "react"
import map from "lodash.map"
import find from "lodash.find"
import get from "lodash.get"

function Column({ announcements, id }) {
  const found = find(
    announcements,
    a => a.AdvertisedTrainIdent === id && a.ToLocation
  )
  return (
    <span className="td">
      {product(found)}
      <br />
      {map(get(found, "ToLocation"), "LocationName")}
      <br />
      {id}
    </span>
  )
}

function product(found) {
  const s = get(found, "ProductInformation.0")
  const match = /SJ (.*)/.exec(s)
  return match ? match[1] : s
}

export default Column
