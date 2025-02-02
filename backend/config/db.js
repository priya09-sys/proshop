const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log(`Mongo Connected: ${conn.connection.host}`)
    }
    catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)

    }
}

module.exports = connectDB