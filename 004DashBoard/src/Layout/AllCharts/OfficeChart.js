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
import { Office as Agelabels } from "../../Data/Defaultdata";

export function OfficeBarChart(props) {
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
        text: "Office Chart",
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
            size: 10, //this change the font size
          },
        },
      },
    },
  };

  let labels = Agelabels;

  const jsonrecived = props.filteredjson.OfficeLables;
  const ActiveAgeLabels = props.filteredjson.stateOfFiltersJson.Office;
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
    null,
    null,

    null,
    null,
    null,
  ];
  if (props.filteredjson.empty === false) {
    if (ActiveAgeLabels === "All") {
      Agelabels.forEach((element, index) => {
        finaldata[index] = jsonrecived[index];
      });
    } else {
      Agelabels.forEach((element, index) => {
        if (ActiveAgeLabels === element) {
          finaldata[index] = jsonrecived[index];
        }
      });
    }
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
