

function odeint(func, y0, t, Vm, km) {
    // func is a function that takes two arguments: y and t
    // y0 is the initial state of the system
    // t is an array of time points at which to solve for y

    // Initialize the output array with the initial state
    let y = [y0];

    // Loop over the time points and solve for y at each point
    for (let i = 1; i < t.length; i++) {
        let dt = t[i] - t[i-1];
        let k1 = func(y[i-1], t[i-1], Vm, km);
        let k2 = func(y[i-1].map((yi, j) => yi + 0.5*dt*k1[j]), t[i-1] + 0.5*dt, Vm, km);
        let k3 = func(y[i-1].map((yi, j) => yi + 0.5*dt*k2[j]), t[i-1] + 0.5*dt, Vm, km);
        let k4 = func(y[i-1].map((yi, j) => yi + dt*k3[j]), t[i], Vm, km);
        let yi = y[i-1].map((yi, j) => yi + (dt/6)*(k1[j] + 2*k2[j] + 2*k3[j] + k4[j]));
        y.push(yi);
    }

    return y;
}
C0 = [50];
Vm = 230;
km = 80;

function decay_model(C, t, Vm, km) {
    let dCdt = -Vm * C[0] / (km + C[0]);
    return [dCdt]; // return an array instead of a single value
}

let t = [];
for (let i = 0; i < 100; i++) {
    t.push(i * 0.1);
}

let C = odeint(decay_model, C0, t, Vm, km);
console.log(C[50]);
