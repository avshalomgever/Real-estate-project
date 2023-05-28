
import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";


export const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    emailjs
      .sendForm(
        "service_vkmjfth",
        "template_3kjgfrk",
        form.current,
        "cMgO0rtID4sJxJZdl"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            name="user_name"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            name="user_email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button className="contact button" onClick={()=>alert('Thank you for your message. We will contact you soon')} type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default ContactUs;
