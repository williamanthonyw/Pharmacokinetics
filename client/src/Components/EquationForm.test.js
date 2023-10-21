import React from 'react';
import { render, screen } from '@testing-library/react';
import FormulaPage from './FormulaPage';
import { MemoryRouter } from 'react-router-dom';
import EquationForm from './EquationForm';
import mydata from './data';
import { fireEvent } from '@testing-library/react';
import { queryByAttribute} from '@testing-library/dom';
import { getByLabelText } from '@testing-library/react';
describe('EquationForm', () => {
 
    
    test('renders the EquationForm component', () => {
        const mockSetData = jest.fn();
        const mockData = mydata[0].data;
        const mockMode = 'Dynamic';
        render(
        <EquationForm data={mockData} setData={mockSetData} mode={mockMode} />);
        const equationFormElement = screen.queryByTestId('equation-form');
        expect(equationFormElement).toBeInTheDocument();
    });
    test('ref is null component', () => {
        const mockSetData = jest.fn();
        const mockData = mydata[0].data;
        mockData.variables = { K: 0, Vd: 0, Cl: 0, t: 0 };
        const mockMode = 'Performance';
        render(
        <EquationForm testNoFormRef = {true}data={mockData} setData={mockSetData} mode={mockMode} />);
        expect(screen.queryByTestId('equation-form')).toBeNull();
    });
    test('Value  is less than 0 component', () => {
        const mockSetData = jest.fn();
        const mockData = mydata[0].data;
        const mockMode = 'Performance';
        render(
        <EquationForm testNoFormRef = {true}data={mockData} setData={mockSetData} mode={mockMode} />);
        expect(screen.queryByTestId('equation-form')).toBeNull();
    });
});
test('handleChange sets error message when value is less than or equal to 0', () => {
    const mockSetData = jest.fn();
    const mockData = {
            variables: {
                dose: 100,
                Cl: 20,
                Vd: 200,
            },
            variableLabels: {
                dose: 'Dose (mg):',
                Cl: 'Clearance (L/h):',
                Vd: 'Volume of Distribution (L):',
            },
            data_types: {
                dose: 'number',
                Cl: 'number',
                Vd: 'number',
            },
            equation: "dose / Vd * exp(-Cl / Vd * t)",
            latex_eq: "k = \\frac{Cl}{V_d}"
        }
    const mockMode = 'Dynamic';
    render(<EquationForm data={mockData} setData={mockSetData} mode={mockMode} />)
    const inputElement = screen.getByLabelText('Dose (mg):');
    fireEvent.change(inputElement, { target: { name: 'dose', value: '0' } });
    
    
     expect(screen.getByText("error: dose cannot be less than or equal to 0!")).toBeInTheDocument();
});

test('handleChange sets error message when value is not a number', () => {
  const mockSetData = jest.fn();
  const mockData = {
    variables: {
        dose: 100,
        Cl: 20,
        Vd: 200,
    },
    variableLabels: {
        dose: 'Dose (mg):',
        Cl: 'Clearance (L/h):',
        Vd: 'Volume of Distribution (L):',
    },
    data_types: {
        dose: 'number',
        Cl: 'number',
        Vd: 'number',
    },
    equation: "dose / Vd * exp(-Cl / Vd * t)",
    latex_eq: "k = \\frac{Cl}{V_d}"
}
  const mockMode = 'Dynamic';
  render(<EquationForm data={mockData} setData={mockSetData} mode={mockMode} />);
  const inputElement = screen.getByLabelText('Dose (mg):');
  fireEvent.change(inputElement, { target: { name: 'dose', value: 'a' } });
  expect(screen.getByText("error: dose is not a number!")).toBeInTheDocument();
});
test('Initial value invalid', () => {
    const mockSetData = jest.fn();
    const mockData = {
      variables: {
          dose: 0,
          Cl: 20,
          Vd: 200,
      },
      variableLabels: {
          dose: 'Dose (mg):',
          Cl: 'Clearance (L/h):',
          Vd: 'Volume of Distribution (L):',
      },
      data_types: {
          dose: 'number',
          Cl: 'number',
          Vd: 'number',
      },
      equation: "dose / Vd * exp(-Cl / Vd * t)",
      latex_eq: "k = \\frac{Cl}{V_d}"
  }
    const mockMode = 'Dynamic';
    render(<EquationForm data={mockData} setData={mockSetData} mode={mockMode} />);
    const inputElement = screen.getByLabelText('Dose (mg):');
    expect(screen.getByText("error: dose cannot be less than or equal to 0!")).toBeInTheDocument();
  });
  test('Initial value invalid', () => {
    const mockSetData = jest.fn();
    const mockData = {
      variables: {
          dose: "a",
          Cl: 20,
          Vd: 200,
      },
      variableLabels: {
          dose: 'Dose (mg):',
          Cl: 'Clearance (L/h):',
          Vd: 'Volume of Distribution (L):',
      },
      data_types: {
          dose: 'number',
          Cl: 'number',
          Vd: 'number',
      },
      equation: "dose / Vd * exp(-Cl / Vd * t)",
      latex_eq: "k = \\frac{Cl}{V_d}"
  }
    const mockMode = 'Dynamic';
    render(<EquationForm data={mockData} setData={mockSetData} mode={mockMode} />);
    const inputElement = screen.getByLabelText('Dose (mg):');
    expect(screen.getByText("error: dose is not a number!")).toBeInTheDocument();
  });
test('handleChange sets error message when value has more than 4 decimal places', () => {
  const mockSetData = jest.fn();
  const mockData = {
    variables: {
        dose: 100,
        Cl: 20,
        Vd: 200,
    },
    variableLabels: {
        dose: 'Dose (mg):',
        Cl: 'Clearance (L/h):',
        Vd: 'Volume of Distribution (L):',
    },
    data_types: {
        dose: 'number',
        Cl: 'number',
        Vd: 'number',
    },
    equation: "dose / Vd * exp(-Cl / Vd * t)",
    latex_eq: "k = \\frac{Cl}{V_d}"
}
  const mockMode = 'Dynamic';
  render(<EquationForm data={mockData} setData={mockSetData} mode={mockMode} />);
  const inputElement = screen.getByLabelText('Dose (mg):');
  fireEvent.change(inputElement, { target: { name: 'dose', value: '1.2345678' } });
  expect(screen.getByLabelText('Dose (mg):')).toBeInTheDocument()
});

test('handleChange sets data when value is valid', () => {
    const mockSetData = jest.fn();
    const mockData = {
      variables: {
          dose: 100,
          Cl: 20,
          Vd: 200,
      },
      variableLabels: {
          dose: 'Dose (mg):',
          Cl: 'Clearance (L/h):',
          Vd: 'Volume of Distribution (L):',
      },
      data_types: {
          dose: 'number',
          Cl: 'number',
          Vd: 'number',
      },
      equation: "dose / Vd * exp(-Cl / Vd * t)",
      latex_eq: "k = \\frac{Cl}{V_d}"
  }
    const mockMode = 'Dynamic';
    render(<EquationForm data={mockData} setData={mockSetData} mode={mockMode} />);
    const inputElement = screen.getByLabelText('Dose (mg):');
    fireEvent.change(inputElement, { target: { name: 'dose', value: '1' } });
    expect(screen.getByLabelText('Dose (mg):')).toBeInTheDocument()
});

