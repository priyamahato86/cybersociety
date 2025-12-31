// PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
const PrivateRoute = ({ children }) => {
  const { user, is2FAVerified } = useAuth();

  // If user is not logged in or has not completed 2FA, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!is2FAVerified) {
    return <Navigate to="/verify-phone" replace />; // optional: a phone verification page
  }

  // User is logged in and 2FA verified, allow access
  return children;
};

export default PrivateRoute;
