const Joi = require('joi')

const schema = Joi.object({
  userName: Joi.string()
    .alphanum()
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

const validateCustomer = (req, res, next) => {

  const { userName, password, email, role } = req.body

  const { error, value } = schema.validate({
    userName,
    password,
    email,
    role
  })

  if (error) {
    return res.status(400).json({ message: error.details[0].message })
  }

  next()
}

module.exports = {
  validateCustomer
}