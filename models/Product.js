import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    finishes: [
        {
        type: String,
        }
    ],
    images: [
        {
            type: String
        }
    ],
    is_featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});


const Product = models.Product || model('Product', ProductSchema);

export default Product;