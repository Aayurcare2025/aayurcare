// import React, { useState } from "react";
// import "../App.css";

// function Services({ serviceType }) {
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [step, setStep] = useState(1);

//   const [insured, setInsured] = useState("");
//   const [preExisting, setPreExisting] = useState(null);
//   const [product, setProduct] = useState("");
//   const [wellnessType, setWellnessType] = useState("");
// const [age, setAge] = useState("");

//   // const [familyMembers, setFamilyMembers] = useState([
//   //   { relation: "", age: "" },
//   // ]);

//   // const [sumInsured, setSumInsured] = useState("");
// // 
//   const[IPDValue,setIPDValue]=useState("")
//   const[AccidentValue,setAccidentValue]=useState("")
//   const[OPDValue,setOPDValue]=useState("")


//   // proposer / self / nominee details
//   const [formData, setFormData] = useState({
//     proposer: {
//       firstName: "",
//       lastName: "",
//       gender: "",
//       dob: "",
//       mobile: "",
//       occupation: "",
//     },
//     self: {
//       height: "",
//       weight: "",
//     },
//     nominee: {
//       name: "",
//       dob: "",
//       relation: "",
//     },
//   });

//   const handleChange = (section, field, value) => {
//     setFormData({
//       ...formData,
//       [section]: { ...formData[section], [field]: value },
//     });
//   };

 
//   // ---------------- Health Form ----------------
//   if (selectedPlan === "health") {
//     return (
//       <div className="health-form">
//         <h2 className="form-title">Health</h2>
//         <p className="form-subtitle">Complete your information</p>

//         {/* Step 1 */}
//         {step === 1 && (
//           <form
//             className="form-container"
//             onSubmit={(e) => {
//               e.preventDefault();
//               if (insured === "Myself" || insured === "Myself and my family") {
//                 setStep(2);
//               } else {
//                 setStep(3);
//               }
              
//             }}
//           >
//             <label>I want to buy</label>
//             <select value={product} onChange={(e) => setProduct(e.target.value)}>
//               <option value="">Select</option>
//               <option value="opd">OPD</option>
//               <option value="opd-ipd">OPD & IPD</option>
//               <option value="opd-ipd-accident">OPD & IPD & Accident</option>
//               <option value="accident">Accident</option>
//               <option value="wellness">Wellness</option>
//             </select>

//             {product === "wellness" && (
//               <>
//                 <label>Select Wellness Type</label>
//                 <select
//                   value={wellnessType}
//                   onChange={(e) => setWellnessType(e.target.value)}
//                 >
//                   <option value="">Select</option>
//                   <option value="radiology">Radiology</option>
//                   <option value="pathology">Pathology</option>
//                   <option value="ai-screening">AI Screening</option>
//                 </select>
//               </>
//             )}
//             <label>I’d like to insure</label>
//             <select value={insured} onChange={(e) => setInsured(e.target.value)}>
//               <option value="">Select</option>
//               <option>Myself</option>
//               <option>Myself and my family</option>
//               <option>Parents</option>
//             </select>

//             <label>My pincode is</label>
//             <input type="text" placeholder="Enter pincode" />

//             <label>I am</label>
//             <div className="radio-group">
//               <label>
//                 <input type="radio" name="gender" /> Male
//               </label>
//               <label>
//                 <input type="radio" name="gender" /> Female
//               </label>
//             </div>

//             <label>My age is</label>
          


//             <select value={age} onChange={(e) => setAge(e.target.value)}>
//   <option>Select</option>
//   {[...Array(83)].map((_, i) => (
//     <option key={i}>{i + 18}</option>
//   ))}
// </select>
//             <label>My email address is</label>
//             <input type="email" placeholder="Email Address" />

//             <label>My phone number is</label>
//             <div className="phone-input">
//               <span>+91</span>
//               <input type="text" placeholder="Phone number" />
//             </div>

//             <button type="submit" className="submit-btn">
//               Next →
//             </button>
//           </form>
//         )}

//         {/* Step 2 – Pre-existing diseases */}
//         {step === 2 && (
//           <div className="form-container">
//             <button onClick={() => setStep(1)} className="back-btn">
//               ← Back
//             </button>
//             <h3>Do you suffer from any pre-existing diseases?</h3>
//             <div className="radio-group">
//               <label>
//                 <input
//                   type="radio"
//                   name="disease"
//                   value="yes"
//                   checked={preExisting === "yes"}
//                   onChange={() => setPreExisting("yes")}
//                 />{" "}
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="disease"
//                   value="no"
//                   checked={preExisting === "no"}
//                   onChange={() => setPreExisting("no")}
//                 />{" "}
//                 No
//               </label>
//             </div>
//             <button onClick={() => setStep(3)} className="submit-btn">
//               Next →
//             </button>
//           </div>
//         )}


