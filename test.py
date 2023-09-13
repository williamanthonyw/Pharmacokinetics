import numpy as np
import matplotlib.pyplot as plt
import csv
# Parameters
dose = 250
tau = 24
F = 0.75
ka = 0.9
k = 0.07
kdif = -0.83
Vd = 121.5

# Time range
time = np.linspace(0, 168, num=1000)

# Calculate plasma concentration taking into account the dose number (m_array) which is time/tau as integer plus one (to correct for initial zero)
# and also changing time to dosetime which is time since last dose which uses n_array * tau so that is starts from zero on day 1.

n_array = np.int_(time / tau)
dosetime = time - (n_array * tau)
m_array = (n_array +1)
y = ((F * dose * ka) / (Vd * kdif)) * (
    (((1 - np.exp(-m_array * ka * tau)) / (1 - np.exp(-ka * tau))) * np.exp(-ka * dosetime)) -
    (((1 - np.exp(-m_array * k * tau)) / (1 - np.exp(-k * tau))) * np.exp(-k * dosetime))
)

# Plotting
plt.plot(time, y)
plt.xlabel('Time (hours)')
plt.ylabel('Plasma Concentration (mg/L)')
plt.title('Plasma Concentration for multiple oral doses')
plt.grid(True)
plt.show()
for t in time[0:50]:
    print(f"t: {t}, t/tau: {t/tau}, floor(t/tau): {np.floor(t/tau)}")
with open('python_output.csv', 'w', newline='') as csvfile:
    fieldnames = ['time', 'n_array', 'm_array']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    
    for i in range(len(time)):
        writer.writerow({'time': time[i], 'n_array': n_array[i], 'm_array': m_array[i]})