import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Contact.css"; // your existing CSS

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fb4uxlr",    // replace with your EmailJS service ID
        "template_jx6mgey",   // replace with your EmailJS template ID
        form.current,
        "T4fjAvewdodysu2O2"     // replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus({ message: "Thank you! We will get back to you soon.", type: "success" });
          form.current.reset();
        },
        (error) => {
          setStatus({ message: "Oops... something went wrong. Try again later.", type: "error" });
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="name" className="form-input" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" className="form-input" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="subject" className="form-input" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea name="message" className="form-input" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>

        {status.message && (
          <p className={`form-status ${status.type}`}>
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
