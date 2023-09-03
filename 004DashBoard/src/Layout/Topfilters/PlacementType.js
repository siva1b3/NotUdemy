import React, { useState, useEffect } from "react";

function PlacementTypeCheckBoxes(props) {
  const [listOfAgesSelected, setAgeGroups] = useState(
    props.stateOfFiltersJson["PlacementType"]
  );

  const checkboxes = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  };

  if (listOfAgesSelected.includes("APA") === true) {
    checkboxes.checkbox1 = true;
  }
  if (listOfAgesSelected.includes("Foster") === true) {
    checkboxes.checkbox2 = true;
  }
  if (listOfAgesSelected.includes("KinShip") === true) {
    checkboxes.checkbox3 = true;
  }
  if (listOfAgesSelected.includes("Resedential") === true) {
    checkboxes.checkbox4 = true;
  }
  if (listOfAgesSelected.includes("Unknown") === true) {
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

  // Use useEffect to send the updated listOfAgesSelected
  useEffect(() => {
    setTimeout(() => {
      // Call sendNewJsonToApp with the updated listOfAgesSelected
      props.sendNewJsonToApp("PlacementType", listOfAgesSelected);
    }, 100);
  }, [listOfAgesSelected]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    // Call a function or perform actions based on checkbox changes here
    if (name === "checkbox1") {
      updateSelectedAgesList(checked, "APA");
    } else if (name === "checkbox2") {
      updateSelectedAgesList(checked, "Foster");
    } else if (name === "checkbox3") {
      updateSelectedAgesList(checked, "KinShip");
    } else if (name === "checkbox4") {
      updateSelectedAgesList(checked, "Resedential");
    } else if (name === "checkbox5") {
      updateSelectedAgesList(checked, "Unknown");
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        'APA'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        'Foster'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        'KinShip'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
        />
        'Resedential'
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={handleCheckboxChange}
        />
        'Unknown'
      </label>
    </div>
  );
}

export default PlacementTypeCheckBoxes;
