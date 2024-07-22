'use client';
import React from 'react';
import { useState, useEffect } from 'react';



const ProductAddForm = () => {
    const [mounted, setMounted] = useState(false);
    const [fields, setFields] = useState({
        name: '',
        type: '',
        sku: '',
        description: '',
        details: '',
        price: '',
        finishes: [],
        images: [],

    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        //checking if nested product
        if (name.includes('.')) {
            const [outerKey, innerKey] = name.split('.');

            setFields((prevFields) => ({
                ...prevFields,
                [outerKey]: {
                    ...prevFields[outerKey],
                    [innerKey]: value
                }
            }));
            } else {
                setFields((prevFields) =>({
                    ...prevFields,
                    [name]: value,
                }));
        }
     }
    const handleFinishChange = () => { }
    const handleImagesChange = (e) => {
        const { files } = e.target;

        //clone images array
        const updatedImages  = [...fields.images];

        //add new files to the array
        for (const file of files) {
            updatedImages.push(file);
        }

        //update state with array of images
        setFields((prevFields) => ({
            ...prevFields,
            images: updatedImages,
        }));
     }

    return mounted &&
        <div>
            <form action='/api/products' method='POST' encType='multipart/form-data'>
                <h2 className="text-3xl text-center font-semibold mb-6">
                    Add Product
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="type"
                        className="block text-gray-700 font-bold mb-2"
                    >Product Type</label>
                    <select
                        id="type"
                        name="type"
                        className="border rounded w-full py-2 px-3"
                        required
                        value={fields.type}
                        onChange={handleChange}
                    >
                        <option value="Necklace">Necklace</option>
                        <option value="Bracelet">Bracelet</option>
                        <option value="Ring">Ring</option>
                        <option value="Earrings">Earrings</option>
                        <option value="Charm">Charm</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2"
                    >Product Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Product Name"
                        required
                        value={fields.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                    >Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className="border rounded w-full py-2 px-3"
                        rows="4"
                        placeholder="Add a main description of the product"
                        value={fields.description}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-4 bg-blue-50 p-4">
                    <label htmlFor="sku" className="block text-gray-700 font-bold mb-2">SKU</label>
                    <textarea
                        id="sku"
                        name="sku"
                        className="border rounded w-full py-2 px-3"
                        rows="1"
                        placeholder="Add a SKU"
                        value={fields.sku}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-4 bg-blue-50 p-4">
                    <label htmlFor="details" className="block text-gray-700 font-bold mb-2">Details</label>
                    <textarea
                        id="details"
                        name="details"
                        className="border rounded w-full py-2 px-3"
                        rows="4"
                        placeholder="Add details about the product"
                        value={fields.details}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-4 bg-blue-50 p-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
                    <textarea
                        id="price"
                        name="price"
                        className="border rounded w-full py-2 px-3"
                        rows="1"
                        placeholder="Add price"
                        value={fields.price}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-4 bg-blue-50 p-4">
                    <label htmlFor="finishes" className="block text-gray-700 font-bold mb-2">Finishes</label>
                    <textarea
                        id="finishes"
                        name="finishes"
                        className="border rounded w-full py-2 px-3"
                        rows="4"
                        placeholder="Add available finishes"
                        value={fields.finishes}
                        onChange={handleChange}
                    ></textarea>
                </div>


                <div className="mb-4">
                    <label htmlFor="images" className="block text-gray-700 font-bold mb-2"
                    >Images (Select up to 4 images)</label>
                    <input
                        type="file"
                        id="images"
                        name="images"
                        className="border rounded w-full py-2 px-3"
                        accept="image/*"
                        multiple
                        onChange={handleImagesChange}
                        required
                    />
                </div>

                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>

}

export default ProductAddForm