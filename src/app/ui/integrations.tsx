'use client';

import { Icon } from '@iconify/react';

export default function Integrations({ className }: { className?: string }) {
  const integrations = [
    {
      name: 'Stripe',
      logo: '/stripe-icon.svg',
      type: 'Billing',
      active: true,
    },
    {
      name: 'Walmart',
      logo: '/walmart-icon.svg',
      type: 'Marketplace',
      active: false,
    },
    {
      name: 'Zapier',
      logo: '/zapier-icon.svg',
      type: 'Automation',
      active: true,
    },
  ];

  return (
    <div
      className={`${className} dark:bg-dark-blue rounded-xl border px-5 pb-6 pt-3 shadow-sm dark:border-white/10`}
    >
      <div className="text-lg font-bold">Integrations</div>
      <div className="relative w-full py-2">
        <table className="w-full table-auto border-separate border-spacing-0 overflow-hidden rounded text-left text-sm text-black/60 dark:text-white/60">
          <thead className="bg-blue/10 dark:bg-white/10">
            <tr className="overflow-hidden">
              <th className="rounded-l px-2 py-2.5 align-middle font-normal">
                Application
              </th>
              <th className="px-2 py-2.5 font-normal">Type</th>
              <th className="px-2 py-2.5 font-normal">Status</th>
              <th className="hidden px-2 py-2.5 text-center font-normal md:block">
                Settings
              </th>
            </tr>
          </thead>
          <tbody>
            {integrations.map((integration, index) => (
              <tr key={index}>
                <td className="border-b px-2 py-4 align-middle font-bold text-black dark:border-white/10 dark:text-white">
                  <div className="flex items-center">
                    <span className="mr-2 inline-block rounded border p-1 dark:border-white/10">
                      <img
                        src={integration.logo}
                        width={24}
                        height={24}
                        alt={`${integration.name} logo`}
                        className="inline-block"
                      />
                    </span>
                    {integration.name}
                  </div>
                </td>
                <td className="border-b px-2 py-4 align-middle dark:border-white/10">
                  {integration.type}
                </td>
                <td className="border-b px-2 py-4 align-middle dark:border-white/10">
                  <div className="inline-flex items-center justify-items-center gap-1">
                    <Icon
                      icon={
                        integration.active
                          ? 'carbon:dot-mark'
                          : 'fluent:plug-disconnected-16-filled'
                      }
                      className={`relative ${integration.active ? 'text-green-500' : 'text-red-500'}`}
                      style={{ fontSize: '1rem' }}
                    />
                    <span className="text-black/60 dark:text-white/60">
                      {integration.active ? 'Active' : 'Disconnected'}
                    </span>
                  </div>
                </td>
                <td className="hidden border-b px-2 py-4 text-center align-middle dark:border-white/10 md:block">
                  <a className="inline-flex cursor-pointer justify-items-center gap-1">
                    Edit
                    <Icon
                      icon="mingcute:external-link-line"
                      style={{ fontSize: '1rem' }}
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
