const express = require("express");
const topTracksRouter = express.Router();
const dotenv = require("dotenv").config();
const parser = require("body-parser");
const request = require("request");

topTracksRouter.get("/", async (req, res) => {
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

          // GET request to receive top tracks for the artist
          let options = {
            url: `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
            headers: {
              Authorization: "Bearer " + token,
            },
            json: true,
          };

          request.get(options, (error, response, body) => {
            tracks = body.tracks;
            feature_ids = [];
            for (let index = 0; index < body.tracks.length; index++) {
              let track_id = body.tracks[index].id;
              feature_ids.push(track_id);
            }
            feature_ids.join(',');
            //End of copy.
            
             // GET request for top track audio features
            let options = {
                url: ` https://api.spotify.com/v1/audio-features?ids=${feature_ids}`,
                headers: {
                  Authorization: "Bearer " + token, 
                },
                json: true,};

              request.get(options, (error, response, body) => {
                console.log(tracks.length);
                //Adding the audio_features object to top tracks//
                for(let index = 0; index < tracks.length; index++){
                    console.log(tracks[index].id);
                    console.log(body.audio_features[index].id);
                    if(tracks[index].id === body.audio_features[index].id){
                        console.log("It works: " + index);
                        Object.assign(tracks[index], {audio_features : body.audio_features[index]});
                    }
                }//End of Audio_features GET //
                let ob = Object.assign(tracks);
                res.send(ob);
              });
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

module.exports = topTracksRouter;