//     {step === 6 && (() => {
//   const cleanNumber = (val) =>
//     val ? parseInt(val.replace(/,/g, ""), 10) : 0;

//   const totalValue =

//     cleanNumber(IPDValue) +
//     cleanNumber(AccidentValue) +
//     cleanNumber(OPDValue);

//   // Hardcode premiums based on age
//   const getPremium = (age, totalValue) => {
//     if (totalValue === 305000)
// {
//     if (age < 20) return 5029;
//     if (age >= 21 && age <= 35) return 6559;
//     if (age >= 36 && age <= 45) return 7291;
//     if (age >= 46 && age <= 55) return 8979;
//     if (age >= 56 && age <= 60) return 12768;
//     if (age >= 61 && age <= 70) return 17096;
//     if (age >= 71 && age <= 80) return 21250;
//     if (age > 80) return 23807;

// }
// else  if(totalValue === 355000)
// {
//       if (age < 20) return 5647;
//     if (age >= 21 && age <= 35) return 7562;
//     if (age >= 36 && age <= 45) return 8557;
//     if (age >= 46 && age <= 55) return 11685 ;
//     if (age >= 56 && age <= 60) return 15168 ;
//     if (age >= 61 && age <= 70) return 210401;
//     if (age >= 71 && age <= 80) return 26104;
//     if (age > 80) return 30185;
// }
// else  if(totalValue ===  405000)
// {
//   if (age < 20) return 6356;
//     if (age >= 21 && age <= 35) return 8660  
//     if (age >= 36 && age <= 45) return 9735 
 
//     if (age >= 46 && age <= 55) return 13795 
 
//     if (age >= 56 && age <= 60) return 17644 
 
//     if (age >= 61 && age <= 70) return 24817 

//     if (age >= 71 && age <= 80) return 30700 

