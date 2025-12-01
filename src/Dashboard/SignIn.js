// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SignIn({ setPage, setIsLoggedIn }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleSignin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:2000/user/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message || "Login successful!");

//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }

        
//         // ✅ set login status
//         setIsLoggedIn(true);
//           //  navigate("/");  
//           navigate("/services/individual");

//         // ✅ redirect after login
//         // setPage("services");
//         // setPage("services")
//         // navigate("/services")
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (err) {
//       alert("Login failed: " + err.message);
//     }
//   };

//   return (
//     <section className="signin">
//       <h1>Sign In</h1>
//       <form onSubmit={handleSignin}>
//         <input
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
        

//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Sign In</button>
//       </form>


//  <div className="auth-right">
//       <h2>Hello, Friend!</h2>
//       <p>Enter your details and start your journey with us.</p>

//       <button className="signup-btn" onClick={() => navigate("/signup")}>
//         Sign Up
//       </button>
//     </div>

//     </section>
//   );
// }

// export default SignIn;


//--------------signin--------------


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.aayurcare.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Login successful!");

        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        setIsLoggedIn(true);
        navigate("/services/individual");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* LEFT SIDE - SIGN IN */}
        <div className="auth-left">
          <h2>Sign In</h2>

          <form onSubmit={handleSignin}>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />




            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* RIGHT SIDE - SIGN UP */}
        <div className="auth-right">
          <h2>Hello, Friend!</h2>
          <p>Enter your details and start your journey with us.</p>

          <button
            className="signup-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
}

export default SignIn;



