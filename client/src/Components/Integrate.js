function odeint(func, y0, t) {
    // func is a function that takes two arguments: y and t
    // y0 is the initial state of the system
    // t is an array of time points at which to solve for y

    // Initialize the output array with the initial state
    let y = [y0];

    // Loop over the time points and solve for y at each point
    for (let i = 1; i < t.length; i++) {
        let dt = t[i] - t[i-1];
        let k1 = func(y[i-1], t[i-1]);
        let k2 = func(y[i-1].map((yi, j) => yi + 0.5*dt*k1[j]), t[i-1] + 0.5*dt);
        let k3 = func(y[i-1].map((yi, j) => yi + 0.5*dt*k2[j]), t[i-1] + 0.5*dt);
        let k4 = func(y[i-1].map((yi, j) => yi + dt*k3[j]), t[i]);
        let yi = y[i-1].map((yi, j) => yi + (dt/6)*(k1[j] + 2*k2[j] + 2*k3[j] + k4[j]));
        y.push(yi);
    }

    return y;
}
