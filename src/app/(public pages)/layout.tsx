import Footer from '@/sharedComponets/footer/Footer';
import PubliceHeader from '@/sharedComponets/header/PubliceHeader';
import React from 'react';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PubliceHeader />
      {children}
      <Footer />
    </>
  );
}
