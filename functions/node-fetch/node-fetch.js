const fetch = require("node-fetch")
exports.handler = async function() {
  try {
    const response = await fetch(
      `http://api.sl.se/v1.2/data.json/api2/realtimedeparturesV4.json?key=${process.env.SL_API_KEY}&siteid=9001&timewindow=60`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
    if (!response.ok)
      // NOT res.status >= 200 && res.status < 300
      return {
        statusCode: response.status,
        body: JSON.stringify({ Message: response.statusText })
      }

    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ Message: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
