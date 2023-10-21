import { render, screen } from '@testing-library/react';
import GraphDisplay from './GraphDisplay';

test('GraphDisplay renders without crashing', () => {
  render(<GraphDisplay variables={{}} equation="x^2" isMulipleOralDosing={false} is_testing={true} />);
  expect(screen.getByText("Plasma Concentration Over Time")).toBeInTheDocument();
});

test('Test multiple oral dosing renders without crashing', () => {
  render(<GraphDisplay variables={{}} equation="x^2" isMulipleOralDosing={true} is_testing={true} />);
  expect(screen.getByText("Plasma Concentration Over Time")).toBeInTheDocument();
});

// test('GraphDisplay renders chart with single equation', () => {
//   render(<GraphDisplay variables={{}} equation="x^2" isMulipleOralDosing={false} is_testing={true} />);
//   expect(screen.getByText("Plasma Concentration (mg/L)")).toBeInTheDocument();
// });

// test('GraphDisplay renders chart with multiple equations', () => {
//   const equations = [
//     { label: 'Equation 1', equation: 'x^2' },
//     { label: 'Equation 2', equation: 'x^3' },
//   ];
//   render(<GraphDisplay variables={{}} equation={equations} isMulipleOralDosing={false} is_testing={true} />);
//   expect(screen.getByText("Equation 1")).toBeInTheDocument();
//   expect(screen.getByText("Equation 2")).toBeInTheDocument();
// });