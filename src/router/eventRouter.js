const express = require('express')
const {
	getEvents,
	createEvent,
	getEventById,
	deleteEventById,
	fullyUpdateEvent,
	updateEvent,
} = require('../controllers/eventController')
const { validateData, validateId } = require('../middlewares/dataValidations')


const router = express.Router()

router.get('/', getEvents)

router.post('/', validateData, createEvent)

router.get('/:id', validateId, getEventById)

router.delete('/:id', validateId, deleteEventById)

router.put('/:id', validateData, fullyUpdateEvent)

router.patch('/:id', updateEvent)

module.exports = router