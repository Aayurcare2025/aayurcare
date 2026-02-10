import React, { useState } from 'react';
import { Shield, User, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";
export default function CorporateLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
const navigate = useNavigate();
  const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    handleSignin();
  }
};

const handleSignin = () => {
  if (!username || !password) {
    alert("Please fill in all fields");
    return;
  }

  setIsLoading(true);

  const demoUsername = "nambiarkirthana23";
  const demoPassword = "Kirthana@123";

  setTimeout(() => {
    if (username === demoUsername && password === demoPassword) {
      // alert("Login successful (Demo)");
        localStorage.setItem("authToken", "demo-token-123");
       navigate("/corporate-home");
    
    } else {
      alert("Invalid username or password");
    }
    setIsLoading(false);
  }, 800);
};



  

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      {/* Left Side - Image/Branding Section */}
      <div style={{
        width: '50%',
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '60px',
        color: 'white'
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2',
            paddingLeft:'20px',
            textAlign:'center'
          }}>
            Welcome to<br />
            <span style={{
              background: 'linear-gradient(to right, #fff, #e0f2fe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Aayur Care Corporate
            </span>
          </h1>
          
          <p style={{
            fontSize: '20px',
            marginBottom: '48px',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Secure Access to your Corporate Health Benefits Platform
          </p>

          {/* Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <CheckCircle2 style={{ width: '24px', height: '24px', flexShrink: 0, marginTop: '4px', color: '#86efac' }} />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
                  Track Reimbursements Instantly.
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <CheckCircle2 style={{ width: '24px', height: '24px', flexShrink: 0, marginTop: '4px', color: '#86efac' }} />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
                  Simplifying OPD Reimbursements for Corporates.
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <CheckCircle2 style={{ width: '24px', height: '24px', flexShrink: 0, marginTop: '4px', color: '#86efac' }} />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
                Faster Approvals. Zero Hassle.
                </h3>
              </div>
            </div>
           
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <CheckCircle2 style={{ width: '24px', height: '24px', flexShrink: 0, marginTop: '4px', color: '#86efac' }} />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
            Transparent, Secure, Efficient.
                </h3>
              </div>
            </div>


            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <CheckCircle2 style={{ width: '24px', height: '24px', flexShrink: 0, marginTop: '4px', color: '#86efac' }} />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
                Empowering Employee Health & Productivity.
                </h3>
              </div>
            </div>







          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }}>
        <div style={{ width: '100%', maxWidth: '450px' }}>
          {/* Login Card */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
            padding: '48px'
          }}>
            {/* Shield Icon */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '72px',
                height: '72px',
                background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)'
              }}>
                <Shield style={{ width: '40px', height: '40px', color: 'white' }} />
              </div>
            </div>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '8px'
              }}>
                Corporate Login
              </h1>
              <p style={{ fontSize: '15px', color: '#6b7280' }}>
                Enter your credentials to Access Your Account
              </p>
            </div>

            {/* Username Field */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '10px'
              }}>
                Username
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none'
                }}>
                  <User style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
                </div>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={handleKeyPress}
                  style={{
                    width: '100%',
                    paddingLeft: '44px',
                    paddingRight: '16px',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'all 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '10px'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none'
                }}>
                  <Lock style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  style={{
                    width: '100%',
                    paddingLeft: '44px',
                    paddingRight: '16px',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'all 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{
                    width: '18px',
                    height: '18px',
                    marginRight: '8px',
                    cursor: 'pointer',
                    accentColor: '#3b82f6'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#374151' }}>Remember me</span>
              </label>
              <button 
                onClick={() => alert('Password reset functionality')}
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#3b82f6',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0'
                }}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#3b82f6'}
              >
                Forgot password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleSignin}
              disabled={isLoading}
              style={{
                width: '100%',
                background: isLoading ? '#9ca3af' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: 'white',
                fontWeight: '600',
                padding: '15px',
                borderRadius: '10px',
                border: 'none',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '16px',
                transition: 'all 0.3s',
                boxShadow: '0 6px 20px rgba(59, 130, 246, 0.3)'
              }}
              onMouseOver={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                }
              }}
              onMouseOut={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.3)';
                }
              }}
            >
              {isLoading ? (
                <div style={{
                  width: '22px',
                  height: '22px',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '3px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight style={{ width: '20px', height: '20px' }} />
                </>
              )}
            </button>

            {/* Footer */}
            <div style={{ marginTop: '28px', textAlign: 'center', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>
                Don't have an account?{' '}
                <button 
                  onClick={() => alert('Contact your HR department')}
                  style={{
                    fontWeight: '600',
                    color: '#3b82f6',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#2563eb'}
                  onMouseOut={(e) => e.target.style.color = '#3b82f6'}
                >
                  Contact Admin
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 1024px) {
          .left-side { display: none !important; }
          .right-side { width: 100% !important; }
        }
      `}</style>
    </div>
  );
}