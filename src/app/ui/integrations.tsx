'use client';

import Image from 'next/image';
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
      name: 'HubSpot',
      logo: '/hubspot-icon.svg',
      type: 'CRM',
      active: false,
    },
    // {
    //   name: 'Shopify',
    //   logo: '/shopify-icon.svg',
    //   type: 'E-commerce',
    //   active: true,
    // },
    {
      name: 'Zapier',
      logo: '/zapier-icon.svg',
      type: 'Automation',
      active: true,
    },
    // {
    //   name: 'Walmart',
    //   logo: '/walmart-icon.svg',
    //   type: 'E-commerce',
    //   active: false,
    // },
  ];

  return (
    <div className={`${className} rounded-xl border px-5 pb-6 pt-3 shadow-sm`}>
      <div className="text-lg font-bold">Integrations</div>
      <div className="relative w-full py-2">
        <table className="w-full table-auto border-separate border-spacing-0 overflow-hidden rounded text-left text-sm text-black/60">
          <thead className="bg-blue/10">
            <tr className="overflow-hidden">
              <th className="rounded-l px-2 py-2.5 align-middle font-normal">
                Application
              </th>
              <th className="px-2 py-2.5 font-normal">Type</th>
              <th className="px-2 py-2.5 font-normal">Status</th>
              <th className="px-2 py-2.5 font-normal text-center">Settings</th>
            </tr>
          </thead>
          <tbody>
            {integrations.map((integration, index) => (
              <tr key={index}>
                <td className="border-b px-2 py-4 align-middle font-bold text-black">
                  <div className="flex items-center">
                    <span className="mr-2 inline-block rounded border p-1">
                      <Image
                        src={integration.logo}
                        width={24}
                        height={24}
                        alt={`${integration.name} logo`}
                        className="inline-block"
                        priority
                      />
                    </span>
                    {integration.name}
                  </div>
                </td>
                <td className="border-b px-2 py-4 align-middle">
                  {integration.type}
                </td>
                <td className="border-b px-2 py-4 align-middle">
                  <div className="inline-flex items-center justify-items-center gap-1">
                    <Icon
                      icon={integration.active ? 'carbon:dot-mark' : 'fluent:plug-disconnected-16-filled'}
                      className={`relative ${integration.active ? 'text-green-500' : 'text-red-500'}`}
                      style={{ fontSize: '1rem' }}
                    />
                    <span className="text-black/60">
                      {integration.active ? 'Active' : 'Disconnected'}
                    </span>
                  </div>
                </td>
                <td className="border-b px-2 py-4 align-middle text-center">
                  <div className="inline-flex items-center justify-items-center gap-1">
                    Edit
                    <Icon
                      icon="mingcute:external-link-line"
                      style={{ fontSize: '1rem' }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
