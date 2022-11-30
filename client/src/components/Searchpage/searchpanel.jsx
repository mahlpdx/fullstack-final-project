/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Track from "./panels/tracks";
import Albums from "./panels/albums";
import Genres from "./panels/genres";

const Artistname = () => {
  // set search by artist name panal
  const [ttrack, setTtrack] = useState(true);
  const handleClick1 = () => setTtrack(!ttrack);

  // set search by top artists based on genre panal
  const [talbums, setTalbums] = useState(false);
  const handleClick2 = () => setTalbums(!talbums);

  // set search by top artist based on year panal
  const [mpop, setMpop] = useState(false);
  const handleClick3 = () => setMpop(!mpop);

  const [m1, setM1] = useState(true);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  // set data for search by artist name panal

  const handleClick = (id) => (reason) => {
    if (id === 1) {
      handleClick1();
      setM1(true);
      if (talbums === true) {
        handleClick2();
        setM2(false);
      }
      if (mpop === true) {
        handleClick3();
        setM3(false);
      }
    } else if (id === 2) {
      handleClick2();
      setM2(true);
      if (ttrack === true) {
        handleClick1();
        setM1(false);
      }
      if (mpop === true) {
        handleClick3();
        setM3(false);
      }
    } else if (id === 3) {
      handleClick3();
      setM3(true);
      if (ttrack === true) {
        handleClick1();
        setM1(false);
      }
      if (talbums === true) {
        handleClick2();
        setM2(false);
      }
    }
  };

  // set data for search by artist name panal
  const [namea, setNamea] = useState("");
  const [id, setID] = useState("");
  const [view, setView] = useState(false);
  const [pic, setPic] = useState("");
  const [artist, setArtist] = useState("");
  const [followers, setFollowers] = useState("");
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pop, setPop] = useState([]);
  const [show, setShow] = useState(false);

  const reset = () => {
    setNamea("");
    setPic("");
    setArtist("");
    setFollowers("");
    setTracks([]);
    setAlbums([]);
    setGenres([]);
    setView(false);
    setShow(false);
  };

  const getArtist = async (name) => {
    try {
      // Artists
      const getuser = name;
      const artist_response = await fetch(
        `http://localhost:8080/artist?name=${getuser}`,
        {
          method: "GET",
        }
      );

      const artistData = await artist_response.json();
      console.log(artistData);
      setID(artistData.id);
      setPic(artistData.images[0].url);
      setArtist(artistData.name);
      setFollowers(artistData.followers.total);
      setGenres(artistData.genres);
      setPop(artistData.popularity);

      // Tracks
      const track_response = await fetch(
        `http://localhost:8080/top-tracks?id=${artistData.id}`,
        {
          method: "GET",
        }
      );
      const trackData = await track_response.json();
      console.log(trackData);
      setTracks(trackData.tracks);

      // Albums
      const album_response = await fetch(
        `http://localhost:8080/albums?id=${artistData.id}`,
        {
          method: "GET",
        }
      );
      const albumData = await album_response.json();

      // De-duplicating album data
      let unique_albums = [];
      let unique_names = new Set();
      for (let i = 0; i < albumData.items.length; i++) {
        console.log(albumData.items[i]);
        if (!unique_names.has(albumData.items[i].name)) {
          unique_albums.push(albumData.items[i]);
          unique_names.add(albumData.items[i].name);
        }
      }

      setAlbums(unique_albums);

      setView(true);
      setShow(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="h-full w-full">
        <div className="flex flex-row w-full bg-zinc-900/60 p-3 rounded-full justify-between">
          <div className="flex flex-row text-zinc-200 ml-3 items-center gap-6 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Type artist`s name"
              className="p-1 font-geomatik bg-transparent placeholder-zinc-100/70 w-full  text-zinc-100 border-none outline-none"
              value={namea}
              onChange={(ev) => setNamea(ev.target.value)}
            />
          </div>

          <div className="flex flex-row gap-4">
            <button
              onClick={() => getArtist(namea)}
              className="transition duration-300 ease-in-out font-geomatik bg-white
                                    text-zinc-900 font-bold px-4 hover:bg-indigo-600 hover:text-zinc-200 rounded-full"
            >
              GO
            </button>
            <button
              onClick={() => reset()}
              className={
                !show
                  ? "hidden"
                  : "transition duration-300 ease-in-out p-1 rounded-full font-geomatik bg-transparent border-2 border-red-400 text-red-400 px-4 hover:bg-red-400 hover:text-white"
              }
            >
              Reset
            </button>
          </div>
        </div>
        <div
          className={
            !view
              ? "hidden"
              : "bg-cover bg-brightness-40 w-full h-full rounded-3xl mt-3 "
          }
          style={{ backgroundImage: `url(${pic})` }}
        >
          <div className="backdrop-blur-sm flex flex-col items-start mb-9 rounded-3xl bg-zinc-900/50 w-full h-full p-9">
            <div className="flex flex-row items-center mb-9 rounded-3xl bg-zinc-900/80 w-full h-full p-9">
              <img
                src={pic}
                className=" w-[15rem] h-[15rem] rounded-xl mr-12"
              />
              <div className="h-full w-full flex flex-row items-start">
                <div className="flex flex-col gap-1 p-8">
                  <div className="flex flex-row items-center gap-6 font-geomatik text-zinc-200">
                    <div className="text-lg text-zinc-200/70">
                      Artist Name:{" "}
                    </div>
                    <div className="text-lg">{artist}</div>
                  </div>
                  <div className="flex flex-row items-center gap-6 font-geomatik text-zinc-200">
                    <div className="text-lg text-zinc-200/70">Followers: </div>
                    <div className="text-lg">
                      {followers.toLocaleString("en-US")}
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-6 font-geomatik text-zinc-200">
                    <div className="text-lg text-zinc-200/70">Popularity: </div>
                    <div className="text-lg">{pop}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center mb-9">
              <div className="flex flex-row items-center bg-zinc-900/80 px-4 font-geomatik py-3  rounded-full gap-6">
                <button
                  onClick={handleClick(1)}
                  className={
                    !m1
                      ? "px-5 py-1 text-zinc-400 rounded-3xl border-2 border-zinc-400 hover:text-zinc-100 hover:bg-zinc-400  transition duration-300 ease-in-out"
                      : "px-5 py-1 bg-indigo-600 text-indigo-200 rounded-3xl border-2 border-indigo-600"
                  }
                >
                  Top Tracks
                </button>
                <button
                  onClick={handleClick(2)}
                  className={
                    !m2
                      ? "px-5 py-1 text-zinc-400 rounded-3xl border-2 border-zinc-400 hover:text-zinc-100 hover:bg-zinc-400 transition duration-300 ease-in-out"
                      : "px-5 py-1 bg-indigo-600 text-indigo-200 rounded-3xl border-2 border-indigo-600"
                  }
                >
                  Albums
                </button>
                <button
                  onClick={handleClick(3)}
                  className={
                    !m3
                      ? "px-5 py-1 text-zinc-400 rounded-3xl border-2 border-zinc-400 hover:text-zinc-100 hover:bg-zinc-400  transition duration-300 ease-in-out"
                      : "px-5 py-1 bg-indigo-600 text-indigo-200 rounded-3xl border-2 border-indigo-600"
                  }
                >
                  Artist`s Genres
                </button>
              </div>
            </div>

            <div className={!ttrack ? "hidden" : "h-full w-full "}>
              <Track tracks={tracks} id={id} className="w-full h-full" />
            </div>
            <div className={!talbums ? "hidden" : "h-full w-full"}>
              <Albums albums={albums} id={id} />
            </div>
            <div className={!mpop ? "hidden" : "h-full w-full "}>
              <Genres genres={genres} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artistname;
