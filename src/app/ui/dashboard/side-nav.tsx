'use client';

import FinDataLogo from '@/app/ui/fin-data-logo';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { clsx } from 'clsx';
import { useState } from 'react';

export default function SideNav() {
  const [expanded, setExpanded] = useState(true);
  const [opened, setOpened] = useState(false);

  const toggleExpanded = () => setExpanded((expanded) => !expanded);
  const toggleOpened = () => setOpened((opened) => !opened);

  return (
    <div className={clsx(expanded ? 'md:w-64' : '', 'flex h-full flex-col')}>
      <div className="text-blue flex items-center justify-between px-3 py-4">
        <Link href="/">
          <FinDataLogo expanded={expanded} />
        </Link>
        <button className="md:hidden" onClick={toggleOpened}>
          <Icon icon="mdi:hamburger-menu" style={{ fontSize: '2rem' }} />
        </button>
        <button
          className="ml-1 hidden h-6 w-6 rounded-md border text-black md:block"
          onClick={toggleExpanded}
        >
          <Icon
            icon={expanded ? 'octicon:arrow-left-16' : 'octicon:arrow-right-16'}
            style={{ fontSize: '1rem' }}
            className="mx-auto"
          />
        </button>
      </div>
      <Menu
        expanded={expanded}
        opened={opened}
        groups={[
          {
            id: 'main',
            links: [
              {
                href: '/',
                icon: 'material-symbols:space-dashboard-outline',
                text: 'Dashboard',
                active: true,
              },
              { href: '/', icon: 'mdi:payment', text: 'Payment' },
              { href: '/', icon: 'majesticons:users-line', text: 'Customers' },
              { href: '/', icon: 'tabler:message-2', text: 'Messages' },
            ],
          },
          {
            id: 'secondary',
            links: [
              { href: '/', icon: 'lets-icons:bag', text: 'Product' },
              { href: '/', icon: 'basil:invoice-outline', text: 'Invoice' },
              { href: '/', icon: 'akar-icons:statistic-up', text: 'Analytics' },
            ],
          },
          {
            id: 'thirdiary',
            links: [
              { href: '/', icon: 'uil:setting', text: 'Settings' },
              { href: '/', icon: 'ic:round-security', text: 'Security' },
              {
                href: '/',
                icon: 'material-symbols:help-outline',
                text: 'Help',
              },
            ],
          },
          {
            id: 'logout',
            links: [{ href: '/', icon: 'basil:logout-solid', text: 'Log Out' }],
          },
        ]}
      />
    </div>
  );
}

interface NavLink {
  href: string;
  icon: string;
  text: string;
  active?: boolean;
}

interface NavGroup {
  id: string;
  links: NavLink[];
}

function Menu({
  groups,
  expanded,
  opened,
}: {
  groups: NavGroup[];
  expanded: boolean;
  opened: boolean;
}) {
  return (
    <div className={clsx(opened ? 'block' : 'hidden', 'md:block divide divide-y')}>
      {groups.map((group) => (
        <ul key={group.id} className="flex flex-col items-center px-4">
          {group.links.map((link) => (
            <li key={link.text} className={clsx(expanded ? 'w-full' : '')}>
              <a
                href={link.href}
                className={clsx(
                  link.active
                    ? 'text-blue bg-blue/25'
                    : 'hover:bg-blue/25 hover:text-blue text-black/60',
                  expanded ? 'flex' : 'inline-flex',
                  'my-3 h-9 items-center rounded-md p-1.5 text-lg font-bold',
                )}
              >
                <Icon
                  icon={link.icon}
                  style={{ fontSize: '1.5rem' }}
                  className={clsx(expanded ? 'mr-3' : '')}
                />
                <span className={clsx(expanded ? 'inline' : 'hidden')}>
                  {link.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
