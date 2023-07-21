const express = require('express')
const {
	getEvents,
	createEvent,
	getEventById,
	deleteEventById,
	fullyUpdateEvent,
	updateEvent,
} = require('../controllers/eventController')
const { createEventValidations } = require('../middlewares/dataValidations')


const router = express.Router()

router.get('/', getEvents)

router.post('/', createEventValidations, createEvent)

router.get('/:id', getEventById)

router.delete('/:id', deleteEventById)

router.put('/:id', fullyUpdateEvent)

router.patch('/:id', updateEvent)

module.exports = router