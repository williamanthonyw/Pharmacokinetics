const mydata = [
  {
    'url': 'single_iv_dosing',
    'formula_name': 'Single IV Dosing',
    'id': 1,
    'top_paragraph': "<p>HTML ELEMENT</p>",
    'bottom_paragraph': "<p>HTML ELEMENT</p>",
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
    'top_paragraph': "<p>HTML ELEMENT</p>",
    'bottom_paragraph': "<p>HTML ELEMENT</p>",
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
    'top_paragraph': "<p>HTML ELEMENT</p>",
    'bottom_paragraph': "<p>HTML ELEMENT</p>",
    'x_label': "",
    'y_label': "",
    'data': {
      variables: {
        K0: 10,
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
      equation: [
        {
          expression: "K0/40 * (1-exp(-(40/Vd)*t))",
          label: 'Clearance (Cl) = 40 L/h',
        },
        {
          expression: "K0/60 * (1-exp(-(60/Vd)*t))",
          label: 'Clearance (Cl) = 60 L/h',
        },
        {
          expression: "K0/80 * (1-exp(-(80/Vd)*t))",
          label: 'Clearance (Cl) = 80 L/h',
        }
      ]

    },


  },
  {
    'url': 'non_linear_pharmacokinetics',
    'formula_name': 'Non-linear Pharmacokinetics - Initial Zero Order followed by First Order Elimination',
    'id': 4,
    'top_paragraph': "<p>HTML ELEMENT</p>",
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
      equation: (variables,t) => {
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
    'data': []
  },
]

export default mydata