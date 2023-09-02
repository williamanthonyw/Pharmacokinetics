import { render, screen } from '@testing-library/react';
import App from './App';
import About from './Components/About';
import Contact from './Components/Contact';
import EquationForm from './Components/EquationForm';
import FormulaPage from './Components/FormulaPage';
import GraphDisplay from './Components/GraphDisplay';
import HtmlRender from './Components/HtmlRender';
import MyNavbar from './Components/MyNavbar';
import { MemoryRouter } from 'react-router-dom';


test('App renders without crashing', () => {
  render(
    <MemoryRouter initialEntries={["","/pharmakinetics"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Pharmacokinetic Calculations")).toBeInTheDocument();
});

test('About page', () => {
 
});

test('Contact page', () => {
 
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
 
});