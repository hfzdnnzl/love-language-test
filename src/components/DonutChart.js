import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import loveColors from './LoveColors';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({data}) => {
    const labels = Object.keys(data);
    const values = Object.values(data);
    const total = values.reduce((a, b) => a + b, 0);
    const percentages = values.map(value => Math.round((value/total) * 10000)/100);

    const chartData = {
        labels: labels,
        datasets: [
            {
                data: percentages,
                backgroundColor: [
                    loveColors[Object.keys(data)[0]],
                    loveColors[Object.keys(data)[1]],
                    loveColors[Object.keys(data)[2]],
                    loveColors[Object.keys(data)[3]],
                    loveColors[Object.keys(data)[4]]
                  ],
                  borderColor: '#111',
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: false,
            },
            datalabels: {
                display: false, // Disable data labels
            },
        },
    };

    return <Doughnut data={chartData} options={options}/>;
};

export default DonutChart;