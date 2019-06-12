import React from "react"

export default class Departures extends React.Component {
  constructor(props) {
    super(props)
    this.state = { departures: [] }
  }

  render() {
    return (
      <div>
        <button
          onClick={async () => {
            const response = await fetch("/.netlify/functions/node-fetch")
            const departures = await response.json()
            this.setState({ departures })
          }}
        >
          fetch
        </button>
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
}
