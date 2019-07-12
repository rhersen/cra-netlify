import React from "react"
import "./App.css"
import format from "date-fns/format"
import * as grid from "./grid"
import Trains from "./Trains"
import locations from "./locations"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { result: {}, msg: "", stations: locations() }
  }

  render() {
    return (
      <svg viewBox="-4 -6 8 12">
        <polygon
          className={
            this.state.loaded === "n"
              ? "loaded"
              : this.state.clicked === "n"
              ? "clicked"
              : "idle"
          }
          points={grid.leftTriangle()}
          stroke="#005CFF"
          fill="#f5f5f5"
          onClick={this.getCurrent("n")}
        />
        <polygon
          className={
            this.state.loaded === "s"
              ? "loaded"
              : this.state.clicked === "s"
              ? "clicked"
              : "idle"
          }
          points={grid.rightTriangle()}
          stroke="#005CFF"
          fill="#f5f5f5"
          onClick={this.getCurrent("s")}
        />
        {this.state.result.INFO && (
          <g>
            <text className="timestamp" textAnchor="middle" x="-1.5" y="-0.5">
              {format(
                this.state.result.INFO.LASTMODIFIED["@datetime"],
                "H:mm:ss"
              )}
            </text>
            <Trains result={this.state.result} stations={this.state.stations} />
          </g>
        )}
      </svg>
    )
  }

  getCurrent(direction) {
    return async () => {
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
    }
  }
}

export default App
