import React from 'react';
import EquationForm from './EquationForm';
import GraphDisplay from './GraphDisplay';
import HtmlRender from './HtmlRender';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FormulaPage = () => {
  const location = useLocation();
  const currentURL = location.pathname;

  const [allData, setAllData] = useState([
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
      'url': 'non_linear_parhamkinetics',
      'formula_name': 'Non-linear Pharmacokinetics - Initial Zero Order followed by First Order Elimination',
      'id': 4,
    },
    {
      'url': 'multiple_oral_dosing',
      'formula_name': 'Multiple Oral Dosing',
      'id': 5,

    },
  ]);


  const [data, setData] = useState({});

  useEffect(() => {
    for (let i = 0; i < allData.length; i++) {
      if (currentURL.includes(allData[i].url)) {
        setData(allData[i]);
      }
    }
  }, [location]);

  return (
    <div className="container">
      <h1>{data.formula_name}</h1>

      <HtmlRender html={data.top_paragraph}></HtmlRender>

      <div className='row mt-5 mb-5'>
        {data.data ? (
          <>
            <EquationForm data={data.data} setData={setData} />
            <GraphDisplay variables={data.data.variables} equation={data.data.equation} />
          </>
        ) : (
          // If data is null or undefined
          <p>Loading...</p>
        )}
      </div>
      <HtmlRender html={data.bottom_paragraph}></HtmlRender>
    </div>
  );
};

export default FormulaPage;
