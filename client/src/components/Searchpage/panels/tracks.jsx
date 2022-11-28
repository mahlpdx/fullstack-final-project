/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import StockChart from './chart/chart';

function Track ({tracks}, id) {
    const [tc, setTc] = useState([]);
    const [selected, setSelected] = useState('');
    const [show, setShow] = useState(false);
    const [m1, setM1] = useState(true);
    const [m2, setM2] = useState(false);
    const [acousticness, setAcousticness] = useState('');
    const [energy, setEnergy] = useState('');
    const [instrumentalness, setinstrumentalness] = useState('');
    const [liveness, setLiveness] = useState('');
    const [duration_ms, setDuration_ms] = useState('');
    const [loudness, setLoudness] = useState('');

    const [pop, setPop] = useState([]);
    const datac = {
        chartData: {
          labels: ['1','2','3','4','5','6','7','8','9','10'],
          data: pop,
        },
      };

    const padTo2Digits = (num)  => {
        return num.toString().padStart(2, '0');
    };
      
    const convertTime = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.round((milliseconds % 60000) / 1000);
      
        return seconds === 60
          ? `${minutes + 1}:00`
          : `${minutes}:${padTo2Digits(seconds)}`;
    };

    const data = (tracks) => {
        let i = 0 ;
        const arr = [];
        for(i=0 ; i < 10 ; i++) {
            arr.push(tracks[i].popularity);
        }
        setPop(arr);
    };
    
    const handleClick = (tracki) => (reason) => {
        
        setSelected(tracki.id);
        setTc(tracki);
        setAcousticness(tracki.audio_features.acousticness);
        setEnergy(tracki.audio_features.energy);
        setinstrumentalness(tracki.audio_features.instrumentalness);
        setLiveness(tracki.audio_features.liveness);
        setDuration_ms(convertTime(tracki.audio_features.duration_ms));
        setLoudness(tracki.audio_features.loudness);
        setShow(true);
        data(tracks);
    };
    console.log(pop);
    const handleClick2 = (id) => (reason) => {
        if(id === 1){
            setM1(true);
            if(m2 === true) {
                setM2(false);
            }
        }
        else if(id === 2){
            setM2(true);
            if(m1 === true) {

                setM1(false);
            }
        }
    };
    return (
      <div>
        <div className='flex flex-row items-center gap-4 w-full h-full'>
            <div className='flex flex-col items-start w- '>
                <div className='text-xl font-geomatik text-zinc-200/70 mb-3 ml-4'>Top 10 Tracks: </div>
                <ol className='h-[30rem] overflow-y-scroll scroll-smooth bg-zinc-900/50 rounded-3xl p-6 flex flex-col w-auto'>
                    {tracks.map((track) => (
                                <>
                                <button onClick={handleClick (track)} className="  font-geomatik text-zinc-200 mb-3 rounded-2xl bg-cover flex flex-row " style={{backgroundImage: `url(${track.album.images[0].url})`}} >
                                    <div className={selected === track.id ? " border-4 border-indigo-600 backdrop-blur-sm bg-zinc-900/80 rounded-2xl w-full p-4 h-full flex flex-row gap-3" :  ' backdrop-blur-sm bg-zinc-900/80 rounded-2xl w-full p-4 h-full flex flex-row gap-3'}>
                                        <img src={track.album.images[0].url} className='w-20 rounded-xl'/>
                                        <div className='flex flex-col items-start pr-24'>
                                            <div className='text-xl whitespace-nowrap'>{track.name}</div>
                                            <div className='text-sm text-zinc-200/60'>{track.album.name}</div>
                                            <div className='text-sm text-zinc-200/60'>{track.album.release_date}</div>
                                        </div>
                                    </div>
                                </button>
                                </>
                            ),
                    )}
                </ol>
            </div>
            
            <div className={!show ? 'hidden':'flex flex-col w-full h-full'}>
                <div className='w-full flex flex-col items-center '>
                    <div className='flex flex-row items-center bg-zinc-900/80 px-3 font-geomatik py-2  rounded-full gap-3'>
                            <button onClick={handleClick2(1)} className={!m1 ? ' text-sm px-3 py-1 text-zinc-400 rounded-3xl border-2 border-zinc-400 hover:text-zinc-100 hover:bg-zinc-400  transition duration-300 ease-in-out':
                                'text-sm px-3 py-1 bg-pink-600 text-pink-200 rounded-3xl border-2 border-pink-600'}>Popularity</button>
                            <button onClick={handleClick2(2)} className={!m2 ? ' text-sm px-3 py-1 text-zinc-400 rounded-3xl border-2 border-zinc-400 hover:text-zinc-100 hover:bg-zinc-400  transition duration-300 ease-in-out'
                            :'text-sm px-3 py-1 bg-pink-600 text-pink-200 rounded-3xl border-2 border-pink-600'}>Audio features</button>
                    </div>
                </div>
                <div className='h-[29rem] w-full mt-3 h-full  bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start'>
                        <div className={!m1 ? 'hidden':'flex h-full flex-col items-start w-full'}>
                            <div className='text-lg font-geomatik text-zinc-200/70 mb-3 ml-4'>{tc.name} Popularity</div>

                            <StockChart info={datac} className='w-full h-full' />

                           
                            
                        </div>
                        <div className={!m2 ? 'hidden':'flex flex-col items-start w-full'}>
                            <div className='text-lg font-geomatik text-zinc-200/70 mb-3 ml-4'>{tc.name} Audio features</div>
                            <div className='grid grid-cols-3  font-geomatik gap-4 w-full'>
                                <div className='bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start'>
                                    <div className='text-zinc-200/40'>acousticness</div>
                                    <div className='text-4xl text-pink-600'>{acousticness}</div>
                                </div>
                                <div className='bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start'>
                                    <div className='text-zinc-200/40'>energy</div>
                                    <div className='text-4xl text-cyan-600'>{energy}</div>
                                </div>
                                <div className='bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start'>
                                    <div className='text-zinc-200/40'>instrumentalness</div>
                                    <div className='text-4xl text-gray-600'>{instrumentalness}</div>
                                </div>
                                <div className='bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start'>
                                    <div className='text-zinc-200/40'>liveness</div>
                                    <div className='text-4xl text-teal-600'>{liveness}</div>
                                </div>
                                <div className='bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start col-span-2 row-span-2'>
                                    <div className='text-zinc-200/40'>duration</div>
                                    <div className='text-9xl text-blue-600'>{duration_ms}</div>
                                    
                                </div>
                                <div className='bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start'>
                                    <div className='text-zinc-200/40'>loudness</div>
                                    <div className='text-4xl text-green-600'>{loudness}</div>
                                </div>
                            </div>
                        </div>
                </div>


            </div>
        </div>

      </div>
    );
};
export default Track;