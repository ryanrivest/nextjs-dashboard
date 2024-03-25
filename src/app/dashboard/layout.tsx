import SideNav from '@/app/ui/dashboard/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:divide flex h-screen flex-col md:flex-row md:divide-x md:overflow-hidden">
      <div className="w-full flex-none md:w-auto">
        <SideNav />
      </div>
      <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </main>
    </div>
  );
}
