import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './MyNavbar.css'
import logo from '../assets/images/USYD_LOGO_WHITE.png'
const Homepage = () => {
  return (
    <div>
      <header className="header">
        <Navbar bg="light" expand="lg" className='bg-blue'>
          <div className='container whitesmoke'>
            <Navbar.Brand as={Link} to="/pharmakinetics"><img src={logo} alt="Description of your image" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/pharmakinetics" style={{ color: 'whitesmoke' }}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" style={{ color: 'whitesmoke' }}>About</Nav.Link>
                <Nav.Link as={Link} to="/contact" style={{ color: 'whitesmoke' }}>Contact</Nav.Link>
                {/* Add similar style attributes for other Nav.Link items */}
                <Nav.Link as={Link} to="/contact" style={{ color: 'whitesmoke' }}>Flashcards</Nav.Link>
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

        <div className="text-box">
          <h1>Pharmacokinetic Calculations</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <a href="" className="learnNow">Learn more</a>


        </div>


      </header>

      <section className="anything">
        <h1>Anything</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      </section>

      <section className="nearlyEnd">
        <h1>HAVE FUN.</h1>
        <h1>END</h1>
      </section>
    </div>
  )
}

export default Homepage