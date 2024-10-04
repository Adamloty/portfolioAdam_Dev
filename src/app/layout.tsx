import React from 'react';
import FloatingButton from '../components/FloatingButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}
