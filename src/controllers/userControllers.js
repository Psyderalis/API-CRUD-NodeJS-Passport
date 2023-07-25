const userService = require('../services/userService');

// Obtener usuario
const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body

    const savedUser = await userService.createAnUser({
      username,
      email,
      password,
      role
    })

    if (savedUser) {
      res.status(201).json({ message: 'Usuario creado exitosamente.', savedUser })

    } else {
      res.status(400).json({ message: 'No se pudo crear el usuario.' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener un usuario
const getUserById = async (req, res) => {
  try {
    const { id } = req.params

    const searchedUser = await userService.getAnUserById(id)

    if (searchedUser) {
      res.status(200).json(searchedUser)

    } else {
      res.status(400).json({ message: 'No se encontró el usuario.' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Borrar un usuario
const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params

    await userService.deleteAnUserById(id)

    res.status(200).json({ message: 'Usuario eliminado exitosamente.' })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Actualizar un usuario completamente 
const fullyUpdateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { username, email, password, role } = req.body

    if (!username || !email || !password || !role) {
      res.status(400).json({ message: 'Faltan datos para actualizar' })

    } else {
      await userService.fullyUpdateAnUser(id, {
        username,
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
const updateUser = async (req, res) => {
  try {
    const { id } = req.params

    if ((Object.keys(req.body).length === 0)) {
      res.status(400).json({ message: 'Cuerpo de la solicitud sin datos.' })

    } else {
      const { usename, email, password, role } = req.body

      await userService.updateAnUser(id, {
        usename,
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
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  fullyUpdateUser,
  updateUser
}