const fetch = require("node-fetch")
exports.handler = async function() {
  try {
    const response = await fetch(
      "http://api.trafikinfo.trafikverket.se/v1.2/data.json",
      {
        method: "POST",
        body: getBody(),
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

function getBody() {
  return `
<REQUEST>
  <LOGIN authenticationkey='${process.env.TRAFIKVERKET_API_KEY}' />
     <QUERY objecttype='TrainAnnouncement'>
      <FILTER>
         <AND>
            <OR>
               <EQ name='LocationSignature' value='Tul' />
               <EQ name='LocationSignature' value='Åbe' />
               <EQ name='LocationSignature' value='Sub' />
            </OR>
            <IN name='ProductInformation' value='Pendeltåg' />
            <GT name='AdvertisedTimeAtLocation' value='$dateadd(-1:30:00)' />
            <LT name='AdvertisedTimeAtLocation' value='$dateadd(1:30:00)' />
         </AND>
      </FILTER>
     </QUERY>
</REQUEST>`
}
