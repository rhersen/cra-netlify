import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Departures from "./Departures"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>stations</p>
        <Departures />
      </header>
    </div>
  )
}

export default App
