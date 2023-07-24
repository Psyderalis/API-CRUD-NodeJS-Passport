const { eventObj } = require("../models/Event")

const validateData = (req, res, next) => {
  const { assistance, estimate } = req.body

  const errorMsg = []

  for (let key in eventObj) {
    if (key !== 'assistance' && key !== 'estimate' && !(key in req.body)) {
      errorMsg.push(`Debe ingresar la propiedad '${key}'.`)
    }
  }

  if (!assistance && !estimate) errorMsg.push('Debe ingresar propiedad assistance o estimate según corresponda.')

  if (assistance && estimate) errorMsg.push('Debe ingresar solo una de las siguientes propiedades: assistance o estimate.')

  if (errorMsg.length > 0) {
    res.status(400).json({ message: errorMsg })

  } else {
    next()
  }
}

const validateId = (req, res, next) => {
  const { id } = req.params
  if (!id) {
    res.status(400).json({ message: 'Debe especificar id' })
  } else {
    next()
  }
}

module.exports = {
  validateData,
  validateId
}