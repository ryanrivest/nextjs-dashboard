'use client';

import { formatCurrency, formatNumber, formatPercent } from '@/app/lib/utils';
import { Icon } from '@iconify/react';

export default function Card({ title, value, valueType, change }: Stat) {
  const increased = change > 0;
  const trendColor = increased ? 'bg-light-green' : 'bg-light-red';
  const trendIcon = increased ? 'octicon:arrow-up-16' : 'octicon:arrow-down-16';
  const formattedValue = formatValue();
  const formattedChange = `${Math.abs(change)}%`;

  return (
    <div className="justify flex flex-col gap-4 rounded-xl border px-5 pt-3 shadow-sm">
      <p className="text-lg font-bold">{title}</p>
      <p className="text-4xl font-bold">{formattedValue}</p>
      <p className="flex items-center gap-3 text-sm text-black/60">
        <span
          className={`inline-flex items-center rounded-md px-2 py-1 ${trendColor}`}
        >
          <Icon
            icon={trendIcon}
            style={{ fontSize: '0.9rem' }}
            className="mr-1"
          />
          {formattedChange}
        </span>
        Compared to last month
      </p>
      <p></p>
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
