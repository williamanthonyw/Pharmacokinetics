import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormulaPage from './Components/FormulaPage';
import Homepage from './Components/Homepage';
import MyNavbar from './Components/MyNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
function App() {
  return (<>
    <BrowserRouter>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path='/pharmakinetics' element={<Homepage></Homepage>}></Route>
        <Route path='/formula/:formulaName' element={<FormulaPage></FormulaPage>}></Route>
        <Route path= '/about' element = {<About></About>}></Route>
        <Route path= '/contact' element = {<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
