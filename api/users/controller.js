const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./model')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')


const SignUp = async (req, res) => {
    const { username, password, email } = req.body;
    console.log({ username, password, email })
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected")
        const existingUser = await User.exists({ email: email })
        if (existingUser) {
            res.status(208).json({
                message: "User Already Exists"        
            })
            console.log("User Already Exists")
        }

        else {
            await User.create({ username, email, password: await hash(password, 12) })
            console.log("User Created")
            res.status(201).json({
                message: "Signup Successfully"
            })
        }
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const Login = async (req, res) => {

    const { password, email } = req.body;
     console.log({password, email })

    try {
        await mongoose.connect(process.env.MONGO_URL)
        const existingUser = await User.findOne({ email: email })

        if (!existingUser) {
            res.status(404).json({
                message: "User not found"
            })
            console.log("user")

        }

        else {

            const decryptPassword = await compare(password, existingUser.password)
            if (email == existingUser.email && decryptPassword) {
                const token = sign(
                    {
                        id: existingUser._id,
                        username: existingUser.username,
                        email: existingUser.email,
                        profile : existingUser.profile,
                        role : existingUser.role
                    }
                    ,
                    process.env.JWT_SECRET
                )

                res.json({
                    message: "Successfully Loggined",
                    token: token
                })
                console.log("login")

            }

            else {
                res.json({
                    message: "invalid Credentials"      
                })
                console.log("invalid")
            }




        }

    }
    catch (error) {
        res.json({
            message: error.message
        })
        console.log("error")

    }
}

const allUsers = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        const Users = await User.find()
        res.json(
            {
                Users: Users
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


const getUserbyEmail = async (req, res) => {

    const { email } = req.params


    try {
        await mongoose.connect(process.env.MONGO_URL)
        const Users = await User.findOne({ email: email })
        res.json(
            {
                Users: Users
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


const userbyid = async (req, res) => {

    const { _id } = req.query


    try {
        await mongoose.connect(process.env.MONGO_URL)
        const Users = await User.findOne({ _id: _id })
        res.json(
            {
                Users: Users
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

const updateuser = async (req, res) => {
    const { _id, username } = req.body
  
    const filter = { _id };
    const update = { username };
  
    try {
        await connect(process.env.MONGO_URL)
  
        await User.findOneAndUpdate(filter, update, {
            new: true
        });
  
        const user = await User.find()
  
        res.json({
            message: "Success",
            user
        })
  
    }
  
  
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  
  }
  
const deleteuser = async (req, res) => {

    const { _id } = req.body
  
  
    try {
        await connect(process.env.MONGO_URL)
        await User.deleteOne({ _id })
        const user = await User.find()
        res.status(200).json({
            message: "Deleted Successfully",
            user
        })
    }
  
  
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  
  }

module.exports = { SignUp, Login, allUsers, getUserbyEmail, userbyid, updateuser, deleteuser }