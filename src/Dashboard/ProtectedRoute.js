
import React from "react";
import { Navigate } from "react-router-dom";

// function ProtectedRoute({ isLoggedIn, children }) {
//   if (!isLoggedIn) {
//     return <Navigate to="/signin" replace />;
//   }
//   return children;
// }


function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    alert("⚠️ Please sign in to access this section.");
    return <Navigate to="/signin" />;
  }
  return children;
}



export default ProtectedRoute;
