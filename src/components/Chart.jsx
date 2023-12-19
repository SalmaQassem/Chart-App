import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const Chart = ({ filterIndex }) => {
  const dataArray = [190, 50, 150, 90, 200, 250, 300, 240, 400, 200, 260, 200];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        display: false,
      },
      y: {
        position: "left",
        grid: {
          color: "#E7EBEC",
        },
        max: 400,
        min: 0,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "Septemper",
    "October",
    "Novamber",
    "December",
  ];
  const config = {
    tension: 0.4,
    pointBackgroundColor: "#d11242",
    pointBorderColor: "#fff",
    pointBorderWidth: 2,
    pointRadius: 6,
    borderColor: "#000",
  };
  const setBackground = (context) => {
    const bgColor = ["rgba(209, 18, 66, 1)", "rgba(102, 102, 102, 0)"];
    if (!context.chart.chartArea) {
      return;
    }
    const {
      ctx,
      chartArea: { top, bottom },
    } = context.chart;
    const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBg.addColorStop(0, bgColor[0]);
    gradientBg.addColorStop(1, bgColor[1]);
    return gradientBg;
  };
  const data = {
    labels: labels.filter((item, index) => {
      return index >= filterIndex.start && index <= filterIndex.end;
    }),
    datasets: [
      {
        fill: true,
        label: "chart 1",
        data: dataArray.filter((item, index) => {
          return index >= filterIndex.start && index <= filterIndex.end;
        }),
        ...config,
        backgroundColor: setBackground,
      },
    ],
  };
  return <Line options={options} data={data} className="chart" />;
};

export default Chart;
