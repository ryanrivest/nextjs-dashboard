'use client';

import { formatCurrency } from '@/app/lib/utils';

export default function RecentSales({ className }: { className?: string }) {
  const orders = [
    {
      name: 'Ethan Johnson',
      location: 'Seattle, WA',
      amount: 1807.93,
    },
    {
      name: 'Sophia Garcia',
      location: 'San Francisco, CA',
      amount: 2200.13,
    },
    {
      name: 'Liam Miller',
      location: 'Denver, CO',
      amount: 2050.49,
    },
    {
      name: 'Ava Smith',
      location: 'Austin, TX',
      amount: 1900.12,
    },
    {
      name: 'Noah Martinez',
      location: 'Chicago, IL',
      amount: 1980.74,
    },
    {
      name: 'Isabella Brown',
      location: 'Miami, FL',
      amount: 2249.99,
    },
  ];

  return (
    <div className={`${className} rounded-xl border px-5 pb-6 pt-3 shadow-sm`}>
      <div className="mb-3 text-lg font-bold">Recent Sales</div>
      <div className="relative grid w-full gap-8">
        {orders.map((order, index) => (
          <div className="flex items-center gap-4" key={index}>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{order.name}</p>
              <p className="text-sm text-black/60">{order.location}</p>
            </div>
            <div className="ml-auto font-bold">
              {formatCurrency(order.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
