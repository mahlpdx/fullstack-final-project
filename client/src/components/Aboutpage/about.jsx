import React from 'react';


const About = () => {
  return (
    <div name = 'About'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden bg-hero  bg-no-repeat bg-center overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full '>
          <div className = 'flex flex-col text-[#df2027] justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-60'>
            <div className='md:items-center  sm:items-center sm:mt-40 gap-4 '>
                <div className='md:text-9xl sm:text-5xl font-bold font-geomatik'> About Us </div>
                <div className='flex flex-col items-start md:mb-60  md:mt-2 sm:mt-40 '>
                <div className='text-indigo-400 text-lg font-geomatik leading-loose text-left w-[33rem]'>
                        Spotify Analytics is interactive analytics web application using data pulled from the Spotify API. 
                        It helps the users to search for their favorite artist and get the results in second. 
                </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default About;