const Joi = require('joi')

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

  const { error, value } = schema.validate({
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


// VERIFICAR QUE NO EXISTA USUARIO EN LA BASE DE DATOS ANTES DE CREAR

module.exports = {
  validateUserData
}