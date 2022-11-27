/* eslint-disable jsx-a11y/alt-text */
import React from 'react';


function Track ({tracks}, {audio_features},id) {
    return (
      <div>
        <div className='flex flex-row items-center gap-4'>
            <div className='flex flex-col items-start'>
                <div className='text-xl font-geomatik text-zinc-200/70 mb-3 ml-4 '>Top 10 Tracks: </div>
                <ol className='h-[30rem] overflow-y-scroll scroll-smooth bg-zinc-900/50 rounded-3xl p-6 '>
                {tracks.map((track) => (
                            <>
                            <li className="font-geomatik text-zinc-200 bg-cine-200 mb-3 rounded-2xl bg-cover" style={{backgroundImage: `url(${track.album.images[0].url})`}} >
                                <div className='backdrop-blur-sm bg-zinc-900/80 rounded-2xl w-full p-4 h-full flex flex-row gap-3'>
                                    <img src={track.album.images[0].url} className='w-20 rounded-xl'/>
                                    <div className='flex flex-col'>
                                        <div className='text-xl'>{track.name}</div>
                                        <div className='text-sm text-zinc-200/60'>{track.album.name}</div>
                                        <div className='text-sm text-zinc-200/60'>{track.album.release_date}</div>
                                    </div>
                                </div>
                            </li>
                            </>
                        ),
                )}
                </ol>
            </div>
            
            <div>
                <div className='text-xl font-geomatik text-zinc-200/70 mb-3 ml-4 '>Most popular songs: </div>
                <div className='h-[30rem]  bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start'>
                {/*{audio_features.map((feature) => (
                                <>
                                <div className='text-xl'>{feature.id}</div>
                                <div className='text-sm text-zinc-200/60'>{feature.loudness}</div>
                                <div className='text-sm text-zinc-200/60'>{feature.danceability}</div>
                                </>
                                ), 
                )}*/}
                </div>


            </div>
        </div>

      </div>
    );
};
export default Track;