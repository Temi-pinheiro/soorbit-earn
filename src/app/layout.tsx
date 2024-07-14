'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { useLayoutEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <html lang='en' className='w-full h-full'>
      <body
        style={{ width: '100%', height: '100%' }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
