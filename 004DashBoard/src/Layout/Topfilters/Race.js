import React, { useState, useEffect } from "react";

function RaceCheckBoxes(props) {
  const [listOfAgesSelected, setAgeGroups] = useState(
    props.stateOfFiltersJson["Race"]
  );

  const checkboxes = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
  };

  if (listOfAgesSelected.includes("American Indian/Alsakan") === true) {
    checkboxes.checkbox1 = true;
  }
  if (listOfAgesSelected.includes("Asian") === true) {
    checkboxes.checkbox2 = true;
  }
  if (listOfAgesSelected.includes("Black") === true) {
    checkboxes.checkbox3 = true;
  }
  if (listOfAgesSelected.includes("Black/ African American") === true) {
    checkboxes.checkbox4 = true;
  }
  if (listOfAgesSelected.includes("Hispanic") === true) {
    checkboxes.checkbox5 = true;
  }
  if (listOfAgesSelected.includes("Multi Racial") === true) {
    checkboxes.checkbox6 = true;
  }
  if (listOfAgesSelected.includes("Native American") === true) {
    checkboxes.checkbox7 = true;
  }
  if (listOfAgesSelected.includes("Other/NA") === true) {
    checkboxes.checkbox8 = true;
  }
  if (listOfAgesSelected.includes("White") === true) {
    checkboxes.checkbox9 = true;
  }
  if (listOfAgesSelected.includes("White/Hispanic") === true) {
    checkboxes.checkbox10 = true;
  }

  function updateSelectedAgesList(checked, ageGroup) {
    // Assume setAgeGroups is an async function
    setAgeGroups((prevAgeGroups) => {
      if (checked === true) {
        // Add the ageGroup to the previous state
        return [...prevAgeGroups, ageGroup];
      } else {
        // Remove the ageGroup from the previous state
        return prevAgeGroups.filter((Group) => Group !== ageGroup);
      }
    });
  }

  let AllAreFalse = true;
  for (let k of Object.values(checkboxes)) {
    if (k === true) {
      AllAreFalse = false;
      break;
    }
  }

  // Use useEffect to send the updated listOfAgesSelected
  useEffect(() => {
    setTimeout(() => {
      // Call sendNewJsonToApp with the updated listOfAgesSelected
      props.sendNewJsonToApp("Race", listOfAgesSelected);
    }, 100);
  }, [listOfAgesSelected]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    // Call a function or perform actions based on checkbox changes here
    if (name === "checkbox1") {
      updateSelectedAgesList(checked, "American Indian/Alsakan");
    } else if (name === "checkbox2") {
      updateSelectedAgesList(checked, "Asian");
    } else if (name === "checkbox3") {
      updateSelectedAgesList(checked, "Black");
    } else if (name === "checkbox4") {
      updateSelectedAgesList(checked, "Black/ African American");
    } else if (name === "checkbox5") {
      updateSelectedAgesList(checked, "Hispanic");
    } else if (name === "checkbox6") {
      updateSelectedAgesList(checked, "Multi Racial");
    } else if (name === "checkbox7") {
      updateSelectedAgesList(checked, "Native American");
    } else if (name === "checkbox8") {
      updateSelectedAgesList(checked, "Other/NA");
    } else if (name === "checkbox9") {
      updateSelectedAgesList(checked, "White");
    } else if (name === "checkbox10") {
      updateSelectedAgesList(checked, "White/Hispanic");
    }
  };

  return (
    <div>
      {AllAreFalse && (
        <h4
          style={{
            color: "red",
            margin: "0%",
            padding: "0%",
            position: "fixed",
            backgroundColor: "aquamarine",
            fontWeight: "bold",
          }}
        >
          Please select at Least one Race value
        </h4>
      )}
      {AllAreFalse && <div style={{ height: "30px" }}></div>}
      <label>
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        'American Indian/Alsakan'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        'Asian'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        'Black'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
        />
        'Black/ African American'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={handleCheckboxChange}
        />
        'Hispanic'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox6"
          checked={checkboxes.checkbox6}
          onChange={handleCheckboxChange}
        />
        'Multi Racial'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox7"
          checked={checkboxes.checkbox7}
          onChange={handleCheckboxChange}
        />
        'Native American'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox8"
          checked={checkboxes.checkbox8}
          onChange={handleCheckboxChange}
        />
        'Other/NA'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox9"
          checked={checkboxes.checkbox9}
          onChange={handleCheckboxChange}
        />
        'White'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox10"
          checked={checkboxes.checkbox10}
          onChange={handleCheckboxChange}
        />
        'White/Hispanic'
      </label>
    </div>
  );
}

export default RaceCheckBoxes;
