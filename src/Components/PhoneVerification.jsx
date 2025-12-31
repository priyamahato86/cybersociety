import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const PhoneVerification = () => {
  const { user, sendPhoneOTP, verifyOTP, is2FAVerified } = useAuth();
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (is2FAVerified) {
      navigate("/challenges");
    }
  }, [user, is2FAVerified, navigate]);

  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) {
      setError("Please enter a valid phone number with country code (e.g., +911234567890)");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await sendPhoneOTP(phone);
      setIsOTPSent(true);
      alert("OTP sent to your phone!");
    } catch (error) {
      console.error("OTP send error:", error);
      setError(error.message || "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await verifyOTP(otp);
      alert("Phone verified successfully!");
      navigate("/challenges");
    } catch (error) {
      console.error("OTP verification error:", error);
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = () => {
    setIsOTPSent(false);
    setOTP("");
    setError("");
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ width: '100%', maxWidth: '28rem' }}>
        <div style={{
          background: 'linear-gradient(to bottom right, #1f2937, #111827)',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          padding: '2rem',
          border: '1px solid #374151'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              <span style={{ color: '#fff' }}>Phone </span>
              <span style={{ color: '#4ade80' }}>Verification</span>
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
              <span style={{ fontSize: '2.5rem' }}>📱</span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              Verify your phone number to complete login
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{
              background: '#7f1d1d',
              border: '1px solid #991b1b',
              color: '#fca5a5',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              fontSize: '0.875rem'
            }}>
              {error}
            </div>
          )}

          {/* Phone Input */}
          {!isOTPSent && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#4ade80'
                }}>📞</span>
                <input
                  type="tel"
                  placeholder="+911234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                  style={{
                    width: '100%',
                    background: '#1f2937',
                    color: '#fff',
                    border: '1px solid #4b5563',
                    borderRadius: '0.5rem',
                    padding: '0.75rem 0.75rem 0.75rem 3rem',
                    outline: 'none',
                    transition: 'all 0.2s',
                    opacity: loading ? 0.6 : 1
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4ade80'}
                  onBlur={(e) => e.target.style.borderColor = '#4b5563'}
                />
              </div>
              <button
                onClick={handleSendOTP}
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading ? '#22c55e' : '#4ade80',
                  color: '#111827',
                  fontWeight: '600',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  marginTop: '1rem',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  opacity: loading ? 0.7 : 1
                }}
                onMouseOver={(e) => !loading && (e.target.style.background = '#22c55e')}
                onMouseOut={(e) => !loading && (e.target.style.background = '#4ade80')}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </div>
          )}

          {/* OTP Input */}
          {isOTPSent && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#4ade80'
                }}>🔑</span>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  disabled={loading}
                  maxLength={6}
                  style={{
                    width: '100%',
                    background: '#1f2937',
                    color: '#fff',
                    border: '1px solid #4b5563',
                    borderRadius: '0.5rem',
                    padding: '0.75rem 0.75rem 0.75rem 3rem',
                    outline: 'none',
                    transition: 'all 0.2s',
                    opacity: loading ? 0.6 : 1
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4ade80'}
                  onBlur={(e) => e.target.style.borderColor = '#4b5563'}
                />
              </div>
              <button
                onClick={handleVerifyOTP}
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading ? '#22c55e' : '#4ade80',
                  color: '#111827',
                  fontWeight: '600',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  marginTop: '1rem',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  opacity: loading ? 0.7 : 1
                }}
                onMouseOver={(e) => !loading && (e.target.style.background = '#22c55e')}
                onMouseOut={(e) => !loading && (e.target.style.background = '#4ade80')}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              
              {/* Resend OTP */}
              <button
                onClick={handleResendOTP}
                disabled={loading}
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: '#4ade80',
                  fontWeight: '500',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  marginTop: '0.5rem',
                  border: '1px solid #4b5563',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  opacity: loading ? 0.5 : 1
                }}
              >
                Resend OTP
              </button>
            </div>
          )}

          <div id="recaptcha-container"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerification;