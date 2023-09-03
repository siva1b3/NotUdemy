import React from "react";
import { AgeBarChart } from "./AgeChart";

function ChartsCollection() {
  return (
    <div className="charts">
      <div className="chart AgeChart">
        <AgeBarChart />
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
