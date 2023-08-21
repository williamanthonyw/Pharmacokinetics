import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import * as math from 'mathjs';
import { Chart, LinearScale, PointElement, LineElement } from 'chart.js';

// Register the 'linear' scale, 'PointElement', and 'LineElement'
Chart.register(LinearScale, PointElement, LineElement);

function GraphDisplay({ variables, equation }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const evaluateEquation = (t) => {
      try {
        const scope = {
          ...variables, 
          t: parseFloat(t),
        };
        const compiledExpression = math.compile(equation);
        return compiledExpression.evaluate(scope);
      } catch (error) {
        console.error('Error evaluating equation:', error);
        return NaN;
      }
    };

    const tValues = Array.from({ length: 100 }, (_, i) => i * 0.24);
    const yValues = tValues.map((time) => evaluateEquation(time));

    setChartData({
      labels: tValues,
      datasets: [
        {
          label: 'Plasma Concentration (mg/L)',
          data: yValues,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    });
  }, [variables]);

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: true,
          text: 'Time (h)', // X-axis label
        },
      },
      
      y: {
        type: 'linear',
        position: 'left',
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: true,
          text: 'Plasma Concentration (mg/L)',
        },
      },
    },
  };

  return (
    <div className='col-8'>
      <h2>Plasma Concentration Over Time</h2>
      {chartData && <Line data={chartData} options={chartOptions} />}
    </div>
  );
}

export default GraphDisplay;
