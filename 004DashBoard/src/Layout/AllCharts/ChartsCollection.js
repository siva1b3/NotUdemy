import React from "react";
import { AgeBarChart } from "./AgeChart";

function ChartsCollection(props) {
  return (
    <div className="charts">
      <div className="chart AgeChart">
        <AgeBarChart filteredjson={props.filteredjson} />
      </div>
      <div className="chart"></div>
      <div className="chart"></div>
      <div className="chart"></div>
      <div className="chart"></div>
      <div className="chart"></div>
    </div>
  );
}

export default ChartsCollection;
