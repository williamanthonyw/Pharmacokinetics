import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className="nearlyEnd pt-5 pb-5">
      <div className='container'>
        <p>By <Link to="/contact" className="end"><i>Dr.Slade Matthews</i></Link></p>
      </div>

    </section>
  )
}

export default Footer