//     if (age > 80) return 35418;
// }
// else  if(totalValue === 455000)
// {
//   if (age < 20) return 6814;
//     if (age >= 21 && age <= 35) return 9351;
//     if (age >= 36 && age <= 45) return 10606;
//     if (age >= 46 && age <= 55) return 15630 ;
//     if (age >= 56 && age <= 60) return 19805 ;
//     if (age >= 61 && age <= 70) return 28241;
//     if (age >= 71 && age <= 80) return 34948;
//     if (age > 80) return 39822;
// }
// else  if(totalValue === 505000)
// {
//   if (age < 20) return 7236;
//     if (age >= 21 && age <= 35) return 9901;
//     if (age >= 36 && age <= 45) return 11451;
//     if (age >= 46 && age <= 55) return 17457 ;
//     if (age >= 56 && age <= 60) return 21853 ;
//     if (age >= 61 && age <= 70) return 31689;
//     if (age >= 71 && age <= 80) return 38973;
//     if (age > 80) return 44451;
// }
// else  if(totalValue === 555000)
// {
//   if (age < 20) return 7734;
//     if (age >= 21 && age <= 35) return 10525;
//     if (age >= 36 && age <= 45) return 12470;
//     if (age >= 46 && age <= 55) return 19398 ;
//     if (age >= 56 && age <= 60) return 24052 ;
//     if (age >= 61 && age <= 70) return 34331;
//     if (age >= 71 && age <= 80) return 42253;
//     if (age > 80) return 48222;
// }
// else  if(totalValue === 605000)
// {
//   if (age < 20) return 8041;
//     if (age >= 21 && age <= 35) return 10906;
//     if (age >= 36 && age <= 45) return 13150;
//     if (age >= 46 && age <= 55) return 21057 ;
//     if (age >= 56 && age <= 60) return 25788 ;
//     if (age >= 61 && age <= 70) return 36335;
//     if (age >= 71 && age <= 80) return 44576;
//     if (age > 80) return 50896;
// }
// else  if(totalValue === 655000)
// {
//   if (age < 20) return 8406;
//     if (age >= 21 && age <= 35) return 11280;
//     if (age >= 36 && age <= 45) return 13904;
//     if (age >= 46 && age <= 55) return 21925 ;
//     if (age >= 56 && age <= 60) return 27502 ;
//     if (age >= 61 && age <= 70) return 38311;
//     if (age >= 71 && age <= 80) return 46731;
//     if (age > 80) return 53374;
//   }
//   else  if(totalValue === 504000)
// {
//   if (age < 20) return 5200;
//     if (age >= 21 && age <= 35) return 6730;
//     if (age >= 36 && age <= 45) return 7462;
//     if (age >= 46 && age <= 55) return 9150 ;
//     if (age >= 56 && age <= 60) return 12939 ;
//     if (age >= 61 && age <= 70) return 17267;
//     if (age >= 71 && age <= 80) return 21421;
//     if (age > 80) return 23978;
//   }
//  else  if(totalValue === 554000)
// {
//   if (age < 20) return 5818;
//     if (age >= 21 && age <= 35) return 7734;
//     if (age >= 36 && age <= 45) return 8728;
//     if (age >= 46 && age <= 55) return 11856 ;
//     if (age >= 56 && age <= 60) return 15339 ;
//     if (age >= 61 && age <= 70) return 21212;
//     if (age >= 71 && age <= 80) return 26275;
//     if (age > 80) return 30356;
//   }
//    else  if(totalValue === 604000)
// {
//   if (age < 20) return 6527;
//     if (age >= 21 && age <= 35) return 8831;
//     if (age >= 36 && age <= 45) return 9906;
//     if (age >= 46 && age <= 55) return 13966
//     if (age >= 56 && age <= 60) return 17815 ;
//     if (age >= 61 && age <= 70) return 24988;
//     if (age >= 71 && age <= 80) return 30871;
//     if (age > 80) return 35589;
//   }
//  else  if(totalValue === 654000)
// {
//   if (age < 20) return 6986;
//     if (age >= 21 && age <= 35) return 9522;
//     if (age >= 36 && age <= 45) return 10777;
//     if (age >= 46 && age <= 55) return 15801 ;
//     if (age >= 56 && age <= 60) return 19977 ;
//     if (age >= 61 && age <= 70) return 28412;
//     if (age >= 71 && age <= 80) return 35119;
//     if (age > 80) return 39993;
//   }
//   else  if(totalValue === 704000)
// {
//   if (age < 20) return 7407;
//     if (age >= 21 && age <= 35) return 10072;
//     if (age >= 36 && age <= 45) return 11622;
//     if (age >= 46 && age <= 55) return 17628 ;
//     if (age >= 56 && age <= 60) return 22025 ;
//     if (age >= 61 && age <= 70) return 31860;
//     if (age >= 71 && age <= 80) return 39144;
//     if (age > 80) return 44622;
//   }
//    else  if(totalValue === 754000)
// {
//   if (age < 20) return 7905;
//     if (age >= 21 && age <= 35) return 10696;
//     if (age >= 36 && age <= 45) return 12642;
//     if (age >= 46 && age <= 55) return 19570 ;
//     if (age >= 56 && age <= 60) return 24224 ;
//     if (age >= 61 && age <= 70) return 34502;
//     if (age >= 71 && age <= 80) return 42424;
//     if (age > 80) return 48393;
//   }
//    else  if(totalValue === 804000)
// {
//   if (age < 20) return 8212;
//     if (age >= 21 && age <= 35) return 11078;
//     if (age >= 36 && age <= 45) return 13322;
//     if (age >= 46 && age <= 55) return 21228 ;
//     if (age >= 56 && age <= 60) return 25959 ;
//     if (age >= 61 && age <= 70) return 36506;
//     if (age >= 71 && age <= 80) return 44747;
//     if (age > 80) return 51067;
//   }
//    else  if(totalValue === 854000)
// {
//   if (age < 20) return 8577;
//     if (age >= 21 && age <= 35) return 11452;
//     if (age >= 36 && age <= 45) return 14075;
//     if (age >= 46 && age <= 55) return 22096 ;
//     if (age >= 56 && age <= 60) return 27673 ;
//       if (age >= 61 && age <= 70) return 38482;
//     if (age >= 71 && age <= 80) return 46902;
//     if (age > 80) return 53545;
//   }
//    else  if(totalValue === 904000)
// {
//   if (age < 20) return 8906;
//     if (age >= 21 && age <= 35) return 11752;
//     if (age >= 36 && age <= 45) return 14797;
//     if (age >= 46 && age <= 55) return 22911 ;
//     if (age >= 56 && age <= 60) return 29187 ;
//     if (age >= 61 && age <= 70) return 40340;
//     if (age >= 71 && age <= 80) return 49041;
//     if (age > 80) return 56003;
//   }
//    else  if(totalValue === 704500)
// {
//   if (age < 20) return 5372;
//     if (age >= 21 && age <= 35) return 6902;
//     if (age >= 36 && age <= 45) return 7633;
//     if (age >= 46 && age <= 55) return 9322 ;
//     if (age >= 56 && age <= 60) return 13110 ;
//     if (age >= 61 && age <= 70) return 17439;
//     if (age >= 71 && age <= 80) return 21592;
//     if (age > 80) return 24150;
//   }
//     else  if(totalValue === 754500)
// {
//   if (age < 20) return 5990;
//     if (age >= 21 && age <= 35) return 7905;
//     if (age >= 36 && age <= 45) return 8899;
//     if (age >= 46 && age <= 55) return 12028 ;
//     if (age >= 56 && age <= 60) return 15510 ;
//     if (age >= 61 && age <= 70) return 21383;
//     if (age >= 71 && age <= 80) return 26447;
//     if (age > 80) return 30528;
//   }
//      else  if(totalValue === 804500)
// {
//   if (age < 20) return 6698;
//     if (age >= 21 && age <= 35) return 9003;
//     if (age >= 36 && age <= 45) return 10077;
//     if (age >= 46 && age <= 55) return 14138 ;
//     if (age >= 56 && age <= 60) return 17986 ;
//     if (age >= 61 && age <= 70) return 25160;
//     if (age >= 71 && age <= 80) return 31042;
//     if (age > 80) return 35760;
//   }
//       else  if(totalValue === 854500)
// {
//   if (age < 20) return 7157;
//     if (age >= 21 && age <= 35) return 9694;
//     if (age >= 36 && age <= 45) return 10949;
//     if (age >= 46 && age <= 55) return 15972 ;
//     if (age >= 56 && age <= 60) return 20148 ;
//     if (age >= 61 && age <= 70) return 28584;
//     if (age >= 71 && age <= 80) return 35291;
//     if (age > 80) return 40165;
//   }
//       else  if(totalValue === 904500)
// {
//   if (age < 20) return 7578;
//     if (age >= 21 && age <= 35) return 10244;
//     if (age >= 36 && age <= 45) return 11793;
//     if (age >= 46 && age <= 55) return 17799 ;
//     if (age >= 56 && age <= 60) return 22196 ;
//     if (age >= 61 && age <= 70) return 32031;
//     if (age >= 71 && age <= 80) return 39315;
//     if (age > 80) return 39315;
//   }
//       else  if(totalValue === 954500)
// {
//   if (age < 20) return 8077;
//     if (age >= 21 && age <= 35) return 10867;
//     if (age >= 36 && age <= 45) return 12813;
//     if (age >= 46 && age <= 55) return 19741 ;
//     if (age >= 56 && age <= 60) return 24395 ;
//     if (age >= 61 && age <= 70) return 34673;
//     if (age >= 71 && age <= 80) return 42596;
//     if (age > 80) return 48564;
//   }
//       else  if(totalValue === 1004500)
// {
//   if (age < 20) return 8383;
//     if (age >= 21 && age <= 35) return 11249;
//     if (age >= 36 && age <= 45) return 13493;
//     if (age >= 46 && age <= 55) return 21400 ;
//     if (age >= 56 && age <= 60) return 26131 ;
//     if (age >= 61 && age <= 70) return 36678;
//     if (age >= 71 && age <= 80) return 44919;
//     if (age > 80) return 51238;
//   }
//       else  if(totalValue === 1104500)
// {
//   if (age < 20) return 9078;
//     if (age >= 21 && age <= 35) return 11923;
//     if (age >= 36 && age <= 45) return 14968;
//     if (age >= 46 && age <= 55) return  23083;
//     if (age >= 56 && age <= 60) return 29358 ;
//     if (age >= 61 && age <= 70) return 40511 ;
//     if (age >= 71 && age <= 80) return 49212;
//     if (age > 80) return 56174;
//   }
//         else  if(totalValue === 905000)
// {
//   if (age < 20) return 5543;
//     if (age >= 21 && age <= 35) return 7073;
//     if (age >= 36 && age <= 45) return 7805;
//     if (age >= 46 && age <= 55) return  9493;
//     if (age >= 56 && age <= 60) return  13281;
//     if (age >= 61 && age <= 70) return 17610;
//     if (age >= 71 && age <= 80) return 21764;
//     if (age > 80) return 24321;
//   }
//         else  if(totalValue === 955000)
// {
//   if (age < 20) return 6161;
//     if (age >= 21 && age <= 35) return 8076;
//     if (age >= 36 && age <= 45) return 9071;
//     if (age >= 46 && age <= 55) return  12199;
//     if (age >= 56 && age <= 60) return 15682 ;
//     if (age >= 61 && age <= 70) return 21555;
//     if (age >= 71 && age <= 80) return 26618;
//     if (age > 80) return 30699;
//   }
//         else  if(totalValue === 1005000)
// {
//   if (age < 20) return 6870;
//     if (age >= 21 && age <= 35) return 9174;
//     if (age >= 36 && age <= 45) return 10249;
//     if (age >= 46 && age <= 55) return  14309;
//     if (age >= 56 && age <= 60) return 18158 ;
//     if (age >= 61 && age <= 70) return 25331;
//     if (age >= 71 && age <= 80) return 31214;
//     if (age > 80) return 31214;
//   }
//         else  if(totalValue === 1055000)
// {
//   if (age < 20) return 7328;
//     if (age >= 21 && age <= 35) return 9865;
//     if (age >= 36 && age <= 45) return 11120;
//     if (age >= 46 && age <= 55) return  16144;
//     if (age >= 56 && age <= 60) return 20319 ;
//     if (age >= 61 && age <= 70) return 28755;
//     if (age >= 71 && age <= 80) return 35462;
//     if (age > 80) return 40336;
//   }
//          else  if(totalValue === 1105000)
// {
//   if (age < 20) return 7750;
//     if (age >= 21 && age <= 35) return 10415;
//     if (age >= 36 && age <= 45) return 11965;
//     if (age >= 46 && age <= 55) return  17971;
//     if (age >= 56 && age <= 60) return 22367 ;
//     if (age >= 61 && age <= 70) return 32203;
//     if (age >= 71 && age <= 80) return 39487;
//     if (age > 80) return 44965;
//   }
//          else  if(totalValue === 1155000)
// {
//   if (age < 20) return 8248;
//     if (age >= 21 && age <= 35) return 11039;
//     if (age >= 36 && age <= 45) return 12984;
//     if (age >= 46 && age <= 55) return  19912;
//     if (age >= 56 && age <= 60) return 24566 ;
//     if (age >= 61 && age <= 70) return 34845;
//     if (age >= 71 && age <= 80) return 42767;
//     if (age > 80) return 48736;
//   }

