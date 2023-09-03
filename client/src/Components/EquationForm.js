import React, { useState } from 'react';

function EquationForm({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        variables: {
          ...prevData.data.variables,
          [name]: value,
        },
      },
    }));
  };
  return (
    <form className="col-md-4">
      {Object.keys(data.variables).map((variableName) => (
        <div key={variableName} className="mb-3">
          <label htmlFor={variableName} className="form-label">
            {data.variableLabels[variableName]}
          </label>
          <input
            type="number"
            className="form-control"
            id={variableName}
            name={variableName}
            value={data.variables[variableName]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
    </form>
  );
}

export default EquationForm;
