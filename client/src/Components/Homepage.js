import React, { useState } from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/USYD_LOGO_WHITE.png';
import './Homepage.css';
import './MyNavbar.css';
import mydata from './data';
const Homepage = () => {
  const [links, setLinks] = useState(mydata)


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
                          <li><Link className="Link" to="/contact">Single IV Dosing<br></br></Link></li>
                          <li><Link className="Link" to="/about">Oral Dosing Plasma-time Curve</Link></li>
                          <li><Link className="Link" to="/contact">Intravenous Infusion and Effect of Clearance</Link></li>
                          <li><Link className="Link" to="/contact">Non-linear Pharmacokinetics - Initial Zero Order followed by First Order Elimination</Link></li>
                          <li><Link className="Link" to="/contact">Multiple Oral Dosing</Link></li>
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