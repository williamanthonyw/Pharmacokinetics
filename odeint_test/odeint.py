import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

# Define the Michaelis-Menten equation based here on a saturable elimination pathway.
def decay_model(C, t, Vm, km):
    dCdt = -Vm * C / (km + C)
    return dCdt

# Initial conditions for IV dosing. Conc at t=0, Vmax and Km
C0 = 50  # Initial concentration (mg/L)
Vm = 230  # Maximum rate of decay (mg/L/h)
km = 80  # C value at which decay is half Vm (mg/L)

# Generate a series of timepoints with linspace.
t = np.linspace(0, 10, 100)  # Adjust the time range as needed

# Solve the ordinary differential equation (ODE) using scipy.
# The ODE does not have a simple solution and must be integrated to find y values at time t.
C = odeint(decay_model, C0, t, args=(Vm, km))
print(C[50])