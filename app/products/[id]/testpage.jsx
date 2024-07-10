'use client';
import React from 'react';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

const ProductPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const pathname = usePathname();
    

  return (
    <div>
        <h1>ProductPage</h1>
        <button onClick={ () => router.push('/') }  className="bg-blue-500">Home{id}{name}{pathname}</button>
        </div>
  )
}

export default ProductPage