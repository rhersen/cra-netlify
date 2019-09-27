import React from "react"

function Nav({ getTrains }) {
  return (
    <div id="index">
      <span>
        <button onClick={() => getTrains({ branch: "c", direction: "n" })}>
          Stockholm norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "c", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "n", direction: "n" })}>
          Södermanland norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "n", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "s", direction: "n" })}>
          Östergötland norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "s", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "e", direction: "n" })}>
          Småland norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "e", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "w", direction: "n" })}>
          Skåne norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "w", direction: "s" })}>
          söderut
        </button>
      </span>
    </div>
  )
}

export default Nav
