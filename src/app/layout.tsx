import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import './globals.css';
import SideNav from '@/app/ui/side-nav';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Next.js Dashboard',
  description: 'Dashboard built with Next.js and Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class">
          <div className="md:divide flex h-screen flex-col dark:divide-white/10 md:flex-row md:divide-x md:overflow-hidden">
            <div className="w-full flex-none md:w-auto">
              <SideNav />
            </div>
            <main className="flex-grow dark:bg-white/10 md:overflow-y-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
