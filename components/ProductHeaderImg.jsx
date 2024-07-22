import React from 'react';
import Image from 'next/image';


const ProductHeaderImg = ({ image }) => {
  return (
    // <!-- Property Header Image -->
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={image}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes='100vw'
            layout="responsive"
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

export default ProductHeaderImg