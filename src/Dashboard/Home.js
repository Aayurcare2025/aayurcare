// import React from "react";
// import "../App.css";
// import Family from "../Images/1.png";

// function Home() {
//   return (
//     <div className="main-page">
//       <div className="image-container">
//         <img src={Family} alt="Family" />
//         <div className="image-text">
//           <h2>This site is temporarily down for maintenance.</h2>
//           <p>Thanks for bearing with us.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import "../App.css";
import Family from "../Images/1.png";

function Home() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://api.aayurcare.com/user/upload-excel/Ipd/Opd", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setMessage(result.message || "Upload successful!");
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("Error uploading file");
    }
  };

  return (
    <div className="main-page">
      <div className="image-container">
        <img src={Family} alt="Family" />
        <div className="image-text">
          <h2>This site is temporarily down for maintenance.</h2>
          <p>Thanks for bearing with us.</p>
        </div>
      </div>

      {/* File upload section */}
      <div className="upload-section">
        <h3>Upload Excel File</h3>
        <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Home;

