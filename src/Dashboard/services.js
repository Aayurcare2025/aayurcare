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
  // const [wellnessType, setWellnessType] = useState("");
  const [age, setAge] = useState("");
  const [premium, setPremium] = useState(null);
  const [IPDValue, setIPDValue] = useState("");
  const [AccidentValue, setAccidentValue] = useState("");
  const [OPDValue, setOPDValue] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneno] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [dependants, setDependants] = useState([]);

  // const handleDependantChange = (index, field, value) => {
  //   const updated = [...dependants];
  //   updated[index][field] = value;
  //   setDependants(updated);
  // };


  const handleDependantChange = (index, field, value) => {
  const updated = [...dependants];
  if (field === "age") {
    updated[index][field] = Number(value); // convert to number
  } else {
    updated[index][field] = value;
  }
  setDependants(updated);
};

  const addDependant = () => {
    setDependants([...dependants, { name: "", dob: "", age: "", relation: "" }]);
  };

  const removeDependant = (index) => {
    const updated = [...dependants];
    updated.splice(index, 1);
    setDependants(updated);
  };



 

  //
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





  //data has to be given:--

  //   const handleSubmit = async () => {
  //   const payload = {
  //     insured,
  //     product,
  //     wellnessType,
  //     age,
  //     preExisting,
  //     premium,
  //     totalSumInsured,
  //     IPDValue,
  //     OPDValue,
  //     AccidentValue,
  //     formData, // proposer, self, nominee
  //     pincode, // add a state for this
  //     email,   // add a state for this
  //     phone,   // add a state for this
  //   };


  //   try {
  //     const response = await fetch("https://api.aayurcare.com/health/apply  ", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     const result = await response.json();
  //     console.log("Saved Successfully:", result);
  //     alert("Your proposal is submitted!");
  //   } catch (err) {
  //     console.error("Error:", err);
  //     alert("Something went wrong!");
  //   }
  // };





  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();

    // append normal fields
    formDataObj.append("insured", insured);
    formDataObj.append("product", product);
    // formDataObj.append("wellnessType", wellnessType);
    formDataObj.append("age", age);
    formDataObj.append("preExisting", preExisting);
    formDataObj.append("premium", premium);
    formDataObj.append("totalSumInsured", totalSumInsured);
    formDataObj.append("IPDValue", IPDValue);
    formDataObj.append("OPDValue", OPDValue);
    formDataObj.append("AccidentValue", AccidentValue);
    formDataObj.append("pincode", pincode);
    formDataObj.append("email", email);
    formDataObj.append("phone", phonenumber);

    // append nested form data (convert to JSON string)
    formDataObj.append("formData", JSON.stringify(formData));

    // append file (example: Aadhaar photo)
    if (selectedFile) {
      formDataObj.append("file", selectedFile);

    }

    try {
      const response = await fetch("http://localhost:5000/health/apply", {
      //  const response = await fetch("http://localhost:5000/health/apply", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();
      console.log("response", response);
      console.log("Saved Successfully:", result);
      // alert("Your proposal is submitted!");
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  



//myself 


  // useEffect(() => {
  //   const fetchPremium = async () => {
  //     if (!age) return;

  //     try {
  //       let url = "";
  //       // if (product === "ipd-accident") {
  //       //   // ✅ IPD + Accident flow only
  //       //   if (!IPDValue || !AccidentValue) return; 
  //       //   url = `https://api.aayurcare.com/user/insurance/${IPDValue}/${AccidentValue}/${age}`;
  //       // } else if (!IPDValue || !AccidentValue || !OPDValue) return ;{
  //       //   url = `https://api.aayurcare.com/user/insurance/${IPDValue}/${AccidentValue}/${OPDValue}/${age}`;
  //       // }
  //       //https://api.aayurcare.com

  //       if (product === "ipd-accident") {
  //         if (!IPDValue || !AccidentValue) return;
  //         url = `http://localhost:5000/user/insurance/${IPDValue}/${AccidentValue}/${age}`;
  //       } else if (product === "opd-ipd-accident") {
  //         if (!IPDValue || !AccidentValue || !OPDValue) return;
  //         url = `http://localhost:5000/user/insurance/${IPDValue}/${AccidentValue}/${OPDValue}/${age}`;
  //       }


  //       // console.log("Fetching from:", url);

  //       const response = await fetch(url);


  //       if (!response.ok) throw new Error("Failed to fetch premium");
  //       const data = await response.json();

  //       // console.log("Premium Data:", data); 

  //       setPremium(data.premium);
  //       setTotalSumInsured(data.total_sum_insured);
  //     } catch (err) {
  //       // console.error("Error fetching premium:", err);
  //       setPremium(null);
  //       setTotalSumInsured(null);
  //     }
  //   };

  //   fetchPremium();
  // }, [product, IPDValue, AccidentValue, OPDValue, age]);



  // useEffect(() => {
  // // const getAllAges = () => {
  // //   let allAges = [Number(age)];
  // //   dependants.forEach(dep => {
  // //     if (dep.age) allAges.push(Number(dep.age));
  // //   });
  // //   return allAges;
  // // };



  //myself and family 
//   const fetchPremium = async () => {
//     if (!age) return;

//     const allAges = [Number(age), ...dependants.map(dep => Number(dep.age) || 0)];
//     console.log("allages",allAges);


//     const selfAge=Number(age);
//     const dependentsAges = dependants.map(dep => Number(dep.age)).filter(a => a > 0);
//     const dependentsParam = dependentsAges.join(",");

//     // const allAges = getAllAges();
//     // console.log("ages of all people",allAges);

//     try {
//       let url = "";

//       //tell me for myself i have commented okay,for myself and family  i t is working to do both simultaneously how i can do??
//       if (product === "ipd-accident") {
//         if (!IPDValue || !AccidentValue) return;
//         url = `http://localhost:5000/user/insurance/combinedIpdAnAccident/${IPDValue}/${AccidentValue}/${selfAge}/${dependentsParam}`;
//       } else if (product === "opd-ipd-accident") {
//         //ipd,opd,and accident:--
//         if (!IPDValue || !AccidentValue || !OPDValue) return;
//         // url = `https://api.aayurcare.com/user/insurance/combined/${IPDValue}/${AccidentValue}/${OPDValue}/${allAges.join(",")}`;
       
//   // url = `https://api.aayurcare.com/user/insurance/combined/${IPDValue}/${AccidentValue}/${OPDValue}/${allAges.join(",")}`;
//       // url = `http://localhost:5000/user/insurance/combined/${IPDValue}/${AccidentValue}/${OPDValue}/${allAges.join(",")}`;
//        url = `http://localhost:5000/user/insurance/combined/${IPDValue}/${AccidentValue}/${OPDValue}/${selfAge}/${dependentsParam}`;
//        //http://localhost:5000
//       }

      
//       //data has to been successfully completed:-

//       const response = await fetch(url);
//       if (!response.ok) throw new Error("Failed to fetch premium");
      
//       //fetch data:----
//       const data = await response.json();
//       console.log("data",data);
      
//      //setPremium(data.premium);
//       setPremium(data.total_annual_premium);
//       setTotalSumInsured(data.total_sum_insured);

//     } catch (err) {
//       setPremium(null);
//       setTotalSumInsured(null);
//     }
//   };

//   fetchPremium();
// }, [product, IPDValue, AccidentValue, OPDValue, age, dependants]);

useEffect(() => {
  const fetchPremium = async () => {
    if (!age) return;
    

    const selfAge = Number(age);
    const dependentsAges = dependants.map(dep => Number(dep.age)).filter(a => a > 0);
    const dependentsParam = dependentsAges.join(",");

    try {
      let url = "";

      if (insured === "Myself") {
        if (product === "ipd-accident") {
          if (!IPDValue || !AccidentValue) return;
          url = `https://api.aayurcare.com/user/insurance/${IPDValue}/${AccidentValue}/${selfAge}`;
        } else if (product === "opd-ipd-accident") {
          if (!IPDValue || !AccidentValue || !OPDValue) return;
          url = `http://localhost:5000/user/insurance/${IPDValue}/${AccidentValue}/${OPDValue}/${selfAge}`;
        }
        
      } else if (insured === "Myself and my family") {
        if (product === "ipd-accident") {
          if (!IPDValue || !AccidentValue) return;
          url = `https://api.aayurcare.com/user/insurance/combinedIpdAnAccident/${IPDValue}/${AccidentValue}/${selfAge}/${dependentsParam}`;
        } else if (product === "opd-ipd-accident") {
          if (!IPDValue || !AccidentValue || !OPDValue) return;
          url = `https://api.aayurcare.com/insurance/combined/${IPDValue}/${AccidentValue}/${OPDValue}/${selfAge}/${dependentsParam}`;
        }
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch premium");

      const data = await response.json();
      console.log("Premium Data:", data);

      setPremium(data.total_annual_premium || data.premium);
      setTotalSumInsured(data.total_sum_insured);
    } catch (err) {
      console.error(err);
      setPremium(null);
      setTotalSumInsured(null);
    }
  };

  fetchPremium();
}, [product, IPDValue, AccidentValue, OPDValue, age, dependants, insured]);
  






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
              // if (insured === "Myself") {
              //   setStep(2);
              // } else {
              //   setStep(3);
              // }
              setStep(2);

            }}





          >




            {/* <option value="ipd-accident"> IPD & Accident</option>
              <option value="opd-ipd-accident">OPD & IPD & Accident</option>
              <option value="accident">Accident</option> */}
            <label>I want to buy</label>
            <select value={product} onChange={(e) => setProduct(e.target.value)}>
              <option value="">Select</option>
              <option value="opd">OPD</option>
              
              {/* <option value="wellness">Wellness</option> */}
            </select>

            {/* {product === "wellness" && (
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
            )} */}

            <label>I’d like to subscribe </label>
            {/* <select value={insured} onChange={(e) => setInsured(e.target.value)}>
              <option value="">Select</option>
              <option>Myself</option>
              <option>Myself and my family</option>
              <option>Parents</option>
            </select> */}


            <select value={insured} onChange={(e) => setInsured(e.target.value)}>
              <option value="">Select</option>
              <option>Myself</option>
              <option>Myself and my family</option>
              <option>Family</option>
            </select>


            {/* <label>My pincode is {setPincode}</label>
            
            <input type="text" placeholder="Enter pincode" /> */}



            <label>My pincode </label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter pincode"
            />



            <label>I am</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" /> Male
              </label>
              <label>
                <input type="radio" name="gender" /> Female
              </label>
              <label>
                <input type="radio" name="gender" /> Others
              </label>
            </div>


            <label>My age is</label>
            <select value={age} onChange={(e) => setAge(e.target.value)}>
              <option>Select</option>
              {[...Array(65)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
            {/* <label>My email address is{setEmail}</label>
            <input type="email" placeholder="Email Address" /> */}

            <label>My email address is</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />

            {/* <label>My phone number is{setPhoneno}</label>
            <div className="phone-input">
              <span>+91</span>
              <input type="text" placeholder="Phone number" />
            </div> */}


            <label>My phone number is</label>
            <div className="phone-input">
              <span>+91</span>
              <input
                type="text"
                value={phonenumber}
                onChange={(e) => setPhoneno(e.target.value)}
                placeholder="Phone number"
              />
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
        {step === 6 && insured === "Myself" && (() => {
          
          return (
            <div className="form-container">
              <button onClick={() => setStep(4)} className="back-btn">
                ← Back
              </button>

              {product === "opd" && (
                <>
                  <select value={OPDValue} onChange={(e) => setOPDValue(e.target.value)}>
                    <option value="">Select OPD Plan</option>
                    <option value="essential">Essential Care</option>
                    <option value="wellness">Wellness Shield</option>
                    <option value="consult">Consult + Care</option>
                    <option value="radiant">Radiant Health</option>
                    <option value="lifeline">LifeLine Plus</option>
                    <option value="evercare">EverCare Infinity</option>
                    <option value="platinum">Platinum Horizon</option>


                  </select>

                  <div className="plans-grid">
                    {OPDValue === "essential" && (
                      <div className="plan-card">
                        <h4>Essential Care</h4>
                        <p>Total Coverage: ₹5,000</p>
                        <p>Annual Premium: ₹1,399</p>
                        <button
                          onClick={(e) => handleSubmit(e)}>
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

                          onClick={(e) => handleSubmit(e)}>

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
                          onClick={(e) => handleSubmit(e)}>
                          Buy Now
                        </button>
                      </div>
                    )}


                     
                    {OPDValue === "radiant" && (
                      <div className="plan-card">
                        <h4>Radiant Health</h4>
                        <p>Total Coverage: ₹23,000</p>
                        <p>Annual Premium: ₹7,250</p>
                        <button
                          onClick={(e) => handleSubmit(e)}>
                          Buy Now
                        </button>
                      </div>
                    )}


                    {OPDValue === "lifeline" && (
                      <div className="plan-card">
                        <h4>Lifeline Plus</h4>
                        <p>Total Coverage: ₹35,000</p>
                        <p>Annual Premium: ₹15,670</p>
                        <button
                          onClick={(e) => handleSubmit(e)}>
                          Buy Now
                        </button>
                      </div>
                    )}

                     
                    {OPDValue === "evercare" && (
                      <div className="plan-card">
                        <h4>Lifeline Plus</h4>
                        <p>Total Coverage: ₹37,000</p>
                        <p>Annual Premium: ₹17,170</p>
                        <button
                          onClick={(e) => handleSubmit(e)}>
                          Buy Now
                        </button>
                      </div>
                    )}


                     {OPDValue === "platinum" && (
                      <div className="plan-card">
                        <h4>Lifeline Plus</h4>
                        <p>Total Coverage: ₹50,000</p>
                        <p>Annual Premium: ₹21,625</p>
                        <button
                          onClick={(e) => handleSubmit(e)}>
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
                    <option value="8lakhs">800000</option>
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
                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>


                      </div>
                    )}

                    {AccidentValue === "4lakhs" && (
                      <div className="plan-card">
                        <p>Total Coverage:₹400000</p>
                        <p>Annual Premium:₹411</p>
                        <button



                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>
                      </div>
                    )}

                    {AccidentValue === "6lakhs" && (
                      <div className="plan-card">
                        <p>Total Coverage: ₹600000</p>
                        <p>Annual Premium: ₹521</p>
                        <button

                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>
                      </div>
                    )}

                    {AccidentValue === "8lakhs" && (
                      <div className="plan-card">
                        <p>Total Coverage: ₹800000</p>
                        <p>Annual Premium: ₹700</p>
                        <button

                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>
                      </div>
                    )}


                    {AccidentValue === "10lakhs" && (
                      <div className="plan-card">
                        <p>Total Coverage: ₹1000000</p>
                        <p>Annual Premium: ₹1000</p>
                        <button

                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>
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
              {["opd-ipd", "opd-ipd-accident", "ipd-accident"].includes(product) && (
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


              {["opd-ipd-accident", "ipd-accident"].includes(product) && (
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
                {product !== "opd" && product !== "accident" && (
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
                      // onClick={(handleSubmit)}


                      onClick={(e) => handleSubmit(e)}>


                      Buy Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })()}


        {/* Step 6 - Buy Page */}

{/* if clicked on myself and family then we need self age
and dependant age wise we  wil want coverage plan and 
annual premium :- accordance to age and data:-
//data wise:-
 */}

         {step === 6 && insured === "Myself and my family" && (() => {
          
          return (
            <div className="form-container">
              <button onClick={() => setStep(4)} className="back-btn">
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
                          onClick={(e) => handleSubmit(e)}>
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

                          onClick={(e) => handleSubmit(e)}>

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
                          onClick={(e) => handleSubmit(e)}>
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
                    <option value="8lakhs">800000</option>
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
                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>


                      </div>
                    )}

                    {AccidentValue === "4lakhs" && (
                      <div className="plan-card">
                        <p>Total Coverage:₹400000</p>
                        <p>Annual Premium:₹411</p>
                        <button



                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>
                      </div>
                    )}

                    {AccidentValue === "6lakhs" && (
                      <div className="plan-card">
                        <p>Total Coverage: ₹600000</p>
                        <p>Annual Premium: ₹521</p>
                        <button

                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>
                      </div>
                    )}

                    {AccidentValue === "8lakhs" && (
                      <div className="plan-card">
                        <p>Total Coverage: ₹800000</p>
                        <p>Annual Premium: ₹700</p>
                        <button

                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>
                      </div>
                    )}


                    {AccidentValue === "10lakhs" && (
                      <div className="plan-card">
                        <p>Total Coverage: ₹1000000</p>
                        <p>Annual Premium: ₹1000</p>
                        <button

                          onClick={(e) => handleSubmit(e)}>

                          Buy Now
                        </button>
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
              {["opd-ipd", "opd-ipd-accident", "ipd-accident"].includes(product) && (
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


              {["opd-ipd-accident", "ipd-accident"].includes(product) && (
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
                {product !== "opd" && product !== "accident" && (
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
                      // onClick={(handleSubmit)}


                      onClick={(e) => handleSubmit(e)}>


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



            <label>I am</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" /> Male
              </label>
              <label>
                <input type="radio" name="gender" /> Female
              </label>
              <label>
                <input type="radio" name="gender" /> Others
              </label>
            </div>

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
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />


            <button onClick={() => setStep(4)} className="submit-btn">
              Next →
            </button>
          </div>
        )}



        {/* Step 3 – Proposal Details (Family flow) */}
        
        {step === 3 && insured === "Myself and my family" && preExisting === "no" && (
          <div className="form-container">
            <button onClick={() => setStep(2)} className="back-btn">← Back</button>
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



            <label>I am</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" /> Male
              </label>
              <label>
                <input type="radio" name="gender" /> Female
              </label>
              <label>
                <input type="radio" name="gender" /> Others
              </label>
            </div>


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
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />

            <button onClick={() => setStep(4)} className="submit-btn">Next →</button>
          </div>
        )}

        {/* Step 4 – Dependants */}
        {step === 4 && insured === "Myself and my family" && preExisting === "no" && (
          <div className="form-container">
            <button onClick={() => setStep(3)} className="back-btn">← Back</button>
            <h3>Dependant Details</h3>

            

            {dependants.map((dep, index) => (
              <div key={index} className="dependant-card">
                <input
                  type="text"
                  placeholder="Name"
                  value={dep.name}
                  onChange={(e) => handleDependantChange(index, "name", e.target.value)}
                />
                <input
                  type="date"
                  value={dep.dob}
                  onChange={(e) => handleDependantChange(index, "dob", e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Age"
                  value={dep.age}
                  onChange={(e) => handleDependantChange(index, "age", e.target.value)}
                />

                <select
                  value={dep.relation}
                  onChange={(e) => handleDependantChange(index, "relation", e.target.value)}
                >
                  <option value="">Relation</option>
                  <option value="spouse">Spouse</option>
                  <option value="child">Child</option>
                  <option value="parent">Parent</option>
                </select>
                <button type="button" onClick={() => removeDependant(index)}>Remove</button>
              </div>
            ))}

            <button type="button" onClick={addDependant}>+ Add Dependant</button>
            <button onClick={() => setStep(6)} className="submit-btn">Next →</button>
          </div>
        )}



        

        {/* Step 5 – Buy */}











        {/* Step 4 - Self Details */}
        {step === 4 && insured === "Myself" && preExisting === "no" && (
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
        {/* {step === 5 && (
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
        )} */}




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


{/* this is wokring */}
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