//          else  if(totalValue === 1205000)
// {
//   if (age < 20) return 8555;
//     if (age >= 21 && age <= 35) return 11420;
//     if (age >= 36 && age <= 45) return 13664;
//     if (age >= 46 && age <= 55) return  21571;
//     if (age >= 56 && age <= 60) return  26302;
//     if (age >= 61 && age <= 70) return 36849;
//     if (age >= 71 && age <= 80) return 45090;
//     if (age > 80) return 51410;
//   }

//          else  if(totalValue === 1255000)
// {
//   if (age < 20) return 8920;
//     if (age >= 21 && age <= 35) return 11794;
//     if (age >= 36 && age <= 45) return 14418;
//     if (age >= 46 && age <= 55) return  22439;
//     if (age >= 56 && age <= 60) return 28016 ;
//     if (age >= 61 && age <= 70) return 38825;
//     if (age >= 71 && age <= 80) return 47245;
//     if (age > 80) return 53888;
//   }

//          else  if(totalValue ===1305000 )
// {
//   if (age < 20) return 9249;
//     if (age >= 21 && age <= 35) return 12095;
//     if (age >= 36 && age <= 45) return 15139;
//     if (age >= 46 && age <= 55) return  23254;
//     if (age >= 56 && age <= 60) return 29530 ;
//     if (age >= 61 && age <= 70) return 40682;
//     if (age >= 71 && age <= 80) return 49383;
//     if (age > 80) return 56345;
//   }

