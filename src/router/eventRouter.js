const express = require('express')
const {
	getEvents,
	createEvent,
	getEventById,
	deleteEventById,
	fullyUpdateEvent,
	updateEvent,
} = require('../controllers/eventControllers')

const { validateData, validateId } = require('../middlewares/eventDataValidations')
const { authenticate } = require('../middlewares/auth')

const router = express.Router()

router.get('/', authenticate, getEvents)

router.post('/', validateData, createEvent)

router.get('/:id', authenticate, validateId, getEventById)

router.delete('/:id', validateId, deleteEventById)

router.put('/:id', validateData, fullyUpdateEvent)

router.patch('/:id', updateEvent)

module.exports = router