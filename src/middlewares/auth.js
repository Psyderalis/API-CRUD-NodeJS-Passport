const Joi = require('joi')
const jwt = require('jsonwebtoken');

const generateToken = (payload, secretPassword) => {

  const token = jwt.sign(payload, secretPassword)

  return token
}

const payload = {
  id : 1,
  username : 'usuaria',
  role: 'admin'
}

const secretPassword = 'claveSecreta'

// console.log(generateToken(payload, secretPassword))


const authenticate = (req, res, next) => {

  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }

}

// VERIFICAR QUE NO EXISTA USUARIO EN LA BASE DE DATOS ANTES DE CREAR

module.exports = {
  validateUserData
}