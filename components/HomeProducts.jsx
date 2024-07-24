import React from 'react';
// import products from '@/products.json';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { fetchProducts } from '@/utils/requests';



const HomeProducts = async () => {
    const products = await fetchProducts();

    const recentProducts = products
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
    return (
        <div>
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-gray-500 mb-6 text-center">
                    New Collections
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    { recentProducts === 0 ? (
                        <p>No products found</p>
                    ) : recentProducts.map((product) => (
                        <ProductCard key={product._id} product= {product} />
                    )) }
                </div>
            </div>
        </section>
        <section className="m-auto max-w-lg my-10 px-6">
      <Link
        href="/products"
        className="block bg-gray-800 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-600"
        >View All Products</Link>
    </section>

        </div>

    )
}

export default HomeProducts