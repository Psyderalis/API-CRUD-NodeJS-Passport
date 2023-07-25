const express = require('express')
const { login, getLogged } = require('../controllers/authControllers.js')

const router = express.Router()

// para login
router.post('/login', login)

router.get('/logged', getLogged)

module.exports = router