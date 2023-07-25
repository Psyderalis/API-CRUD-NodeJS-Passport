const express = require('express')
const { login, getLogged, logout } = require('../controllers/authControllers.js')
const { authenticate } = require('../middlewares/auth.js')

const router = express.Router()

// para login
router.post('/login', login)

router.get('/logged', authenticate, getLogged)

router.post('/logout', logout)

module.exports = router