// Node backend

const express = require("express");
const app = express();
const parser = require("body-parser");
var request = require('request');

// Don't have token in here forever
const getArtistData = (name) => {
  var client_id = "4051137e244045ff8ae3d95799ecd3f5";
  var client_secret = "b5177fb4b1b14a72b66d371090d5c1a8";

  // Authorization
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };
  
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
  
      // use the access token to access the Spotify Web API
      var token = body.access_token;

      var options = {
        url: `https://api.spotify.com/v1/search?type=artist&q=${name}&limit=1`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log(body.artists.items);
      });
    }
  });

};

app.use(
  parser.urlencoded({
    extended: false,
    limit: 1024,
  })
);

app.post("/search-artist", (req, res) => {
  console.log(req.body.name);
  getArtistData(req.body.name);
  console.log("On search page");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
