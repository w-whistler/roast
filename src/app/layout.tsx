import type { Metadata } from 'next';
import './globals.css';
import { cn } from '../lib/utils';
import { fontPlusJakartaSans } from '../lib/fonts';

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
          'min-h-screen bg-background antialiased',
          fontPlusJakartaSans.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
