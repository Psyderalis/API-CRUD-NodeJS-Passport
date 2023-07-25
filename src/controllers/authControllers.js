const { generateToken } = require('../middlewares/auth')
const authService = require('../services/authService')


// Login

const login = async (req, res) => {
  try {
    const { email, password } = req.query

    const user = await authService.login(email, password)

    if (user === false) {
      return res.status(400).json({ message: 'El nombre de usuario o contraseña no coinciden.' })
    }

    if (user === null) {
      return res.status(400).json({ message: 'Este usuario no existe.' })
    }

    if (user) {
      const token = generateToken({
        id: user._id,
        email: user.email
      })

      // res.status(200).json({ message: 'Inicio de sesión exitoso.' }).cookie('userToken', token)
      res.cookie('userToken', token).status(200).json('Inicio de sesión exitoso.')
    }

  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const getLogged = (req, res) => {
  try {
    const cookies = req.cookies

    res.status(200).json({ cookies })

  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = {
  login,
  getLogged
}