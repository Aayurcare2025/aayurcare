import React from "react";
function GroupMedical() {
  return (
   <div className="medical-container">

  <label>Company Name</label>
  <select>
    <option>Select Company Name</option>
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
  </select>


  <label> HR name</label>
  <input type="text" placeholder="Enter HR name" />

  <label>HR mailid</label>
  <input type="email" placeholder="Enter HR mailid" />

  <label>Phone no </label>
  <input type="tel" placeholder="Enter phone number" />

  <label>Number of Employees</label>
  <input type="number" placeholder="Enter number of employees" />

  <label>Location</label>
  <select>
    <option value="">Select Location</option>
    <option value=""> Bangalore</option>
  </select>

//data 



  <button>Submit</button>

  





  














      
   
    </div>
  );
}

export default GroupMedical;
