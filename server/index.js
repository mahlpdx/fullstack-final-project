const express = require("express");
const app = express();
const artistRouter = require("./api/artist");
const topTracksRouter = require("./api/top-tracks");
const albumsRouter = require("./api/albums");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers in order to perform all operation on API
// Because CORS Thing (Google it if you do not know)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");

  next();
});

app.use("/artist/", artistRouter);
app.use("/top-tracks/", topTracksRouter);
app.use("/albums/", albumsRouter);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
