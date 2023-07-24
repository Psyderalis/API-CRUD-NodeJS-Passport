const express = require('express')
const {
	getCustomers,
	createCustomer,
	getCustomerById,
	deleteCustomerById,
	fullyUpdateCustomer,
	updateCustomer,
} = require('../controllers/customerControllers.js')

const { validateCustomer } = require('../middlewares/auth.js');

const router = express.Router()

router.get('/', getCustomers)

router.post('/', validateCustomer, createCustomer)

router.get('/:id', getCustomerById)

router.delete('/:id', deleteCustomerById)

router.put('/:id', fullyUpdateCustomer)

router.patch('/:id', updateCustomer)

module.exports = router