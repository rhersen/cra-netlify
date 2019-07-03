import React, { Component } from "react"
import "./App.css"
import differenceInSeconds from "date-fns/difference_in_seconds"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { metros: [], trains: [], now: Date.now() }
  }

  render() {
    const tr = t => {
      const d = differenceInSeconds(t.ExpectedDateTime, this.state.now)
      const s = d % 60
      const m = d - s
      return (
        <tr key={t.TimeTabledDateTime}>
          <td>{t.ExpectedDateTime.substr(11)}</td>
          <td>
            {m / 60}:{s < 10 ? "0" : ""}
            {s}
          </td>
          <td>{t.Destination}</td>
        </tr>
      )
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Stockholm City</h2>
        </div>
        <h3>Tunnelbana</h3>
        <table style={{ width: "90%" }}>
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "40%" }} />
          </colgroup>
          <tbody>{this.state.metros.map(tr)}</tbody>
        </table>
        <h3>Pendeltåg</h3>
        <table style={{ width: "90%" }}>
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "40%" }} />
          </colgroup>
          <tbody>{this.state.trains.map(tr)}</tbody>
        </table>
      </div>
    )
  }

  async componentDidMount() {
    this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000)
    const response = await fetch("/.netlify/functions/node-fetch")
    const json = await response.json()
    if (json.Message) this.setState({ msg: json.Message })
    if (json.ResponseData)
      this.setState({
        metros: json.ResponseData.Metros.filter(
          metro => metro.Destination === "Hjulsta"
        ),
        trains: json.ResponseData.Trains.filter(train =>
          /43/.test(train.LineNumber)
        ).filter(train => train.JourneyDirection === 2)
      })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}

export default App
