import { render, screen } from '@testing-library/react';
import Constants from './Constants';

test('renders Constants component', () => {
  render(<Constants />);
  const constantsElement = screen.getByText(/Constants: Important Equations in Pharmacology/i);
  expect(constantsElement).toBeInTheDocument();
});

test('renders Volume of distribution equation', () => {
  render(<Constants />);
  const equationElement = screen.getByText(/Volume of distribution \(Vd\):/i);
  expect(equationElement).toBeInTheDocument();
});

test('renders Clearance equation', () => {
  render(<Constants />);
  const equationElement = screen.getByText(/Clearance \(Cl\):/i);
  expect(equationElement).toBeInTheDocument();
});

test('renders Half life equation', () => {
  render(<Constants />);
  const equationElement = screen.getByText(/The half life/i);
  expect(equationElement).toBeInTheDocument();
});

test('renders Fractional oral availability equation', () => {
  render(<Constants />);
  const equationElement = screen.getByText(/Fractional oral availability \(F\):/i);
  expect(equationElement).toBeInTheDocument();
});

test('renders Creatinine clearance equation', () => {
  render(<Constants />);
  const equationElement = screen.getByText(/Creatinine clearance \(CrCl\):/i);
  expect(equationElement).toBeInTheDocument();
});

test('renders Dose adjustment in renal failure equation', () => {
  render(<Constants />);
  const equationElement = screen.getByText(/Dose adjustment in renal failure:/i);
  expect(equationElement).toBeInTheDocument();
});

test('renders Dose adjustment in renal failure when fu < I equation', () => {
  render(<Constants />);
  const equationElement = screen.getByText(/Dose adjustment in renal failure when fu < I:/i);
  expect(equationElement).toBeInTheDocument();
});

test('renders Pharmacokinetic Triangle image', () => {
  render(<Constants />);
  const imageElement = screen.getByAltText(/Pharmacokinetic Triangle/i);
  expect(imageElement).toBeInTheDocument();
});