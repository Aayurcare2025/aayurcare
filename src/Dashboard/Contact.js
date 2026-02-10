import React, { useState } from 'react';

import "../App.css";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    state: '',
    city: '',
    country: '',
    subject: '',
    message: ''
  });

  



  // Sample data for dropdowns - you can expand these lists
  const countries = [
    'Select Country',
    'India',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'China',
    'Brazil'
  ];

  const states = [
    'Select State',
    'Karnataka',
    'Maharashtra',
    'Tamil Nadu',
    'Delhi',
    'Gujarat',
    'Rajasthan',
    'Uttar Pradesh',
    'West Bengal',
    'Telangana',
    'Kerala',
    'Punjab',
    'Haryana'
  ];

  const cities = [
    'Select City',
    'Bangalore',
    'Mumbai',
    'Delhi',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
    'Chandigarh',
    'Kochi'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation for dropdowns
    if (formData.state === 'Select State' || formData.state === '') {
      alert('Please select a state');
      return;
    }
    if (formData.city === 'Select City' || formData.city === '') {
      alert('Please select a city');
      return;
    }
    if (formData.country === 'Select Country' || formData.country === '') {
      alert('Please select a country');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    
    // Reset form
    setFormData({
      fullName: '',
      state: '',
      city: '',
      country: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="ayurcare-contact-page-wrapper">
      {/* Top Contact Info Section */}
      <div className="ayurcare-header-section">
        <h1 className="ayurcare-main-heading">Contact Us</h1>
        <div className="ayurcare-info-container">
          <div className="ayurcare-info-box">
            <span className="ayurcare-icon">📱</span>
            <span className="ayurcare-info-text">7338146712</span>
          </div>
          <div className="ayurcare-info-box">
            <span className="ayurcare-icon">📧</span>
            <span className="ayurcare-info-text">info@aayurcare.com</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ayurcare-content-grid">
        {/* Left Side - Contact Form */}
        <div className="ayurcare-form-section">
          <form onSubmit={handleSubmit} className="ayurcare-form">
            
            <div className="ayurcare-input-group">
              <label htmlFor="fullName" className="ayurcare-label">
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="ayurcare-input-field"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="ayurcare-input-group">
              <label htmlFor="state" className="ayurcare-label">
                State:
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="ayurcare-select-field"
                required
              >
                {states.map((state, index) => (
                  <option key={index} value={state} disabled={index === 0}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="ayurcare-input-group">
              <label htmlFor="city" className="ayurcare-label">
                City:
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="ayurcare-select-field"
                required
              >
                {cities.map((city, index) => (
                  <option key={index} value={city} disabled={index === 0}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="ayurcare-input-group">
              <label htmlFor="country" className="ayurcare-label">
                Country:
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="ayurcare-select-field"
                required
              >
                {countries.map((country, index) => (
                  <option key={index} value={country} disabled={index === 0}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="ayurcare-input-group">
              <label htmlFor="subject" className="ayurcare-label">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="ayurcare-input-field"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="ayurcare-input-group">
              <label htmlFor="message" className="ayurcare-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="ayurcare-textarea-field"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="ayurcare-submit-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Google Map */}
        <div className="ayurcare-map-section">
          <div className="ayurcare-map-wrapper">
            <iframe
              title="Aayurcare Location Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.4476892847445!2d77.60784631482283!3d12.935156890883547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU2JzA2LjYiTiA3N8KwMzYnMzYuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
              className="ayurcare-google-map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
