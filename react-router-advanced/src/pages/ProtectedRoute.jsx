import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = false; // change to true to simulate logged-in user

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    alert("You must be logged in to view this page!");
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
