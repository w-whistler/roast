import type { Metadata } from 'next';
import './globals.css';
import { cn } from '../lib/utils';
import { fontPlusJakartaSans } from '../lib/fonts';
import { Header } from '../components';
import ActivitiesProvider from '../contexts/activitiesContext';

export const metadata: Metadata = {
  title: 'Roast',
  description: 'Roast test project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col bg-background text-base antialiased',
          fontPlusJakartaSans.className,
        )}
      >
        <ActivitiesProvider>
          <Header />
          <div>{children}</div>
        </ActivitiesProvider>
      </body>
    </html>
  );
}
