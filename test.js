function linspace(start, end, n) {
    const diff = end - start;
    const step = diff / (n - 1);
    return Array(n).fill(0).map((_, idx) => start + idx * step);
}
const dose =  250
const tau =  24
const F =  0.75
const ka =  0.9
const k =  0.07
const Vd =  121.5
const time = linspace(0, 168, 1000);
const n_values = time.map(t => Math.floor(t / tau));
const m_values = n_values.map(n => n + 1);
time.slice(0, 60).forEach(t => {
    let ratio = t / tau;
    let floored = Math.floor(ratio);
    console.log(`t: ${t}, t/tau: ${ratio}, floor(t/tau): ${floored}`);
});
const fs = require('fs');


let csvContent = 'time,n_array,m_array\n';
for(let i = 0; i < time.length; i++) {
    csvContent += `${time[i]},${n_values[i]},${m_values[i]}\n`;
}
fs.writeFileSync('javascript_output.csv', csvContent);