import React from 'react';
import DonutChart from './DonutChart';
import HorizontalBarChart from './HorizontalBarChart';

const Result = ({ result }) => {
  return (
    <div className='result-container'>
      <h2>Your Love Language is <br/>
      <span style={{ color: '#FF6384' }}>{Object.keys(result)[0]}
      </span></h2>

      <div className='chart-grid'>
        <div className='donut-chart'><DonutChart  data={result} /></div>
        <div className='bar-chart'><HorizontalBarChart  data={result} /></div>
      </div>

    </div>
  );
};

export default Result;
