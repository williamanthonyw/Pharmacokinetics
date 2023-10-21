import React, { useEffect, useState, useRef } from 'react';

function EquationForm({testNoFormRef, data, setData, mode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    updateData()

    return () => {

    }
  }, [mode])
  const [error, setError] = useState("")
  const formRef = useRef(null);
  if (testNoFormRef) return null;
  function updateData() {
    if (!formRef.current) return;
    const inputs = formRef.current.querySelectorAll('input');
    let updatedVariables = { ...data.variables };

    for (let i = 0; i < inputs.length; i++) {
      const { name, value } = inputs[i];

      if (parseFloat(value) <= 0) {
        setError(`error: ${name} cannot be less than or equal to 0!`);
        break;
      } else if (isNaN(value)) {
        setError(`error: ${name} is not a number!`);
        break;
      } else {
        setError("")
        updatedVariables[name] = value;
      }
    }
    if (error !="")return
    setData((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        variables: updatedVariables,
      },
    }));
  }

  //handle changes for dynamic mode
  const handleChange = (e) => {
    if (mode == 'Performance') return
    const { name, value } = e.target;
    if (isNaN(e.target.value)) {
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
    else if (parseFloat(e.target.value) <= 0) {
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
    else {
      setError("")
    }
    if (value.includes('.')) {
      const [whole, fraction] = value.split('.');
      if (fraction.length > 4) {
          // Limit to 4 decimal places
          setData((prevData) => ({
            ...prevData,
            data: {
              ...prevData.data,
              variables: {
                ...prevData.data.variables,
                [name]: `${whole}.${fraction.slice(0, 4)}`,
              },
            },
          }));
          return;
      }
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

    <form className="col-3" ref={formRef} data-testid="equation-form">
      <h6 className='text-danger font-weight-bold mt-2 error_message'>{error}</h6>
      {Object.keys(data.variables).map((variableName) => (
        <div key={variableName} className="mb-3">
          <label htmlFor={variableName} className="form-label">
            {data.variableLabels[variableName]}
          </label>
          <input
            
            className="form-control"
            id={variableName}
            name={variableName}
            // value = {data.variables[variableName]}
            defaultValue={data.variables[variableName]}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
      ))}
      <div>
        {mode == "Performance" ? <div className='btn btn-primary d-inline-block animation' onClick={() => updateData()} >Calculate</div> : <></>}
      </div>
    </form>
  );
}

export default EquationForm;
