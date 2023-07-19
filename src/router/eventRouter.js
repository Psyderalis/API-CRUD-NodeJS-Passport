const express = require('express')
const {
	getEvents,
	createEvent,
	getEventById,
	deleteEventById,
	fullyUpdateEvent,
	updateEvent,
} = require('../controllers/eventController')

const router = express.Router()

router.get('/', getEvents)

router.post('/', createEvent)

router.get('/:id', getEventById)

router.delete('/:id', deleteEventById)

router.put('/:id', fullyUpdateEvent)

router.patch('/:id', updateEvent)

module.exports = router