import Image from 'next/image';

export default async function Page() {
  return (
    <div className="flex flex-col">
      <header className="flex justify-between border-y px-8 md:border-t-0">
        <h1 className="text-xl font-bold md:text-2xl py-3">Dashboard</h1>
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
      <div className="px-8 py-3">Test</div>
    </div>
  );
}
