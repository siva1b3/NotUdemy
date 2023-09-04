import React from "react";
import "./AllCharts.css"; // Assuming you have a CSS file for styles
import HomesFilter from "./Topfilters/Homes";
import AgeCheckBoxes from "./Topfilters/Age";
import ChartsCollection from "./AllCharts/ChartsCollection";
import RegionFilter from "./Topfilters/RegionFilter";
import GenderCheckBoxes from "./Topfilters/Gender";
import RaceCheckBoxes from "./Topfilters/Race";
import PlacementTypeCheckBoxes from "./Topfilters/PlacementType";
import OfficeFilter from "./Topfilters/Office";

function BarChart(props) {
  function sendNewJsonToApp(Key, Value) {
    props.changesInJson(Key, Value);
  }

  let heightChangeIfJsonisEmpty = {
    height: "calc(0.25 * 100vh)",
  };
  if (props.filteredjson.empty === true) {
    heightChangeIfJsonisEmpty = {
      height: "calc(0.3 * 100vh)",
    };
  }

  return (
    <div>
      <div className="filtersContiner" style={heightChangeIfJsonisEmpty}>
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
        <div className="filter Region">
          <RegionFilter
            sendNewJsonToApp={sendNewJsonToApp}
            stateOfFiltersJson={props.stateOfFiltersJson}
          />
        </div>
        <div className="filter gender">
          <GenderCheckBoxes
            sendNewJsonToApp={sendNewJsonToApp}
            stateOfFiltersJson={props.stateOfFiltersJson}
          />
        </div>
        <div className="filter race">
          <RaceCheckBoxes
            sendNewJsonToApp={sendNewJsonToApp}
            stateOfFiltersJson={props.stateOfFiltersJson}
          />
        </div>
        <div className="filter PlacementType">
          <PlacementTypeCheckBoxes
            sendNewJsonToApp={sendNewJsonToApp}
            stateOfFiltersJson={props.stateOfFiltersJson}
          />
        </div>
        <div className="filter Office">
          <OfficeFilter
            sendNewJsonToApp={sendNewJsonToApp}
            stateOfFiltersJson={props.stateOfFiltersJson}
          />
        </div>
      </div>
      <ChartsCollection filteredjson={props.filteredjson} />
      <div className="emptyPlaceInBottom"></div>
    </div>
  );
}

export default BarChart;
