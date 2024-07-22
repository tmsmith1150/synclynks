import React from 'react'

const ProductDetails = ({ product }) => {
    return (
        <main>
            <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
                <div className="text-gray-500 mb-4">{product.type}</div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <div
                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                    <i
                        className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                    ></i>
                    <p className="text-orange-700">Item number: {product.sku}
                    </p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">Description & Details</h3>
                <p className="text-xl text-gray-800 mb-4">{product.description}
                    </p>
                <div
                    className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9"
                >
                    <p>
                        <i className="fa-solid fa-bed"></i> Icon
                        <span className="hidden sm:inline">feature</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-bath"></i> Icon
                        <span className="hidden sm:inline">feature</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-ruler-combined"></i> Icon
                        <span className="hidden sm:inline">feature</span>
                    </p>
                </div>

                <p className="text-gray-500 mb-4">{product.details}
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">Available Finishes</h3>

                <ul
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none"
                >
                    {product.finishes.map((finish, index) => (
                        <li key={index}>
                            {finish}
                        </li>
                    ))}



                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <div id="map"></div>
            </div>
        </main>
    )
}

export default ProductDetails