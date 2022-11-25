const express = require('express');
const artistRouter = express.Router();
const dotenv = require("dotenv").config();
const parser = require("body-parser");
const request = require("request");
const mysql = require("mysql");
const axios = require('axios');



let artist = [''];
let tracks = [''];

artistRouter.get('/', async (req,res) => {
  try {
    if(req.query.name === '') {
        console.log('error');
    } else {
      const name = req.query.name ;
      const client_id = '4051137e244045ff8ae3d95799ecd3f5' ;
      const client_secret = 'b5177fb4b1b14a72b66d371090d5c1a8' ;
    
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
              let ob = Object.assign(artist, tracks);
              res.send(ob);    
              //console.log(ob); 
            });
          });

        }
        else {
          console.log('failed');    
        }
      });
    }  
  } catch (err) {
    res.status(500).send(err.message);
  } 
}); 

module.exports = artistRouter ;