import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className="nearlyEnd">
        <p>By <Link to="/contact" className="end"><i>Dr.Slade Matthews</i></Link></p>

      </section>
  )
}

export default Footer