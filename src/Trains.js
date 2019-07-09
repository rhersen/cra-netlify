import React, { Component } from "react"

import { groupBy, map } from "lodash"

import branchDivider from "./branchDivider"
import currentTrains from "./currentTrains"
import Branch from "./Branch"

export default class Trains extends Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
  }

  render() {
    const grouped = groupBy(
      currentTrains(this.props.result.TrainAnnouncement, this.props.stations),
      train => branchDivider(train, this.props.stations)
    )

    return (
      <g
        className={
          this.state.expanded ? `expanded-${this.state.expanded}` : "normal"
        }
      >
        {map(["nw", "ne", "sw", "se", "c"], key => (
          <Branch
            key={key}
            trains={grouped[key]}
            position={key}
            stations={this.props.stations}
            size={
              this.state.expanded === key
                ? "expanded"
                : this.state.expanded
                ? "collapsed"
                : "normal"
            }
            expand={() =>
              this.setState({
                expanded: this.state.expanded ? undefined : key
              })
            }
          />
        ))}
      </g>
    )
  }
}
