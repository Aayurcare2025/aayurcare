import React, { useState } from "react";
import "./App.css";
import Career from "./Dashboard/Career"
import Home from "./Dashboard/Home";
import About from "./Dashboard/About";
import Services from "./Dashboard/services";
import SignUp from "./Dashboard/SignUp";
import SignIn from "./Dashboard/SignIn";
// import Aayurcareicon from "./images/aayuricon.jpg"
import Contact from "./Dashboard/Contact";
import Claims from "./Dashboard/Claims";
import Complaint from "./Dashboard/Complaints";



function App() {
  const [page, setPage] = useState("home");
  const [serviceType, setServiceType] = useState(null); 
  // const [showDropdown, setShowDropdown] = useState(false);

  const renderPage = () => {


    if (page === "home") return <Home />;
    //disable buttons
    if (page === "about") return <About />;
    if (page === "services") return <Services serviceType={serviceType} setServiceType={setServiceType} />;
    if (page === "signup") return <SignUp setPage={setPage} />;
    if (page === "signin") return <SignIn setPage={setPage} />;
    if(page === "career") return <Career setPage={setPage}/>;
    if(page==="contact") return <Contact/>;
    if (page === "claims") return <Claims />;
    if(page==="complaint") return <Complaint/>;
    

  };

  

  return (
    <div className="App">
      <ul className="navbar">
         {/* <li className="logo">
          <img src={Aayurcareicon} alt="Aayur Care" />
        </li> */}

        <li onClick={() => setPage("home")}>Home</li>
        {/* <li onClick={() => setPage("about")}>About</li> */}
        <li>About</li>

        {/* Services with dropdown */}
        {/* <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Services ▾
          {showDropdown && (
            <ul className="dropdown-menu">

              <li onClick={() => { setPage("services"); setServiceType("individual"); }}>Individual</li>
              <li onClick={() => { setPage("services"); setServiceType("corporate"); }}>Corporate</li>
            </ul>
          )}
        </li> */}
      <li>Services</li>
       <li>Claims</li>

     {/* <li onClick={() => setPage("claims")}>Claims</li> */}

       {/* <li onClick={() => setPage("career")}>Career</li>  */}
       <li>Career</li>
       {/* <li onClick={() => setPage("complaint")}>Complain</li>  */}
       <li>Complain</li>
        {/* <li>ContactUs</li> */}
          {/* <li onClick={() => setPage("contact")}>Contact</li>  */}
          <li>Contact</li>
          <li>Sign In</li>
          <li>Sign Out</li>
        {/* <li onClick={() => setPage("signin")}>Sign In</li> */}
        {/* <li onClick={() => setPage("signup")}>Sign Up</li> */}
     
      </ul>

      
      {/* Render content */}
      <div>{renderPage()}</div>
    </div>
  );
}

export default App;
