'use client';

import { formatNumber } from '@/app/lib/utils';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Icon } from '@iconify/react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RegisteredUsersChart({
  premiumUsers,
  basicUsers,
  className,
}: {
  premiumUsers: number;
  basicUsers: number;
  className?: string;
}) {
  const totalUsers = premiumUsers + basicUsers;
  const formattedTotalUsers = formatNumber(totalUsers);

  const data = {
    labels: ['Premium Users', 'Basic Users'],
    datasets: [
      {
        data: [premiumUsers, basicUsers],
        backgroundColor: ['rgba(105, 111, 251, 1)', 'rgba(105, 111, 251, 0.6)'],
        borderWidth: 0,
      },
      {
        data: [totalUsers],
        backgroundColor: ['rgba(105, 111, 251, 0.2)'],
        borderWidth: 0,
        weight: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    rotation: -105,
    circumference: 210,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className={`${className} rounded-xl border px-5 pb-6 pt-3 shadow-sm dark:bg-dark-blue dark:border-white/10`}>
      <div className="text-lg font-bold">Registered Users</div>
      <div className="relative w-full py-2">
        <Doughnut data={data} options={options} />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center text-center">
          <div className="mb-2 mt-8 rounded-full border-4 border-blue/10 bg-blue/20 p-1 shadow-md">
            <Icon
              icon="majesticons:users-line"
              style={{ fontSize: '1.2rem', color: 'rgba(105, 111, 251, 1)' }}
            />
          </div>
          <div className="text-2xl font-bold">{formattedTotalUsers}</div>
          <div className="text-sm text-black/60 dark:text-white/60">Total Users</div>
        </div>
      </div>
      <ChartLegend basicUsers={basicUsers} premiumUsers={premiumUsers} />
    </div>
  );
}

export function ChartLegend({
  basicUsers,
  premiumUsers
}: {
  basicUsers: number;
  premiumUsers: number;
}) {
  const formattedPremiumUsers = formatNumber(premiumUsers);
  const formattedBasicUsers = formatNumber(basicUsers);

  return (
    <div className="mt-4 flex justify-between">
    <div className="flex items-center gap-2">
      <div className="py-2 bg-blue w-1 h-[80%] rounded"></div>
      <div>
        <div className="pb-1 text-sm font-bold">
          {formattedPremiumUsers}
        </div>
        <div className="text-sm text-black/60 dark:text-white/60">Premium Users</div>
      </div>
    </div>
    <div className="flex items-center gap-2 text-right">
      <div>
        <div className="pb-1 text-sm font-bold">{formattedBasicUsers}</div>
        <div className="text-sm text-black/60 dark:text-white/60">Basic Users</div>
      </div>
      <div className="py-2 bg-blue/60 w-1 h-[80%] rounded"></div>
    </div>
  </div>
  );
}
