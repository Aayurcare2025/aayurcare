import React, { useState, useEffect } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Services() {
    const navigate = useNavigate();
      const { type } = useParams(); // "individual" or "corporate"
  const serviceType = type;
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [step, setStep] = useState(1);
  const [totalSumInsured, setTotalSumInsured] = useState(null);
  const [insured, setInsured] = useState("");
  const [preExisting, setPreExisting] = useState(null);
  const [product, setProduct] = useState("");
  const [wellnessType, setWellnessType] = useState("");
  const [age, setAge] = useState("");
  const [premium, setPremium] = useState(null);

  const [IPDValue, setIPDValue] = useState("");
  const [AccidentValue, setAccidentValue] = useState("");
  const [OPDValue, setOPDValue] = useState("");
const[pincode,setPincode]=useState("");
const[email,setEmail]=useState("");
const[phone,setPhoneno]=useState("");

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



  const handleSubmit = async () => {
  const payload = {
    insured,
    product,
    wellnessType,
    age,
    preExisting,
    premium,
    totalSumInsured,
    IPDValue,
    OPDValue,
    AccidentValue,
    formData, // proposer, self, nominee
    pincode, // add a state for this
    email,   // add a state for this
    phone,   // add a state for this
  };

  
  try {
    const response = await fetch("https://api.aayurcare.com/insurance/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log("Saved Successfully:", result);
    alert("Your proposal is submitted!");
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong!");
  }
};


useEffect(() => {
  const fetchPremium = async () => {
    if (!age) return;

    try {
      let url = "";

      // if (product === "ipd-accident") {
      //   // ✅ IPD + Accident flow only
      //   if (!IPDValue || !AccidentValue) return; 
      //   url = `https://api.aayurcare.com/user/insurance/${IPDValue}/${AccidentValue}/${age}`;
      // } else if (!IPDValue || !AccidentValue || !OPDValue) return ;{
      //   url = `https://api.aayurcare.com/user/insurance/${IPDValue}/${AccidentValue}/${OPDValue}/${age}`;
      // }


      if (product === "ipd-accident") {
  if (!IPDValue || !AccidentValue) return;
  url = `https://api.aayurcare.com/user/insurance/${IPDValue}/${AccidentValue}/${age}`;
} else if (product === "opd-ipd-accident") {
  if (!IPDValue || !AccidentValue || !OPDValue) return;
  url = `https://api.aayurcare.com/user/insurance/${IPDValue}/${AccidentValue}/${OPDValue}/${age}`;
}


      // console.log("Fetching from:", url);

      const response = await fetch(url);

      
      if (!response.ok) throw new Error("Failed to fetch premium");
      const data = await response.json();

      // console.log("Premium Data:", data); 

      setPremium(data.premium);
      setTotalSumInsured(data.total_sum_insured);
    } catch (err) {
      // console.error("Error fetching premium:", err);
      setPremium(null);
      setTotalSumInsured(null);
    }
  };

  fetchPremium();
}, [product, IPDValue, AccidentValue, OPDValue, age]);



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
              <option value="ipd-accident"> IPD & Accident</option>
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

            <label>My pincode is {setPincode}</label>
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
            <label>My email address is{setEmail}</label>
            <input type="email" placeholder="Email Address" />

            <label>My phone number is{setPhoneno}</label>
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

        {/* Step 6 - Buy Page */}
        {step === 6 && (() => {
          // const cleanNumber = (val) =>
          //   val ? parseInt(val.replace(/,/g, ""), 10) : 0;

          // const totalValue =
          //   cleanNumber(IPDValue) +
          //   cleanNumber(AccidentValue) +
          //   cleanNumber(OPDValue);

          return (
            <div className="form-container">
              <button onClick={() => setStep(5)} className="back-btn">
                ← Back
              </button>

{product === "opd" && (
        <>
          <select value={OPDValue} onChange={(e) => setOPDValue(e.target.value)}>
            <option value="">Select OPD Plan</option>
            <option value="essential">Essential Care</option>
            <option value="wellness">Wellness Shield</option>
            <option value="consult">Consult + Care</option>
          </select>

          <div className="plans-grid">
            {OPDValue === "essential" && (
              <div className="plan-card">
                <h4>Essential Care</h4>
                <p>Total Coverage: ₹5,000</p>
                <p>Annual Premium: ₹1,399</p>
                <button
                //  onClick={() => alert("Proceed to Payment")}>
                     onClick={(handleSubmit)}>
                  Buy Now
                </button>
              </div>
            )}

            {OPDValue === "wellness" && (
              <div className="plan-card">
                <h4>Wellness Shield</h4>
                <p>Total Coverage: ₹10,000</p>
                <p>Annual Premium: ₹2,499</p>
                <button 
                // onClick={() => alert("Proceed to Payment")}>
                    onClick={(handleSubmit)}>
                  Buy Now
                </button>
              </div>
            )}

            {OPDValue === "consult" && (
              <div className="plan-card">
                <h4>Consult + Care</h4>
                <p>Total Coverage: ₹15,000</p>
                <p>Annual Premium: ₹3,799</p>
                <button 
                // onClick={() => alert("Proceed to Payment")}>
                    onClick={(handleSubmit)}>
                  Buy Now
                </button>
              </div>
            )}
             </div>
        </>
      )}



{product === "accident" && (
        <>
          <select value={AccidentValue} onChange={(e) => setAccidentValue(e.target.value)}>
            <option value="">Select Accident Plan</option>
            <option value="2lakhs">200000</option>
            <option value="4lakhs">400000</option>
            <option value="6lakhs">600000</option>
            <option  value="8lakhs">800000</option>
            <option value="10lakhs">1000000</option>
            <option value="20lakhs">2000000</option>
            <option value="25lakhs">2500000</option>
          </select>

          <div className="plans-grid">
            {AccidentValue === "2lakhs" && (
              <div className="plan-card">
                <p>Total Coverage: ₹200000</p>
                <p>Annual Premium: ₹172</p>
                <button 
                // onClick={() => alert("Proceed to Payment")}>
                    onClick={(handleSubmit)}>
                  Buy Now
                </button>

                
              </div>
            )}

            {AccidentValue === "4lakhs" && (
              <div className="plan-card">
                <p>Total Coverage:₹400000</p>
                <p>Annual Premium:₹411</p>
                <button 
                // onClick={() => alert("Proceed to Payment")}>
                  onClick={(handleSubmit)}>
                  Buy Now
                </button>
              </div>
            )}

            {AccidentValue === "6lakhs" && (
              <div className="plan-card">
                <p>Total Coverage: ₹600000</p>
                <p>Annual Premium: ₹521</p>
                <button 
                // onClick={() => alert("Proceed to Payment")}>
                  onClick={(handleSubmit)}>
                  Buy Now
                </button> 
              </div>
            )}

            {AccidentValue === "8lakhs" && (
              <div className="plan-card">
                <p>Total Coverage: ₹800000</p>    
                <p>Annual Premium: ₹700</p>
                <button
                //  onClick={() => alert("Proceed to Payment")}>
                  onClick={(handleSubmit)}>        
                  Buy Now
                </button>
              </div>
            )}  


            {AccidentValue === "10lakhs" && (            
              <div className="plan-card">
                <p>Total Coverage: ₹1000000</p>
                <p>Annual Premium: ₹1000</p>           
                <button 
                // onClick={() => alert("Proceed to Payment")}>
                  onClick={(handleSubmit)}>
                  Buy Now
                </button>
              </div>
            )}


              {AccidentValue === "20lakhs" && (            
              <div className="plan-card">    
                <button>Get a Quote</button>
              </div>
            )}



               {AccidentValue === "20lakhs" && (            
              <div className="plan-card">    
                <button>Get a Quote</button>
              </div>
            )}

             </div>


             




        </>
      )}





              

              {/* OPD Dropdown */}
              {["opd-ipd", "opd-ipd-accident"].includes(product) && (
                <select value={OPDValue} onChange={(e) => setOPDValue(e.target.value)}>
                  <option value="">Select OPD Value</option>
                  <option value="5000">5,000</option>
                </select>
              )}

              {/* IPD Dropdown */}
              {["opd-ipd", "opd-ipd-accident","ipd-accident"].includes(product) && (
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
                  {/* <option value="1000000">10,00,000 </option> */}
                </select>
              )}

              {/* Accident Dropdown */}


              {[ "opd-ipd-accident","ipd-accident"].includes(product) && (
                <select
                  value={AccidentValue}
                  onChange={(e) => setAccidentValue(e.target.value)}
                >
                  <option value="">Select Accident Value</option>
                  <option value="200000">2,00,000 </option>
                  <option value="400000">4,00,000 </option>
                  <option value="600000">6,00,000 </option>
                  <option value="800000">8,00,000 </option>
                  <option value="1000000">10,00,000 </option>
                </select>
              )}

             


        <div className="plans-grid">
  {product !== "opd"    && product!=="accident" && (
    <div className="plan-card">
      <h4>Medi Coverage</h4>
      <p>
        Total Coverage: ₹
        {totalSumInsured
          ? totalSumInsured.toLocaleString()
          : "Select values to calculate"}
      </p>

      <p>
        Annual Premium:{" "}
        {premium
          ? `₹${premium.toLocaleString()}`
          : "Select values to calculate"}
      </p>

    {/* ---------------------------testing----------------------- */}
      <button
        disabled={!premium}
        // onClick={() => alert("Proceed to Payment")}
        onClick={(handleSubmit)}
      >
        Buy Now
      </button>
    </div>
  )}
</div>
</div>
);
})()}


        {/* Step 3 - Proposal */}
        {step === 3 && insured === "Myself" && preExisting === "no" && (
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
              placeholder="Enter Date of Birth"
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



              <label>Upload Documents</label>
          <input type="file" multiple />


            <button onClick={() => setStep(5)} className="submit-btn">
              Next →
            </button>
          </div>
        )}

        {/* Step 4 - Self Details */}
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
            {/* <button onClick={() => setStep(4)} className="back-btn">
              ← Back
            </button> */}
            <button onClick={() => setStep(6)} className="submit-btn">
              Next →
            </button>
          </div>
        )}

        {/* Step 5 - Nominee */}
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

      {/* {serviceType === "corporate" && (
        <div className="big-health-card">
          <h3>Corporate Insurance Plans</h3>
         <button >Get a Quote</button>
           <br></br>
      
<button onClick={() => {
  setSelectedPlan(null); 
  navigate("/groupmedical");
}}>
  Group Medical
</button>
         <button>Opd</button>
        </div>
      )} */}


  {serviceType === "corporate" && (
  <div className="big-health-card">
    <h3>Corporate Insurance Plans</h3>
    
    {/* State to show/hide options */}
    <button onClick={() => setSelectedPlan("corporate-options")}>
      Get a Quote
    </button>
    <br></br>
    {selectedPlan === "corporate-options" && (
      <div className="quote-options">
        <button
          onClick={() => {
            setSelectedPlan(null);
            navigate("/groupmedical");
          }}
        >
          Group Medical
        </button>

        <button
          onClick={() => {
            setSelectedPlan("corporate-opd-options");
            navigate("/CorporateOpd");
          }}
        >
          OPD
        </button>
      </div>
    )}



     {/* State to show/hide options */}
    {/* <button onClick={() => setSelectedPlan("corporate-opd-options")}>
      OPD
    </button>
    <br></br> */}
    {/* {selectedPlan === "corporate-opd-options" && (
      <div className="quote-options">
        <button
          onClick={() => {
            setSelectedPlan(null);
            navigate("/CorporateIndividualOpd");
          }}
        >
          Individual OPD
        </button>

        <button
          onClick={() => {
            setSelectedPlan(null);
           
          }}
        >
          Group OPD
        </button>
      </div>
    )} */}







  </div>
)}

    </div>
  );
}

export default Services;