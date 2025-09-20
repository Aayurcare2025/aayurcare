// import React, { useState } from "react";
// import "./App.css";
// import Career from "./Dashboard/Career"
// import Home from "./Dashboard/Home";
// import About from "./Dashboard/About";
// import Services from "./Dashboard/services";
// import SignUp from "./Dashboard/SignUp";
// import SignIn from "./Dashboard/SignIn";
// // import Aayurcareicon from "./images/aayuricon.jpg"
// import Contact from "./Dashboard/Contact";
// import Claims from "./Dashboard/Claims";
// import Complaint from "./Dashboard/Complaints";



// function App() {
//   const [page, setPage] = useState("home");
//   const [serviceType, setServiceType] = useState(null); 
//   // const [showDropdown, setShowDropdown] = useState(false);

//   const renderPage = () => {


//     if (page === "home") return <Home />;
//     //disable buttons
//     if (page === "about") return <About />;
//     if (page === "services") return <Services serviceType={serviceType} setServiceType={setServiceType} />;
//     if (page === "signup") return <SignUp setPage={setPage} />;
//     if (page === "signin") return <SignIn setPage={setPage} />;
//     if(page === "career") return <Career setPage={setPage}/>;
//     if(page==="contact") return <Contact/>;
//     if (page === "claims") return <Claims />;
//     if(page==="complaint") return <Complaint/>;
    

//   };

  

//   return (
//     <div className="App">
//       <ul className="navbar">
//          {/* <li className="logo">
//           <img src={Aayurcareicon} alt="Aayur Care" />
//         </li> */}

//         <li onClick={() => setPage("home")}>Home</li>
//         {/* <li onClick={() => setPage("about")}>About</li> */}
//         <li>About</li>

//         {/* Services with dropdown */}
//         {/* <li
//           className="dropdown"
//           onMouseEnter={() => setShowDropdown(true)}
//           onMouseLeave={() => setShowDropdown(false)}
//         >
//           Services ▾
//           {showDropdown && (
//             <ul className="dropdown-menu">

//               <li onClick={() => { setPage("services"); setServiceType("individual"); }}>Individual</li>
//               <li onClick={() => { setPage("services"); setServiceType("corporate"); }}>Corporate</li>
//             </ul>
//           )}
//         </li> */}
//       <li>Services</li>
//        <li>Claims</li>

//      {/* <li onClick={() => setPage("claims")}>Claims</li> */}

//        {/* <li onClick={() => setPage("career")}>Career</li>  */}
//        <li>Career</li>
//        {/* <li onClick={() => setPage("complaint")}>Complain</li>  */}
//        <li>Complain</li>
//         {/* <li>ContactUs</li> */}
//           {/* <li onClick={() => setPage("contact")}>Contact</li>  */}
//           <li>Contact</li>
//           <li>Sign In</li>
//           <li>Sign Out</li>
//         {/* <li onClick={() => setPage("signin")}>Sign In</li> */}
//         {/* <li onClick={() => setPage("signup")}>Sign Up</li> */}
     
//       </ul>

      
//       {/* Render content */}
//       <div>{renderPage()}</div>
//     </div>
//   );
// }

// export default App;
// // import React, { useState } from "react";
// // import "./App.css";
// // import Career from "./Dashboard/Career"
// // import Home from "./Dashboard/Home";
// // import About from "./Dashboard/About";
// // import Services from "./Dashboard/services";
// // import SignUp from "./Dashboard/SignUp";
// // import SignIn from "./Dashboard/SignIn";
// // import Aayurcareicon from "./Images/logo.png"
// // import Contact from "./Dashboard/Contact";
// // import Claims from "./Dashboard/Claims";
// // import Complaint from "./Dashboard/Complaints";



// // function App() {
// //   const [page, setPage] = useState("home");
// //   const [serviceType, setServiceType] = useState(null); 
// //   const [showDropdown, setShowDropdown] = useState(false);

// //   const renderPage = () => {


// //     if (page === "home") return <Home />;
// //     //disable buttons:-
// //     if (page === "about") return <About />;
// //     if (page === "services") return <Services serviceType={serviceType} setServiceType={setServiceType} />;
// //     if (page === "signup") return <SignUp setPage={setPage} />;
// //     if (page === "signin") return <SignIn setPage={setPage} />;
// //     if(page === "career") return <Career setPage={setPage}/>;
// //     if(page==="contact") return <Contact/>;
// //     if (page === "claims") return <Claims />;
// //     if(page==="complaint") return <Complaint/>;
    

// //   };

  

// //   return (
// //     <div className="App">
// //       <ul className="navbar">
// //          <li className="logo">
// //           <img src={Aayurcareicon} alt="Aayur Care" />
// //         </li>
// //         <li onClick={() => setPage("home")}>Home</li>
// //         <li onClick={() => setPage("about")}>About</li>

// //         {/* Services with dropdown */}
// //         <li
// //           className="dropdown"
// //           onMouseEnter={() => setShowDropdown(true)}
// //           onMouseLeave={() => setShowDropdown(false)}
// //         >
// //           Services ▾
// //           {showDropdown && (
// //             <ul className="dropdown-menu">
// //               <li onClick={() => { setPage("services"); setServiceType("individual"); }}>Individual</li>
// //               <li onClick={() => { setPage("services"); setServiceType("corporate"); }}>Corporate</li>
// //             </ul>
// //           )}
// //         </li>
// //       {/* <li>Services</li> */}

