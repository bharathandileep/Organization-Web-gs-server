
const mongoose = require('mongoose');
const EmployeesSchema = require('../Schemas/EmployeesSchema');
const EmployeesModel = mongoose.model('Employees', EmployeesSchema);  // Use the imported schema
module.exports = EmployeesModel;
