import React, { useState } from "react";

function OfficeFilter(props) {
  const [selectedLocation, setSelectedLocation] = useState(
    props.stateOfFiltersJson["Office"]
  );

  // Function to handle radio button changes
  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedLocation(value);

    // Call a function or perform actions based on radio button selection here
    if (value === "Junction City") {
      props.sendNewJsonToApp("Office", "Junction City");
    } else if (value === "Great Bend") {
      props.sendNewJsonToApp("Office", "Great Bend");
    } else if (value === "Wichita") {
      props.sendNewJsonToApp("Office", "Wichita");
    } else if (value === "Hays") {
      props.sendNewJsonToApp("Office", "Hays");
    } else if (value === "Liberal") {
      props.sendNewJsonToApp("Office", "Liberal");
    } else if (value === "Newton") {
      props.sendNewJsonToApp("Office", "Newton");
    } else if (value === "Emporia") {
      props.sendNewJsonToApp("Office", "Emporia");
    } else if (value === "Salina") {
      props.sendNewJsonToApp("Office", "Salina");
    } else if (value === "Colby") {
      props.sendNewJsonToApp("Office", "Colby");
    } else if (value === "Hutchinson") {
      props.sendNewJsonToApp("Office", "Hutchinson");
    } else if (value === "Dodge City") {
      props.sendNewJsonToApp("Office", "Dodge City");
    } else if (value === "Garden City") {
      props.sendNewJsonToApp("Office", "Garden City");
    } else if (value === "Concordia") {
      props.sendNewJsonToApp("Office", "Concordia");
    } else if (value === "El Dorado") {
      props.sendNewJsonToApp("Office", "El Dorado");
    } else if (value === "Wellington") {
      props.sendNewJsonToApp("Office", "Wellington");
    } else if (value === "All") {
      props.sendNewJsonToApp("Office", "All");
    }
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="Office"
          value="All"
          checked={selectedLocation === "All"}
          onChange={handleRadioChange}
        />
        All
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Junction City"
          checked={selectedLocation === "Junction City"}
          onChange={handleRadioChange}
        />
        Junction City
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Great Bend"
          checked={selectedLocation === "Great Bend"}
          onChange={handleRadioChange}
        />
        Great Bend
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
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
          name="Office"
          value="Hays"
          checked={selectedLocation === "Hays"}
          onChange={handleRadioChange}
        />
        Hays
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Liberal"
          checked={selectedLocation === "Liberal"}
          onChange={handleRadioChange}
        />
        Liberal
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Newton"
          checked={selectedLocation === "Newton"}
          onChange={handleRadioChange}
        />
        Newton
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Emporia"
          checked={selectedLocation === "Emporia"}
          onChange={handleRadioChange}
        />
        Emporia
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Salina"
          checked={selectedLocation === "Salina"}
          onChange={handleRadioChange}
        />
        Salina
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Colby"
          checked={selectedLocation === "Colby"}
          onChange={handleRadioChange}
        />
        Colby
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Hutchinson"
          checked={selectedLocation === "Hutchinson"}
          onChange={handleRadioChange}
        />
        Hutchinson
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Dodge City"
          checked={selectedLocation === "Dodge City"}
          onChange={handleRadioChange}
        />
        Dodge City
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Garden City"
          checked={selectedLocation === "Garden City"}
          onChange={handleRadioChange}
        />
        Garden City
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Concordia"
          checked={selectedLocation === "Concordia"}
          onChange={handleRadioChange}
        />
        Concordia
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="El Dorado"
          checked={selectedLocation === "El Dorado"}
          onChange={handleRadioChange}
        />
        El Dorado
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="Office"
          value="Wellington"
          checked={selectedLocation === "Wellington"}
          onChange={handleRadioChange}
        />
        Wellington
      </label>
    </div>
  );
}

export default OfficeFilter;
