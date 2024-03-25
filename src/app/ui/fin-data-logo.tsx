import clsx from 'clsx';
import Image from 'next/image';

export default function FinDataLogo({ expanded }: { expanded: boolean }) {
  return (
    <div
      className={clsx(
        !expanded ? 'w-8 overflow-x-hidden' : '',
        'flex flex-row items-center',
      )}
    >
      <Image
        src="/Logotype.svg"
        width={100}
        height={28}
        alt="FinData Logo"
        className="max-w-none"
        priority
      />
    </div>
  );
}
