const { connect } = require('mongoose')
require('dotenv').config()
const Category = require('./model')


const addCategory = async (req, res) => {

    const {CategoryImage, CategoryName } =  req.body
    if(!CategoryName || !CategoryImage){
        res.json({
            message:"Please insert proper value"
        })
    }
    else{
        try {
            await connect(process.env.MONGO_URL)
        console.log("DB Connected")
        const existingname= await Category.exists({ CategoryName: CategoryName })
      if (existingname) {
        res.status(208).json({
          message: "Category Name already exists",
        });
      } 
        else{
      await Category.create({CategoryImage, CategoryName })
      res.status(201).json({
        message : "Category created successfully"
      })
        }
    }
         catch (error) {
            res.json({
                message:error.message
            })
    
    }
}
}

const allCategories = async (req, res) => {

    try {
        await connect(process.env.MONGO_URL)

        const categories = await Category.find()
        res.json(  {
            categories: categories
         } )
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const CategorybyName = async (req, res) => {
    const { name } = req.query;


    try {
        await connect(process.env.MONGO_URL)
        const category = await Category.findOne({ CategoryName: name })
        res.json({
            category: category
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })

    }

}

const CategorybyId = async (req, res) => {
    const { _id } = req.params;


    try {
        await connect(process.env.MONGO_URL)
        // const category = await Category.findOne({ _id: id })
        const category = await Category.findOne({ _id })

        res.json({
            category: category
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })

    }

}


const DeleteCategory = async (req, res) => {
    const { CategoryName } = req.body;

    if (!CategoryName) {
        res.status(400).json({
            message: "Please give CategoryName"
        })  
    }

    else {
        try {
            await connect(process.env.MONGO_URL)
            await Category.deleteOne({ CategoryName: CategoryName })
            const categories = await Category.find()

            res.json({
                message: "Category Deleted Successfully",
                categories
            })

        }

        catch (error) {
            res.json({
                message: error.message
            })
        }
    }
}

const updateCategory = async (req, res) => {
    const { _id, CategoryName, CategoryImage } = req.body

    const filter = { _id }
    const update = { CategoryName, CategoryImage }

    try {
        await connect(process.env.MONGO_URL)
        await Category.findOneAndUpdate(filter, update)
        res.json({
            message: "Category Updated Successfully"
        })

    }

    catch (error) {
        res.json({
            message: error.message
        })
    }

}


module.exports = { addCategory, allCategories, CategorybyName, CategorybyId, DeleteCategory, updateCategory }