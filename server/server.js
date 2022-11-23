// Node backend

// Imports
const dotenv = require("dotenv").config();
const express = require("express");
const parser = require("body-parser");
const request = require("request");
const mysql = require("mysql");

// App
const app = express();

// Database connection
let db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "spotify",
});

db.query(`
CREATE TABLE if not exists artists (
  id VARCHAR(50),
  name VARCHAR(50),
  PRIMARY KEY (ID)
);
`);

const getArtistData = (name) => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  // Authorization
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  // Initial POST request to get token
  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // Use the access token to access the Spotify Web API
      const token = body.access_token;

      // GET request to get artist's metadata
      let options = {
        url: `https://api.spotify.com/v1/search?type=artist&q=${name}&limit=1`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };

      request.get(options, (error, response, body) => {
        const artist = body.artists.items[0];
        console.log(artist);

        db.query(`select * from artists where id = "${artist.id}"`, 
        (error, results) => {
          if (!error) {
            if (results.length == 0) {
              console.log(results)
              db.query(`INSERT INTO artists (id,name)
              VALUES("${artist.id}", "${artist.name}");
              `)
            }
          }
        }
        )

        // GET request to receive top tracks for the artist
        let options = {
          url: `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`,
          headers: {
            Authorization: "Bearer " + token,
          },
          json: true,
        };

        request.get(options, (error, response, body) => {
          //console.log(body);
        });
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
  getArtistData(req.body.name);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
