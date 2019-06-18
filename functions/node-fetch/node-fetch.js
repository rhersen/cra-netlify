const fetch = require("node-fetch")
exports.handler = async function({ queryStringParameters }) {
  try {
    const response = await fetch(
      "http://api.trafikinfo.trafikverket.se/v1.2/data.json",
      {
        method: "POST",
        body: getBody(queryStringParameters),
        headers: {
          "Content-Type": "application/xml",
          Accept: "application/json"
        }
      }
    )
    if (!response.ok)
      // NOT res.status >= 200 && res.status < 300
      return {
        statusCode: response.status,
        body: JSON.stringify({ msg: response.statusText })
      }

    const data = await response.json()
    const [body] = data.RESPONSE.RESULT

    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}

function getBody({ direction, locations, since, until }) {
  return `
<REQUEST>
  <LOGIN authenticationkey='${process.env.TRAFIKVERKET_API_KEY}' />
     <QUERY objecttype='TrainAnnouncement'>
      <FILTER>
         <AND>
            <NE name='Canceled' value='true' />
            <LIKE name='AdvertisedTrainIdent' value='/[${
              direction === "n" ? "02468" : "13579"
            }]$/' />
            <OR> ${locations
              .split(",")
              .map(
                location =>
                  `<EQ name='LocationSignature' value='${location}' />`
              )
              .join(" ")}
            </OR>
            <OR>
             <AND>
              <GT name='AdvertisedTimeAtLocation' value='$dateadd(-${since}:00)' />
              <LT name='AdvertisedTimeAtLocation' value='$dateadd(${until}:00)' />
             </AND>
             <AND>
              <GT name='EstimatedTimeAtLocation' value='$dateadd(-${since}:00)' />
              <LT name='EstimatedTimeAtLocation' value='$dateadd(${until}:00)' />
             </AND>
             <AND>
              <GT name='TimeAtLocation' value='$dateadd(-${since}:00)' />
              <LT name='TimeAtLocation' value='$dateadd(${until}:00)' />
             </AND>
            </OR>
         </AND>
      </FILTER>
     </QUERY>
</REQUEST>`
}
