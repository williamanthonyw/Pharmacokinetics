import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <h1>About</h1>
      <p title='about-paragraph'>Welcome to the pharmacokinetics learning hub. Designed for students of Dr. Slade Matthews at the University of Sydney's School of Pharmacy, This website serves as an invaluable resource for aspiring pharmacists and pharmaceutical scientists, offering an experience in understanding the intricate world of pharmacokinetics.</p>
      <h2>What is this website?</h2>
      <p>
        Our primary goal is to empower students with a comprehensive understanding of pharmacokinetics, particularly focusing on five fundamental equations that are a crucial aspect of pharmacology:
      </p>
      <ul>
        <li>Single IV Dosing</li>
        <p>
          This equation explains the dynamics of drugs administered through intravenous injection, providing insights on factors such as drug concentration and time. This allows students to understand how drugs rapidly enter and exit the bloodstream.
        </p>
      </ul>

      <ul>
        <li>Oral Dosing Plasma Time Curve</li>
        <li>Intravenous Infusion and Effect of Clearance</li>
        <li>Non-linear Pharmacokinetics - Initial Zero Order Followed by First Order Elimination</li>
        <li>Multiple Oral Dosing</li>
      </ul>
      <p>
        In addition to these fundamental equations, our website includes interactive graphs that allow students to actively engage with pharmacokinetic principles. Through these visualizations, students can "play around" with variables and witness how changes affect the graphs in real-time, fostering a deeper understanding of these critical concepts.
      </p>
      <p>
        By providing a user-friendly platform which includes educational content as well as interactive graphs, we aim to equip students with the knowledge and skills necessary to excel in the field of pharmacokinetics, ultimately contributing to their success as future healthcare professionals.
      </p>
    </div>
  )
}

export default About

