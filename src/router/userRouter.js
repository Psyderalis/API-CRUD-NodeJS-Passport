const express = require('express')
const {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  fullyUpdateUser,
  updateUser,
} = require('../controllers/userControllers.js')

const { validateUserData } = require('../middlewares/userDataValidations.js');

const router = express.Router()

router.get('/', getUsers)

router.post('/', validateUserData, createUser)

router.get('/:id', getUserById)

router.delete('/:id', deleteUserById)

router.put('/:id', validateUserData, fullyUpdateUser)

router.patch('/:id', updateUser)

module.exports = router