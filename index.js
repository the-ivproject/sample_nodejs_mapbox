const express = require("express");
const app = express();
const env = require('dotenv')

env.config()

const mapbox_auth = {
    'mapbox_token':process.env.mapbox_token,
    'geojson': './assets/geojson/tracks.geojson'
}

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/map-api", (request, response) => {
  response.json(mapbox_auth);
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 8000)
