import React from 'react';
import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    // <!-- Renters and Owners -->
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          
          <InfoBox 
          heading='Browse our luxury products'
          backgroundColor ='bg-gray-100'
          buttonInfo={{
            text: 'Shop Products',
            link: '/products',
            backgroundColor: 'bg-black'
          }}
          >New Arrivals</InfoBox>
          <InfoBox 
          heading='Browse our luxury products'
          backgroundColor ='bg-blue-100'
          buttonInfo={{
            text: 'Shop Products',
            link: '/products',
            backgroundColor: 'bg-black'
          }}
          >Best Sellers</InfoBox>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes