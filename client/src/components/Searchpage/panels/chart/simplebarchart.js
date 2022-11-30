import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Title,
  Tooltip,
  LinearScale,
  CategoryScale,
  Legend
} from "chart.js";

import React from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const buildData = ({ chartData }) => ({
  labels: chartData.labels,
  datasets: [
    {
      data: chartData.data,
      barPercentage: 10,
      barThickness: 75,
      minBarLength: 2,
      backgroundColor: ["purple", "magenta", "pink", "violet", "plum"],
    },
  ],
});

const buildOptions = ({ chartData }) => ({
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: chartData.title,
        font: {
          size: 16
        }
      },
    },
});

const SimpleBarChart = ({ info }) => {
  const data = buildData(info);
  const options = buildOptions(info);
  return (
    <>
      <div
        className="rounded-3xl shadow-xl overflow-hidden w-full md:flex"
        style={{ maxWidth: "900px" }}
      >
        <div className="flex w-full px-5 pb-4 pt-8 bg-zinc-700/50 items-center">
          <Bar type="bar" data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default SimpleBarChart;
