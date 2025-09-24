import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "../App.css";
//contact
function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you! Reach out or visit us during business hours.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h2 className="section-heading">Office Address</h2>
          <h5>Registered Address</h5>
          <p>
           Crescent Workspace, next to Karnataka Bank, HRBR Layout 1st Block, Bank Avenue Colony,
 Banaswadi, Bengaluru, Karnataka– 560043, India
          </p>
           <h5>Operating Address</h5>
          <p>
            BHIVE Premium Koramangala (Near Nexus Mall),
            Hosur Main Road, next to Forum Mall, Adugodi,
            Koramangala, Bengaluru, Karnataka, India
          </p>


        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h2 className="section-heading">Call Us</h2>
          <p><strong>Phone:</strong> +91 7338146712</p>
          <FaEnvelope className="contact-icon small" />
          <p><strong>Email:</strong> info@aayurcare.com</p>
        </div>

        <div className="contact-card">
          <FaClock className="contact-icon" />
          <h2 className="section-heading">Business Hours</h2>
          <p>Monday – Saturday: 09:30 am – 06:30 pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
