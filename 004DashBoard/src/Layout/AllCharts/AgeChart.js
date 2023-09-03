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

  const jsonrecived = props.filteredjson;
  const result = [0, 0, 0, 0, 0];

  jsonrecived.forEach((element) => {
    console.log(element);
    const { Age, Value } = element;
    let indexnumber = Agelabels.indexOf(Age);
    console.log(result[indexnumber]);
    console.log(Value);
    result[indexnumber] = result[indexnumber] + Value;
  });

  console.log(result);

  const labels = Agelabels;

  const data = {
    labels,
    datasets: [
      {
        data: result,
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
