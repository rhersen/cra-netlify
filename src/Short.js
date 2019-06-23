import React from "react"

export default function Short({ announcement: { Deviation } }) {
  return <td className="short">{text(Deviation)}</td>
}

function text(a) {
  return (
    a &&
    a.map(s => {
      if (/Kort/.test(s)) return "K"
      if (s.length) return "*"
      return s
    })
  )
}
