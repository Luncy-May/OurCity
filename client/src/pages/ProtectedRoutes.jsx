import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userID = localStorage.getItem('userID');

  // If userID is not found in local storage, redirect to "Not Authorized"
  if (!userID) {
    return <Navigate to="/not-authorized" />;
  }

  // Otherwise, render the children (protected component)
  return children;
};

export default ProtectedRoute;
