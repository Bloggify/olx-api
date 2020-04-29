"use strict";

const OlxApi = require("../lib")

const client = new OlxApi(
    // e.g. https://www.olx.ro/api
    process.env.OLX_HOST,
    // your client id
    process.env.CLIENT_ID,
    // your client secret
    process.env.CLIENT_SECRET
)

// 1. Get the tokens
client.getTokens("client_credentials").then(() => {
    // 2. Access the APIs
    return client.get("/partner/cities")
}).then(cities => {
    console.log(cities)
    // { data:
    //    [ { id: 1,
    //        region_id: 46,
    //        name: 'Bucuresti',
    //        county: 'Bucuresti',
    //        municipality: '',
    //        latitude: 44.43783,
    //        longitude: 26.09464 },
    //      { id: 24485,
    //        region_id: 46,
    //        name: '1 Decembrie',
    //        county: 'Bucuresti - Ilfov',
    //        municipality: '',
    //        latitude: 44.63032,
    //        longitude: 25.99666 },
    //      ... ] }
}).catch(console.error)
