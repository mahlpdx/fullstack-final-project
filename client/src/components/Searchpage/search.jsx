/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
// import {useNavigate} from 'react-router-dom';


const Search = () => {

    // set search by artist name panal 
    const [name, setName] = useState(false);
    const handleClick1 = () => setName(!name);

    // set search by top artists based on genre panal
    const [genre, setGenre] = useState(false);
    const handleClick2 = () => setGenre(!genre);

    // set search by top artist based on year panal
    const [hot, setHot] = useState(false);
    const handleClick3 = () => setHot(!hot);
    
    // set data for search by artist name panal 
    const [namea, setNamea] = useState('');
    const [view, setView] = useState(false);
    const [pic, setPic] = useState('');
    const [artist, setArtist] = useState('');
    const [followers, setFollowers] = useState('');
    const [tracks, setTracks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [pop, setPop] = useState([]);
    
    const handleClick = (id) => (reason) => {
        console.log(id);
        if(id === 1){
            handleClick1();
            if(genre === true) {
                handleClick2();
            }
            if(hot === true) {
                handleClick3();
            }

        }
        else if(id === 2){
            handleClick2();
            if(name === true) {
                handleClick1();
            }
            if(hot === true) {
                handleClick3();
            }

        }
        else if(id === 3){
            handleClick3();
            if(name === true) {
                handleClick1();
            }
            if(genre === true) {
                handleClick2();
            }

        }
    
    };

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
          console.log(pic);
        } catch (error) {
          console.error(error.message);
        }
      };
    return (
    <div name = 'Search'   className='w-full h-screen'> 
      <div className ='w-full h-screen  bg-hero  bg-no-repeat bg-center
      overflow-y-scroll overflow-x-hidden bg-cover md:bg-scroll sm:bg-scroll'>
        <div className='flex flex-row md:flex-row  w-full h-full mb-20 mt-2'>
            <div className='h-screen w-full flex flex-col items-center px-40 py-80 gap-9'>
                <div className='flex flex-col items-center gap-12 h-full w-full '>
                  <div className='text-5xl font-geomatik text-[#df2027]'>
                      Search for an Artist
                  </div>
                  <div className='flex flex-col items-center gap-12 h-full w-full'>
                      <div className='bg-zinc-900/40  w-full p-6 rounded-3xl flex flex-col items-center'>
                        <div className='flex flex-row items-center mb-3 gap-2 text-zinc-100/60'>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0
                                    0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <div className='font-geomatik  text-xl '>Search by </div>
                        </div>
                        <div className='flex flex-row items-center h-full'>
                            
                            <div className='flex flex-row items-center gap-14'>


                                <button onClick={handleClick(1)} className='text-zinc-100 mb-4 flex flex-col items-center hover:text-indigo-200 transition duration-300 ease-in-out'>
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937
                                    13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <div className='font-geomatik text-lg font-bold'>Name</div>
                                </button>
                                <button onClick={handleClick(2)} className='text-zinc-100 mb-4  flex flex-col items-center hover:text-indigo-200 transition duration-300 ease-in-out'>
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343
                                2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                                    <div className='font-geomatik text-lg font-bold'>Genre</div>
                                </button>
                                <button onClick={handleClick(3)} className='text-zinc-100 mb-4 flex flex-col items-center hover:text-indigo-200 transition duration-300 ease-in-out'>
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9
                                10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                                    <div className='font-geomatik text-lg font-bold'>Top</div>
                                </button>
                            </div>
                        </div>

                      </div>
                      <div className=' w-full rounded-3xl'>
                        <div className={!name ? 'hidden':'flex flex-col items-start gap-1 h-full'} >
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
                        <div className={!genre ? 'hidden':'flex flex-col items-start gap-4'} >
                            <div className='font-geomatik text-zinc-100 text-xl'> Search by Genre</div>

                        </div>
                        <div className={!hot ? 'hidden':'flex flex-col items-start gap-4'} >
                            <div className='font-geomatik text-zinc-100 text-xl'> Top Artists</div>

                        </div>

                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search;