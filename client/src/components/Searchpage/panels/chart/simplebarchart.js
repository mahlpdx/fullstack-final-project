import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Title,
Tooltip, LinearScale, CategoryScale} from 'chart.js';

import React from 'react';

ChartJS.register(   
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
    );


const buildData = ({ bchartData }) => ({
    
        labels: bchartData.labels,
        datasets: [
            {
                data: bchartData.data,
                barPercentage: 10,
                barThickness: 75,
                minBarLength: 2,
                backgroundColor: ['purple','magenta','pink','violet','plum']
            },
        ],
    
});

const buildOptions = ({ bchartData }) => ({
    options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Features' 
                }
            }    
        }
  
});


const SimpleBarChart = ({ info }) => {
    const data = buildData(info);
    console.log(data);
    return (
        <>
            <div className="rounded-3xl shadow-xl overflow-hidden w-full md:flex" style={{ maxWidth: '900px' }}>
                <div className="flex w-full px-5 pb-4 pt-8 bg-zinc-700/50  items-center">
                    <Bar type="bar" data={data} options = {buildOptions}/>
                </div>
            </div>
        </>
    );
};

export default SimpleBarChart;