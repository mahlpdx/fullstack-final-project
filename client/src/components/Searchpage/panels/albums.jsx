/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Albums ({albums}, id) {
  return (
    <div>
      <div className='flex flex-row items-center gap-4'>
          <div className='flex flex-col items-start'>
              <div className='text-xl font-geomatik text-zinc-200/70 mb-3 ml-4 '>Artist's Albums: </div>
              <ol className='h-[30rem] overflow-y-scroll scroll-smooth bg-zinc-900/50 rounded-3xl p-6 ' >
              {albums.map((album) => (
                          <>
                          <li className="font-geomatik text-zinc-200 bg-cine-200 mb-3 rounded-2xl bg-cover" style={{backgroundImage: `url(${album.images[0].url})`}} key ={album.id}>
                              <div className='backdrop-blur-sm bg-zinc-900/80 rounded-2xl w-full p-4 h-full flex flex-row gap-3' key ={album.id}>
                                  <img src={album.images[0].url} className='w-20 rounded-xl' />
                                  <div className='flex flex-col' >
                                      <div className='text-xl' >{album.name}</div>
                                      <div className='text-sm text-zinc-200/60'>{album.release_date}</div>
                                  </div>
                              </div>
                          </li>
                          </>
                      ),
              )}
              </ol>
          </div>
          
          <div>
              <div className='text-xl font-geomatik text-zinc-200/70 mb-3 ml-4 '>Album visualization: </div>
              <div className='h-[30rem]  bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start'>
              
              </div>


          </div>
      </div>

    </div>
  );
}
export default Albums;