import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import * as math from 'mathjs';
import { Chart, LinearScale, PointElement, LineElement } from 'chart.js';

// Register the 'linear' scale, 'PointElement', and 'LineElement'
Chart.register(LinearScale, PointElement, LineElement);

function GraphDisplay({ variables, equation }) {
  useEffect(() => {
    if (typeof equation === 'function') {
      console.log(equation)
      equation = equation(variables)
      console.log(equation)
    }

    return () => {

    }
  }, [variables])


  const [chartData, setChartData] = useState(null);


  useEffect(() => {
    const evaluateEquation = (eq, t) => {
      try {
        const scope = {
          ...variables,
          t: parseFloat(t),
        };
        const compiledExpression = math.compile(eq);
        return compiledExpression.evaluate(scope);
      } catch (error) {
        console.error('Error evaluating equation:', error);
        return NaN;
      }
    };

    const tValues = Array.from({ length: 100 }, (_, i) => i * 0.24);

    let datasets = [];

    if (typeof equation === 'string') {
      console.log(equation)
      const yValues = tValues.map((time) => evaluateEquation(equation, time));

      datasets.push({
        label: 'Plasma Concentration (mg/L)',
        data: yValues,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      });

    } else if (Array.isArray(equation)) {
      // Loop through each equation in the array
      console.log("hello")
      equation.forEach((eq) => {
        console.log(eq)
        const yValues = tValues.map((time) => evaluateEquation(eq.expression, time));

        //Color the variables with its coresponding color
        const randomColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;

        datasets.push({
          label: eq.label,
          data: yValues,
          fill: false,
          borderColor: randomColor,
        });
      });
    }

    setChartData({
      labels: tValues,
      datasets: datasets,
    });
  }, [variables, equation]);


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