// routes/associates.js
const express = require('express');
const router = express.Router();
const associatesController = require('../Controllers/AssociatesController')

// Create a new associate
router.post('/', associatesController.createAssociate);

// Get all associates
router.get('/', associatesController.getAllAssociates);

// Get a specific associate by ID
router.get('/:id', associatesController.getAssociateById);

// Update a specific associate by ID
router.put('/:id', associatesController.updateAssociateById);

// Delete a specific associate by ID
router.delete('/:id', associatesController.deleteAssociateById);

module.exports = router;
