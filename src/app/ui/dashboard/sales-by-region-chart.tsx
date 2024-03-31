'use client';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const data = {
  labels: ['Asia', 'Europe', 'Americas', 'Africa', 'Middle East', 'Pacific'],
  datasets: [
    {
      label: 'Sales by Region',
      data: [2201, 2865, 1762, 1591, 1749, 2475],
      backgroundColor: 'rgba(105, 111, 251, 0.32)',
      borderColor: 'rgba(105, 111, 251, 1)',
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    r: {
      startAngle: -30,
      grid: {
        color: 'rgba(105, 111, 251, 0.08)', // Change the color of the grid lines if needed
      },
      ticks: {
        display: false, // This hides the tick labels (the numbers on the axes)
        beginAtZero: true,
        stepSize: 800,
      },
      pointLabels: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  elements: {
    line: {
      borderWidth: 3, // Adjust line thickness here
    },
    point: {
      radius: 3, // Adjust point size here
    },
  },
  chartArea: {
    backgroundColor: 'rgba(251, 85, 85, 0.4)',
  },
};

export default function SalesByRegionChart({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className} rounded-xl border px-5 pb-6 pt-3 shadow-sm`}>
      <div className="text-lg font-bold">Sales by Region</div>
      <Radar data={data} options={options} />
    </div>
  );
}
