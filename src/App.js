


// import React, { useState } from "react";
// import "./App.css";
// // import Career from "./Dashboard/Career";
// import Home from "./Dashboard/Home";
// import About from "./Dashboard/About";
// import Services from "./Dashboard/services";
// import SignUp from "./Dashboard/SignUp";  
// import SignIn from "./Dashboard/SignIn"; 
// import Aayurcareicon from "./Images/logo.png";
// import Contact from "./Dashboard/Contact";
// import Claims from "./Dashboard/Claims";
// import Complaint from "./Dashboard/Complaints";
// import WebisteTerms from "./Dashboard/webisteterms";
// import AayurcareTerms from "./Dashboard/Aayurcareterms";
// import RefundPolicy from "./Dashboard/RefundPolicy";
// import Disclaimer from "./Dashboard/Disclaimer";
// import GroupMedical from "./Dashboard/GroupMedical";
// import { Route,Routes } from "react-router-dom";
// function App() {
//   const [page, setPage] = useState("home");
//   const [serviceType, setServiceType] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [showWebsiteTerms, setShowWebsiteTerms] = useState(false);
// const[showAayurcareTerms,setShowAayurcareTerms]=useState(false);
// const[showRefundPolicy,setShowRefundPolicy]=useState(false);
// const[showDisclaimer,setShowDisclaimer]=useState(false);
// const[showSignUp,setShowSignUp] = useState(false);
//   // Function to render the appropriate page based on state 

//   const renderPage = () => {
//     // Show warning if not logged in

//       // if (showWebsiteTerms) return <WebisteTerms />;
//        if (showWebsiteTerms) return <WebisteTerms goBack={() => setShowWebsiteTerms(false)} />;
        
//        if(showAayurcareTerms) return <AayurcareTerms goBack={() => setShowAayurcareTerms(false)} />;

//        if(showRefundPolicy) return <RefundPolicy goBack={() => setShowRefundPolicy(false)} />;

//        if(showDisclaimer) return <Disclaimer goBack={() => setShowDisclaimer(false)} />;

//       //  if(showSignUp) return <SignUp goBack={() => setShowSignUp(false)} setPage={setPage} 
//       if(showSignUp) return <SignUp goBack={() => setShowSignUp(false)} setPage={setPage} setIsLoggedIn={setIsLoggedIn}
    
//         />;
       
    // if (!isLoggedIn && (page === "services" || page === "claims")) {
    //   return (
    //     <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
    //       ⚠️ Please sign in to access this section.
    //     </p>
    //   );
    // }

//     // if (page === "home") return <Home />;
//     if (page === "home") 
//       return <Home setPage={setPage} setShowWebsiteTerms={setShowWebsiteTerms}
//       setShowAayurcareTerms={setShowAayurcareTerms}
//       setShowRefundPolicy={setShowRefundPolicy}
//       setShowDisclaimer={setShowDisclaimer} 
//       setShowSignUp={setShowSignUp}
//      />;

//     if (page === "about") return <About />;
//     if (page === "services")
//       return (
//         <Services serviceType={serviceType} setServiceType={setServiceType} />
//       );
//     if (page === "signup")
//       return <SignUp setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
//     if (page === "signin")
//       return <SignIn setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
//     // if (page === "career") return <Career setPage={setPage} />;
//     if (page === "contact") return <Contact />;
//     if (page === "claims") return <Claims />;
//     if (page === "complaint") return <Complaint />;
//     // if(page==="websiteterms") return <WebisteTerms/>;
//     // if(page==="aayurcareterms") return <AayurcareTerms/>;
//     // if(page==="refundpolicy") return <RefundPolicy/>;
//     // if(page==="disclaimer") return <Disclaimer/>;
//     return <Home />;
//   };

//   return (
//     <div className="App">
//       <ul className="navbar">
//         {/* navbar starts here */}
//         <li className="logo">
//           {/* brand logo  left side top in navbar*/}
//           <img src={Aayurcareicon} alt="Aayur Care" />
//         </li>
//         <li onClick={() => setPage("home")}>Home</li>
//         <li onClick={() => setPage("about")}>About</li>

//         {/* Services with dropdown */}
//         <li
//           className="dropdown"
//           onMouseEnter={() => setShowDropdown(true)}
//           onMouseLeave={() => setShowDropdown(false)}
//         >
//           Services ▾
//           {showDropdown && (
//             <ul className="dropdown-menu">
//               <li
//                 onClick={() => {
//                   setPage("services");
//                   setServiceType("individual");
//                 }}
//               >
//                 Individual
//               </li>
//               <li
//                 onClick={() => {
//                   setPage("services");
//                   setServiceType("corporate");
//                 }}
//               >
//                 Corporate
//               </li>
//             </ul>
//           )}
//         </li>

