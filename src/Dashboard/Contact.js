import React from "react";
import "../App.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you! Reach out or visit us during business hours.
      </p>

      <div className="contact-card center-card">
        <h2 className="section-heading">Office Address</h2>
        <p>
          AAYUR CARE <br />
          BHIVE Premium Koramangala (Near Nexus Mall), <br />
          Hosur Main Road, next to Forum Mall, Adugodi, <br />
          Koramangala, Bengaluru, Karnataka, India
        </p>
      </div>

      <div className="contact-card center-card">
        <h2 className="section-heading">Call & Email</h2>
        <p><strong>Phone:</strong> +91 7338146712</p>
        <p><strong>Email:</strong> info@aayurcare.com</p>
      </div>

      <div className="contact-card center-card">
        <h2 className="section-heading">Business Hours</h2>
        <p>Monday – Saturday: 09:30 am – 06:30 pm</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
}

export default Contact;
