const express = require("express");
const artistRouter = express.Router();
const dotenv = require("dotenv").config();
const parser = require("body-parser");
const request = require("request");

let artist = [""];

artistRouter.get("/", async (req, res) => {
  try {
    // An artist name must be passed in the query to return a result
    if (req.query.name === "") {
      console.log("error");
    } else {
      const name = req.query.name;
      const client_id = process.env.CLIENT_ID;
      const client_secret = process.env.CLIENT_SECRET;

      // Authorization
      let authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(client_id + ":" + client_secret).toString("base64"),
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
            artist = body.artists.items[0];

            let ob = Object.assign(artist);
            res.send(ob);
          });
        } else {
          console.log("failed");
        }
      });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = artistRouter;
