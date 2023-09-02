import React, { useState } from 'react';
import './App.css';
import BarChart from './Bar';
import App01 from './NewBar';
import RandomiseValue from './Random';

export default function App() {
  const [stateOfFiltersJson, setStateOfFiltersJson] = useState({
    Homes: 'All placements',
    Age: ['0-3', '4-6', '7-12', '13-15', '16-Above'],
  });

  const RandomValuesJson = RandomiseValue();

  function changesInJson(Key, Value) {
    if (Key === 'Homes') {
      setStateOfFiltersJson((prevState) => {
        return { ...prevState, Homes: Value };
      });
    } else if (Key === 'Age') {
      setStateOfFiltersJson((prevState) => {
        return { ...prevState, Age: Value };
      });
    }
    console.log(stateOfFiltersJson);
    console.log('hi in app');
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

  const filteredjson = RandomValuesJson.filter((item) => {
    return item['Homes'] === stateOfFiltersJson['Homes'];
  });
  const k = filteredjson.slice(0, 5);

  return (
    <div>
      <BarChart
        stateOfFiltersJson={stateOfFiltersJson}
        changesInJson={changesInJson}
      />
      {k.map((item, index) => {
        return <p key={index}>{JSON.stringify(item)}</p>;
      })}
    </div>
  );
}
