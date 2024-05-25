// HorizontalBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import loveColors from './LoveColors';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const HorizontalBarChart = ({data}) => {
    const values = Object.values(data);
    const total = values.reduce((a, b) => a + b, 0);
    const percentages = values.map(value => Math.round((value/total) * 10000)/100);

    const chartData = {
        labels: Object.keys(data),
        datasets: [
          {
            label: '',
            data: percentages,
            backgroundColor: [
              loveColors[Object.keys(data)[0]],
              loveColors[Object.keys(data)[1]],
              loveColors[Object.keys(data)[2]],
              loveColors[Object.keys(data)[3]],
              loveColors[Object.keys(data)[4]]
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
            datalabels: {
              display: true,
              anchor: 'end',
              align: 'end',
              formatter: (value) => {
                  return `${Math.round(value)}%`; // Display the percentage with no decimal points
              },
              color: '#111', // Color of the labels
              font: {
                  weight: 'bold',
              },
          },
        },
        
        layout: {
          padding: {
              right: 30, // Add padding to the right to ensure labels fit within the chart area
          },
      },
    };

    return <Bar data={chartData} options={options} />;
};

export default HorizontalBarChart;
