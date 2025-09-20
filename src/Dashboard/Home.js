import React from "react";
import "../App.css";
import Family from "../Images/1.png";

function Home() {
  return (
    <div className="main-page">
      <div className="image-container">
        <img src={Family} alt="Family" />
        <div className="image-text">
          <h2>This site is temporarily down for maintenance.</h2>
          <p>Thanks for bearing with us.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
