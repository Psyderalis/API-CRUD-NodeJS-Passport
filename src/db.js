const mongoose = require('mongoose')
const { DB_URI } = require('./config.js');

// const uri = "mongodb+srv://melanietolvett:AKM9pWiL9nClMphJ@cluster0.msbwbga.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () => {

  mongoose.connect(DB_URI)
    .then(() => console.log('Connected to mongoDB'))
    .catch(error => console.log('Error connecting to mongoDB. Error: ' + error))

}

module.exports = connectDB