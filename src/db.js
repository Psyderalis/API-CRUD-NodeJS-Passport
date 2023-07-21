const mongoose = require('mongoose')
const { DB_URI } = require('./config.js');

const connectDB = () => {

  mongoose.connect(DB_URI)
    .then(() => console.log('Connected to mongoDB'))
    .catch(error => console.log('Error connecting to mongoDB. Error: ' + error))

}

module.exports = connectDB