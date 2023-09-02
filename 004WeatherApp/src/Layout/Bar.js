import React from "react";
import "./BarChart.css"; // Assuming you have a CSS file for styles
import HomesFilter from "./Topfilters/Homes";
import AgeCheckBoxes from "./Topfilters/Age";

function BarChart(props) {
  function sendNewJsonToApp(Key, Value) {
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
          <AgeCheckBoxes stateOfFiltersJson={props.stateOfFiltersJson} />
        </div>
        <div className="filter Region"></div>
        <div className="filter gender"></div>
        <div className="filter race"></div>
        <div className="filter PlacementType"></div>
      </div>
      <div className="charts">
        <div className="chart"></div>
        <div className="chart"></div>
        <div className="chart"></div>
        <div className="chart"></div>
        <div className="chart"></div>
        <div className="chart"></div>
      </div>
      <div className="emptyPlaceInBottom"></div>
    </div>
  );
}

export default BarChart;
