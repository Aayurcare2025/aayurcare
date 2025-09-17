import React from "react";
import "../App.css";
// import Family from "../images/1.png";
// code
function Home() {
  return (
    <div className="main-page">
      <div className="image-container">
        {/* <img src={Family} alt="Family" /> */}
        <img src="/images/1.png" alt="Family" />

        <div className="image-text">
          <h2>This site is temporarily down for maintenance.</h2>
          <p>Thanks for bearing with us.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
