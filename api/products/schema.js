const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
     images: {
        type: [String], 
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "product"
    },
});

const Product = model('product', ProductSchema);
module.exports = Product;
