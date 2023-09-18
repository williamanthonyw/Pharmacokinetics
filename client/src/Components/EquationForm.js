import React, { useState } from 'react';

function EquationForm({ data, setData }) {
  const [error, setError] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!/^-?\d*\.?\d*$/.test(e.target.value) || parseFloat(e.target.value) < 0) {
      setError(`error: invalid input on ${name}`);
      setData((prevData) => ({
        ...prevData,
        data: {
          ...prevData.data,
          variables: {
            ...prevData.data.variables,
            [name]: "",
          },
        },
      }));
      return
    }
    else{
      setError("")
    }
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
      {error}
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
            min = "0"
            required
          />
        </div>
      ))}
    </form>
  );
}

export default EquationForm;
