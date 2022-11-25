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
    

    const reset = ()  => {
        setNamea('');
        setPic('');
        setArtist('');
        setFollowers('');
        setTracks([]);
        setGenres([]);
        setView(false);
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
          
        } catch (error) {
          console.error(error.message);
        }
      };
    return (
        
            <div>
            <div className=' h-full '>
                            <div className='font-geomatik text-[#df2027] '> Search by Artist Name</div>
                            <div className='flex flex-row '>
                                <input required type='text' id="name" name="name" placeholder='artist`s name'
                                className='p-3  font-geomatik bg-white text-zinc-900' value={namea} onChange={(ev) => setNamea(ev.target.value)} />
                                <button onClick={() => getArtist(namea)} className='p-3  font-geomatik bg-black
                                 text-white px-7 hover:bg-blue-800'>search</button>
                                <button onClick={() => reset()} className='p-3  font-geomatik bg-[#df2027] text-white
                                 px-7 hover:bg-red-800'>Reset search</button>
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