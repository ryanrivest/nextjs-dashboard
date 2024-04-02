'use client';

import { formatCurrency, formatNumber, formatPercent } from '@/app/lib/utils';
import { Icon } from '@iconify/react';

export default function Card({ title, value, valueType, change }: Stat) {
  const increased = change > 0;
  const trendColor = increased
    ? 'bg-light-green dark:bg-dark-green'
    : 'bg-light-red dark:bg-dark-red';
  const trendIcon = increased ? 'octicon:arrow-up-16' : 'octicon:arrow-down-16';
  const formattedValue = formatValue();
  const formattedChange = `${formatPercent(Math.abs(change))}`;

  return (
    <div className="dark:bg-dark-blue flex flex-col gap-4 rounded-xl border px-5 pb-4 pt-3 shadow-sm dark:border-white/10">
      <div className="text-lg font-bold">{title}</div>
      <div className="text-3xl font-bold">{formattedValue}</div>
      <div className="flex items-center gap-3 text-xs text-black/60 dark:text-white/60">
        <span
          className={`inline-flex items-center rounded-md px-2 py-1 text-black dark:text-white ${trendColor}`}
        >
          <Icon
            icon={trendIcon}
            style={{ fontSize: '0.9rem' }}
            className="mr-1"
          />
          {formattedChange}
        </span>
        Compared to last month
      </div>
    </div>
  );

  function formatValue() {
    if (valueType === 'percentage') {
      return formatPercent(value);
    }

    if (valueType === 'currency') {
      return formatCurrency(value);
    }

    return formatNumber(value);
  }
}

export interface Stat {
  title: string;
  value: number;
  valueType: 'amount' | 'currency' | 'percentage';
  change: number;
}
