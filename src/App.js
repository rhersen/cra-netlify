import React from "react"
import moment from "moment"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { southbounds: [], northbounds: [], msg: "" }
  }

  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        <table>
          <caption>Från Tullinge</caption>
          <tbody>{this.state.northbounds.filter(d => d).map(tr)}</tbody>
        </table>
        <table>
          <caption>Från Sundbyberg</caption>
          <tbody>{this.state.southbounds.filter(d => d).map(tr)}</tbody>
        </table>
      </div>
    )

    function tr({ avgang, ankomst }) {
      const departureTime = avgang.AdvertisedTimeAtLocation.substring(11, 16)
      const trainIdent = ankomst.AdvertisedTrainIdent
      const minuteDiff = minutes(ankomst, avgang) - 32
      return (
        <tr key={trainIdent}>
          <td>{departureTime}</td>
          <td>{trainIdent}</td>
          <td>{minuteDiff} min</td>
        </tr>
      )
    }
  }

  async componentDidMount() {
    const response = await fetch("/.netlify/functions/node-fetch")
    const json = await response.json()
    if (json.msg) this.setState({ msg: json.msg })
    if (json.TrainAnnouncement) {
      const as = json.TrainAnnouncement
      const sub = as
        .filter(a => a.LocationSignature === "Sub")
        .filter(a => a.ActivityType === "Avgang")
      const tul = as
        .filter(a => a.LocationSignature === "Tul")
        .filter(a => a.ActivityType === "Ankomst")
      const southbounds = sub
        .filter(southbound)
        .map(avgang =>
          selectAnkomst(
            tul
              .filter(southbound)
              .filter(ankomst => minutes(ankomst, avgang) > 30),
            avgang
          )
        )
      const northbounds = getNorthbound(as)
      this.setState({ southbounds, northbounds, msg: "" })
    }
  }
}

function southbound(ankomst) {
  return /[13579]$/.test(ankomst.AdvertisedTrainIdent)
}

function selectAnkomst(ankomsts, avgang) {
  if (ankomsts.length) {
    const selected = ankomsts.reduce((prev, cur) => {
      const diff1 = minutes(prev, avgang)
      const diff2 = minutes(cur, avgang)
      return diff2 < diff1 ? cur : prev
    })

    return { ankomst: selected, avgang }
  }
}

function minutes(ankomst, avgang) {
  const ank = ankomst.AdvertisedTimeAtLocation
  const avg = avgang.AdvertisedTimeAtLocation
  const ankm = moment(ank)
  const avgm = moment(avg)
  return ankm.diff(avgm, "minutes")
}

function getNorthbound(as) {
  function isLocation(s) {
    return a => a.LocationSignature === s
  }

  function isActivity(s) {
    return a => a.ActivityType === s
  }

  const sub = as
    .filter(isLocation("Sub"))
    .filter(isActivity("Ankomst"))
    .filter(northbound)
  const tul = as
    .filter(isLocation("Tul"))
    .filter(isActivity("Avgang"))
    .filter(northbound)

  return sub.map(ankomst =>
    selectAvgang(tul.filter(avgang => minutes(ankomst, avgang) > 29), ankomst)
  )

  function northbound(ankomst) {
    return /[02468]$/.test(ankomst.AdvertisedTrainIdent)
  }

  function selectAvgang(avgangs, ankomst) {
    if (avgangs.length)
      return {
        ankomst,
        avgang: avgangs.reduce(isTimeBefore)
      }
  }

  function isTimeBefore(a, b) {
    return moment(a.AdvertisedTimeAtLocation).isBefore(
      moment(b.AdvertisedTimeAtLocation)
    )
      ? b
      : a
  }

  function minutes(ankomst, avgang) {
    const ank = moment(ankomst.AdvertisedTimeAtLocation)
    const avg = moment(avgang.AdvertisedTimeAtLocation)
    return ank.diff(avg, "minutes")
  }
}