//         <li
//           onClick={() => {
//             setPage("claims");
//           }}
//         >
//           Claims
//         </li>
//         {/* <li onClick={() => setPage("career")}>Career</li> */}
//         {/* <li onClick={() => setPage("complaint")}>Complaints</li> */}
//         <li onClick={() => setPage("contact")}>Contact</li>

//         {!isLoggedIn ? (
//           <>
//             <li onClick={() => setPage("signin")}>Sign In</li>
//             <li onClick={() => setPage("signup")}>Sign Up</li>
//           </>
//         ) : (
//           <li
//             onClick={() => {
//               setIsLoggedIn(false);
//               setPage("home");
//             }}
//           >
//             Sign Out
//           </li>
//         )}
//       </ul>


      

//       {/* Render content */}
//       <div>{renderPage()}</div>
//      <Routes>
//      < Route path="/groupmedical" element={< GroupMedical/>} />
//      </Routes>
//     </div>
//   );
// }
// export default App;
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./Dashboard/Home";  
import About from "./Dashboard/About";
import Services from "./Dashboard/services";
import SignUp from "./Dashboard/SignUp";    
import SignIn from "./Dashboard/SignIn"; 
import Aayurcareicon from "./Images/logo.png";      
import Contact from "./Dashboard/Contact";
import Claims from "./Dashboard/Claims";
import GroupMedical from "./Dashboard/GroupMedical";    
import WebsiteTerms from "./Dashboard/webisteterms";  
import AayurcareTermsAndCondition from "./Dashboard/Aayurcareterms";    
import RefundAndCancellation from "./Dashboard/RefundPolicy"; 
import Disclaimer from "./Dashboard/Disclaimer";      
import ProtectedRoute from "./Dashboard/ProtectedRoute";
// import CorporateOpd from  "./Dashboard/CorporateOpd"
import PrivacyPolicy from "./Dashboard/Privacypolicy";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [page, setPage] = useState("home");
  const navigate = useNavigate();
     console.log("Current page:", page);

  return (
    <div className="App">
      <ul className="navbar">
        <li className="logo">
         <img src={Aayurcareicon} alt="Aayur Care" />  </li>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        {/* <li className="dropdown">
          Services ▾
          <ul className="dropdown-menu">
            <li onClick={() => navigate("/services/individual")}>Individual</li>
            <li onClick={() => navigate("/services/corporate")}>Corporate</li>
          </ul>
        </li> */}


        <li
  className="dropdown"
  onMouseEnter={() => setShowDropdown(true)}
  onMouseLeave={() => setShowDropdown(false)}
>
  Services ▾
  {showDropdown && (
    <ul className="dropdown-menu">
      <li onClick={() => navigate("/services/individual")}>Individual</li>
      {/* <li onClick={() => navigate("/services/corporate")}>Corporate</li> */}
    </ul>
  )}
</li>
        <li onClick={() => navigate("/claims")}>OPD Claims</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        {!isLoggedIn ? (
          <>
            <li onClick={() => navigate("/signin")}>Sign In</li>
            <li onClick={() => navigate("/signup")}>Sign Up</li>
          </>
        ) : (
          <li onClick={() => setIsLoggedIn(false)}>Sign Out</li>
        )}
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services/:type" element={<Services />} />
        <Route path="/claims" element={<Claims />} /> */}
 <Route
    path="/services/:type"
    element={<Services/>}
    // element={
    //    <ProtectedRoute isLoggedIn={isLoggedIn}>
    //     <Services />
    //   </ProtectedRoute>
    // }
  />
    <Route
    path="/claims"
    element={
      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Claims />
      </ProtectedRoute>
    }
  />
        <Route path="/contact" element={<Contact />} />
        <Route path="/groupmedical" element={<GroupMedical />} />
        {/* <Route path="/CorporateOpd" element={<CorporateOpd/>} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/signup" element={<SignUp setPage={setPage} />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
         {/* <Route path="/signin" element={<SignIn   setPage={setPage} />} /> */}
         <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/websiteterms" element={<WebsiteTerms />} />
      <Route path="/aayurcaretermsandcondition" element={<AayurcareTermsAndCondition />} />
      <Route path="/refundandcancellation" element={<RefundAndCancellation />} />
      <Route path="/disclaimer" element={<Disclaimer />} />  
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
      </Routes>

      
    </div>
  );
}
export default App;
