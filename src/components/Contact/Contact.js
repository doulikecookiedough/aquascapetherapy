import './Contact.css'
import ContactForm from "./ContactForm/ContactForm.js"
import GarageGallery from './Assets/garagegalleryv2.jpg'
// import { useState } from 'react';
// import { Waypoint } from 'react-waypoint';

const Contact = () => {

    return (
        <div className="contactWrapper">
            <img className="contact__backgroundImage" src={GarageGallery} alt="Gallery of Aquariums in a Garage"/>
            <div className="contact__formContainer">
                <h1 className="contact__formHeading">Contact</h1>
                <div className="contact__formSubHeading">Please send all inquires to douming.mok@gmail.com or<br/> use the contact form below.</div>
                <ContactForm />
            </div>
        </div>
    )
  }
  
export default Contact;