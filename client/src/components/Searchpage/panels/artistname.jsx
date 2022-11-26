/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';


const Artistname = () => {

    
    // set data for search by artist name panal 
    const [namea, setNamea] = useState('');
    const [view, setView] = useState(false);
    const [pic, setPic] = useState('');
    const [artist, setArtist] = useState('');
    const [followers, setFollowers] = useState('');
    const [tracks, setTracks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [pop, setPop] = useState([]);
    const [show, setShow] = useState(false);

    const reset = ()  => {
        setNamea('');
        setPic('');
        setArtist('');
        setFollowers('');
        setTracks([]);
        setGenres([]);
        setView(false);
        setShow(false);
    }

    const getArtist = async (name) => {
        try {
          const getuser = name ;
          const response = await fetch(`http://localhost:8080/artist?name=${getuser}`, {
            method: "GET"
          });
          
          const jsonData = await response.json();
          console.log(jsonData);
          
          setPic(jsonData.images[0].url);
          setArtist(jsonData.name);
          setFollowers(jsonData.followers.total);
          setTracks(jsonData.tracks);
          setGenres(jsonData.genres);
          setPop(jsonData.popularity);
          setView(true);
          setShow(true);
        } catch (error) {
          console.error(error.message);
        }
      };
    return (
        
            <div>
            <div className='h-full w-full'>
                            <div className='flex flex-row w-full bg-zinc-900 p-3 rounded-full justify-between'>
                                <div className='flex flex-row text-zinc-200 ml-3 items-center gap-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                    <input required type='text' id="name" name="name" placeholder='Type artist`s name'
                                    className='p-1 font-geomatik bg-transparent placeholder-zinc-100/70  text-zinc-100 border-none outline-none'
                                    value={namea} onChange={(ev) => setNamea(ev.target.value)} />
                                </div>

                                <div className='flex flex-row gap-4'>
                                    <button onClick={() => getArtist(namea)} className=' font-geomatik bg-white
                                    text-zinc-900 font-bold px-6 hover:bg-indigo-600 hover:text-zinc-200 rounded-full'>GO</button>
                                    <button onClick={() => reset()} className={!show ? 'hidden':'p-1 rounded-full font-geomatik bg-transparent border-2 border-red-600 text-red-600 px-4 hover:bg-red-600 hover:text-white'}>Reset</button>
                                </div>

                            </div>
                            <div className={!view ? 'hidden':'bg-cover bg-brightness-40 w-full h-full rounded-3xl mt-3 '}style={{backgroundImage: `url(${pic})`}} >
                                <div className='backdrop-blur-sm flex flex-col items-start mb-9 rounded-3xl bg-zinc-900/50 w-full h-full p-9'>
                                    <div className='flex flex-row items-center mb-9 rounded-3xl bg-zinc-900/80 w-full h-full p-9'>
                                        <img src={pic} className=' w-[15rem] h-[15rem] rounded-xl mr-12'/>
                                        <div className='h-full w-full flex flex-row items-start'>
                                            <div className='flex flex-col gap-1 p-8'>
                                                <div className='flex flex-row items-center gap-6 font-geomatik text-zinc-200'>
                                                    <div className='text-lg text-zinc-200/70'>Artist Name : </div>
                                                    <div className='text-lg'>{artist}</div>
                                                </div>
                                                <div className='flex flex-row items-center gap-6 font-geomatik text-zinc-200'>
                                                    <div className='text-lg text-zinc-200/70'># of followers : </div>
                                                    <div className='text-lg'>{followers}</div>
                                                </div>
                                                
                                                <div className='flex flex-row items-center gap-6 font-geomatik text-zinc-200'>
                                                    <div className='text-lg text-zinc-200/70'>Genres: </div>
                                                    <div className='text-lg flex flex-row gap-3'>
                                                        {genres.map((genress) => (
                                                            <div>{genress},</div>
                                                        ),
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='flex flex-row items-center gap-6 font-geomatik text-zinc-200'>
                                                    <div className='text-lg text-zinc-200/70'>Popularity : </div>
                                                    <div className='text-lg'>{pop}</div>
                                                </div>

                                            </div>

                                            
                                        </div>
                                    </div>

                                    <div className='h-full'>
                                                <div className='text-xl font-geomatik text-zinc-200 mb-3'>Top Tracks: </div>
                                                <ol className='h-[30rem] overflow-y-scroll scroll-smooth bg-zinc-900/50 rounded-3xl p-6'>
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
                                </div>
                                
                            </div>
                            
                        </div>
            </div>
        
  )
}

export default Artistname;