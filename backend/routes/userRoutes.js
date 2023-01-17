const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userController')

router.post('/', (req,res) => {
    res.send('register route')
})
router.post('/login', (req,res) => {
    res.send('login route')
})

module.exports = router