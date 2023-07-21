const CustomerModel = require('../models/Customer')

// Obtener customers
const getAllCustomers = async () => {
  try {
    const customers = await CustomerModel.find()

    return customers

  } catch (error) {
    throw new Error(error)
  }
}

// Crear un nuevo customer
const createACustomer = async (customerData) => {
  try {
    const newCustomer = new CustomerModel(customerData)

    const savedCustomer = await newCustomer.save()

    return savedCustomer

  } catch (error) {
    throw new Error(error)
  }
}

// Obtener un customer
const getACustomerById = async (id) => {
  try {

    const searchedCustomer = await CustomerModel.findById(id)

    return searchedCustomer

  } catch (error) {
    throw new Error(error)
  }
}

// Borrar un customer
const deleteACustomerById = async (id) => {
  try {

    await CustomerModel.deleteOne({ _id: id })

  } catch (error) {
    throw new Error(error)
  }
}

// Actualizar un customer completamente
const fullyUpdateACustomer = async (id, newData) => {
  try {

    const fullyUpdatedCustomer = await CustomerModel.findOneAndUpdate({ _id: id }, newData)

    return fullyUpdatedCustomer

  } catch (error) {
    throw new Error(error)
  }
}

// Acualizar parcialmente un customer
const updateACustomer = async (id, newData) => {
  try {

    await CustomerModel.updateOne({ _id: id }, newData)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getAllCustomers,
  createACustomer,
  getACustomerById,
  deleteACustomerById,
  fullyUpdateACustomer,
  updateACustomer
}