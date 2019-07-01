import React from "react"
import "./App.css"
import Departures from "./Departures"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Från Tullinge</p>
        <p>Från Sundbyberg</p>
        <Departures />
      </header>
    </div>
  )
}

export default App
