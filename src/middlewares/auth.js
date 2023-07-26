const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config')

const secretPassword = SECRET_KEY

const generateToken = (payload) => {

  const token = jwt.sign(payload, secretPassword)

  return token
}

const authenticate = (req, res, next) => {
  const token = req.cookies.userToken

  // console.log(token)
  if (token) {

    // console.log(jwt.verify(token, secretPassword))
    const decodedJWT = jwt.verify(token, secretPassword)

    // decodedJWT ? next() : res.redirect('http://localhost:5173/login')

    decodedJWT ? next() : res.status(400).json('No se ha iniciado sesión.')

  } else {
    // res.redirect('http://localhost:5173/login')
    res.status(400).json('No se ha iniciado sesión.')
  }
}

module.exports = {
  generateToken,
  authenticate
}