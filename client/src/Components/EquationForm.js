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
    <form className="col-md-4">
  {Object.keys(variables).map((variableName) => (
    <div key={variableName} className="mb-3">
      <label htmlFor={variableName} className="form-label">
        {variableLabels[variableName]}
      </label>
      <input
        type="number"
        className="form-control"
        id={variableName}
        name={variableName}
        value={variables[variableName]}
        onChange={handleChange}
        required
      />
    </div>
  ))}
</form>
  );
}

export default EquationForm;
