import React from 'react'
import lecturerphoto from "../assets/images/drmatthews.jpeg"
import logo from "../assets/images/usyd_logo.png"
const Contact = () => {
  return (
    <div className='container'>

        <h1>Contact</h1>
        <p title='contact-paragraph'>Welcome to our Contact page! We're thrilled that you're interested in getting in touch with us. Whether you have inquiries, suggestions, or simply want to connect, this is the place to do so! Your communication is important to us, and we're here to assist you. You can reach out using the provided contact details or the form below, and we'll promptly respond to your message. Thank you for considering reaching out!</p>

        <hr
            style={{
              background: 'black',
              color: 'black',
              borderColor: 'black',
              height: '2px',
            }}
        />

        <section className="lecturer">
            <h4>Dr.Slade Matthews</h4>
            <img src={lecturerphoto} alt="photo"/>

            <p>
                Senior Lecturer
                <br></br>
                Sydney Pharmacy School
            </p>

            <p>If you have any questions regarding equations or pharmacokinetics, you can reach out to Dr. Slade Matthews through the following contact methods:</p>
                <ul>
                    <li>Email: <a href="mailto:slade.matthews@sydney.edu.au">slade.matthews@sydney.edu.au</a></li>
                    <li>Phone: <a href="tel:+61 2 9351 6200">+61 2 9351 6200</a></li>
                    <li>Address: The University of Sydney, A15, Science Rd, Camperdown NSW 2050</li>
                </ul>
        </section>

        <hr
            style={{
            background: 'black',
            color: 'black',
            borderColor: 'black',
            height: '2px',
            }}
        />

        <section className="team">
            <h4>The Website Development Team</h4>
            <img src={logo} alt="USYD LOGO" width="25%"/>
            <p>If you have any questions or feedback for our development team, please use the form below:</p>
            <ul>
                <li>Email: (Form with text box to be implemented) </li>
                <li>Phone: (Form with text box to be implemented)</li>
                <li>Message: (Form with text box to be implemented)</li>
            </ul>
        </section>

    </div>
  )
}

export default Contact