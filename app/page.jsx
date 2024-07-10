import React from 'react';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProducts from '@/components/HomeProducts';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProducts />
    </div>
  )
}

export default HomePage