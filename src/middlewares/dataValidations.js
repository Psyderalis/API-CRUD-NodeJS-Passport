const { eventObj } = require("../models/Event")
const Joi = require('joi')

const schema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  category: Joi.string().pattern(new RegExp('^[A-Za-z]{3,10}$')).required(),
  date: Joi.date().required(),
  description: Joi.string().min(10).max(100).required(),
  image: Joi.string().required(),
  place: Joi.string().min(3).max(20).required(),
  price: Joi.number().required(),
  capacity: Joi.number().min(1).required(),
  assistance: Joi.number(),
  estimate: Joi.number()
}).oxor('assistance', 'estimate')

const validateData = (req, res, next) => {

  const payload = req.body

  if (!payload.assistance && !payload.estimate) {
    return res.status(400).json({ message: 'Debe ingresar propiedad assistance o estimate según corresponda.' })
  }

  if (payload.assistance && payload.estimate) {
    return res.status(400).json({ message: 'Debe ingresar solo una de las siguientes propiedades: assistance o estimate.' })
  }

  const { error } = schema.validate({
    name: payload.name,
    category: payload.category,
    date: payload.date,
    description: payload.description,
    image: payload.image,
    place: payload.place,
    price: payload.price,
    capacity: payload.capacity
  })

  error ? res.status(400).json({ message: error.details[0].message }) : next()
}

const validateId = (req, res, next) => {

  const idSchema = Joi.string().alphanum().min(20).max(25).required()

  const { id } = req.params

  const { error } = idSchema.validate(id)

  error ? res.status(400).json({ message: error.details[0].message }) : next()

}

module.exports = {
  validateData,
  validateId
}