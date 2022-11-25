# fullstack-final-project

# Spotify Analytics

Spotify Analytics is interactive analytics web application using data pulled from the Spotify API. 
It helps the users to search for their favorite artist and get the results in second.

# Environment setup

To run the node server, a `.env` file must be setup in your root directory. This file should contain the following variables:<br>
1. `CLIENT_ID` - Spotify developer application client ID
2. `CLIENT_SECRET`- Spotify developer application client ID 
3. `DB_USER` - MySQL user
4. `DB_PASS`- MySQL password
<br>

To run the server with the client on the same time, install concurrently in your root directory by running `npm i concurrently` and then run `npm run dev` while in the root directory.<br>

