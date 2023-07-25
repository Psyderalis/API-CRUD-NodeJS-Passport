const UserModel = require('../models/User')

// Obtener usuarios
const getAllUsers = async () => {
  try {
    const users = await UserModel.find()

    return users

  } catch (error) {
    throw new Error(error)
  }
}

// Crear un nuevo usuario
const createAnUser = async (userData) => {
  try {
    const newUser = new UserModel(userData)

    const savedUser = await newUser.save()

    return savedUser

  } catch (error) {
    throw new Error(error)
  }
}

// Obtener un usuario
const getAnUserById = async (id) => {
  try {

    const searchedUser = await UserModel.findById(id)

    return searchedUser

  } catch (error) {
    throw new Error(error)
  }
}

// Borrar un usuario
const deleteAnUserById = async (id) => {
  try {

    await UserModel.deleteOne({ _id: id })

  } catch (error) {
    throw new Error(error)
  }
}

// Actualizar un usuario completamente
const fullyUpdateAnUser = async (id, newData) => {
  try {

    const fullyUpdatedUser = await UserModel.findOneAndUpdate({ _id: id }, newData)

    return fullyUpdatedUser

  } catch (error) {
    throw new Error(error)
  }
}

// Acualizar parcialmente un usuario
const updateAnUser = async (id, newData) => {
  try {

    await UserModel.updateOne({ _id: id }, newData)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getAllUsers,
  createAnUser,
  getAnUserById,
  deleteAnUserById,
  fullyUpdateAnUser,
  updateAnUser
}