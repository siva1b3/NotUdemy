import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./AgeChart.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { PlacementType as Agelabels } from "../../Data/Defaultdata";

export function PlacementTypeBarChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
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
      datalabels: {
        anchor: "end",
        align: "start",
        color: "red",
        labels: {
          title: {
            font: {
              weight: "bolder",
            },
          },
          value: {
            color: "black",
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14, //this change the font size
            weight: "bolder",
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14, //this change the font size
            weight: "bolder",
          },
        },
      },
    },
  };

  let labels = Agelabels;

  const jsonrecived = props.filteredjson.PlacementTypeLables;
  const ActiveAgeLabels = props.filteredjson.stateOfFiltersJson.PlacementType;
  const finaldata = [null, null, null, null, null];
  if (props.filteredjson.empty === false) {
    Agelabels.forEach((element, index) => {
      if (ActiveAgeLabels.includes(element) === true) {
        finaldata[index] = jsonrecived[index];
      }
    });
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        fill: true,
        data: finaldata,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="chart-container-age">
      <Line
        options={options}
        plugins={[ChartDataLabels]}
        data={data}
        id={"Age Data"}
      />
    </div>
  );
}
