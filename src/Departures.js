import React from "react"
import differenceInSeconds from "date-fns/difference_in_seconds"

export default class Departures extends React.Component {
  constructor(props) {
    super(props)
    this.state = { metros: [], trains: [], msg: "" }
  }

  render() {
    return (
      <div>
        {this.button("Sub")}
        {this.button("Cst")}
        {this.button("Flb")}
        {this.button("Tul")}
        <div>{this.state.msg}</div>
        <ul>
          {this.state.trains.map(t => {
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
          })}
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
        }}
      >
        {location}
      </button>
    )
  }
}
