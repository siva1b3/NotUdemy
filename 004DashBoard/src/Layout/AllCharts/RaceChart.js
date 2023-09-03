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
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Race as Agelabels } from "../../Data/Defaultdata";

export function RaceBarChart(props) {
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
        text: "Race Chart",
      },
      datalabels: {
        anchor: "end",
        align: "start",
        color: "blue",
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
            // size: 14, //this change the font size
            weight: "bolder",
          },
        },
      },
      y: {
        ticks: {
          font: {
            // size: 14, //this change the font size
            weight: "bolder",
          },
        },
      },
    },
  };

  let labels = Agelabels;

  const jsonrecived = props.filteredjson.RaceLables;
  const ActiveAgeLabels = props.filteredjson.stateOfFiltersJson.Race;
  const finaldata = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
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
        data: finaldata,
        borderColor: "rgb(0, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="chart-container-age">
      <Bar
        options={options}
        plugins={[ChartDataLabels]}
        data={data}
        id={"Age Data"}
      />
    </div>
  );
}
