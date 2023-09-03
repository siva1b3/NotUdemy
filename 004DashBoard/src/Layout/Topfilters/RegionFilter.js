import React, { useState } from "react";

function RegionFilter(props) {
  const [selectedLocation, setSelectedLocation] = useState(
    props.stateOfFiltersJson["Region"]
  );

  // Function to handle radio button changes
  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedLocation(value);

    // Call a function or perform actions based on radio button selection here
    if (value === "West") {
      props.sendNewJsonToApp("Region", "West");
    } else if (value === "Wichita") {
      props.sendNewJsonToApp("Region", "Wichita");
    } else if (value === "Both") {
      props.sendNewJsonToApp("Region", "Both");
    }
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="location"
          value="West"
          checked={selectedLocation === "West"}
          onChange={handleRadioChange}
        />
        West
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="location"
          value="Wichita"
          checked={selectedLocation === "Wichita"}
          onChange={handleRadioChange}
        />
        Wichita
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="location"
          value="Both"
          checked={selectedLocation === "Both"}
          onChange={handleRadioChange}
        />
        Both
      </label>
    </div>
  );
}

export default RegionFilter;