//     else  if(totalValue ===1305000 )
// {
//   if (age < 20) return 9249;
//     if (age >= 21 && age <= 35) return 12095;
//     if (age >= 36 && age <= 45) return 15139;
//     if (age >= 46 && age <= 55) return  23254;
//     if (age >= 56 && age <= 60) return 29530 ;
//     if (age >= 61 && age <= 70) return 40682;
//     if (age >= 71 && age <= 80) return 49383;
//     if (age > 80) return 56345;
//   }
//       else  if(totalValue === 1103000)
// {
//   if (age < 20) return 6156;
//     if (age >= 21 && age <= 35) return 7686;
//     if (age >= 36 && age <= 45) return 8417;
//     if (age >= 46 && age <= 55) return  10106;
//     if (age >= 56 && age <= 60) return 13894 ;
//     if (age >= 61 && age <= 70) return 18223;
//     if (age >= 71 && age <= 80) return 22376;
//     if (age > 80) return 24934;
//   }
//         else  if(totalValue === 1153000)
// {
//   if (age < 20) return 6774;
//     if (age >= 21 && age <= 35) return 8689;
//     if (age >= 36 && age <= 45) return 9683;
//     if (age >= 46 && age <= 55) return  12812;
//     if (age >= 56 && age <= 60) return 16294 ;
//     if (age >= 61 && age <= 70) return 22167;
//     if (age >= 71 && age <= 80) return 27230;
//     if (age > 80) return 31312;
//   }
//        else  if(totalValue === 1203000)
// {
//   if (age < 20) return 7482;
//     if (age >= 21 && age <= 35) return 9787;
//     if (age >= 36 && age <= 45) return 10861;
//     if (age >= 46 && age <= 55) return  14922;
//     if (age >= 56 && age <= 60) return 18770 ;
//     if (age >= 61 && age <= 70) return 25944;
//     if (age >= 71 && age <= 80) return 31826;
//     if (age > 80) return 36544;
//   }
//          else  if(totalValue ===1253000 )
// {
//   if (age < 20) return 7941;
//     if (age >= 21 && age <= 35) return 10478;
//     if (age >= 36 && age <= 45) return 11733;
//     if (age >= 46 && age <= 55) return  16756;
//     if (age >= 56 && age <= 60) return 20932 ;
//     if (age >= 61 && age <= 70) return 29368;
//     if (age >= 71 && age <= 80) return 36074;
//     if (age > 80) return 40949;
//   }
//          else  if(totalValue === 1303000)
// {
//   if (age < 20) return 8362;
//     if (age >= 21 && age <= 35) return 11028;
//     if (age >= 36 && age <= 45) return 12577;
//     if (age >= 46 && age <= 55) return  18583;
//     if (age >= 56 && age <= 60) return 22980 ;
//     if (age >= 61 && age <= 70) return 32815;
//     if (age >= 71 && age <= 80) return 40099;
//     if (age > 80) return 45577;
//   }
//            else  if(totalValue === 1353000)
// {
//   if (age < 20) return 8860;
//     if (age >= 21 && age <= 35) return 11651;
//     if (age >= 36 && age <= 45) return 13597;
//     if (age >= 46 && age <= 55) return  20525;
//     if (age >= 56 && age <= 60) return 25179 ;
//     if (age >= 61 && age <= 70) return 35457;
//     if (age >= 71 && age <= 80) return 43380;
//     if (age > 80) return 49348;
//   }
//    else  if(totalValue === 1403000)
// {
//   if (age < 20) return 9167;
//     if (age >= 21 && age <= 35) return 12033;
//     if (age >= 36 && age <= 45) return 14277;
//     if (age >= 46 && age <= 55) return  22184;
//     if (age >= 56 && age <= 60) return  26915;
//     if (age >= 61 && age <= 70) return 37462;
//     if (age >= 71 && age <= 80) return 45703;
//     if (age > 80) return 52022;
//   }
//      else  if(totalValue ===1453000 )
// {
//   if (age < 20) return 9533;
//     if (age >= 21 && age <= 35) return 12407;
//     if (age >= 36 && age <= 45) return 15030;
//     if (age >= 46 && age <= 55) return  23052;
//     if (age >= 56 && age <= 60) return  28629;
//     if (age >= 61 && age <= 70) return 39437;
//     if (age >= 71 && age <= 80) return 47858;
//     if (age > 80) return 54501;
//   }
//       else  if(totalValue ===1503000 )
// {
//   if (age < 20) return 9862;
//     if (age >= 21 && age <= 35) return 12707;
//     if (age >= 36 && age <= 45) return 15752;
//     if (age >= 46 && age <= 55) return  23867;
//     if (age >= 56 && age <= 60) return  30142;
//     if (age >= 61 && age <= 70) return 41295;
//     if (age >= 71 && age <= 80) return 49996;
//     if (age > 80) return 56958;
//   }
  



