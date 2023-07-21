const { eventObj } = require("../models/Event")

const createEventValidations = (req, res, next) => {
  const { name, category, date, description, price, capacity, assistance, estimate } = req.body

  if (assistance && estimate) {
    res.status(400).json({ message: 'Debe ingresar solo una de las siguientes propiedades: assistance o estimate.' })

  } else {
    if (!(name && category && date && description && price && capacity && (assistance || estimate))) {

      const errorMsg = []

      for (let key in eventObj) {
        if (key !== 'assistance' && key !== 'estimate' && !(key in req.body)) {
          errorMsg.push(`Debe ingresar la propiedad '${key}'.`)
        }
      }

      if (!assistance && !estimate) errorMsg.push('Debe ingresar propiedad assistance o estimate según corresponda.')

      res.status(400).json({ message: errorMsg })

    } else {
      next()
    }
  }
}

module.exports = {
  createEventValidations
}