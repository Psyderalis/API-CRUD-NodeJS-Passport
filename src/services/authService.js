const UserModel = require('../models/User')

// Login

const login = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email: email })

    if (user && !(user.password === password)) {
      return false
    }

    return user

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  login
}