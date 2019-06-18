import React from "react"
import "./App.css"
import Nav from "./Nav"
import Sheet from "./Sheet"
import location from "./location"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "",
      announcements: [],
      direction: undefined,
      branch: undefined
    }
  }

  render() {
    const { msg, announcements, direction, branch } = this.state
    return (
      <div className="App">
        {msg && <div>{msg}</div>}
        <Nav
          getTrains={async ({ branch, direction }) => {
            this.setState({ msg: "laddar...", branch, direction })
            const response = await fetch(
              `/.netlify/functions/node-fetch?direction=${direction}&locations=${location[branch]}&since=1:00&until=1:30`
            )
            const json = await response.json()
            if (json.msg) this.setState({ msg: json.msg })
            if (json.TrainAnnouncement)
              this.setState({ announcements: json.TrainAnnouncement, msg: "" })
          }}
        />
        <Sheet
          announcements={announcements}
          locations={
            direction !== "n" && branch
              ? location[branch].slice().reverse()
              : location[branch]
          }
        />
      </div>
    )
  }
}

export default App
