import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import './MyNavbar.css'
import { useState } from 'react';
import logo from '../assets/images/USYD_LOGO_WHITE.png';

const Homepage = () => {
  const [links, setLinks] = useState([
    {
      'url': 'single_iv_dosing',
      'formula_name': 'Single IV Dosing',
      'id': 1
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


  const [nav_links, setNav_links] = useState("nav_links");

  const showMenu = () => {
    setNav_links("nav_links2");
  }

  const hideMenu = () => {
    setNav_links("nav_links");
  }

  return (
    <div>
      <header className="header">
      <nav>

            <a href="index.html"><img src={logo} alt = "USYD LOGO"/></a>
            <div className={nav_links} id="navLinks">
                <i className="fa-solid fa-xmark" onClick={hideMenu}></i>
                <ul>
<<<<<<< HEAD
                    {/* <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li> */}
                    <Link className="Link" to="/contact">HOME</Link>
                    <Link className="Link" to="/about">ABOUT</Link>
                    <Link className="Link" to="/contact">CONTACT</Link>
                    <Link className="Link" to="/contact">FORMULA
                      <div className="subFormula">
                        <ul>
                          <Link className="Link" to="/contact">Option1</Link>
                          <Link className="Link" to="/about">Option2</Link>
                          <Link className="Link" to="/contact">Option3</Link>
                        </ul>
                      </div>
                    </Link>
=======
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <Link to="/contact">CONTACTS</Link>
                    <li className="formula" id="formula"><a href="">FORMULA</a>
                        <div className="subFormula">
                            <ul>
                                <li><a href="">Option1</a></li>
                                <li><a href="">Option2</a></li>
                                <li><a href="">Option3</a></li>
                            </ul>
                        </div>
                    </li>
>>>>>>> e25e56fed82fad1f1c5d77142faab26a78ffa8ba

                </ul>
            </div>
            <i className="fa-solid fa-bars" onClick={showMenu}></i>

        </nav>


        <div className="text-box">
          <h1>Pharmacokinetic Calculations</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <a href="" className = "learnNow">Learn more</a>


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