import React, { useState } from "react";
import "./App.css";
import BarChart from "./Layout/AllCharts";
// import App01 from "./ExtraBarchart/NewBar";
// import RandomiseValue from "./Data/Random";
// import FilterJSONData from "./Layout/Filterdata/FilterData";

export default function App() {
  const [stateOfFiltersJson, setStateOfFiltersJson] = useState({
    Homes: "All placements",
    Age: ["0-3", "4-6", "7-12", "13-15", "16-above"],
    Region: "Both",
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
    }
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
    Region: generateRandomNumbers(2000, 3000, 2),
    stateOfFiltersJson: stateOfFiltersJson,
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
