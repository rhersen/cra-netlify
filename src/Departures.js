import React from "react"
import Table from "./Table"

export default class Departures extends React.Component {
  constructor(props) {
    super(props)
    this.state = { departures: [], msg: "", now: new Date() }
  }

  render() {
    return (
      <div>
        {this.button("Sub")}
        {this.button("Cst")}
        {this.button("Flb")}
        {this.button("Tul")}
        <div>{this.state.msg}</div>
        <Table announcements={this.state.departures} now={this.state.now} />
        <ul>
          {this.state.departures
            .filter(d => d.ToLocation)
            .map(d => (
              <li key={d.AdvertisedTrainIdent}>
                {d.TypeOfTraffic} {d.AdvertisedTrainIdent} mot{" "}
                {d.ToLocation.map(loc => loc.LocationName)}{" "}
                {d.TimeAtLocation ? "avgick" : "avgår"} från spår{" "}
                {d.TrackAtLocation} kl{" "}
                {d.TimeAtLocation
                  ? d.TimeAtLocation.substr(11, 5)
                  : d.AdvertisedTimeAtLocation.substr(11, 5)}
              </li>
            ))}
        </ul>
      </div>
    )
  }

  button(location) {
    return (
      <button
        onClick={async () => {
          const response = await fetch(
            `/.netlify/functions/node-fetch?location=${location}`
          )
          const json = await response.json()
          if (json.msg) this.setState({ msg: json.msg })
          if (json.TrainAnnouncement)
            this.setState({ departures: json.TrainAnnouncement, msg: "" })
        }}
      >
        {location}
      </button>
    )
  }
}
