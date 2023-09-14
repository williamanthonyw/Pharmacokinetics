import React from 'react'
import { Link } from 'react-router-dom';
import './MyNavbar.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/USYD_LOGO_WHITE.png';
import mydata from './data';
function MyNavbar() {
  const location = useLocation();
<<<<<<< HEAD
  const isIndexPage = location.pathname === '/pharmacokinetics' || location.pathname === '/pharmacokinetics/';

=======
  const isIndexPage = location.pathname === '/pharmakinetics' || location.pathname === '/pharmakinetics/';
>>>>>>> 319ed52 (testing)
  // TODO - Modify links to get data from server instead of hard coding

  // const [links, setLinks] = useState(mydata)

  const [nav_links, setNav_links] = useState("nav_links");

  const showMenu = () => {
    setNav_links("nav_links2");
  }

  const hideMenu = () => {
    setNav_links("nav_links");
  }

  if (isIndexPage) {
    return <></>
  }


  return (
    // If route == default don't render

    // <Navbar bg="light" expand="lg" className='bg-blue'>
    //   <div className='container'>
    //     <Navbar.Brand as={Link} to="/pharmakinetics">pk_calcs</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ml-auto">
    //         <Nav.Link as={Link} to="/pharmakinetics">Home</Nav.Link>
    //         <Nav.Link as={Link} to="/about">About</Nav.Link>
    //         <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    //         <NavDropdown title="Formula" id="basic-nav-dropdown">
    //           {links.map(link => (
    //             <NavDropdown.Item as={Link} to={`/formula/${link.url}`} key={link.id}>
    //               {link.formula_name}
    //             </NavDropdown.Item>
    //           ))}
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </div>
    // </Navbar>
    <div>
      <header className="header2">
        <nav className="navBar">

          <a href="#"><img src={logo} alt="USYD LOGO" /></a>
          <div className={nav_links} id="navLinks">
            <i className="fa-solid fa-xmark" onClick={hideMenu}></i>
            <ul>

              {/* <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li> */}
              <Link className="Link" to="/pharmacokinetics">HOME</Link>
              <Link className="Link" to="/about">ABOUT</Link>
              <Link className="Link" to="/contact">CONTACT</Link>
              <Link className="Link">FORMULA
                <div className="subFormula">
                  <ul>
                    {mydata.map((item) => (
                      <li key={item.id}>
                        <Link className="Link" to={`/formula/${item.url}`}>
                          {item.id}. {item.formula_name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>
              </Link>




            </ul>
          </div>
          <i className="fa-solid fa-bars" onClick={showMenu}></i>

        </nav>



      </header>
    </div>

  );


}

export default MyNavbar;