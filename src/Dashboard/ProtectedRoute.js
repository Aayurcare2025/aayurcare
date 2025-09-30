
import React from "react";

// function ProtectedRoute({ isLoggedIn, children }) {
//   if (!isLoggedIn) {
//     return <Navigate to="/signin" replace />;
//   }
//   return children;
// }


// function ProtectedRoute({ isLoggedIn, children }) {
//   if (!isLoggedIn) {
//     alert("⚠️ Please sign in to access this section.");
//     return <Navigate to="/signin" />;
//   }
//   return children;
// }




function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>

        ⚠ Please sign in to access this section.
      </div>
    );
  }

  return children;
}



export default ProtectedRoute;
