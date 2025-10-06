import JustForYou from './components/JustForYou';
import MultipleInterests from './components/MultipleInterests';
import SalesProducts from './components/SalesProducts';
import React from 'react';
import TopWeeklyVendors from './components/TopWeeklyVendors';
import Articles from './components/Articles';
import HomeBanner from './components/HomeBanner';
import Brands from './components/Brands';
import ProductAdvertise from './components/ProductAdvertise';

export default function PublicHomePage() {
  return (
    <>
      <HomeBanner />
      <MultipleInterests />
      <ProductAdvertise />
      <JustForYou />
      <SalesProducts />
      <TopWeeklyVendors />
      <Brands />
      <Articles />
    </>
  );
}
