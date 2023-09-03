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

            <a href="https://www.youtube.com/watch?v=EcFVTgRHJLM"><img src={logo} alt = "USYD LOGO"/></a>
            <div className={nav_links} id="navLinks">
                <i className="fa-solid fa-xmark" onClick={hideMenu}></i>
                <ul>

                    {/* <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li> */}
                    <Link className="Link" to="/contact">HOME</Link>
                    <Link className="Link" to="/about">ABOUT</Link>
                    <Link className="Link" to="/contact">CONTACT</Link>
                    <Link className="Link" to="/contact">FORMULA
                      <div className="subFormula">
                        <ul>
                          <li><Link className="Link" to="/contact">1. Single IV Dosing<br></br></Link></li>
                          <li><Link className="Link" to="/about">2. Oral Dosing Plasma-time Curve</Link></li>
                          <li><Link className="Link" to="/contact">3. Intravenous Infusion and Effect of Clearance</Link></li>
                          <li><Link className="Link" to="/contact">4. Non-linear Pharmacokinetics - Initial Zero Order followed by First Order Elimination</Link></li>
                          <li><Link className="Link" to="/contact">5. Multiple Oral Dosing</Link></li>
                        </ul>
                      </div>
                    </Link>




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