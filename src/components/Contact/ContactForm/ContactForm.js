import './ContactForm.css'
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`event:`)
    // console.log(e)
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    // console.log(`details`)
    // console.log(details)
    let response = await fetch("http://aquascapetherapy.com:10000/", {
    // let response = await fetch("http://localhost:10000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    // console.log(`response: `)
    // console.log(response)
    setStatus("Submit");
    let result = await response.json();
    console.log(`result.status`);
    console.log(result.status);
    document.getElementById("contactForm").reset();
  };

  return (
    <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
      <div className="contactForm__labelContainer">
        <label className="contactForm__labelName" htmlFor="name">Name:</label>
        <input className="contactForm__labelInput" type="text" id="name" placeholder=" Please enter your name" required />
      </div>
      <div className="contactForm__labelContainer">
        <label className="contactForm__labelName" htmlFor="email">Email:</label>
        <input className="contactForm__labelInput" type="email" id="email" placeholder=" Please enter your email" required />
      </div>
      <div className="contactForm__labelContainer">
        <label className="contactForm__messageTitle" htmlFor="message">Message:</label>
        <textarea className="contactForm__messageBox" id="message" required />
      </div>
      <div className="contactForm__buttonContainer">
        <button className="contactForm__button" type="submit">{status}</button>
      </div>
    </form>
  );
};

export default ContactForm;