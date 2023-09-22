import React from 'react'
import { Link } from 'react-router-dom'
import githublogo from '../assets/images/github_icon.png'
import logo from '../assets/images/USYD_LOGO_WHITE.png';
const Footer = () => {
  return (
    <section className="nearlyEnd pt-5 pb-5 m-0">
      <div className='container'>
        <div className="row">

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link className='text-dark'>Home</Link></li>
              <li><Link className='text-dark'>About</Link></li>
              <li><Link className='text-dark'>Contact</Link></li>
              <li><Link to = "https://github.com/sladem-tox" className='text-dark'> Dr. Slade Matthews's Github</Link></li>

            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About the Author</h5>
            <p>Dr. Slade Matthews</p>
            <Link to = "https://www.sydney.edu.au/medicine-health/about/our-people/academic-staff/slade-matthews.html#collapseprofileprojects"className='text-dark'>More about Dr. Slade Matthews</Link>

          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact & Support</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="mailto:email@example.com" class="text-dark">Email Address</a></li>
              <li><a href="tel:+1234567890" class="text-dark">Phone Number</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Legal</h5>
            <ul className="list-unstyled mb-0">
              <li><Link className='text-dark'>Privacy Policy</Link></li>
              <li><Link className='text-dark'>Terms Of Use</Link></li>
              <li><Link className='text-dark'>Disclaimer</Link></li>
            </ul>
          </div>

        </div>
        <div className="text-center mb-0 pb-0">
          <img src={logo} alt="USYD Logo" width="150" />
          <p>In collaboration with USYD</p>
          <p>Copyright © 2023 PK_Calcs. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer