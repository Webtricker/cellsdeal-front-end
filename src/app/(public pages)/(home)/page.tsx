import Articles from './components/Articles';
import JustForYou from './sections/JustForYou';
import MultipleInterests from './sections/MultipleInterests';
import SalesProducts from './sections/SalesProducts';
import React from 'react'
import TopWeeklyVendors from './TopWeeklyVendors'

export default function PubliceHomePage() {
  return (
    <>
      <TopWeeklyVendors />
      <MultipleInterests />
      <JustForYou />
      <SalesProducts />
      <Articles />
    </>
  );
}