// }



//   // You already have age input in Step 1
//   // For simplicity, capture age in state
//   // (Add this in your state: const [age, setAge] = useState("");)
//   const premium = getPremium(parseInt(age), totalValue);

//   return (
//     <div className="form-container">
//       <button onClick={() => setStep(5)} className="back-btn">
//         ← Back
//       </button>

//     {["ipd", "opd-ipd", "opd-ipd-accident"].includes(product) && (
//       <select value={IPDValue} onChange={(e) => setIPDValue(e.target.value)}>
//         <option value="">Select IPD Value</option>
//         <option value="100000">1,00,000 </option>
//         <option value="150000">1,50,000 </option>
//         <option value="200000">2,00,000 </option>
//         <option value="250000">2,50,000 </option>
//         <option value="300000">3,00,000 </option>
//         <option value="350000">3,50,000 </option>
//         <option value="400000">4,00,000 </option>
//         <option value="450000">4,50,000 </option>
//         <option value="500000">5,00,000 </option>
//         <option value="1000000">10,00,000 </option>
//       </select>
//     )}

//     {["accident", "opd-ipd-accident"].includes(product) && (
//       <select value={AccidentValue} onChange={(e) => setAccidentValue(e.target.value)}>
//         <option value="">Select Accident Value</option>
//         <option value="200000">2,00,000 </option>
//         <option value="400000">4,00,000 </option>
//         <option value="600000">6,00,000 </option>
//         <option value="800000">8,00,000 </option>
//         <option value="1000000">10,00,000 </option>
//       </select>
//     )}

