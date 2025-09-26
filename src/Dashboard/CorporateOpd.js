import React, { useState, useEffect } from "react";

function CorporateOpd() {

    return (

        <div className="health-form">
            <h2 className="form-title">Individual OPD</h2>
          <label>Company Name</label>
          <div className="form-container">
      <select>
        <option>Select Company Name</option>
        <option value="1">Google</option>
        <option value="2">Amazon</option>
        <option value="3">Facebook</option>
      </select> 

      <label>Employee Name</label>
      <input type="text" placeholder="Enter Employee Name" />

   <label>Employee Mailid</label>   
   <input type="email" placeholder="Enter Employee Mail id" />

  <label>Employee phone no</label>
    <input type="tel" placeholder="Enter Employee phone number" />


    <label>Employee Age</label>
    <input type="number" placeholder="Enter Employee Age" />

    {/* next button need to write steps */}

    {/* //self or dependant */}


    





        </div>
    </div>
    );
}

export default CorporateOpd;
