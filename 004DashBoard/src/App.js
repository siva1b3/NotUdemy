import React, { useState } from "react";
import "./App.css";
import BarChart from "./Layout/AllCharts";

export default function App() {
  const [stateOfFiltersJson, setStateOfFiltersJson] = useState({
    Homes: "All placements",
    Age: ["0-3", "4-6", "7-12", "13-15", "16-above"],
    Region: "Both",
    Gender: ["FeMale", "Male", "TG F To M", "TG M To F", "Others"],
    Race: [
      "American Indian/Alsakan",
      "Asian",
      "Black",
      "Black/ African American",
      "Hispanic",
      "Multi Racial",
      "Native American",
      "Other/NA",
      "White",
      "White/Hispanic",
    ],
    PlacementType: ["APA", "Foster", "KinShip", "Resedential", "Unknown"],
  });

  function ChangeJSONBasedOnNewValues(Key, Value) {
    if (Key === "Homes") {
      setStateOfFiltersJson((prevState) => {
        return { ...prevState, Homes: Value };
      });
    } else if (Key === "Age") {
      setStateOfFiltersJson((prevState) => {
        return { ...prevState, Age: Value };
      });
    } else if (Key === "Region") {
      setStateOfFiltersJson((prevState) => {
        return { ...prevState, Region: Value };
      });
    } else if (Key === "Gender") {
      setStateOfFiltersJson((prevState) => {
        return { ...prevState, Gender: Value };
      });
    } else if (Key === "Race") {
      setStateOfFiltersJson((prevState) => {
        return { ...prevState, Race: Value };
      });
    } else if (Key === "PlacementType") {
      setStateOfFiltersJson((prevState) => {
        return { ...prevState, PlacementType: Value };
      });
    }
  }

  function IsAnyCheckboxGroupIsCompletelyEmpty(Json) {
    let minlength = [];
    let Age = Json.Age.length;
    minlength.push(Age);
    let Gender = Json.Gender.length;
    minlength.push(Gender);
    let Race = Json.Race.length;
    minlength.push(Race);
    let PlacementType = Json.PlacementType.length;
    minlength.push(PlacementType);
    return Math.min(...minlength) === 0;
  }

  function generateRandomNumbers(min, max, count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }

  let filteredjson = {
    AgeLabels: generateRandomNumbers(2000, 3000, 5),
    RegionLabels: generateRandomNumbers(2000, 3000, 2),
    GenderLables: generateRandomNumbers(2000, 3000, 5),
    RaceLables: generateRandomNumbers(2000, 3000, 10),
    PlacementTypeLables: generateRandomNumbers(2000, 3000, 5),
    stateOfFiltersJson: stateOfFiltersJson,
    empty: IsAnyCheckboxGroupIsCompletelyEmpty(stateOfFiltersJson),
  };

  return (
    <div>
      <BarChart
        stateOfFiltersJson={stateOfFiltersJson}
        changesInJson={ChangeJSONBasedOnNewValues}
        filteredjson={filteredjson}
      />
    </div>
  );
}
