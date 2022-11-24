import React, {useState} from 'react';
// import {useNavigate} from 'react-router-dom';


const Search = () => {
    const [name, setName] = useState(false);
    const handleClick1 = () => setName(!name);

    const [genre, setGenre] = useState(false);
    const handleClick2 = () => setGenre(!genre);

    const [hot, setHot] = useState(false);
    const handleClick3 = () => setHot(!hot);

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
  
    return (
    <div name = 'Search'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden bg-hero  bg-no-repeat bg-center
       overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row  w-full h-full '>
            <div className='h-screen w-full flex flex-col items-center px-40 py-80 gap-9'>
                <div className='flex flex-col items-center gap-12 h-full w-full '>
                  <div className='text-5xl font-geomatik text-[#df2027]'>
                      Search for an Artist
                  </div>
                  <div className='flex flex-row items-center gap-12 h-full w-full '>
                      <div className='bg-zinc-900/40 h-full w-[14rem] p-6 rounded-3xl flex flex-col items-center'>
                          <div className='flex flex-row items-center h-full'>
                                <div className='flex flex-col items-center'>
                                    <div className='flex flex-row items-center mb-10 gap-2 text-zinc-100/60'>
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0
                                        0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <div className='font-geomatik  text-xl '>Search by </div>
                                    </div>

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
                      <div className='bg-zinc-900/20 h-full w-full rounded-3xl p-12'>
                        <div className={!name ? 'hidden':'flex flex-col items-start gap-4'} >
                            <div className='font-geomatik text-zinc-100 text-xl'> Search by Artist Name</div>
                            <form method="POST" action="/search-artist" className='flex flex-row gap-7'>
                                <input required type='text' id="name" name="name" placeholder='artist`s name'
                                className='p-3 rounded-xl font-geomatik bg-zinc-200 text-zinc-600'></input>
                                <button type='submit' value='search' id="submit" name="submit"
                                className='p-3 rounded-xl font-geomatik bg-blue-600 text-white px-7 hover:bg-blue-800'>search</button>
                            </form>
                        </div>
                        <div className={!genre ? 'hidden':'flex flex-col items-start gap-4'} >
                            <div className='font-geomatik text-zinc-100 text-xl'> Search by Genre</div>
                            <format method="POST"  className='flex flex-row gap-7'>

                            </format>
                        </div>
                        <div className={!hot ? 'hidden':'flex flex-col items-start gap-4'} >
                            <div className='font-geomatik text-zinc-100 text-xl'> Top Artists</div>
                            <format method="POST"  className='flex flex-row gap-7'>

                            </format>
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