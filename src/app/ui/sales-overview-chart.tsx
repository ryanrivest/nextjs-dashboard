'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Icon } from '@iconify/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export function generateSalesChartData() {
  const months = Array.from({ length: 10 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (11 - i));
    return `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Total Revenue',
        data: [
          20000, 16000, 18000, 14000, 21000, 21000, 16000, 18000, 19000, 20000,
        ],
        fill: false,
        borderColor: 'red',
        tension: 0.1,
      },
      {
        label: 'Total Target',
        data: [
          19000, 15000, 20000, 16000, 16000, 20000, 18000, 14000, 15000, 12000,
        ],
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
    ],
  };

  return data;
}

const data = generateSalesChartData();

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: true,
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Amount',
      },
    },
  },
};

export default function SalesOverviewChart({
  className,
}: {
  className?: string;
}) {
  const datasets = data.datasets.map((dataset) => ({
    label: dataset.label,
    borderColor: dataset.borderColor,
  }));

  return (
    <div className={`${className} rounded-xl border px-5 pb-6 pt-3 shadow-sm`}>
      <div className="flex justify-between pb-2">
        <div className="text-lg font-bold">Sales Overview</div>
        <ChartLegend datasets={datasets} />
      </div>
      <Line data={data} options={options} />
    </div>
  );
}

export function ChartLegend({
  datasets,
}: {
  datasets: { borderColor: string; label: string }[];
}) {
  return (
    <div className="flex gap-4">
      {datasets.map((dataset, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="inline-flex items-center">
            <Icon
              icon="carbon:dot-mark"
              className="relative"
              style={{ fontSize: '0.7rem', color: dataset.borderColor }}
            />
            <span className="text-sm text-black/60">{dataset.label}</span>
          </div>
          <div className="font-bold">$50,345.67</div>
        </div>
      ))}
    </div>
  );
}
