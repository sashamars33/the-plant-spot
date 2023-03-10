const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

const protect = asyncHandler( async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startswit('Bearer')){
        try{
            //Get token from headers
            token = req.headers.authorization.split(' ')[1]
            //Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //Get user from token
            req.user = await User.findByID(decoded.id).selected('-password')

            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized.')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not Authorized.')
    }
})

module.exports = {
    protect
}