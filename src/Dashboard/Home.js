import React from "react";
import "../App.css";
import Family from "../Images/Home.png";

function Home() {
  return (
    <div className="main-page">
      {/* Hero Section */}
      <section className="hero-section full-page">
        <img src={Family} alt="Family" className="hero-image" />
      </section>

      {/* Who We Are */}
      <section className="who-section full-page">
        <div className="who-content">
          <h1>Who We Are</h1>
          <p>
            Aayur Care is a trusted healthcare reimbursement provider, built on over 9 years
            of diverse business experience across multiple industries. Our mission is simple —
            to make healthcare more accessible, affordable, and stress-free for individuals,
            families, and corporates. We focus on delivering transparent, easy-to-understand,
            and hassle-free reimbursement solutions, ensuring our members can access the care
            they need without financial worries. At Aayur Care, we put our members first, always.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans-section full-page">
        <h2>Plans Tailored to Your Needs</h2>
        <div className="plans-grid">
          <div className="plan-box">
            <h3>OPD Reimbursement</h3>
            <p>Doctor visits, tests, medicines, and minor treatments.</p>
          </div>
          <div className="plan-box">
            <h3>IPD Coverage</h3>
            <p>Hospitalization, surgeries, and inpatient care expenses.</p>
          </div>
          <div className="plan-box">
            <h3>Corporate Health Plans</h3>
            <p>Flexible OPD & IPD plans for employees and their families.</p>
          </div>
          <div className="plan-box">
            <h3>Customized Memberships</h3>
            <p>Build your own plan with OPD, IPD, and accidental coverage.</p>
          </div>
        </div>
      </section>

      {/* Why Thousands Trust Us */}
      <section className="trust-section full-page">
        <h2>Why Thousands Trust Us</h2>
        <div className="trust-grid">
          <div className="trust-box">Quick & Transparent Claim Process</div>
          <div className="trust-box">Affordable Membership Fees</div>
          <div className="trust-box">Wide Network of Clinics & Hospitals</div>
          <div className="trust-box">9+ Years of Credibility & Experience</div>
          <div className="trust-box">Flexible Plans for All Needs</div>
          <div className="trust-box">Comprehensive Coverage</div>
          <div className="trust-box">Member -First Approach</div>
          <div className="trust-box">24/7 Support</div>
          <div className="trust-box">Easy Digital Access</div>
          <div className="trust-box">Trusted by Corporates & Families</div>
        </div>
      </section>

      {/* Simple Steps */}
      {/* <section className="steps-section full-page">
        <h2>Simple Steps to Get Covered</h2>
        <ol className="steps-list">
          <li><strong>Choose a Plan</strong> – Select the perfect plan for you or your family.</li>
          <li><strong>Become a Member</strong> – Sign up online quickly and easily.</li>
          <li><strong>Get Medical Care</strong> – Visit any doctor, clinic, or hospital and keep bills.</li>
          <li><strong>Submit Bills & Get Reimbursed</strong> – Upload bills online and get reimbursed promptly.</li>
        </ol>
      </section> */}


            {/* Simple Steps */}
      <section className="steps-section full-page">
        <h2>Simple Steps to Get Covered</h2>
        <div className="steps-grid">
          <div className="step-box">
            <h3>1. Choose a Plan</h3>
            <p>Select the perfect plan for you or your family's needs.</p>
          </div>
          <div className="step-box">
            <h3>2. Become a Member</h3>
            <p>Quickly and easily sign up online to become a valued member.</p>
          </div>
          <div className="step-box">
            <h3>3. Get Medical Care</h3>
            <p>Visit any doctor, clinic, or hospital for your healthcare needs and keep bills.</p>
          </div>
          <div className="step-box">
            <h3>4. Submit Bills & Get Reimbursed</h3>
            <p>Upload your bills online and get reimbursed promptly.</p>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="testimonials-section full-page">
        <h2>What Our Members Say</h2>
        <div className="testimonials-grid">
          <blockquote>
            "Aayur Care made my life so much easier. The claim process was incredibly fast
            and hassle-free. Highly recommend!" <br />– <strong>Sarah J.</strong>
          </blockquote>
          <blockquote>
            "I was skeptical at first, but Aayur Care exceeded all my expectations. The coverage
            is excellent and the team is very helpful." <br />– <strong>Amit K.</strong>
          </blockquote>
          <blockquote>
            "Finally, a health plan that understands my needs. The OPD reimbursement feature
            is a game-changer for my family." <br />– <strong>Priya L.</strong>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer full-page">
        <p>AayurCare – Providing smart and hassle-free medical reimbursement for a healthier you.</p>
        {/* <div className="footer-links">
          <p>Quick Links | Legal | Follow us</p>
        </div> */}
      </footer>
    </div>
  );
}

export default Home;
