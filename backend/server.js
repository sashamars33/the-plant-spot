const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.send("Hello")
})
//Routes
app.use('/api/users', require('./routes/userRoutes'))

//Error Handler
app.use(errorHandler)

app.listen(PORT, () => {
    if(process.env.ENV === "dev"){
        console.log("Server is running.")
    }
})