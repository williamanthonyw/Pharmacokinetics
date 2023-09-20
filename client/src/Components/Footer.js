import React from 'react'
import { Link } from 'react-router-dom'
import githublogo from '../assets/images/github_icon.png'

const Footer = () => {
  return (
    <section className="nearlyEnd pt-5 pb-5">
      <div className='container'>
        <Link to='https://github.com/sladem-tox?tab=repositories'><img align='left' src={githublogo} style={{ width: 30, height: 30, paddingTop: 0 }}></img></Link>
        <p style={{ paddingTop: 20 }}>By <Link to="/contact" className="end" ><i>Dr.Slade Matthews</i></Link></p>
      </div>

    </section>
  )
}

export default Footer