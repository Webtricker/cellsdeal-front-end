import Footer from '@/sharedComponets/footer/Footer';
import PubliceHeader from '@/sharedComponets/header/PubliceHeader';
import ProductDetailsModal from '@/sharedComponets/modal/ProductDetailsModal';
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
      <ProductDetailsModal />
      <Footer />
    </>
  );
}
