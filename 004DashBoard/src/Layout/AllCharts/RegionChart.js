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
import { Region as Regionlabels } from "../../Data/Defaultdata";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function RegionChart(props) {
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
        text: "Region Chart",
      },
      datalabels: {
        anchor: "end",
        align: "start",
        labels: {
          value: {
            color: "red",
            font: {
              weight: "bolder",
              size: 18,
            },
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
        ticks: {
          font: {
            size: 14, //this change the font size
            weight: "bolder",
          },
        },
      },
    },
  };

  let labels = Regionlabels;
  const ActiveLables = props.filteredjson.stateOfFiltersJson.Region;
  const jsonrecived = props.filteredjson.RegionLabels;
  let finaldata = [null, null];
  if (props.filteredjson.empty === false) {
    if (ActiveLables === "Both") {
      finaldata = jsonrecived;
    } else if (ActiveLables === "West") {
      finaldata = [jsonrecived[0]];
      labels = [Regionlabels[0]];
    } else if (ActiveLables === "Wichita") {
      finaldata = [jsonrecived[1]];
      labels = [Regionlabels[1]];
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: finaldata,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="chart-container-age">
      <Bar
        options={options}
        plugins={[ChartDataLabels]}
        data={data}
        id={"Region"}
      />
    </div>
  );
}
