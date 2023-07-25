const express = require('express')
const { login } = require('../controllers/authControllers.js')

const router = express.Router()

// para login
router.post('/login', login)

module.exports = router