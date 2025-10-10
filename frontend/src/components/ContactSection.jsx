import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contactSection.css";

import googleMap from "../assets/google-maps.png";
import phoneIcon from "../assets/phone-call.png";
import gmailIcon from "../assets/gmail.png";
export default function ContactSection() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1i3dy0h",   // 🔹 Replace with Service ID
        "template_z6xxmhd",  // 🔹 Replace with Template ID
        form.current,
        "Aer2EhtBjqjdsN0qw"    // 🔹 Replace with Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Try again later.");
        }
      );

    e.target.reset(); // clear form
  };

  return (
    <div>
      <div className="main">
        <div className="header">
          <h1>Contact Me.</h1>
          <p>For more information about me, please fill out the form.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Section */}
          <div className="contact-info">
            <h2>Contact Info</h2>

            <div className="contact-card">
              <img src={googleMap} alt="Address" />
              <div className="contact-detail">
                <h2>Address</h2>
                <p>Bahadurgarh, Haryana</p>
              </div>
            </div>

            <div className="contact-card">
              <img src={phoneIcon} alt="Phone" />
              <div className="contact-detail">
                <h2>Phone</h2>
                <p>+91 8168551493</p>
              </div>
            </div>

            <div className="contact-card">
              <img src={gmailIcon} alt="Email" />
              <div className="contact-detail">
                <h2>Email</h2>
                <p>48anuragsingh@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Message Form Section */}
          <div className="message-form">
            <h3>Send a Message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
