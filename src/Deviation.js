import React from "react"

export default function Deviation({ announcement: { Deviation } }) {
  return <td className="deviation">{text(Deviation)}</td>
}

function text(a) {
  if (a) return a.filter(s => !/Kort/.test(s)).map(c => <div key={c}>{c}</div>)
}
