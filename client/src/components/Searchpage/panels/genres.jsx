/* eslint-disable jsx-a11y/alt-text */
import React from 'react';


function Genres ({genres}) {
    //Parsing function to bring up the exact genre home page.
    //British is not a genre wiki page for example
    /*function getLink(genre){
        let parse_genre = "";
        let wikiLink = "https://en.wikipedia.org/wiki/";
    
        parse_genre = genre;

        if(genre !== "world_music"){
            parse_genre.concat("music");
        }

        wikiLink.concat(parse_genre)
        console.log(wikiLink);
        return wikiLink;
    }*/
    //Only outputs the hardcoded wiki main page when called below..

    return (
      <div className='w-full'>
        <div className='text-xl font-geomatik text-zinc-200/70 mb-3 ml-4 '>List of the genres the artist is associated with</div>
        <div className='flex flex-row items-center gap-6 font-geomatik text-zinc-200 w-full'>                  
          <div className='text-lg grid grid-cols-4 items-center gap-3'>
              {genres.map((genre) => (
                
                  <button id = 'gbtn' onClick={()=> window.open("https://en.wikipedia.org/wiki/".concat(genre), "_blank")} className='px-5 py-2 bg-indigo-600/60 rounded-full text-center ' key = {genre}>{genre}</button>
                  //<div className='px-5 py-2 bg-indigo-600/60 rounded-full text-center ' key = {genre}>{genres}</div> 
              ),
              )}
          </div>
        </div>

      </div>
    );
};
export default Genres;