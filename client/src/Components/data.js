import Latex from "./Latex";
const mydata = [
  {
    'url': 'single_iv_dosing',
    'formula_name': 'Single IV Dosing',
    'id': 1,
    'top_paragraph':
      <div className="">
        <p>The simplest model is of first order elimination following a single IV dose since we only have to consider the elimination process and we start with all the drug in the blood. There are many assumptions in all PK models and it is good to keep that in mind. You may ask "How is it possible that a given drug is guaranteed to behave in this way?" and you'd be right! There are many variables to consider. Gut metabolism, proportion of the molecule in salt form, hepatic extraction ratio. But for now, start with the single IV dose and you will begin to understand the most critical relationships between PK parameters used in drug design and clinical descision making.</p>
        <p>Follows the formula: <Latex latex_code="C = C_0 * e^{-kt}"></Latex></p>
        <p>In the code below you can change the drug parameters dose, Cl, and Vd.</p>
        <p>The initial drug plasma concentration for an IV dose is given by: <Latex latex_code="C_0 = \frac{dose}{V_d}"></Latex></p>
        <p>The formula for the constant "k" is given by: <Latex latex_code='k = \frac{Cl}{V_d}'></Latex></p>
        <h2 id=""><a href="https://colab.research.google.com/github/sladem-tox/PK_calcs/blob/main/PlasmaTime_SingleIV.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" /></a><a class="anchorjs-link " href="#" aria-label="Anchor" data-anchorjs-icon="" style={{ font: '1em / 1 anchorjs-icons', paddingLeft: '0.375em;' }}></a></h2>
      </div>,
    'bottom_paragraph': "",
    'x_label': "",
    'y_label': "",
    'data': {
      variables: {
        dose: 100,
        Cl: 20,
        Vd: 200,
      },
      variableLabels: {
        dose: 'Dose (mg):',
        Cl: 'Clearance (L/h):',
        Vd: 'Volume of Distribution (L):',
      },
      data_types: {
        dose: 'number',
        Cl: 'number',
        Vd: 'number',
      },
      equation: "dose / Vd * exp(-Cl / Vd * t)",
      latex_eq: "k = \\frac{Cl}{V_d}"
    },
  },
  {
    'url': 'oral_dosing_plasma_time_curve',
    'formula_name': 'Oral Dosing Plasma-time Curve',
    'id': 2,
    'top_paragraph':
      <div>
        <p>After a while thinking deeply about the single IV plasma-time curve you will be ready to think about the more general but more complicated single oral dose plasma-time curve. This introduces another variable which is the absorption rate constant but it is still a relatively simple situation since we are not looking at multiple doses or considering other factors affecting drug disposition.</p>
        <p>Follows the formula: <Latex latex_code='C = \frac{F \cdot Dose \cdot k_a}{V_d \cdot (k_a - k_e)} \cdot (e^{-k_e \cdot t} - e^{-k_a \cdot t})'></Latex>
        </p>
        <p>In the cell below we require values for dose, Cl, Vd, F, and ka.</p>
        <p>This simple model does not account for salting effects, metabolism, etc.</p>
        <h2 id="-1"><a href="https://colab.research.google.com/github/sladem-tox/PK_calcs/blob/main/SingleOralDose.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" /></a></h2>
      </div>,
    'bottom_paragraph': "",
    'x_label': "",
    'y_label': "",
    'data': {
      variables: {
        dose: 200,
        Cl: 20,
        Vd: 200,
        F: 0.8,
        ka: 0.54,
      },
      variableLabels: {
        dose: 'Dose (mg):',
        Cl: 'Clearance (L/h):',
        Vd: 'Volume of Distribution (L):',
        F: 'Bioavailability:',
        ka: 'Absorption Rate Constant:',
      },
      data_types: {
        dose: 'number',
        Cl: 'number',
        Vd: 'number',
        F: 'number',
        ka: 'constant',
      },
      equation: "((F * dose * ka) / (Vd * (ka - (Cl/Vd)))) * (exp(-(Cl/Vd) * t) - exp(-ka * t))",
      latex_eq: 'C = \\frac{F \\cdot Dose \\cdot k_a}{V_d \\cdot (k_a - k_e)} \\cdot (e^{-k_e \\cdot t} - e^{-k_a \\cdot t})'
    },
  },
  {
    'url': 'intravenous_infusion_and_effect_of_clearance',
    'formula_name': 'Intravenous Infusion and Effect of Clearance',
    'id': 3,
    'top_paragraph':
      <div>
        <p>In these IV infusion cruves you can see the effect of different values of clearance on the steady state concentration of a drug. So drugs that have different clearance values that are dosed at the same mg/hour dose rate will settle at different steady state concentrations.</p>
        <p>Concentration during infusion is given by: <Latex latex_code='C = \frac{K_0}{Cl} * (1-e^{-k_et})'></Latex></p>
        <p>Where K_0 = infusion rate</p>
        <p>And K_e is the elimination rate constant</p>
        <h2 id="-1"><a href="https://colab.research.google.com/github/sladem-tox/PK_calcs/blob/main/Infusion_curves.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" /></a></h2>
      </div>,
    'bottom_paragraph': "",
    'x_label': "",
    'y_label': "",
    'data': {
      variables: {
        K0: 10,
        Cl1: 40,
        Cl2: 60,
        Cl3: 80,
        Vd: 200,
      },
      variableLabels: {
        K0: 'Infusion rate (mg/h):',
        Cl1: 'Clearance 1 (blue) (L/h):',
        Cl2: 'Clearance 2 (green) (L/h):',
        Cl3: 'Clearance 3 (red) (L/h):',
        Vd: 'Volume of distribution (L):',
      },
      data_types: {
        K0: 'number',
        Cl1: 'number',
        Cl2: 'number',
        Cl3: 'number',
        Vd: 'number',
      },
      equation: ["K0/Cl1 * (1-exp(-(Cl1/Vd)*t))", "K0/Cl2 * (1-exp(-(Cl2/Vd)*t))", "K0/Cl3 * (1-exp(-(Cl3/Vd)*t))"],
      latex_eq: 'C = \\frac{K_0}{Cl} * (1-e^{-k_et})'

    },
  },
  {
    'url': 'multiple_oral_dosing',
    'formula_name': 'Multiple Oral Dosing',
    'id': 4,
    'top_paragraph':
      <>

        <p>The plasma concentration at any time following multiple dosing can be determined with the following formula * :</p>
        <p><Latex latex_code="C_p = \frac{F \cdot \text{Dose} \cdot k_a}{V_d(k-k_a)} \times \Big[ \Big( \frac{1-e^{-nk_a \tau}}{1-e^{-k_a \tau}} \Big) \cdot e^{-k_at} - \Big( \frac{1-e^{-nk \tau}}{1-e^{-k \tau}} \Big) \cdot e^{-kt} \Big]"></Latex></p>
        <p>Where n = number of doses, τ = dose interval, F = fraction absorbed, Vd is volume of distribution, t = time after administration of n doses, ka is the absorption rate constant, k is the elimination rate constant</p>
        <p>In the cell below we require values for dose, Cl, Vd, F, and ka. This simple model does not account for salting effects, metabolism, etc.</p>

        <h2 id="-1"><a href="https://colab.research.google.com/github/sladem-tox/PK_calcs/blob/main/MultipleOralDose.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" /></a></h2>

      </>,
    'bottom_paragraph': <>

    </>,
    'x_label': "",
    'y_label': "",
    'data':
    {
      variables: {
        dose: 250,
        tau: 24,
        F: 0.75,
        ka: 0.9,
        k: 0.07,
        Vd: 121.5,
        duration: 180,
      },
      variableLabels: {
        dose: 'dose (mg):',
        tau: 'dosing interval (hour):',
        F: 'Bioavailability:',
        ka: 'Absorption rate constant:',
        k: 'Elimination rate contant (hour^1):',
        Vd: 'Volume Distribution (L):',
        duration: "Duration (hours):"
      },
      data_types: {
        dose: 'number',
        tau: 'number',
        F: 'number',
        ka: 'constant',
        k: 'constant',
        Vd: 'number',
        duration: 'number',
      },
      equation: `(F * dose * ka) / (Vd * -0.83) * (
            ((1 - exp(-1 * (floor(t/tau) + 1) * ka * tau)) / (1 - exp(-ka * tau)) * exp(-ka * (t - floor(t/tau) * tau))) -
            ((1 - exp(-1 * (floor(t/tau) + 1) * k * tau)) / (1 - exp(-k * tau)) * exp(-k * (t - floor(t/tau) * tau)))
        )`,
      latex_eq: "C_p = \\frac{F \\cdot \\text{Dose} \\cdot k_a}{V_d(k-k_a)} \\times \\Big[ \\Big( \\frac{1-e^{-nk_a \\tau}}{1-e^{-k_a \\tau}} \\Big) \\cdot e^{-k_at} - \\Big( \\frac{1-e^{-nk \\tau}}{1-e^{-k \\tau}} \\Big) \\cdot e^{-kt} \\Big]"
    }

  },
  {
    'url': 'non_linear_pharmacokinetics',
    'formula_name': 'Non-linear Pharmacokinetics - Zero Order Elimination plasma-time curve',
    'id': 5,
    'top_paragraph':
      <div>
        <p>Elimination can be described using an ordinary differential equation (ODE): <Latex latex_code='dC/dt = \frac{Vm \cdot Cp}{Km + Cp}'></Latex></p>
        <p>This behaviour is called Michaelis-Menten kinetics which was originally used to describe enzyme kinetics. The rate of enzymatic degradation of a substrate by an enzyme has some maximum, Vmax which along with Km (concentration at which rate = 1/2 Vmax) can be used to describe the dynamics of the enzyme reaction. Since enzymes and transporters important to drug disposition can be saturated the same formula can be useful in pharmacokinetics.</p>
        <p>This situation could arise with drugs such as alcohol where at most 10 grams can be eliminated from the body per hour (at Vmax). Another estimate (See Holford, 1987) describes the Vmax as 8.5 g/h/70kg which equates to a plasma elimination rate of 230 mg/L/h. The Km for alcohol is around 0.01 % (g/100mL) so we are halfway to Vmax at this concentration. For calculation purposes we will use the value 80 mg/L (just below the 100 mg/L estimated in Burkett) as the Km as described in Holford 1987.</p>
        <p>Some other drugs such as phenytoin also display saturated elimination kinetics (see Chapter 9: Non-linear Pharmacokinetics in Pharmacokinetics Made Easy by Donald Burkett).</p>
        <p>*Holford, N., Clinical Pharmacokinetics of Ethanol. Clinical Pharmacokinetics, 1987. 13: p. 273-292.</p>
        <p>In the cell below we require values for C0, Vm, and Km.</p>

        <h2 id="-1"><a href="https://colab.research.google.com/github/sladem-tox/PK_calcs/blob/main/ZeroOrderElimination.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" /></a></h2>
      </div>,
    'bottom_paragraph': "<p>HTML ELEMENT</p>",
    'x_label': "",
    'y_label': "",
    'data': {
      variables: {
        C0: 500,
        Vm: 230,
        Km: 80,
      },
      variableLabels: {
        C0: 'Initial concentration (mg/L):',
        Vm: 'Maximum rate of decay (mg/L/h):',
        Km: 'C value at which decay is half Vm (mg/L):',
      },
      data_types: {
        C0: 'number',
        Vm: 'constant',
        Km: 'constant',
      },
      equation: "",
      latex_eq: 'dC/dt = \\frac{Vm \\cdot Cp}{K_{m} + Cp}'
    }
  }


]

export default mydata