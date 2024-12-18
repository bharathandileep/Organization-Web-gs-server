
// const Employees = require('../Models/EmployeesModel');

// // Function to check for duplicate employee_id
// const checkDuplicateEmployeeId = async (employee_id) => {
//     const existingEmployee = await Employees.findOne({ employee_id });
//     return existingEmployee ? true : false;
// };

// // Create a new employee
// exports.createEmployee = async (req, res) => {
//     try {
//         const { employee_id } = req.body;

//         // if (await checkDuplicateEmployeeId(employee_id)) {
//         //     return res.status(400).json({ message: 'employee_id must be unique' });
//         // }

//         const newEmployee = new Employees(req.body);
//         const savedEmployee = await newEmployee.save();
//         res.status(201).json(savedEmployee);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// // Get all employees
// exports.getAllEmployees = async (req, res) => {
//     try {
//         const employees = await Employees.find();
//         res.json(employees);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Get an employee by ID
// exports.getEmployeeById = async (req, res) => {
//     try {
//         const employee = await Employees.findById(req.params.id);
//         if (!employee) return res.status(404).json({ message: 'Employee not found' });
//         res.json(employee);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Update an employee by ID
// exports.updateEmployeeById = async (req, res) => {
//     try {
//         const updatedEmployee = await Employees.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
//         res.json(updatedEmployee);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// // Delete an employee by ID
// exports.deleteEmployeeById = async (req, res) => {
//     try {
//         const deletedEmployee = await Employees.findByIdAndDelete(req.params.id);
//         if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
//         res.json({ message: 'Employee deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };
const Employees = require("../Models/EmployeesModel");
const { successResponse, errorResponse } = require("../utils/responseFormatter");

// Function to check for duplicate employee_id
const checkDuplicateEmployeeId = async (employee_id) => {
  const existingEmployee = await Employees.findOne({ employee_id });
  return existingEmployee ? true : false;
};

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const { employee_id } = req.body;

    // if (await checkDuplicateEmployeeId(employee_id)) {
    //     return res.status(400).json(errorResponse(400, 'employee_id must be unique'));
    // }

    const newEmployee = new Employees(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(successResponse(201, "Employee created successfully", savedEmployee));
  } catch (err) {
    res.status(400).json(errorResponse(400, err.message));
  }
};

// exports.getAllEmployees = async (req, res) => {
//   try {
//     const employees = await Employees.find();
//     res.json(successResponse(200, "Employees retrieved successfully", employees));
//   } catch (err) {
//     res.status(500).json(errorResponse(500, err.message));
//   }
// };
exports.getAllEmployees = async (req, res) => {
  try {
    // Get page and limit from query parameters, with default values
    const page = parseInt(req.query.page, 10) || 1; // Default to page 1
    const limit = parseInt(req.query.limit, 10) || 100; // Default to 4 items per page
    const skip = (page - 1) * limit;

    // Count total number of employees
    const totalItems = await Employees.countDocuments();

    // Fetch the employees for the current page
    const employees = await Employees.find().skip(skip).limit(limit);

    // Calculate total number of pages
    const totalPages = Math.ceil(totalItems / limit);

    // Respond with paginated data
    res.json({
      status: '200 OK',
      message: 'Employees retrieved successfully',
      data: employees,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).json(errorResponse(500, err.message));
  }
};


// Get an employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employees.findById(req.params.id);
    if (!employee) return res.status(404).json(errorResponse(404, "Employee not found"));
    res.json(successResponse(200, "Employee retrieved successfully", employee));
  } catch (err) {
    res.status(500).json(errorResponse(500, err.message));
  }
};

// Update an employee by ID
exports.updateEmployeeById = async (req, res) => {
  try {
    const updatedEmployee = await Employees.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedEmployee) return res.status(404).json(errorResponse(404, "Employee not found"));
    res.json(successResponse(200, "Employee updated successfully", updatedEmployee));
  } catch (err) {
    res.status(400).json(errorResponse(400, err.message));
  }
};

// Delete an employee by ID
exports.deleteEmployeeById = async (req, res) => {
  try {
    const deletedEmployee = await Employees.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) return res.status(404).json(errorResponse(404, "Employee not found"));
    res.json(successResponse(200, "Employee deleted successfully"));
  } catch (err) {
    res.status(500).json(errorResponse(500, err.message));
  }
};
