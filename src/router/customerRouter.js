const express = require('express')
const {
	getCustomers,
	createCustomer,
	getCustomerById,
	deleteCustomerById,
	fullyUpdateCustomer,
	updateCustomer,
} = require('../controllers/customerControllers.js')

const { validateUserData } = require('../middlewares/auth.js');

const router = express.Router()

router.get('/', getCustomers)

router.post('/', validateUserData, createCustomer)

router.get('/:id', getCustomerById)

router.delete('/:id', deleteCustomerById)

router.put('/:id', validateUserData, fullyUpdateCustomer)

router.patch('/:id', updateCustomer)

module.exports = router