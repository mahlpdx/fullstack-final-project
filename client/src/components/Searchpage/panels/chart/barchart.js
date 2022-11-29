import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';

import React from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const buildData = ({ chartData }) => ({
    labels: chartData.labels,
    datasets: [
        {
            data: chartData.data,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
    ],

}
);

const buildOptions = ({ chartData }) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: chartData.xlabel,
                color: "rgba(255, 255, 255, 0.6)",
                font: {
                    size: 16,
                }
            }
        },
        y: {
            title: {
                color: "rgba(255, 255, 255, 0.6)",
                display: true,
                text: chartData.ylabel,
                font: {
                    size: 16,
                }
            }
        }
    }
});


const StockChart = ({ info }) => {
    const data = buildData(info);
    const options = buildOptions(info);
    console.log(data);
    return (
        <>
           <Bar type="bar" data={data} options={options} /> 
        </>
    );
};

export default StockChart;