/* eslint-disable jsx-a11y/alt-text */
import React from 'react';


function Genres ({genres}) {
    return (
      <div className='w-full'>
        <div className='text-xl font-geomatik text-zinc-200/70 mb-3 ml-4 '>List of the genres the artist is associated with</div>
        <div className='flex flex-row items-center gap-6 font-geomatik text-zinc-200 w-full'>                  
          <div className='text-lg grid grid-cols-4 items-center gap-3'>
              {genres.map((genres) => (
                  <div className='px-5 py-2 bg-indigo-600/60 rounded-full text-center '>{genres}</div>
              ),
              )}
          </div>
        </div>

      </div>
    );
};
export default Genres;