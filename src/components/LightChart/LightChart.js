import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';


ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function LightChart(props) {
    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time (Earth Years)",
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Relative Brightness",
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: props.title,
            },
        },
    };



    const data = {
        datasets: [
            {
                label: 'Light Chart',
                data: props.data,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return <Scatter options={options} data={data} />;
}