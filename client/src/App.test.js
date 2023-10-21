import { render, screen, queryByAttribute } from '@testing-library/react';
import App from './App';
import About from './Components/About';
import Contact from './Components/Contact';
import EquationForm from './Components/EquationForm';
import FormulaPage from './Components/FormulaPage';
import GraphDisplay from './Components/GraphDisplay';
import MyNavbar from './Components/MyNavbar';
import mydata from './Components/data';
import Homepage from './Components/Homepage';
import Constants from './Components/Constants';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';


test('App renders without crashing', () => {
  render(
    <MemoryRouter initialEntries={["","/pharmacokinetics"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Pharmacokinetics Calculations")).toBeInTheDocument();
});

test('About page', () => {
  const page = render(
    <MemoryRouter initialEntries={["","/about"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTitle('about-paragraph')).toBeInTheDocument();

});

test('Contact page', () => {
  const page = render(
    <MemoryRouter initialEntries={["","/contact"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTitle('slade-photo')).toBeInTheDocument();
});

test('Data', () => {


  const data = mydata;

  expect(data.length).toEqual(5);

  for (let i=0; i<data.length; i++){
    const len = Object.keys(data[i]).length;

    expect(len).toEqual(8);
  };
  
});

test('Equation Form page', () => {

});

test('Formula page', () => {

});

test('Graph Display', () => {

});

test('HTML REnder page', () => {

});

test('MyNavbar', () => {
  const page = render(
    <MemoryRouter initialEntries={["","/about"]}>
      <App />
    </MemoryRouter>
  );


  const getById = queryByAttribute.bind(null, 'id');
  const navbar_1 = getById(page.container, 'navLinks2');

  expect(navbar_1).toBeInTheDocument();
});