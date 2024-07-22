import React from 'react';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProducts from '@/components/HomeProducts';
import connectDB from '@/config/database';

const HomePage = () => {
  // console.log(process.env.MONGODB_URI)
 
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProducts />
    </div>
  )
}

export default HomePage