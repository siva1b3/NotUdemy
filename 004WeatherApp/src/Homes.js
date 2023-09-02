import React, { useState } from 'react';

function HomesFilter(props) {
  const [selectedLocation, setSelectedLocation] = useState(
    props.stateOfFiltersJson['Homes']
  );

  // Function to handle radio button changes
  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedLocation(value);

    // Call a function or perform actions based on radio button selection here
    if (value === 'Home Needs') {
      props.sendNewJsonToApp('Homes', 'Home Needs');
    } else if (value === 'All placements') {
      props.sendNewJsonToApp('Homes', 'All placements');
    }
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="location"
          value="Home Needs"
          checked={selectedLocation === 'Home Needs'}
          onChange={handleRadioChange}
        />
        Home Needs
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="location"
          value="All placements"
          checked={selectedLocation === 'All placements'}
          onChange={handleRadioChange}
        />
        All placements
      </label>
    </div>
  );
}

export default HomesFilter;
