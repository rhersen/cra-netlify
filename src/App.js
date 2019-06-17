import React from "react"
import "./App.css"
import Nav from "./Nav"
import location from "./location"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { msg: "", announcements: [] }
  }

  render() {
    return (
      <div className="App">
        {this.state.msg && <div>{this.state.msg}</div>}
        <Nav
          getTrains={async ({ branch, direction }) => {
            this.setState({ msg: "laddar..." })
            const response = await fetch(
              `/.netlify/functions/node-fetch?direction=${direction}&locations=${location[branch]}&since=1:00&until=1:30`
            )
            const json = await response.json()
            console.log(json)
            this.setState({ msg: json.msg })
          }}
        />
      </div>
    )
  }
}

export default App
