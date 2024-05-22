import React from 'react';
import DonutChart from './DonutChart';
import HorizontalBarChart from './HorizontalBarChart';

const Result = ({ result }) => {
  return (
    <div className='result-container'>
      <h2>Your Love Language Distribution</h2>

      <div className='chart-grid'>
        <div className='donut-chart'><DonutChart  data={result} /></div>
        <div className='bar-chart'><HorizontalBarChart  data={result} /></div>
      </div>

    </div>
  );
};

export default Result;
