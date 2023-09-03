import React from "react";
import { AgeBarChart } from "./AgeChart";
import { RegionChart } from "./RegionChart";
import { GenderBarChart } from "./GenderChart";
import { RaceBarChart } from "./RaceChart";

function ChartsCollection(props) {
  return (
    <div className="charts">
      <div className="chart AgeChart">
        <AgeBarChart filteredjson={props.filteredjson} />
      </div>
      <div className="chart">
        <RegionChart filteredjson={props.filteredjson} />
      </div>
      <div className="chart">
        <GenderBarChart filteredjson={props.filteredjson} />
      </div>
      <div className="chart">
        <RaceBarChart filteredjson={props.filteredjson} />
      </div>
      <div className="chart"></div>
      <div className="chart"></div>
    </div>
  );
}

export default ChartsCollection;
