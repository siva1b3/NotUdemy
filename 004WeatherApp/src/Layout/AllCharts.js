import React from "react";
import "./AllCharts.css"; // Assuming you have a CSS file for styles
import HomesFilter from "./Topfilters/Homes";
import AgeCheckBoxes from "./Topfilters/Age";
import ChartsCollection from "./AllCharts/ChartsCollection";

function BarChart(props) {
  function sendNewJsonToApp(Key, Value) {
    console.log("in bar");
    console.log(Value);
    props.changesInJson(Key, Value);
  }

  return (
    <div>
      <div className="filtersContiner">
        <div className="filter Homes">
          <HomesFilter
            sendNewJsonToApp={sendNewJsonToApp}
            stateOfFiltersJson={props.stateOfFiltersJson}
          />
        </div>
        <div className="filter Age">
          <AgeCheckBoxes
            stateOfFiltersJson={props.stateOfFiltersJson}
            sendNewJsonToApp={sendNewJsonToApp}
          />
        </div>
        <div className="filter Region"></div>
        <div className="filter gender"></div>
        <div className="filter race"></div>
        <div className="filter PlacementType"></div>
      </div>
      <ChartsCollection />
      <div className="emptyPlaceInBottom"></div>
    </div>
  );
}

export default BarChart;