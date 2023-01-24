const express = require('express')
const router = express.Router()
const profileControllers = require('../controllers/profileController')
const { protect } = require('../middleware/authMiddleware')
 
router.get('/posts', profileControllers.getUserPosts)
router.post('/post', profileControllers.createPost)
router.get('/profile', protect, profileControllers.getProfile)

module.exports = router