import React from "react"
import "./App.css"
import Nav from "./Nav"
import location from "./location"

function App() {
  return (
    <div className="App">
      <Nav
        getTrains={async ({ branch, direction }) => {
          const response = await fetch(
            `/.netlify/functions/node-fetch?direction=${direction}&locations=${location[branch]}&since=1:00&until=1:30`
          )
          console.log(await response.json())
        }}
      />
    </div>
  )
}

export default App
