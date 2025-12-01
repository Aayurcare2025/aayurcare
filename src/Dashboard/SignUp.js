import React, { useState } from 'react';
import { Eye, EyeOff, Heart, Shield, Users } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function AayurcareSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });



  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = () => {
  //   console.log('Account created:', formData);
  //   alert('Account created successfully!');
  // };


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://api.aayurcare.com/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
     
    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Error registering user");
      return;
    }

    alert("Registered Successfully!");
    console.log(data);


     navigate("/signin");

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong");
  }
};


  return (
    <div style={styles.container}>
      {/* Left Side - Welcome Section */}
      <div style={styles.leftSection}>
        <div style={styles.leftContent}>
          <h1 style={styles.welcomeTitle}>Welcome to Aayurcare</h1>
          <p style={styles.welcomeSubtitle}>Start Your Journey With Us.</p>
          
          <div style={styles.featuresContainer}>
            <div style={styles.feature}>
              <Heart size={24} color="#fff" />
              <span style={styles.featureText}>OPD Membership Plans</span>
            </div>
            <div style={styles.feature}>
              <Shield size={24} color="#fff" />
              <span style={styles.featureText}>Hassle Free Claims</span>
            </div>
            <div style={styles.feature}>
              <Users size={24} color="#fff" />
              <span style={styles.featureText}>Family Bundled Protection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Create Your Account</h2>
          <div style={styles.formDiv}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email "
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  style={styles.passwordInput}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button onClick={handleSubmit} style={styles.submitButton}>
              Create Account
            </button>

            {/* <p style={styles.loginText}>
              Already have an account? <a href="#" style={styles.loginLink}>Log In</a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  leftSection: {
    flex: 1,
    background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    position: 'relative',
    overflow: 'hidden',
  },
  leftContent: {
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '500px',
    marginTop: '-120px',
  },
  iconContainer: {
    marginBottom: '30px',
    animation: 'float 3s ease-in-out infinite',
  },
  welcomeTitle: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '16px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  welcomeSubtitle: {
    fontSize: '24px',
    color: '#f0f0f0',
    marginBottom: '50px',
    fontWeight: '300',
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginTop: '60px',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '16px 24px',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
  },
  featureText: {
    fontSize: '18px',
    color: '#fff',
    fontWeight: '500',
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: '#f8f9fa',
  },
  formContainer: {
    width: '100%',
    maxWidth: '450px',
    backgroundColor: '#fff',
    padding: '50px 40px',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  },
  formTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '8px',
  },
  formSubtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '40px',
  },
  formDiv: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '16px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  passwordInput: {
    width: '100%',
    padding: '14px 50px 14px 16px',
    fontSize: '16px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  },
  eyeButton: {
    position: 'absolute',
    right: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    transition: 'color 0.2s',
  },
  submitButton: {
    width: '100%',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '16px',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  loginText: {
    textAlign: 'center',
    marginTop: '24px',
    fontSize: '14px',
    color: '#666',
  },
  loginLink: {
    color: '#0891b2',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

// Add CSS animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  input:focus {
    border-color: #0891b2 !important;
  }
  
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(8, 145, 178, 0.4);
  }
  
  a:hover {
    text-decoration: underline;
  }
`;
document.head.appendChild(styleSheet);