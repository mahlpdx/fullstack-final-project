/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import Artistname from './panels/artistname';

const Search = () => {


    
    // set data for search by artist name panal 

    return (
    <div name = 'Search'   className='w-full h-screen'> 
      <div className ='w-full h-screen  bg-hero  bg-no-repeat bg-center
      overflow-y-scroll overflow-x-hidden bg-cover md:bg-scroll sm:bg-scroll'>
        <div className='flex flex-row md:flex-row  w-full h-full mb-20 mt-2'>
            <div className='h-screen w-full flex flex-col items-center px-40 py-80 gap-9'>
                <div className='flex flex-col items-center gap-12 h-full w-full '>
                  <div className='text-5xl font-geomatik text-[#df2027]'>
                      Search Platform
                  </div>
                  <div className='flex flex-col items-center gap-12 h-full w-full'>
                      <div className=' w-full rounded-3xl'>
                        <div className='h-full'>
                            <Artistname/>
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