import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Filler } from 'chart.js';


import React from 'react';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Filler);

const buildData = ({ chartData }) => ({
    labels: chartData.labels,
    datasets: [
        {
            label: '',
            data: chartData.data,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(222, 66, 188, 0.8)',
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            fill: 'start',
            tension: 0.4,
        },
    ],

}
);

const options = {
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        yAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                display: false,
                drawBorder: false,
            },
        },

        xAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                circular: true,
                borderColor: 'rgba(255, 255, 255, .2)',
                color: 'rgba(255, 255, 255, .2)',
                borderDash: [5, 5]
            },
        },
    },
    layout: {
        padding: {
            right: 10,
        },
    },
};


const StockChart = ({ info }) => {
    const data = buildData(info);
    console.log(data);
    return (
        <>
            <div className="rounded-3xl shadow-xl overflow-hidden w-full md:flex" style={{ maxWidth: '900px' }}>
                <div className="flex w-full px-5 pb-4 pt-8 bg-zinc-700/50  items-center">
                    <Line type="line" data={data} options={options} />
                </div>
            </div>
        </>
    );
};

export default StockChart;