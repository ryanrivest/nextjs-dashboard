import Image from 'next/image';
import Card, { Stat } from '../ui/dashboard/card';

export default async function Page() {
  const stats: Stat[] = [
    {
      title: 'Total income',
      value: 33328.12,
      valueType: 'currency',
      change: 12.24,
    },
    {
      title: 'Profit',
      value: 8583.09,
      valueType: 'currency',
      change: -2.63,
    },
    {
      title: 'Total views',
      value: 52234.32,
      valueType: 'amount',
      change: 1.46,
    },
    {
      title: 'Conversion rate',
      value: 6.12,
      valueType: 'percentage',
      change: 2.31,
    },
  ];

  return (
    <div className="flex flex-col">
      <header className="flex justify-between border-y px-8 md:border-t-0">
        <h1 className="py-3 text-xl font-bold md:text-2xl">Dashboard</h1>
        <div className="border-l py-3 pl-8">
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
    </div>
  );
}
