import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container pt-3 pb-3'>

      <h1 style={{ color: '#e54726' }}>About</h1>
      <p title='about-paragraph'>Welcome to our website. This website was designed for students of Dr. Slade Matthews at the University of Sydney's School of Pharmacy, This website serves as an resource for students looking to be pharmacists and/or pharmaceutical scientists, offering an experience in understanding the complex world of pharmacokinetics.</p>
      <h2>What is this website?</h2>
      <p>
        Our primary goal is to empower and equip students with a comprehensive understanding of pharmacokinetics, particularly focusing on five fundamental pharmacokinetic equations which are a crucial aspect of pharmacology:
      </p>

      <ul>
        <li className="boldTitle">Single IV Dosing</li>
        <p>
          This equation explains the dynamics of drugs administered through intravenous injection and provides insights on factors such as drug concentration and time. This will allow students to understand how drugs enter and exit our bloodstream.
        </p>
        <Link to='/formula/single_iv_dosing'>Go to Equation</Link>
      </ul>

      <ul>
        <li className="boldTitle">Oral Dosing Plasma Time Curve</li>
        <p>
          This equation highlights the complexities of oral drug administration, illustrating the concentration of drugs in the bloodstream and its evolvution over time.
        </p>
        <Link to='/formula/oral_dosing_plasma_time_curve'>Go to equation</Link>
      </ul>

      <ul>
        <li className="boldTitle">Intravenous Infusion and Effect of Clearance</li>
        <p>
          This equation explains the relationship between drug infusion, clearance rates, and drug concentration. This equation shows how continuous drug administration influences concentration dynamics.
        </p>
        <Link to='/formula/intravenous_infusion_and_effect_of_clearance'>Go to Equation</Link>
      </ul>
      <ul>
        <li className="boldTitle">Multiple Oral Dosing</li>
        <p>
          The difficulties of administering drugs via multiple oral doses are shown in the equation, considering factors like drug accumulation, steady-state concentrations, and dosage regimens. This knowledge is essential for designing effective drug therapy plans.
        </p>
        <Link to='/formula/multiple_oral_dosing'>Go to Equation</Link>

      </ul>
      <ul>
        <li className="boldTitle">Non-linear Pharmacokinetics - Initial Zero Order Followed by First Order Elimination</li>
        <p>
          Certain drugs follow non-linear pharmacokinetics, characterized by a combination of zero and first-order elimination kinetics. Understanding this is important to learn how some medications behave in the body.
        </p>
        <Link to='/formula/non_linear_pharmacokinetics'>Go to Equation</Link>

      </ul>
      <p>
        In addition to these equations provided, the website also includes interactive graphs that will allow students to actively engage with pharmacokinetics equations in real time.
      </p>
      <p>
        By providing a user friendly website which includes educational content as well as interactive graphs, students are able to gain the knowledge and skills necessary to excel in the field of pharmacokinetics.
      </p>
    </div>
  )
}

export default About

