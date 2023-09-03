import React, { useState } from "react";

function HomesFilter(props) {
  const [selectedHomesType, setSelectedHomesType] = useState(
    props.stateOfFiltersJson["Homes"]
  );

  // Function to handle radio button changes
  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedHomesType(value);

    // Call a function or perform actions based on radio button selection here
    if (value === "Home Needs") {
      props.sendNewJsonToApp("Homes", "Home Needs");
    } else if (value === "All placements") {
      props.sendNewJsonToApp("Homes", "All placements");
    }
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="HomesPlacements"
          value="Home Needs"
          checked={selectedHomesType === "Home Needs"}
          onChange={handleRadioChange}
        />
        Home Needs
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="HomesPlacements"
          value="All placements"
          checked={selectedHomesType === "All placements"}
          onChange={handleRadioChange}
        />
        All placements
      </label>
    </div>
  );
}

export default HomesFilter;
