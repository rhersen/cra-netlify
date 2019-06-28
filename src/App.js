import React from "react"
import Table from "./Table"
import locations from "./locations"

let intervalId

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { announcements: [], msg: "", now: new Date() }
  }

  componentDidMount() {
    intervalId = setInterval(() => this.setState({ now: new Date() }), 990)
  }

  componentWillUnmount() {
    clearInterval(intervalId)
  }

  render() {
    const { msg, announcements, now } = this.state
    return (
      <div>
        {this.button("Sub")}
        {this.button("Sod")}
        {this.button("Sci")}
        {this.button("Sst")}
        {this.button("Åbe")}
        {this.button("Äs")}
        {this.button("Sta")}
        {this.button("Hu")}
        {this.button("Flb")}
        {this.button("Tul")}
        <div>{msg}</div>
        <Table announcements={announcements} now={now} />
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
            this.setState({ announcements: json.TrainAnnouncement, msg: "" })
        }}
      >
        {locations(location)}
      </button>
    )
  }
}
