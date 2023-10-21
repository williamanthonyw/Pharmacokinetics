import { render, screen } from '@testing-library/react';
import GraphDisplay from './GraphDisplay';
import mydata from './data';
import { MemoryRouter } from 'react-router-dom';
test('GraphDisplay renders without crashing', () => {
  render(<GraphDisplay variables={{}} equation="x^2" isMulipleOralDosing={false} is_testing={true} />);
  expect(screen.getByText("Plasma Concentration Over Time")).toBeInTheDocument();
});

test('Test multiple oral dosing renders without crashing', () => {
  render(<GraphDisplay variables={{}} equation="x^2" isMulipleOralDosing={true} is_testing={true} />);
  expect(screen.getByText("Plasma Concentration Over Time")).toBeInTheDocument();
});
test('test variable renders without crashing', () => {
  let variables = mydata[0].data.variables;
  render(<GraphDisplay variables={variables} equation="x^2" isMulipleOralDosing={false} is_testing={true} />);
});
test('test variable renders without crashing', () => {
  let variables = mydata[2].data.variables;
  let equation = mydata[2].data.equation
  render(<GraphDisplay variables={variables} equation={equation} isMulipleOralDosing={false} is_testing={true} />);
});
test('test non linear pharmacokinetic  renders without crashing', () => {
  let variables = {
    C0: 500,
    Vm: 230,
    Km: 80,
  }
  render(<MemoryRouter initialEntries={["/formula/non_linear_pharmacokinetics"]}>
    <GraphDisplay variables={variables} equation={""} isMulipleOralDosing={false} is_testing={true} test_non_linear = {true}/>
  </MemoryRouter>);
});
