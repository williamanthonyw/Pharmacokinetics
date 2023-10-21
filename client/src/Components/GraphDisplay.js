import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { create, all, random } from 'mathjs';
import { Chart, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(LinearScale, PointElement, LineElement);

function GraphDisplay({ variables, equation, isMulipleOralDosing, is_testing, test_non_linear }) {
  const math = create(all)
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    //if location is /formula/non_linear_pharmacokinetics
    if (window.location.pathname == '/formula/non_linear_pharmacokinetics' || test_non_linear) {
      function odeint(func, y0, t, Vm, km) {
        // func is a function that takes two arguments: y and t
        // y0 is the initial state of the system
        // t is an array of time points at which to solve for y

        // Initialize the output array with the initial state
        let y = [y0];

        // Loop over the time points and solve for y at each point
        for (let i = 1; i < t.length; i++) {
          let dt = t[i] - t[i - 1];
          let k1 = func(y[i - 1], t[i - 1], Vm, km);
          let k2 = func(y[i - 1].map((yi, j) => yi + 0.5 * dt * k1[j]), t[i - 1] + 0.5 * dt, Vm, km);
          let k3 = func(y[i - 1].map((yi, j) => yi + 0.5 * dt * k2[j]), t[i - 1] + 0.5 * dt, Vm, km);
          let k4 = func(y[i - 1].map((yi, j) => yi + dt * k3[j]), t[i], Vm, km);
          let yi = y[i - 1].map((yi, j) => yi + (dt / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]));
          y.push(yi);
        }

        return y;
      }
      let C0 = [parseFloat(variables.C0)];
      let Vm = parseFloat(variables.Vm);
      let km = parseFloat(variables.Km);

      function decay_model(C, t, Vm, km) {
        let dCdt = -Vm * C[0] / (km + C[0]);
        return [dCdt];
      }

      let t = []
      for (let i = 0; i < 100; i++) {
        t.push(i * 0.1);
      }

      let C = odeint(decay_model, C0, t, Vm, km);
      
      //conver each index to an integer
      C = C.map((value) => {
        return parseFloat(value)
      })
      console.log(C)
      setChartData({
        labels: t,
        datasets: [{
          label: 'Plasma Concentration (mg/L)',
          data: C,
          fill: false,
          borderColor: '#e54726',
        }]
      })

      return;
    }
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
    let tValues = [];

    if (isMulipleOralDosing) {
      tValues = Array.from({ length: (variables.duration / 0.24) }, (_, i) => i * 0.24);
    }
    else {
      tValues = Array.from({ length: 100 }, (_, i) => i * 0.24);
    }

    let datasets = [];

    if (typeof equation === 'string') {
      console.log(equation)
      const yValues = tValues.map((time) => evaluateEquation(equation, time));

      datasets.push({
        label: 'Plasma Concentration (mg/L)',
        data: yValues,
        fill: false,
        borderColor: '#e54726',
      });

    }
    if (typeof equation === 'function') {
      const yValues = tValues.map((time) => evaluateEquation(equation(variables, time), time));
      datasets.push({
        label: 'Plasma Concentration (mg/L)',
        data: yValues,
        fill: false,
        borderColor: '#e54726',
      });

    }
    if (Array.isArray(equation)) {
      // Loop through each equation in the array

      equation.forEach((eq, index) => {
        console.log(eq)
        const yValues = tValues.map((time) => evaluateEquation(eq, time));
        let randomColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
        if (index == 0) {
          randomColor = `rgba(0,0,255)`
        }
        if (index == 1) {
          randomColor = `rgba(0,255,0)`;
        }
        if (index == 2) {
          randomColor = `rgba(255,0,0)`;
        }

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
    <div className='col-9'>

      <h2>Plasma Concentration Over Time</h2>
      {!is_testing && chartData && <Line data={chartData} options={chartOptions} />}
    </div>
  );
}

export default GraphDisplay;