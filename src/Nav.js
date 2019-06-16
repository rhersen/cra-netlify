import React from "react"

function Nav({ getTrains }) {
  return (
    <div id="index">
      <span>
        <button onClick={() => getTrains({ branch: "w", direction: "n" })}>
          Järfälla norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "w", direction: "s" })}>
          Järfälla söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "n", direction: "n" })}>
          Solna norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "n", direction: "s" })}>
          Solna söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "c", direction: "n" })}>
          Centralen norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "c", direction: "s" })}>
          Centralen söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "s", direction: "n" })}>
          Huddinge norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "s", direction: "s" })}>
          Huddinge söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "e", direction: "n" })}>
          Haninge norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "e", direction: "s" })}>
          Haninge söderut
        </button>
      </span>
    </div>
  )
}

export default Nav
