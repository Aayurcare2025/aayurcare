import React, { useState, useEffect } from "react";
import { State, City } from "country-state-city";

function GroupMedical() {
  const [states, setStates] = useState([]);
  
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    // Fetch all states of India
    const statesOfIndia = State.getStatesOfCountry("IN");
    setStates(statesOfIndia);
  }, []);

  useEffect(() => {
    if (selectedState) {
      // Fetch cities of the selected state
      const citiesOfState = City.getCitiesOfState("IN", selectedState);
      setCities(citiesOfState);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (


    <div className="health-form">
        <h2 className="form-title">Group Medical</h2>
    <div className="form-container">
      <label>Company Name</label>
      <select>
        <option>Select Company Name</option>
        <option value="1">Google</option>
        <option value="2">Amazon</option>
        <option value="3">Facebook</option>
      </select>

      <label>HR Name</label>
      <input type="text" placeholder="Enter HR Name" />

      <label>HR Mailid</label>
      <input type="email" placeholder="Enter HR Mail id" />

      <label>Phone no</label>
      <input type="tel" placeholder="Enter phone number" />

      <label>Number of Employees</label>
      <input type="number" placeholder="Enter number of employees" />

      <label>State</label>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>

      <label>City</label>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        disabled={!selectedState}
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      <button>Submit</button>
    </div>
    </div>
  );
}

export default GroupMedical;
