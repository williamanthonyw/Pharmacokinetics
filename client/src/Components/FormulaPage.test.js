import React from 'react';
import { render, screen } from '@testing-library/react';
import FormulaPage from './FormulaPage';
import { MemoryRouter } from 'react-router-dom';
import mydata from './data';
import { exp } from 'mathjs';


// test('renders the component', () => {
//   const mockLocation = {
//     pathname: '/formula/single_iv_dosing',
//   };
//   render(
//     <MemoryRouter>
//       <FormulaPage />
//     </MemoryRouter>,
//     { wrapper: MemoryRouter }
//   );
//   const formulaPageElement = screen.getByTestId('formula-page');
//   expect(formulaPageElement).toBeInTheDocument();
// });

// test('renders the correct formula name', () => {
//   const mockLocation = {
//     pathname: '/single_iv_dosing',
//   };
//   render(
//     <MemoryRouter initialEntries={[mockLocation]}>
//       <FormulaPage />
//     </MemoryRouter>,
//     { wrapper: MemoryRouter }
//   );
//   const formulaNameElement = screen.getByText('Single IV Dosing');
//   expect(formulaNameElement).toBeInTheDocument();
// });

test('renders the correct top paragraph', () => {
  const mockLocation = 'formula/single_iv_dosing';

  render(
      <MemoryRouter initialEntries={["", "formula/single_iv_dosing"]}>
      <FormulaPage is_testing={true}/>
      </MemoryRouter>
  );
  expect(screen.getByText("In the code below you can change the drug parameters dose, Cl, and Vd.")).toBeInTheDocument();
  
  
});
// test('renders the EquationForm component', () => {
//   const mockLocation = {
//     pathname: '/single_iv_dosing',
//   };
//   render(
//     <MemoryRouter initialEntries={[mockLocation]}>
//       <FormulaPage />
//     </MemoryRouter>,
//     { wrapper: MemoryRouter }
//   );
//   const equationFormElement = screen.getByTestId('equation-form');
//   expect(equationFormElement).toBeInTheDocument();
// });

// test('renders the GraphDisplay component', () => {
//   const mockLocation = {
//     pathname: '/single_iv_dosing',
//   };
//   render(
//     <MemoryRouter initialEntries={[mockLocation]}>
//       <FormulaPage />
//     </MemoryRouter>,
//     { wrapper: MemoryRouter }
//   );
//   const graphDisplayElement = screen.getByTestId('graph-display');
//   expect(graphDisplayElement).toBeInTheDocument();
// });

//   test('renders the GraphInformation component', () => {
//     const mockLocation = {
//       pathname: '/single_iv_dosing',
//     };
//     render(
//       <MemoryRouter initialEntries={[mockLocation]}>
//         <FormulaPage />
//       </MemoryRouter>,
//       { wrapper: MemoryRouter }
//     );
//     const graphInformationElement = screen.getByTestId('graph-information');
//     expect(graphInformationElement).toBeInTheDocument();
//   });
// });