import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./AgeChart.css";
import { Age as Agelabels } from "../../Data/Defaultdata";

export function AgeBarChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: "y",
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Age Chart",
      },
    },
  };

  const labels = Agelabels;
  console.log(labels);
  console.log(typeof labels);
  console.log(Array.isArray(labels));

  const jsonrecived = props.filteredjson.AgeLabels;
  const ActiveAgeLabels = props.filteredjson.stateOfFiltersJson.Age;
  const finaldata = [0, 0, 0, 0, 0];
  labels.forEach((element, index) => {
    if (ActiveAgeLabels.includes(element) === true) {
      finaldata[index] = jsonrecived[index];
    }
  });

  const data = {
    labels,
    datasets: [
      {
        data: finaldata,
        borderColor: "rgb(0, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="chart-container-age">
      <Bar options={options} data={data} id={"siva"} />
    </div>
  );
}