//     {["opd", "opd-ipd", "opd-ipd-accident"].includes(product) && (
//       <select value={OPDValue} onChange={(e) => setOPDValue(e.target.value)}>
//         <option value="">Select OPD Value</option>
//         <option value="5000">5,000 </option>
//         <option value="4000">4,000 </option>
//         <option value="4500">4,500 </option>
//         <option value="3000">3,000 </option>
//       </select>
//     )}

// {/* hghghjhbjhngjh */}
//     <div className="plans-grid">
//       <div className="plan-card">
//         <h4>Medi Coverage </h4>
//         <p>Total Coverage: ₹{totalValue.toLocaleString()}</p>
//         <p>Annual Premium: {premium ? `₹${premium.toLocaleString()}` : ""}</p>
//         <button disabled={!premium} onClick={() => setStep(4)}>
//           Buy Now
//         </button>
//       </div>
//     </div>
//   </div>

      

      
//   );
// })()}



// {/* need to do when prexisting is yes  */}
//         {step === 3 && insured === "Myself"&& preExisting === "no" && (
//           <div className="form-container">
//             <button onClick={() => setStep(2)} className="back-btn">
//               ← Back
//             </button>
//             <h3>Proposer Details</h3>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={formData.proposer.firstName}
//               onChange={(e) =>
//                 handleChange("proposer", "firstName", e.target.value)
//               }
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={formData.proposer.lastName}
//               onChange={(e) =>
//                 handleChange("proposer", "lastName", e.target.value)
//               }
//             />g
//             <input
//               type="date"
//               value={formData.proposer.dob}
//               onChange={(e) => handleChange("proposer", "dob", e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Mobile Number"
//               value={formData.proposer.mobile}
//               onChange={(e) => handleChange("proposer", "mobile", e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Occupation"
//               value={formData.proposer.occupation}
//               onChange={(e) =>
//                 handleChange("proposer", "occupatixon", e.target.value)
//               }
//             />

