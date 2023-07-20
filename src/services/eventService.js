const EventModel = require('../models/Event')

// Obtener eventos
const getAllEvents = async () => {
  try {
    const events = await EventModel.find()
    return events

  } catch (error) {
    throw new Error(error)
  }
}

// Crear un nuevo evento
const createAnEvent = async (eventData) => {
  try {
    const newEvent = new EventModel(eventData)

    const savedEvent = await newEvent.save()

    return savedEvent

  } catch (error) {
    throw new Error(error)
  }
}

// Obtener un evento
const getAnEventById = async (id) => {
  try {

    const searchedEvent = await EventModel.findById(id)

    return searchedEvent

  } catch (error) {
    throw new Error(error)
  }
}

// Borrar un evento
const deleteAnEventById = async (id) => {
  try {

    await EventModel.deleteOne({ _id: id })

  } catch (error) {
    throw new Error(error)
  }
}

// Actualizar un evento completamente
const fullyUpdateAnEvent = async (id, newData) => {
  try {

    const fullyUpdatedEvent = await EventModel.findOneAndUpdate({ _id: id }, newData)

    return fullyUpdatedEvent

  } catch (error) {
    throw new Error(error)
  }
}

// Acualizar parcialmente un evento
const updateAnEvent = async (id, newData) => {
  try {

    await EventModel.updateOne({ _id: id }, newData)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getAllEvents,
  createAnEvent,
  getAnEventById,
  deleteAnEventById,
  fullyUpdateAnEvent,
  updateAnEvent
}