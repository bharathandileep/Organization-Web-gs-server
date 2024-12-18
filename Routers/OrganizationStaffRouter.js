// Routes/OrganizationStaffRoutes.js
const express = require('express');
const router = express.Router();
const OrganizationStaffController = require('../Controllers/OrganizationStaffController');

// Create a new organization staff
router.post('/', OrganizationStaffController.createStaff);

// Get all organization staffs
router.get('/', OrganizationStaffController.getAllStaffs);

// Get an organization staff by ID
router.get('/:id', OrganizationStaffController.getStaffById);

// Update an organization staff by ID
router.put('/:id', OrganizationStaffController.updateStaffById);

// Delete an organization staff by ID
router.delete('/:id', OrganizationStaffController.deleteStaffById);

module.exports = router;
