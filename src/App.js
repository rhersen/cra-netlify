import React from "react"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { result: {}, msg: "" }
  }

  render() {
    return (
      <div>
        <div>text-react</div>
        <nav>
          {this.button("n")}
          {this.button("s")}
        </nav>
        <div>{this.state.msg}</div>
        <ul>
          {(this.state.result.TrainAnnouncement || [])
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

  button(direction) {
    return (
      <button
        onClick={async () => {
          this.setState({
            result: {},
            msg: `laddar ${direction}`,
            clicked: direction,
            loaded: undefined
          })
          const response = await fetch(
            `/.netlify/functions/node-fetch?direction=${direction}`
          )
          const result = await response.json()
          this.setState({
            result,
            loaded: direction,
            clicked: undefined,
            msg: result.msg
          })
        }}
      >
        {direction}
      </button>
    )
  }
}

export default App
