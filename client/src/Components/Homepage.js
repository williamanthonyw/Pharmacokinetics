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
                    <Link className="Link" to="">FORMULA
                      <div className="subFormula">
                        <ul>
                          <li><Link className="Link" to="/formula/single_iv_dosing">1. Single IV Dosing<br></br></Link></li>
                          <li><Link className="Link" to="/formula/oral_dosing_plasma_time_curve">2. Oral Dosing Plasma-time Curve</Link></li>
                          <li><Link className="Link" to="/formula/intravenous_infusion_and_effect_of_clearance">3. Intravenous Infusion and Effect of Clearance</Link></li>
                          <li><Link className="Link" to="/formula/non_linear_Pharmacokinetics">4. Non-linear Pharmacokinetics - Initial Zero Order followed by First Order Elimination</Link></li>
                          <li><Link className="Link" to="/formula/multiple_oral_dosing">5. Multiple Oral Dosing</Link></li>
                        </ul>
                      </div>
                    </Link>




                </ul>
            </div>
            <i className="fa-solid fa-bars" onClick={showMenu}></i>

        </nav>


        <div className="text-box">
          <h1>Pharmacokinetics Calculations</h1>
          <p>
            Pharmacokinetics is what happen to medication after it enters the body. It can be remembered as ADME
            (Absorption, Distribution, Metabolism and Excretion). This website will help you to explore in more details about the formulas
            such as <Link to="/formula/single_iv_dosing" className = "formula_home">Single IV Dosing</Link>,
            <Link to="/formula/oral_dosing_plasma_time_curve" className = "formula_home"> Oral Dosing Plasma Time Curve</Link>,
            <Link to="/formula/intravenous_infusion_and_effect_of_clearance" className = "formula_home"> Intravenous Infusion and Effect of Clearance</Link>,
            <Link to="/formula/non_linear_Pharmacokinetics" className = "formula_home"> Non-linear Pharmacokinetics - Initial Zero Order Followed by First Order Elimination</Link>,
            <Link to="/formula/multiple_oral_dosing" className = "formula_home"> Multiple Oral Dosing</Link>.
          </p>
          <Link to="/about" className = "learnNow">Learn more</Link>
          {/* <a href="" className = "learnNow">Learn more</a> */}


        </div>


      </header>

      <section className="anything">
        <h1>Pharmacokinetics</h1>
        <h3>1. ADME:</h3>
        <p>+ A - Absorption - How medications are absorbed in the body. Location of administration:<br></br>
        <li>Injection known as "parenteral": Intravenous(IV) therapy, Intramuscular(IM), Subcutaneous(SQ)... </li>
        <li>Oral known as "enteral": Oral and Sublingual administration.</li>
        <li>Rectal(PR): Per Rectal suppository.</li>
        <li>Lungs: such as inhaled medication (Albuterol or Steroids).</li>
        <li>Transdermal: Skin absorption like Nicotine patches.</li>
        </p>

        <p>+ D - Distribution - How medications get to where they are going in the body. It is via bloodstream(the highways of the body).</p>
        <p>+ M - Metabolism - How the medications are processed within the body. And how the body
          converts medication into a less, or more active form. These form are known as metabolites.
          <li>Liver: it is responsible for the "1st pass phenomenon", which means the liver will metabolizes oral medication before going to the rest of the body. </li>
          <li>Lungs, kidneys and intestines also help with metabolism.</li>
        </p>
        <p>+ E - Elimination / Excretion - How the medications get out of the body and into the body.</p>

        <h3>2. The History of Pharmacokinetics:</h3>
        <p>- The origins of Pharmacokinetics is the study of the time course of drug absorption, distribution, metabolism, and excretion.
          It was developed from the fields of physiology, biochemistry, and physical chemistry in the early 20th century.
          Leonor Michaelis, Victor Henri, and Maud Menten are 3 pioneers, who contributed to create Pharmacokinetics.
        </p>

        <p>
          + Leonor Michaelis was a German biochemist who investigated the kinetics of enzyme reactions. He collaborated with Maud Menten, a Canadian biochemist who was one of the first women to earn a PhD in biochemistry. Together, they proposed the Michaelis-Menten equation in 1913, which describes how the rate of an enzyme reaction depends on the concentration of the substrate and the enzyme.
        </p>

        <p>+ Victor Henri was a French physical chemist who also studied enzyme kinetics and derived a similar equation independently in 1903. He also developed the concept of enzyme inhibition, which explains how some substances can slow down or stop an enzyme reaction.</p>
        <p>+ Maud Menten continued to work on enzyme kinetics and Pharmacokinetics after her collaboration with Michaelis. She developed methods for measuring blood levels of drugs and enzymes, and applied the Michaelis-Menten equation to Pharmacokinetics. She showed how the rate of drug elimination depends on the concentration of the drug and the enzyme that metabolizes it.</p>
        <p>-> These three pioneers laid the foundations for Pharmacokinetics and influenced many other researchers who followed their footsteps. Their work has contributed to the advancement of clinical pharmacology and drug therapy, and has improved the health and well-being of millions of people around the world.</p>

        <p><a href="https://journals.sagepub.com/doi/pdf/10.1177/106002807701101207#:~:text=THE%20ORIGINS%20OF%20PharmacokineticsS%20were,Menten%20equation%22%20for%20enzyme%20kinetics.">
        For more information about the History.
        </a></p>
      </section>

      <section className="nearlyEnd">
        <p>By <Link to="/contact" className="end"><i>Dr.Slade Matthews</i></Link></p>

      </section>

    </div>

  )
}

export default Homepage