import React, { useState, useEffect } from "react";

function AgeCheckBoxes(props) {
  const [listOfAgesSelected, setAgeGroups] = useState(
    props.stateOfFiltersJson["Age"]
  );

  const checkboxes = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  };

  if (listOfAgesSelected.includes("0-3") === true) {
    checkboxes.checkbox1 = true;
  }
  if (listOfAgesSelected.includes("4-6") === true) {
    checkboxes.checkbox2 = true;
  }
  if (listOfAgesSelected.includes("7-12") === true) {
    checkboxes.checkbox3 = true;
  }
  if (listOfAgesSelected.includes("13-15") === true) {
    checkboxes.checkbox4 = true;
  }
  if (listOfAgesSelected.includes("16-above") === true) {
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
      props.sendNewJsonToApp("Age", listOfAgesSelected);
    }, 100);
  }, [listOfAgesSelected]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    // Call a function or perform actions based on checkbox changes here
    if (name === "checkbox1") {
      updateSelectedAgesList(checked, "0-3");
    } else if (name === "checkbox2") {
      updateSelectedAgesList(checked, "4-6");
    } else if (name === "checkbox3") {
      updateSelectedAgesList(checked, "7-12");
    } else if (name === "checkbox4") {
      updateSelectedAgesList(checked, "13-15");
    } else if (name === "checkbox5") {
      updateSelectedAgesList(checked, "16-above");
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
          <br /> one Age value
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
        '0-3'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        '4-6'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        '7-12'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
        />
        '13-15'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={handleCheckboxChange}
        />
        '16-above'
      </label>
    </div>
  );
}

export default AgeCheckBoxes;
