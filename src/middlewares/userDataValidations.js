const Joi = require('joi')
const UserModel = require('../models/User')

const schema = Joi.object({
  username: Joi.string()
    .min(5)
    .max(20)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

  role: Joi.string()
    .required()
})

const validateUserData = (req, res, next) => {

  const { username, password, email, role } = req.body

  const { error } = schema.validate({
    username,
    password,
    email,
    role
  })

  if (error) {
    return res.status(400).json({ message: error.details[0].message })
  }
  next()
}

const validateAvailableUser = async (req, res, next) => {
  const { username, email } = req.body

  const usernameFound = await UserModel.findOne({ username: username }).exec()

  const emailFound = await UserModel.findOne({ email: email }).exec()

  if (emailFound) {
    return res.status(400).json({message: 'Ya existe un usuario registrado con este email.'})
  }

  if (usernameFound) {
    return res.status(400).json({message: 'Nombre de usuario no disponible. Intente con otro.'})
  }

  next()
}

module.exports = {
  validateUserData,
  validateAvailableUser
}