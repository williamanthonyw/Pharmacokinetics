import React from 'react'
import EquationForm from './EquationForm';
import GraphDisplay from './GraphDisplay';
import { useState } from 'react';
const FormulaPage = () => {
   // create use effect to change variables and variable labels from backend later
    const [variables, setVariables] = useState({
        dose: 100,
        Cl: 20,
        Vd: 200,
        equation: 'dose / Vd * exp(-Cl / Vd * t)',
      });
    
      
    
      return (
        <div className="App">
          <h1>Pharmacokinetics Calculator</h1>
          <EquationForm  variables = {variables} setVariables = {setVariables} />
          <GraphDisplay variables={variables} />
        </div>
      );
}

export default FormulaPage