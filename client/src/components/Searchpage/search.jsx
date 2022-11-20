import React from 'react';
// import {useNavigate} from 'react-router-dom';


const Search = () => {
  return (
    <div name = 'Search'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden bg-hero  bg-no-repeat bg-center
       overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row  w-full h-full '>
            <div className='h-screen w-full flex flex-col items-center px-40 py-80 gap-9'>
                <div className='flex flex-row items-center gap-12'>
                  <div className='text-5xl font-geomatik text-[#df2027] '> Search for an Artist</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search;