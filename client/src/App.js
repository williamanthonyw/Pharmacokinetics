import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormulaPage from './Components/FormulaPage';
import Homepage from './Components/Homepage';
import MyNavbar from './Components/MyNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (<>
    <BrowserRouter>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path='/pharmakinetics' element={<Homepage></Homepage>}></Route>
        <Route path='/formula/:formulaName' element={<FormulaPage></FormulaPage>}></Route>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
