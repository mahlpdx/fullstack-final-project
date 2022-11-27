const express = require("express");
const albumsRouter = express.Router();
const dotenv = require("dotenv").config();
const parser = require("body-parser");
const request = require("request");

albumsRouter.get("/", async (req, res) => {
  try {
    // An artist ID must be passed in the query to return a result
    if (req.query.name === "") {
      console.log("error");
    } else {
      const id = req.query.id;
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

          // GET request to receive albums for the artist
          let options = {
            url: `https://api.spotify.com/v1/artists/${id}/albums`,
            headers: {
              Authorization: "Bearer " + token,
            },
            json: true,
          };

          request.get(options, (error, response, body) => {
            let ob = Object.assign(body);
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

module.exports = albumsRouter;
