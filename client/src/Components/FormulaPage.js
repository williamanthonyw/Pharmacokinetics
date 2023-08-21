import React from 'react'
import EquationForm from './EquationForm';
import GraphDisplay from './GraphDisplay';
import HtmlRender from './HtmlRender'
import { useState } from 'react';
const FormulaPage = () => {
  //data expected from backend : index 0 - variables index 1 - equation index 2 - (xlabel, ylabel) index3 - TopParagraph (html string) Index 4 - bottomParagraph
  const [variables, setVariables] = useState({
    dose: 100,
    Cl: 20,
    Vd: 200,
  });
  const [equation, setEquation] = useState("dose / Vd * exp(-Cl / Vd * t)")
  const [title, setTitle] = useState("")

  const [topParagraph, settopParagraph] = useState("<p>This is a HTML element (from the client).</p>")


  return (
    <div className="container">
      <h1>Forula name</h1>

      <HtmlRender html={topParagraph}></HtmlRender>

      <div className='row mt-5 mb-5'>
        <EquationForm variables={variables} setVariables={setVariables} />
        <GraphDisplay variables={variables} equation={equation} />
      </div>
      <HtmlRender html={topParagraph}></HtmlRender>

    </div>
  );
}

export default FormulaPage