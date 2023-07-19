const eventService = require('../services/eventService');

// Obtener eventos
const getEvents = async (req, res) => {
  try {
    const events = await eventService.getAllEvents()
    res.status(200).json(events)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Crear un nuevo evento
const createEvent = async (req, res) => {
  try {
    const { name, category, date, description, image, place, price, capacity, assistance } = req.body

    const savedEvent = await eventService.createAnEvent({
      name,
      category,
      date,
      description,
      image,
      place,
      price,
      capacity,
      assistance,
    })

    if (savedEvent) {
      res.status(201).json({ message: 'Evento creado exitosamente.', savedEvent })

    } else {
      res.status(400).json({ message: 'No se pudo crear el evento.' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener un evento
const getEventById = async (req, res) => {
  try {
    const { id } = req.params

    // const searchedEvent = await EventModel.findById(id)
    const searchedEvent = await eventService.getAnEventById(id)

    res.status(200).json(searchedEvent)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Borrar un evento
const deleteEventById = async (req, res) => {
  try {
    const { id } = req.params

    await eventService.deleteAnEventById(id)

    res.status(200).json({ message: 'Evento eliminado exitosamente' })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Actualizar un evento completamente REVISAR MÉTODO MONGOOSE
const fullyUpdateEvent = async (req, res) => {
  try {
    const { id } = req.params

    if ((Object.keys(req.body).length === 0)) {
      res.status(400).json({ message: 'Cuerpo de la solicitud sin datos.' })

    } else {
      const { name, category, date, description, image, place, price, capacity, assistance } = req.body

      await eventService.fullyUpdateAnEvent(id, {
        name,
        category,
        date,
        description,
        image,
        place,
        price,
        capacity,
        assistance,
      })

      res.status(200).json({ message: 'Evento actualizado exitosamente' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Acualizar parcialmente un evento
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params

    if ((Object.keys(req.body).length === 0)) {
      res.status(400).json({ message: 'Cuerpo de la solicitud sin datos.' })

    } else {
      const { name, category, date, description, image, place, price, capacity, assistance } = req.body

      await eventService.updateAnEvent(id, {
        name,
        category,
        date,
        description,
        image,
        place,
        price,
        capacity,
        assistance,
      })

      res.status(200).json({ message: 'Evento actualizado exitosamente' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getEvents,
  createEvent,
  getEventById,
  deleteEventById,
  fullyUpdateEvent,
  updateEvent
}