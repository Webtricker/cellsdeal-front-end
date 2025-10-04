// import JustForYou from './components/JustForYou';
// import MultipleInterests from './components/MultipleInterests';
// import SalesProducts from './components/SalesProducts';
import React from 'react'
import TopWeeklyVendors from './components/TopWeeklyVendors';
import Articles from './components/Articles';
import HomeBanner from './components/HomeBanner';

export default function PubliceHomePage() {
  return (
    <>
      <HomeBanner />
      <TopWeeklyVendors />
      {/* <MultipleInterests /> */}
      {/* <JustForYou /> */}
      {/* <SalesProducts /> */}
      <Articles />
    </>
  );
}
