import React, { useState } from "react";
import "../App.css";

function Services({ serviceType }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [step, setStep] = useState(1);

  const [insured, setInsured] = useState("");
  const [preExisting, setPreExisting] = useState(null);
  const [product, setProduct] = useState("");
  const [wellnessType, setWellnessType] = useState("");
const [age, setAge] = useState("");

  // const [familyMembers, setFamilyMembers] = useState([
  //   { relation: "", age: "" },
  // ]);

  // const [sumInsured, setSumInsured] = useState("");
// 
  const[IPDValue,setIPDValue]=useState("")
  const[AccidentValue,setAccidentValue]=useState("")
  const[OPDValue,setOPDValue]=useState("")


  // proposer / self / nominee details
  const [formData, setFormData] = useState({
    proposer: {
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      mobile: "",
      occupation: "",
    },
    self: {
      height: "",
      weight: "",
    },
    nominee: {
      name: "",
      dob: "",
      relation: "",
    },
  });

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: { ...formData[section], [field]: value },
    });
  };

  // const handleAddMember = () => {
  //   setFamilyMembers([...familyMembers, { relation: "", age: "" }]);
  // };

  // const handleFamilyChange = (index, field, value) => {
  //   const updated = [...familyMembers];
  //   updated[index][field] = value;
  //   setFamilyMembers(updated);
  // };

  // ---------------- Health Form ----------------
  if (selectedPlan === "health") {
    return (
      <div className="health-form">
        <h2 className="form-title">Health</h2>
        <p className="form-subtitle">Complete your information</p>

        {/* Step 1 */}
        {step === 1 && (
          <form
            className="form-container"
            onSubmit={(e) => {
              e.preventDefault();
              if (insured === "Myself" || insured === "Myself and my family") {
                setStep(2);
              } else {
                setStep(3);
              }
              
            }}
          >
            <label>I want to buy</label>
            <select value={product} onChange={(e) => setProduct(e.target.value)}>
              <option value="">Select</option>
              <option value="opd">OPD</option>
              <option value="opd-ipd">OPD & IPD</option>
              <option value="opd-ipd-accident">OPD & IPD & Accident</option>
              <option value="accident">Accident</option>
              <option value="wellness">Wellness</option>
            </select>

            {product === "wellness" && (
              <>
                <label>Select Wellness Type</label>
                <select
                  value={wellnessType}
                  onChange={(e) => setWellnessType(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="radiology">Radiology</option>
                  <option value="pathology">Pathology</option>
                  <option value="ai-screening">AI Screening</option>
                </select>
              </>
            )}

            <label>I’d like to insure</label>
            <select value={insured} onChange={(e) => setInsured(e.target.value)}>
              <option value="">Select</option>
              <option>Myself</option>
              <option>Myself and my family</option>
              <option>Parents</option>
            </select>

            <label>My pincode is</label>
            <input type="text" placeholder="Enter pincode" />

            <label>I am</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" /> Male
              </label>
              <label>
                <input type="radio" name="gender" /> Female
              </label>
            </div>

            <label>My age is</label>
          


            <select value={age} onChange={(e) => setAge(e.target.value)}>
  <option>Select</option>
  {[...Array(83)].map((_, i) => (
    <option key={i}>{i + 18}</option>
  ))}
</select>
            <label>My email address is</label>
            <input type="email" placeholder="Email Address" />

            <label>My phone number is</label>
            <div className="phone-input">
              <span>+91</span>
              <input type="text" placeholder="Phone number" />
            </div>

            <button type="submit" className="submit-btn">
              Next →
            </button>
          </form>
        )}

        {/* Step 2 – Pre-existing diseases */}
        {step === 2 && (
          <div className="form-container">
            <button onClick={() => setStep(1)} className="back-btn">
              ← Back
            </button>
            <h3>Do you suffer from any pre-existing diseases?</h3>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="disease"
                  value="yes"
                  checked={preExisting === "yes"}
                  onChange={() => setPreExisting("yes")}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="disease"
                  value="no"
                  checked={preExisting === "no"}
                  onChange={() => setPreExisting("no")}
                />{" "}
                No
              </label>
            </div>
            <button onClick={() => setStep(3)} className="submit-btn">
              Next →
            </button>
          </div>
        )}

        {/* Step 3 – Final Plans */}
    {step === 6 && (() => {
  const cleanNumber = (val) =>
    val ? parseInt(val.replace(/,/g, ""), 10) : 0;

  const totalValue =

    cleanNumber(IPDValue) +
    cleanNumber(AccidentValue) +
    cleanNumber(OPDValue);

  // Hardcode premiums based on age
  const getPremium = (age, totalValue) => {
    if (totalValue === 305000)
{
    if (age < 20) return 5029;
    if (age >= 21 && age <= 35) return 6559;
    if (age >= 36 && age <= 45) return 7291;
    if (age >= 46 && age <= 55) return 8979;
    if (age >= 56 && age <= 60) return 12768;
    if (age >= 61 && age <= 70) return 17096;
    if (age >= 71 && age <= 80) return 21250;
    if (age > 80) return 23807;

}
else  if(totalValue === 355000)
{
      if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
}
else  if(totalValue ===  405000)
{
  if (age < 20) return 6356;
    if (age >= 21 && age <= 35) return 8660  
    if (age >= 36 && age <= 45) return 9735 
 
    if (age >= 46 && age <= 55) return 13795 
 
    if (age >= 56 && age <= 60) return 17644 
 
    if (age >= 61 && age <= 70) return 24817 

    if (age >= 71 && age <= 80) return 30700 

    if (age > 80) return 35418;
}
else  if(totalValue === 455000)
{
  if (age < 20) return 6814;
    if (age >= 21 && age <= 35) return 9351;
    if (age >= 36 && age <= 45) return 10606;
    if (age >= 46 && age <= 55) return 15630 ;
    if (age >= 56 && age <= 60) return 19805 ;
    if (age >= 61 && age <= 70) return 28241;
    if (age >= 71 && age <= 80) return 34948;
    if (age > 80) return 39822;
}
else  if(totalValue === 505000)
{
  if (age < 20) return 7236;
    if (age >= 21 && age <= 35) return 9901;
    if (age >= 36 && age <= 45) return 11451;
    if (age >= 46 && age <= 55) return 17457 ;
    if (age >= 56 && age <= 60) return 21853 ;
    if (age >= 61 && age <= 70) return 31689;
    if (age >= 71 && age <= 80) return 38973;
    if (age > 80) return 44451;
}
else  if(totalValue === 505001)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
}
else  if(totalValue === 555000)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
}
else  if(totalValue === 605000)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
  }
  else  if(totalValue === 655000)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
  }
 else  if(totalValue === 705000)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
  }
   else  if(totalValue === 755000)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
  }
 else  if(totalValue === 805000)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
  }
  else  if(totalValue === 855000)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
  }
   else  if(totalValue === 905000)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
  }
   else  if(totalValue === 955000)
{
  if (age < 20) return 5647;
    if (age >= 21 && age <= 35) return 7562;
    if (age >= 36 && age <= 45) return 8557;
    if (age >= 46 && age <= 55) return 11685 ;
    if (age >= 56 && age <= 60) return 15168 ;
    if (age >= 61 && age <= 70) return 210401;
    if (age >= 71 && age <= 80) return 26104;
    if (age > 80) return 30185;
  }


}
  // You already have age input in Step 1
  // For simplicity, capture age in state
  // (Add this in your state: const [age, setAge] = useState("");)
  const premium = getPremium(parseInt(age), totalValue);

  return (
    <div className="form-container">
      <button onClick={() => setStep(5)} className="back-btn">
        ← Back
      </button>

      <select value={IPDValue} onChange={(e) => setIPDValue(e.target.value)}>
        <option value="">Select IPD Value</option>
        <option value="100000">1,00,000 </option>
        <option value="150000">1,50,000 </option>
        <option value="200000">2,00,000 </option>
        <option value="250000">2,50,000 </option>
        <option value="300000">3,00,000 </option>
        <option value="350000">3,50,000 </option>
        <option value="400000">4,00,000 </option>
        <option value="450000">4,50,000 </option>
        <option value="500000">5,00,000 </option>
      </select>

      <select value={AccidentValue} onChange={(e) => setAccidentValue(e.target.value)}>
        <option value="">Select Accident Value</option>
        <option value="200000">2,00,000 </option>
         <option value="400000">4,00,000 </option>
          <option value="600000">6,00,000 </option>
           <option value="800000">8,00,000 </option>
            <option value="100000">10,00,000 </option>
      </select>

      <select value={OPDValue} onChange={(e) => setOPDValue(e.target.value)}>
        <option value="">Select OPD Value</option>
        <option value="5000">5,000 </option>
      </select>

      <div className="plans-grid">
        <div className="plan-card">
          <h4>Medi Coverage </h4>
          <p>Total Coverage: ₹{totalValue.toLocaleString()}</p>
          <p>
            Annual Premium:{" "}
            {premium ? `₹${premium.toLocaleString()}` : ""}
          </p>
          <button disabled={!premium} onClick={() => setStep(4)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
})()}



      
        {/* Step 4 – Proposer details */}
        {step === 3 && (
          <div className="form-container">
            <button onClick={() => setStep(2)} className="back-btn">
              ← Back
            </button>
            <h3>Proposer Details</h3>
            <input
              type="text"
              placeholder="First Name"
              value={formData.proposer.firstName}
              onChange={(e) =>
                handleChange("proposer", "firstName", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.proposer.lastName}
              onChange={(e) =>
                handleChange("proposer", "lastName", e.target.value)
              }
            />
            <input
              type="date"
              value={formData.proposer.dob}
              onChange={(e) => handleChange("proposer", "dob", e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={formData.proposer.mobile}
              onChange={(e) => handleChange("proposer", "mobile", e.target.value)}
            />
            <input
              type="text"
              placeholder="Occupation"
              value={formData.proposer.occupation}
              onChange={(e) =>
                handleChange("proposer", "occupation", e.target.value)
              }
            />

            <button onClick={() => setStep(5)} className="submit-btn">
              Next →
            </button>
          </div>
        )}

        {/* Step 5 – Self details */}
        {step === 4 && (
          <div className="form-container">
            <button onClick={() => setStep(3)} className="back-btn">
              ← Back
            </button>
            <h3>Self Details</h3>
            <input
              type="text"
              placeholder="Height (cm)"
              value={formData.self.height}
              onChange={(e) => handleChange("self", "height", e.target.value)}
            />
            <input
              type="text"
              placeholder="Weight (kg)"
              value={formData.self.weight}
              onChange={(e) => handleChange("self", "weight", e.target.value)}
            />
            <button onClick={() => setStep(4)} className="back-btn">
              ← Back
            </button>
            <button onClick={() => setStep(6)} className="submit-btn">
              Next →
            </button>
          </div>
        )}

        {/* Step 6 – Nominee details */}
        {step === 5 && (
          <div className="form-container">
            <button onClick={() => setStep(4)} className="back-btn">
              ← Back
            </button>
            <h3>Nominee Details</h3>
            <input
              type="text"
              placeholder="Name"
              value={formData.nominee.name}
              onChange={(e) =>
                handleChange("nominee", "name", e.target.value)
              }
            />
            <input
              type="date"
              value={formData.nominee.dob}
              onChange={(e) => handleChange("nominee", "dob", e.target.value)}
            />
            <select
              value={formData.nominee.relation}
              onChange={(e) =>
                handleChange("nominee", "relation", e.target.value)
              }
            >
              <option value="">Select Relation</option>
              <option value="spouse">Spouse</option>
              <option value="child">Child</option>
              <option value="parent">Parent</option>
            </select>

            
            {/* <button className="submit-btn">Proceed to Payment</button> */}
            <button onClick={() => setStep(6)} className="submit-btn">
              Next →
            </button>
          </div>
        )}
      </div>
    );
  }

  // ---------------- Main Cards ----------------
  return (
    <div className="services">
      {serviceType === "individual" && (
        <div className="big-health-card">
          <h3>Health</h3>
          <button onClick={() => setSelectedPlan("health")}>View Plans</button>
        </div>
      )}

      {serviceType === "corporate" && (
        <div className="big-health-card">
          <h3>Corporate Insurance Plans</h3>
          <p>Coming soon...</p>
        </div>
      )}
    </div>
  );
}

export default Services;
