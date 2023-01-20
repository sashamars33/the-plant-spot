const asyncHandler = require('express-async-handler')
const bcrpyt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')



const registerUser = asyncHandler(async (req,res) => {
    const {name, email, password} = req.body
    
    //Validation 
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please include all fields.')
    }

    //Check is user exists
    const findExistingUser = await User.findOne({email})
    if(findExistingUser){
        res.status(400)
        throw new Error('Account already exists with this email.')
    }
    
    //Hash Password
    const salt = await bcrpyt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    //Create User
    const user = await User.create({
        name,
        email,
        password: hashedPass
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new error('Invalid user data.')
    }
})

const loginUser = asyncHandler( async (req,res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if( user && (await bcrpyt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email:  user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error("Invalid credentials.")
    }
})

const getMe = asyncHandler( async (req,res) => {
    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name
    }

    res.status(200).json(user)
})

//Generate Token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}