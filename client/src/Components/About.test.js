import { render, screen } from '@testing-library/react';
import About from './About';
import {  MemoryRouter } from 'react-router-dom';
test('renders About component', () => {
  render(<MemoryRouter>
    <About />
  </MemoryRouter>);
  const aboutElement = screen.getByText(/About/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<MemoryRouter initialEntries={["", "/about"]}>
    <About />
  </MemoryRouter>);
  const welcomeElement = screen.getByTitle('about-paragraph');
  expect(welcomeElement).toBeInTheDocument();
});

test('renders Single IV Dosing equation link', () => {
  render(<MemoryRouter initialEntries={["","/about"]}>
  <About />
</MemoryRouter>);
  const linkElement = screen.getByText(/Single IV Dosing/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Oral Dosing Plasma Time Curve equation link', () => {
  render(<MemoryRouter initialEntries={["","/about"]}>
  <About />
</MemoryRouter>);
  const linkElement = screen.getByText(/Oral Dosing Plasma Time Curve/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Intravenous Infusion and Effect of Clearance equation link', () => {
  render(<MemoryRouter initialEntries={["","/about"]}>
  <About />
</MemoryRouter>);
  const linkElement = screen.getByText(/Intravenous Infusion and Effect of Clearance/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Multiple Oral Dosing equation link', () => {
  render(<MemoryRouter initialEntries={["","/about"]}>
  <About />
</MemoryRouter>);
  const linkElement = screen.getByText(/Multiple Oral Dosing/i);
  expect(linkElement).toBeInTheDocument();
});