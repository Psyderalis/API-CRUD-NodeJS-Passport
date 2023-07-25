const Joi = require('joi')
const jwt = require('jsonwebtoken')

const secretPassword = 'claveSecreta'

const generateToken = (payload) => {

  const token = jwt.sign(payload, secretPassword)

  return token
}

const authenticate = (req, res, next) => {

  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
}

module.exports = {
  generateToken
}