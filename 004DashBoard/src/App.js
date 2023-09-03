import React, { useState } from "react";
import "./App.css";
import BarChart from "./Layout/AllCharts";
import App01 from "./ExtraBarchart/NewBar";
import RandomiseValue from "./Data/Random";
import FilterJSONData from "./Layout/Filterdata/FilterData";

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

  // {
  //   "Homes": "Home Needs",
  //   "Age": "0-3",
  //   "Region": "West",
  //   "Gender": "Male",
  //   "Race": "American Indian/Alsakan",
  //   "PlacementType": "Foster",
  //   "Value": "1",
  //    "id":78
  // }

  let filteredjson = RandomiseValue();

  filteredjson = FilterJSONData(filteredjson, stateOfFiltersJson);

  // const sumOfValues = filteredjson.reduce((accumulator, currentValue) => {
  //   return accumulator + parseInt(currentValue.Value);
  // }, 0);
  // console.log(sumOfValues);

  // const k = filteredjson.slice(0, 5);

  return (
    <div>
      <BarChart
        stateOfFiltersJson={stateOfFiltersJson}
        changesInJson={ChangeJSONBasedOnNewValues}
        filteredjson={filteredjson}
      />
      {/* {sumOfValues}
      {k.map((item, index) => {
        return <p key={index}>{JSON.stringify(item)}</p>;
      })} */}
    </div>
  );
}
