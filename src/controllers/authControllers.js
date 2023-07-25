const authService = require('../services/authService');

// Login

const login = async (req, res) => {
    try {
      const { email, password } = req.query
  
      userService.login()
  
    } catch (error) {
  
    }
  
  }
  
  module.exports = {
    login
  }