//             <button onClick={() => setStep(5)} className="submit-btn">
//               Next →
//             </button>
//           </div>
//         )}

   
//         {step === 4 && (
//           <div className="form-container">
//             <button onClick={() => setStep(3)} className="back-btn">
//               ← Back
//             </button>
//             <h3>Self Details</h3>
//             <input
//               type="text"
//               placeholder="Height (cm)"
//               value={formData.self.height}
//               onChange={(e) => handleChange("self", "height", e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Weight (kg)"
//               value={formData.self.weight}
//               onChange={(e) => handleChange("self", "weight", e.target.value)}
//             />
//             <button onClick={() => setStep(4)} className="back-btn">
//               ← Back
//             </button>
//             <button onClick={() => setStep(6)} className="submit-btn">
//               Next →
//             </button>
//           </div>
//         )}

    
//         {step === 5 && (
//           <div className="form-container">
//             <button onClick={() => setStep(4)} className="back-btn">
//               ← Back
//             </button>
//             <h3>Nominee Details</h3>
//             <input
//               type="text"
//               placeholder="Name"
//               value={formData.nominee.name}
//               onChange={(e) =>
//                 handleChange("nominee", "name", e.target.value)
//               }
//             />
//             <input
//               type="date"
//               value={formData.nominee.dob}
//               onChange={(e) => handleChange("nominee", "dob", e.target.value)}
//             />
//             <select
//               value={formData.nominee.relation}
//               onChange={(e) =>
//                 handleChange("nominee", "relation", e.target.value)
//               }
//             >
//               <option value="">Select Relation</option>
//               <option value="spouse">Spouse</option>
//               <option value="child">Child</option>
//               <option value="parent">Parent</option>
//             </select>

            
//             {/* <button className="submit-btn">Proceed to Payment</button> */}
//             <button onClick={() => setStep(6)} className="submit-btn">
//               Next →
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }

//   // ---------------- Main Cards ----------------
//   return (
//     <div className="services">
//       {serviceType === "individual" && (
//         <div className="big-health-card">
//           <h3>Health</h3>
//           <button onClick={() => setSelectedPlan("health")}>View Plans</button>
//         </div>
//       )}

//       {serviceType === "corporate" && (
//         <div className="big-health-card">
//           <h3>Corporate Insurance Plans</h3>
//           <p>Coming soon...</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Services;

import React, { useState, useEffect } from "react";
import "../App.css";

function Services({ serviceType }) {
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

  // ✅ useEffect moved here (top level)
  // useEffect(() => {
  //   const fetchPremium = async () => {
  //     if (!age) return; // skip if age not selected
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5000/user/insurance/${IPDValue || 0}/${AccidentValue || 0}/${OPDValue || 0}/${age}`
  //       );
  //       if (!response.ok) throw new Error("Failed to fetch premium");
  //       const data = await response.json();
  //       setPremium(data.premium);
  //     } catch (err) {
  //       console.error("Error fetching premium:", err);
  //       setPremium(null);
  //     }
  //   };

  //   fetchPremium();
  // }, [IPDValue, AccidentValue, OPDValue, age]);

useEffect(() => {
  const fetchPremium = async () => {
    if (!age) return;

    try {
      let url = "";

      if (product === "ipd-accident") {
        // ✅ IPD + Accident flow only
        if (!IPDValue || !AccidentValue) return; 
        url = `https://api.aayurcare.com/user/insurance/${IPDValue}/${AccidentValue}/${age}`;
      } else {
        // ✅ Default flow (IPD + OPD + Accident)
        if (!IPDValue || !AccidentValue || !OPDValue) return;
        url = `https://api.aayurcare.com/user/insurance/${IPDValue}/${AccidentValue}/${OPDValue}/${age}`;
      }
      

      console.log("Fetching from:", url);

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch premium");
      const data = await response.json();

      console.log("Premium Data:", data); 

      setPremium(data.premium);
      setTotalSumInsured(data.total_sum_insured);
    } catch (err) {
      console.error("Error fetching premium:", err);
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
                <button onClick={() => alert("Proceed to Payment")}>
                  Buy Now
                </button>
              </div>
            )}

            {OPDValue === "wellness" && (
              <div className="plan-card">
                <h4>Wellness Shield</h4>
                <p>Total Coverage: ₹10,000</p>
                <p>Annual Premium: ₹2,499</p>
                <button onClick={() => alert("Proceed to Payment")}>
                  Buy Now
                </button>
              </div>
            )}

            {OPDValue === "consult" && (
              <div className="plan-card">
                <h4>Consult + Care</h4>
                <p>Total Coverage: ₹15,000</p>
                <p>Annual Premium: ₹3,799</p>
                <button onClick={() => alert("Proceed to Payment")}>
                  Buy Now
                </button>
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
              {["accident", "opd-ipd-accident","ipd-accident"].includes(product) && (
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

              {/* Plan Card */}
              {/* <div className="plans-grid">
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
                  <button
                    disabled={!premium}
                    onClick={() => alert("Proceed to Payment")}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })()} */}


        <div className="plans-grid">
  {product !== "opd" && (
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
      <button
        disabled={!premium}
        onClick={() => alert("Proceed to Payment")}
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
                handleChange("proposer", "occupatixon", e.target.value)
              }
            />

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
            <button onClick={() => setStep(4)} className="back-btn">
              ← Back
            </button>
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