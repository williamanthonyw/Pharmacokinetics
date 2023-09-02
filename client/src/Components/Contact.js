import React from 'react'
import photo from "../assets/images/drmatthews.jpeg"
const Contact = () => {
  return (
    <div className='container'>

        <h1>Contacts</h1>
        <p>Dr.Slade Matthews</p>
        <img src={photo} alt="Dr. Slade Matthews" title='img'/>
    </div>
  )
}

export default Contact