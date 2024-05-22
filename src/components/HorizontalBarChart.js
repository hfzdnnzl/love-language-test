// HorizontalBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = ({data}) => {
    const values = Object.values(data);
    const total = values.reduce((a, b) => a + b, 0);
    const percentages = values.map(value => (value/total) * 100);

    const chartData = {
        labels: Object.keys(data),
        datasets: [
          {
            label: '',
            data: percentages,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF'
              ],
            borderColor: '#111',
            borderWidth: 2,
          },
        ],
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                  display: false, // Hide x-axis labels
                },
                grid: {
                  display: false, // Optionally, you can also hide the grid lines
                },
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide legend
            },
            title: {
                display: false,
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default HorizontalBarChart;
