import React from "react"
import "./App.css"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <button id="update">result.INFO</button>
      <Nav
        getTrains={({ branch, direction }) => {
          console.log({ branch, direction })
        }}
      />
    </div>
  )
}

export default App
