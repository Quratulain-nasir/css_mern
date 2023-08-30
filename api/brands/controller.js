const {Brand} = require('./model')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()

const AddBrand = async (req, res) => {
    const { customId, BrandName, BrandImage } = req.body;

    if (!BrandName || !BrandImage) {
        res.json({
            message: "Please insert proper values"
        });
    } else {
        try {
            await mongoose.connect(process.env.MONGO_URL);
            console.log("DB Connected");
            
            const existingBrand = await Brand.exists({ BrandName: BrandName });
            if (existingBrand) {
                res.status(208).json({
                    message: "Brand Already Exists"
                });
            } else {
                const customId = uuidv4();
                const newBrand = await Brand.create({  customId, BrandName, BrandImage });
                res.status(201).json({
                    message: "Brand created successfully",
                    brand: newBrand
                });
            }
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    }
};



const brandByID = async (req,res) => {

    const {_id } = req.params
    try {
        await mongoose.connect(process.env.MONGO_URL)
        const Brands = await Brand.findOne({ _id : _id  })
        res.json(
            {
                Brands: Brands
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


const getAllBrands = async (req,res) => {
   
    try {
        await mongoose.connect(process.env.MONGO_URL)

        const Brands = await Brand.find()
        res.json(
            {
                Brands: Brands
            }
        )
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const brandByName = async (req,res) => {

    const { BrandName } = req.params
    try {
        await mongoose.connect(process.env.MONGO_URL)
        const Brands = await Brand.findOne({ BrandName : BrandName  })
        res.json(
            {
                Brands: Brands
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
const deletebrand = async (req, res) => {          

    const { _id } = req.body
  
  
    try {
        await connect(process.env.MONGO_URL)
        await Brand.deleteOne({ _id })
        const brand = await Brand.find()
        res.status(200).json({
            message: "Deleted Successfully",
            brand
        })
    }
  
  
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  
  }
  

  const updateBrand = async (req, res) => {
    const { _id,BrandName,BrandImage } = req.body
  
    const filter = { _id };
    const update = {  BrandName,BrandImage };
  
    try {
        await connect(process.env.MONGO_URL)
  
        await Brand.findOneAndUpdate(filter, update, {
            new: true
        });
  
        const brand = await Brand.find()
  
        res.json({
            message: "Success",
            brand
        })
  
    }
  
  
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  
  }

module.exports = { AddBrand , brandByID , getAllBrands , brandByName , deletebrand , updateBrand }   