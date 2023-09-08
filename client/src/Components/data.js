import Latex from "./Latex";
const mydata = [
  {
    'url': 'single_iv_dosing',
    'formula_name': 'Single IV Dosing',
    'id': 1,
    'top_paragraph':
      <div className="">
        <p>The simplest model is of first order elimination following a single IV dose since we only have to consider the elimination process and we start with all the drug in the blood. There are many assumptions in all PK models and it is good to keep that in mind. You may ask "How is it possible that a given drug is guaranteed to behave in this way?" and you'd be right! There are many variables to consider. Gut metabolism, proportion of the molecule in salt form, hepatic extraction ratio. But for now, start with the single IV dose and you will begin to understand the most critical relationships between PK parameters used in drug design and clinical descision making.</p>
        <p>Follows the formula: <Latex latex_code='\begin{equation} C = C_0 * e^{-kt} \end{equation}'></Latex></p>
        <p>In the code below you can change the drug parameters dose, Cl, and Vd.</p>
        <p>The initial drug plasma concentration for an IV dose is given by: <Latex latex_code="\begin{equation} C_0 = \frac{dose}{Vd} \end{equation}"></Latex></p>
        <p>The formula for the constant "k" is given by: <Latex latex_code='\begin{equation} k = \frac{Cl}{Vd} \end{equation}'></Latex></p>
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
    },
  },
  {
    'url': 'oral_dosing_plasma_time_curve',
    'formula_name': 'Oral Dosing Plasma-time Curve',
    'id': 2,
    'top_paragraph':
      <div>
        <p>After a while thinking deeply about the single IV plasma-time curve you will be ready to think about the more general but more complicated single oral dose plasma-time curve. This introduces another variable which is the absorption rate constant but it is still a relatively simple situation since we are not looking at multiple doses or considering other factors affecting drug disposition.</p>
        <p>Follows the formula: <Latex lates_code='\begin{equation} C = \frac{F.Dose.k_a}{Vd(k_a-k_e)} *(e^{-k_et} - e^{-k_at}) \end{equation}'></Latex></p>
        <p>In the cell below we require values for dose, Cl, Vd, F, and ka.</p>
        <p>This simple model does not account for salting effects, metabolism, etc.</p>
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
        ka: 0.009 * 60,
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
    },
  },
  {
    'url': 'intravenous_infusion_and_effect_of_clearance',
    'formula_name': 'Intravenous Infusion and Effect of Clearance',
    'id': 3,
    'top_paragraph':
      <div>
        <p>In these IV infusion cruves you can see the effect of different values of clearance on the steady state concentration of a drug. So drugs that have different clearance values that are dosed at the same mg/hour dose rate will settle at different steady state concentrations.</p>
        <p>Concentration during infusion is given by: <Latex latex_code='\begin{equation} C = \frac{K_0}{Cl} * (1-e^{-k_et})\end{equation}'></Latex></p>
        <p>Where K_0 = infusion rate</p>
        <p>And K_e is the elimination rate constant</p>
      </div>,
    'bottom_paragraph': "",
    'x_label': "",
    'y_label': "",
    'data': {
      variables: {
        K0: 10,
        Cl: 40,
        Vd: 200,
      },
      variableLabels: {
        K0: 'Infusion rate (mg/h)',
        Cl: 'Clearance (L/h)',
        Vd: 'Volume of distribution (L)',
      },
      data_types: {
        K0: 'number',
        Cl: 'number',
        Vd: 'number',
      },
      equation: "K0/Cl * (1-exp(-(Cl/Vd)*t))",


    },
  },
  {
    'url': 'non_linear_pharmacokinetics',
    'formula_name': 'Non-linear Pharmacokinetics - Initial Zero Order followed by First Order Elimination',
    'id': 4,
    'top_paragraph':
      <div>
        <p>This last curve shows what happens when the elimination pathway is saturated initially and then, when to plasma concentration sinks low enough, the elimination returns to first order and starts to slow down. Notice that the curve is linear and then exponential at the end. So the elimination rate is constant at the begining, irrespective of plasma concentration. Then, in the last part of the curve, the elimination rate is proportional to plasma concentration. For simplicity we start with the drug at some concentration at time=0 but if we were considering an oral dose the situation would be far more complicated!</p>
        <p>The graph produced by the code below shows a simple linear elimination rate giving a straight line as the amount of drug in plasma is reduced at a contant rate. Once the concentration of drug in the plasma falls below a threshold value (i.e. the elimination pathways are no longer saturated) the elimination rate starts to slow down and the rate is then proportional to plasma concentration of the drug from then on.</p>
        <p>This situation could arise with drugs such as alcohol where at most 10 grams can be eliminated per hour (Vmax). The Km for alcohol is around 0.01 % (g/100mL) so we are halfway to Vmax at this concentration. Some other drugs such as phenytoin also display saturated elimination kinetics (see Chapter 9: Non-linear Pharmacokinetics in Pharmacokinetics Made Easy by Donald Burkett).</p>
        <p>The elimination curve follows a combination of a linear curve and then an exponential functions.</p>
        <p>The linear portion of the cruve follows the familar <Latex latex_code='\begin{equation} Y = mx + b \end{equation}'></Latex></p>
        <p>The exponential elimination follows the formula: <Latex latex_code='\begin{equation} C = C_0 * e^{-kt} \end{equation}'></Latex></p>
      </div>,
    'bottom_paragraph': "<p>HTML ELEMENT</p>",
    'x_label': "",
    'y_label': "",
    'data': {
      variables: {
        C0: 10.0,
        k1: 1.0,
        k2: 0.5,
        C_thresh: 2.0,
      },
      variableLabels: {
        C0: 'initial concentration',
        k1: 'linear decay constant',
        k2: 'exponential decay constant',
        C_thresh: 'concentration threshold'
      },
      data_types: {
        C0: 'number',
        k1: 'constant',
        k2: 'constant',
        C_thresh: 'number'
      },
      equation: (variables, t) => {
        let C0 = variables.C0;
        let k1 = variables.k1;
        let k2 = variables.k2;
        let C_thresh = variables.C_thresh;
        if (C0 - k1 * t > C_thresh) return "C0 - k1*t";
        else return "C_thresh *  exp(-k2*(t - ((C0 - C_thresh) / k1)))";
      }
    },
  },

  {
    'url': 'multiple_oral_dosing',
    'formula_name': 'Multiple Oral Dosing',
    'id': 5,
    'top_paragraph': "<p>HTML ELEMENT</p>",
    'bottom_paragraph': "<p>HTML ELEMENT</p>",
    'x_label': "",
    'y_label': "",
    'data':
      [
        {
          variables: {
            dose: 250,
            tau: 8,
            n: 7,
            F: 0.75,
            ka: 0.9,
            k: 0.07,
            Vd: 121.5,
          },
          variableLabels: {
            dose: 'dose',
            tau: 'dosing interval',
            n: 'number of doses',
            F: 'fraction absorbed',
            ka: 'absorption rate constant',
            k: 'elimination rate constant',
            Vd: 'volume of distribution'
          },
          data_types: {
            dose: 'number',
            tau: 'number',
            n: 'number',
            F: 'number',
            ka: 'constant',
            k: 'constant',
            Vd: 'number'
          },
          equation: (variables, t) => {
            let dose = variables.dose;
            let tau = variables.tau;
            let n = variables.n;
            let F = variables.F;
            let ka = variables.ka;
            let k = variables.k;
            let Vd = variables.Vd;
            return "((F*dose*ka)/(Vd*kdif)) * ( (((1-exp(-n*ka*tau))/(1-exp(-ka*tau)))*exp(-ka*time))-(((1-exp(-n*k*tau))/(1-exp(-k*tau)))*exp(-k*time)) )"
          },
          'id': 1,
        },
        {
          variables: {
            dose: 250,
            tau: 8,
            F: 0.75,
            ka: 0.9,
            k: 0.07,
            Vd: 121.5,
          },
          variableLabels: {
            dose: 'dose',
            tau: 'dosing interval',
            F: 'fraction absorbed',
            ka: 'absorption rate constant',
            k: 'elimination rate constant',
            Vd: 'volume of distribution'
          },
          data_types: {
            dose: 'number',
            tau: 'number',
            F: 'number',
            ka: 'constant',
            k: 'constant',
            Vd: 'number'
          },
          equation: (variables, t) => {
            let dose = variables.dose;
            let tau = variables.tau;
            let F = variables.F;
            let ka = variables.ka;
            let k = variables.k;
            let Vd = variables.Vd;
            return "((F*dose*ka)/(Vd*kdif)) * ( (((1-exp(-n*ka*tau))/(1-exp(-ka*tau)))*exp(-ka*time))-(((1-exp(-n*k*tau))/(1-exp(-k*tau)))*exp(-k*time)) )"
          }

        }

      ]

  },


]

export default mydata