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


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SignIn({ setIsLoggedIn }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://api.aayurcare.com/user/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message || "Login successful!");

//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }

//         setIsLoggedIn(true);
//         navigate("/services/individual");
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (err) {
//       alert("Login failed: " + err.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">

//         {/* LEFT SIDE - SIGN IN */}
//         <div className="auth-left">
//           <h2>Sign In</h2>

//           <form onSubmit={handleSignin}>
//             <input
//               type="text"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />




//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <button type="submit">Sign In</button>
//           </form>
//         </div>

//         {/* RIGHT SIDE - SIGN UP */}
//         <div className="auth-right">
//           <h2>Hello, Friend!</h2>
//           <p>Enter your details and start your journey with us.</p>

//           <button
//             className="signup-btn"
//             onClick={() => navigate("/signup")}
//           >
//             Sign Up
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default SignIn;



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function SignIn({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Inject responsive styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.id = "signin-responsive-styles";
    styleSheet.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .signin-container {
        display: flex;
        min-height: 100vh;
        width: 100%;
        font-family: 'Segoe UI', sans-serif;
      }

      /* LEFT SIDE - SIGN IN FORM */
      .signin-left {
        flex: 1;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
      }

      .signin-form-wrapper {
        width: 100%;
        max-width: 400px;
      }

      .mobile-header {
        display: none;
        text-align: center;
        margin-bottom: 30px;
      }

      .mobile-logo {
        font-size: 28px;
        font-weight: 700;
        background: linear-gradient(135deg, #ff5e62, #ff9966);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 8px;
      }

      .mobile-tagline {
        font-size: 14px;
        color: #666;
      }

      .signin-title {
        font-size: 32px;
        font-weight: 700;
        color: #181e52;
        margin-bottom: 30px;
      }

      .signin-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .input-label {
        font-size: 14px;
        font-weight: 600;
        color: #333;
      }

      .signin-input {
        width: 100%;
        padding: 14px 16px;
        font-size: 16px;
        border: 2px solid #e0e0e0;
        border-radius: 10px;
        outline: none;
        transition: border-color 0.3s, box-shadow 0.3s;
      }

      .signin-input:focus {
        border-color: #ff5e62;
        box-shadow: 0 0 0 3px rgba(255, 94, 98, 0.1);
      }

      .signin-input::placeholder {
        color: #999;
      }

      .password-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }

      .password-input {
        width: 100%;
        padding: 14px 50px 14px 16px;
        font-size: 16px;
        border: 2px solid #e0e0e0;
        border-radius: 10px;
        outline: none;
        transition: border-color 0.3s, box-shadow 0.3s;
      }

      .password-input:focus {
        border-color: #ff5e62;
        box-shadow: 0 0 0 3px rgba(255, 94, 98, 0.1);
      }

      .eye-toggle {
        position: absolute;
        right: 14px;
        background: none;
        border: none;
        cursor: pointer;
        color: #666;
        display: flex;
        align-items: center;
        padding: 4px;
        transition: color 0.2s;
      }

      .eye-toggle:hover {
        color: #ff5e62;
      }

      .forgot-password {
        text-align: right;
        margin-top: -10px;
      }

      .forgot-link {
        font-size: 13px;
        color: #ff5e62;
        text-decoration: none;
        font-weight: 500;
      }

      .forgot-link:hover {
        text-decoration: underline;
      }

      .signin-btn {
        width: 100%;
        padding: 14px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        background: linear-gradient(135deg, #ff9966, #ff5e62);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        margin-top: 10px;
      }

      .signin-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 94, 98, 0.4);
      }

      .signin-btn:active {
        transform: translateY(0);
      }

      .mobile-signup-link {
        display: none;
        text-align: center;
        margin-top: 24px;
        font-size: 14px;
        color: #666;
      }

      .mobile-signup-link a {
        color: #ff5e62;
        font-weight: 600;
        text-decoration: none;
      }

      .mobile-signup-link a:hover {
        text-decoration: underline;
      }

      /* RIGHT SIDE - WELCOME PANEL */
      .signin-right {
        flex: 1;
        background: linear-gradient(135deg, #ff5e62 0%, #ff9966 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
        position: relative;
        overflow: hidden;
      }

      .signin-right::before {
        content: '';
        position: absolute;
        width: 300px;
        height: 300px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        top: -100px;
        right: -100px;
      }

      .signin-right::after {
        content: '';
        position: absolute;
        width: 200px;
        height: 200px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 50%;
        bottom: -50px;
        left: -50px;
      }

      .welcome-content {
        text-align: center;
        z-index: 1;
        max-width: 350px;
      }

      .welcome-title {
        font-size: 36px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 16px;
      }

      .welcome-text {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 30px;
        line-height: 1.6;
      }

      .signup-btn {
        padding: 14px 50px;
        font-size: 16px;
        font-weight: 600;
        color: #ff5e62;
        background: #fff;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .signup-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }

      /* ========== TABLET RESPONSIVE ========== */
      @media (max-width: 992px) {
        .signin-right {
          padding: 30px;
        }

        .welcome-title {
          font-size: 30px;
        }

        .welcome-text {
          font-size: 15px;
        }
      }

      /* ========== MOBILE RESPONSIVE ========== */
      @media (max-width: 768px) {
        .signin-container {
          flex-direction: column;
        }

        .signin-right {
          display: none !important;
        }

        .signin-left {
          flex: 1;
          min-height: 100vh;
          padding: 30px 20px;
          align-items: flex-start;
          padding-top: 60px;
        }

        .signin-form-wrapper {
          max-width: 100%;
        }

        .mobile-header {
          display: block;
        }

        .signin-title {
          font-size: 26px;
          text-align: center;
          margin-bottom: 25px;
        }

        .signin-input,
        .password-input {
          padding: 12px 14px;
        }

        .password-input {
          padding-right: 45px;
        }

        .signin-btn {
          padding: 13px;
        }

        .mobile-signup-link {
          display: block;
        }
      }

      /* ========== EXTRA SMALL DEVICES ========== */
      @media (max-width: 380px) {
        .signin-left {
          padding: 20px 16px;
          padding-top: 40px;
        }

        .mobile-logo {
          font-size: 24px;
        }

        .signin-title {
          font-size: 22px;
        }

        .signin-input,
        .password-input {
          padding: 11px 12px;
          font-size: 15px;
        }
      }
    `;

    if (!document.getElementById("signin-responsive-styles")) {
      document.head.appendChild(styleSheet);
    }

    return () => {
      const existingStyle = document.getElementById("signin-responsive-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

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
    <div className="signin-container">
      {/* LEFT SIDE - SIGN IN FORM */}
      <div className="signin-left">
        <div className="signin-form-wrapper">
          {/* Mobile Header - Only visible on mobile */}
          <div className="mobile-header">
            <div className="mobile-logo">🏥 Aayurcare</div>
            <p className="mobile-tagline">Your Health, Our Priority</p>
          </div>

          <h2 className="signin-title">Sign In</h2>

          <form className="signin-form" onSubmit={handleSignin}>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input
                type="email"
                className="signin-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="password-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="eye-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="forgot-password">
              <a href="/forgot-password" className="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>

          {/* Mobile Sign Up Link */}
          <p className="mobile-signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - WELCOME PANEL (Hidden on Mobile) */}
      <div className="signin-right">
        <div className="welcome-content">
          <h2 className="welcome-title">Hello, Friend!</h2>
          <p className="welcome-text">
            Enter your details and start your journey with us. Join thousands of happy users today!
          </p>
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
