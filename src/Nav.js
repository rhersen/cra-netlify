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
        <button onClick={() => getTrains({ branch: "vt", direction: "n" })}>
          Hallsberg norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "vt", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "sk", direction: "n" })}>
          Skövde
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "sk", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "g", direction: "n" })}>
          Göteborg norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "g", direction: "s" })}>
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
          Nässjö norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "e", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "v", direction: "n" })}>
          Alvesta norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "v", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "w", direction: "n" })}>
          Hässleholm norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "w", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "l", direction: "n" })}>
          Lund norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "l", direction: "s" })}>
          söderut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "bs", direction: "n" })}>
          Borås norrut
        </button>
      </span>
      <span>
        <button onClick={() => getTrains({ branch: "bs", direction: "s" })}>
          söderut
        </button>
      </span>
    </div>
  )
}

export default Nav
