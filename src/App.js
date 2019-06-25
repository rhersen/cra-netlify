import React from "react"
import Table from "./Table"

export default class App extends React.Component {
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
