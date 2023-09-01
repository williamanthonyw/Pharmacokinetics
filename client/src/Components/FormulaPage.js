import React from 'react';
import EquationForm from './EquationForm';
import GraphDisplay from './GraphDisplay';
import HtmlRender from './HtmlRender';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
      <h1>{data.formula_name}</h1>

      <div className='mt-5'>
        <HtmlRender html={data.top_paragraph}></HtmlRender>
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
      <HtmlRender html={data.bottom_paragraph}></HtmlRender>
    </div>
  );
};

export default FormulaPage;
