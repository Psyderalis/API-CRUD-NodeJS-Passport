const authService = require('../services/authService');

// Login

const login = async (req, res) => {
  try {
    const { email, password } = req.query

    const loggedUser = await authService.login(email, password)

    if (loggedUser === false) {
      return res.status(400).json({ message: 'El nombre de usuario o contraseña no coinciden.' })
    }

    if (loggedUser === null) {
      return res.status(400).json({ message: 'Este usuario no existe.' })
    }

    if (loggedUser) res.status(200).json(loggedUser)

  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = {
  login
}