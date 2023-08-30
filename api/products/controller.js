const mongoose = require('mongoose')
require('dotenv').config()
const Product = require('./schema');

const Productbybrand = async (req,res) => {

    const { brand } = req.params
    try {
      await mongoose.connect(process.env.MONGO_URL)
      const Products = await Product.find({ brand: brand })
       console.log("Products:", Products);
      res.json(
          {
            Products: Products
          }
        )

    }
    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const Productbycategory = async (req,res) => {

    const { category } = req.params
    try {
      await mongoose.connect(process.env.MONGO_URL)
      const Products = await Product.find({ category: category })
      res.json(
          {
            Products: Products
          }
        )

    }
    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}


const postProducts = async (req, res) => {
    const { id, title, price, description,brand,thumbnail, category, images } = req.body;
    console.log({ id, title,description, price, brand,thumbnail, category, images });
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");

        // Create a new instance of the Product model
        const newProduct = new Product({
            id,
            title,
            price,
            brand,
            thumbnail,
            category,
            description,
            images,
        });

        // Save the new product to the database
        await newProduct.save();

        res.status(208).json({
            message: "Product Added Successfully",
        });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

const updateproduct = async (req, res) => {
    const { _id, id ,title, description, price, thumbnail, brand, category, images} = req.body
  
    const filter = { _id };
    const update = { id,title,description, price,thumbnail, brand, category, images };
  
    try {
        await connect(process.env.MONGO_URL)
  
        await Product.findOneAndUpdate(filter, update, {
            new: true
        });
  
        const product = await Product.find()
  
        res.json({
            message: "Success",
            product
        })
  
    }
  
  
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  
  }

const deleteproduct = async (req, res) => {

    const { _id } = req.body
  
  
    try {
        await connect(process.env.MONGO_URL)
        await Product.deleteOne({ _id })
        const product = await Product.find()
        res.status(200).json({
            message: "Deleted Successfully",
            product
        })
    }
  
  
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  
  }

const getAllProducts = async (req,res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        const Products = await Product.find()
        res.json(
            {
                Products: Products
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const ProductbyId = async (req, res) => {
    const { id } = req.params;


    try {
        await mongoose.connect(process.env.MONGO_URL)
        // const category = await Category.findOne({ _id: id })
        const product = await Product.findOne({ id })

        res.json({
            product: product
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })

    }

}

const ProductbyName = async (req, res) => {
    const { title } = req.params;


    try {
        await mongoose.connect(process.env.MONGO_URL)
        // const category = await Category.findOne({ _id: id })
        const product = await Product.findOne({ title })

        res.json({
            product: product
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })

    }

}

module.exports = { Productbybrand, postProducts ,ProductbyName, Productbycategory , updateproduct , deleteproduct , getAllProducts , ProductbyId}