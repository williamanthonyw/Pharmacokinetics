import { render, screen } from '@testing-library/react';
import Disclaimer from './Disclaimer';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import ReferenceFormula from './ReferenceFormula';

test('renders the disclaimer title', () => {
    render(
        <MemoryRouter initialEntries={["", "/disclaimer"]}>
            <App />
        </MemoryRouter>);
    expect(screen.getByText(/If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at/i)).toBeInTheDocument();

});

test('renders the consent section', () => {
    render(<MemoryRouter initialEntries={["", "/disclaimer"]}>
        <App />
    </MemoryRouter>);
    expect(screen.getByText("Should we update, amend or make any changes to this document, those changes will be prominently posted here.")).toBeInTheDocument()

});

test('renders the update section', () => {
    render(<MemoryRouter initialEntries={["", "/disclaimer"]}>
        <App />
    </MemoryRouter>);
    expect(screen.getByText("Update")).toBeInTheDocument()
});

test('renders the USYD disclaimer link', () => {
    render(<MemoryRouter initialEntries={["", "/disclaimer"]}>
        <App />
    </MemoryRouter>);
    expect(screen.getByText("By using our website, you hereby consent to our disclaimer and agree to its terms.")).toBeInTheDocument()
    // expect(linkElement).toHaveAttribute('href', 'https://www.sydney.edu.au/disclaimer.html');
});

test("reference formula", () => {
    render(
        <ReferenceFormula />
    );
});