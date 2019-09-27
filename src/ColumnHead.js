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
  let match
  const s1 = get(found, "ProductInformation.0")
  match = /^SJ (.*)$/.exec(s1)
  const s2 = match ? match[1] : s1
  match = /^(.stg).ta(p)endel$/.exec(s2)
  const s3 = match ? match[1] : s2
  match = /^(.+)t.ge?n?$/.exec(s3)
  const s4 = match ? match[1] : s3
  match = /^(.+)t.gen (.+)$/.exec(s4)
  return match ? match[1] + match[2] : s4
}

export default Column
