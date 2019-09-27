import React from "react"
import difference_in_seconds from "date-fns/difference_in_seconds"
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
      branch: undefined,
      then: undefined
    }
  }

  componentDidMount() {
    window.addEventListener("visibilitychange", this.onFocus)
  }

  componentWillUnmount() {
    window.removeEventListener("visibilitychange", this.onFocus)
  }

  onFocus = () => {
    const { branch, direction } = this.state
    if (
      document.visibilityState === "visible" &&
      branch &&
      direction &&
      this.secondsAgo() > 30
    )
      this.getTrains(branch, direction)
  }

  secondsAgo() {
    const { then } = this.state
    return then ? difference_in_seconds(Date.now(), then) : 0
  }

  render() {
    const { msg, announcements, direction, branch } = this.state
    return (
      <div className="App">
        {msg && <div>{msg}</div>}
        <Nav
          getTrains={async ({ branch, direction }) => {
            await this.getTrains(branch, direction)
          }}
        />
        <Sheet
          announcements={announcements}
          locations={
            direction === "n" && branch
              ? location[branch].slice().reverse()
              : location[branch]
          }
        />
      </div>
    )
  }

  async getTrains(branch, direction) {
    this.clearAnnouncements(branch, direction)
    const response = await fetch(
      `/.netlify/functions/node-fetch?direction=${direction}&locations=${location[branch]}`
    )
    const json = await response.json()
    if (json.msg) this.setState({ msg: json.msg })
    if (json.TrainAnnouncement) this.setAnnouncements(json)
  }

  setAnnouncements(json) {
    this.setState({
      announcements: json.TrainAnnouncement,
      msg: "",
      then: Date.now()
    })
  }

  clearAnnouncements(branch, direction) {
    this.setState({
      branch,
      direction,
      announcements: [],
      then: undefined
    })
  }
}

export default App
