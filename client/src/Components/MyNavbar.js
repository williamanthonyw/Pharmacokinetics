import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './MyNavbar.css'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import mydata from './data';
function MyNavbar() {
  const location = useLocation();
  const isIndexPage = location.pathname === '/pharmakinetics' || location.pathname === '/pharmakinetics/';
  
  // TODO - Modify links to get data from server instead of hard coding
  const [links, setLinks] = useState(mydata)



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