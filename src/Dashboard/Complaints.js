import React, { useState } from "react";
import "../App.css";

function Complaint() {
  const [complaint, setComplaint] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (complaint.trim() === "") return;

    setSubmitted(true);



    
  };

  return (
    <div className="complaint-container">
      <h2>Complaints</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Please describe your complaint..."
            rows="5"
          />
          <br />
          <button type="submit">Submit Complaint</button>
        </form>
      ) : (
        <p className="thank-you">
          ✅ Thank you for your complaint. Our team will reach out to you within <b>24 hours</b>.
        </p>
      )}
    </div>
  );
}

export default Complaint;
