import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


test('App renders without crashing', () => {
  render(
    <MemoryRouter initialEntries={["","/pharmakinetics"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Pharmacokinetic Calculations")).toBeInTheDocument();
});