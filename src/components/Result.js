import React from 'react';
import DonutChart from './DonutChart';
import HorizontalBarChart from './HorizontalBarChart';
import loveColors from './LoveColors';
import './chart.css';

const Result = ({ result, resetQuiz }) => {
  return (
    <div className='result-container'>
      <h2>Your Love Language is <br/>
      <span style={{ color: loveColors[Object.keys(result)[0]] }}>{Object.keys(result)[0]}
      </span></h2>

      <div className='chart-grid'>
        <div className='donut-chart'><DonutChart  data={result} /></div>
        <div className='bar-chart'><HorizontalBarChart  data={result} /></div>
      </div>

      <button className='button-small' onClick={() => resetQuiz()}>refresh</button>

    </div>
  );
};

export default Result;
