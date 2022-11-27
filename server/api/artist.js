const express = require('express');
const artistRouter = express.Router();
const dotenv = require("dotenv").config();
const parser = require("body-parser");
const request = require("request");
const mysql = require("mysql");




let artist = [''];
let tracks = [''];
let feature_ids = [];
let audio_features = [''];

artistRouter.get('/', async (req,res) => {
  try {
    if(req.query.name === '') {
        console.log('error');
    } else {
      const name = req.query.name ;
      const client_id = process.env.CLIENT_ID ;
      const client_secret = process.env.CLIENT_SECRET ;
    
      // Authorization
      let authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
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
            
            // GET request to receive top tracks for the artist
            let options = {
              url: `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`,
              headers: {
                Authorization: "Bearer " + token,
              },
              json: true,
            };
            request.get(options, (error, response, body) => {
              tracks = body ;
              //Copying track id's for audio features:
              console.log(body.tracks[0].id);
              for (let index = 0; index < body.tracks.length; index++) {
                let track_id = body.tracks[index].id;
                feature_ids.push(track_id)
              }
              feature_ids.join(',');
              //End of copy.
              console.log(feature_ids);
              //let ob = Object.assign(artist, tracks);
              //res.send(ob);
              
              // GET request for top track audio features
              let options = {
                url: ` https://api.spotify.com/v1/audio-features?ids=${feature_ids}`,
                headers: {
                  Authorization: "Bearer " + token,
                },
              json: true,};
              
              request.get(options, (error, response, body) => {
                audio_features = body;
                let ob = Object.assign(artist,tracks,audio_features);
                res.send(ob)
                console.log(ob);
              });
            });
          });
        }
        else {
          console.log('failed');    
        }
      
    //End of token
    });
    }  
  } catch (err) {
    res.status(500).send(err.message);
  } 
}); 

module.exports = artistRouter ;