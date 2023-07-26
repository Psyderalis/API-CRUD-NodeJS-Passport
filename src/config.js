const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3000
const DB_URI = process.env.DB_URI
const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
    PORT,
    DB_URI,
    SECRET_KEY
}