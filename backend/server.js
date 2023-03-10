const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const color = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3333
const app = express()

//Database Connection
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.send("Hello")
})
//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/profile', require('./routes/profileRoutes'))

//Error Handler
app.use(errorHandler)

app.listen(PORT, () => {
    if(process.env.ENV === "dev"){
        console.log("Server is running.")
    }
})