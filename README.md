# fullstack-final-project

# Spotify Analytics

Spotify Analytics is interactive analytics web application using data pulled from the Spotify API. 
It allows the users to search for their favorite artist and explore data about them.

# Environment setup

To run the node server, a `.env` file must be setup in your root directory. This file should contain the following variables:<br>
1. `CLIENT_ID` - Spotify developer application client ID
2. `CLIENT_SECRET`- Spotify developer application client ID 

This information will be passed along at time of project submission. 
<br>

To run the server and the client on the same time, install concurrently in your root directory by running `npm i concurrently` and then run `npm run dev` while in the root directory.<br>

# Dependencies

To install the packages required for the project, run `npm install package.json` in both the root directory and the `client` directory.

# Metrics

For each artist, a number of visualizations are avaialable.<br>

In the top tracks panel, the artist's top 10 tracks will be displayed. The user can click on a song to visualize a few metrics:
1. The relative popularity of the artist's top 10 tracks. This popularity metric is an internal Spotify metric, described in the Spotify documentation as: "The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are."<br>
2. The audio features for the track in both a panel view and a bar graph. These features are described [here](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features).

<br>
In the albums panel, all of the artist's US albums releases (LPs, EPs, and singles) are shown. There is a visualization that is always visible and shows the number of releases from the artist per year, starting from the year of their first release to present day. 

<br>
In the genre panel, all of the known genre's associated with the artist are listed. For more information on a specific genre, the user can click on the genre name, and will be linked to an associated wikipedia article.




