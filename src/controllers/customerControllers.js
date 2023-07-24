const customerService = require('../services/customerService');

// Obtener customer
const getCustomers = async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers()
    res.status(200).json(customers)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Crear un nuevo customer
const createCustomer = async (req, res) => {
  try {
    const {userName, email, password, role } = req.body

    const savedCustomer = await customerService.createACustomer({
      userName,
      email,
      password,
      role
    })

    if (savedCustomer) {
      res.status(201).json({ message: 'Usuario creado exitosamente.', savedCustomer })

    } else {
      res.status(400).json({ message: 'No se pudo crear el usuario.' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener un customer
const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params

    const searchedCustomer = await customerService.getACustomerById(id)

    if (searchedCustomer) {
      res.status(200).json(searchedCustomer)

    } else {
      res.status(400).json({ message: 'No se encontró el usuario.' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Borrar un customer
const deleteCustomerById = async (req, res) => {
  try {
    const { id } = req.params

    await customerService.deleteACustomerById(id)

    res.status(200).json({ message: 'Usuario eliminado exitosamente.' })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Actualizar un customer completamente 
const fullyUpdateCustomer = async (req, res) => {
  try {
    const { id } = req.params
    const { userName, email, password, role } = req.body

    if (!userName || !email || !password || !role) {
      res.status(400).json({ message: 'Faltan datos para actualizar' })

    } else {
      await customerService.fullyUpdateACustomer(id, {
        userName,
        email,
        password,
        role
      })

      res.status(200).json({ message: 'Usuario actualizado exitosamente.' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Acualizar parcialmente un usuario
const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params

    if ((Object.keys(req.body).length === 0)) {
      res.status(400).json({ message: 'Cuerpo de la solicitud sin datos.' })

    } else {
      const { userName, email, password, role } = req.body

      await customerService.updateACustomer(id, {
        userName,
        email,
        password,
        role
      })

      res.status(200).json({ message: 'Usuario actualizado exitosamente.' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getCustomers,
  createCustomer,
  getCustomerById,
  deleteCustomerById,
  fullyUpdateCustomer,
  updateCustomer
}