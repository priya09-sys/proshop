const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')


dotenv.config()

connectDB()

const app = express()

app.use(express.json())




app.use('/products', productRoutes)

app.use('/users', userRoutes)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server run on ${PORT}`))
