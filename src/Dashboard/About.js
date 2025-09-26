import "../App.css";
// import about from "../Images/about.png";
function About() {
  return (
    <div className="page-section">
      <div className="about-img">
        {/* <img src={about} alt=""></img> */}

      </div>
      <h2>About Us</h2>
      <p>
        Aayur Care is a professionally managed medical disbursement company,
        committed to making medical reimbursements fast, transparent, and hassle-free. 
        We bridge the gap between healthcare services and financial accessibility, 
        ensuring that individuals, families, and corporates can focus on health 
        without worrying about costs.
      </p>
      <p>
        Founded with the vision of redefining healthcare affordability, Aayur Care
        aims to create a trusted and transparent reimbursement ecosystem. Our
        platform simplifies medical reimbursements, providing seamless support for outpatient consultations, 
        inpatient treatments, diagnostics, preventive care, wellness services, and more.
      </p>
      <p>
        With a strong focus on financial inclusion, we are committed to making
        quality healthcare accessible to everyone. By combining technology with a customer-first approach, 
        we ensure quick claim settlements, pre-approved coverage, and transparent processes for every member.
      </p>
      <p>
        Aayur Care is not just a reimbursement service — it’s a partner in your
        healthcare journey, providing peace of mind, financial protection, and
        support when it matters most.
      </p>

      <h3 className="core-values">Our Core Values</h3>

      <div className="values-grid">
        <div className="value-box">
          <h4>Transparency</h4>
          <p>We value clarity and honesty in every interaction. Our plans and processes are straightforward, with no hidden fees or confusing clauses,or unexpected delays. Members always know what to expect and how their claims are handled.</p>
        </div>
        <div className="value-box">
          <h4>Accessibility</h4>
          <p>Healthcare should be available to everyone. We design our services to be inclusive, supporting members across urban and rural locations,with easy digital tools to submit claims and track reimbursements.</p>
        </div>
        <div className="value-box">
          <h4>Trust</h4>
          <p> With the backing of Aayur Enterprises’ 9+ years of industry legacy, we are a reliable partner in your healthcare journey. Every process, from plan selection to claim settlement, is designed to maintain your trust and ensure security and accountability.</p>
        </div>
        <div className="value-box">
          <h4>Efficiency</h4>
          <p>Time is critical when it comes to healthcare. Our streamlined, technology-driven processes guarantee that claims are processed quickly, so you receive reimbursements without unnecessary delays or paperwork</p>
        </div>
        <div className="value-box">
          <h4>Member-Centric Approach</h4>
          <p> We put our members at the heart of everything we do. From designing flexible plans to providing personalized support, our goal is to make healthcare management as simple, stress-free, and supportive as possible</p>
        </div>
        <div className="value-box">
          <h4>Innovation</h4>
          <p>We continuously leverage technology and innovative solutions to improve healthcare reimbursements. From online claim portals to AI-assisted processing, we aim to provide modern, smart, and seamless services to all our members.</p>
        </div>
      </div>
    </div>
  );
}

export default About;