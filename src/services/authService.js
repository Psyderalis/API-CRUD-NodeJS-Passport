const UserModel = require('../models/User')

// Login

const login = async (email, password) => {
    try {
      const user = await UserModel.findOne({ email: email })
  
    } catch (error) {
  
    }
  
  }

  module.exports = {
    login
  }