const express = require('express')
const router = express.Router()
const profileControllers = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
 
router.get('/posts', userControllers.registerUser)
router.post('/post', userControllers.loginUser)
router.get('/profile', protect, userControllers.getMe)

module.exports = router