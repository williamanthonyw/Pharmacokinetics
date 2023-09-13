import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EquationForm from './EquationForm';
import GraphDisplay from './GraphDisplay';
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
};

export default FormulaPage;
