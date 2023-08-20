import React, { useState } from 'react';

function EquationForm({variables, setVariables }) {

  
  const variableLabels = {
    dose: 'Dose (mg):',
    Cl: 'Clearance (L/h):',
    Vd: 'Volume of Distribution (L):',
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setVariables({
      ...variables,
      [name]: value,
    });
   
  };

  return (
    <form>
      {Object.keys(variables).map((variableName) => (
        variableName != 'equation' ?
        (<div key={variableName}>
          <label>{variableLabels[variableName]}</label>
          <input
            type='number'
            name={variableName}
            value={variables[variableName]}
            onChange={handleChange}
            required
          />
        </div>) : <></>
      )) }
    </form>
  );
}

export default EquationForm;
