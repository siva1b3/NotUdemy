import React, { useState, useEffect } from "react";

function GenderCheckBoxes(props) {
  const [listOfAgesSelected, setAgeGroups] = useState(
    props.stateOfFiltersJson["Gender"]
  );

  const checkboxes = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  };

  if (listOfAgesSelected.includes("FeMale") === true) {
    checkboxes.checkbox1 = true;
  }
  if (listOfAgesSelected.includes("Male") === true) {
    checkboxes.checkbox2 = true;
  }
  if (listOfAgesSelected.includes("TG F To M") === true) {
    checkboxes.checkbox3 = true;
  }
  if (listOfAgesSelected.includes("TG M To F") === true) {
    checkboxes.checkbox4 = true;
  }
  if (listOfAgesSelected.includes("Others") === true) {
    checkboxes.checkbox5 = true;
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
      props.sendNewJsonToApp("Gender", listOfAgesSelected);
    }, 100);
  }, [listOfAgesSelected]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    // Call a function or perform actions based on checkbox changes here
    if (name === "checkbox1") {
      updateSelectedAgesList(checked, "FeMale");
    } else if (name === "checkbox2") {
      updateSelectedAgesList(checked, "Male");
    } else if (name === "checkbox3") {
      updateSelectedAgesList(checked, "TG F To M");
    } else if (name === "checkbox4") {
      updateSelectedAgesList(checked, "TG M To F");
    } else if (name === "checkbox5") {
      updateSelectedAgesList(checked, "Others");
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
          Please select at Least
          <br /> one Gender value
        </h4>
      )}
      {AllAreFalse && <div style={{ height: "40px" }}></div>}
      <label>
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        'FeMale'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        'Male'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        'TG F To M'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
        />
        'TG M To F'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={handleCheckboxChange}
        />
        'Others'
      </label>
    </div>
  );
}

export default GenderCheckBoxes;
