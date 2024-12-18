// Routes/PaymentRoutes.js
const express = require('express');
const router = express.Router();
const PaymentController = require('../Controllers/PaymentController');

// Create a new payment
router.post('/', PaymentController.createPayment);

// Get all payments
router.get('/', PaymentController.getAllPayments);

// Get a payment by ID
router.get('/:id', PaymentController.getPaymentById);

// Update a payment by ID
router.put('/:id', PaymentController.updatePaymentById);

// Delete a payment by ID
router.delete('/:id', PaymentController.deletePaymentById);

module.exports = router;
