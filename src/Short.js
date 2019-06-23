import React from "react"

export default function Short({ announcement: { Deviation } }) {
  return <td className="short">{text(Deviation)}</td>
}

function text(a) {
  return a && a.map(s => (/Kort/.test(s) ? "K" : s.length ? "*" : s))
}
