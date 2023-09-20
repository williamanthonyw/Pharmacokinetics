import React, { useEffect, useState } from 'react';

function EquationForm({ data, setData, mode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [error, setError] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (parseFloat(e.target.value) <= 0) {
      setError(`error: ${name} cannot be less than or equal to 0!`);
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
    else if (isNaN(e.target.value)) {
      setError(`error: ${name} is not a number!`);
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
    else {
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

    <form className="col-3">
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
            min="0"
            required
          />
        </div>
      ))}
      <div>
        {mode == "Performance" ? <div className='btn btn-primary d-inline-block' >Calculate</div> : <></>}
      </div>
    </form>
  );
}

export default EquationForm;
