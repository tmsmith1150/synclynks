import connectDB from "@/config/database";
import Product from "@/models/Product";
import { getSessionUser } from '@/utils/getSessionUser';
import cloudinary from '@/config/cloudinary';


// GET /api/products
export const GET = async (request) => {
    try {
        await connectDB();

        const products = await Product.find({});

        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', { status: 500 })
    }
};


export const POST = async (request) => {
    try {
        await connectDB();

        const sessionUser = await getSessionUser();

        if (!sessionUser || !sessionUser.userId) {
            return new Response('User ID is required', { status: 401 });
        }

        const { userId } = sessionUser;

        const formData = await request.formData();

        // Access all values from amenities and images
        const amenities = formData.getAll('amenities');

        const images = formData
            .getAll('images')
            .filter((image) => image.name !== '');


        // Create productData object for database
        const productData = {
            type: formData.get('type'),
            name: formData.get('name'),
            description: formData.get('description'),
            sku: formData.get('sku'),
            details: formData.get('details'),
            price: formData.get('price'),
            finishes: formData.get('finishes'),


        };


        //upload images to cloudinary
        const imageUrls = [];

        for (const imageFile of images) {
            const imageBuffer = await imageFile.arrayBuffer();
            const imageArray = Array.from(new Uint8Array(imageBuffer));
            const imageData = Buffer.from(imageArray);

            // Convert the image data to base64
            const imageBase64 = imageData.toString('base64');

            // Make request to upload to Cloudinary
            const result = await cloudinary.uploader.upload(
                `data:image/png;base64,${imageBase64}`,
                {
                    folder: 'synclynks',
                }
            );

            imageUrls.push(result.secure_url);
        }

        // NOTE: here there is no need to await the resolution of
        // imageUploadPromises as it's not a array of Promises it's an array of
        // strings, additionally we should not await on every iteration of our loop.

        productData.images = imageUrls;

        const newProduct = new Product(productData);
        await newProduct.save();

        return Response.redirect(
            `${process.env.NEXTAUTH_URL}/products/${newProduct._id}`
        );
    } catch (error) {
        return new Response('Failed to add product', { status: 500 });
    }
};




















































































//     // Upload image(s) to Cloudinary
//     // NOTE: this will be an array of strings, not a array of Promises
//     // So imageUploadPromises has been changed to imageUrls to more
//     // declaratively represent it's type.

//     const imageUrls = [];

//     for (const imageFile of images) {
//         const imageBuffer = await imageFile.arrayBuffer();
//         const imageArray = Array.from(new Uint8Array(imageBuffer));
//         const imageData = Buffer.from(imageArray);

//         // Convert the image data to base64
//         const imageBase64 = imageData.toString('base64');

//         // Make request to upload to Cloudinary
//         const result = await cloudinary.uploader.upload(
//             `data:image/png;base64,${imageBase64}`,
//             {
//                 folder: 'propertypulse',
//             }
//         );

//         imageUrls.push(result.secure_url);
//     }

//     // NOTE: here there is no need to await the resolution of
//     // imageUploadPromises as it's not a array of Promises it's an array of
//     // strings, additionally we should not await on every iteration of our loop.

//     propertyData.images = imageUrls;

//     const newProperty = new Property(propertyData);
//     await newProperty.save();

//     return Response.redirect(
//         `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
//     );
// } 