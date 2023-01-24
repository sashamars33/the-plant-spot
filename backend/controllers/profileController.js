const asyncHandler = require('express-async-handler')
const {cloudinary} = require('../config/cloudinary')
const Post = require('../models/Post')


const getUserPosts = asyncHandler(async (req,res) => {
    console.log('get user posts')
})

const createPost = asyncHandler( async (req,res) => {
    console.log('creat post')
   
})

const getProfile = asyncHandler( async (req,res) => {
    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
        profileImg: req.user.profileImg,
        bio: req.user.bio
    }

    res.status(200).json(user)
})

//Generate Token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}

module.exports = {
    getUserPosts,
    createPost,
    getProfile
}