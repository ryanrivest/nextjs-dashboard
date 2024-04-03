import Image from 'next/image';
import Card, { Stat } from '@/app/ui/card';
import SalesOverviewChart from '@/app/ui/sales-overview-chart';
import RecentSales from '@/app/ui/recent-sales';
import RegisteredUsersChart from '@/app/ui/registered-users-chart';
import Integrations from '@/app/ui/integrations';

export default async function Page() {
  const stats: Stat[] = [
    {
      title: 'Total income',
      value: 33328.12,
      valueType: 'currency',
      change: 0.1224,
    },
    {
      title: 'Profit',
      value: 8583.09,
      valueType: 'currency',
      change: -0.0263,
    },
    {
      title: 'Total views',
      value: 52234.32,
      valueType: 'amount',
      change: 0.0146,
    },
    {
      title: 'Conversion rate',
      value: 0.0612,
      valueType: 'percentage',
      change: 0.0231,
    },
  ];

  return (
    <div className="flex flex-col">
      <header className="flex justify-between border-y px-8 md:border-t-0 dark:border-y-white/10 dark:bg-dark-blue">
        <h1 className="py-3 text-xl font-bold md:text-2xl">Dashboard</h1>
        <div className="border-l dark:border-l-white/10 py-3 pl-8">
          <Image
            src="/profile-icon.svg"
            width={32}
            height={32}
            alt="Profile Icon"
            className="max-w-none"
            priority
          />
        </div>
      </header>
      <div className="grid gap-4 px-8 py-3 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            title={stat.title}
            value={stat.value}
            valueType={stat.valueType}
            change={stat.change}
          />
        ))}
      </div>
      <div className="grid gap-4 px-8 py-3 md:grid-cols-2 lg:grid-cols-6">
        <SalesOverviewChart className="col-span-1 md:col-span-2 lg:col-span-4" />
        <RecentSales className="col-span-1 md:col-span-2 lg:col-span-2" />
      </div>
      <div className="grid gap-4 px-8 py-3 lg:grid-cols-6">
        <RegisteredUsersChart
          className="col-span-1 lg:col-span-2"
          premiumUsers={2804}
          basicUsers={742}
        />
        <Integrations className="col-span-1 md:col-span-2 lg:col-span-4" />
      </div>
    </div>
  );
}
