const jwt = require('jsonwebtoken')

const secretPassword = 'claveSecreta'

const generateToken = (payload) => {

  const token = jwt.sign(payload, secretPassword)

  return token
}

const authenticate = (req, res, next) => {
  const token = req.cookies.userToken

  if (token) {

    // console.log(jwt.verify(token, secretPassword))
    const decodedJWT = jwt.verify(token, secretPassword)

    decodedJWT ? next() : res.redirect('/login')

  } else {
    res.redirect('/login')
  }
}

module.exports = {
  generateToken,
  authenticate
}