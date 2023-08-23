import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './MyNavbar.css'
import { useLocation } from 'react-router-dom';

function MyNavbar() {
  const location = useLocation();
  const isIndexPage = location.pathname === '/pharmakinetics' || location.pathname ==='/pharmakinetics/';
  console.log(location)
  if (isIndexPage){
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
               {/* Modify to a for loop to all formula pages */}
              <NavDropdown.Item as={Link} to="/formula/option1">Option 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/formula/option2">Option 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/formula/option3">Option 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;