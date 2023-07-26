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

      console.log('se generó token: ', token)

      // res.cookie('userToken', token, { expires: new Date() + 4000 })
      res.cookie('userToken', token, { expiresIn: '1h' })
        .status(200).json('Inicio de sesión exitoso.')
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

const logout = (req, res) => {

  res.clearCookie('userToken').status(200).json({ message: 'Cierre de sesión exitoso.' })
}

module.exports = {
  login,
  getLogged,
  logout
}