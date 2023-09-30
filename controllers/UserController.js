const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler( async(req, res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const getUserByID =  asyncHandler(async(req, res)=>{
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const postUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

const updateUser = async(req, res)=>{
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body)
        if (!user) {
            return res.status(404).json({message:  `Cannot find product with the id ${id}`})
        }
        const updateduser = await User.findById(id)
        res.status(200).json(updateduser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({message: `Cannot find product with theid ${id}`})
        }
        res.status(200).json(user)
    } catch (error) {
        error.status(500).json({message: error.message})
    }
}

module.exports = {
    getUsers,
    getUserByID,
    postUser,
    updateUser,
    deleteUser
}