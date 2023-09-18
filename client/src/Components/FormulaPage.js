import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EquationForm from './EquationForm';
import GraphDisplay from './GraphDisplay';
import mydata from './data';
import './Formula.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/USYD_LOGO_WHITE.png';
import background from '../assets/images/Untitled-1\ copy.jpg';

const FormulaPage = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const [allData, setAllData] = useState(mydata);
  const [data, setData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    for (let i = 0; i < allData.length; i++) {
      if (currentURL.includes(allData[i].url)) {
        setData(allData[i]);
      }
    }
  }, [location]);
  console.log("URL value:", data.url);
  return (
    <div className="">
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      <header className="headerFormula">
        <section className="intro">
          <h1 className= "FormulaH1">{data.formula_name}</h1>
          <p className='FormulaP'>Page by Dr Slade Matthews, The University of Sydney, 2023</p>
          <div className=''>
            {data.top_paragraph}
        </div>
        </section>
      </header>

      <div className='row'>
        {data.data ? (
          <>
            <EquationForm data={data.data} setData={setData} />
            <GraphDisplay variables={data.data.variables} equation={data.data.equation} isMulipleOralDosing={data.data && data.url && data.url.includes("multiple")} />
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