// //      <li onClick={() => setPage("claims")}>Claims</li>

// //        <li onClick={() => setPage("career")}>Career</li> 
    
// //        <li onClick={() => setPage("complaint")}>Complain</li> 
       
// //           <li onClick={() => setPage("contact")}>Contact</li> 

       
// //         <li onClick={() => setPage("signin")}>Sign In</li> 
// //          <li onClick={() => setPage("signup")}>Sign Up</li> 
     
// //       </ul>

      
// //       {/* Render content */}
// //       <div>{renderPage()}</div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import "./App.css";
// import Career from "./Dashboard/Career";
// import Home from "./Dashboard/Home";
// import About from "./Dashboard/About";
// import Services from "./Dashboard/services";
// import SignUp from "./Dashboard/SignUp";
// import SignIn from "./Dashboard/SignIn";
// import Aayurcareicon from "./Images/logo.png";
// import Contact from "./Dashboard/Contact";
// import Claims from "./Dashboard/Claims";
// import Complaint from "./Dashboard/Complaints";

// function App() {
//   const [page, setPage] = useState("home");
//   const [serviceType, setServiceType] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const renderPage = () => {
//     // Protect Services & Claims
//     if (!isLoggedIn && (page === "services" || page === "claims")) {
//       return <SignIn setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
//     }

//     if (page === "home") return <Home />;
//     if (page === "about") return <About />;
//     if (page === "services")
//       return (
//         <Services serviceType={serviceType} setServiceType={setServiceType} />
//       );
//     if (page === "signup")
//       return <SignUp setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
//     if (page === "signin")
//       return <SignIn setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
//     if (page === "career") return <Career setPage={setPage} />;
//     if (page === "contact") return <Contact />;
//     if (page === "claims") return <Claims />;
//     if (page === "complaint") return <Complaint />;

//     return <Home />;
//   };

//   return (
//     <div className="App">
//       <ul className="navbar">
//          {/* navbar starts here */}
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
//             // navbar ends here
//           )}
//         </li>

//         <li onClick={() => setPage("claims")}>Claims</li>
//         <li onClick={() => setPage("career")}>Career</li>
//         <li onClick={() => setPage("complaint")}>Complaints</li>
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
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";
import Career from "./Dashboard/Career";
import Home from "./Dashboard/Home";
import About from "./Dashboard/About";
import Services from "./Dashboard/services";
import SignUp from "./Dashboard/SignUp";   // ✅ Fix here
import SignIn from "./Dashboard/SignIn"; 
import Aayurcareicon from "./Images/1.png";
import Contact from "./Dashboard/Contact";
import Claims from "./Dashboard/Claims";
import Complaint from "./Dashboard/Complaints";

function App() {
  const [page, setPage] = useState("home");
  const [serviceType, setServiceType] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderPage = () => {
    // Show warning if not logged in
    if (!isLoggedIn && (page === "services" || page === "claims")) {
      return (
        <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
          ⚠️ Please sign in to access this section.
        </p>
      );
    }

    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    if (page === "services")
      return (
        <Services serviceType={serviceType} setServiceType={setServiceType} />
      );
    if (page === "signup")
      return <SignUp setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
    if (page === "signin")
      return <SignIn setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
    if (page === "career") return <Career setPage={setPage} />;
    if (page === "contact") return <Contact />;
    if (page === "claims") return <Claims />;
    if (page === "complaint") return <Complaint />;

    return <Home />;
  };

  return (
    <div className="App">
      <ul className="navbar">
        {/* navbar starts here */}
        <li className="logo">
          {/* brand logo  left side top in navbar*/}
          {/* <img src={Aayurcareicon} alt="Aayur Care" /> */}
        </li>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("about")}>About</li>

        {/* Services with dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Services ▾
          {showDropdown && (
            <ul className="dropdown-menu">
              <li
                onClick={() => {
                  setPage("services");
                  setServiceType("individual");
                }}
              >
                Individual
              </li>
              <li
                onClick={() => {
                  setPage("services");
                  setServiceType("corporate");
                }}
              >
                Corporate
              </li>
            </ul>
          )}
        </li>

        <li
          onClick={() => {
            setPage("claims");
          }}
        >
          Claims
        </li>
        <li onClick={() => setPage("career")}>Career</li>
        <li onClick={() => setPage("complaint")}>Complaints</li>
        <li onClick={() => setPage("contact")}>Contact</li>

        {!isLoggedIn ? (
          <>
            <li onClick={() => setPage("signin")}>Sign In</li>
            <li onClick={() => setPage("signup")}>Sign Up</li>
          </>
        ) : (
          <li
            onClick={() => {
              setIsLoggedIn(false);
              setPage("home");
            }}
          >
            Sign Out
          </li>
        )}
      </ul>

      {/* Render content */}
      <div>{renderPage()}</div>
    </div>
  );
}

export default App;
