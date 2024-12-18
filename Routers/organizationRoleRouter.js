// routes/organizationRoles.js
const express = require('express');
const router = express.Router();
const organizationRoleController = require('../Controllers/OrganizationRoleController');

// Create a new organization role
router.post('/', organizationRoleController.createRole);

// Get all organization roles
router.get('/', organizationRoleController.getAllRoles);

// Get a specific organization role by ID
router.get('/:id', organizationRoleController.getRoleById);

// Update a specific organization role by ID
router.put('/:id', organizationRoleController.updateRoleById);

// Delete a specific organization role by ID
router.delete('/:id', organizationRoleController.deleteRoleById);

module.exports = router;
