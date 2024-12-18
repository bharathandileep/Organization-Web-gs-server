
const express = require('express');
const router = express.Router();
const employeesController = require('../Controllers/EmployeesController');

// Create a new employee
router.post('/', employeesController.createEmployee);

// Get all employees
router.get('/', employeesController.getAllEmployees);

// Get a specific employee by ID
router.get('/:id', employeesController.getEmployeeById);

// Update a specific employee by ID
router.put('/:id', employeesController.updateEmployeeById);

// Delete a specific employee by ID
router.delete('/:id', employeesController.deleteEmployeeById);

module.exports = router;
