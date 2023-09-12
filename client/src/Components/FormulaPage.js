import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EquationForm from './EquationForm';
import GraphDisplay from './GraphDisplay';
import HtmlRender from './HtmlRender';
import mydata from './data';
const FormulaPage = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const [allData, setAllData] = useState(mydata);
  const [data, setData] = useState({});

  useEffect(() => {
    for (let i = 0; i < allData.length; i++) {
      if (currentURL.includes(allData[i].url)) {
        setData(allData[i]);
      }
    }
  }, [location]);
  if (!currentURL.includes('multiple_oral_dosing'))
    return (
      <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>

        <h1>{data.formula_name}</h1>
        <p>Page by Dr Slade Matthews, The University of Sydney, 2023</p>
        <div className='mt-5'>
          {data.top_paragraph}
        </div>

        <div className='row'>
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
        {data.bottom_paragraph}
      </div>
    );
  else
    return (


    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1>{data.formula_name}</h1>
      <p>Page by Dr Slade Matthews, The University of Sydney, 2023</p>
      <div className='mt-5'>
        {data.top_paragraph}
      </div>

      <div className='row'>
        {data.data && Array.isArray(data.data) && data.data[0] ? (
          <>
            <EquationForm data={data.data[0]} setData={setData} />
            <GraphDisplay variables={data.data[0].variables} equation={data.data[0].equation} />
          </>
        ) : (
          // If data is null or undefined
          <p>Loading...</p>
        )}
      </div>
      <div className='mt-5'>

      </div>
      {data.bottom_paragraph}

      <div className='row'>
        {data.data && Array.isArray(data.data) && data.data[1] ? (
          <>
            <EquationForm data={data.data[1]} setData={setData} />
            <GraphDisplay variables={data.data[1].variables} equation={data.data[1].equation} />
          </>
        ) : (
          // If data is null or undefined
          <p>Loading...</p>
        )}
      </div>

    </div>)
};

export default FormulaPage;
