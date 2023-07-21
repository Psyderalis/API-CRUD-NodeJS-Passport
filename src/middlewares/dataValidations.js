const createEventValidations = (req, res, next) => {
  const { name, category, date, description, price, capacity, assistance, estimate } = req.body

  if (assistance && estimate) {
    res.status(400).json({ message: 'Debe ingresar solo una de las siguientes propiedades: assistance o estimate.' })

  } else {

    if (name && category && date && description && price && capacity && (assistance || estimate)) {
      next()

    } else {
      const errorMsg = []

      if (!name) errorMsg.push('Debe ingresar propiedad name.')
      if (!category) errorMsg.push('Debe ingresar propiedad category.')
      if (!date) errorMsg.push('Debe ingresar propiedad date.')
      if (!description) errorMsg.push('Debe ingresar propiedad description.')
      if (!price) errorMsg.push('Debe ingresar propiedad price.')
      if (!capacity) errorMsg.push('Debe ingresar propiedad capacity.')
      if (!assistance && !estimate) errorMsg.push('Debe ingresar propiedad assistance o estimate según corresponda.')

      res.status(400).json({ message: errorMsg })
    }
  }
}

module.exports = {
  createEventValidations
}