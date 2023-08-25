import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './MyNavbar.css'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
function MyNavbar() {
  const location = useLocation();
  const isIndexPage = location.pathname === '/pharmakinetics' || location.pathname === '/pharmakinetics/';
  console.log(location)
  // TODO - Modify links to get data from server instead of hard coding
  const [links, setLinks] = useState([
    {
      'url': 'single_iv_dosing',
      'formula_name': 'Single IV Dosing',
      'id': 1,
      'top_paragraph' : "<p>HTML ELEMENT</p>",
      'bottom_paragraph' : "<p>HTML ELEMENT</p>",
      'x_label' : "",
      'y_label' : "",
      'variable_elements' : [{Dose : {'label' : "Dose(mg)", 'type' : "number", 'value' : 100 }, Cl: {'label' : 'Clearance (L/h):', 'type' : "number", 'value' : 20}, Vd: {'label' : 'Volume of Distribution (L):', 'type' : "number", 'value' : 200} }],
      'equation' : "dose / Vd * exp(-Cl / Vd * t)",
    },
    {
      'url': 'oral_dosing_plasma_time_curve',
      'formula_name': 'Oral Dosing Plasma-time Curve',
      'id': 2
    },
    {
      'url': 'intravenous_infusion_and_effect_of_clearance',
      'formula_name': 'Intravenous Infusion and Effect of Clearance',
      'id': 3,
    },
    {
      'url': 'non_linear_parhamkinetics',
      'formula_name': 'Non-linear Pharmacokinetics - Initial Zero Order followed by First Order Elimination',
      'id': 4,
    },
    {
      'url': 'multiple_oral_dosing',
      'formula_name': 'Multiple Oral Dosing',
      'id': 4,
    },

  ])



  if (isIndexPage) {
    return <></>
  }
  return (
    // If route == default don't render 
    <Navbar bg="light" expand="lg" className='bg-blue'>
      <div className='container'>
        <Navbar.Brand as={Link} to="/pharmakinetics">pk_calcs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/pharmakinetics">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>


            <Nav.Link as={Link} to="/contact">Flashcards</Nav.Link>
            <NavDropdown title="Formula" id="basic-nav-dropdown">
              {links.map(link => (
                <NavDropdown.Item as={Link} to={`/formula/${link.url}`} key={link.id}>
                  {link.formula_name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;