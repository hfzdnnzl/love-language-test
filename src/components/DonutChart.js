import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({data}) => {
    const labels = Object.keys(data);
    const values = Object.values(data);
    const total = values.reduce((a, b) => a + b, 0);
    const percentages = values.map(value => (value/total) * 100);

    const chartData = {
        labels: labels,
        datasets: [
            {
                data: percentages,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                  ],
                  borderColor: '#111',
            }
        ]
    };

    return <Doughnut data={chartData} />;
};

export default DonutChart;