// src/Components/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const { login, user, is2FAVerified } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect logic based on auth and 2FA state
  useEffect(() => {
    if (user && !is2FAVerified) navigate("/verify-phone");
    else if (user && is2FAVerified) navigate("/challenges");
  }, [user, is2FAVerified, navigate]);

  // Email/password login
  const handleEmailLogin = async () => {
    try {
      setLoading(true);
      await login(email, password);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      // user state updates automatically via AuthContext
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem"
    }}>
      <div style={{ width: "100%", maxWidth: "28rem" }}>
        <div style={{
          background: "linear-gradient(to bottom right, #1f2937, #111827)",
          borderRadius: "1rem",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
          padding: "2rem",
          border: "1px solid #374151"
        }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
              <span style={{ color: "#fff" }}>Welcome Back </span>
              <span style={{ color: "#4ade80" }}>Hacker</span>
            </h1>
            <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
              <span style={{ fontSize: "2.5rem" }}>👾</span>
            </div>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
              Login to access Cyber Society resources
            </p>
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ position: "relative" }}>
              <span style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#4ade80"
              }}>✉️</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  background: "#1f2937",
                  color: "#fff",
                  border: "1px solid #4b5563",
                  borderRadius: "0.5rem",
                  padding: "0.75rem 0.75rem 0.75rem 3rem",
                  outline: "none",
                  transition: "all 0.2s"
                }}
                onFocus={(e) => e.target.style.borderColor = "#4ade80"}
                onBlur={(e) => e.target.style.borderColor = "#4b5563"}
              />
            </div>
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ position: "relative" }}>
              <span style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#4ade80"
              }}>🔒</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  background: "#1f2937",
                  color: "#fff",
                  border: "1px solid #4b5563",
                  borderRadius: "0.5rem",
                  padding: "0.75rem 0.75rem 0.75rem 3rem",
                  outline: "none",
                  transition: "all 0.2s"
                }}
                onFocus={(e) => e.target.style.borderColor = "#4ade80"}
                onBlur={(e) => e.target.style.borderColor = "#4b5563"}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleEmailLogin}
            disabled={loading}
            style={{
              width: "100%",
              background: "#4ade80",
              color: "#111827",
              fontWeight: "600",
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              transition: "all 0.2s"
            }}
          >
            🚀 Login
          </button>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            style={{
              width: "100%",
              background: "#1f2937",
              color: "#fff",
              fontWeight: "500",
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid #4b5563",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s"
            }}
          >
            Login with Google
          </button>

          {/* Sign Up Link */}
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
              Don't have an account?{" "}
              <a href="/signup" style={{ color: "#4ade80", fontWeight: "500", textDecoration: "none" }}>
                Sign up
              </a>
            </p>
          </div>

          <div id="recaptcha-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
